// utils/events-localization.js


export function nowDateInEnglishUnitTimezone() {

    // Date-Objekt fuer aktuelle Zeit erstellen
    const now = new Date();

    // Format fuer Ausgabe Monday 1. J
    const nowDate = now.toLocaleTimeString('en-GB', 
        {
        weekday: 'long', // ausgeschrieben
        year: 'numeric', // JJJJ
        month: 'long',   // ausgeschrieben
        day: 'numeric'   // ohne fuehrende Null
        }
    )

    const timeZone = Intl.DateTimeFormat('en-GB', { timeZoneName: 'short' }).formatToParts(now)
    .find(part => part.type === 'timeZoneName').value;

    // Formatierte Zeit mit "h" am Ende
    return `${nowDate}  (${timeZone})`;
}

export function nowTimeInEnglishUnitTimezone() {
    
    // Date-Objekt fuer aktuelle Zeit erstellen, Ausgabe 00:00:00 CET
    const now = new Date();
    
    const nowTime = now.toLocaleTimeString('en-GB', 
        {
            hour: 'numeric', 
            minute: 'numeric', 
            hourCycle: 'h23',
            timeZone: 'Europe/Berlin'  // = CET, MEZ
        }
    )

    const timeZone = Intl.DateTimeFormat('en-GB', { timeZoneName: 'short' }).formatToParts(now)
    .find(part => part.type === 'timeZoneName').value;

    // Formatierte Zeit mit "h" am Ende
    return `${nowTime}h (${timeZone})`;
}

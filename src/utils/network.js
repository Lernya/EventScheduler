const registrate = async (regData) => {
  try {
    // Make a POST request with the registration data
    const response = await fetch("http://localhost:3001/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(regData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Registration successful:", data);
      return true;
    } else {
      const errorData = await response.json();
      console.error("Registration failed:", errorData);
      return false;
    }
  } catch (error) {
    console.error("Error occurred during registration:", error);
    // Handle the error, display a message to the user, etc.
  }
};

const authorize = async (authData) => {
  try {
    // Make a POST request with the registration data
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Authorization successful:", data);

      // save token in local storage
      localStorage.setItem("authToken", data.token);
      return true;
    } else {
      const errorData = await response.json();
      console.error("Authorization failed:", errorData);
      return false;
    }
  } catch (error) {
    console.error("Error occurred during authorization:", error);
    // Handle the error, display a message to the user, etc.
  }
};

export { authorize, registrate };

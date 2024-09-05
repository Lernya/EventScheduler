const registrate = async (regData) => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + "/api/users/", {
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
    return false;
  }
};

const authorize = async (authData) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
      }
    );

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      return true;
    } else {
      const errorData = await response.json();
      console.error("Authorization failed:", errorData);
      return false;
    }
  } catch (error) {
    console.error("Error occurred during authorization:", error);
    return false;
  }
};

export { authorize, registrate };

function senddata() {
  
    const form = document.getElementById("login-form");
      const email = document.getElementById("email").value;
      const password = document.getElementById("email").value;
      const data = {
        username: email,
        password: password,
      };

      fetch("http://localhost:3000/useradd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((responseData) => {
          // Handle the API response data here (e.g., show success message or error)
        })
        .catch((error) => {
          console.log(error);// Handle any errors that occurred during the API call
        });
  }
// Check if we are on register page
if (document.getElementById("registerForm")) {
  document
    .getElementById("registerForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      let user = { name, email, password };

      // AJAX POST (Simulation using XMLHttpRequest)
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onload = function () {
        if (xhr.status === 201 || xhr.status === 200) {
          // Save to localStorage
          let users = JSON.parse(localStorage.getItem("users")) || [];
          users.push(user);
          localStorage.setItem("users", JSON.stringify(users));

          alert("User Registered Successfully!");

          document.getElementById("registerForm").reset();
        }
      };

      xhr.send(JSON.stringify(user));
    });
}

// Check if we are on users page
if (document.getElementById("userTable")) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let table = document.getElementById("userTable");

  users.forEach((user) => {
    let row = `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
        </tr>`;
    table.innerHTML += row;
  });
}

"use strick";
// read me

function toggleText() {
    let dots = document.getElementById("dots");
    let hiddenText = document.getElementById("hiddenText");
    let buttonText = document.querySelector('.readMore');
  
    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
      hiddenText.style.display = "inline";
      buttonText.innerHTML = "Read less";
      dots.style.display = "none";
    } else {
      hiddenText.style.display = "none";
      buttonText.innerHTML = "Read More";
      dots.style.display = "inline";
    }
  }
  

  // Function to fetch user data from JSONPlaceholder API
function fetchUserData() {
  return axios.get('https://jsonplaceholder.typicode.com/users');
}

// Function to display user data
function displayUsers(users) {
  const userListElement = document.getElementById('users-list');
  userListElement.innerHTML = ''; // Clear previous search results

  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `Name: ${user.name}, Email: ${user.email}`;
    userListElement.appendChild(li);
  });
}

// Function to search for users
function searchUsers() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();

  fetchUserData()
    .then(response => {
      const users = response.data;

      // Filter users based on search term
      const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchTerm);
      });

      displayUsers(filteredUsers);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
}

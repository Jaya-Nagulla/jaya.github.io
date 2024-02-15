function toggleMenu()
{
  const menu=document.querySelector(".menu-links");
  const icon=document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}

document.addEventListener('DOMContentLoaded', (event) => {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    // Save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.removeItem('darkMode');
    }
  };
  
  // Event listener for the toggle button
  darkModeToggle.addEventListener('click', toggleDarkMode);
  
  // Check local storage for dark mode preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }


});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed.");

  // Function to dynamically load components
  const loadComponent = (selector, file, callback) => {
    const element = document.querySelector(selector);
    if (!element) {
      console.error(`Error: Element with selector "${selector}" not found.`);
      return;
    }

    fetch(file)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${file}: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        element.innerHTML = html;
        if (callback) callback(); // Ensure the callback runs after loading
        console.log(`Successfully loaded component: ${file}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Function to highlight the active link
  const highlightActiveLink = () => {
    const currentPage = window.location.pathname.split("/").pop().toLowerCase();
    const navbarLinks = document.querySelectorAll(".navbar-links a");

    navbarLinks.forEach((link) => {
      const linkPath = link.getAttribute("href").toLowerCase();
      if (linkPath === currentPage) {
        link.classList.add("active");
        console.log(`Highlighted active link: ${linkPath}`);
      }
    });
  };

  // Dynamically set the year in the footer
  const setYear = () => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    } else {
      console.error("Year element not found in the DOM.");
    }
  };

  // Load footer dynamically (you can add other components if necessary)
  loadComponent("#footer", "components/footer.html", setYear);

  // Highlight active links after the navbar is loaded dynamically
  loadComponent("#navbar", "components/navbar.html", () => {
    highlightActiveLink();
  });
});

// Show sidebar
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

// Hide sidebar
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

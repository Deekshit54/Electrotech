// Dropdown menu open/close logic for navigation

document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function (dropdown) {
    var toggle = dropdown.querySelector('.dropdown-toggle');
    var menu = dropdown.querySelector('.dropdown-content');

    if (toggle && menu) {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        // Close other open dropdowns
        dropdowns.forEach(function (other) {
          if (other !== dropdown) {
            other.classList.remove('open');
          }
        });
        // Toggle this dropdown
        dropdown.classList.toggle('open');
      });
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    var isDropdown = false;
    dropdowns.forEach(function (dropdown) {
      if (dropdown.contains(e.target)) {
        isDropdown = true;
      }
    });
    if (!isDropdown) {
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove('open');
      });
    }
  });
});

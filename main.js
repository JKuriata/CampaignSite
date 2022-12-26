const darkModeClassLabel = "dark-mode";
const darkModeStorageLabel = "dark-mode-enabled";

const isDarkModeEnabled = localStorage.getItem(darkModeStorageLabel) ?? 'false';
if (isDarkModeEnabled === 'true') {
  document.body.classList.add(darkModeClassLabel);
}

function DarkMode() {
    var element = document.body;
    element.classList.toggle(darkModeClassLabel);

    const isDarkModeEnabled = element.classList.contains(darkModeClassLabel);
    localStorage.setItem(darkModeStorageLabel, isDarkModeEnabled);
  }
function showTab(tabId) {
  // Hide all tab contents
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Deactivate all tab buttons
  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Show the clicked tab and activate its button
  const activeTab = document.getElementById(tabId);
  activeTab.classList.add("active");

  const activeButton = Array.from(buttons).find(
    (button) => button.textContent.trim() === tabId.slice(-2) + "p"
  );
  activeButton.classList.add("active");
}

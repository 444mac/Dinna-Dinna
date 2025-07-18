document.addEventListener("DOMContentLoaded", () => {
  const meals = {
    breakfast: ["Pancakes", "Eggs & Toast", "Cereal", "Oatmeal", "Bagel & Cream Cheese", "Smoothie", "Fruit Bowl", "French Toast", "Breakfast Burrito", "Waffles", "Granola & Yogurt", "Scrambled Eggs", "Avocado Toast", "Breakfast Sandwich", "Muffins", "Croissant", "Toaster Pastries", "Biscuits & Gravy", "Hash Browns", "Quiche"],
    dinner: ["Spaghetti", "Tacos", "Grilled Cheese", "Burgers", "Pizza", "Chicken Stir Fry", "Mac & Cheese", "Salmon & Rice", "Soup & Bread", "BBQ Chicken", "Fajitas", "Meatloaf", "Sloppy Joes", "Baked Potatoes", "Chili", "Hot Dogs", "Enchiladas", "Casserole", "Shrimp Pasta", "Quesadillas"]
  };

  let mode = "dinner";
  const app = document.getElementById("app");
  const loadingScreen = document.getElementById("loading-screen");
  const mealCard = document.getElementById("meal-card");
  const revealButton = document.getElementById("reveal");
  const modeToggle = document.getElementById("mode-toggle");
  const modeLabel = document.getElementById("mode-label");
  const tagline = document.getElementById("tagline");

  setTimeout(() => {
    loadingScreen.style.display = "none";
    app.classList.remove("hidden");
  }, 2000);

  revealButton.addEventListener("click", () => {
    const list = meals[mode];
    const pick = list[Math.floor(Math.random() * list.length)];
    mealCard.textContent = `Winner winner ${pick} dinner!`;
  });

  modeToggle.addEventListener("click", () => {
    mode = mode === "dinner" ? "breakfast" : "dinner";
    modeLabel.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
    tagline.textContent = mode === "dinner" ? "Dinna dinna what's fa dinna?" : "Rise n shine breakfast time!";
  });
});
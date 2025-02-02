   // Dark Mode Toggle Script
   const darkModeSwitch = document.getElementById("darkModeSwitch");
   const body = document.body;

   darkModeSwitch.addEventListener("change", () => {
     body.classList.toggle("dark-mode");
     body.classList.toggle("light-mode");
   });

   // Dynamically generate emojis
   const emojiContainer = document.querySelector('.background-animation');
   const emojis = ['🍪', '🍩', '🍎', '🍕', '🍣', '🍤', '🍇', '🍉', '🍹'];

   function createEmoji() {
     const emoji = document.createElement('div');
     emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
     emoji.className = 'emoji';
     emoji.style.left = `${Math.random() * 100}%`; // Random horizontal position
     emoji.style.animationDelay = `${Math.random() * 3}s`; // Stagger animations
     emojiContainer.appendChild(emoji);

     // Remove emoji after animation ends
     setTimeout(() => emoji.remove(), 15000); // Match animation duration
   }

   // Create emojis one by one every 2 seconds
   setInterval(createEmoji, 2000);




  //  ----------------------------------------------- 

  
const searchBox = document.querySelector('.searchbox');  
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');

//Function to get recipes
const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "<h2>Fetching Recipes...</h2>";
    try {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const response = await data.json();
    
        recipeContainer.innerHTML = "";
        if (response.meals) {  // Check if meals exist
            response.meals.forEach(meal => { 
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipe');
                recipeDiv.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <h3>${meal.strMeal}</h3>
                    <p><span>${meal.strArea}</span> Dish</p>
                    <p>Belongs to <span>${meal.strCategory}</span> Category</p>
                `;
                const button = document.createElement('button');
                button.textContent = "View Recipe";
                recipeDiv.appendChild(button);
        
                //Adding EventListener to recipe button
                button.addEventListener('click', () => {
                    openRecipePopup(meal);
                });
        
                recipeContainer.appendChild(recipeDiv);
            });
        } else {
            recipeContainer.innerHTML = "<h2>No recipes found</h2>";  // Handle no results
        }
    } 
    catch (error) {
        recipeContainer.innerHTML = "<h2>Error in Fetching Recipes...</h2>";
    }
}

// Function to fetch ingredients and measurements
const fetchIngredients = (meal) => {
    let ingredientsList = "";
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];  
        if (ingredient) {
            const measure = meal[`strMeasure${i}`];
            ingredientsList += `<li>${measure} ${ingredient}</li>`;
        } else {
            break;
        }
    }
    return ingredientsList;
}

const openRecipePopup = (meal) => {
    recipeDetailsContent.innerHTML = `
    <h2 class="recipeName">${meal.strMeal}</h2>
    <h3>Ingredients:</h3>
    <ul class="ingredientList">${fetchIngredients(meal)}</ul>
    <div class="recipeInstructions">
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
    </div>
    `;
    recipeDetailsContent.parentElement.style.display = "block";
}

recipeCloseBtn.addEventListener('click', () => {
    recipeDetailsContent.parentElement.style.display = "none";
});

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim(); 
    fetchRecipes(searchInput);
});




   
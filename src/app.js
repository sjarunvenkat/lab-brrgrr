// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById("cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.getElementById("tomato");
  state.Tomatoes
    ? (tomatoes.style.display = "inherit")
    : (tomatoes.style.display = "none");
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.getElementById("onion");
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = () => {
  state.Cheese = !state.Cheese;
  renderAll();
};
// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = () => {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};
// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = () => {
  state.Onions = !state.Onions;
  renderAll();
};
// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = () => {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  document.querySelector(".btn-patty").classList.toggle("active", state.Patty);
  document
    .querySelector(".btn-cheese")
    .classList.toggle("active", state.Cheese);
  document
    .querySelector(".btn-tomatoes")
    .classList.toggle("active", state.Tomatoes);
  document
    .querySelector(".btn-onions")
    .classList.toggle("active", state.Onions);
  document
    .querySelector(".btn-lettuce")
    .classList.toggle("active", state.Lettuce);
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  document.getElementById("items-patty").style.visibility = state.Patty
    ? "visible"
    : "hidden";
  document.getElementById("items-cheese").style.visibility = state.Cheese
    ? "visible"
    : "hidden";
  document.getElementById("items-tomatoes").style.visibility = state.Tomatoes
    ? "visible"
    : "hidden";
  document.getElementById("items-onions").style.visibility = state.Onions
    ? "visible"
    : "hidden";
  document.getElementById("items-lettuce").style.visibility = state.Lettuce
    ? "visible"
    : "hidden";
}
//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice() {
  var price = document.querySelector(".price-details");

  const patty_price = 50;
  const cheese_price = 30;
  const onion_price = 30;
  const tomato_price = 25;
  const lettuce_price = 15;

  var selected_price =
    20 +
    state.Patty * patty_price +
    state.Cheese * cheese_price +
    state.Onions * onion_price +
    state.Tomatoes * tomato_price +
    state.Lettuce * lettuce_price;

  price.innerText = "INR " + selected_price;
}

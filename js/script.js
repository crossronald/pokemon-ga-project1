//What I want to do is fill out two pokemon names, click a button, and get back two pokemon height values

//I want to be able to decide if bigger wins or smaller wins

//I want to be able to reset the game

//I want to display the sprites of the pokemon names entered

//I want the name of the chosen pokemon to populate at the top of page2

//I want the height value of the pokemon to display underneath each one

//I want the winner to be declared on page 2

//I want to make it so that if they enter something that is not the name of a pokemon, the box prompts them to try again

//I need to decide what happens in a tie

//I need to animate the screen to transition from page one to page two

//Constant's 
const baseURL = 'https://pokeapi.co/api/v2/pokemon';
//Apps state (variables)
let userInput1;
let pokemon;
let pokemonDetail;
//cached element references (Dom Manimpulation)
const $divSelector = $('.selector');
const $divButtonPress = $('.button-press');
const $divInputBox1 = $('.input-box1');
const $divInputBox2 = $('.input-box2');
const $divPage2Name1 = $('.page2-name1');
const $divPage2Name2 = $('.page2-name2');
const $divDisplayWinner = $('.display-winner');
const $divSprite1 = $('.sprite1');
const $divSprite2 = $('.sprite2');
const $divHeightValue1 = $('.height-value1');
const $divHeightValue2 = $('.height-value2');
const $divResetButton = $('.reset-button');
//event listeners
$divSelector.on('click', handleSelector);
$divButtonPress.on('click', handleButtonPress);
$divInputBox1.on('click', handleInputBox1);
$divInputBox2.on('click', handleInputBox2);
$divPage2Name1.on('click', handlePage2Name1);
$divPage2Name2.on('click', handlePage2Name2);
$divDisplayWinner.on('click', handleDisplayWinner);
$divSprite1.on('click', handleSprite1);
$divSprite2.on('click', handleSprite2);
$divHeightValue1.on('click', handleHeightValue1);
$divHeightValue2.on('click', handleHeightValue2);
$divResetButton.on('click', handleResetButton);
//functions
function handleSelector(event) {
    console.log(event);
}

function handleButtonPress(event){
    console.log(event);
}

function handleInputBox1(event){
    console.log(event);
}

function handleInputBox2(event){
    console.log(event);
}

function handlePage2Name1(event){
    console.log(event);
}

function handlePage2Name2(event){
    console.log(event);
}

function handleDisplayWinner(event){
    console.log(event);
}

function handleSprite1(event){
    console.log(event);
}

function handleSprite2(event){
    console.log(event);
}

function handleHeightValue1(event){
    console.log(event);
}

function handleHeightValue2(event){
    console.log(event);
}

function handleResetButton(event){
    console.log(event);
}

//Make the data available as soon as the app loads
getPokemon();
//Get Pokemon Data Function
function getPokemon() {
    $.ajax(baseURL)
    .then(
        function(data) {
        pokemon = data.results;
    }, function(error) {
        console.log("Error: ", error);
    });
}







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

//Apps state (variables)
let userInput1;
let userInput2;
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

$divButtonPress.on('click', handleButtonPress);
$divResetButton.on('click', handleResetButton);
//functions

function handleButtonPress(event){
    getPokemon(event);
    return event;
}

function handleResetButton(event){
    console.log(event);
}

//Make the data available as soon as the app loads

//Get Pokemon Data Function
let player1, player2, input1, input2;
const $userInput1 = $('.pokebox-1'); // input tag for first pokemon
const $userInput2 = $('.pokebox-2'); // input tag for second pokemon


function getPokemon() {
   input1 = $userInput1.val();
   input2 = $userInput2.val();
   $.when(
       $.ajax({url: "https://pokeapi.co/api/v2/pokemon/" + input1}),
       $.ajax({url: "https://pokeapi.co/api/v2/pokemon/" + input2}),
      ).then(
         function(first, second) {
            player1 = first[0];
            player2 = second[0];
       }, function(error) {
          console.log("Something Went Wrong: ", error);
       });
}
/*Generate the sprites of that data as an html element for the classe sprite1*/
function generateHTML1() {
    var image = `<img src=${player1.sprites.front_default} alt="pokemon">`;
    return image;
    }


    /*Generate the sprites of that data as an html element for the classes sprite1 and sprite2*/
function generateHTML2() {
        var image =`<img src=${player2.sprites.front_default} alt="pokemon">`;
        return image;
        };
    

    function render() {
        const htmlImage1 = generateHTML1();
        $divSprite1.html(htmlImage1);
        const htmlImage2 = generateHTML2();
        $divSprite2.html(htmlImage2);

        const playerOneString = `${player1.name[0].toUpperCase()}${player1.name.split("").splice(1).join("")}`
        const playerTwoString = `${player2.name[0].toUpperCase()}${player2.name.split("").splice(1).join("")}`

        $divPage2Name1.html(`<h2>${playerOneString}</h2>`)
        $divPage2Name2.html(`<h2>${playerTwoString}</h2>`)

        $divHeightValue1.html(`<h6>${player1.height}</h6> ft`)
        $divHeightValue2.html(`<h6>${player2.height}</h6> ft`)
    }

   
//I need to add a function that will replace the text of classes page2-name1 and page2-name2 with dynamic data
// function nameReturn1(returnName1) {
//     if(/*the name the user entered for name 1 matches the name of a pokemon in the data*/) {
    // /*replace the text in class page2-name1 with that name*/
    // }
    // if(/*the name the user entered for the name 1 matches the name of a pokemon in the data*/) {
        /*replace the text in the class height-value1 with the height value of that pokemon*/
//     }
// }

// function nameReturn2(returnName2) {
    // if(/*the name the user entered for name 2 matches the name of a pokemon in the data*/) {
        /*replace the text in class page2-name2 with that name*/
    // }
    // if(/*the name the user entered for the name 2 matches the name of a pokemon in the data*/) {
        /*replace the text in the class height-value2 with the height value of that pokemon*/
//     }
// }
// }

//I need to add a function that will declare a winner based on the state of the option box. if "bigger pokemon wins" is selected then the pokemon with the bigger height wins and vice versa.
// function declareWinner(winnerName) {
//     if(/* taller pokemon === true*/) {
        /*put the name of the tallest pokemon in the display-winner class*/
    // } else if (/*shorter pokemon === true*/{
        /*put the name of the shorter pokemon in the display-winner class*/
    // } else {
//         /*display the text "its a tie" in the display-winner class*/
//     }
// }
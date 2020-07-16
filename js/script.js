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
const $realSelector = $('.realSelector');
const $bigSelectee = $('div.selector > select');
const $divButtonPress = $('.button-press');
const $divPage2Name1 = $('.page2-name1');
const $divPage2Name2 = $('.page2-name2');
const $divDisplayWinner = $('.display-winner');
const $divSprite1 = $('.sprite1');
const $divSprite2 = $('.sprite2');
const $divHeightValue1 = $('.height-value1');
const $divHeightValue2 = $('.height-value2');
const $divResetButton = $('.reset-button');
const $firstPage = $('.first-page');
const $secondPage = $('.second-page');
//event listeners

$divButtonPress.on('click', handleButtonPress);

$divResetButton.on('click', handleResetButton);
$bigSelectee.on('click', randomNoInput);
//functions



function randomNoInput (event) {
        randomBattleInit(event);
        return event;
}
function handleButtonPress(event){
    getPokemon(event);
    return event;
}



function handleResetButton(event){
    resetThemAll();
    return event;
}

//Make the data available as soon as the app loads

//Get Pokemon Data Function
let player1, player2, input1, input2;
const $userInput1 = $('.pokebox-1'); // input tag for first pokemon
const $userInput2 = $('.pokebox-2'); // input tag for second pokemon


function getPokemon() {
    var $option_selected = $('.realSelector option:selected').text();

    if($option_selected === 'Generate Random Battle') {
        input1 = (1 + Math.floor(Math.random() * 807));
        input2 = (1 + Math.floor(Math.random() * 807));
    } else {
   input1 = $userInput1.val();
   input2 = $userInput2.val();
}
   $.when(
       $.ajax({url: "https://pokeapi.co/api/v2/pokemon/" + input1}),
       $.ajax({url: "https://pokeapi.co/api/v2/pokemon/" + input2}),
      ).then(
         function(first, second) {
            player1 = first[0];
            player2 = second[0];
            $userInput1.val("");
            $userInput2.val("");
            render();
            getSelectedOption();
            eraseItAll();
            playMusic();
       }, function(error) {
            alert("One of those Pokemon names doesn't exist yet! Please try again.");
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

        $divHeightValue1.html(`<h6>${Math.round(player1.height/10 * 3.28084 *10)/10}</h6> ft`)
        $divHeightValue2.html(`<h6>${Math.round(player2.height/10 * 3.28084 *10)/10}</h6> ft`)
    }
        
   
    function getSelectedOption() {
        var $selected_option = $('.realSelector').val()
        var winner;
        if($selected_option === 'Bigger' && player1.height > player2.height || $selected_option === 'random' && player1.height > player2.height) {
            winner = player1.name;
         } else if ($selected_option === 'Bigger' && player2.height > player1.height || $selected_option === 'random' && player2.height > player1.height) {
             winner =player2.name;
         } else if ($selected_option !== 'Bigger' && player1.height < player2.height || $selected_option === 'random' && player1.height < player2.height) {
            winner = player1.name;
         } else if ($selected_option !== 'Bigger' && player2.height < player1.height || $selected_option === 'random' && player2.height < player1.height) {
             winner = player2.name
         } else {
            winner = "It's a tie!"
            $divDisplayWinner.html(` <h1>It's a tie!</h1>`)
         }
         
         if(winner !== "It's a tie!") {
             $divDisplayWinner.html(` <h1>${winner[0].toUpperCase()}${winner.split("").splice(1).join("")} is the Winner!</h1>`)
     }
    }          
   function resetThemAll (){
            window.location.href = window.location.href;
   }


function randomBattleInit () {
setTimeout(function randomBattle(){ 
    var $option_selected = $('.realSelector option:selected').text();
    if($option_selected === 'Generate Random Battle'){
        
        $('.pokebox-1').prop('disabled', true);
        $('.pokebox-2').prop('disabled', true);
    } 
}, 1500);
}


function eraseItAll () {
    // $firstPage.toggleClass('fadeOut')
    $firstPage.css('display', 'none')
}

function playMusic () {
var audio = $("#mysoundclip")[0];
      audio.play();
}
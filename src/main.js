import {Country, Disease, randCountries, gameBoard} from './../src/pandemic.js';
import './styles.css';
import $ from 'jquery';

$(document).ready(function(){

  let gameBoard = randCountries();
  let userDisease = new Disease("Nothing", "NoType");
  let selected = 0;

  function redOnInfect() {
    let interval = setInterval(() =>  {
      for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i].infected === true){
          $("#" + i).addClass("infect");
        }
      }
    }, 1000);
  }

  function checkForInfect() {
    let interval = setInterval(() => {
      for(let i = 0; i < gameBoard.length; i++){
        if (gameBoard[i].infectedPop >= gameBoard[i].pop/4) {
          let next = infectNext();
          gameBoard[next].setInfected(userDisease)
        }
      }
    }, 1000);
  }

  function isWithinArray(value) {
    if ((value + selected >= 0) && (value + selected <= 23)){
      return true;
    } else {
      return false;
    }
  }

  function infectNext(selected) {
    let next = [1,-1,6,-6,5,-5,7,-7];
    let filtered = next.filter(isWithinArray);
    let nextInfected = Math.floor(Math.random()* filtered.length);
		return filtered[nextInfected];
  }


  $('#disease-form').submit(function(event){
    event.preventDefault();
    $("#disease-form-panel").slideToggle()
    let name = $('#name').val();
    let type = $('#disease-type').val();
    userDisease.name = name;
    userDisease.type = type;
    userDisease.setStats();
    $("#disease-name-display").text(userDisease.name);
    $("#disease-infect-display").text("Infectivity: " + userDisease.infect + "/10");
    $("#disease-dist-display").text("Infect Distance: " + userDisease.dist + "/10");
    $("#disease-resist-display").text("Resistance: " + userDisease.resist + "/10");
    $("#disease-type-display").text("Type: " + userDisease.type);
  })

  $(".game").click(function(){
    let selected = $(this).val();
    gameBoard[selected].setInfected(userDisease);
    checkForInfect();
    redOnInfect();

  })


})

import {Country, Disease, randCountries} from './../src/pandemic.js';
import './styles.css';
import $ from 'jquery';

$(document).ready(function(){
  $('#disease-form').submit(function(event){
    event.preventDefault();
    $("#disease-form-panel").slideToggle()
    let name = $('#name').val();
    let type = $('#disease-type').val();
    let userDisease = new Disease(name, type);
    userDisease.setStats();
    $("#disease-name-display").text(userDisease.name);
    $("#disease-infect-display").text("Infectivity: " + userDisease.infect + "/10");
    $("#disease-dist-display").text("Infect Distance: " + userDisease.dist + "/10");
    $("#disease-resist-display").text("Resistance: " + userDisease.resist + "/10");
    $("#disease-type-display").text("Type: " + userDisease.type);
  })
})

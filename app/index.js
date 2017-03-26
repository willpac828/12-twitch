import 'whatwg-fetch';
import addGamesToList from './twitch/add-games-to-List';
// import 'data.js';
import data from './data';
// Import `addGamesToList` from `twitch/add-games-to-list`

// Look up a `ul` element with a class called `results`
const list = document.querySelector('.middle');

addGamesToList(list, data.top);
// Add games to the results list based on the data from `data.json`


// YOU CANT FORGET ABOUT INDEX.JS THATS WHERE ALL THE JAVASCRIPT WORK HAPPENS

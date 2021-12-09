// import functions and grab DOM elements
const form = document.querySelector('form');
const closeButton = document.querySelector('#close-poll');
const questionELem = document.querySelector('#poll-question');
const optionATitleElem = document.querySelector('#option-a-title');
const optionBTitleElem = document.querySelector('#option-b-title');
const optionAVotesElem = document.querySelector('#option-a-votes');
const optionBVotesElem = document.querySelector('#option-b-votes');
const optionAAddButton = document.querySelector('#option-a-add');
const optionBAddButton = document.querySelector('#option-b-add');
const optionASubButton = document.querySelector('#option-a-sub');
const optionBSubButton = document.querySelector('#option-b-sub');
const pastPollElem = document.querySelector('.past-polls');

// let state
let question = '';
let optionATitle = '';
let optionBTitle = '';
let optionAVotes = 0;
let optionBVotes = 0;

const pastPollsArr = [];
// set event listeners 
// increase score, update DOM (textCont)
optionAAddButton.addEventListener('click', () => {
    optionAVotes++;

    optionAVotesElem.textContent = optionAVotes;
});

optionBAddButton.addEventListener('click', () => {
    optionBVotes++;

    optionBVotesElem.textContent = optionBVotes;
});

optionASubButton.addEventListener('click', () => {
    optionAVotes--;

    optionAVotesElem.textContent = optionAVotes;
});

optionBSubButton.addEventListener('click', () => {
    optionBVotes--;

    optionBVotesElem.textContent = optionBVotes;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

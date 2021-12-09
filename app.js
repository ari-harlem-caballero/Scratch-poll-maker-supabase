// import functions and grab DOM elements
import { renderPastPolls } from './render-utils.js';

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
//form event (follow format)
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
//state = data.get('form-elems-names')
    question = data.get('input-question');
    optionATitle = data.get('input-option-a');
    optionBTitle = data.get('input-option-b');
//update DOM (textCont)
    displayCurrentPoll();
});

closeButton.addEventListener('click', () => {
    form.reset();

    const poll = makePoll();

    pastPollsArr.push(poll);

    resetState();

    displayCurrentPoll();

    displayList();
    
});

function displayCurrentPoll() {
    questionELem.textContent = question;
    optionATitleElem.textContent = optionATitle;
    optionBTitleElem.textContent = optionBTitle;
    optionAVotesElem.textContent = optionAVotes;
    optionBVotesElem.textContent = optionBVotes;
}

function makePoll() {
    return {
        question: question,
        optionATitle: optionATitle,
        optionBTitle: optionBTitle,
        optionAVotes: optionAVotes,
        optionBVotes: optionBVotes,
    }; 
}

function resetState() {
    question = '';
    let optionATitle = '';
    let optionBTitle = '';
    let optionAVotes = 0;
    let optionBVotes = 0;
}

function displayList() {
    pastPollElem.textContent = '';

    for (let pastPoll of pastPollsArr) {
        const container = renderPastPolls(pastPoll);

        pastPollElem.append(container);
    }
}
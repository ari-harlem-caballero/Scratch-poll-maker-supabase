// import functions and grab DOM elements
import { renderPastPolls } from '../render-utils.js';
import { savePoll, getPolls, checkLoggedIn, logout } from '../fetch-utils.js';

checkLoggedIn();

const form = document.querySelector('#form1');
const closeButton = document.querySelector('#close-poll');
const questionELem = document.querySelector('#poll-question');
const option1TitleElem = document.querySelector('#option-1-title');
const option2TitleElem = document.querySelector('#option-2-title');
const option1VotesElem = document.querySelector('#option-1-votes');
const option2VotesElem = document.querySelector('#option-2-votes');
const option1AddButton = document.querySelector('#option-1-add');
const option2AddButton = document.querySelector('#option-2-add');
const pastPollElem = document.querySelector('.past-poll-hold');
const logoutButtonElem = document.querySelector('#logout');

// let state
let question = '';
let option1Title = '';
let option2Title = '';
let option1Votes = 0;
let option2Votes = 0;

window.addEventListener('load', async() => {
    await displayPolls();
});

logoutButtonElem.addEventListener('click', async() => {
    await logout();
});

// set event listeners 
// increase score, update DOM (textCont)
option1AddButton.addEventListener('click', () => {
    option1Votes++;

    option1VotesElem.textContent = option1Votes;
});

option2AddButton.addEventListener('click', () => {
    option2Votes++;

    option2VotesElem.textContent = option2Votes;
});
//form event (follow format)

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
//state = data.get('form-elems-names')
    question = data.get('input-question');
    option1Title = data.get('input-option-1');
    option2Title = data.get('input-option-2');
    option1Votes = data.get('option-1-votes');
    option2Votes = data.get('option-2-votes');
//update DOM (textCont)
    displayCurrentPoll();

    form.reset();
});

function displayCurrentPoll() {
    questionELem.textContent = question;
    option1TitleElem.textContent = option1Title;
    option2TitleElem.textContent = option2Title;
    option1VotesElem.textContent = option1Votes;
    option2VotesElem.textContent = option2Votes;
}

closeButton.addEventListener('click', async() => {
    await savePoll(question, option1Title, option2Title, option1Votes, option2Votes);
    
    displayPolls();

    displayCurrentPoll();
});


async function displayPolls() {
    const polls = await getPolls();
    
    pastPollElem.textContent = '';

    for (let pastPoll of polls) {
        const container = renderPastPolls(pastPoll);

        pastPollElem.append(container);
    }
}
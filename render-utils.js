export function renderPastPolls(pastPoll) {

    const container = document.createElement('div');
    const pQuestionElem = document.createElement('p');
    const pTitle1 = document.createElement('p');
    const pTitle2 = document.createElement('p');
    const pVotes1 = document.createElement('p');
    const pVotes2 = document.createElement('p');

    container.classList.add('past-polls');
    pQuestionElem.textContent = pastPoll.question;
    pTitle1.textContent = pastPoll.option_1;
    pTitle2.textContent = pastPoll.option_2;
    pVotes1.textContent = pastPoll.votes_1;
    pVotes2.textContent = pastPoll.votes_2;

    container.append(pQuestionElem, pTitle1, pTitle2, pVotes1, pVotes2);
    
    return container;
}
export function renderPastPolls(pastPoll) {

    const container = document.createElement('div');
    const pQuestionElem = document.createElement('p');
    const pTitleA = document.createElement('p');
    const pTitleB = document.createElement('p');
    const pVotesA = document.createElement('p');
    const pVotesB = document.createElement('p');

    container.classList.add('past-polls');
    pQuestionElem.textContent = pastPoll.question;
    pTitleA.textContent = pastPoll.optionATitle;
    pTitleB.textContent = pastPoll.optionBTitle;
    pVotesA.textContent = pastPoll.optionAVotes;
    pVotesB.textContent = pastPoll.optionBVotes;

    container.append(pQuestionElem, pTitleA, pTitleB, pVotesA, pVotesB);
    
    return container;
}
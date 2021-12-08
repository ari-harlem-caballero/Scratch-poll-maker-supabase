## 6 buttons
-- `option A add button`
    --Why? 💥💥💥 Add event listener to increment the vote count for option A in the current poll

-- `option B add button`
    --Why? 💥💥💥 Add event listener to increment the vote count for option B in the current poll

-- `option A subtract/undo button`
    --Why? 💥💥💥 Add event listener to decrement the vote count for option A in the current poll

-- `option B subtract/undo buttons`
    --Why? 💥💥💥 Add event listener to decrement the vote count for option B in the current poll

-- `create poll form`
    --Why? Add 'submit' listener to (not a click listener) to the form itself!
    -- `three inputs` (question, option 1, option 2)
        --Why? Figure out the user's question and options
        --Why? 💥💥💥 On submit, update the current poll question and options, and reflect that in the DOM
-- `1 'close poll' button`
    --Why?💥💥💥
    --`Append the current poll to the past polls state []`
    --`"Update the list"`
        --clear DOM of the list
        --Use a for loop to loop through all past polls, create some DOM and display each past poll in the list
    --`Clear out/reset current poll state and DOM.`
-- `current poll section`
    --Why? a bunch of empty divs that we will inject state into (question, options, and vote totals)
-- `empty div for closed polls history/list (for appending to)`
    --Why? A place to put the history
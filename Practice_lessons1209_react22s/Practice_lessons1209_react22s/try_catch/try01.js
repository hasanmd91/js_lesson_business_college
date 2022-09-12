'use strict';

/*
Start this challenge by visualizing how the console will only log "Step 1" and then the error but no "Step 2" because an error has occurred and we did not recover from it.
Then, fix that while keeping the getData() call (even though the function does not exist).
Notice how after you fix it, you will see both steps being logged to the console.
*/

const runCode = () => {
    console.log("Step 1");
    getData();
    console.log("Step 2");
}

// Sample usage - do not modify
runCode();

import {displayArray, delay} from './view.js';

async function bogoShuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

async function isBogoSorted(array) {
    let sortedUpToIndex = -1;

    for (let i = 1; i < array.length; i++) {
        displayArray(array, [], null, i-1)

        if (array[i] < array[i - 1]) {
            sortedUpToIndex = -1;
            displayArray(array, [], null, sortedUpToIndex)
            return false;
        }

        await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    displayArray(array, [], null, array.length - 1)
    return true;
}


export async function bogoSort(arr) {
    let tries = 0;
    let isSorted = false;
    while (!isSorted) {
        await bogoShuffle(arr);
        isSorted = await isBogoSorted(arr);
        tries++;
    }
    document.getElementById("dynamic-text").textContent = `It took ${tries} tries to sort`;
}
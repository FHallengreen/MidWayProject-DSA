import {displayArray, delay} from './view.js';

export async function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            displayArray(arr, [j, j + 1], i);
            await new Promise(resolve => setTimeout(resolve, (delay / 2)));

            arr[j + 1] = arr[j];

            arr[j] = key;

            displayArray(arr, [j, j + 1], i);

            await new Promise(resolve => setTimeout(resolve, delay));
            j--;
        }
        arr[j + 1] = key;
    }
    displayArray(arr);
}

export function insertionSortTime(arr) {
    const startTime = performance.now();
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            arr[j] = key;
            j--;
        }
        arr[j + 1] = key;
    }
    const endTime = performance.now();
    const time = ((endTime - startTime) / 1000).toFixed(5);
    document.getElementById("dynamic-text").textContent = `Took ${time} seconds to finish`;
}
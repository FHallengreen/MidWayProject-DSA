import { displayArray } from './view.js';
import { delay } from './controller.js';

export async function insertionSort(arr) {
    let operations = 0;
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
            operations++;
        }
        arr[j + 1] = key;
        operations++;
    }
    displayArray(arr);
    document.getElementById("dynamic-text").textContent = `Took ${operations} operations to finish`;
}


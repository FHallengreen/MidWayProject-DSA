import { bogoSort } from "./bogosort.js";
import { insertionSort } from "./insertionsort.js";

document.getElementById("arrsize").innerHTML = arraySize.value
document.getElementById('arraySize').addEventListener('input', function () {
    document.getElementById("arrsize").innerHTML = arraySize.value
});

document.getElementById('bogoButton').addEventListener('click', async function () {
    document.getElementById("algo-name").textContent = "Bogo Sort (fixed to 7 elements) ";
    const arraySizeInput = document.getElementById('arraySize');
    var size = 7;
    arraySizeInput.disabled = true;
    var arr = new Array(parseInt(size));
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    await bogoSort(arr);
    arraySizeInput.disabled = false;
});
export let delay = 100;
document.getElementById("ms").innerHTML = `${delay} ms`;

document.getElementById('delayRange').addEventListener('input', function (event) {
    document.getElementById("ms").innerHTML = `${delay} ms`;
    delay = parseInt(event.target.value);
});

document.getElementById('sortButton').addEventListener('click', async function () {
    const arraySizeInput = document.getElementById('arraySize');
    var size = document.getElementById('arraySize').value;
    document.getElementById("algo-name").textContent = "Insertion Sort";
    arraySizeInput.disabled = true;
    var arr = new Array(parseInt(size));
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    await insertionSort(arr);
    arraySizeInput.disabled = false;
});
import { bogoSort } from "./bogosort.js";
import { insertionSort, insertionSortTime } from "./insertionsort.js";

document.getElementById("arrsize").innerHTML = arraySize.value
document.getElementById('arraySize').addEventListener('input', function () {
    document.getElementById("arrsize").innerHTML = arraySize.value
});

document.getElementById('bogoButton').addEventListener('click', async function () {
    document.getElementById("algo-name").textContent = "Bogo Sort";
    const arraySizeInput = document.getElementById('arraySize');
    var size = 5;
    arraySizeInput.disabled = true;
    var arr = new Array(parseInt(size));
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    await bogoSort(arr);
    arraySizeInput.disabled = false;
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

    var secondArr = [...arr];
    insertionSortTime(secondArr);
    await insertionSort(arr);
    arraySizeInput.disabled = false;
});
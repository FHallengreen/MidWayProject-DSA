
const arrayContainer = document.getElementById('arrayContainer');

function displayArray(arr, highlightedIndices = [], currentPosition = null) {
    arrayContainer.innerHTML = '';
    arr.forEach((value, index) => {
        const element = document.createElement('div');
        element.classList.add('number', 'w-12', 'h-12', 'flex', 'items-center', 'justify-center', 'border', 'border-blue-500', 'text-sm', 'font-bold', 'rounded-md', 'shadow-sm', 'select-none');

        if (index === currentPosition) {
            element.classList.add('bg-green-500', 'border-green-700');
        } else if (highlightedIndices.includes(index)) {
            element.classList.add('bg-red-300', 'border-red-500');
        } else {
            element.classList.add('bg-blue-100');
        }

        element.textContent = value;
        arrayContainer.appendChild(element);
    });
}

let delay = null;

async function insertionSort(arr) {
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


document.getElementById('sortButton').addEventListener('click', async function () {
    delay = document.getElementById("delay").value
    var size = document.getElementById('arraySize').value;
    var arr = new Array(parseInt(size));
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    await insertionSort(arr);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

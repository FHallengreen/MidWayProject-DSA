
const arrayContainer = document.getElementById('arrayContainer');
const bogoArrayContainer = document.getElementById('bogoArrayContainer');

function displayBogoArray(arr, sortedUpToIndex) {
    bogoArrayContainer.innerHTML = '';
    arr.forEach((value, index) => {
        const element = document.createElement('div');
        element.classList.add('number', 'w-12', 'h-12', 'flex', 'items-center', 'justify-center', 'border', 'text-sm', 'font-bold', 'rounded-md', 'shadow-sm', 'select-none');

        // Tilføj grøn farve op til det punkt, hvor arrayet er bekræftet sorteret
        if (index <= sortedUpToIndex) {
            element.classList.add('bg-green-500', 'border-green-700');
        } else {
            element.classList.add('border-blue-500');
        }

        element.textContent = value;
        bogoArrayContainer.appendChild(element);
    });
}

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

let delay = 100;
document.getElementById("ms").innerHTML = `${delay} ms`;

document.getElementById('delayRange').addEventListener('input', function (event) {
    document.getElementById("ms").innerHTML = `${delay} ms`;
    delay = parseInt(event.target.value);
});

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

function insertionSortTime(arr) {
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
    document.getElementById("timeInsertion").textContent = ` took ${time} seconds to finish`;
}

async function bogoShuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    console.log(array);
}

async function isBogoSorted(array) {
    let sortedUpToIndex = -1;

    for (let i = 1; i < array.length; i++) {
        displayBogoArray(array, i-1);

        if (array[i] < array[i - 1]) {
            sortedUpToIndex = -1;
            displayBogoArray(array, sortedUpToIndex);
            return false;
        }

        await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    displayBogoArray(array, array.length - 1);
    return true;
}


async function bogoSort(arr) {
    let tries = 0;
    const startTime = performance.now();
    let isSorted = false;
    while (!isSorted) {
        await bogoShuffle(arr);
        isSorted = await isBogoSorted(arr);
        tries++;
    }
    const endTime = performance.now();
    const time = ((endTime - startTime) / 1000).toFixed(5);
    document.getElementById("timeBogo").textContent = ` took ${time} seconds to finish and ${tries} shuffles`;
}


document.getElementById("arrsize").innerHTML = arraySize.value
document.getElementById('arraySize').addEventListener('input', function () {
    document.getElementById("arrsize").innerHTML = arraySize.value
});


document.getElementById('bogoButton').addEventListener('click', async function () {
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

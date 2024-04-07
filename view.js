const arrayContainer = document.getElementById('arrayContainer');
export function displayArray(arr, highlightedIndices = [], currentPosition = null, sortedUpToIndex = null) {
    arrayContainer.innerHTML = '';
    arr.forEach((value, index) => {
        const element = document.createElement('div');
        element.classList.add('number', 'w-12', 'h-12', 'flex', 'items-center', 'justify-center', 'border', 'text-sm', 'font-bold', 'rounded-md', 'shadow-sm', 'select-none');

        if (index === currentPosition) {
            element.classList.add('bg-green-500', 'border-green-700');
        } else if (highlightedIndices.includes(index)) {
            element.classList.add('bg-red-300', 'border-red-500');
        } else if (index <= sortedUpToIndex) {
            element.classList.add('bg-green-500', 'border-green-700');
        } else {
            element.classList.add('bg-blue-100');
        }

        element.textContent = value;
        arrayContainer.appendChild(element);
    });
}

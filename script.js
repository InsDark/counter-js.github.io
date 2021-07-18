//Basic Counter
const counter = document.querySelector('#number');
let count = 0;

const increaseCounter = () => {
    count++;   
    counter.textContent = count;
    return count;
    
}

const lowerCounter = () => {
    count--;
    counter.textContent = count;
    return count;
}






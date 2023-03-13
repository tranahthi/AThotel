const searchNode = document.querySelector('.search-header');
const clickSearchNode = document.querySelector('.click-search')
console.log(clickSearchNode)

searchNode.addEventListener('click', () => {
    clickSearchNode.style.display = 'block';
    console.log('hehe')
})

// const arrowDownRoom = document.querySelector('.arrow-down-room');
// const roomFood = document.querySelector('.room-food');

// roomFood.addEventListener('click',() => {
//     console.log('helo')
//     arrowDownRoom.style.display = 'block';
// })
// const arrowDownFood = document.querySelector('.arrow-down-food');
// const food = document.querySelector('#food');
//    food.addEventListener('click', () => {
//     arrowDownFood.style.display = 'block';

//    }
//    )

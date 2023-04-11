const apiRoom = 'http://localhost:3000/singleroom';



async function getRoomList() {
    const response = await fetch(apiRoom);
    return await response.json();
}
async function searchRoom(query) {
    const roomList = await getRoomList();
    return roomList.filter(room => {
        return room.name.toLowerCase().includes(query.toLowerCase());
    });
}


const searchInput = document.getElementById('input-search');
searchInput.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        const query = searchInput.value;
        searchRoom(query)
            .then(showRoomList)
            .catch(error => console.error(error));
    }
});

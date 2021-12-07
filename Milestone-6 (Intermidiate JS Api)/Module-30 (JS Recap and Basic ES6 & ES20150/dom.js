document.getElementById('add-border').addEventListener('click', function () {
    document.getElementById('friend-container').style.border = '1px solid red'
});
function addBgColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue'
    }
}
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
        <h2 class="friend-name">Friend-name</h2>
        <p>Molestiae, in.</p>
    `
    container.appendChild(friendDiv);
})
function getColorFriend() {
    const colorFriend = document.getElementsByClassName('friend-name');
    for (const friendName of colorFriend) {
        friendName.style.color = 'blue';
    }
}
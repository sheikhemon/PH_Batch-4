function loadAlbums () {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then (res => res.json())
    .then (data => displayAlbums(data))
};
loadAlbums();
function displayAlbums(albums){
    const albumContainer = document.getElementById('albums');
    console.log(albums);
    for (const album of albums) {
        const creatP = document.createElement('p');
        creatP.innerText = album.title
        albumContainer.appendChild(creatP)
    }
};
function loadComment () {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then (res => res.json())
    .then (data => displayComment(data))
}
loadComment();
function displayComment (comments) {
    const commentContainer = document.getElementById('comment');
    for (const comment of comments) {
        const p = document.createElement('p');
        p.innerText = comment.id;
        commentContainer.appendChild(p)
    }
}
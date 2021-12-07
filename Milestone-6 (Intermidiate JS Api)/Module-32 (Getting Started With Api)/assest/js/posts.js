function loadPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json() )
    .then( data => dataPosts(data))
}
loadPosts();

function dataPosts (posts) {
    const postContainer = document.getElementById('posts');
    for(const post of posts) {
        const div = document.createElement('div');
        div.classList.add ('post')
        div.innerHTML = `
            <h3> ${post.title} <h3>
            <p> ${post.body} <p>
        `;
        postContainer.appendChild(div);
        // console.log(posts);
    }
}

function dataAPost () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'post',
            body:'Thanks for your post',
            id: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
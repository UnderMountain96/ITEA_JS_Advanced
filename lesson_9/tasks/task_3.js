/*

    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было предзагрузить данные в данный модуль: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2

*/

let postForm = document.getElementById('postForm');
let postContainer = document.getElementById('postContainer');
let posts = [];

class Post {
    constructor(_id, isActive, title, about, likes, created_at) {
        this._id = _id;
        this.isActive = isActive;
        this.title = title;
        this.about = about;
        this.likes = likes;
        this.created_at = created_at;

        this.addLike = () => {
            ++this.likes;
        };

        this.render = () => {
            // language=HTML
            let context = `
                <div data-id="${this._id}" id="post">
                    <i>Date: ${this.created_at}</i>
                    <h3>Title: ${this.title}</h3>
                    <p>${this.about}</p>
                    <img class="like" onclick="Like(event)" src="like.png" alt="">
                    <i>likes: <span class="count">${this.likes}</span></i>
                </div>
                `;
            let newDiv = document.createElement('div');
            newDiv.innerHTML = context;
            postContainer.prepend(newDiv);
        };

        this.render()
    }
}

function Like(event) {
    if (event.target.className !== 'like active') {
        posts.forEach(function (post) {
            if (post._id === event.target.parentElement.dataset.id) {
                event.target.classList.add('active');
                event.target.nextElementSibling.children[0].innerText++;
                post.addLike();
                localStorage.setItem(`posts`, JSON.stringify(posts));
            }
        })
    }

}

function newPost(title, about) {
    const _id = `5cb2dd8${(+new Date).toString(16)}${(~~(Math.random()*1e8)).toString(16)}`;
    let date = new Date();
    let created_at = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}, 
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let post = new Post(_id, true, title, about, 0, created_at);
    posts.push(post);
    localStorage.setItem(`posts`, JSON.stringify(posts));
}


postForm.addEventListener('submit', function (event) {
    event.preventDefault();
    newPost(postForm[0].value, postForm[1].value);
    postForm.reset()
});

const f = fetch('http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2')
    .then(
        (res) => {
            return res.json()
        })
    .then(
        (res) => {
            return res;
        });

async function fetchPost() {
    let json = await f;
    console.log(json);
    json.forEach(function (post) {
        let postSL = new Post(post._id, post.isActive, post.title, post.about, 0, post.created_at);
        posts.push(postSL);
    })
}

let postsLS = localStorage.getItem('posts');
if (postsLS !== null) {
    JSON.parse(postsLS).forEach(function (post) {
        let postSL = new Post(post._id, post.isActive, post.title, post.about, post.likes, post.created_at);
        posts.push(postSL);
    })
} else {
    fetchPost();
}
/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/
let getName = document.getElementById('Name');
let getComment = document.getElementById('Comment');
let buttonAddComment = document.getElementById('AddComment');
let CommentsFeed = document.getElementById('CommentsFeed');

function Comment(name, text, likes = 0, avatarUrl = 'img/avatar.png') {
    this.name = name;
    this.text = text;
    this.avatarUrl = avatarUrl;
    this.likes = likes;
}

let myComment1 = new Comment(
    'Вася',
    'хорошая статья',
    8,
    'img/avatar.png');

let myComment2 = new Comment(
    'Перя',
    '=)',
    2,
    'img/avatar.png');

let myComment3 = new Comment(
    'Бодя',
    'Моя жизнь принадлежит ОРДЕ!',
    11,
    'img/Thrall.jpg');

let myComment4 = new Comment(
    'Слава',
    'За моего отца!',
    1,
    'img/Arthas.jpg');

let CommentsArray = [myComment1, myComment2, myComment3, myComment4];

function comments() {
    CommentsArray.forEach(function (comment){
        addComment(comment)
    })
}

function addComment(comment) {
        let context =
            `
<hr>
    <div class="inline">
        <div class="block">
            <div>
                <strong>${comment.name}</strong>
            </div>
            <div>
                <img class="avatar" src="${comment.avatarUrl}" alt="">
            </div>
            <div>
                likes: <strong class="_likes">${comment.likes}</strong>
            </div>
        </div>
        <div class="comment">
            <div>
                ${comment.text}
            </div>
        </div>
    </div>
    <div>
        <img class="like" src="img/like.png" alt="">
    </div>
`;
    let newDiv = document.createElement('div');
    newDiv.innerHTML = context;
    CommentsFeed.prepend(newDiv);
}

function addNewComment() {
    let textComment = getComment.value.trim();
    if (textComment.length !== 0) {
        let newComment = new Comment(
            getName.value,
            getComment.value
        );
        CommentsArray.push(newComment);
        addComment(newComment);
        like();
        getName.value = '';
        getComment.value = '';
    }
}

function addLike(event) {
    let newArray = [...document.querySelectorAll('.like')].reverse();
    let index = Array.prototype.indexOf.call(newArray, event.target);
    let likes = event.target.parentElement.parentElement.querySelector('._likes');

    if (event.target.className !== 'like _active') {
        event.target.classList.add('_active');
        likes.innerText++;
        CommentsArray[index].likes++;
    } else {
        event.target.classList.remove('_active');
        likes.innerText--;
        CommentsArray[index].likes--;
    }
    console.log(CommentsArray[index])
}

buttonAddComment.addEventListener('click', addNewComment);

function like() {
    let buttonLike = document.querySelectorAll('.like');
    buttonLike.forEach(function (btn) {
            btn.addEventListener('click', addLike);
        }
    );
}

comments();
like();
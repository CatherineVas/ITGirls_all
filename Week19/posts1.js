document.addEventListener("DOMContentLoaded",function (event){
    getPosts();
});
function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json())
    .then (posts =>{
    let post = posts
    let titlePosts = [];
    let bodyPosts = [];
post.forEach( posts_title => {titlePosts.push (posts_title.title)});
post.forEach( posts_body => {bodyPosts.push (posts_body.body)});

let posts_List = document.getElementById ('postsList');

 for (i=0; i < post.length; i++){
  posts_List.innerHTML += 
    `<h3></b>Заголовок</b>:${titlePosts[i]}</h3> </br>
    <div><b>Пост</b>:${bodyPosts[i]}</div></br>`;
 }
});
    
}

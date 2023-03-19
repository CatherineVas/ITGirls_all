
postButton.onclick = function (e){
    e.preventDefault();

    let posts = {
        title: document.getElementById("title").value,
        body: document.getElementById("body").value
    }
    fetch ("https://jsonplaceholder.typicode.com/posts",
    {
        method: 'POST',
        body: JSON.stringify(posts),
        headers:{
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
    .then(response => response.json())
    .then(posts =>{
       document.getElementById("newPosts").innerHTML = 
       `<h2>${posts.title}</h2>
       <div>${posts.body}</div>`
       ;
       document.getElementById("title").value = "";
    document.getElementById("body").value = "";
       })
    .catch(error=> console.log(error));
}
let posts = [
    { title: "Post one", body: "this is first post" },
    { title: "Post two", body: "this is first post" },
    { title: "Post three", body: "this is first post" },
    { title: "Post four", body: "this is first post" }
]
function createPost() {
    setTimeout(() => {
        let output = "";
        posts.forEach((item) => {
            output += `<li>${item.title}</li>`;
            document.body.innerHTML = output;
        })
    },100)
}
function addPost() {
    return new Promise((resole, reject) => {
        setTimeout(() => {
        fruit.push(item)
        
    },200)
    })
}
createPost()
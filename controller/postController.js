let {users, posts} = require("../Data/data");

function postUser(req, res) {
    let id = req.query.id;
    if(id) {
        let post = posts.find((p) => p.id == id);
        res.send(post);
    } else {
        let newPost = [];
        posts.forEach((p) => {
            let user = users.find((u) => u.id == p.id);
            newPost.push({...p, postedBy: user.username});
            res.send(newPost);
            // res.send(posts);
        });
    }
}

function addPostUser(req, res) {
    let post = req.body;
    let id= posts.length + 1;
    if(post) {
        posts.push({id: id, ...post});
        res.send(posts);
    } else {
        console.log("new add post not created");
    }
}

module.exports = {postUser, addPostUser};
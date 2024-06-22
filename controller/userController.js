let {users} = require("../Data/data");

function getUser(req, res) {
    let id = req.query.id;
    if(id){
        let user = users.find((u) => u.id == id);
        res.send(user);
    } else {
        res.send(users);
    }
}

function addUser (req, res) {
    let user = req.body;
    let id = users.length + 42;
    if (user) {
        user = {id: id, ...user};
        users.push(user);
        res.send(users);
        console.log(`User id ${id} is added`);
    }
}

function updateUser(req, res) {
    let id = req.params.id;
    let putValue = req.body;
    if(id) {
        let user = users.find((u) => u.id == id);
        if(user) {
            user = {...user, ...putValue};
            users = users.filter((u) => u.id != id);
            users.push(user);
            res.send(users);
        } else {
            res.status(404).send(`User update id ${id} is not find`);
        }
    } else {
        res.send(users);
    }
}

function deleteUser(req, res) {
    let id = req.params.id
    console.log(id);
    if(id) {
        users = users.filter((u) => u.id != id);
        res.send(`Your given id ${id} is removed/deleted`);
        // res.send(users);
    } 
}

module.exports = {getUser, addUser, updateUser, deleteUser};
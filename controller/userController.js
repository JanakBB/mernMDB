// let {users} = require("../Data/data");
const User = require("../Models/userModel");

async function getUser(req, res, next) {
    try{
        let id = req.query.id;
        if(id) {
            let user = await User.findById(id);
            if(user) {
                res.send(user);
            } else {
                console.log("user can not found");
                let err = new Error(`User with id ${id} not found`);
                next(err);
            }
        } else {
            let fullList = await User.find();
            res.send(fullList);
        }
    } catch (err) {
        next(err);
    }
}

async function addUser (req, res, next) {
    try{
        let user = req.body;
        let addUser = await User.create(user);
        res.send({message: `User with id ${addUser._id} have been added`});
    }catch (err) {
        next(err);
    }
}

async function updateUser(req, res, next) {
    try {
        let id = req.params.id;
        let user = await User.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.send({message: "User update", user});
    } catch (err) {
        next(err);
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
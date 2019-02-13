const fs = require('fs');
const path = require("path");
const util = require('util');
const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const dbPath = path.join(__dirname, '../../../', './db/users', '/');


const updateUser = async (req, res) => {
    const { id } = req.params;
    const userPath = path.join(dbPath, id, `/user-${id}.json`);
    const body = req.body;
    const readDir = util.promisify(fs.readdir);
    const readFile = util.promisify(fs.readFile);
    const writeFile = util.promisify(fs.writeFile);

    try {
        const list = await readDir(dbPath);
        const findUser = list.find(userid => userid === id);

        if (!findUser) return responseFailed("USER NOT FOUNDED", res);

        const user = await readFile(userPath);

        const parsedUser = JSON.parse(user);
        const updateUser = { ...parsedUser, ...body };

        const writeUser = await writeFile(userPath, JSON.stringify(updateUser));
        responseSuccess(updateUser, res);
    }
    catch (err) {
        console.log(err);
        responseFailed("failed", res);
    }

    // readFile(dbPath)
    //     .then(users => {
    //         const allUsers = JSON.parse(users);
    //         const findUser = getById(id, allUsers);
    //         if (!findUser) return responseFailed("failed", res);
    //         const newUser = { ...findUser, ...body };
    //         const updatedBase = allUsers.map(el => el.id === id ? { ...newUser } : el);

    //         writeFile(dbPath, JSON.stringify(updatedBase))
    //             .then(() => responseSuccess(newUser, res));

    //     })
    //     .catch(() => responseFailed("failed", res))
}

module.exports = updateUser;
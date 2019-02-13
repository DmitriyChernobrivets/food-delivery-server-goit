const fs = require("fs");
const path = require("path");
const util = require('util');
const uuidv4 = require("uuid/v4");
const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const dbPath = path.join(__dirname, '../../../', './db/users', '/');

const createUser = async (req, res) => {
    const user = req.body;
    const newUser = { id: uuidv4(), ...user };

    const mkdir = util.promisify(fs.mkdir);
    const writeFile = util.promisify(fs.writeFile);

    const directoryPath = path.join(dbPath, `${newUser.id}`);
    const filePath = path.join(dbPath, `${newUser.id}`, `user-${newUser.id}.json`);

    try {

        await mkdir(directoryPath);
        await writeFile(filePath, JSON.stringify(newUser));
        responseSuccess(newUser, res);
    }
    catch (err) {
        console.log(err);
        responseFailed('FAiled', res)
    }

    // const readFile = util.promisify(fs.readFile);
    // const writeFile = util.promisify(fs.writeFile);
    // const newUser = { id: uuidv4(), ...user };
    // try {
    //     const read = await readFile(dbPath, "utf-8");
    //     const newItem = JSON.parse(read).concat(newUser);

    //     await writeFile(dbPath, JSON.stringify(newItem), "utf-8");
    //     responseSuccess(newUser, res);
    // } catch (err) {
    //     console.log("error", err);
    //     responseFailed("FAILED", res);
    // }
}

module.exports = createUser;
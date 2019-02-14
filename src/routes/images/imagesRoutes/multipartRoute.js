
const multer = require("multer");

const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const { moveImage } = require('../../../services/functions');

const upload = multer({ dest: '.src/temp' });


const multiPartRoute = (req, res) => {
    const file = req.files[0];
    const userId = req.body.userId;

    try {
        moveImage(file, userId);
        responseSuccess(`was save in user- ${userId}`, res);
    } catch (err) {
        console.log(err);
        responseFailed('server ERROR', res)
    }

}

module.exports = () => [upload.any(), multiPartRoute];
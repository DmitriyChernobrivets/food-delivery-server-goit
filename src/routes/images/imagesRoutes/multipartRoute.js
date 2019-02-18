
const multer = require("multer");
const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const upload = multer({ dest: "./src/temp" });
const { moveImage } = require('../../../services/functions');

const multiPartRoute = (req, res) => {
    const file = req.files[0];
    const { userId } = req.body;

    moveImage(file, userId)
        .then(() => responseSuccess(`was save in user- ${userId}`, res))
        .catch(() => responseFailed('server ERROR', res));

}

module.exports = () => [upload.any(), multiPartRoute];
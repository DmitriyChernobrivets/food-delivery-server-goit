const { responseSuccess, responseFailed } = require('../services/responseBody');

const bodyValidation = (res, req, next) => {
    const body = res.body;
    console.log(body);
    next();
}

module.exports = bodyValidation;
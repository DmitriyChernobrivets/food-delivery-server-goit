
const responseSuccess = (data, key, res) => {

    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.write(JSON.stringify({ status: "success", [key]: data }));
    res.send();
};
const responseFailed = (statusNumber, data, res) => {

    res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
    res.write(JSON.stringify({ status: statusNumber, "Error": data }));
    res.end();
};
module.exports = {
    responseSuccess,
    responseFailed
}
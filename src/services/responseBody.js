
const responseSuccess = (data, res) => {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.write(JSON.stringify({status: "success", products: data}));
    res.end();
}
const responseFailed = (data, res) => {
    res.writeHead(400, { "Content-Type": "application/json" })
    res.write(JSON.stringify({status: "no matches", products: data}));
    res.end();
}
module.exports = {
    responseSuccess,
    responseFailed
}
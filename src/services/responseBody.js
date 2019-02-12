
const responseSuccess = (data, res) => {
    console.log(data);
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.write(JSON.stringify({status: "success", "products": data}));
    res.send();
};
const responseFailed = (data, res) => {

    res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
    res.write(JSON.stringify({status: "no matches", products: data}));
    res.end();
};
module.exports = {
    responseSuccess,
    responseFailed
}
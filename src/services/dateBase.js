const fs = require('fs');

module.exports = class Db {

    readDb() {
        return new Promise((resolve, reject) => {
            fs.readFile('./src/db/products.json', function(err, data) {
                if (err) {
                    reject('error', err)
                }
                else  {
                    const AllProducts = JSON.parse(data);
                    resolve(AllProducts)
                }
                
            })
        })
    }
    getId(id) {
        this.promiseHandling()
    }
    getItemByID(id) {
        return new Promise((resolve, reject) => {
            fs.readFile('./src/db/products.json', function(err, data) {
                if (err) {
                    reject('error', err)
                }
                else if (id) {
                    const AllProducts = JSON.parse(data);
                    const product = AllProducts.find(product => product.id === +id)
                    product ? resolve(product) : reject()
                }
                
            })
            
        })
    }

    getItemsByIDS(ids) {
        const arrayIDS = ids.match(/\d+/g);
        console.log(arrayIDS)
        return new Promise((resolve, reject) => {
            fs.readFile('./src/db/products.json', function(err, data) {
                if (err) {
                    reject('error', err)
                }
                else if (ids) {
                    const AllProducts = JSON.parse(data);
                    const product = AllProducts.filter(product => arrayIDS.includes(String(product.id)))
                    product && product.length > 0 ? resolve(product) : reject(product)
                }
                
            })
            
        })

    }
    getItemsByCATEGORY(category) {
        const arrayCATEGORYS = category.match(/\w+/g);
        return new Promise((resolve, reject) => {
            fs.readFile('./src/db/products.json', function(err, data) {
                if (err) {
                    reject('error', err)
                }
                else if (category) {
                    const AllProducts = JSON.parse(data);
                    
                    const product = AllProducts.filter(product => 
                                    product.categories.find(category => 
                                        arrayCATEGORYS.includes(category)));    
                    product.length > 0 ? resolve(product) : reject(product)
                }
                
            })
            
        })

    }
}

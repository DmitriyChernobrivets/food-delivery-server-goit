
const getProductById = (id, AllProducts) => 
        AllProducts.find(product => product.id === +id);
    
const  getItemsByIDS = (ids, AllProducts) =>
        AllProducts.filter(product => ids.includes(String(product.id)))

const getItemsByCATEGORY = (category, AllProducts) => {
    
    const arrayCATEGORYS = category.match(/\w+/g);
    return AllProducts.filter(product => 
        product.categories.find(category => 
            arrayCATEGORYS.includes(category)));   
}
 
module.exports = {
    getProductById,
    getItemsByIDS,
    getItemsByCATEGORY
};
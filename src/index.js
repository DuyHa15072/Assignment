import productList from "./data";
const productElement = document.querySelector("#products");
const listProduct = () => {
    const result = productList
        .map(
            ({ img, name, price }) => `
              
            `
        ).join("");
    if (productElement) {
        productElement.innerHTML = result;
    }
};
listProduct();
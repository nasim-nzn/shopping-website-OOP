import Products from "./models/products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");

async function render() {
  const productData = await fetchData();
  const productsInstance = new Products(productsNode, productData);

  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);

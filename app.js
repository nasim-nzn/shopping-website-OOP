import { fetchData } from "./utils/httpReq.js";

async function render() {
  const productData = await fetchData();
  console.log(productData);
}

document.addEventListener("DOMContentLoaded", render);

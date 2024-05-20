const selectedProduct=sessionStorage.getItem("selectedProduct");

product=JSON.parse(selectedProduct);

document.getElementById("title").innerText+=product.title;
document.getElementById("image").src = product.image;
document.getElementById("image").alt=product.title;
document.getElementById("price").innerText+= `$ ${product.price}`;
document.getElementById("category").innerText+=product.category;
document.getElementById("rating").innerText+=product.rating.rate;
document.getElementById("count").innerText+=product.rating.count;
document.getElementById("description").innerText+=product.description;


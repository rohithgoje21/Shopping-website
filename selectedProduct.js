const selectedProduct = sessionStorage.getItem("selectedProduct");

product = JSON.parse(selectedProduct);

document.getElementById("title").innerText += product.title;
document.getElementById("image").src = product.image;
document.getElementById("image").alt = product.title;
document.getElementById("price").innerText += `$ ${product.price}`;
document.getElementById("category").innerText += product.category;
document.getElementById("rating").innerText += product.rating.rate;
document.getElementById("count").innerText += product.rating.count;
document.getElementById("description").innerText += product.description;


document.getElementById("dark").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    this.style.display = "none";
    document.querySelector("#light").style.display = "block";
})
document.getElementById("light").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    this.style.display = "none";
    document.querySelector("#dark").style.display = "block";
})
document.addEventListener('DOMContentLoaded', () => {
    // sessionStorage.clear();
    const productContainer = document.getElementById('product-container');

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h4>${product.title}</h4>
                    <h3>$${product.price}</h3>
                `;

                productDiv.addEventListener('click', () => {
                    sessionStorage.setItem('selectedProduct', JSON.stringify(product));
                    window.location.href = 'selectedProduct.html';
                });
                productContainer.appendChild(productDiv);
            });


        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });











        document.getElementById("dark").addEventListener("click",function(){
            document.querySelector("body").style.backgroundColor="black";
            document.querySelector("body").style.color="white";
            this.style.display="none";
            document.querySelector("#light").style.display="block";
        })
        document.getElementById("light").addEventListener("click",function(){
            document.querySelector("body").style.backgroundColor="white";
            document.querySelector("body").style.color="black";
            this.style.display="none";
            document.querySelector("#dark").style.display="block";
        })

});






document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const productDescription = document.getElementById('productDescription').value;

        const product = {
            name: productName,
            price: productPrice,
            description: productDescription
        };

        localStorage.setItem('newProduct', JSON.stringify(product));
        alert('Product saved successfully!');
    });
});
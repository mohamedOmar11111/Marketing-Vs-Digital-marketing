document.addEventListener('DOMContentLoaded', () => {
    const productBox = document.querySelector('.box.product');
    const priceBox = document.querySelector('.box.price');
    const placeBox = document.querySelector('.box.place');
    const promotionBox = document.querySelector('.box.promotion');

    if (productBox) {
        productBox.addEventListener('click', () => {
            alert('Product: What you are offering, its features, design, and value.');
        });
    }
    if (priceBox) {
        priceBox.addEventListener('click', () => {
            alert('Price: How you position it in terms of cost and value.');
        });
    }
    if (placeBox) {
        placeBox.addEventListener('click', () => {
            alert('Place: Where and how you deliver it to your customers.');
        });
    }
    if (promotionBox) {
        promotionBox.addEventListener('click', () => {
            alert('Promotion: How you communicate and spread the word (and that’s where digital marketing comes in).');
        });
    }
});
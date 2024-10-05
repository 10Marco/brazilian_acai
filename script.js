document.addEventListener('DOMContentLoaded', function () {
    const sizeSelect = document.getElementById('size');
    const extras = document.querySelectorAll('input[name="extras"]');
    const totalPriceElement = document.getElementById('totalPrice');

    const prices = {
        sizes: {
            small: 5.00,
            medium: 7.00,
            large: 9.00
        },
        extras: {
            granola: 1.00,
            banana: 0.50,
            honey: 0.75,
            peanutButter: 1.50,
            candy: 0.75,
            peanuts: 0.50,
            pacoca: 1.00
        }
    };

    function calculateTotalPrice() {
        let totalPrice = 0;
        const selectedSize = sizeSelect.value;
        totalPrice += prices.sizes[selectedSize];

        extras.forEach(extra => {
            if (extra.checked) {
                totalPrice += prices.extras[extra.value];
            }
        });

        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Initialize with the current selections
    calculateTotalPrice();

    // Add event listeners for when size or extras change
    sizeSelect.addEventListener('change', calculateTotalPrice);
    extras.forEach(extra => {
        extra.addEventListener('change', calculateTotalPrice);
    });
});
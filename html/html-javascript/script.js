function calculatePrice() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const album = document.getElementById('album').checked;
    const tickets = document.getElementById('tickets').checked;
    
    let price = 0;
    let discount = 0;
    let orderDetails = '';

    if (album) {
        price += 20;
        orderDetails += 'Album<br>';
    }
    if (tickets) {
        price += 50;
        orderDetails += 'Concertkaartjes<br>';
    }
    if (album && tickets) {
        discount = 0.1 * price;
    }

    const finalPrice = price - discount;

    document.getElementById('customerDetails').innerHTML = `
        Naam: ${name}<br>
        Adres: ${address}
    `;
    document.getElementById('orderDetails').innerHTML = `
        Bestelling:<br>
        ${orderDetails}
    `;
    document.getElementById('totalPrice').innerHTML = `
        Totale prijs: €${finalPrice.toFixed(2)}
    `;
    document.getElementById('discountMessage').innerHTML = discount > 0 ? `
        U heeft een korting van 10% ontvangen!
    ` : '';

    document.getElementById('orderSummary').style.display = 'block';
}
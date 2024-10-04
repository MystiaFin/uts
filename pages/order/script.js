$(document).ready(function() {
  
    // load menu data from JSON
    $.getJSON('./menus.json', function(data) {
      data.forEach(function(item) {
        const cardHtml = `
          <div class="card">
            <img src="${item.image}" alt="${item.name}">
            <div class="content">
              <h2>${item.name}</h2>
              <p>Price: $${item.price.toFixed(2)}</p>
              <div class="quantity">
                <button class="decrement">-</button>
                <span class="count">0</span>
                <button class="increment">+</button>
              </div>
            </div>
          </div>
        `;
        $('.card-wrapper').append(cardHtml);
      });
  
      // increase quantity
      $('.card-wrapper').on('click', '.increment', function() {
        const countElement = $(this).siblings('.count');
        let count = parseInt(countElement.text());
        count++;
        countElement.text(count);
        updateOrder($(this).closest('.card').find('h2').text(), count);
      });
  
      // decrease quantity
      $('.card-wrapper').on('click', '.decrement', function() {
        const countElement = $(this).siblings('.count');
        let count = parseInt(countElement.text());
        if (count > 0) {
          count--;
          countElement.text(count);
          updateOrder($(this).closest('.card').find('h2').text(), count);
        }
      });
  
      // updating checkout menu
      function updateOrder(itemName, count) {
        const order = $('.orders').find(`.order:contains('${itemName}')`);
        const itemPrice = data.find(item => item.name === itemName).price;
  
        if (count > 0) {
          if (order.length > 0) {
            // update existing order
            order.find('span.count').text(`${count}x`);
            order.find('span.price').text(`$${(itemPrice * count).toFixed(2)}`);
          } else {
            // add new order if order is not exist
            const newOrderHtml = `
              <div class="order">
                <span>${itemName}</span>
                <span class="count">${count}x</span>
                <span class="price">$${(itemPrice * count).toFixed(2)}</span>
              </div>
            `;
            $('.orders').prepend(newOrderHtml);
          }
        } else {
          // remove order if count quantity reach 0
          order.remove();
        }
  
        updateTotalBill();
      }
  
      // Calculate and update the total bill
      function updateTotalBill() {
        let totalBill = 0; // initiate default state
        $('.orders .order').each(function() {
          const itemPrice = parseFloat($(this).find('span.price').text().substring(1));
          totalBill += itemPrice;
        });
        $('.bill-total span:last-child').text(`$${totalBill.toFixed(2)}`);
      }
  
      // handle the pay button click event
      $('.confirm').click(function() {
        alert('Checkout successful!');
        // reset quantities
        $('.count').text('0');
        $('.orders .order').remove();
        $('.bill-total span:last-child').text('$0.00');
      });
    });
  });
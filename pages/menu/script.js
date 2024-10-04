$(document).ready(function() {
    $.getJSON('./menus.json', function(data) {
      // Iterate through each item in the JSON and create cards
      data.forEach(function(item) {
        const cardHtml = `
          <div class="card">
            <img src="${item.image}" alt="${item.name}" />
            <div class="content">
              <h2>${item.name}</h2>
              <p>${item.description}</p>
            </div>
          </div>
        `;
        $('.card-wrapper').append(cardHtml);
      });
    });
});



var productNames = [];
var productPrices = [];

function addProduct() {
    var productName = document.getElementById("productName").value;
    var productPrice = parseFloat(document.getElementById("productPrice").value);

    if (!productName || isNaN(productPrice)) {
        alert("Érvénytelen adatok! Kérem, töltse ki mindkét mezőt érvényes adatokkal.");
    } else {
        productNames.push(productName);
        productPrices.push(productPrice);
        // Töröljük az input mezők tartalmát
        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = "";

        // Frissítjük a terméklistát
        updateProductList();
    }
}

function updateProductList() {
    var productsList = document.getElementById("products");
    productsList.innerHTML = ""; // Töröljük a listát

    for (var i = 0; i < productNames.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = productNames[i] + " - " + productPrices[i].toFixed(2);
        productsList.appendChild(listItem);
    }
}

function calculateStatistics() {
    if (productNames.length === 0) {
        alert("Nincsenek termékek a statisztika számolásához.");
        return;
    }

    var minPriceIndex = productPrices.indexOf(Math.min(...productPrices));
    var cheapestProduct = productNames[minPriceIndex];

    var averagePrice = productPrices.reduce((sum, price) => sum + price, 0) / productPrices.length;

    var priceDifferences = productPrices.map(price => Math.pow(price - averagePrice, 2));
    var variance = priceDifferences.reduce((sum, diff) => sum + diff, 0) / productPrices.length;

    // Frissítjük az eredményeket
    var statisticsMessage = "A legolcsóbb termék: " + cheapestProduct +
        "<br>Az átlagár: " + averagePrice.toFixed(2) +
        "<br>Az árak szórása: " + Math.sqrt(variance).toFixed(2);

    document.getElementById("statistics").innerHTML = statisticsMessage;
}

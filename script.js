// Function to show the admin panel
function showAdminPanel() {
    document.getElementById("adminPanel").style.display = 'block';
}

// Function to validate admin password
function validatePassword() {
    const password = document.getElementById('adminPassword').value;
    if (password === "admin123") {
        document.getElementById("adminOptions").style.display = 'block';
    } else {
        alert("Incorrect password");
    }
}

// Function to save updated prices to localStorage
function saveUpdatedPrices() {
    const prices = {
        springPrice8: parseInt(document.getElementById("springPrice8").value) || 0,
        springPrice11: parseInt(document.getElementById("springPrice11").value) || 0,
        springPrice13: parseInt(document.getElementById("springPrice13").value) || 0,
        shatterPattiPrice: parseInt(document.getElementById("shatterPattiPrice").value) || 0,
        bottomPrice: parseInt(document.getElementById("bottomPrice").value) || 0,
        bracketPrice: parseInt(document.getElementById("bracketPrice").value) || 0,
        coverPrice: parseInt(document.getElementById("coverPrice").value) || 0,
        bracketUPrice: parseInt(document.getElementById("bracketUPrice").value) || 0,
        slotPrice: parseInt(document.getElementById("slotPrice").value) || 0,
        bottomFittingSetPrice: parseInt(document.getElementById("bottomFittingSetPrice").value) || 0
    };

    localStorage.setItem('productPrices', JSON.stringify(prices));

    alert("Prices updated successfully!");

    // Reload prices to reflect changes
    loadPrices();
}

// Function to load prices from localStorage
function loadPrices() {
    const defaultPrices = {
        springPrice8: 190,
        springPrice11: 240,
        springPrice13: 350,
        shatterPattiPrice: 78,
        bottomPrice: 75,
        bracketPrice: 72,
        coverPrice: 115,
        bracketUPrice: 20,
        slotPrice: 10,
        bottomFittingSetPrice: 190
    };

    const prices = JSON.parse(localStorage.getItem('productPrices')) || defaultPrices;

    // Admin panel input fields
    document.getElementById("springPrice8").value = prices.springPrice8;
    document.getElementById("springPrice11").value = prices.springPrice11;
    document.getElementById("springPrice13").value = prices.springPrice13;
    document.getElementById("shatterPattiPrice").value = prices.shatterPattiPrice;
    document.getElementById("bottomPrice").value = prices.bottomPrice;
    document.getElementById("bracketPrice").value = prices.bracketPrice;
    document.getElementById("coverPrice").value = prices.coverPrice;
    document.getElementById("bracketUPrice").value = prices.bracketUPrice;
    document.getElementById("slotPrice").value = prices.slotPrice;
    document.getElementById("bottomFittingSetPrice").value = prices.bottomFittingSetPrice;

    // Billing section prices
    document.getElementById("springPrice").innerText = prices.springPrice8; // Default spring
    document.getElementById("shatterPattiPriceDisplay").innerText = prices.shatterPattiPrice;
    document.getElementById("bottomPriceDisplay").innerText = prices.bottomPrice;
    document.getElementById("bracketPriceDisplay").innerText = prices.bracketPrice;
    document.getElementById("coverPriceDisplay").innerText = prices.coverPrice;
    document.getElementById("bracketUPriceDisplay").innerText = prices.bracketUPrice;
    document.getElementById("slotPriceDisplay").innerText = prices.slotPrice;
    document.getElementById("bottomFittingSetPriceDisplay").innerText = prices.bottomFittingSetPrice;
}

// Function to update the spring price based on selection
function updateSpringPrice() {
    const springType = document.getElementById("springType").value;
    const prices = JSON.parse(localStorage.getItem('productPrices')) || {};
    let price = prices.springPrice8 || 190; // Default to 8 inch

    if (springType === "11") {
        price = prices.springPrice11 || 240;
    } else if (springType === "13") {
        price = prices.springPrice13 || 350;
    }

    document.getElementById("springPrice").innerText = price;
}

// Function to calculate total for each row
function calculateRowTotal(product) {
    const quantity = parseInt(document.getElementById(product + "Quantity").value) || 0;
    const price = parseInt(document.getElementById(product + "PriceDisplay").innerText) || 0;

    const total = quantity * price;
    document.getElementById(product + "Total").innerText = total;
}

// Function to calculate the grand total
function calculateGrandTotal() {
    const products = [
        "spring", "shatterPatti", "bottom", "bracket", "cover", 
        "bracketU", "slot", "bottomFittingSet"
    ];

    let grandTotal = 0;
    products.forEach(product => {
        const total = parseInt(document.getElementById(product + "Total").innerText) || 0;
        grandTotal += total;
    });

    document.getElementById("grandTotal").innerText = "Grand Total: ₹" + grandTotal;
}

// Function to print the page
function printPage() {
    window.print();
}

// Load the prices from localStorage when the page loads
window.onload = function() {
    loadPrices();
};

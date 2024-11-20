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
    const springPrice8 = parseInt(document.getElementById("springPrice8").value) || 0;
    const springPrice11 = parseInt(document.getElementById("springPrice11").value) || 0;
    const springPrice13 = parseInt(document.getElementById("springPrice13").value) || 0;
    const shatterPattiPrice = parseInt(document.getElementById("shatterPattiPrice").value) || 0;
    const bottomPrice = parseInt(document.getElementById("bottomPrice").value) || 0;
    const bracketPrice = parseInt(document.getElementById("bracketPrice").value) || 0;
    const coverPrice = parseInt(document.getElementById("coverPrice").value) || 0;
    const bracketUPrice = parseInt(document.getElementById("bracketUPrice").value) || 0;
    const slotPrice = parseInt(document.getElementById("slotPrice").value) || 0;
    const bottomFittingSetPrice = parseInt(document.getElementById("bottomFittingSetPrice").value) || 0;

    // Store updated prices in localStorage
    localStorage.setItem('springPrice8', springPrice8);
    localStorage.setItem('springPrice11', springPrice11);
    localStorage.setItem('springPrice13', springPrice13);
    localStorage.setItem('shatterPattiPrice', shatterPattiPrice);
    localStorage.setItem('bottomPrice', bottomPrice);
    localStorage.setItem('bracketPrice', bracketPrice);
    localStorage.setItem('coverPrice', coverPrice);
    localStorage.setItem('bracketUPrice', bracketUPrice);
    localStorage.setItem('slotPrice', slotPrice);
    localStorage.setItem('bottomFittingSetPrice', bottomFittingSetPrice);

    alert("Prices updated successfully!");

    // Reload prices to reflect changes
    loadPrices();
}

// Function to load prices from localStorage
function loadPrices() {
    const springPrice8 = localStorage.getItem('springPrice8');
    const springPrice11 = localStorage.getItem('springPrice11');
    const springPrice13 = localStorage.getItem('springPrice13');
    const shatterPattiPrice = localStorage.getItem('shatterPattiPrice');
    const bottomPrice = localStorage.getItem('bottomPrice');
    const bracketPrice = localStorage.getItem('bracketPrice');
    const coverPrice = localStorage.getItem('coverPrice');
    const bracketUPrice = localStorage.getItem('bracketUPrice');
    const slotPrice = localStorage.getItem('slotPrice');
    const bottomFittingSetPrice = localStorage.getItem('bottomFittingSetPrice');

    // Set the prices from localStorage if available, else set default values
    document.getElementById("springPrice8").value = springPrice8 || 190;
    document.getElementById("springPrice11").value = springPrice11 || 240;
    document.getElementById("springPrice13").value = springPrice13 || 350;
    document.getElementById("shatterPattiPrice").value = shatterPattiPrice || 78;
    document.getElementById("bottomPrice").value = bottomPrice || 75;
    document.getElementById("bracketPrice").value = bracketPrice || 72;
    document.getElementById("coverPrice").value = coverPrice || 115;
    document.getElementById("bracketUPrice").value = bracketUPrice || 20;
    document.getElementById("slotPrice").value = slotPrice || 10;
    document.getElementById("bottomFittingSetPrice").value = bottomFittingSetPrice || 190;

    // Load the corresponding prices to display in the billing section
    document.getElementById("springPrice").innerText = springPrice8 || 190;
    document.getElementById("shatterPattiPrice").innerText = shatterPattiPrice || 78;
    document.getElementById("bottomPrice").innerText = bottomPrice || 75;
    document.getElementById("bracketPrice").innerText = bracketPrice || 72;
    document.getElementById("coverPrice").innerText = coverPrice || 115;
    document.getElementById("bracketUPrice").innerText = bracketUPrice || 20;
    document.getElementById("slotPrice").innerText = slotPrice || 10;
    document.getElementById("bottomFittingSetPrice").innerText = bottomFittingSetPrice || 190;
}

// Function to update the spring price based on selection
function updateSpringPrice() {
    const springType = document.getElementById("springType").value;
    let price = 190; // default to 8 inch

    if (springType === "11") {
        price = parseInt(localStorage.getItem('springPrice11')) || 240;
    } else if (springType === "13") {
        price = parseInt(localStorage.getItem('springPrice13')) || 350;
    }

    document.getElementById("springPrice").innerText = price;
}

// Function to calculate total for each row
function calculateRowTotal(product) {
    const quantity = parseInt(document.getElementById(product + "Quantity").value) || 0;
    let price = parseInt(document.getElementById(product + "Price").innerText) || 0;

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

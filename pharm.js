document.addEventListener("DOMContentLoaded", () => {
    const inventoryForm = document.getElementById("inventoryForm");
    const salesForm = document.getElementById("salesForm");
    const inventoryTable = document.getElementById("inventoryTable").querySelector("tbody");
    const salesTable = document.getElementById("salesTable").querySelector("tbody");
    const drugSelect = document.getElementById("drugSelect");

    const inventory = []; // Array to store inventory data

    // Add to Inventory
    inventoryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const drugName = document.getElementById("drugName").value.trim();
        const quantity = parseInt(document.getElementById("quantity").value);
        const price = parseFloat(document.getElementById("price").value);

        if (!drugName || quantity <= 0 || price <= 0) {
            alert("Please provide valid drug details!");
            return;
        }

        const existingDrug = inventory.find(drug => drug.name.toLowerCase() === drugName.toLowerCase());

        if (existingDrug) {
            // Update quantity if drug exists
            existingDrug.quantity += quantity;
        } else {
            // Add new drug to the inventory
            inventory.push({ name: drugName, quantity, price });
        }

        // Update inventory table and dropdown
        updateInventoryTable();
        updateDrugSelect();

        // Clear form fields
        inventoryForm.reset();
    });

    // Update Inventory Table
    function updateInventoryTable() {
        inventoryTable.innerHTML = ""; // Clear existing rows

        inventory.forEach(drug => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${drug.name}</td>
                <td>${drug.quantity}</td>
                <td>${drug.price.toFixed(2)}</td>
            `;
            inventoryTable.appendChild(row);
        });
    }

    // Update Drug Dropdown
    function updateDrugSelect() {
        drugSelect.innerHTML = ""; // Clear existing options

        inventory.forEach(drug => {
            const option = document.createElement("option");
            option.value = drug.name;
            option.textContent = drug.name;
            drugSelect.appendChild(option);
        });
    }

    // Record Sale
    salesForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const drugName = drugSelect.value;
        const soldQuantity = parseInt(document.getElementById("soldQuantity").value);
        const amountPaid = parseFloat(document.getElementById("amountPaid").value);

        if (!drugName || soldQuantity <= 0 || amountPaid <= 0) {
            alert("Please provide valid sale details!");
            return;
        }

        const drug = inventory.find(d => d.name === drugName);
        if (drug && drug.quantity >= soldQuantity) {
            drug.quantity -= soldQuantity;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${drugName}</td>
                <td>${soldQuantity}</td>
                <td>${amountPaid.toFixed(2)}</td>
            `;
            salesTable.appendChild(row);

            updateInventoryTable();
            updateDrugSelect();
            salesForm.reset();
        } else {
            alert("Insufficient stock or invalid selection!");
        }
    });
});
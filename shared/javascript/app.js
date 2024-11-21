// Get references to buttons and containers
const addFoodBtn = document.getElementById("addFoodBtn");
const addExistingBtn = document.getElementById("addExistingBtn");
const formContainer = document.getElementById("formContainer");
const optionsMenu = document.getElementById("optionsMenu");
const clearBtn = document.getElementById("clearBtn");
const submitBtn = document.getElementById("submitBtn");
const foodForm = document.getElementById("foodForm");

let table = document.getElementById('myTable');

// Function to check table visibility and update the display message
function checkTableVisibility() { 
    let tbody = table.querySelector('tbody'); 
    let selectedItems = document.getElementById('selectedItems');
    if (tbody.rows.length > 0) { 
        table.style.display = 'table'; 
        selectedItems.innerText = "Today's Menu";
    } else { 
        table.style.display = 'none';
        selectedItems.innerText = "There are no items selected.";
    } 
    updateTotals();
}

// Function to clear and hide the form
function clearForm() {
    foodForm.style.display = 'none';
}

// Function to clear the table and hide the form
function clearTable() {
    optionsMenu.innerText = 'This is where the food information is stored.';
    let tbody = table.querySelector('tbody'); 
    while (tbody.rows.length > 0) { 
        tbody.deleteRow(0); 
    } 
    checkTableVisibility();
    clearForm();
}

// Function to show the form
function addNewFood() { 
    foodForm.style.display = 'table'; 
}

// Function to update the totals 
function updateTotals() { 
    let totalCalories = 0; 
    let totalProtein = 0; 
    let totalCarbs = 0; 
    let totalFats = 0; 
    let tbody = table.querySelector('tbody'); 

    for (let row of tbody.rows) { 
        totalCalories += parseFloat(row.cells[3].textContent) || 0; 
        totalProtein += parseFloat(row.cells[4].textContent) || 0; 
        totalCarbs += parseFloat(row.cells[5].textContent) || 0; 
        totalFats += parseFloat(row.cells[6].textContent) || 0; 
    } 
    document.getElementById('totalCalories').textContent = totalCalories; 
    document.getElementById('totalProtein').textContent = totalProtein; 
    document.getElementById('totalCarbs').textContent = totalCarbs; 
    document.getElementById('totalFats').textContent = totalFats;

}

// Event listeners for buttons
addFoodBtn.addEventListener("click", () => {
    addFoodBtn.clicked = true;
    addNewFood();
});

addExistingBtn.addEventListener("click", () => {
    addExistingBtn.clicked = true;
    // Assuming there is a function selectExistFood to handle existing food
    selectExistFood();
});

clearBtn.addEventListener("click", () => {
    clearTable();
});

// Event listener for the submit button
submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Access form inputs
    let mealValue = document.getElementById('meal').value;
    let nameValue = document.getElementById('name').value;
    let quantityValue = document.getElementById('quantity').value;
    let calorieValue = document.getElementById('calories').value;
    let proteinValue = document.getElementById('protein').value;
    let carbValue = document.getElementById('carbs').value;
    let fatValue = document.getElementById('fats').value;

    // // Validate inputs
    // if (!mealValue || !nameValue || !quantityValue || !calorieValue || !proteinValue || !carbValue || !fatValue) { 
    //     alert('Please fill out all fields'); 
    //     return; 
    // }

    // Create new row in table
    let newRow = table.querySelector('tbody').insertRow();
    newRow.insertCell().appendChild(document.createTextNode(mealValue));
    newRow.insertCell().appendChild(document.createTextNode(nameValue));
    newRow.insertCell().appendChild(document.createTextNode(quantityValue));
    newRow.insertCell().appendChild(document.createTextNode(calorieValue));
    newRow.insertCell().appendChild(document.createTextNode(proteinValue));
    newRow.insertCell().appendChild(document.createTextNode(carbValue));
    newRow.insertCell().appendChild(document.createTextNode(fatValue));

    // Create action cell with edit and delete buttons
    let actionCell = newRow.insertCell();
    let editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    actionCell.appendChild(editBtn);
    
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', function() {
        table.querySelector('tbody').deleteRow(newRow.rowIndex - 1);
        checkTableVisibility();
    });
    actionCell.appendChild(deleteBtn);

    // Clear input fields
    document.getElementById('meal').value = ''; 
    document.getElementById('name').value = ''; 
    document.getElementById('quantity').value = ''; 
    document.getElementById('calories').value = ''; 
    document.getElementById('protein').value = ''; 
    document.getElementById('carbs').value = ''; 
    document.getElementById('fats').value = '';

    // Update table visibility
    checkTableVisibility();
});

// Ensure form submission on Enter key press is prevented
form.addEventListener('submit', function(event) {
    event.preventDefault();
});

// Initial call to set visibility of action buttons
checkTableVisibility();

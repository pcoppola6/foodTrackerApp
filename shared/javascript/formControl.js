// let mealTable = document.getElementById('myTable').getElementsByTagName('tbody')[0];
// let form = document.getElementById('foodForm');
// let mealInput = document.getElementById('meal');
// let foodName = document.getElementById('name');
// let quantity = document.getElementById('quantity');
// let calories = document.getElementById('calories');
// let proteins = document.getElementById('protein');
// let carbs = document.getElementById('carbs');
// let fats = document.getElementById('fats');

// submitBtn.addEventListener('click', function(event) {
//     event.preventDefault();

//     let mealValue = mealInput.value;
//     let nameValue = foodName.value;
//     let quantityValue = quantity.value;
//     let calorieValue = calories.value;
//     let proteinValue = proteins.value;
//     let carbValue = carbs.value;
//     let fatValue = fats.value;

//     if (!mealValue || !nameValue || !quantityValue || !calorieValue || !proteinValue || !carbValue || !fatValue) { 
//         alert('Please fill out all fields'); 
//         return; 
//     }

//     //Create a new row at the end of the table
//     let newRow = mealTable.insertRow();

//     //Create a new cell for each input in the new row
//     let mealCell = newRow.insertCell();
//     let mealText = document.createTextNode(mealValue);
//     mealCell.appendChild(mealText);

//     let nameCell = newRow.insertCell();
//     let nameText = document.createTextNode(nameValue);
//     nameCell.appendChild(nameText);

//     let quantityCell = newRow.insertCell();
//     let quantityText = document.createTextNode(quantityValue);
//     quantityCell.appendChild(quantityText);

//     let calorieCell = newRow.insertCell();
//     let calorieText = document.createTextNode(calorieValue);
//     calorieCell.appendChild(calorieText);

//     let proteinCell = newRow.insertCell();
//     let proteinText = document.createTextNode(proteinValue);
//     proteinCell.appendChild(proteinText);

//     let carbCell = newRow.insertCell();
//     let carbText = document.createTextNode(carbValue);
//     carbCell.appendChild(carbText);

//     let fatCell = newRow.insertCell();
//     let fatText = document.createTextNode(fatValue);
//     fatCell.appendChild(fatText);

// // Clear the input fields 
// mealInput.value = ''; 
// foodName.value = ''; 
// quantity.value = ''; 
// calories.value = ''; 
// proteins.value = ''; 
// carbs.value = ''; 
// fats.value = '';
    
// });

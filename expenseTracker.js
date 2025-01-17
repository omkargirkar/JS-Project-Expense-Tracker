function handleFormSubmit(event) {
    event.preventDefault();

    const expense = event.target.expense.value;
    const description = event.target.description.value;
    const category = document.getElementById('category').value;

    const obj = {
        expense,
        description,
        category,
    };

    localStorage.setItem(description, JSON.stringify(obj));
    showInfoOnScreen(obj);

    document.getElementById('expense').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';
}

function showInfoOnScreen(obj) {
    const parentElement = document.getElementById('listOfItems');
    const childElement = document.createElement('li');
    childElement.id = obj.description;
    childElement.textContent = `${obj.expense} - ${obj.category} - ${obj.description}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Expense';
    deleteButton.onclick = function(){
        deleteItem(obj.description, childElement)
    } ;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Expense';
    editButton.onclick = function(){
        editItem(obj)
    };

    childElement.appendChild(deleteButton);
    childElement.appendChild(editButton);
    parentElement.appendChild(childElement);
}

function deleteItem(key, childElement) {
    localStorage.removeItem(key);
    childElement.remove();
}

function editItem(obj) {
    document.getElementById('expense').value = obj.expense;
    document.getElementById('description').value = obj.description;
    document.getElementById('category').value = obj.category;

    deleteItem(obj.description, document.getElementById(obj.description));
}


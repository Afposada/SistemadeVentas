document.getElementById('categoryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const categoryName = document.getElementById('categoryName').value;
    if (categoryName) {
        const tableBody = document.getElementById('categoryTableBody');
        const newRow = document.createElement('tr');
        const idCell = document.createElement('td');
        const nameCell = document.createElement('td');
        idCell.textContent = tableBody.rows.length + 1;
        nameCell.textContent = categoryName;
        newRow.appendChild(idCell);
        newRow.appendChild(nameCell);
        tableBody.appendChild(newRow);
        document.getElementById('categoryForm').reset();
    }
});
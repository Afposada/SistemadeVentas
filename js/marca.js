document.getElementById('marcaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombreMarca = document.getElementById('nombreMarca').value;
    if (nombreMarca) {
        const table = document.getElementById('marcasTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.textContent = table.rows.length;
        cell2.textContent = nombreMarca;
        document.getElementById('marcaForm').reset();
    }
});
// app.js
let adquisiciones = [];

document.getElementById('adquisicionForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const presupuesto = document.getElementById('presupuesto').value;
  const unidad = document.getElementById('unidad').value;
  const tipoBien = document.getElementById('tipoBien').value;
  const cantidad = document.getElementById('cantidad').value;
  const valorUnitario = document.getElementById('valorUnitario').value;
  const fecha = document.getElementById('fecha').value;
  const proveedor = document.getElementById('proveedor').value;
  const documentacion = document.getElementById('documentacion').value;

  const valorTotal = cantidad * valorUnitario;
  
  const adquisicion = {
    presupuesto, unidad, tipoBien, cantidad, valorUnitario, valorTotal, fecha, proveedor, documentacion
  };
  
  adquisiciones.push(adquisicion);
  mostrarAdquisiciones();
  document.getElementById('adquisicionForm').reset();
});

function mostrarAdquisiciones() {
  const tbody = document.querySelector('#adquisicionesTable tbody');
  tbody.innerHTML = '';
  
  adquisiciones.forEach((adquisicion, index) => {
    const row = `
      <tr>
        <td>${adquisicion.presupuesto}</td>
        <td>${adquisicion.unidad}</td>
        <td>${adquisicion.tipoBien}</td>
        <td>${adquisicion.cantidad}</td>
        <td>${adquisicion.valorUnitario}</td>
        <td>${adquisicion.valorTotal}</td>
        <td>${adquisicion.fecha}</td>
        <td>${adquisicion.proveedor}</td>
        <td>${adquisicion.documentacion}</td>
        <td><button onclick="eliminarAdquisicion(${index})">Eliminar</button></td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

function eliminarAdquisicion(index) {
  adquisiciones.splice(index, 1);
  mostrarAdquisiciones();
}

function filtrarAdquisiciones() {
  const filtro = document.getElementById('filtro').value.toLowerCase();
  const adquisicionesFiltradas = adquisiciones.filter(adq => adq.unidad.toLowerCase().includes(filtro));
  const tbody = document.querySelector('#adquisicionesTable tbody');
  tbody.innerHTML = '';

  adquisicionesFiltradas.forEach((adquisicion, index) => {
    const row = `
      <tr>
        <td>${adquisicion.presupuesto}</td>
        <td>${adquisicion.unidad}</td>
        <td>${adquisicion.tipoBien}</td>
        <td>${adquisicion.cantidad}</td>
        <td>${adquisicion.valorUnitario}</td>
        <td>${adquisicion.valorTotal}</td>
        <td>${adquisicion.fecha}</td>
        <td>${adquisicion.proveedor}</td>
        <td>${adquisicion.documentacion}</td>
        <td><button onclick="eliminarAdquisicion(${index})">Eliminar</button></td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

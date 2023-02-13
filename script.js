let calcularPrecioFinalBtn = document.getElementById("calcularPrecioFinalBtn");
let inputs = [
  document.getElementById("precio"),
  document.getElementById("impuestos"),
  document.getElementById("descuento"),
];
let precioFinal = document.getElementById("precioFinal");

calcularPrecioFinalBtn.addEventListener("click", function() {
  let values = [];
  for (let i = 0; i < inputs.length; i++) {
    let value = parseFloat(inputs[i].value);
    if (isNaN(value)) {
      alert("Por favor ingrese números válidos para el precio, los impuestos y el descuento");
      return;
    }
    values.push(value);
  }

  let [precio, impuestos, descuento] = values;
  let precioConImpuestos = precio + (precio * impuestos / 100);
  let precioFinalValue = precioConImpuestos - (precioConImpuestos * descuento / 100);
  precioFinal.innerHTML = "Precio final: $" + precioFinalValue.toFixed(2);
});
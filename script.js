let calcularPrecioFinalBtn = document.getElementById("calcularPrecioFinalBtn");
let precioInput = document.getElementById("precio");
let impuestosInput = document.getElementById("impuestos");
let descuentoInput = document.getElementById("descuento");
let precioFinal = document.getElementById("precioFinal");

calcularPrecioFinalBtn.addEventListener("click", function() {
  let precio = parseFloat(precioInput.value);
  let impuestos = parseFloat(impuestosInput.value);
  let descuento = parseFloat(descuentoInput.value);

  if (isNaN(precio) || isNaN(impuestos) || isNaN(descuento)) {
    alert("Por favor ingrese números válidos para el precio, los impuestos y el descuento");
    return;
  }

  let precioConImpuestos = precio + (precio * impuestos / 100);
  let precioFinalValue = precioConImpuestos - (precioConImpuestos * descuento / 100);
  precioFinal.innerHTML = "Precio final: $" + precioFinalValue.toFixed(2);
});
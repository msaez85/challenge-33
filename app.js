/*challenge 33*/

class Producto {
    #codigo = '';
    #nombre = '';
    #precio = '';

    constructor(codigo, nombre, precio) {
      this.#codigo = codigo;
      this.#nombre = nombre;
      this.#precio = precio;
    }
  
    imprimeDatos() {
      document.write(`Los datos de su producto son: código: ${this.#codigo}, Nombre: ${this.#nombre}, Precio: ${this.#precio}$ <br/>`);
    }
  }
  
  const prod1 = new Producto(1, "Manzanas", 50);
  const prod2 = new Producto(2, "Bananas", 20);
  const prod3 = new Producto(3, "Naranjas", 25);
  

  const productos = [prod1, prod2, prod3];
  

  for (let producto of productos) {
    producto.imprimeDatos();
  }
  
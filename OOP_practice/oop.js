//Ejercicio 1
class Persona {
  constructor(nombre, edad, ci) {
    this.nombre = nombre;
    this.edad = edad;
    this.ci = ci;
  }

  mostrarPersona(){
    console.log(`Su nombre es ${this.nombre}, su edad es ${this.edad} y su ci es ${this.ci}`);
  }
  esMayorDeEdad(){
    if(this.edad > 18){
      console.log('Es mayor de edad');
    }
  }
}

const persona1 = new Persona('Juan',23,123123);
//persona1.mostrarPersona();
//persona1.esMayorDeEdad(); 

// Ejercicio 2
class Cuenta {
  constructor(titular,cantidad){
    this.titular = titular;
    this.cantidad = cantidad;
  }
  mostrarDatos(){
    console.log(this.titular, '', this.cantidad, 'Bs.');
  }
  ingresarDinero(monto){
    this.cantidad = parseFloat(this.cantidad + monto).toFixed(2);
  }
  retirarDinero(monto){
    this.cantidad = parseFloat(this.cantidad - monto).toFixed(2);
    this.cantidad = parseInt(this.cantidad);
    console.log(typeof this.cantidad);
  }
}

class CuentaJoven extends Cuenta{
  constructor(titular,cantidad,bonificacion,edad){
    super(titular,cantidad);
    
    this.bonificacion = bonificacion;
    this.edad = edad;
  }
  esMayorDeEdad(){
    if(this.edad >18 && this.edad <25){
      console.log('Todo correcto');
      return 1;
    }
    else{
      console.log('Guardias saquen a ', this.titular);
      return 0;
    }
  }
  retirarDinero(num){
    const edad = this.esMayorDeEdad();
    if(edad ==1){
      this.cantidad = this.cantidad-num;
      console.log(this.cantidad, 'Bs.');
    }
    else if(edad==0){
      console.log('Titular no valido');
    }
  }
}

const cuenta1 = new Cuenta('Mauri',1000);
// cuenta1.ingresarDinero(100.12);
// cuenta1.mostrarDatos();
// cuenta1.retirarDinero(500);
// cuenta1.mostrarDatos();

const mauri = new CuentaJoven('Maux',123,5,22);
mauri.esMayorDeEdad();
mauri.retirarDinero(1);
mauri.mostrarDatos()

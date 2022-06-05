// let valor=[];//array de los articulos
// let total=0;//costo total de la compra

// let descuento=0;//descuento aplicado
// const iva=0.16;//iva
// let opcion=0;
// let pagar=0;
// do{

      // mostrarMenu();
      // opcion=lecOpcion();
      // switch(opcion)
      // {
         // case 1:
               // agregarProducto();
               // break;
         // case 2:
               // mostrarProductos();
               // break;
         // case 3:
               // calcularTotal();
               // break;
         // case 4:
            // pagarProducto();
               // console.log("Gracias por su compra");
               // pagar=-1;
               // break;

               // case 5:
                 
                     // alert("Regrese pronto");
                     
                     // break;
         // default:
               // console.log("Opcion invalida");
      // }  


// }while(opcion!=4||pagar==-1)

// //Funcion que mostrara la opcion
// function mostrarMenu(){
// console.log("1. Agregar producto");
// console.log("2. Mostrar productos");
// console.log("3. Calcular total");
// console.log("4. Pagar");   
// console.log("5. Salir");
// }

// //Funcion que lee la opcion
// function lecOpcion()
// {
// return parseInt(prompt("1. Agregar producto\n"+"2. Mostrar productos\n"+"3. Calcular total\n"+"4. Pagar\n"+"5. Salir\n"+"Ingrese una opcion"));
// }

// //funcion para agregar producto
// function agregarProducto(){
// let nombre_prod=prompt("Ingrese el nombre del producto");
// let precio=parseFloat(prompt("Ingrese el precio del producto"));
// let cant_prod=parseInt(prompt("Ingrese la cantidad del producto"));
   // // return valor.push({nombre_prod:),precio:prompt("Ingrese el precio del producto"),cant_prod:prompt("Ingrese la cantidad del producto")});
   // return valor.push(new Producto(nombre_prod,precio,cant_prod));
// }

// //lista de los prodcutos
// function mostrarProducto(){
   
   // for(let i=0;i<valor.length;i++)
   // {
      // console.log(valor[i].nombre_prod+"---"+valor[i].precio+"---"+valor[i].cant_prod);
   // }
// }

// //funcion para calcular el total
// function pagarProducto(){
   
   // for(let i=0;i<valor.length;i++)
   // {
      // total=total+(valor[i].precio*valor[i].cant_prod);
   // }
   // return total;
// }

// function menu(){

   // do{

      // mostrarMenu();
      // opcion=lecOpcion();
      // switch(opcion)
      // {
         // case 1:
               // agregarProducto();
               // break;
         // case 2:
               // mostrarProductos();
               // break;
         // case 3:
               // calcularTotal();
               // break;
         // case 4:
            // pagarProducto();
               // console.log("Gracias por su compra");
               // pagar=-1;
               // break;

               // case 5:
                 
                     // alert("Regrese pronto");
                     
                     // break;
         // default:
               // console.log("Opcion invalida");
      // }  
// }while(opcion!=4||pagar==-1)
// }

// class Producto{
   // constructor(nombreProd,precio,cant_prod){
      // this.nombreProd=nombreProd;
      // this.precio=precio;
      // this.cant_prod=cant_prod;
   // }
// }





//manda una alerta cuando los datos son ingresados y se oculta el boton
 function mostrar() {
            let nom = document.getElementById('name').value;
            let ed = document.getElementById('edad').value;
            alert('Ingresó el nombre:' + nom +'Y la edad:' + ed);
            let botonForm=document.getElementById('boton');
            botonForm.style.display='none';
        }

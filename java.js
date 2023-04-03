function  DarBienvenida(){
    alert("Bienvenidos a nuestro sitio web de prestamos inmediatos, a continuacion le pediremos datos personales, para verificar que sea apto solicitar prestamos");
}
DarBienvenida();

let nombre_usuario = prompt ("Ingrese su nombre y apellido");
let dni_usuario = prompt ("Ingrese su numero de documento");
let edad_usuario = prompt ("Ingrese su edad");
let edad = edad_usuario;

   if( edad_usuario >=18 ){
      alert ("Correcto, es mayor de edad");
   }
   else{
      alert ("Error, no es mayor de edad, no puede permanecer en esta pagina");
   }
    function intereses_cuotas ( monto , cuotas){
        var interes = 0;
        if( cuotas == 6){
           interes = monto * 0.30;
        }
        else if  ( cuotas == 9){
           interes = monto * 0.50;
        }
        else if ( cuotas == 12){
           interes = monto * 0.80;
        }
        else if (cuotas == 24){
           interes = monto * 1;
        }
        return interes;
     };
     
    intereses_cuotas()    
     
    function iva_prestamo ( total ){
        return total * 0.21;
     };
    
    let monto = prompt ("Ingresa cuanto dinero quieres solicitar:  ");
    monto = parseInt (monto);
    
    let cuotas = prompt ("En cuantas cuotas: 6 , 9 , 12 , 24");
    
    let total = monto + intereses_cuotas (monto , cuotas);
    let total_con_iva = total + iva_prestamo(total);
    
    alert("Pediste:  " + monto);
    alert("Cuotas: " + cuotas);
    alert("Total con intereses: " + total);
    alert("Total con intereses e iva: " + total_con_iva);

    iva_prestamo()


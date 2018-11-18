var  codigo_producto=[909392,849502,456356,123456,132453];
var nombres=["mesa","sillas","Telefono","televisor","camara"];
var precios=[2000,5600,8000,1900,2111];
var existencia=[21,30,14,10,30];
var a;
var b;
a=true;
document.form1.codigo.onkeypress=function(event){
    var c=(event.charCode==0)?event.keyCode:event.charCode;
    if (c==13){
    	var codigo = document.form1.codigo;
    	if (codigo.value!="") {
    		var posicion=codigo_producto.indexOf(parseFloat(codigo.value));
    		if (posicion!=-1) {
    			document.form1.nombre.value=nombres[posicion];
    			document.form1.precio.value=precios[posicion];
    			a=true;
    			}else{
    			alert("El codigo ( "+codigo.value+" ) no existe");
    			a=false;
    		}
    	}
    }
}
b=true;
document.form1.cantidad.onblur=function(event){
   var posicion=codigo_producto.indexOf(parseFloat(codigo.value));
   if (this.value<0 || this.value>existencia[posicion]){
   			document.form1.subtotal.value=("La cantidad de productos disponible es: "+existencia[posicion]);
   			b=false;
  		}else{
  			if (this.value>0 && this.value<=existencia[posicion]){
  			document.form1.subtotal.value=this.value*precios[posicion];
  			b=true;
  			}
  		}
 }
validar_numero=function(event){
	// para que funcione en cualquier navegador
	tecla = (event.keyCode!=0) ? event.keyCode : event.charCode; 
    // para permitir backspace
	if (tecla==8 || tecla==37 || tecla==39) return true; 
    // de define el conjunto de caracteres validas
	patron = /[0-9-]/;
    // se convierte a caracter
	te = String.fromCharCode(tecla);
	// se evalua si la tecla presionada este en el conjunto
    return patron.test(te);
}
document.form1.cantidad.onkeypress = validar_numero;	
document.form1.Agregar.onclick = procesar;
function procesar(){
	alert(this.value);
	if (validar()){
		alert("se proceso");
	}else alert("tienes algo mal")
}
function validar(){
	if(a)
		if(b)
				return true;
			else
				return false;
				

}









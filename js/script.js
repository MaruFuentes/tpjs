let alumno='';
const Historia = "Historia";
const Matematica ="Matematica";
const Lengua = "Lengua";
let notaHistoria = 0;
let notaMatematica =0;
let notaLengua =0;



const Calificar =(_nombreMateria)=>{
    let acumuladorDeNotas =0;
    let nota =0;
   for(let i =0; i<3; i++){ 
    do {
        nota = parseInt(prompt('Ingrese la nota N°'+(i+1)+' Para '+_nombreMateria));
        if (nota < 1 || nota >10) {
            alert('Error de nota el valor es entre 1 y 10')
        }
    } while (nota < 1 || nota >10);
    acumuladorDeNotas = acumuladorDeNotas + nota;
   }
   return acumuladorDeNotas;
}

const Promedio =(notasAcumuladas)=>{
    return (notasAcumuladas/3).toFixed(2);
}



const Menu =()=>{
    let opcion =0;
  do {
     opcion = parseInt(prompt(
        '1- Alta del alumo \n'+
        '2- Calificar alumno \n'+
        '3- Ver promedios \n'+
        '4- Salir'
    ))
    switch (opcion) {
        case 1:
            alumno = prompt('Ingrese el nombre del alumno');
            break;
        case 2:
           if (alumno !='') {
            notaHistoria = Calificar(Historia);
            notaMatematica = Calificar(Matematica);
            notaLengua = Calificar(Lengua);
           }else{
            alert('Cargue el nombre del alumno primero')
           }
            break;   
        case 3:
          if (alumno !='') {
            alert('Los promedios del alumno: '+alumno+'\n'+
            Historia+': ' + Promedio(notaHistoria) +'\n'+
            Matematica+': ' + Promedio(notaMatematica) +'\n'+
            Lengua+': ' + Promedio(notaLengua) +'\n'
           )
          }else{
            alert('Primero cree el alumno e ingrese las notas')
          }
            break; 
        case 4:
            alert('Gracias!!! esta ventana se cerrara');
            window.close();
            break
        default:
           

    }
  } while (opcion !=4);
}



Menu();
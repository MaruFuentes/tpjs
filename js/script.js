let listadoAlumnos=[]

class Materia{
    constructor(nombreMateria){
        this.nombre=nombreMateria;
    }
    nota1=0;
    nota2=0;
    nota3=0;

    Promedio(){
        return ((this.nota1+this.nota2+this.nota3)/3).toFixed(1)
    }
}

class Alumno{
    constructor(_dni,_nom,_ape,_año){
        this.dni=_dni
        this.nombre=_nom
        this.apellido=_ape
        this.añoencurso=_año
    }

    materias=[new Materia('Matematica'),new Materia('Lengua'),new Materia('Historia')];
}


const cargaAlumno=()=>{
    let dni= parseInt(prompt('Ingrese el dni del alumno'))
    let nom=prompt('Ingrese el nombre del alumno')
    let ape=prompt('Ingrse apellido del alumno')
    let año=prompt('Ingrese el año de curso del alumno');
    listadoAlumnos.push(new Alumno(dni,nom,ape,año));
}


const CalificarAlumno=()=>{
    let dni =parseInt(prompt('Ingrese dni del alumno'))
    for (let i = 0; i < listadoAlumnos.length; i++) {
       if (dni===listadoAlumnos[i].dni){
        for (let j = 0; j < listadoAlumnos[i].materias.length; j++) {
            listadoAlumnos[i].materias[j].nota1=parseInt(prompt('Ingrese primer calificacion para '+listadoAlumnos[i].materias[j].nombre))
            listadoAlumnos[i].materias[j].nota2=parseInt(prompt('Ingrese segunda calificacion para '+listadoAlumnos[i].materias[j].nombre))
            listadoAlumnos[i].materias[j].nota3=parseInt(prompt('Ingrese tercera calificacion para '+listadoAlumnos[i].materias[j].nombre))
        }
       }
        
    }
}

const verpromedio=()=>{
    let dni =parseInt(prompt('Ingrese dni del alumno'));
    for (let i = 0; i < listadoAlumnos.length; i++){
        if (dni===listadoAlumnos[i].dni){
            alert('El alumno '+listadoAlumnos[i].nombre+ ' del año: '+listadoAlumnos[i].añoencurso+'\n'+
            'Tiene los siguientes promedios \n'+
            'Materia: '+listadoAlumnos[i].materias[0].nombre+' Promedio: '+listadoAlumnos[i].materias[0].Promedio()+'\n'+
            'Materia: '+listadoAlumnos[i].materias[1].nombre+' Promedio: '+listadoAlumnos[i].materias[1].Promedio()+'\n'+
            'Materia: '+listadoAlumnos[i].materias[2].nombre+' Promedio: '+listadoAlumnos[i].materias[2].Promedio()+'\n'
            )
        }
    }
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
          cargaAlumno();
            break;
        case 2:
            if (listadoAlumnos.length >0) {
                CalificarAlumno();
            }else{
                alert('Debe dar de alta al menos un alumno')
            }
            break;   
        case 3:
            if (listadoAlumnos.length >0) {
                verpromedio()
            }else{
                alert('Debe dar de alta al menos un alumno')
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
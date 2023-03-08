let listadoAlumnos = [];
let AlumnoRef = 0;

let boton = document.getElementById('btnAlta');
if (boton) {
    boton.addEventListener('click', () => { document.location.href = "#alta" })
}
let botoncalificar = document.getElementById('btncalificar');
botoncalificar.addEventListener('click', () => { document.location.href = "#calificar" });

let bonpromedio = document.getElementById('btnpromedio');
bonpromedio.addEventListener('click',()=>{document.location.href="#idpromedios"})



class Materia {
    constructor(nombreMateria) {
        this.nombre = nombreMateria;
    }
    nota1 = 0;
    nota2 = 0;
    nota3 = 0;


}

class Alumno {
    constructor(_dni, _nom, _ape, _año) {
        this.dni = _dni
        this.nombre = _nom
        this.apellido = _ape
        this.añoencurso = _año
    }

    materias = [new Materia('Matematica'), new Materia('Lengua'), new Materia('Historia')];
}


const Promedio = (p1, p2, p3) => {
    return ((p1 + p2 + p3) / 3).toFixed(1)
}




const cargaAlumno = () => {
    let existe = false;
    let dni = document.getElementById('dniinput').value;
    let nom = document.getElementById('nmaeinput').value;
    let ape = document.getElementById('lasnameinput').value;
    for (let index = 0; index < listadoAlumnos.length; index++) {
      
        if (listadoAlumnos[index].dni==dni) {
            existe =true;
        }
    }
    if (!existe) {
        listadoAlumnos.push(new Alumno(dni, nom, ape));
         GuardarLocalStorage();
         document.getElementById('alertAlta').style.display='block';
         setTimeout(() => {
             document.getElementById('alertAlta').style.display='none';
         }, 3000);
    }else{
        document.getElementById('alertFalloAlta').style.display='block';
        setTimeout(() => {
            document.getElementById('alertFalloAlta').style.display='none';
        }, 3000);
    }
    


    document.getElementById('dniinput').textContent =""
    document.getElementById('nmaeinput').textContent ="";
     document.getElementById('lasnameinput').textContent ="";


}

const GuardarLocalStorage = () => {
    localStorage.setItem('Alumnos', JSON.stringify(listadoAlumnos))
}

const CargarDesdeLocalstorage = () => {
    listadoAlumnos = JSON.parse(localStorage.getItem('Alumnos'))
}

CargarDesdeLocalstorage()
const verPromedio = () => {
  
    let nota1= listadoAlumnos[AlumnoRef].materias[0].nota1 
    let nota2=listadoAlumnos[AlumnoRef].materias[0].nota2 
    let nota3= listadoAlumnos[AlumnoRef].materias[0].nota3
    let primedionota = Promedio(nota1,nota2,nota3);
 
    document.getElementById('nota1mate').textContent=nota1
    document.getElementById('nota2mate').textContent=nota2
    document.getElementById('nota3mate').textContent=nota3
    document.getElementById('prommate').textContent = primedionota

     nota1= listadoAlumnos[AlumnoRef].materias[1].nota1 
     nota2=listadoAlumnos[AlumnoRef].materias[1].nota2 
     nota3= listadoAlumnos[AlumnoRef].materias[1].nota3
     primedionota = Promedio(nota1,nota2,nota3);
 
    document.getElementById('nota1leng').textContent=nota1
    document.getElementById('nota2leng').textContent=nota2
    document.getElementById('nota3leng').textContent=nota3
    document.getElementById('promleng').textContent = primedionota

    nota1= listadoAlumnos[AlumnoRef].materias[2].nota1 
     nota2=listadoAlumnos[AlumnoRef].materias[2].nota2 
     nota3= listadoAlumnos[AlumnoRef].materias[2].nota3
    primedionota = Promedio(nota1,nota2,nota3);
 
    document.getElementById('nota1hist').textContent=nota1
    document.getElementById('nota2hist').textContent=nota2
    document.getElementById('nota3hist').textContent=nota3
    document.getElementById('promhist').textContent = primedionota
 }

const BuscarAlumno = (idelemento,idalert) => {

    let dni = document.getElementById(idelemento).value
    let existe = false;
        if (listadoAlumnos) {
            for (let i = 0; i < listadoAlumnos.length; i++) {
                if (dni == listadoAlumnos[i].dni) {
                    existe = true;
                    if (idelemento != "bucaralumnoinputnotas") {
                    document.getElementById('dnibuscado').textContent = listadoAlumnos[i].dni
                    document.getElementById('nombuscado').textContent = listadoAlumnos[i].nombre
                    document.getElementById('apebuscado').textContent = listadoAlumnos[i].apellido
                    }
                    AlumnoRef = i;
                }
        
            }
        }
        if (!existe) {
            document.getElementById(idalert).style.display='block';
            setTimeout(() => {
                document.getElementById(idalert).style.display='none';
            }, 5000);
        }

    if (idelemento == "bucaralumnoinputnotas") {
         verPromedio()
    }
}
const CalificarAlumno = () => {
    let nummateria = parseInt(document.getElementById('selecMateria').value);


    listadoAlumnos[AlumnoRef].materias[nummateria].nota1 = parseInt(document.getElementById('nota1').value)
    listadoAlumnos[AlumnoRef].materias[nummateria].nota2 = parseInt(document.getElementById('nota2').value)
    listadoAlumnos[AlumnoRef].materias[nummateria].nota3 = parseInt(document.getElementById('nota3').value)
    GuardarLocalStorage()

}






import Nombre from "./nombre.js"
import Doctor  from "./doctor.js"
import Paciente from "./paciente.js"
import Fecha from "./fecha.js"
import Cita from "./cita.js"
import Tiempo from "./tiempo.js"
import Hospital from "./hospital.js"
import PacienteAsegurado from "./paciente-asegurado.js"

class Main{

    constructor(){
        this.testAlex = new Nombre("Alex","Herrera","Hernandez")
        this.testJeo= new Nombre("Jeo", "Santos", "Alvarez")
        this.testTiempo = new Tiempo(8,25,"pm")

        let datosPaciente = {
            nombre: this.testAlex,
            fechaNacimiento: new Fecha(new Date(2004,2,10)),
            telefono: "3121943772"
        }
        let datosPacienteAsegurado = {
            nombre: new Nombre("Hector","Ramirez","Gomez"),
            fechaNacimiento: new Fecha(new Date(1994,9,4)),
            telefono: "3129439333",
            numeroPoliza: 1688,
            fechaFinVigencia: new Fecha(new Date(2010,4,10)),
            compañia: "Telcel"
        }
        let datosDoct = {
            nombre: this.testJeo,
            especialidad: "Neurologia",
            telefono: "3129439233",
            cedula: "4475208"
        }
        let datosHospital = {
            nombre: "Hospital Puerta de hierro",
            direccion: "Calle Ayuntamiento, Num #543"
        }
        this.testHosp = new Hospital(datosHospital)
        this.paciente = new Paciente(datosPaciente)
        this.testDoct = new Doctor(datosDoct)
        this.pacienteAsegurado = new PacienteAsegurado(datosPacienteAsegurado)

        let datosCita = {
            fecha: new Fecha(new Date(2002,5,20)),
            hora: this.testTiempo,
            doctor: this.testDoct,
            paciente: this.paciente
        }

        this.testCitaa = new Cita(datosCita)
    }

    testNombre(){
        
        console.log(this.testAlex.getNombreCompleto())
        console.log(this.testAlex.getApellidoNombre())
        console.log(this.testAlex.getIniciales())

    }

    testDoc(){
        console.log(this.testDoct.getPerfil())
    }

    testPac(){
        console.log(this.paciente.getPerfil())
        
        console.log(this.pacienteAsegurado.getPerfil())
    }
    testCita(){
        console.log(this.testCitaa.getCita())
    }

    testHospital(){
        
        console.log(this.testHosp.buscarDoctor(this.testDoct))
        console.log(this.testHosp.buscarCita(this.testCitaa))
        console.log(this.testHosp.eliminarDoctor(this.testDoct))
        console.log(this.testHosp.eliminarCita(this.testCitaa))

        this.testHosp.registrarDoctor(this.testDoct)
        this.testHosp.registrarCita(this.testCitaa)

        
        console.log(this.testHosp.buscarDoctor(this.testDoct))
        console.log(this.testHosp.buscarCita(this.testCitaa))
        console.log(this.testHosp.eliminarDoctor(this.testDoct))
        console.log(this.testHosp.eliminarCita(this.testCitaa))

        this.testHosp.listarDoctores()
        this.testHosp.listarCitas()

     
        console.log(this.testHosp.registrarDoctor(this.testDoct))
        console.log(this.testHosp.registrarCita(this.testCitaa))
        console.log(this.testHosp.registrarDoctor(this.testDoct))
        console.log(this.testHosp.registrarCita(this.testCitaa))

        console.log(this.testHosp.modificarDoctor(this.testDoct, this.testDoct))
        console.log(this.testHosp.modificarCita(this.testCitaa, this.testCitaa))
        this.testHosp.listarDoctores()
        this.testHosp.listarCitas()
    }
}

let test = new Main();
test.testNombre();
test.testDoc();
test.testPac();
test.testCita();
test.testHospital();
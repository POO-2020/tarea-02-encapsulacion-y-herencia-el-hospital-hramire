import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Paciente from "./paciente.js";
import Doctor from "./doctor.js";
import Cita from "./cita.js";
import Hospital from "./hospital.js";

class Main {
  constructor(tiempo,fecha) {
    this.tiempo = new Tiempo(9, 45, "pm");
    this.fecha = new Fecha(5, 2, 2009);
    this.nombre = new Nombre("Juan","Perez","Gonzalez");
    this.paciente = new Paciente(this.nombre,this.fecha, 3121943772)
    this.doctor = new Doctor(this.nombre, "cardiologo", 3121943772, "rwiewoijfis")
    this.cita = new Cita (this.fecha, this.tiempo, this.doctor, this.paciente)
    this.hospital= new Hospital (this.nombre,this.direccion)
    
  }
  getTiempo() {
    console.log(this.tiempo.getFormato24());
  }
  getFecha() {
    console.log(this.fecha.getAños());
    console.log(this.fecha.getMeses());
    console.log(this.fecha.getSemanas());
    console.log(this.fecha.getDias());
    console.log(this.fecha.getDiaFecha());
    console.log(this.fecha.getFecha());
  }
  getNombre(){
      console.log(this.nombre.getNombreCompleto());
      console.log(this.nombre.getApellidoNombre());
      console.log(this.nombre.getIniciales());
  }
  getPaciente(){
      console.log(this.paciente.getPerfil());
  }
  getDoctor(){
      console.log(this.doctor.getPerfil());
  }
  getCita(){
      console.log(this.cita.getCita())
  }
  getHospital(){
      this.hospital.registrarDoctor(this.doctor)
      this.hospital.listarDoctor()
      this.hospital.registrarCita(this.cita)
      this.hospital.listarCita()
      
  }

  
}
let app = new Main();
app.getTiempo();
app.getFecha();
app.getNombre();
app.getPaciente();
app.getDoctor();
app.getCita();
app.getHospital();


function ejercicio9(){

    function Persona(nombre, edad, género) {
        this.nombre = nombre;
        this.edad = edad;
        this.género = género;
      }
      
      Persona.prototype.obtDetalles = function() {
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad);
        console.log("Género: " + this.género);
      }
      
      function Estudiante(nombre, edad, género, curso, grupo) {
        Persona.call(this, nombre, edad, género);
        this.curso = curso;
        this.grupo = grupo;
      }
      
      Estudiante.prototype = Object.create(Persona.prototype);
      Estudiante.prototype.constructor = Estudiante;
      
      Estudiante.prototype.registrar = function() {
        console.log(this.nombre + " se ha registrado en el curso " + this.curso + " y en el grupo " + this.grupo);
      }
      
      function Profesor(nombre, edad, género, asignatura, nivel) {
        Persona.call(this, nombre, edad, género);
        this.asignatura = asignatura;
        this.nivel = nivel;
      }
      
      Profesor.prototype = Object.create(Persona.prototype);
      Profesor.prototype.constructor = Profesor;
      
      Profesor.prototype.asignar = function() {
        console.log(this.nombre + " está asignando la asignatura " + this.asignatura + " en el nivel " + this.nivel);
      }

      var estudiante1 = new Estudiante("Juan", 20, "Masculino", "Programación", "Grupo A");
      var profesor1 = new Profesor("María", 35, "Femenino", "Matemáticas", "Avanzado");
      
      console.log("Detalles del estudiante:");
      estudiante1.obtDetalles();
      estudiante1.registrar();
      
      console.log("\nDetalles del profesor:");
      profesor1.obtDetalles();
      profesor1.asignar();
}
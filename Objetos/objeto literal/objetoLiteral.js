const natalia = {
    //Creaciónd e atributos (sustantivos);
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS"
    ],

    //Creacion de metodos (Comportamientos-verbos);
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
};

//Hacer que natalia apruebe otro curso

/* natalia.cursosAprobados.push("Curso de Responsive Designe"); */
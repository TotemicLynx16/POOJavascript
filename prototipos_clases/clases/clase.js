//Prototipos con la sintaxis de clases

class Student{
    constructor({
        name,
        age,
        cursosAprobados = [],
        email
    }){
        //Aqui se guardan todos los atributos de la clase
        //recuerda que son sustantivos
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }

    // Fuera del metodo constructor crearas los metodos
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

//Creando una nueva instancia de la clase-prototipo Student

const miguelito = new Student({
    name: "Miguelito Torres",
    age: 28,
    cursosAprobados: [
        "Curso de Introducción a la terminal y linea de comandos",
        "Curso de ES6"
    ]
});

const marlon = new Student({
    email: "marlon9945@gmail.com",
    name: "Marlon Sandoval",
    cursosAprobados: [
        "Curso de fundamentos de bases de datos",
        "Curso básico de Javascript",
        "Curso de manipulación de arrays Javascript"
    ],
    age: 23
})
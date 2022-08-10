//Creando el primer prototipo (Molde de estudiantes)
function Student(name, age, cursosAprobados){
    this.name = name; //atributo nombre
    this.age = age; //atributo edad
    this.cursosAprobados = cursosAprobados; //atributo

    /* this.aprovarCurso = function(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    } */ //una forma de agregar metodos
};

//Segunda forma de Crear metodos

Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

//Crear una instancia del prototipo

const juanita = new Student(
    "Juana de Arco",
    15, 
    [
        "Curso de introducción a la Producción de videojuegos",
        "Curso de Creación de Personajes"
    ]
);
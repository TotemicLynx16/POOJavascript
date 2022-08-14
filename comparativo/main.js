//Definición de clases
class Courses {
    constructor({
        id,
        name,
        classes = []
    }){
        this.id = id;
        this._name = name; //Con guion bajo no se puede llamar a este atributo desde afuera (privated)
        this.classes = classes;
    }

    get name(){
        return this._name; 
    }
    set name(nuevoNombre){
        if(nuevoNombre === "Curso pesimo de programación Básica"){
            console.error("weeey... no chingues");
        }
        else{
            this._name = nuevoNombre;
        }
        
    }
}

class LearningPaths {
    constructor({
        //parametros
        id,
        name, 
        courses = []
    }){
        //atributos
        this.id = id;
        this.name = name; 
        this.courses = courses;
    }
    
    addCourse(cursoEscuela){
        this.courses.push(cursoEscuela);
    }
}

class Students{
    constructor({
        //Declaración de parametros de la clase
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }){
        //Declaración de atributos de la clase
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths= learningPaths;
    }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Definición de instancias de la clase
//Cursos
const cursoProgBásica = new Courses({
    name: "Curso gratis de programación Básica",
});

const cursoDefinitivoHTMLYCSS = new Courses({
    name: "Curso definitivo HTML y CSS",
});

const cursoFrontendDeveloperBasico = new Courses({
    name: "Curso de frontend developer Basico",
});

const cursoFrontendDeveloperIntermedio = new Courses({
    name: "Curso de frontend developer Intermedio",
});

const cursoPracticoHTMLCSS = new Courses({
    name: "Curso práctico HTML y CSS",
});
const cursoDataBusiness = new Courses({
    name: "Curso Data Business",
});
const cursoDataViz = new Courses({
    name: "Curso Data Viz",
});
const cursoUnity3D = new Courses({
    name: "Curso de Unity 3D",
});
const cursoUnrealEngine = new Courses({
    name: "Curso Unreal Engine",
});
///////////////////////////////////////////////////////////////////////////////////////
//LearningPaths
const escuelaDesarrolloWeb = new LearningPaths({
    id: 1,
    name: "Escuela de desarrollo Web",
    courses: [
        cursoFrontendDeveloperBasico,
        cursoFrontendDeveloperIntermedio,
        cursoDefinitivoHTMLYCSS,
        cursoPracticoHTMLCSS
    ]
}); 

const escuelaData = new LearningPaths({
    id: 2,
    name: "Escuela de Data Science",
    courses: [
        cursoDataBusiness,
        cursoDataViz
    ]
});

const escuelaVgs = new LearningPaths({
    id: 3,
    name: "Escuela de videojuegos",
    courses: [
        cursoProgBásica,
        cursoUnity3D,
        cursoUnrealEngine
    ]
});
///////////////////////////////////////////////////////////////////////////////////////
//Definición de estudiantes
const marlon = new Students({
    name: "Marlon Sandoval",
    email: "marlon9945@gmail.com",
    username: "TotemicLynx",
    twitter: "TotemicLynx",
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaData
    ],
});

const miguel = new Students({
    name: "Miguel Tottes",
    email: "miguel.trabajo@gmail.com",
    username: "Nerd_Herds",
    instagram: "Nerd_Herds",
    learningPaths: [
        escuelaVgs,
        escuelaDesarrolloWeb
    ]
});
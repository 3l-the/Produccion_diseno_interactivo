var studentName = "Arturo Diaz";
var studentAge = 22;
var isEnrolled = true
var gradeMath = 95;
var gradeScience = 90;
var gradeLanguage = 97;
var totalClasses = 30;
var attendedClasses = 29;
var averageGrade = (gradeMath + gradeScience + gradeLanguage) / 3; 
var attendancePercentage = (attendedClasses * 100) / totalClasses;

console.log("INFORMACION DEL ALUMNO");
console.log("   Nombre del Alumno: " + studentName);
console.log("   Edad: " + studentAge);
if (isEnrolled === true){
    console.log("   Estado de inscripcion: Inscrito");
} else {
    console.log("   Estado de inscripcion: No inscrito");
}
console.log("CALIFICACIONES");
console.log("   Matematicas: " + gradeMath);
console.log("   Ciencias: " + gradeScience);
console.log("   Lenguaje: " + gradeLanguage);
console.log("   Promedio: " + averageGrade);
console.log("ASISTENCIAS");
console.log("   Total de clases: " + totalClasses);
console.log("   Asistencia del alumno: " + attendedClasses);
console.log("   Porcentaje de asistencia: " + attendancePercentage + "%");



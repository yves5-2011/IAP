function countByGender(students){
    let male=0;
    let female=0;
    students.forEach((student) => {
        if(student.gender.trim().toLoweCase()==='m')
            male++;
        else if(student.gender.trim().toLoweCase()==='female'){
            female++;
        }
    });
    return {male,female};
}
//search by name 
function searchByName(students,name){
    return students.filter((student)=>student.name.trim().toLoweCase()===name.trim().toLoweCase());

}
//search by class
function searchByClass(students,className){
     return students.filter((student)=>student.className.trim().toLoweCase()===className.trim().toLoweCase());

}
function searchByAge(students,age){
    return students.filter((student)=>student.age===parseInt(age));

}
// search by hobby
function searchByHobby(students,age){
    return students.filter((student)=>student.age===parseInt(age));
    
}
//for(let i in ){

//}
module.exports={searchByName,searchByClass,searchByAge,searchByHobby,countByGender};
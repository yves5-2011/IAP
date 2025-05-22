const students=[];
// function to add student
function addStudents(name,age,gender,location,hobby,classyigamo){
    let umunyeshuri={
        name:name,
        age:age,
        gender:gender,
        location:location,
        hobby:hobby,
        classyigamo:classyigamo,
    }
    //now can push object in main array
    students.push(umunyeshuri);
}
//function to update student
function updateUmunyeshuri(name,newData){
    let index= students.findIndex((std)=>{
       return std.name.trim().toLowerCase()=== std.name.trim().toLowerCase();

    })
    if(index !== -1){
        students[index]={...students[index],...newData}
return true;

    }
    return false;
}



addStudents('yves',20,'m','kagarama','vollyball','l4sod');
addStudents('set',26,'f','kagarama','vollyball','l4sod');
updateUmunyeshuri('set',{name:'wera',age:23,gender:'m',location:'gatenga',});

//console.table(students)
module.exports={addStudents,updateUmunyeshuri,students};
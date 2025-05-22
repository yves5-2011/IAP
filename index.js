const {searchByName,searchByClass,searchByAge,searchByHobby,countByGender}=require('./utils');
const {addStudents,updateUmunyeshuri,students}=require('./data');
const path=require('path');
const fs=require('fs');

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function saveData(){
    const dat
}
function showMenu(){
    console.log(`
        =============================
        student management system
        =============================
        1.add student
        2.View All student
        3.search student by name
          4.search student by class
          5.filter by age
          6.filter by hobby
          7.count male/female students
          8. update student info
          0. exit
        `);
        rl.question('enter your choice(1-0)',(choice)=>{
            switch(choice){
                case '1':
                    rl.question('enter name ',(name)=>{
                        rl.question('enter age',(age)=>{
                            rl.question('enter gender ',(gender)=>{
                                rl.question('enter location',(location)=>{
                                    rl.question('enter hobby',(hobby)=>{
                                     rl.question('enter class',(classye)=>{
                                        addStudents(name,age,gender,location,hobby,classye);
                                        showMenu();
                                     })
                                    })
                                })
                            })
                        })
                    })
                    break;
                    case '2':
                        console.table(students);
                     showMenu();
                     break;
                     case '3':
                        rl.question(" enter the name",(names)=>{
                            console.table(searchByName(students,names));
                        });
                        showMenu();
                        break;
                        case '4':
                            rl.question("enter the class",(classe)=>{
                                console.table(searchByClass(students,classe));
                                rl.close();
                            })
                            showMenu();
                            break;
                            case '5':
                                rl.question("enter the age",(age)=>{
                                    console.table(searchByAge(students,age));
                                    rl.close();
                                })
                                showMenu();
                                break;
                                case '6':
                                    rl.question('enter the hobby',(hoby)=>{
                                        console.table(searchByHobby(students,hoby))
                                    });
                                    case '7':
                                        rl.question('enter the gender',(genders)=>{
                                            console.table(countByGender(students,genders));
                                            //rl.close();
                                            
                                        });
                                        showMenu();
                                        
                                        case '8':
                                            rl.question('edit the student information',()=>{
                                              
                                            })
                                        
                                case '0':
                                    rl.close();
                                    break;
                                    default:
                                        console.log("invalid the choice ! try again");
                                        showMenu();
                                
            }
        })
}
showMenu()

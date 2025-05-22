const { stringify } = require('querystring');

const fs =require('fs').promises;
const stud={
    name:'kalake',
    address:'gatenge',
    age:'43'
}
let sms=`'yuijklsdasm,mcdm
asscgvjbhjkjkbjjnksas`
const filename='std.json';
fs.writeFile(filename,JSON.stringify(stud),'utf-8');
fs.writeFile('sms.txt',sms,'utf-8');
fs.readFile('sms.txt','utf-8').then((content)=>{
    console.log(content);
}).catch(err=>{
    console.log(err)
});
fs.appendFile('sms.txt',`\namateka ya rap\n`).then(()=>{
    console.log('good')
}).catch(err=>{
    console.log('fooo')
})

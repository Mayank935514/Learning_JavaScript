/** Iterating over array 
 * Array -- It is collection of one or more items in a sequence
*/

let studentsName = ["Ravi", "Aryan", "Ansh"];
console.log(studentsName);

let arrLength = studentsName.length;
console.log(arrLength);

for(let i=0;i<arrLength;i++)
{
    console.log(studentsName[i]);
}

// Or we can write like this //
for(let sname of studentsName)
{
    console.log(sname);
}

/** for let in 
 * It will give all the indexes of an array
*/
for(let sname in studentsName)
{
    console.log(sname);
}
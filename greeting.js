function getYearOfBirth(age) {
    if (2019 -age < 0) {
        throw new Error ("Age can not be negative");
    }
   else return 2019 - age; 
}

function createGreeting(name, age) {
const yearOfBirth = getYearOfBirth(age);   
return `Hi, my name is ${name} and I\'m ${age} years old. I was born in ${yearOfBirth}.`;
}

try {
    const greeting1 = createGreeting('Victor', -26);
  } 
catch(error) {
    console.error(Error);}

    //let greeting1 = createGreeting();
//console.log(createGreeting('Victor', 26));

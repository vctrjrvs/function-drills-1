function getYearOfBirth(age) {
    if (2019 -age < 0) {
        throw new Error ("Age can not be negative");
    }
   else return 2019 - age; 
}

function createGreeting(name, age) {
    const yearOfBirth = getYearOfBirth(age); 
    if (typeof (name) === 'undefined' || typeof(age) === 'undefined') {
        throw new Error ("Arguments not valid.")
    }
    return `Hi, my name is ${name} and I\'m ${age} years old. I was born in ${yearOfBirth}.`;
}

try {
    createGreeting(" ", -26);
  } 
catch(error) {
    console.error(Error);}

    //let greeting1 = createGreeting();
//console.log(createGreeting('Victor', 26));

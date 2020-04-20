function getYearOfBirth(age) {
    return 2019 - age; 
}

function createGreeting(name, age) {
    if (age < 0) {
        throw new Error ("Age can not be negative");
    }

  if (typeof age !== 'number') {
        throw new Error ("Age must be a number");
    }

    const yearOfBirth = getYearOfBirth(age); 
    if (name === 'undefined' || age === 'undefined') {
        throw new Error ("Arguments not valid.")
    }
    return `Hi, my name is ${name} and I\'m ${age} years old. I was born in ${yearOfBirth}.`;
}

try {
    const greeting1 = createGreeting("Victor", 26);
    console.log(greeting1);
  } 
catch(e) {
    console.error(e.message);}

    //let greeting1 = createGreeting();
//console.log(createGreeting('Victor', 26));

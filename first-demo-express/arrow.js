let sum =  (a, b) =>  {return a + b}; // this is arrow function in es 6

let square = (a) => a * a;

let createUser = (name, age, location) => {
    return {
        pname : name,
        page : age,
        plocation : location
    };
}

let ankit = createUser('ankit', 20, 'vit');
console.log(ankit);

let name = 'Ankit';

{
    let name = 'Ashok';
    console.log(name);
    console.log(square(10));
}

    console.log(name);
    console.log(sum(3, 4));
    

// function expression, in js we can assign a function to a variable

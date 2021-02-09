// Object literals

// Same variable & object key name

let name = 'Abdullah';

let bio = {
    name
}

console.log(bio);

// assign variable value into objects key

let s_1 = `Subject-1`;
let s_2 = `Subject-2`;

let credits = {
    [s_1] : 'Bangla First Paper',
    [s_2] : 'English First Paper' 
}

console.log(credits);

// assign variable value into object key with arrethmatic calculation

let s = `Student`;

let s_info = {
    [s + '-name']: `Abdullah`
}

console.log(s_info);

// creating function into object key

let emp = `Employee`;

let emp_info = {
    [emp + '_name'] : 'Abdullah',
    'designation' : 'Assistant Officer',
    more(){
        return `Mr. ${this.Employee_name} is worked as an ${this.designation} in 2019`
    }
}

console.log(emp_info)
console.log(emp_info['more']())


// making object into function

let a_name = 'Abdullah'; // applicant name
let v_for = 'Japan'; // visa for

let a_details = (a_name,v_for) => {                     
    return {a_name, v_for}
}

console.log(a_details(a_name,v_for))
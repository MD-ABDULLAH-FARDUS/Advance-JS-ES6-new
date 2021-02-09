// Before destructing array value assigning process

let user = ['name','age'];
let a_name = user[0];
let a_age = user[1];
console.log(a_name, a_age)

// After destructing array value assigning process

let data = ['Abdullah', ,'Chattogram']
let [name = 'user name', age = 'user age', city = 'user city'] = data; // setting the default value for variable if there missing of any user data 
console.log(name, age, city);

// destructing array value assigning for nested array values

let f_data = ['Md. Olliullah', 'Jannat', 1989, ['Shanto', 'Boby']]
let [father_n, mother_n, marriage_d, [sis_n, ysis_n]] = f_data;

console.log(ysis_n)

// rest operator using in destructing nested array values

let c_name = ['SSIS', 'NHT', 'NCC', 'KSI-GMT']
let [c_1, ...c] = c_name;

console.log(c);

// destructing array into function

occupation = ([Teaching,Student,Teamplay]) => {
    console.log(Teaching);
    console.log (Student);
    console.log(Teamplay);
}
occupation(['teaching', 'student', 'teamplay'])

// alternative way of assigning value of functions included destructive array as a variable

district = () => {
    return ['Chattogram','Comilla','Noakhali','Dhaka','Bogra','Dinajpur' ]
}

let [...dist] = district();
console.log(dist[5])



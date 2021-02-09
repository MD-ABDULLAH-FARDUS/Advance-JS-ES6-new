// spread operator

let student_result = (name, ...number) => {
    let sum = 0;
    for(let i in number) {
        sum += number[i]
    }
    console.log(name,sum)
}
let numbers = [25, 30, 34, 45]
student_result('Abdullah', ...numbers)

// array concatenation 

let gpa = [3.5, 2.9, 3.1, 4.2, 4.5]
let marks = [245, 205, 211, 265, 270]

let gpa_marks = [...gpa, ...marks]
console.log(gpa_marks)

// object concatenation

let student_bio_info = {
    name: 'abdullah',
    age: 27,
    nationality: 'Bangladeshi'
}

let student_edu_info = {
    MBA: 'HRM',
    BBA: 'Finance',
    HSC: 'Business Study',
    SSC: 'Science'
}

let student_info = {...student_bio_info, ...student_edu_info}
console.log(student_info)

// Before reset operator 

function sum() {
    let sum = 0;
    for (let i in arguments) {
        sum += arguments[i]
    }
    console.log(sum);
}
sum(1,2,5,6)

// After reset operator

let student_result = (name, ...number) => {
    let total_number = 0;
    for(let i in number) {
        total_number += number[i]
    }
    console.log(name,total_number)
}

student_result('Abdullah Fardus', 75, 80, 85, 95, 82);
// 3 methods used in class
// constructor method
// prototype method
// static method

class bio_data {
    constructor(name) {
        console.log (name)
    }
    age(age) {
        console.log (age)
    }
    static ocup(ocupation) {
        console.log(ocupation);
    }
}

let data = new bio_data('Abdullah');
data.age(`29 years 9 month 15 days`);
bio_data.ocup('Unemployed');

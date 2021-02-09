// Class Inheritance or clone class

class bro {
    constructor(father,mother) {
        let name = 'Sony';
        console.log(`${name} son of ${father} & ${mother}`);
    }
}

class sis extends bro {
    constructor() {
        super();
        console.log(`Brother Sister`);
    }

}
let abt_bro = new sis('Olliullah','Jannatul');

// multidimentional inheritance class 

class emp {
    constructor(name, desig, salary) {
        this.emp_name = name;
        this.emp_desig = desig;
        this.emp_salary = salary;
        console.log(`${this.emp_desig} ${this.emp_name}'s salary ${this.emp_salary}`);
    }
}

class ca extends emp {
    constructor(names, desigs, salarys) {
        super();
        this.ca_name = names;
        this.ca_desig = desigs;
        this.ca_salary = salarys;
        console.log(`${this.ca_desig} ${this.ca_name} ${this.ca_salary}`);
    }
}

let emps = new ca('Abdullah', 'Officer', 25000);
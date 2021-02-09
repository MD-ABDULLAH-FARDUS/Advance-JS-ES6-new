// Modules Export  

let message = 'Mr. Abdullah Start to learn ES6';

 let user = () => {
    console.log('Hello Everyone');
}

class test {
    constructor() {
        console.log('Constructor Method');
    }
}

export {message, user, test}


// Export as default function 

export default function() {
    console.log(`I'm Default Function`)
}
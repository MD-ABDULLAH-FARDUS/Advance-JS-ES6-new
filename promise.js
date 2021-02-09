// Promise()
// resolve() ---> then()
// reject() ---> catch()

function prom(complete) {

    return new Promise(function(resolve, reject){
        if(complete) {
            resolve('I am successful.')
        }else {
            reject('I am failed.')
        }
    });
}

console.log(prom(true))



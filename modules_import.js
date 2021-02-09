// Modules Import 
import {message as msg, user, test} from './modules_export';
console.log(msg);

user();

let tst = new test();

// Import Default Function 

import default_data from './modules_export';

default_data()
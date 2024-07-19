// a file called functionOne.js
const functionOne = () => console.log('FUNCTION ONE!');

export { functionOne };


// another JS file
// Note: You can only use single quotes (') or double quotes (") for import statements 
import { functionOne } from './functionOne';

functionOne(); // this should work as expected!
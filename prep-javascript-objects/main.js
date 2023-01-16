const person = { firstName: 'Nathan', lastName: 'Chon', hobby: 'Tennis' };
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", ' ', fullName);
person.job = 'Tennis Instructor';
console.log("The person's cureent job is:", ' ', person.job);
person.previousJob = 'Logistician';
console.log("The person's previous job was:", ' ', person.previousJob);
console.log('The complete person object:', ' ', person);

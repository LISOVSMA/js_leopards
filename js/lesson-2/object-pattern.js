'use strict';

const logFunction = function (user) {
  const { firstName, lastName, age, gender, userEmail, userPhoneNumber } = user;

  console.log(firstName, lastName, age, gender, userEmail, userPhoneNumber);
};

// logFunction('Amelia', 'Burgess', 30, 'female', 'apjez@eh.aq', '(096) 35-21-476');
// logFunction();

// logFunction({
//   firstName: 'Amelia',
//   lastName: 'Burgess',
//   age: 30,
//   gender: 'female',
//   userEmail: 'apjez@eh.aq',
//   userPhoneNumber: '(096) 35-21-476',
// });

// logFunction({
//   firstName: 'Hunter',
//   lastName: 'Hicks',
//   age: 40,
//   gender: 'male',
//   userEmail: 'test@eh.aq',
//   userPhoneNumber: '(096) 45-21-476',
// });

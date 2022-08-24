"use strict";
console.clear();

const now = new Date();
const test = new Date();
console.log(typeof now, now);
console.log(typeof test, test);
console.log(typeof Date);
console.log(typeof new Date(), new Date());

// 1. The 'now' variable is the name given to a new element being created.
// 2. The type of the 'now' is the type of its assigned element which is an object.
// 3. The 'Date' is a JS built in constructor function.
// 4. The type of Date is a function
// 5. We get the current date and time - 2022-08-24T13:01:41.690Z
// 6. We get its constructor function type: [Function: Date]
// 7. We get an object value with current date and time: 2022-08-24T12:50:31.891Z
// 8. Yes, it is truthy because it is not one of the falsy values. Everything that is not a falsy value is truthy.
// 9. Checking the strict equality of 'now' to 'test' returns false, because although they have the same value assigned to them, they are different variables and occupy different space in memory. Having the same value does not mean they are the same object.
console.log(now === test);
// 10. Checking the strict equality of 'now' to 'Date' returns false, for the same reason described above. Even though the current date value was assigned to the 'now' variable, does not mean the Date function object is the same, and they occupy different space in memory.
console.log(now === Date);
// 11. (same as above)
console.log(now === new Date());
// 12. (same as above) - even though they have the same written syntax, and the same value as output, they are two different objects occupying different reference in memory, therefore they are two different objects and are not the same object. They simply have the same constructor name and output value.
console.log(new Date() === new Date());

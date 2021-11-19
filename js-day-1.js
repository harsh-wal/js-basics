console.log('test');
let a1;
const b1 = 1;

const person = { name: 'harsh' };
person.name = 'adfds';
console.log(person.name);

const a = [];

a.push(1);
a.push(2);
a.push('adffsads');
a.push({ name: 'sfds' });

let a2 = 1;
let val = false;
let str = 'sdafdsaf';
let float = 1.2;
let c;
let obj = {};
let arr = [];
let js = null;

const run = () => {
  return 'afdas';
};

console.log(run());

function run1() {
  return { name: 'sadsa' };
}

console.log(run1());

// let, const // block scope

const a4 = 'abc';
const b4 = 'def';

const c2 = `this is a sting ${a4}${b4}`;

const person1 = { name: 'ssfd', age: 10, gender: 'f' };

const { name, ...obj1 } = person1;

person1.name;
person1.age;

const array1 = [1, 2, 3, 4, 5];
const [one, ...anotherArray] = array1;

array1[0];
array1[1];
array1[2];

function getName({ name }) {
  return name;
}

console.log(getName(person));

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

const array = [
  { name: 'asf', age: 10 },
  { name: 'safdsafd', age: 30 },
];

console.log(
  array.forEach(({ name }) => {
    console.log(name);
  })
);

console.log(
  array.map(({ name }) => {
    return { name };
  })
);

let array = [
  'alex pizza pasta',
  'alex pizza pizza',
  'alex noodle',
  'bob pasta',
  'bob noodle sandwich pasta',
  'bob steak noodle',
];

for (let x of array) {
  console.log(x.split(' ')[0]);
}

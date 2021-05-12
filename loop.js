// Simple way
const person = { name: "Shoaib", Age: 25, Gender: "Male" };
for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}

// Another way
const anotherPerson = {
  Name: 'Shoaib',
  Age: 25,
  Gender:"Male"
};

for (const [key, value] of Object.entries(anotherPerson)) {
  console.log(`${key}: ${value}`);
}

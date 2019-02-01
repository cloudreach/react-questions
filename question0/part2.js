function formatName (person) {
  return person.age > 20
  ? person.name.toUpperCase()
  : person.name.toLowerCase()
}

function formatNames (people) {
  // Improve this code with some idiomatic ES6 features. In particular:
  // - Can we rewrite the loop and conditional into a functional style? (filter, map, etc.)
  // - Do we need have formatName as a separate function?

  const formattedNames = []

  for (let i = 0; i < people.length; i++) {
    if (people[i].age != null) {
      formattedNames.push(formatName(people[i]))
    }
  }

  return formattedNames
}

console.log(formatNames([
  { name: 'John', age: 15 },
  { name: 'Sandra', age: 32 },
  { name: 'Michael', age: 25 },
  { name: 'Jim' },
  { name: 'Anne', age: 12 }
]))

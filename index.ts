const name = "chuhojin",
  age = 24,
  gender = "male"

const say = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`)
}

say(name, age)

export {}
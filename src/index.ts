const name = "chuhojin",
  age = 24,
  gender = "male"

const say = (name:string, age:number, gender:string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`
}

console.log(say("chuhojin", 25, "maile"))


export {}
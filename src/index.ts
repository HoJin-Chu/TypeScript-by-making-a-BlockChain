import * as CryptoJS from "crypto-js"

// Block Structure
class Block {
  public index:number 
  public hash:string
  public previousHash:string
  public data:string
  public timestamp:number

  static calculateBlockHash = (
    index:number,
    previousHash:string, 
    timestamp:number, 
    data:string
  ) :string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString()

  constructor(
    index:number, 
    hash:string, 
    previousHash:string, 
    data:string, 
    timestamp:number
  ) {
    this.index = index
    this.hash = hash
    this.previousHash = previousHash
    this.data = data
    this.timestamp = timestamp
  }
}

const genesisBlock:Block = new Block(0, "12345412312", "", "Hello", 123456)

let blockchain: Block[] = [genesisBlock]

const getBlockchain = ():Block[] => blockchain

const getLatestBlock = ():Block => blockchain[blockchain.length - 1]

const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000)

// class Human {
//   public name: string 
//   public age: number
//   public gender: string
//   constructor(name: string, age:number, gender:string) {
//     this.name = name
//     this.age = age
//     this.gender = gender
//   }
// }

// const chu = new Human("CHU", 25, "male")

// const say = (person: Human): string => {
//   return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
// }

// console.log(say(chu))


export {}
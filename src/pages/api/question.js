

 import {dataObject} from '../../../public/questionSet'



export default function handler(req, res) {
  const value = Math.floor(Math.random()*40)
  console.log(value,'val')
    res.status(200).json(dataObject.question.slice(value, value+10))
  }
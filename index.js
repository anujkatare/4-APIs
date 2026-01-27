import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
const app = express()
dotenv.config({})

const token = jwt.sign({
    username: 'anujkatare',
    email: 'anujkatare2006@gmail.com'
},
    process.env.SECRET_KEY,
    {
        expiresIn: '1d'
    }
)

console.log(`Token : ${token}`)

app.use(express.json())

const data = [
  {
    "class": 10,
    "subject": "Math",
    "chapter": "Real Numbers",
    "startDate": "2024-01-01",
    "endDate": "2024-01-05"
  },
  {
    "class": 10,
    "subject": "Math",
    "chapter": "Polynomials",
    "startDate": "2024-01-06",
    "endDate": "2024-01-10"
  },
  {
    "class": 10,
    "subject": "Math",
    "chapter": "Linear Equations",
    "startDate": "2024-01-11",
    "endDate": "2024-01-15"
  },
  {
    "class": 10,
    "subject": "Math",
    "chapter": "Quadratic Equations",
    "startDate": "2024-01-16",
    "endDate": "2024-01-20"
  },
  {
    "class": 10,
    "subject": "Math",
    "chapter": "Arithmetic Progressions",
    "startDate": "2024-01-21",
    "endDate": "2024-01-25"
  },
  {
    "class": 9,
    "subject": "Science",
    "chapter": "Matter in Our Surroundings",
    "startDate": "2024-02-01",
    "endDate": "2024-02-05"
  },
  {
    "class": 9,
    "subject": "Science",
    "chapter": "Is Matter Around Us Pure",
    "startDate": "2024-02-06",
    "endDate": "2024-02-10"
  },
  {
    "class": 9,
    "subject": "Science",
    "chapter": "Atoms and Molecules",
    "startDate": "2024-02-11",
    "endDate": "2024-02-15"
  },
  {
    "class": 9,
    "subject": "Science",
    "chapter": "Structure of the Atom",
    "startDate": "2024-02-16",
    "endDate": "2024-02-20"
  },
  {
    "class": 9,
    "subject": "Science",
    "chapter": "The Fundamental Unit of Life",
    "startDate": "2024-02-21",
    "endDate": "2024-02-25"
  },
  {
    "class": 8,
    "subject": "History",
    "chapter": "How, When and Where",
    "startDate": "2024-03-01",
    "endDate": "2024-03-05"
  },
  {
    "class": 8,
    "subject": "History",
    "chapter": "From Trade to Territory",
    "startDate": "2024-03-06",
    "endDate": "2024-03-10"
  },
  {
    "class": 8,
    "subject": "History",
    "chapter": "Ruling the Countryside",
    "startDate": "2024-03-11",
    "endDate": "2024-03-15"
  },
  {
    "class": 8,
    "subject": "History",
    "chapter": "Colonialism and the City",
    "startDate": "2024-03-16",
    "endDate": "2024-03-20"
  },
  {
    "class": 8,
    "subject": "History",
    "chapter": "Weavers, Iron Smelters and Factory Owners",
    "startDate": "2024-03-21",
    "endDate": "2024-03-25"
  },
  {
    "class": 7,
    "subject": "Geography",
    "chapter": "Environment",
    "startDate": "2024-04-01",
    "endDate": "2024-04-05"
  },
  {
    "class": 7,
    "subject": "Geography",
    "chapter": "Inside Our Earth",
    "startDate": "2024-04-06",
    "endDate": "2024-04-10"
  },
  {
    "class": 7,
    "subject": "Geography",
    "chapter": "Our Changing Earth",
    "startDate": "2024-04-11",
    "endDate": "2024-04-15"
  },
  {
    "class": 6,
    "subject": "Civics",
    "chapter": "Understanding Diversity",
    "startDate": "2024-05-01",
    "endDate": "2024-05-05"
  },
  {
    "class": 6,
    "subject": "Civics",
    "chapter": "Diversity and Discrimination",
    "startDate": "2024-05-06",
    "endDate": "2024-05-10"
  }
]


app.get('/', (req, res)=>{
    res.send('Api is working')
})



app.post('/api/v1/chapters', (req, res) => {
    
    if(req.headers.authorization === `Bearer ${token}`){
    res.send(req.body)
    }else{
        res.send("You are unauthorized, ERROR 404")
    }
    
})


app.listen(3000, ()=>{
    console.log('app is running on port 3000')
})
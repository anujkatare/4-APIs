import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import data from './data.json' with {type: 'json'}
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



app.get('/', (req, res)=>{
    res.send('Api is working')
})

app.get('/api/v1/chapters', (req, res) => {

if(req.query.class && req.query.subject && req.query.chapter && req.query.startDate && req.query.endDate){
      const filteredArray = data
.filter(item => (Number(req.query.class) === item.class))
.filter(item => req.query.subject === item.subject)
.filter(item => req.query.chapter === item.chapter)
.filter(item => req.query.startDate === item.startDate)
.filter(item => req.query.endDate === item.endDate)

res.send(filteredArray)
}else if(req.query.limit){
    const array = []
    let count = 0
    data.forEach((item) => {
        if(count < req.query.limit){
            count++
           array.push(item)
        }
    })
    res.send(array)
}else if(req.query.page){
    const array = []
    let count = 0
    data.forEach((item) => {
        if(count < req.query.page*10){
            count++
           array.push(item)
        }
    })
    res.send(array)
}else{
    res.send(data)
}

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
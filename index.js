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

let filteredArray = []

data.forEach((item) => {

    if(req.query.class){
        if(Number(req.query.class) === item.class){
            if(req.query.subject){
                if(req.query.subject === item.subject){
                    if(req.query.chapter){
                        if(req.query.chapter === item.chapter){
                            if(req.query.startDate){
                                if(req.query.startDate === item.startDate){
                                   if(req.query.endDate){
                                    if(req.query.endDate === item.endDate){
                                        filteredArray.push(item)
                                    }
                                   }else{
                                    filteredArray.push(item)
                                   }
                                }
                            }else{
                                filteredArray.push(item)
                            }
                        }  
                    }else{
                        filteredArray.push(item)
                    }
                }  
            }else{
            filteredArray.push(item)
            }
        
        }
    }

})
res.send(filteredArray)
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
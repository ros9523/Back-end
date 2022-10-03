const express= require('express');

const app = express();


app.get('/',(request, response)=>{
    console.log(request.method)
    response.status(200).json ({message:"Rosa Diaz, 27, Nicaragua" })
})

app.post('/metas', (request, response)=>{
   console.log(request.method) 
   response.status(200).json({message:{
    interest1:'fitness',
    interest2:'healthy food',
    interest3:'investments'
   }
})
})

app.patch('/metas', (request, response)=>{
   console.log(request.method) 
   response.status(200).json({message:'learn python and italian'})
})

app.put('/bussiness', (request, response)=>{
   console.log(request.method) 
   response.status(200).json({message:'google and Facebook'})
})

app.listen(8000, ()=>{
    console.log('server started at port 8000')
})


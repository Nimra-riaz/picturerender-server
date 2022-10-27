const { query } = require('express')
const express = require('express')
const app = express()
const port = 3002
const path = require('path')
// creating middleware
app.use(express.static('public'))


app.get('/u', (req, res) => {
  res.send('Hello World!')

})

app.get('/img' ,(req,res)=> {
  let imagePath= path.join(__dirname,'image.jpg');
  res.sendFile(imagePath)
})


app.get('/dynamicimage' ,(req,res)=> {
  
  let imgName= req.query.imagename

  let finalImage= path.join(__dirname, imgName)

  if(imgName)
  {
    res.sendFile(finalImage)
    
    //res.send("Not Found");

  } else if(imgName== null){
    //res.send("not found")
    //res.sendFile(finalImage);
    console.log("not found")

  }
  
    
 
  

})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
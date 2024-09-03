import express from "express"
const app = express()
const port = 3000
import fileupload from "express-fileupload"
app.use(fileupload())
app.post('/',(req:any,res:any)=>{
  console.log(req.files.key.data.toString())
  res.send('OK')
})
app.listen(port,()=>{
  console.log("Running on", port)
})


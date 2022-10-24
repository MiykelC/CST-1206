const express =require('require');
const app = express();
const PORT = 5000;

app.set("view engine", "ejs")

app.get("/", (req,res)=>{
  res.render("index", {name: "Michael"})
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})


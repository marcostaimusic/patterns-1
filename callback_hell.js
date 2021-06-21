const fs = require("fs");
const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
str
.split("")
.reverse()
.join("");


fs.promises.readdir(inbox)
.then(x=>{x.forEach(file=>
  fs.promises.readFile(join(inbox,file), 'utf8')
  .then(text=>
    fs.promises.writeFile(join(outbox,file), reverseText(text))
    )
    )})
    
    
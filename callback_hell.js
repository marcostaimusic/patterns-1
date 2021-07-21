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


async function getFilePaths(){
  return fs.promises.readdir(inbox)
}

async function printFiles () {
  const files = await getFilePaths() // Assume this works fine

  files.forEach(async (file) => {
    const text = await fs.promises.readFile(join(inbox,file), 'utf8')
    await fs.promises.writeFile(join(outbox,file), reverseText(text))
  })
}

printFiles()



// fs.promises.readdir(inbox)
// .then(x=>{x.forEach(file=>
//   fs.promises.readFile(join(inbox,file), 'utf8')
//   .then(text=>
//     fs.promises.writeFile(join(outbox,file), reverseText(text))
//     )
//     )})
    
    
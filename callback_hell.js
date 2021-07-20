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
   let files = await fs.promises.readdir(inbox)
   return files
}

async function printFiles () {
  const files = await getFilePaths();

  for (const file of files) {
    const contents = await fs.promises.readFile(join(inbox,file), 'utf8');
    console.log(contents)
    return contents;
  }
}

async function reverse(){
  const text = await printFiles()
  fs.promises.writeFile(join(outbox,file), reverseText(text))
}

printFiles()

// fs.promises.readdir(inbox)
// .then(x=>{x.forEach(file=>
//   fs.promises.readFile(join(inbox,file), 'utf8')
//   .then(text=>
//     fs.promises.writeFile(join(outbox,file), reverseText(text))
//     )
//     )})
    
    
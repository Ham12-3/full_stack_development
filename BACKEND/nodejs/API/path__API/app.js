const path =require('path');

// path.basename() 

const filename= path.basename("./sample.txt")

console.log(filename); // sample.txt

// path.dirname() 

const filename2 = path.dirname("./sample.txt")

console.log(filename2); // .

// Extension name 

const filename3 = path.extname("./sample.txt")

console.log(filename3); // .txt

// path.join() 

const filename4 = path.join("path","to","file","sample.txt")

console.log(filename4); // path/to/file/sample.txt

// path.resolve() 

const resolvePath =path.resolve("path","to","file","sample.txt")

console.log(resolvePath); // /Users/username/Desktop/BACKEND/nodejs/API/path__API/path/to/file/sample.txt


// path.isAbsolute() 

const isAbs = path.isAbsolute("/Users/username/Desktop/BACKEND/nodejs/API/path__API/path/to/file/sample.txt")

console.log(isAbs); // true

// path.parse() 

const parsedPath = path.parse(" /Users/username/Desktop/BACKEND/nodejs/API/path__API/path/to/file/sample.txt")

console.log(parsedPath); // { root: '/', dir: ' /Users/username/Desktop/BACKEND/nodejs/API/path__API/path/to/file', base: 'sample.txt', ext: '.txt', name: 'sample' }

console.log(parsedPath.root); // /

console.log(parsedPath.dir); // /Users/username/Desktop/BACKEND/nodejs/API/path__API/path/to/file

console.log(parsedPath.base); // sample.txt

console.log(parsedPath.ext); // .txt
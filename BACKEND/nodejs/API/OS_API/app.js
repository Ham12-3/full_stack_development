const os = require('os');

console.log(os);


// os.arch() 

console.log("CPU arcitecture", os.arch()); // x64

// os.cpus() 

console.log("CPU Information", os.cpus()); // Information about each core of the CPU


// os.endianness() 

console.log("Endianness", os.endianness()); // LE


// os.freemem() 

console.log("Free Memory", os.freemem()); // 1234567890

// os.homedir() 

console.log("Home Directory", os.homedir()); // /home/username

// os.hostname() 

console.log("Hostname", os.hostname()); // hostname


// os.loadavg() 

console.log("Load Average", os.loadavg()); // [0, 0, 0]

// os.networkInterfaces() 
console.log("Network Interfaces", os.networkInterfaces()); // Information about the network interfaces


// os.platform( ) 


console.log("Platform", os.platform()); // linux

// os.release() 

console.log("Release version", os.release()); // 4.15.0-29-generic


// os.totalmem() 

console.log("Total Memory", os.totalmem()); // 1234567890
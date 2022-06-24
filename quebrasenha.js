const fs = require('fs');
const md5 = require('md5')
let i = 0
var password = i

  const data = fs.readFileSync('./senha', 'utf8');

  while (true) {
      const hash = md5(i.toString())
        //console.log(i, hash)
        if ((i % 1000000) == 0) {
            console.log(i)
        }
        if (data == hash){
            console.log('A senha é:', i)
            break
        }
        i = i + 1
}

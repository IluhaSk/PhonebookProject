
var serverCreation = require('./server')//.serverCreation;
var fs = require('fs').promises;
//import _ from 'lodash';
var path = require('path');



const parsingServer = async (port) => {
  const data = await fs.readFile(path.resolve(__dirname, 'phonebook.txt'));

  // BEGIN (write your solution here)
  let usersById = new Object; 
  const makePhonebook = await function (data) {
    const phonebookArray = data.toString('utf-8').split('\n'); 
    phonebookArray.pop(); 
    let i = 1;
    //console.log(phonebookArray);
    for (let str of phonebookArray) {
      let id = str.split('|')[0];
      let key = `${id}`;
      //console.log(key);
      let nameUs = str.split('|')[1].trim();
      let phoneUs = str.split('|')[2].trim();
      //console.log(id, nameUs, phoneUs); 
       //usersById = {'${id}': id};
       usersById[key] = {
         name: nameUs, 
         phone:phoneUs};
        i++;
      
      
    }
    //console.log(usersById);
    return usersById;
  
  }
  makePhonebook(data);
  // END

  const server = serverCreation(usersById);
  server.listen(port, () => console.log('Starting on port ' + port));
};

parsingServer(7000);


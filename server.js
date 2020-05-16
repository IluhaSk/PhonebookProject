//import { promises as fs } from 'fs';
var path = require('path');
var http = require('http');
var fs = require('fs').promises;


  // BEGIN (write your solution here)
  //const recCount(text) => {

  //}
  const runServer = async (port) => {

    const phonebook = await fs.readFile('phonebook.txt');

    await http.createServer((request, responce) => {
   	   //responce.write(toString(arr(phonebook)));
   	   	phonebookStr = phonebook.toString('utf-8');
   	   responce.write('Welcome to The Phonebook\nRecords count: ' + (phonebookStr.split('\n').length));
       responce.end();
  }).listen(port, () => console.log('Started on port ' + port));

  // END
};

runServer(7000);
//server.on('request', (phonebook) => {
//	responce.write('Welcome to The Phonebook\nRecords count: ' + (phonebook.split('\n').length));
//	responce.end; /
//}); 
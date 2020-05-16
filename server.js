var http = require('http');

const serverCreation = (usersById) => http.createServer((request, response) => {
  request.on('end', () => {
    if (request.url === '/') {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(usersById).length}`,
      ];
      response.end(messages.join('\n'));
    } else if (request.url.startsWith('/search')) {
      // BEGIN (write your solution here)
        const myURL = new URL(request.url, 'http://localhost:9000');
        const searcStr = myURL.searchParams.get('q'); 
        let messages =[];
        for (let key of Object.keys(usersById)) {
          if (searcStr !==null) { 
            let nameToSearch = searcStr.toLowerCase(); 
            let nameSearchIn = usersById[key].name.toLowerCase();
            if (nameSearchIn.includes(nameToSearch)) {
            messages.push(`${usersById[key].name}, ${usersById[key].phone}`);
          }
        }
        
        }
        let messStr = messages.join('\n');
          messStr.trim();
          console.log(messStr);
          response.write(messStr);
        response.end();

    
      // END
    }
  });

  request.resume();
});

module.exports = serverCreation; 
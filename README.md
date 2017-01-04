# Welcome to Wiki Race

Wiki Race is an arcade style game where you race between two Wikipedia articles clicking only on the links.

A beta version of the app can be found at [this link](https://wiki-race.herokuapp.com/). As of now, all testing has been done in Chrome so it may act up in other browsers.

##Technologies used
Node.js  
Express.js  
Postgres  
[pg-promise](https://github.com/vitaly-t/pg-promise)  
[Bluebird](http://bluebirdjs.com/)  
[request](https://github.com/request/request)  
[dotenv](https://github.com/motdotla/dotenv)  
[Mercury Web Parser](https://mercury.postlight.com/web-parser/)

##Run locally

\**This app uses the [Mercury Web Parser](https://mercury.postlight.com/web-parser/) API which requires you to have an api key. Follow the link
to sign up and get your unique key. Add it to a .env file as MERCURY_API_KEY=\<your unique key\>*

```bash
cd wiki-race
```

Create Postgres db and seed
```bash
psql -f wiki-race.sql
```

Run local server
```bash
npm start
```

Enjoy the race!

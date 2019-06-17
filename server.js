const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname+'/dist/marsPhotos'));

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/dist/marsPhotos/index.html');
});

app.get('/photos', (req, res) => {
  const camera = req.query.camera;
  const sol = req.query.sol;
  const photoUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=DEMO_KEY`;
  //const photoUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY';
  fetch(photoUrl)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      res.json({message: 'Tout est OK', donnees: data});
    })
    .catch(err => console.log(err))
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

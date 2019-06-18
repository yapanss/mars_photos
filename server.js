const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname+'/dist/marsPhotos'));

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/dist/marsPhotos/index.html');
});

app.get('/photos', (req, res) => {
  const camera = req.query.camera;
  const sol = req.query.sol;
  const photoUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=DEMO_KEY`;

  fetch(photoUrl, {timeout: 5000})
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      console.log(data);
      res.json({success: true, data});
    })
    .catch(err => {
      console.log(err);
      const timeoutMessage = 'Error! your request timed out...';
      const errorMessage = 'Oops! An error occured...';
      res.json({success: false, err: err.type =='request-timeout'? timeoutMessage : errorMessage });
    })
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

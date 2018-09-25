var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index')
})


app.listen(3000, (err) => {
  if(err) return console.log('Hubo un error'), process.exit(1);

  console.log('Gretta escucha en el puerto 3000');
})

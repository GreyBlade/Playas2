//Para la creacion del servidor de node
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//ruta en donde pondremos nuestra api para acceder a la bd
const api = require('./server/routes/api');
const users = require('./server/routes/users.routes');

const port = 3000;

const app = express();

//carpetas a la cual entrara express para mostrar en el navegador
//dist seria la carpeta de distribucion que seria la que se mostraria
//cuando el proyecto este listo por completo
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api' , api);
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.listen(port, function(){
  console.log("Server running on localhost " + port);
});
app.use('/api/users', users);

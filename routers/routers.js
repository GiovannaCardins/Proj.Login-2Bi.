//! Importar o Router e instancia:
const { Router } = require('express');
const routers = new Router();

//! Importa os Controllers:
const Home = require('../controller/homeController');
const Session = require('../controller/sessionController');

const auth = require('../middleware/auth');

//! Definir as nossas rotas:
routers.get('/', Home.index);

routers.get('/login', Session.home);

routers.post('/logar', Session.logar);

routers.get('/home', auth, Home.home);

routers.get('/logout', Session.logout);

//! Exportar as rotas:
module.exports = routers;

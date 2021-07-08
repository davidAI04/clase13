const express = require('express');
const app = express();

require('dotenv').config();

/// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { middleware, contactValidation, existValidation } = require('./middleware/index');

///SERVICES
const { addContact } = require('./services/contact.service');

app.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
})

app.get('/', middleware, (req, res) => {
  console.log(req.saludo);
  //res.send(req.message);
})

app.post('/contacto', contactValidation, existValidation, (req, res) => {
  const data = addContact(req.body);
  return res.status(200).json(data);

})
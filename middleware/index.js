
const { findContact } = require('../services/contact.service');

const middleware = (req, res, next) => {
  console.log(req.body.message);
  req.saludo = 'hola desde midd'
  next();
}

const contactValidation = (req, res, next) => {
  const { nombre, apellido, email } = req.body;

  if (!nombre || !apellido || !email) {
    return res.status(400).json('Datos invalidos!!')
  }
  next()
}

const existValidation = (req, res, next) => {
  const { email } = req.body;
  const result = findContact(email);
  console.log('result->', result);
  if (result) {
    return res.status(409).json('el contacto ya existe')
  }
  next()
}



module.exports = {
  middleware,
  contactValidation,
  existValidation
}
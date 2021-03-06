/* eslint-disable linebreak-style */
const card = require('express').Router();
const {
  getAllCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/card');

const {
  validateCardPost,
  validateParams,
} = require('../middlewares/inputRequestValidation');

card.get('/cards', getAllCards);
card.post('/cards', validateCardPost, createCard);
card.delete('/cards/:id', validateParams, deleteCard);
card.put('/cards/:cardId/likes', likeCard);
card.delete('/cards/:cardId/likes', dislikeCard);

module.exports = card;

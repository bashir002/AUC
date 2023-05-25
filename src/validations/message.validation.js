const Joi = require('joi');

const sendMessage = {
  query: Joi.object().keys({
    reciever: Joi.string(),
  }),
  body: Joi.object()
    .keys({
      fullName: Joi.string().trim().required(),
      emailAddress: Joi.string().trim().email().required(),
      phoneNumber: Joi.string().required(),
      courseOfStudy: Joi.string().trim().required(),
      interestedCountry: Joi.string().trim().required(),
      hasUniversityInMind: Joi.string().required(),
      budget: Joi.string(),
    })
    .required(),
};

module.exports = {
  sendMessage,
};

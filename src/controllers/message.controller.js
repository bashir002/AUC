const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const { emailService } = require('../services');

const sentMessage = catchAsync(async (req, res) => {
  const { reciever } = pick(req.query, ['reciever']);
  emailService
    .sendEmail(reciever, 'New Contact', JSON.stringify(req.body))
    .then(() => {
      res.status(httpStatus.CREATED).send({
        status: 'success',
        message: `Message sent to ${reciever}`,
      });
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        status: 'error',
        message: error.message,
      });
    });
});

module.exports = {
  sentMessage,
};

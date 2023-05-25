const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { emailService } = require('../services');

const sentMessage = catchAsync(async (req, res) => {
  emailService
    .sendEmail('playplugtest@gmail.com', 'New Contact', JSON.stringify(req.body))
    .then(() => {
      res.status(httpStatus.CREATED).send({
        status: 'success',
        message: 'Message sent to saliubashir08@gmail.com',
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

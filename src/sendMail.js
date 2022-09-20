// sendEmail.js

const mailer = require('./mailer');

mailer.sendMail(
  {
    from: 'monmail@mail.com',
    to: 'sonmail@mail.com',
    subject: 'This is a test email',
    text: 'Hello world',
    html: '<p>Hello <em>world</em></p>',
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);
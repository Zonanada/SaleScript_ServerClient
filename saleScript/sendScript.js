const nodemailer = require('nodemailer')
const fs = require('fs');


// let testEmailAccount = await nodemailer.createTestAccount()


function sendScript(mail, nameScript) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'scriptForm@yandex.ru',
      pass: '6626553000d',
    },
  })

  transporter.sendMail({
    from: '<scriptForm@yandex.ru>',
    to: mail,
    subject: 'Готовый скрипт продаж',
    text: 'Скрипт готов!',
    // html:
    //   "<p>",
    attachments: [{
      filename: `${nameScript}.xlsx`,
      path: `./saleScript/readySimple/${nameScript}.xlsx`
    }
    ],
  })
}

module.exports = sendScript;
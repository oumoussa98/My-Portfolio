const { sendMail } = require('./utils/mailer')
const { errorResponse, successResponse } = require('./utils/callbacks')

exports.handler = async event => {
  const body = JSON.parse(event.body)

  if (event.httpMethod !== 'POST') errorResponse('Invalid method POST only')

  const emailTO = process.env.MAIL_TO

  const text = `name: ${body.name} 
                email: ${body.email} 
                phone: ${body.phone} 
                message: ${body.message}`

  await sendMail({
    to: emailTO,
    text,
  })

  console.log('\x1b[32m', 'Task finished :)')
  return successResponse('Data sent successsfully :)')
}

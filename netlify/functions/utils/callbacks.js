const errorResponse = err => {
  console.log('\x1b[31m', '============= Error response ===============')
  if (!!err.status) {
    return {
      statusCode: err.status,
      body: JSON.stringify(err),
    }
  }
  return {
    statusCode: 500,
    body: JSON.stringify({ error: err }),
  }
}

const successResponse = res => {
  console.log('\x1b[32m', '============= Success response ===============')
  if (!!res.status) {
    return {
      statusCode: res.status,
      body: JSON.stringify(res),
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(res),
  }
}
module.exports = {
  errorResponse,
  successResponse,
}

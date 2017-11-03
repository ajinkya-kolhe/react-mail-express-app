module.exports = (request, response, next) => {
  if (!request.user) {
    // forbidden
    return response.status(403).send({ error: 'You must log in!'});
  }
  next();
};

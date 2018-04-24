module.exports = (req, res, next) =>
  req.user.credits > 0
    ? next()
    : res.status(403).send({ error: "Not enough credits." });
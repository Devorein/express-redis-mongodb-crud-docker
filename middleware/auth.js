const auth = (req, res, next) => {
  const { user } = req.session;
  if (!user) {
    return res.status(401).json({
      status: 'failure',
      message: 'Unauthorized'
    });
  }

  next();
};

module.exports = auth;

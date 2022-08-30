let viewCount = 0;
module.exports.viewCounter = (req, res, next) => {
  viewCount += 1;
  console.log(viewCount);
  next();
};

var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};

var generateLocationMessage = (from, latitude, longitutde) => {
  return {
    from,
    url: `https://google.com/maps?=${latitude},${longitude}`
    createdAt: new Date().getTime();
  };
};

module.exports = {generateMessage, generateLocationMessage};

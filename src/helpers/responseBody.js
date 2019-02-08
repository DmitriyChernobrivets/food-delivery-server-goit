const responseBody = (statusText, key, data) => {
  return {
    status: statusText,
    [key]: data
  };
};
module.exports = responseBody;

const handleError = (res, code, message) => {
  res.status(code).json({
    status:"error",
    message
  })
  res.end();
}
export default handleError;
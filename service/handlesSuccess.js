const handleSuccess = (res, data)=>{
  res.status(200).json({
    status:'Success',
    data
  })
  res.end();
}
export default handleSuccess;
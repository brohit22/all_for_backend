const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (error) {
    throw new ApiError(err.code || 500, `${err.message}`);
    // res.status(err.code || 500).json({
    //   success: false,
    //   message: err.message,
    // });
  }
};

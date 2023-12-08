import { asyncHandler } from "../utils/asyncHandler.js"; // helper

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Ok" });
});

export { registerUser };

import { asyncHandler } from "../utils/asyncHandler.js"; // helper
import { apiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { apiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: "Ok" });

  /*
  * Steps to follow create good register controller
  ? get user deatils from frontend or use postman
  ? validation - not empty
  ? check if user already exits : { username , email}
  ? check for images and avatar 
  ? upload them to cloudinary and also get back by multer
  ? Create user object - create entry in DB
  ? remove password and refresh token field from response
  ? check user creation
  ? return response
*/

  // * 1. get user deatils from frontend or use postman
  const { username, fullname, email, password } = req.body;
  console.log(email);

  // * 2. validation - not empty
  if (
    [username, fullname, email, password].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw apiError(400, "All fields are required");
  }

  // * 3. check if user already exits : { username , email}
  const existedUser = User.findOne({ $or: [{ username }, { email }] });

  if (existedUser) {
    throw apiError(409, "username and email already existed");
  }

  // * 4. check for images and avatar
  const avatarImageLocalPath = req.files?.avatar[0].path;
  const coverImageLocalPath = req.fiels?.coverImage[0].path;

  if (!avatarImageLocalPath) {
    throw apiError(400, "Avatar file is required");
  }

  // * 5. upload them to cloudinary and also get back by multer
  const avatar = await uploadOnCloudinary(avatarImageLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw apiError(400, "Avatar file is required");
  }

  // * 6. Create user object - create entry in DB
  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || " ",
    email,
    password,
    username: username.toLowerCase(),
  });

  // * 7. remove password and refresh token field from response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // * 8. check user creation
  if (!createdUser) {
    throw new apiError(
      500,
      "Something went wrong while registering, please try again"
    );
  }

  // * 9. return response
  return res
    .status(201)
    .json(new apiResponse(200, "User created Successfully "));
});

export { registerUser };

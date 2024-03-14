import User from '../models/user.js';

export const registerController = async(req, res)=>{
    try{
  const {name, email, password} = req.body;
  console.log(name);
  if(!name){
    next("please provide name");
  }
  if(!email){
    next("please provide email");
  }
  if(!password){
    next("please provide password");
  }
 const existingUser = await User.findOne({email});
 if(existingUser){
    return res.status(200).send({
        success: false,
        message: "Email Already register please login"
    })
 }
 const user = await User.create({name, email, password});
 const token = user.createJWT();
 res.status(201).send({success: true,
 message: "User register successfully",
 User: user, token})
    }catch(err){
        // console.log(error);
        res.status(400).send({
            message: 'error in register controller',
            success: false,
            error:err.message
        })

    }
}




export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    // Find user by email
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    // Create JWT token
    const token = user.createJWT();

    res.status(200).json({
      success: true,
      message: 'Login successful',
      user,
      token
    });
  } catch (error) {
    next(error); // Forward error to the Express error handler
  }
};

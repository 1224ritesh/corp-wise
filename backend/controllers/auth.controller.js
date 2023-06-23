import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";



// register a user 
export const register = async (req, res, next) => {
    try {
        // hash password or encrypt password
        // what is salt? // salt is a random string that is used to hash the password. 
        const hash = bcrypt.hashSync(req.body.password, 10);

        // create new user
        const newUser = new User({
            // copy all properties from req.body or user input 
            ...req.body,

            // replace password with hash password 
            password: hash,
        });
        await newUser.save();
        res.status(201).send("User has been created successfully");
    } catch (err) {
        next(err);
    }
};

// login a user
export const login = async (req, res, next) => {
    try {
        // find user by email or username
        // , email: req.body.email add this latter
        const user = await User.findOne({ username: req.body.username });

        if (!user) return next(createError(404, "User not found"));



        //comparing passwords
        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return next(createError(401, "Wrong password or username"));

        // creating jwt token 
        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,
        },
            process.env.JWT_KEY,
            {
                expiresIn: '2 days'
            }// added later
        );

        // if password is correct then send user info without password 
        // remove password from user object
        const { password, ...info } = user._doc;
        res.cookie("accessToken", token, {
            httpOnly: true,
            maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days added later
        }).status(200).send(info)

    }
    catch (err) {
        next(err);
    }
};

export const logout = async (req, res) => {
      res.cookie("accessToken", "", {
        sameSite: "none",
        secure: true,
      }).status(200).send("User has been logged out");
};
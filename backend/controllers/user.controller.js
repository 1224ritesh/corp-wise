import User from '../models/user.model.js';
import createError from '../utils/createError.js';

export const deleteUser = async (req, res, next) => {

    const user = await User.findById(req.params.id);
    
      if(req.userId !== user._id.toString()){
            return next(createError(403, "You are not allowed to delete this user"));
        } 
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("User has been deleted");
};

// this route is for getting a user by id and return it to the front end.
export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};
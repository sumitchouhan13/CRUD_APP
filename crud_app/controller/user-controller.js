import User from '../model/user-schema.js';

export const getUsers = async (request , response) => {
    try{
        let user = await User.find();
        response.json(user);
    }catch(error){
        response.json({message : error.message});
    } //It is just for checking whether our API is working or not
}

export const addUser = async (request , response) => {
    const user = request.body;
    const newUser = new User(user);

    try{
        await newUser.save();
        response.json(newUser);
    }catch(error){
        response.json({message : error.message});
    }
}

export const getUserById = async (request , response) => {
    try{
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    }catch(error){
        response.json({message : error.message});
    }
}

export const editUser = async (request , response) => {
    let user = await User.findById(request.params.id);
    user = request.body;

    const editUser = new User(user);

    try{
        await User.updateOne({ _id: request.params.id} , editUser);
        response.json(editUser);
    }catch(error){
        response.json({message : error.message});
    }
}

export const deleteUser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
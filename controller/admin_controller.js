const ADMIN = require("../Model/Admin_Schema");
const bcrypt = require("bcrypt");
const Product = require("../Model/User_Schema");
const Catagorys = require("../Model/Catagory_Schema");
const Sliders = require("../Model/Slide_Schema");

const home = async (req, res) => {
    res.status(200).json({ message: "Home Page" });
}
const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        // res.status(200).json({msg: "Hi User"});
        // res.status(200).json({msg: userData});
        res.status(200).json({ userData });


    } catch (err) {
        console.log("error from the user route " + err);
    }

}

const login = async (req, res) => {
    try {
        // console.log(req.body);
        const { email, password } = req.body;
        // console.log(email + " " + password);
    
        // const data =  ADMIN.create(email, password);
        // const data = await  ADMIN.create({email, password});
        const data = await  ADMIN.findOne({email});
        // const data = await ADMIN.findOne({ email: email });
        // const data = await ADMIN.find();
        // const data = await ADMIN.find({email});
        // console.log(data);
        // const isMatch = await bcrypt.compare(data.password, password); //wrong
        // const isMatch = await bcrypt.compare(data.password, password); //wrong
        // const isMatch = await bcrypt.compareSync(password, data.password);
        // const isMatch = await bcrypt.compare(password, data.password);
    
        // const isMatch = await bcrypt.compare(password, data.password); //right way
        // console.log(isMatch);
        if (!data) {
            // console.log("User Not Exist");
            // res.json({msg: "User Not Exist"});
            return res.status(422).json({msg: "User Not Exist"});
        } else {
           
            const isMatch = await bcrypt.compare(password, data.password);
            if (email === data.email && isMatch) {
                const token = await data.generateToken();
                // console.log(token);
                // console.log("Welcome to Admin");
                res.status(201).json({msg: "Welcome to Admin Sucessfully Login",
                    userToken: token,
                    userId: data._id.toString()
                });
            } else {
                // console.log("Not Admin");
                res.status(401).json({msg: "Invalid Credentails"});
            }
        }
    
    
    
        // res.send("Login Sucess");
        // res.json({ message: "Login Sucess" });

    } catch (err) {
        console.log("The Err " + err);
    }
   

}
// const adminPostData = async (req, res, next) => {

//     try {
//         // const data = req.body;
//         const {email, password} = req.body;
//         console.log(email + " " + password);
//         res.send("Login Success");
//         // const { email, password } = req.body;

//         // const adminData = await ADMIN.findOne();
//         // const { email, password } = adminData;
//         // console.log(email);
//         // console.log(password);
//         // const isMatch = await bcrypt.compare(data.password, password);
//         // console.log(isMatch);
//         // const isMatch = bcrypt.compare(password, data.password);


//         // console.log(adminData);
//         // bcrypt.compare()
//         // if(email === data.email && password === data.password){
//         // if (isMatch) {
//         // if (isMatch && email === data.email) {
//             // res.status(201).json({ message: "Admin Page" });
//             // res.status(201).json({ message: true });
//         // } else {
//         //     // res.status(401).json({ message: "Authentication Failed" });
//         //     res.status(401).json({ message: false });
//         // }


//         // const userExits = await ADMIN.findOne({ email: email });
//         // const userCreated = await ADMIN.create(data);
//         // await ADMIN.create(data);
//         // const token = await userCreated.generateToken();
//         // console.log(token);
//         // res.status(201).json({ message: token });
//         // res.status(201).json({message: "Admin Page"});

//         // console.log(userCreated);
//         // if (!userExits) {
//         //     return res.status(404).json({ messge: "Invaild Credentails Email" });
//         // }
//         // const isMatch = await bcrypt.compare(data.password, password);
//         // console.log(data.password)
//         // const isMatch = await bcrypt.compare(password, userExits.password);
//         // if (isMatch) {
//         //     res.status(200).json({ message: "Thank For Login" });
//         // } else {
//         //     res.status(400).json({ message: "Invaild Credentails Pass" });
//         // }





//         // const passwordVer = await bcrypt.hash(password, 10);
//         // const data = await ADMIN.create(req.body);
//         // const data = await ADMIN.create({email, password:passwordVer});
//         // console.log(data);


//         // res.status(201).json({ message: "Sucessfully Login" });

//     } catch (err) {
//         // console.log(err);
//         res.status(404).json({ messgae: err });
//     }





// }

const Procuct = async (req, res) => {
    try {
        const bodyData = req.body;
        const data = await Product.create(bodyData);
        console.log(data)
        res.status(201).json({ message: "data is add sucessfully" });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const Catagory = async (req, res) => {
    try {
        const bodyData = req.body;
        const data = await Catagorys.create(bodyData);
        console.log(data)
        res.status(201).json({ message: "data is add sucessfully" });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const Slider = async (req, res) => {
    try {
        const bodyData = req.body;
        const data = await Sliders.create(bodyData);
        console.log(data)
        res.status(200).json({ message: "data is add sucessfully" });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const getAllProcuct = async (req, res) => {
    try {
        // const data  = await Product.find().select({_id: 0});
        const data = await Product.find();
        // console.log(data)
        res.status(200).json({ data });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}
const getAllCatagory = async (req, res) => {
    try {
        // const data  = await Product.find().select({_id: 0});
        // const data = await Catagorys.find();
        const categories = await Catagorys.find();
        // console.log(data)
        // res.status(201).json({  data });
        res.status(200).json({ status: "sucess", categories });
        // res.status(200).json({ categories });


    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}
const getAllSlider = async (req, res) => {
    try {
        // const data  = await Product.find().select({_id: 0});
        const data = await Sliders.find();
        // console.log(data)
        // res.status(201).json({message: "sucess", data});
        res.status(201).json({data});

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const deleteProduct = async (req, res) => {

    try {
        const id = req.params.id;
        await Product.deleteOne({ _id: id });
        res.status(200).json({ message: "delete sucessfully data" });
        // console.log(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}


const deleteCatagory = async (req, res) => {

    try {
        const id = req.params.id;
        await Catagorys.deleteOne({ _id: id });
        res.status(200).json({ message: "delete sucessfully data" });
        // console.log(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}
const deleteSlider = async (req, res) => {

    try {
        const id = req.params.id;
        await Sliders.deleteOne({ _id: id });
        res.status(200).json({ message: "delete sucessfully data" });
        // console.log(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const getSingleUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await Product.findOne({ _id });
        res.status(200).json({ data });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const getPrductOneCatagory = async (req,res)=>{
    const type = req.params.type;
    // console.log(type);
    // console.log(req.params.type);
    // console.log(req.query);
    // console.log(type);
    // console.log(type);
    // const data = await Product.findOne({_id});
    // const data = await Product.findOne({_id: '6767d2f8b0134b175e3db7e8'});
    
    // const data = await Product.find({_id:1});
    // const data = await Product.find({_id: '6767d2f8b0134b175e3db7e8'});
    // const data = await Product.find({type: 'Men'});
    // const data = (await Product.find({type: type})).concat('W', 'w');
    // const data = await Product.find({type: type}).select({_id:1});
    const data = await Product.find({type});
    // const data = await Product.find({type:type});
    // const data = await Product.find({type: type}).selected(type);
    // const data = (await Product.find({type: type})).sec;
    res.status(200).json({ data });

}
const getSingleCatagory = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await Catagorys.findOne({ _id });
        res.status(200).json({ data });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const getSingleSlider = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await Sliders.findOne({ _id });
        res.status(200).json({ data });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const UpdateProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const bodyData = req.body;
        await Product.updateOne({ _id: _id }, { $set: bodyData });
        res.status(201).json({ message: "Update Sucessfully" });

    } catch (err) {
        res.status(404).json({ message: err });
    }
}

const UpdateCatagory = async (req, res) => {
    try {
        const _id = req.params.id;
        const bodyData = req.body;
        await Catagorys.updateOne({ _id: _id }, { $set: bodyData });
        res.status(201).json({ message: "Update Sucessfully" });

    } catch (err) {
        res.status(404).json({ message: err });
    }
}
const updateSlider = async (req, res) => {
    try {
        const _id = req.params.id;
        const bodyData = req.body;
        const data = await Sliders.updateOne({ _id }, { $set: bodyData });
        console.log(data);
        res.status(201).json({ message: "Update Sucessfully" });

    } catch (err) {
        res.status(404).json({ message: err });
    }
}

module.exports = { home, user, login, Procuct, getAllProcuct, deleteProduct, getSingleUser, UpdateProduct, Catagory, getAllCatagory, deleteCatagory, getSingleCatagory, UpdateCatagory, Slider, getAllSlider, deleteSlider, getSingleCatagory, getSingleSlider, updateSlider, getPrductOneCatagory };

const User = require('../models/customer');

// exports.newUserRegister = async (req, res) => {
//     if (req.body.firstName && req.body.email && req.body.password && req.body.mobileNumber) {
//         try {
//             const email1 = req.body.email.toLowerCase();
//             const getUser = await User.findOne({ email: email1 });
//             if (getUser) {
//                 if (getUser.email === email1) {
//                     res.render('register', { success: 'Email Already Exist' })
//                 } else if (getUser.mobileNumber == req.body.mobileNumber) {
//                     res.render('register', { success: 'Mobile Number Already Exist' });
//                 }
//             }
//             else {
//                 const getUser = await User.findOne({ mobileNumber: req.body.mobileNumber });
//                 if (getUser) {

//                     if (getUser.mobileNumber == req.body.mobileNumber) {
//                         res.render('register', { success: 'Mobile Number Already Exist' });
//                     }
//                 }
//                 else {
//                     const salt = await bcrypt.genSalt(10);
//                     const hashPassword = await bcrypt.hash(req.body.password, salt);
//                     const newUser = new User({
//                         firstName: req.body.firstName,
//                         lastName: req.body.lastName || null,
//                         email: email1 || null,
//                         password: hashPassword || null,
//                         mobileNumber: req.body.mobileNumber,
//                         alternateMobileNumber: req.body.alternateMobileNumber || null,
//                         profilePicture: req.body.profilePicture || null,
//                         verifiedUser: req.body.verifiedUser,
//                         activeUser: req.body.activeUser,
//                         state: req.body.state || null,
//                         country: req.body.country || null,
//                         countryCode: req.body.countryCode || null,
//                         district: req.body.district || null,
//                         city: req.body.city || null,
//                         pinCode: req.body.pinCode || null,
//                         longitude: req.body.longitude || null,
//                         lattitude: req.body.lattitude || null,
//                         address: req.body.address || null,
//                         descriptionAboutUser: req.body.descriptionAboutUser || null
//                     })
//                     const user = await newUser.save();
//                     res.render('register', { success: 'You Registered Sucessfully', user: user.firstName });

//                 }


//             }

//         } catch (e) {
//             res.json({ status: 'error', message: `Server Error ${e}` })
//         }
//     } else {
//         res.json({ status: 'error', message: 'Error while Addming New User' })
//     }
// }
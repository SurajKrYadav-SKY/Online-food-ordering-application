import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async (req, res) => {
  try {
    const userId = req.body.userId;
    const itemId = req.body.itemId;

    //console.log("userId:", userId); // Log userId
    //console.log("itemId:", itemId); // Log itemId

    if (!userId || !itemId) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid request data" });
    }
    let userData = await userModel.findById(userId);
    //console.log("userData:", userData); // Log userData

    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData;
    //console.log("Initial cartData:", cartData); // Log initial cartData

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    //console.log("Updated cartData:", cartData); // Log updated cartData

    // userData.cartData = cartData;
    // await userData.save();

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({ success: true, message: "Item added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.body.userId;
    const itemId = req.body.itemId;

    // console.log("userId:", userId); // Log userId
    // console.log("itemId:", itemId); // Log itemId

    if (!userId || !itemId) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid request data" });
    }

    const userData = await userModel.findById(userId);
    //console.log("userData:", userData); // Log userData

    const cartData = await userData.cartData;
    //console.log("Initial cartData:", cartData); // Log initial cartData

    if (!cartData[itemId] || cartData[itemId] === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Item not in cart" });
    }

    cartData[itemId] -= 1;

    //console.log("Updated cartData:", cartData); // Log updated cartData

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({ success: true, message: "removed from cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// fetch user cart data
const getCart = async (req, res) => {
  try {
    const userId = req.body.userId;
    //console.log("userId:", userId); // Log userId

    const userData = await userModel.findById(userId);
    //console.log("userData:", userData); // Log userData

    const cartData = await userData.cartData;
    //console.log("CartData:", cartData); // Log cartData

    res.status(200).json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { addToCart, removeFromCart, getCart };

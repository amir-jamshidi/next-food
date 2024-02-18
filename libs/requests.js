import connectToMongo from "@/configs/db"
import menuModel from '@/models/menu';
import mealModel from '@/models/meal';
import categoryModel from '@/models/category'
import sellerModel from '@/models/seller';
import cartModel from '@/models/cart'
import addressModel from '@/models/address'
import { isLogin } from "@/middlewares/isLogin";
export const getMenu = async () => {
    try {
        connectToMongo();
        const menus = await menuModel.find({});
        if (menus) {
            return menus
        }
    } catch (error) {

    }
}
export const getMeals = async (category) => {
    try {
        connectToMongo();
        const { _id: categoryID } = await categoryModel.findOne({ href: `/${category}` })
        const meals = await mealModel.find({ categoryID }).populate('categoryID').lean()//.select('name description href _id');
        // meals.forEach(meal => {
        //     meal._id = String(meal._id);
        // })
        if (meals) {
            return meals;
        }
    } catch (error) {
        return error
    }
}
export const getCategoires = async () => {
    try {
        connectToMongo();
        const categoires = await categoryModel.find({}).lean();
        if (categoires) {
            return categoires;
        }
    } catch (error) {
        return error
    }
}
export const getMeal = async (href) => {
    try {
        connectToMongo();
        const meal = await mealModel.findOne({ href: `/${href}` }).populate('categoryID').populate({ path: 'sellerID', model: sellerModel }).lean();
        if (meal) {
            return meal
        }
    } catch (error) {
        return error
    }
}
export const getCart = async () => {
    try {
        const isLoginUser = await isLogin();
        const cart = await cartModel.find({ userID: isLoginUser._id }).populate('mealID').lean();
        if (cart) {
            return cart
        }
    } catch (error) {
        return error
    }
}
export const getCartCount = async () => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        const cartCount = await cartModel.find({ userID: isLoginUser._id }).countDocuments();
        return cartCount
    } catch (error) {
        return error
    }
}
export const getAddresses = async () => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        const addresses = await addressModel.find({ userID: isLoginUser._id });
        const addressesCompress = addresses.map(addres => {
            return { _id: String(addres._id), name: addres.name }
        });
        return addressesCompress
    } catch (err) {
        return err
    }
}
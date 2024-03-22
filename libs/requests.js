import connectToMongo from "@/configs/db"
import menuModel from '@/models/menu';
import mealModel from '@/models/meal';
import categoryModel from '@/models/category'
import sellerModel from '@/models/seller';
import cartModel from '@/models/cart'
import addressModel from '@/models/address'
import { isLogin } from "@/middlewares/isLogin";
import userModel from '@/models/user';
import orderModel from '@/models/order';
import ticketModel from "@/models/ticket";
import favoriteModel from "@/models/favorite";
import { isAdmin } from "@/middlewares/isAdmin";
import notificationModel from '@/models/notification';
import stateModel from "@/models/state";
import mongoose from 'mongoose'

// ----------------- USERS ACTION
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
export const getMeals = async (category, sort) => {
    try {
        connectToMongo();
        let meals;
        const cate = await categoryModel.findOne({ href: `/${category}` })

        if (!cate) return null;

        if (sort) {
            switch (sort) {
                case "popular": {
                    meals = await mealModel.find({ categoryID: cate._id }).populate('categoryID').sort({ sellCount: -1 }).lean()
                    break
                }
                case "expensive": {
                    meals = await mealModel.find({ categoryID: cate._id }).populate('categoryID').sort({ basePrice: -1 }).lean()
                    break
                }
                case "inexpensive": {
                    meals = await mealModel.find({ categoryID: cate._id }).populate('categoryID').sort({ basePrice: 1 }).lean()
                    break
                }
            }
        } else {
            meals = await mealModel.find({ categoryID: cate._id }).populate('categoryID').lean()
        }
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
        const categoires = await categoryModel.find({}).limit(6).lean();
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
        const isLoginUser = await isLogin();
        let isFavorite = false
        let loginUser = false;
        if (isLoginUser) {
            const isFavoriteMeal = await favoriteModel.findOne({ mealID: meal._id, userID: isLoginUser._id }).lean();
            loginUser = true
            if (isFavoriteMeal) isFavorite = true

        }
        if (meal) {
            return { meal, isFavorite, loginUser }
        }
    } catch (error) {
        return error
    }
}
export const getCart = async () => {
    try {
        const isLoginUser = await isLogin();
        if (!isLoginUser) return []
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
        if (!isLoginUser) return [];
        const addresses = await addressModel.find({ userID: isLoginUser._id });
        const addressesCompress = addresses.map(addres => {
            return { _id: String(addres._id), name: addres.name }
        });
        return addressesCompress
    } catch (err) {
        return err
    }
}
// ----------------- END USERS ACTION


// ---------------- ADMIN PANEL
export const getUsersAdmin = async () => {
    try {
        connectToMongo();
        const users = await userModel.find({}).sort({ _id: -1 }).lean();
        if (users) {
            return users
        }
    } catch (error) {
        return error;
    }
}
export const getOrdersAdmin = async () => {
    try {
        connectToMongo();
        const orders = await orderModel.find({}).sort({ _id: -1 }).populate('userID').populate('addressID').populate('stateID')
        if (orders) {
            return orders
        }
    } catch (error) {
        return error
    }
}
export const getCategoriesAdmin = async () => {
    try {
        connectToMongo();
        const categoires = await categoryModel.find({}).sort({ _id: -1 }).lean();
        if (categoires) {
            return categoires
        }
    } catch (err) {
        return err
    }
}
export const getMealsAdmin = async () => {
    try {
        connectToMongo();
        const meals = await mealModel.find({}).sort({ _id: -1 }).populate('categoryID');
        if (meals) {
            return meals
        }
    } catch (error) {
        return error
    }
}
export const getAdminDashboard = async () => {
    try {
        connectToMongo();
        const users = await userModel.find({}).sort({ _id: -1 }).limit(5).lean();
        const orders = await orderModel.find({}).sort({ _id: -1 }).populate('userID').populate('addressID').populate('statusID').limit(5).lean()
        return {
            users, orders
        }
    } catch (error) {
        return error
    }
}
export const getAdminTickets = async () => {
    try {
        connectToMongo();
        const isAdminUser = isAdmin();
        if (!isAdminUser) return false;
        const tickets = await ticketModel.find({}).lean()
        return tickets
    } catch (error) {
        return false
    }
}
// ---------------- END ADMIN PANEL


// ----------------- USERS PANEL
export const getUserOrders = async () => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        if (isLoginUser) {
            const orders = await orderModel.find({ userID: isLoginUser._id }).populate({ path: 'mealDetails', populate: 'mealID' }).populate('stateID').sort({ _id: -1 }).lean();
            const orderPendingCount = orders.reduce((total, order) => order.stateID.state === 'warning' ? ++total : total, 0)
            const orderSuccessCount = orders.reduce((total, order) => order.stateID.state === 'success' ? ++total : total, 0)
            const orderCancelCount = orders.reduce((total, order) => order.stateID.state === "error" ? ++total : total, 0)
            return { orders, orderSuccessCount, orderPendingCount, orderCancelCount }
        }
        return false
    } catch (error) {
        return error
    }
}
export const getUserTickets = async () => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false
        const tickets = await ticketModel.find({ userID: isLoginUser._id }).sort({ _id: -1 }).lean();
        const ticketAnswer = tickets.reduce((total, tickets) => tickets.isAnswer === 1 ? ++total : total, 0)
        const ticketPending = tickets.reduce((total, tickets) => tickets.isAnswer !== 1 ? ++total : total, 0)
        return { tickets, ticketPending, ticketAnswer }
    } catch (error) {
        return error
    }
}
export const getUserAddresses = async () => {
    try {
        connectToMongo()
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false
        const addresses = addressModel.find({ userID: isLoginUser._id }).sort({ _id: -1 }).lean();
        return addresses
    } catch (error) {
        return error
    }
}
export const getUserDashboard = async () => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();

        if (!isLoginUser) return false

        const conditional = { userID: isLoginUser._id };
        const [orderCount, ticketCount, addressCount, prices, tickets, orders] = await Promise.all([
            orderModel.find(conditional).countDocuments().lean()
            , ticketModel.find(conditional).countDocuments().lean()
            , addressModel.find(conditional).countDocuments().lean()
            , orderModel.find(conditional).select('price -_id').lean()
            , ticketModel.find(conditional).limit(4).sort({ _id: -1 }).lean()
            , orderModel.find(conditional).limit(5).populate({ path: 'mealDetails', populate: 'mealID' }).sort({ _id: -1 }).lean()
        ])
        const totalPrice = prices.reduce((total, curent) => total + curent.price, 0);



        return {
            orderCount,
            ticketCount,
            addressCount,
            totalPrice,
            tickets,
            orders
        }


    } catch (error) {
        return error
    }
}
export const getUserFavorite = async () => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false
        const favorites = favoriteModel.find({ userID: isLoginUser._id }).sort({ _id: -1 }).populate("mealID").lean();
        return favorites
    } catch (error) {
        return error
    }
}
export const getUserInfo = async () => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false
        return isLoginUser
    } catch (error) {
        return error
    }
}
export const getUserNotifications = async () => {
    try {
        connectToMongo();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;
        const notification = await notificationModel.find({ userID: isLoginUser._id, isSeen: 0 }).sort({ _id: -1 }).lean();
        return notification
    } catch (error) {
        return false
    }
}
export const getOrderDetails = async (orderID) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(orderID)) return false;
        connectToMongo();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false
        const order = await orderModel.findOne({ _id: orderID, userID: isLoginUser._id }).populate({ path: 'mealDetails', populate: "mealID" }).populate('stateID').lean();
        if (!order) return false;
        return order
    } catch (error) {
        return error
    }
}
export const getTicketDetails = async (ticketID) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(ticketID)) return false;
        connectToMongo();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;
        const ticket = await ticketModel.findOne({ _id: ticketID, userID: isLoginUser._id }).populate('orderID').lean();
        if (!ticket) return false
        return ticket
    } catch (error) {
        return error
    }
}
export const getAddressDetails = async (addressID) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(addressID)) return false;
        connectToMongo();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false
        const addressDetails = await addressModel.findOne({ _id: addressID, userID: isLoginUser._id }).lean();
        if (!addressDetails) return false
        return addressDetails
    } catch (error) {
        return error
    }
}
// ----------------- END USERS PANEL

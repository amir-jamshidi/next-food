import connectToMongo from "@/configs/db"
import menuModel from '@/models/menu';
import mealModel from '@/models/meal';
import categoryModel from '@/models/category'

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
        const meal = await mealModel.findOne({ href: `/${href}` }).lean();
        if (meal) {
            return meal
        }
    } catch (error) {
        return error
    }
}
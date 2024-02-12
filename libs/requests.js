import connectToMongo from "@/configs/db"
import menuModel from '@/models/menu';
import pizzaModel from '@/models/pizza';

export const getMenu = async () => {
    connectToMongo();
    const menus = await menuModel.find({});
    if (menus) {
        return menus
    }
}

export const getPizzas = async () => {
    connectToMongo();
    const pizzas = await pizzaModel.find({}).lean();
    if (pizzas) {
        return pizzas;
    }
}
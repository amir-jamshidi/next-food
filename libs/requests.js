import connectToMongo from "@/configs/db"
import menuModel from '@/models/menu';
export const getMenu = async () => {
    connectToMongo();
    const menus = await menuModel.find({});
    if (menus) {
        return menus
    }
}
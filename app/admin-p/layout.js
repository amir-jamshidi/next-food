import SideBarAdmin from "@/components/templates/admin/SideBarAdmin/SideBarAdmin";
import { isAdmin } from "@/middlewares/isAdmin"
import { redirect } from "next/navigation";

const AdminPanelLayout = async ({ children }) => {

    const isAdminUser = await isAdmin();

    if (!isAdminUser) return redirect('/');

    return (
        <div className="flex mt-14  rounded-2xl gap-x-2">
            <div className="w-[350px] ">
                <SideBarAdmin />
            </div>
            <div className="flex-1 dark:bg-gray-700 bg-gray-50 rounded-2xl px-2 pb-4">
                {children}
            </div>
        </div>
    )

}
export default AdminPanelLayout
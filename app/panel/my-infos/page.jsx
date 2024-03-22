import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import UserInfoForm from "@/components/templates/panel/UserInfoForm/UserInfoForm";
import ConvertToPersian from "@/helpers/convertToPersian";
import { getUserInfo } from "@/libs/requests";

export const metadata = {
  title: `پنل کاربری | اطلاعات من `,
};

const MyInfos = async () => {
  const userInfo = await getUserInfo();
  const newUserInfo = {
    id: String(userInfo._id),
    fullname: userInfo.fullname,
    email: userInfo.email,
    phone: userInfo.phone,
    role: userInfo.role,
    createdAt: ConvertToPersian(userInfo.createdAt),
  };

  return (
    <div className="relative">
      <TitleUserPanel title={"اطلاعات حساب من"} />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-5">
        <UserInfoForm newUserInfo={newUserInfo} />
        <div className="">
          <p className="text-justify dark:text-gray-400 text-gray-600 px-2">
            لطفا توجه داشته باشید که ایمیل و شماره تلفن شما بنا به دلایلی قابل
            تغییر نمی باشد چرا که ایمیل شما و شماره تلفن شما به عنوان شناسه شما
            در سایت شناخته میشود و در صورتی که نیازی به اطلاعات سفارش یا تیکت
            های شما باشد با توجه به شماره تماس و ایمیل شما میتواند قابل پیگیری
            توسط خود شخص شما باشد . نام نمایشی شما در سایت قایل تغییر می باشد و
            امکان تعویض چند باره آن هم وجود دارد
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyInfos;

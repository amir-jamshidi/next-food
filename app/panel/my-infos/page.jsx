import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserInfo } from "@/libs/requests";
import {
  AlternateEmailRounded,
  PersonRounded,
  PhoneRounded,
} from "@mui/icons-material";

const MyInfos = async () => {
  const userInfo = await getUserInfo();
  return (
    <div>
      <TitleUserPanel title={"اطلاعات حساب من"} />
      <div className="mt-14 grid grid-cols-2 gap-x-5">
        <div className="">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-800 rounded-2xl overflow-hidden flex items-center border border-gray-700">
              <span className="mr-4">
                <PersonRounded className="text-gray-300" />
              </span>
              <input
                defaultValue={userInfo.fullname}
                className="bg-gray-800 text-gray-300 py-2.5 px-2 border-none outline-none w-full"
                placeholder="نام کامل شما"
              />
            </div>
            <div className="bg-gray-800 rounded-2xl overflow-hidden flex items-center border border-gray-700">
              <span className="mr-4">
                <AlternateEmailRounded className="text-gray-300" />
              </span>
              <input
                readOnly
                defaultValue={userInfo.email}
                className="bg-gray-800 text-gray-300 py-2.5 px-2 border-none outline-none w-full"
                placeholder="ایمیل شما"
              />
            </div>
            <div className="bg-gray-800 rounded-2xl overflow-hidden flex items-center border border-gray-700">
              <span className="mr-4">
                <PhoneRounded className="text-gray-300" />
              </span>
              <input
                readOnly
                defaultValue={userInfo.phone}
                className="font-dana bg-gray-800 text-gray-300 py-2.5 px-2 border-none outline-none w-full"
                placeholder="شماره تلفن شما"
              />
            </div>
            <div className="px-4 flex items-center border rounded-2xl border-gray-700 justify-between">
              <p className="text-gray-300">نقش شما در سایت : </p>
              <span className="text-green-500 rounded py-1">
                {userInfo.role === "ADMIN" ? "مدیریت سایت" : "کاربر سایت"}
              </span>
            </div>
          </div>
          <div>
            <button className="bg-green-500 rounded-2xl px-6 py-1.5 text-gray-200 mt-2">
              ثبت تغییرات
            </button>
          </div>
        </div>
        <div className="">
          <p className="text-justify text-gray-400 px-2">
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

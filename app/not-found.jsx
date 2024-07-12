import Image from "next/image";
import notFoundImg from "@/public/images/not-found.svg";
import Link from "next/link";

export const metadata = {
  title:`نکست فود | خطای 404`,
};

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen-size">
      <div className=" flex flex-col items-center justify-center gap-y-5">
        <Image
          priority
          alt="Not Found Img"
          src={notFoundImg}
          className="w-3/5"
        />
        <h1 className="sm:text-lg md:text-2xl lg:text-3xl text-red-500">صفحه ای که دنبالشی پیدا نشد</h1>
        <Link
          href="/"
          className="text-green-500 text-sm sm:text-base hover:text-green-600 transition-colors mt-4"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
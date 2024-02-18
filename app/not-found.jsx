import Image from "next/image";
import notFoundImg from "@/public/images/not-found.png";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="my-20">
        <h1 className="text-4xl text-red-500">
          صفحه مورد نظر شما پیدا نشد !!!
        </h1>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
};

export default NotFound;

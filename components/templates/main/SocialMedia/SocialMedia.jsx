import TitleSection from "@/components/modules/TitleSection/TitleSection";
import Image from "next/image";
import telImg from "@/public/images/tel.svg";
import youtubeImg from "@/public/images/youtube.svg";
import instaImg from "@/public/images/insta.svg";
import Link from "next/link";
export const SocialMedia = () => {
  return (
    <div>
      <TitleSection title={"شبکه های مجازی ما"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-12">
        <div className="h-40 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
          <a href={"http://telegram.me/devAmir_community"}>
            <Image
              alt="Instagram Logo"
              src={instaImg}
              width={125}
              height={125}
            />
          </a>
        </div>
        <div className="h-40 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
          <a href={"http://telegram.me/devAmir_community"}>
            <Image alt="Telegram Logo" src={telImg} width={125} height={125} />
          </a>
        </div>
        <div className="h-40 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
          <a href={"http://telegram.me/devAmir_community"}>
            <Image
              sizes="100vw"
              alt="Youtube Logo"
              src={youtubeImg}
              width={125}
              height={125}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
import React from "react";

const GallerySection = () => {
  return (
    <div dir="ltr" className="grid grid-cols-6 grid-rows-6 h-96 gap-1.5 mt-12">
      <div className="relative row-span-3 col-span-2 md:row-span-4 md:col-span-1 rounded-xl overflow-hidden">
        <Image
          src="https://i.postimg.cc/bwBw7vDk/ai-generated-8752901-1280.jpg"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative row-span-2 col-span-4 md:col-span-3 md:row-span-2 rounded-xl overflow-hidden">
        <Image
          src="https://i.postimg.cc/7L7ykhdQ/ai-generated-8714517-1280.jpg"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative row-span-2 col-span-2 rounded-xl overflow-hidden md:col-span-2 md:row-span-2">
      <Image
          src="https://i.postimg.cc/SR3zDKGS/spaghetti-bolognese-7517639-1280.jpg"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative row-span-2 col-span-2 rounded-xl overflow-hidden md:col-span-2 md:row-span-2">
      <Image
          src="https://i.postimg.cc/zDsSrJWm/ai-generated-8714545-1280.jpg"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative row-span-1 col-span-1 rounded-xl overflow-hidden md:col-span-2 md:row-span-2">
      <Image
          src="https://i.postimg.cc/6pwr8YYY/cheese-burger-8770017-1280.png"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative row-span-1 col-span-1 md:col-span-1 md:row-span-4 rounded-xl overflow-hidden">
      <Image
          src="https://i.postimg.cc/bwJvVnJq/food-8721773-1280.jpg"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative row-span-2 col-span-3 rounded-xl overflow-hidden md:col-span-2 md:row-span-2">
      <Image
          src="https://i.postimg.cc/nrCD4mBS/noodles-8709379-1280.jpg"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="relative rounded-xl row-span-2 col-span-3 overflow-hidden md:col-span-3 md:row-span-2">
      <Image
          src="https://i.postimg.cc/wxm4J4Qp/ai-generated-8585969-1280.jpg"
          fill={true}
          className="object-cover"
        />

      </div>
    </div>
  );
};

export default GallerySection;

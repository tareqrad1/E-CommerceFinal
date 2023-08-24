import { Carousel } from "@material-tailwind/react";
import Image1 from '../image/clothesLanding.png'
import Image2 from '../image/headPhoneLanding.png'
import Image3 from '../image/bannerImgThree.cdd63ff84acf53a73a0d.webp'
import { useNavigate } from 'react-router-dom'
export function Landing() {
    const Navigate = useNavigate();
  return (
    <Carousel
      className=" rounded-xl h-[calc(100vh - 201.6px)]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={Image1}
        alt="image 1"
        className="h-full w-full bg-black cursor-pointer"
        onClick={() => Navigate('shop')}
      />
      <img
        src={Image2}
        alt="image 2"
        className="h-full w-full bg-black cursor-pointer"
        onClick={() => Navigate('shop')}
      />
      <img
        src={Image3}
        alt="image 3"
        className="h-full w-full bg-black cursor-pointer"
        onClick={() => Navigate('shop')}
      />
    </Carousel>
  );
}

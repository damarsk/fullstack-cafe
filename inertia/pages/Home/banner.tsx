import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import banner1 from "@/assets/banner1.webp";
import banner2 from "@/assets/banner2.jpg";

function Banner() {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <img
              src={banner1}
              alt="banner 1"
              className="w-full h-[180px] object-cover rounded-lg"
            />
          </CarouselItem>

          <CarouselItem>
            <img
              src={banner2}
              alt="banner 2"
              className="w-full h-[180px] object-cover rounded-lg"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
export default Banner;

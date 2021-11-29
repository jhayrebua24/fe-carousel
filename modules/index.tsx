import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import Slides from "./common/Slides";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function index(): JSX.Element {
  return (
    <div
      className="flex flex-grow flex-col bg-no-repeat bg-cover bg-center relative"
      style={{
        background: `url('/image/building_1.jpg')`,
      }}
    >
      <div className="bottom-0 top-0 left-0 right-0 bg-black bg-opacity-60 fixed" />
      <div className="z-50 flex flex-grow flex-col">
        <div className="flex items-center justify-center flex-grow flex-col">
          <h1 className="text-white text-5xl font-bold my-12">
            OUR <span className="text-brand">HOTELS</span>
          </h1>
          <Slides />
        </div>
      </div>
    </div>
  );
}

export default index;

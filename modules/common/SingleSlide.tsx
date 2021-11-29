import { AiFillStar, AiOutlineRight } from "react-icons/ai";
import { IData } from "./interface";

interface Props {
  data: IData;
}

function SingleSlide({ data }: Props): JSX.Element {
  return (
    <div className="text-white flex flex-col  bg-white my-2 w-full h-120 mb-12">
      <div className="h-3/6 flex item-center justify-center overflow-hidden w-full">
        <img
          src={data.img}
          alt={data.country}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-grow flex-col p-8">
        <h1 className="text-brand text-3xl tracking-tight font-semibold">
          {data?.country}
        </h1>
        <div className="flex flex-col space-y-2 text-black mt-4">
          {data.hotels.map(({ name, rating }) => (
            <div className="flex items-center space-x-2">
              <label htmlFor={name}>{name}</label>
              {[...Array(rating)].map(() => (
                <AiFillStar className="text-yellow-500" />
              ))}
            </div>
          ))}
        </div>
        <button
          className="bg-blue-700 mx-auto text-white p-2 w-56 rounded mt-6 flex items-center justify-center"
          type="button"
        >
          MORE
          <AiOutlineRight className="ml-3" />
        </button>
      </div>
    </div>
  );
}

export default SingleSlide;

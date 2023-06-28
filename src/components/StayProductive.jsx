import { Link } from "react-router-dom";
import ArrowImg from "/src/assets/images/icon-arrow.svg";
import StayProductiveImg from "/src/assets/images/illustration-stay-productive.png";
function StayProductive() {
  return (
    <section>
      <div className="container pb-[150px] grid grid-cols-1 md:grid-cols-2 gap-[30px]   place-items-center">
        <div>
          <img src={StayProductiveImg} alt="stay-img" />
        </div>
        <div>
          <h3 className="text-white font-medium text-[35px] leading-[50px]">
            Stay productive,
            <br />
            wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px] text-white">
            <p className="mb-[15px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              excepturi incidunt quo deserunt quidem accusamus iure ab earum
              reprehenderit debitis!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              excepturi incidunt quo deserunt quidem accusamus iure ab earum
              reprehenderit debitis!
            </p>
          </div>
          <Link
            to="/"
            className="text-primary hover:text-[#42b0d1] hover:border-[#42b0d1] transition-all duration-200  border-b-2 border-primary border-solid pb-[5px] flex items-center gap-[15px] w-fit"
          >
            See how Fylo works
            <img
              src={ArrowImg}
              alt="arrow-img"
              className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;

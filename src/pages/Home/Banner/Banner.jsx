import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />

        <div className=" flex items-center absolute w-full h-full left-0 bottom-0 gap-7 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="w-1/3 space-y-5 ml-5">
            <h1 className=" font-bold text-6xl">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary mr-5">Discover More</button>
              <button className="btn btn-warning">Latest Project</button>
            </div>
          </div>
        </div>

        <div className="absolute left-5 right-5 bottom-0 flex justify-end gap-7 mb-10">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className=" flex items-center absolute w-full h-full left-0 bottom-0 gap-7 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="w-1/3 space-y-5 ml-5">
            <h1 className=" font-bold text-6xl">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary mr-5">Discover More</button>
              <button className="btn btn-warning">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-7 ">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className=" flex items-center absolute w-full h-full left-0 bottom-0 gap-7 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="w-1/3 space-y-5 ml-5">
            <h1 className=" font-bold text-6xl">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary mr-5">Discover More</button>
              <button className="btn btn-warning">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-7 ">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className=" flex items-center absolute w-full h-full left-0 bottom-0 gap-7 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="w-1/3 space-y-5 ml-5">
            <h1 className=" font-bold text-6xl">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary mr-5">Discover More</button>
              <button className="btn btn-warning">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-7 ">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

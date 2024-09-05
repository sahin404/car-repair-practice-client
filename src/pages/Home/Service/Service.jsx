const Service = ({ service }) => {
  const { title, price, img } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-red-600 font-bold text-lg">Price: {price}$</p>
        <div className="card-actions">
          <button className="btn bg-[#FF3811] text-white">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Service;

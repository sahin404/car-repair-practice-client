import { useState } from "react";
import { useEffect } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="mt-16">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-[#FF3811] font-bold text-lg">Services</h1>
        <h1 className="text-3xl font-bold">Our Service Area</h1>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

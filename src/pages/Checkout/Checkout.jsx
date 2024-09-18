import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, price,img } = data;

  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const date = e.target.date.value;
    const email = e.target.email.value;
    const price = e.target.price.value;
    const newOrder = {
        customerName:name,
        date,
        email,
        price,
        img
    }
    
    fetch('http://localhost:5000/bookings',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newOrder)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            Swal.fire("Order has been Successfully!");
            e.target.reset();
        }

    })
  };

  return (
    <div className="w-2/3 mx-auto">
      <h1 className="text-3xl my-10 text-center ">{title}</h1>
      <form onSubmit={handleForm}>
        <div className=" space-y-8 p-10 px-16 bg-slate-900">
          {/* First Line */}
          <div className="flex justify-between gap-10">
            {/* Left Side */}
            <div className="flex-1">
              <label className="mr-5 text-white">Customer Name</label>
              <input
                className="w-full p-2 text-md rounded"
                type="text"
                name="name"
                placeholder="name"
                required
              />
            </div>
            {/* Right Side */}
            <div className="flex-1">
              <label className="mr-5 text-white">Date</label>
              <input
                className="w-full p-2 text-md rounded"
                type="date"
                name="date"
                placeholder="date"
                required
              />
            </div>
          </div>

          {/* Second Line */}
          <div className="flex justify-between gap-10">
            {/* Left Side */}
            <div className="flex-1">
              <label className="mr-5 text-white">Email</label>
              <input
                className="w-full p-2 text-md rounded"
                type="email"
                name="email"
                defaultValue={user.email}
                required
              />
            </div>
            {/* Right Side */}
            <div className="flex-1">
              <label className="mr-5 text-white">Price</label>
              <input
                className="w-full p-2 text-md rounded"
                type="text"
                name="price"
                defaultValue={"$ " + price}
                required
              />
            </div>
          </div>

          {/* Button */}
          <div>
            <input  className="btn btn-block" type="submit" value="Confirm Order" />
           
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

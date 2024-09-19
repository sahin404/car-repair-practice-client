import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingsTable from "./BookingsTable";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);
  return (
    <div>
      <h1 className=" my-12 text-center text-3xl font-bold">My Order List</h1>
      {bookings.length < 1 ? (
        <h1 className=" text-center text-xl font-bold">No order Found</h1>
      ) : (
        ""
      )}
      {bookings.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <BookingsTable
                  key={booking._id}
                  booking={booking}
                ></BookingsTable>
              ))}
            </tbody>
          </table>
        </div>
      ) : ("")}
    </div>
  );
};

export default MyBookings;

const BookingsTable = ({ booking }) => {
  const { date, email, img, price } = booking;
  return (
    <tr className="text-md">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-32 rounded h-32 w-12">
              <img
                src={img}
              />
            </div>
          </div>
          <div>
            {date}
          </div>
        </div>
      </td>
      <td>
       {price}
      </td>
      <td>{email}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Update</button>
      </th>
    </tr>
  );
};

export default BookingsTable;

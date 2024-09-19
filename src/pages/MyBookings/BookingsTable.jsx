const BookingsTable = ({ booking, handleDelete }) => {
  const { date, email, img, price, _id } = booking;
  
  return (
    <tr className="text-md">
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-32 rounded h-32 w-12">
              <img src={img} />
            </div>
          </div>
          <div>{date}</div>
        </div>
      </td>
      <td>{price}</td>
      <td>{email}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Update</button>
      </th>
    </tr>
  );
};

export default BookingsTable;

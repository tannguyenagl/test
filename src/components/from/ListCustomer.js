import { useEffect } from "react";
import { Link } from "react-router-dom";
import useCustomer from "../../hooks/useCustomer";

const ListCustomer = () => {
  const { handeGetCustomers, listCustomer } = useCustomer();
  useEffect(() => {
    handeGetCustomers();
  }, []);
  if (listCustomer && listCustomer.length > 0) {
    return (
      <div>
        <div>
          <Link to="/customer">
            <button>create</button>
          </Link>
        </div>
        <table id="students">
          <thead>
            <tr>
              <th className="th200">NAME</th>
              <th className="th200">PHONE</th>
              <th>GENDER</th>
            </tr>
          </thead>
          <tbody>
            {listCustomer.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.gender}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  if (listCustomer && listCustomer.length == 0) {
    return <div>Nothing</div>;
  }
  return <div>Loading</div>;
};

export default ListCustomer;

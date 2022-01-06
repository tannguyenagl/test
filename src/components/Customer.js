import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useCustomer from "../hooks/useCustomer";

const Customer = (rest) => {
  let { customerId } = useParams();
  const { handeGetCustomer, customer } = useCustomer();
  useEffect(() => {
    handeGetCustomer(customerId);
  }, []);
  if (customer) {
    return (
      <div>
        <div>
          Your name :<span>{customer.name}</span>
        </div>
        <div>
          Phone number :<span>{customer.phone}</span>
        </div>
        <div>
          Email :<span>{customer.email}</span>
        </div>
      </div>
    );
  }
  return <div>Not Found</div>;
};
export default Customer;

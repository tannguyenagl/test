import React from "react";
import { useForm } from "react-hook-form";
import ERROR from "../../constants/error";
import CONST from "../../constants/const";
import Input from "../Input";
import Select from "../Select";
import useCustomer from "../../hooks/useCustomer";
import Textarea from "../Textarea";

function FormCustomer() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { handleCreateCustomer } = useCustomer();
  const handleFrom = (data) => {
    handleCreateCustomer(data);
    reset();
  };

  return (
    <div className="fromcustomer">
      <form onSubmit={handleSubmit(handleFrom)}>
        <div>
          <div className="elInput">
            <Input
              registerReturn={register("name", {
                required: ERROR.REQUIRED("name"),
                pattern: {
                  value: CONST.REGEX_TEXT,
                  message: ERROR.REQUIRED("description "),
                },
              })}
              fieldError={errors.name}
              type="text"
              label="Name"
            />
          </div>

          <div className="elInput">
            <Input
              registerReturn={register("phone", {
                required: ERROR.REQUIRED("phone"),
                pattern: {
                  value: CONST.REGEX_TEXT,
                  message: ERROR.REQUIRED("description "),
                },
              })}
              fieldError={errors.phone}
              type="text"
              label="Phone"
            />
          </div>

          <div className="elInput">
            <Textarea
              registerReturn={register("description", {
                required: ERROR.REQUIRED("description "),
              })}
              fieldError={errors.description}
              type="text"
              label="Description"
            />
          </div>

          <div className="elFlex">
            <div className="elInput">
              <Input
                registerReturn={register("email", {
                  required: ERROR.REQUIRED("E-mail"),
                  pattern: {
                    value: CONST.REGEX_EMAIL,
                    message: ERROR.PATTERN("E-mail"),
                  },
                })}
                fieldError={errors.email}
                type="email"
                label="E-mail"
              />
            </div>

            <div className="elInput">
              <Select
                label="Gender"
                name="gender"
                options={[
                  { value: "M", content: "Male" },
                  { value: "F", content: "Female" },
                ]}
                registerReturn={register("gender")}
              />
            </div>
          </div>
        </div>

        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default FormCustomer;

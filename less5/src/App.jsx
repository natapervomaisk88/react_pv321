import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getFieldState,
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      patronymic: "",
      phone: "",
      address: "address1",
      deliveryMethod: "courier",
    },
    mode: "onBlur",
  });
  const myHandler = (data) => {
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    window.open(URL.createObjectURL(blob));
  };
  return (
    <>
      <form onSubmit={handleSubmit(myHandler)}>
        <div className="mb-3">
          <label htmlFor="nameField" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameField"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Min 2 symbols" },
            })}
            autoComplete="off"
          />
          {
            errors.name && <p className="error">{errors.name.message}</p>
          }
          {
            !errors.name && getFieldState("name").isTouched && (<p className="success">Nice name</p>)
          }
        </div>
        <div className="mb-3">
          <label htmlFor="surnameField" className="form-label">
            Surname
          </label>
          <input
            type="text"
            className="form-control"
            id="surnameField"
            {...register("surname", {
              required: "Surname is required",
              minLength: { value: 2, message: "Min 2 symbols" },
            })}
            autoComplete="off"
          />
          {
            errors.surname && <p className="error">{errors.surname.message}</p>
          }
          {
            !errors.surname && getFieldState("surname").isTouched && (<p className="success">Nice surname</p>)
          }
        </div>
        <div className="mb-3">
          <label htmlFor="patronymicField" className="form-label">
            Patronymic
          </label>
          <input
            type="text"
            className="form-control"
            id="patronymicField"
            {...register("patronymic", {
              required: "Patronymic is required",
              minLength: { value: 2, message: "Min 2 symbols" },
            })}
            autoComplete="off"
          />
          {
            errors.patronymic && <p className="error">{errors.patronymic.message}</p>
          }
          {
            !errors.patronymic && getFieldState("patronymic").isTouched && (<p className="success">Nice patronymic</p>)
          }
        </div>
        <div className="mb-3">
          <label htmlFor="phoneField" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneField"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                message: "Invalid phone"
              },
            })}
            autoComplete="off"
          />
          {
            errors.phone && <p className="error">{errors.phone.message}</p>
          }
          {
            !errors.phone && getFieldState("phone").isTouched && (<p className="success">Nice phone</p>)
          }
        </div>
        <div className="mb-3">
          <label htmlFor="addressField" className="form-label">
            Address
          </label>
          <select className="form-select" id="addressField" {...register("address")}>
            <option value="address1">Address 1</option>
            <option value="address2">Address 2</option>
            <option value="address3">Address 3</option>
            <option value="address4">Address 4</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Delivery method
          </label>
          <div class="form-check">
            <input type="radio" class="form-check-input" id="courierOption" value="courier" {...register("deliveryMethod")}/>
            <label class="form-check-label" for="courierOption">Courier</label>
          </div>
          <div class="form-check">
            <input type="radio" class="form-check-input" id="pickupOption" value="pickup" {...register("deliveryMethod")}/>
            <label class="form-check-label" for="pickupOption">Pickup</label>
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default App;

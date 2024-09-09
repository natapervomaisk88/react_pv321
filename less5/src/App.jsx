import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import './App.css'

function App() {

	//console.log(useForm);
	const { register, handleSubmit, formState: { errors }, getFieldState, } = useForm({
		// defaultValues: { login: "admin", email: "admin@gmail.com", check: "true" }
		defaultValues: { login: "", email: "", check: "false" },
		mode: "onBlur",
	});

	const myHandler = (data) => console.log(data);

	return (
		<>
			<form onSubmit={handleSubmit(myHandler)}>
				<div className="mb-3">
					<label htmlFor="exampleInputLogin1" className="form-label">Login</label>
					<input type="text" className="form-control" id="exampleInputLogin1" aria-describedby="loginHelp" {...register("login", { required: "Please fill login", minLength: { value: 5, message: "min lenght 5" } })} autoComplete="off" />

				</div>
				{errors.login && getFieldState("login").isTouched ? <span className="error">{errors.login.message}</span> : <span className="success"></span>}

				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
					<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email",
						{ required: "Please fill login", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email is required" } }
					)} autoComplete="off" />
					<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
				{errors.email ? <span className="error">{errors.email.message}</span> : <span className="success"></span>}

				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
				</div>
				<div className="mb-3 form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" {...register("check")} />
					<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>

			{/* new form */}
			<form onSubmit={handleSubmit(myHandler)}>
				<div className="mb-3">
					<label htmlFor="exampleInputName1" className="form-label">Name</label>
					<input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" {...register("name", { required: "Please fill name", })} autoComplete="off" />

				</div>
				{errors.login ? <span className="error">{errors.login.message}</span> : <span className="success"></span>}

				<div className="mb-3">
					<label htmlFor="exampleInputSurname1" className="form-label">Surname</label>
					<input type="text" className="form-control" id="exampleInputSurname1" aria-describedby="surnameHelp" {...register("surname", { required: "Please fill surname", })} autoComplete="off" />

				</div>
				{errors.login ? <span className="error">{errors.login.message}</span> : <span className="success"></span>}

				<div className="mb-3">
					<label htmlFor="exampleInputMiddlename1" className="form-label">Middle name</label>
					<input type="text" className="form-control" id="exampleInputMiddlename1" aria-describedby="middlenameHelp" {...register("middlename", { required: "Please fill Middle name", })} autoComplete="off" />

				</div>
				{errors.login ? <span className="error">{errors.login.message}</span> : <span className="success"></span>}

				<div>

					<div className="form-check">
						<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
						<label className="form-check-label" htmlFor="flexRadioDefault1">
							Самовывоз из наших магазинов
						</label>
						<select className="form-select" aria-label="Default select example">
							<option selected>Выбирите подходящее отделение</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>

					<div className="form-check">
						<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
						<label className="form-check-label" htmlFor="flexRadioDefault2">
							Курьер по вашему адресу
						</label>
					</div>

					<div className="form-check">
						<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
						<label className="form-check-label" htmlFor="flexRadioDefault3">
							Самовывоз из Meest пошта
						</label>
					</div>

					<div className="form-check">
						<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
						<label className="form-check-label" htmlFor="flexRadioDefault5">
							Самовывоз из Укрпошты
						</label>
					</div>

					<div className="form-check">
						<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
						<label className="form-check-label" htmlFor="flexRadioDefault1">
							Самовывоз из Новой почты
						</label>
					</div>

					<div className="form-check">
						<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
						<label className="form-check-label" htmlFor="flexRadioDefault1">
							Курьером Новой Почты
						</label>
					</div>

				</div>
				<button className="btn btn-primary">Оформить заказ</button>
			</form>
		</>
	)
}

export default App

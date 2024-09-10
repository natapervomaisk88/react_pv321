import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeliveryForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const deliveryMethod = watch('deliveryMethod');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="mb-4">
        <h5>Доставка</h5>

        <div className="border border-success p-3 mb-2 rounded position-relative">
          <div className="form-check d-flex align-items-center">
            <input
              {...register('deliveryMethod', { required: 'Выберите способ доставки' })}
              type="radio"
              id="pickupStore"
              value="Самовывоз из наших магазинов"
              className="form-check-input me-2"
            />
            <label className="form-check-label" htmlFor="pickupStore">
              Самовывоз из наших магазинов
            </label>
            <span className="ms-auto text-success position-absolute top-0 end-0 m-2">
              Бесплатно
            </span>
          </div>
          {deliveryMethod === 'Самовывоз из наших магазинов' && (
            <div className="d-flex align-items-center mt-2">
              <select
                {...register('pickupLocation', { required: 'Выберите подходящее отделение' })}
                className="form-select me-2"
                style={{ maxWidth: '300px' }}
              >
                <option value="">выберите подходящее отделение</option>
                <option value="Отделение 1">Отделение 1</option>
                <option value="Отделение 2">Отделение 2</option>
                <option value="Отделение 3">Отделение 3</option>
              </select>
              <button type="button" className="btn btn-primary">
                <i className="bi bi-map"></i> Обрати на мапі
              </button>
            </div>
          )}
        </div>

        <div className="border border-primary p-3 mb-2 rounded position-relative">
          <div className="form-check d-flex align-items-center">
            <input
              {...register('deliveryMethod', { required: 'Выберите способ доставки' })}
              type="radio"
              id="addressDelivery"
              value="Курьер на ваш адрес"
              className="form-check-input me-2"
            />
            <label className="form-check-label" htmlFor="addressDelivery">
              Курьер на ваш адрес
            </label>
            <span className="ms-auto">119 ₴</span>
          </div>
          {deliveryMethod === 'Курьер на ваш адрес' && (
            <div className="mt-2">
              <input
                {...register('address', { required: 'Введите адрес доставки' })}
                className="form-control"
                placeholder="Введите ваш адрес"
              />
              {errors.address && (
                <p className="text-danger">{errors.address.message}</p>
              )}
            </div>
          )}
        </div>

        <div className="border border-success p-3 mb-2 rounded position-relative">
          <div className="form-check d-flex align-items-center">
            <input
              {...register('deliveryMethod', { required: 'Выберите способ доставки' })}
              type="radio"
              id="postamatPickup"
              value="Самовывоз з почтомату"
              className="form-check-input me-2"
            />
            <label className="form-check-label" htmlFor="postamatPickup">
              Самовывоз з почтомату
            </label>
            <span className="ms-auto text-success">Бесплатно</span>
          </div>
          {deliveryMethod === 'Самовывоз з почтомату' && (
            <div className="d-flex align-items-center mt-2">
              <select
                {...register('postamatLocation', { required: 'Выберите почтомат' })}
                className="form-select me-2"
                style={{ maxWidth: '300px' }}
              >
                <option value="">выберите почтомат</option>
                <option value="Почтомат 1">Почтомат 1</option>
                <option value="Почтомат 2">Почтомат 2</option>
                <option value="Почтомат 3">Почтомат 3</option>
              </select>
              <button type="button" className="btn btn-primary">
                <i className="bi bi-map"></i> Обрати на мапі
              </button>
            </div>
          )}
        </div>

        {errors.deliveryMethod && <p className="text-danger">{errors.deliveryMethod.message}</p>}
      </div>

      <div className="mb-4">
        <h5>Отримувач</h5>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Прізвище</label>
            <input
              id="lastName"
              {...register('lastName', { required: 'Прізвище обов’язкове' })}
              className="form-control"
              placeholder="Введіть прізвище"
            />
            {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
          </div>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">Ім’я</label>
            <input
              id="firstName"
              {...register('firstName', { required: 'Ім’я обов’язкове' })}
              className="form-control"
              placeholder="Введіть ім’я"
            />
            {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="middleName" className="form-label">По батькові</label>
            <input
              id="middleName"
              {...register('middleName')}
              className="form-control"
              placeholder="Введіть по батькові"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Мобільний телефон</label>
            <div className="input-group">
              <span className="input-group-text">+38</span>
              <input
                id="phone"
                {...register('phone', {
                  required: 'Мобільний телефон обов’язковий',
                  pattern: {
                    value: /^\d{10}$/,
                    message: 'Введіть коректний номер телефону',
                  },
                })}
                className="form-control"
                placeholder="Мобільний телефон"
              />
            </div>
            {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">Отправить</button>
    </form>
  );
};

export default DeliveryForm;

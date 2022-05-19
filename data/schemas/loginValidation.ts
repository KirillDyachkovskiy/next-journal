import * as yup from "yup";

const loginValidation = yup
  .object({
    email: yup
      .string()
      .email("Введите правильный email")
      .required("Это поля обязательно!"),
    password: yup
      .string()
      .min(8, "Минимум 8 символов")
      .matches(/[a-zA-Z]/, "Пароль должен содержать только латинские символы")
      .required("Это поля обязательно!"),
  })
  .required();

export default loginValidation;

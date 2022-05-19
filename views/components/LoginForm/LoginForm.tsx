import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useInput } from "../../hooks";

import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../../../data/schemas";

import { Button, Input } from "../../ui";

import s from "./loginForm.module.scss";

const LoginForm: FC = () => {
  const form = useForm({
    resolver: yupResolver(loginValidation),
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...form}>
      <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          label="Email"
          {...register("email")}
          error={errors["email"]?.message}
          {...useInput("")}
        />
        <Input
          id="password"
          label="Пароль"
          {...register("password")}
          error={errors["password"]?.message}
          {...useInput("")}
        />
        <div className={s.loginForm__footer}>
          <Button htmlType="submit">Зайти</Button>
          <Button onClick={() => {}} color="secondary" variant="text">
            Регистрация
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;

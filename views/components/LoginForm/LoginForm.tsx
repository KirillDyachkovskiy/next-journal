import { FC } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginValidation } from "../../../data/schemas";

import { Button, Input } from "../../ui";

import s from "./loginForm.module.scss";

interface ILoginForm {
  switchToRegister: () => void;
}

const LoginForm: FC<ILoginForm> = ({ switchToRegister }) => {
  const form = useForm({
    resolver: yupResolver(loginValidation),
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...form}>
      <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              id="email"
              label="Email"
              {...field}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              id="password"
              label="Пароль"
              {...field}
              error={errors.password?.message}
            />
          )}
        />
        <div className={s.loginForm__footer}>
          <Button htmlType="submit">Зайти</Button>
          <Button onClick={switchToRegister} color="secondary" variant="text">
            Регистрация
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;

import { FC } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerValidation } from "../../../data/schemas";

import { Button, Input } from "../../ui";

import s from "./registerForm.module.scss";

interface IRegisterForm {
  switchToLogin: () => void;
}

const RegisterForm: FC<IRegisterForm> = ({ switchToLogin }) => {
  const form = useForm({
    resolver: yupResolver(registerValidation),
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
      <form className={s.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="nickname"
          control={control}
          render={({ field }) => (
            <Input
              id="nickname"
              label="Никнейм"
              {...field}
              error={errors.email?.message}
            />
          )}
        />
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
        <div className={s.registerForm__footer}>
          <Button htmlType="submit">Зарегистрироваться</Button>
          <Button onClick={switchToLogin} color="secondary" variant="text">
            Войти
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;

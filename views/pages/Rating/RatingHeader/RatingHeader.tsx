import type { NextPage } from "next";

import s from "./ratingHeader.module.scss";

const RatingHeader: NextPage = () => {
  return (
    <section className={s.ratingHeader}>
      <h1 className={s.ratingHeader__title}>Рейтинг сообщества и блогов</h1>
      <p className={s.ratingHeader__text}>
        Десять лучших авторов и комментаторов, а также администраторы первых
        девяти сообществ из рейтинга по итогам месяца бесплатно получают
        Plus-аккаунт на месяц.
      </p>
    </section>
  );
};

export default RatingHeader;

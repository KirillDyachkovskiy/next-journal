import { FC, useState } from "react";

import s from "./ratingHeader.module.scss";
import { Tab, Tabs } from "../../ui";

const RatingHeader: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className={s.ratingHeader}>
      <h1 className={s.ratingHeader__title}>Рейтинг сообщества и блогов</h1>
      <p className={s.ratingHeader__text}>
        Десять лучших авторов и комментаторов, а также администраторы первых
        девяти сообществ из рейтинга по итогам месяца бесплатно получают
        Plus-аккаунт на месяц.
      </p>
      <Tabs<number>
        name="ratingDuration"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <Tab value={0} label="АВГУСТ" />
        <Tab value={1} label="ЗА 3 МЕСЯЦА" />
        <Tab value={2} label="ЗА ВСЁ ВРЕМЯ" />
      </Tabs>
    </section>
  );
};

export default RatingHeader;

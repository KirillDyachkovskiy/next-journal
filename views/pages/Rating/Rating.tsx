import { FC } from "react";

import { RatingHeader } from "../../components";

import s from "./rating.module.scss";

const Rating: FC = () => {
  return (
    <div className={s.rating}>
      <RatingHeader />
    </div>
  );
};

export default Rating;

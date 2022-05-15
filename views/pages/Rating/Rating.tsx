import type { NextPage } from "next";

import RatingHeader from "./RatingHeader";

import s from "./rating.module.scss";

const Rating: NextPage = () => {
  return (
    <div className={s.rating}>
      <RatingHeader />
    </div>
  );
};

export default Rating;

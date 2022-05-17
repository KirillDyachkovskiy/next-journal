import { FC } from "react";

import s from "./rating.module.scss";

interface IButton {
  value: number;
}

const Rating: FC<IButton> = ({ value }) => {
  return <span className={s.rating}>+{value}</span>;
};

export default Rating;

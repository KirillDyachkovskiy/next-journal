import { Children, ReactElement } from "react";

import { ITab } from "./Tab";

import s from "./tabs.module.scss";

interface SimpleTabsProps<T> {
  children: ReactElement<ITab<T>>[] | ReactElement<ITab<T>>;
  name: string;
  activeTab: T;
  setActiveTab: (tab: T) => void;
}

function Tabs<T = string>({
  children,
  name,
  activeTab,
  setActiveTab,
}: SimpleTabsProps<T>) {
  const onChange = (tab: T) => () => {
    setActiveTab(tab);
  };

  return (
    <div className={s.tabs}>
      {Children.map(children, (child, id) => (
        <label htmlFor={`${name}_${id}`}>
          <input
            className={s.tabs__radio}
            type="radio"
            id={`${name}_${id}`}
            name={name}
            checked={activeTab === child.props.value}
            onChange={onChange(child.props.value)}
          />
          <p className={s.tabs__label}>{child.props.label}</p>
        </label>
      ))}
    </div>
  );
}

export default Tabs;

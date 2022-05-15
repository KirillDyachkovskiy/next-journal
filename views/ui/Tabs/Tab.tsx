export interface ITab<T> {
  value: T;
  label: string;
}

function Tab<T = string>({ label }: ITab<T>) {
  return <>{label}</>;
}

export default Tab;

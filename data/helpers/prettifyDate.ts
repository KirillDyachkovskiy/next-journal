const prettifyDate = (ISODate: Date) =>
  new Date(ISODate).toLocaleString("ru", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

export default prettifyDate;

import { format, parseISO } from "date-fns";

const formatDate = (date) => {
  let parsedDate = parseISO(date);
  let formattedDate = format(new Date(parsedDate), "MMMM do");
  return formattedDate;
};

export { formatDate };

import moment from "jalali-moment";

export const ConvertToPersian = (date) => moment(date, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');

export default ConvertToPersian
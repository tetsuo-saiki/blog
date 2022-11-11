const moment = require("moment");
import "moment-timezone";

const timezone = "Asia/Tokyo";
const defaultFormat = "YYYY-MM-DDTHH:mm:ss+09:00";

export const formatDate = (date: Date, format: string = defaultFormat) =>
  moment(date).tz(timezone).format(format);

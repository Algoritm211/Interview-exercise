import moment from "moment";
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

export const getNewTime = (input, addingNumber = 0) => {
  let seconds = moment.duration(input).asSeconds() + addingNumber;
  let dur = moment.duration(seconds, 'seconds');
  return dur.format('HH:mm:ss', {trim: false});
};


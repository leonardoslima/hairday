import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na date e verifica se está no passado.
    const isHourPat = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPat,
    };
  });
}

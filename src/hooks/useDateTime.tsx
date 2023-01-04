import { format, formatInTimeZone, utcToZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";

// time fn
function getDisplayTime(timezone: any) {
	return format(utcToZonedTime(new Date(), timezone), "pp");
}

// date fn
function getDisplayDate(timezone: any) {
	return formatInTimeZone(new Date(), timezone, "PPPP, z");
}

// const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const useDateTime = ({ selectedTimeZone }: any) => {
	const [timezone, setTimezone] = useState(selectedTimeZone);
	const [clockTime, setClockTime] = useState(getDisplayTime(timezone));
	const [dateTime, setDateTime] = useState(getDisplayDate(timezone));

	// Running clock
	useEffect(() => {
		const timeInterval = setInterval(() => {
			setClockTime(getDisplayTime(timezone));
		}, 1000);

		setDateTime(getDisplayDate(timezone));

		return () => clearInterval(timeInterval);
	}, [timezone]);

	return [clockTime, setClockTime, dateTime, setDateTime, setTimezone, getDisplayTime, getDisplayDate];
};

export default useDateTime;

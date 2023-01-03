import { format, utcToZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";

const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// time fn
const getDisplayTime = (timezone: any) => {
	return format(utcToZonedTime(new Date(), timezone), "pp");
};

const useClock = ({ selectedTimezone }: any) => {
	const [timezone, setTimezone] = useState(selectedTimezone || systemTimeZone);
	const [clockTime, setClockTime] = useState(getDisplayTime(timezone));

	// Running clock
	useEffect(() => {
		const timeInterval = setInterval(() => {
			setClockTime(getDisplayTime(timezone));
		}, 1000);

		return () => clearInterval(timeInterval);
	}, [timezone]);

	return clockTime;
};

export default useClock;

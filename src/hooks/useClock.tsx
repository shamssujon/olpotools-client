import { format, utcToZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";

const useClock = ({ selectedTimezone }: any) => {

	// time fn
	// const getDisplayTime = (selectedTimezone: string) => {
	// 	return format(utcToZonedTime(new Date(), selectedTimezone), "pp");
	// };

	// const [timezone, setTimezone] = useState(selectedTimezone);
	const [clockTime, setClockTime] = useState(format(utcToZonedTime(new Date(), selectedTimezone), "pp"));

	// Running clock
	useEffect(() => {
		const timeInterval = setInterval(() => {
			setClockTime(format(utcToZonedTime(new Date(), selectedTimezone), "pp"));
		}, 1000);

		return () => clearInterval(timeInterval);
	}, [selectedTimezone]);

	return [clockTime];
};

export default useClock;

import { formatInTimeZone } from "date-fns-tz";
import { useEffect, useState } from "react";

const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const useDate = ({ inputTimezone }: any) => {
	const [timezone, setTimezone] = useState(inputTimezone || systemTimeZone);
	const [dateTime, setdateTime] = useState("");

	useEffect(() => {
		setdateTime(formatInTimeZone(new Date(), timezone, "PPPP, z"));
	}, []);

	return dateTime;
};

export default useDate;

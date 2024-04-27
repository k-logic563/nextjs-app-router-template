"use client";

import { useMemo, useState } from "react";

const SamplePage = () => {
	const [name, setName] = useState<string>("");

	const reversedName = useMemo(() => {
		return name.split("").reverse().join("");
	}, [name]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	return (
		<div>
			<h1>Sample Page</h1>
			<input
				type="text"
				placeholder="Enter your name"
				onChange={handleChange}
			/>
			{name && <p>{reversedName}</p>}
		</div>
	);
};

export default SamplePage;

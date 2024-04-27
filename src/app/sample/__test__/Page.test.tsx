import { render, screen } from "@testing-library/react";

import SamplePage from "@app/sample/page";

test("renders Page component", () => {
	render(<SamplePage />);
	const heading = screen.getByText("Sample Page");
	expect(heading).toBeInTheDocument();
});

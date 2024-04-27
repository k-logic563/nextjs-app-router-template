import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SamplePage from "@app/sample/page";

beforeEach(() => {
	render(<SamplePage />);
});

afterEach(() => {
	cleanup();
});

describe("Test Sample Page", () => {
	it("renders Page component", () => {
		const heading = screen.getByText("Sample Page");
		expect(heading).toBeInTheDocument();
	});

	it("renders input field", async () => {
		const input = screen.getByPlaceholderText("Enter your name");
		await userEvent.type(input, "John Doe");
		expect(screen.getByText("eoD nhoJ")).toBeInTheDocument();
	});
});

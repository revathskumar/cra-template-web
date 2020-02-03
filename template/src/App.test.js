import React from "react";
import { render, within, fireEvent } from "../tests/utils";
import App from "./App";

test("renders home", () => {
  const { container } = render(<App />, {
    initialEntries: ["/"],
    initialIndex: 0,
  });
  const { getByText } = within(container.querySelector(".section"));
  const home = getByText(/Home/i);
  expect(home).toBeInTheDocument();
});

test("renders about", () => {
  const { container, getByText } = render(<App />, {
    initialEntries: ["/"],
    initialIndex: 0,
  });

  fireEvent.click(getByText(/About/i));

  const { getByText: sectionGetByText } = within(
    container.querySelector(".section")
  );

  const about = sectionGetByText(/About/i);

  expect(about).toBeInTheDocument();
});

test("renders 404", () => {
  const { container, getByText } = render(<App />, {
    initialEntries: ["/"],
    initialIndex: 0,
  });

  fireEvent.click(getByText(/Not Found/i));

  const { getByText: sectionGetByText } = within(
    container.querySelector(".section")
  );

  const notFound = sectionGetByText(/404 ::Not Found/i);

  expect(notFound).toBeInTheDocument();
});

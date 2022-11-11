import { Footer } from ".";
import { render, screen } from "@testing-library/react";

test("footer内に著作権表示の文言が存在する", () => {
  render(<Footer />);
  expect(screen.getByText("© saiki All Rights Reserved.")).toBeInTheDocument();
});

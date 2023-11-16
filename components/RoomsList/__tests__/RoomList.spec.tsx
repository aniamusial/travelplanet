import { render } from "@testing-library/react";
import RoomsList from "../RoomsList";

describe("<RoomsList/>", () => {
  it("should render component", () => {
    const { getByText } = render(<RoomsList />);
    expect(getByText("Book")).toBeTruthy();
  });
});

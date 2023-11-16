import { render } from "@testing-library/react";
import { RoomListItem } from "../RoomListItem";

const roomMock = {
  id: 1,
  name: "test",
  price: {
    value: 100,
    currencyCode: "CZK",
  },
};
describe("<RoomListItem />", () => {
  it("should render component", () => {
    const { getByText } = render(
      <RoomListItem
        room={roomMock}
        value="test"
        onAvailabilityChange={() => {}}
      />
    );

    expect(getByText("test")).toBeTruthy();
  });
});

import React from "react";
import { mount, shallow } from "enzyme";
import axios from "axios";
import { act } from "react-dom/test-utils";

import LoadImage from "../components/LoadImage";

jest.mock("axios");

const data = {
  config: {
    url: "image-url",
  },
};

describe("LoadImage test", () => {
  let wrapper;

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with loading", () => {
    wrapper = shallow(<LoadImage />);

    console.log(wrapper.debug());

    expect(wrapper.find("div").first().text()).toBe("...loading");
  });

  test("loads img", async () => {
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve(data));
      wrapper = mount(<LoadImage />);
    });

    wrapper.update();

    await expect(axios.get).toHaveBeenCalledWith(
      "https://picsum.photos/200/300.jpg",
      {
        "Content-Type": "application/xml; charset=utf-8",
      }
    );

    await expect(axios.get).toHaveBeenCalledTimes(1);

    await expect(wrapper.find("img").props().src).toEqual("image-url");
  });
});

import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import LoadImage from "../components/LoadImage";
import ImageUpload from "../components/ImageUpload";
import LoadXml from "../components/LoadXml";

describe("App test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("renders h2", () => {
    expect(wrapper.find("h2").first().text()).toContain(
      "Interview Coding Test"
    );
  });

  test("renders LoadImage", () => {
    expect(wrapper.find(LoadImage)).toHaveLength(1);
  });

  test("renders ImageUpload", () => {
    expect(wrapper.find(ImageUpload)).toHaveLength(1);
  });

  test("renders LoadXml", () => {
    expect(wrapper.find(LoadXml)).toHaveLength(1);
  });
});

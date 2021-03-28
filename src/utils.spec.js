import { print } from "./utils";

describe("utils.js :", () => {
  describe("print :", () => {
    it("should console log with a green color the given text", () => {
      console.log = jest.fn();
      const msg = "test_message";
      print(msg);
      expect(console.log).toHaveBeenCalledWith(
        `%c${msg}`,
        "color: rgb(1,87,97)"
      );
    });
  });
});

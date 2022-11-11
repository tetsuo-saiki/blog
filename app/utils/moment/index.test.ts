import { formatDate } from "./";

describe("formatDate", () => {
  test("引数なし", () => {
    const date = new Date("2022-08-31T03:24:00");
    expect(formatDate(date)).toEqual("2022-08-31T12:24:00+09:00");
  });
  test("引数あり", () => {
    const date = new Date("2022-08-31T03:24:00");
    const format = "YYYY年MM月DD日";
    expect(formatDate(date, format)).toEqual("2022年08月31日");
  });
});

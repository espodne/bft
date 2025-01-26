import { describe, it, expect, vi } from "vitest";
import { updateURL } from "../updateURL";

describe("updateURL", () => {
  it("should update URL with selectedIds", () => {
    const pushStateSpy = vi.spyOn(window.history, "pushState");

    const selectedIds = ["1", "2", "3"];
    updateURL(selectedIds);

    expect(pushStateSpy).toHaveBeenCalledWith(
      null,
      "",
      `${window.location.pathname}?categoryId=1&categoryId=2&categoryId=3`
    );
  });

  it("should handle custom paramName", () => {
    const pushStateSpy = vi.spyOn(window.history, "pushState");
    const selectedIds = ["1", "2"];
    updateURL(selectedIds, "customParam");

    expect(pushStateSpy).toHaveBeenCalledWith(
      null,
      "",
      `${window.location.pathname}?customParam=1&customParam=2`
    );
  });

  it("should log error if selectedIds is not an array", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    updateURL("notAnArray");

    expect(consoleSpy).toHaveBeenCalledWith("selectedIds не массив");
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});

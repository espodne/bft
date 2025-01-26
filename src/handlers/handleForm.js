import { updateURL, selectedIdsDisplay } from "../utils/utils";
import { SELECTORS, URL_PARAMS } from "../constants/constants";

export let selectedIds = [];

export function handleForm() {
  document.querySelectorAll(SELECTORS.CHECKBOX).forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const id = checkbox.value;

      checkbox.checked
        ? selectedIds.push(id)
        : (selectedIds = selectedIds.filter((item) => item !== id));

      updateURL(selectedIds);
      selectedIdsDisplay(selectedIds);
    });
  });

  window.addEventListener("load", () => {
    const params = new URLSearchParams(window.location.search);
    selectedIds = params.getAll(URL_PARAMS.CATEGORY);

    document.querySelectorAll(SELECTORS.CHECKBOX).forEach((checkbox) => {
      if (selectedIds.includes(checkbox.value)) {
        checkbox.checked = true;
      }
    });

    selectedIdsDisplay(selectedIds);
  });
}

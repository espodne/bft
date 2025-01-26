import { updateURL } from "../utils/updateURL";
import { selectedIdsDisplay } from "../utils/selectedIdsDisplay";
import { SELECTORS, URL_PARAMS } from "../constants/constants";

export let selectedIds = [];

function handleCheckboxChange(event) {
  const checkbox = event.target;
  const id = checkbox.value;

  checkbox.checked
    ? selectedIds.push(id)
    : (selectedIds = selectedIds.filter((item) => item !== id));

  updateURL(selectedIds);
  selectedIdsDisplay(selectedIds);
}

function handlePageLoad() {
  const params = new URLSearchParams(window.location.search);
  selectedIds = params.getAll(URL_PARAMS.CATEGORY);

  document.querySelectorAll(SELECTORS.CHECKBOX).forEach((checkbox) => {
    if (selectedIds.includes(checkbox.value)) {
      checkbox.checked = true;
    }
  });

  selectedIdsDisplay(selectedIds);
}

export function handleForm() {
  document.querySelectorAll(SELECTORS.CHECKBOX).forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckboxChange);
  });

  window.addEventListener("load", handlePageLoad);
}

function cleanupEventListeners() {
  document.querySelectorAll(SELECTORS.CHECKBOX).forEach((checkbox) => {
    checkbox.removeEventListener("change", handleCheckboxChange);
  });

  window.removeEventListener("load", handlePageLoad);
}

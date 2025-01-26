import { DISPLAY_TEXT, URL_PARAMS } from "../constants/constants";

export function updateURL(selectedIds, paramName = URL_PARAMS.CATEGORY) {
  if (!Array.isArray(selectedIds)) {
    console.error(DISPLAY_TEXT.INVALID_SELECTED_IDS);
    return;
  }

  const params = new URLSearchParams();
  selectedIds.forEach((id) => params.append(paramName, id));
  const newURL = `${window.location.pathname}?${params.toString()}`;
  history.pushState(null, "", newURL);
}

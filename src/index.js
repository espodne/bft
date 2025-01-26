import { handleForm } from "./handlers/handleForm";
import { CheckboxList } from "./components/CheckboxList";
import { CATEGORIES_COUNT } from "./constants/constants";

CheckboxList("categories", CATEGORIES_COUNT);

document.addEventListener("DOMContentLoaded", () => {
  handleForm();
});

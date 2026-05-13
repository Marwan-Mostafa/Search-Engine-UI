import { debounce } from "./utils/debounce.js" 
import { renderResults } from "./components/resultsList.js"
import { createSearchHandler } from "./components/searchInput.js"

const input = document.getElementById("searchInput")
const results = document.getElementById("results")
const errorBox = document.getElementById("error")

if (!input || !results || !errorBox) {
    throw new Error("Missing required DOM elements");
}

const handler = createSearchHandler({
    renderResults,
    results,
    errorBox
})

const debouncedSearch = debounce(handler, 500);

input.addEventListener("input", debouncedSearch);
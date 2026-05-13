export function renderResults(items, results){
    results.innerHTML = ""

    if(!items || items.length === 0){
        results.innerHTML = `<p class="text-gray-400">No results found</p>`
        return
    }

    items.forEach(item => {
        const div = document.createElement("div")

        div.className = "p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"

        div.innerHTML = `
            <h3 class="font-bold">${item.title}</h3>
            <p class="text-sm text-gray-400">$${item.price}</p>
        `

        results.appendChild(div)
    })
}
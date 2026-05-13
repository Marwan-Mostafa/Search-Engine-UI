export function renderResults(items, results){
    results.innerHTML = ""

    if(!items || items.length === 0){
        results.innerHTML = `<p class="text-white-400">No results found</p>`
        return
    }

    items.forEach(item => {
        const div = document.createElement("div")

        div.className = `
            group relative p-5 rounded-2xl bg-gradient-to-r from-gray-500/20 via-blue-500/10 to-gray-500/20
            border border-white/10
            backdrop-blur-md
            shadow-lg shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            hover:-translate-y-1
            transition-all duration-300
            cursor-pointer
            overflow-hidden`

        div.innerHTML = `
            <div class="flex items-start justify-between gap-3">

                <!-- TITLE SECTION -->
                <div class="flex-1">
                    <h3 class="text-slate-100 group-hover:text-cyan-200 font-semibold text-lg leading-snug transition">
                        ${item.title}
                    </h3>
                </div>

                <!-- PRICE BADGE -->
                <div class="shrink-0">
                    <span class="
                        px-4 py-1.5 rounded-full
                        text-sm font-semibold tracking-wide
                        bg-gradient-to-r from-sky-500/20 to-blue-500/20
                        text-sky-200
                        border border-sky-400/20
                        backdrop-blur-md
                        shadow-lg shadow-sky-500/10">
                        $${item.price}
                    </span>
                </div>
            </div>

                    <!-- FOOTER -->
            <div class="mt-4 flex items-center justify-between">

                <div class="flex items-center gap-2
                    px-3 py-1.5 rounded-full
                    bg-gradient-to-r from-emerald-500/10 to-green-400/5
                    border border-emerald-400/10
                    text-emerald-300 text-xs font-medium
                    backdrop-blur-md w-fit">

                    <span class="relative flex h-2.5 w-2.5">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                        <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-md shadow-emerald-400/50"></span>
                    </span>

                    In Stock
                </div>

                <div class="text-xs text-white group-hover:text-cyan-200  transition">
                    View details →
                </div>
            </div>

            <!-- GLOW EFFECT -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition
                        bg-gradient-to-r from-sky-500/5 to-transparent pointer-events-none">
            </div>
        `;

        results.appendChild(div)
    })
}
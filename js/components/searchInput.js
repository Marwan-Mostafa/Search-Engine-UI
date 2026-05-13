import { getCache, setCache} from "../utils/cache.js"

export function createSearchHandler({renderResults, results, loader, errorBox}){

    let controller
    let lastQuery = ""

    return async function(e) {
        const value = e.target.value
        const query = value.trim().toLowerCase()
        errorBox.textContent = ""

        if(!query){
            results.innerHTML = ""
            loader.classList.add("hidden")
            return
        }

        if(query === lastQuery) return
        lastQuery = query

        try{
            if(controller) controller.abort()
            controller = new AbortController()

            loader.classList.remove("hidden");
            

            const cached = getCache(query)

            if(cached){
                renderResults(cached, results)
                loader.classList.add("hidden")
                return
            }

            const res = await fetch(`https://dummyjson.com/products/search?q=${value}`, { signal: controller.signal })
            
            
            if(!res.ok){
                throw new Error("API Error")
            }
            const data = await res.json()

            setCache(value, data.products);
            renderResults(data.products, results)
        }   
        catch(err){
            if(err.name !== "AbortError")
                errorBox.textContent = "Something is wrong"
        }
        finally{
            loader.classList.add("hidden");
        }
    }
}
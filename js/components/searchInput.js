
export function createSearchHandler({renderResults, results, loader, errorBox}){

    let controller

    return async function(e) {
        const value = e.target.value

        errorBox.textContent = ""

        if(!value.trim()){
            results.innerHTML = ""
            loader.classList.add("hidden")
            return
        }

        try{
            if(controller) controller.abort()
            controller = new AbortController()

            loader.classList.remove("hidden");
            
            const res = await fetch(`https://dummyjson.com/products/search?q=${value}`, { signal: controller.signal })
            
            if(!res.ok){
                throw new Error("API Error")
            }
            const data = await res.json()

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
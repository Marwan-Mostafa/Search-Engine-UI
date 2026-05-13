
export function createSearchHandler({renderResults, results, loader, errorBox}){
    return async function(e) {
        const value = e.target.value

        
        if(!value.trim()){
            results.innerHTML = ""
            return
        }

        try{
            loader.classList.remove("hidden");
            
            const res = await fetch(`https://dummyjson.com/products/search?q=${value}`)
            const data = await res.json()

            renderResults(data.products, results)
        }   
        catch(err){
            errorBox.textContent = "Something is wrong"
        }
        finally{
            loader.classList.add("hidden");
        }
    }
}
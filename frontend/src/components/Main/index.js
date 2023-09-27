import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


// import Food from "../..pages/Food/";
// import Show from "../..pages/Show/";

const Main = (props) => {

    const [foods, setFoods] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState("")
    const [results, setResults] = useState(null)


    async function fetchFood() {
        const response = await axios({
            method: 'GET',
            url: `https://api.calorieninjas.com/v1/nutrition?query=${query}`,
            headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY }
            })
            console.log(response)
            setFoods(response.data.items)
            setIsLoading(false)
    }    


    useEffect(() => {

    }, [foods])

    const handleSearch = async (e) => {
        e.preventDefault()
        await fetchFood()
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const renderFood = foods?.map((curFood) =>(
        <div>
            <h1>{curFood.name}</h1>
            <h3>{curFood.calories}</h3>
            <h3>{curFood.serving_size_g}</h3>
            <h3>{curFood.fat_total_g}</h3>
            <h3>{curFood.protein_g}</h3>
        </div>
    ))

    const loaded = () => {
        return (
            <div>
                <section>{renderFood}</section>
            </div>
        )
    }

    const loading = () => {
        <div>
            <h1>Loading..</h1>
        </div>
    }
    return (
        <main>
            {/* <Routes>
                <Route path="/" element={<Food />} />
                <Route path="food/:id" element={<Show />} />
            </Routes> */}
            <h2>Main Test</h2>
            <div>
                <form>
                    <input placeholder='Search Food' type="text" value={query} onChange={handleChange} />
                    <button type="submit" onClick={handleSearch}>Search</button>
                </form>
                <section>{isLoading ? loading() : loaded()}</section>
            </div>
        </main>
    )
}

export default Main;
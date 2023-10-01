import "./main.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Main = (props) => {

    const [foods, setFoods] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState("")
    const navigate = useNavigate()


    async function fetchFood() {
        const response = await axios({
            method: 'GET',
            url: process.env.REACT_APP_API_URL + query,
            headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY }
        })
        console.log(response)
        setFoods(response.data.items)
        setIsLoading(false)
    }


    useEffect(() => {

    }, [isLoading])

    const handleSearch = async (e) => {
        e.preventDefault()
        await fetchFood()
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    async function handleSubmit(data) {
        const newFood = await fetch(process.env.REACT_APP_BASE_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        if (newFood.ok) {
            navigate("/Food")
        } else {
            throw new Error("Invalid Request")
        }
    }

    const renderFood = foods?.map((curFood) => (
        <div className="mt-5">
            <h1>{curFood.name.toUpperCase()}</h1>
            <h3>Calories: {curFood.calories} kcal</h3>
            <h3>Serving size: {curFood.serving_size_g}g</h3>
            <h3>Total Fats: {curFood.fat_total_g}g</h3>
            <h3>Protein content: {curFood.protein_g}g</h3>
            <button className="saveButton btn btn-primary btn-lg mx-3 px-5 py-3 mt-2"
                onClick= {() => handleSubmit(normalizeResult(foods))} >Save {curFood.name.toUpperCase()}
            </button>
        </div>
    ))

    function normalizeResult(rawData) {
        return {
            name: rawData[0].name,
            calories: rawData[0].calories,
            servingSize: rawData[0].serving_size_g,
            fatContent: rawData[0].fat_total_g,
            protein: rawData[0].protein_g
        };
    }

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
            <h1>Welcome To Your Food and Nutrition Tracker</h1>
            <p>Search nutrition facts for foods you want to track</p>
            <div>
                <form>
                    <div class="container">

                        <div class="row height d-flex justify-content-center align-items-center">

                            <div class="col-md-8">

                                <div class="search">
                                    <input type="text" class="form-control" placeholder="Search Food" value={query} onChange={handleChange}/>
                                        <button class="btn btn-primary" type="submit" onClick={handleSearch}>Search</button>
                                </div>

                            </div>

                        </div>
                    </div>
                    {/* <input placeholder='Search Food' type="text" value={query} onChange={handleChange} />
                    <button type="submit" onClick={handleSearch}>Search</button> */}
                </form>
                <section>{isLoading ? loading() : loaded()}</section>
            </div>
        </main>
    )
}

export default Main;
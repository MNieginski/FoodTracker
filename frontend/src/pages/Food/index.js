import "./food.css"
import { useState, useEffect } from "react"


const Food = (props) => {

    const [isLoading, setIsLoading] = useState(true)
    const [allFoods, setAllFoods] = useState("")



    async function fetchFood(data) {
        const newFood = await fetch(process.env.REACT_APP_BASE_URL,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        console.log(newFood)
        if (newFood.ok) {
            console.log(newFood)
            const data = await newFood.json()
            // console.log(data)
            setAllFoods(data)
            setIsLoading(false)
        } else {
            throw new Error("Invalid Request")
        }
    }

    useEffect(() => {
        fetchFood()
    }, [])

    const loaded = () => {
        const allResults = allFoods?.map((eachFood) => (
            <div className="mainContainer">
                <div className="foodContainer">
                    <h2 className="food">{eachFood.name.toUpperCase()}</h2>
                    <p className="food">{eachFood.calories} kcal</p>
                    <p className="food">{eachFood.servingSize}g</p>
                    <p className="food">{eachFood.fatContent}g</p>
                    <p className="food">{eachFood.protein}g</p>
                </div>
            </div>
        ))
        return (
            <div>
                <section>{allResults}</section>
            </div>
        )
    }

    const loading = () => {
        <div>
            <h1>Loading..</h1>
        </div>
    }

    return (
        <div>
            <h1>All Saved Foods</h1>
            <section>{isLoading ? loading() : loaded()}</section>
        </div>
    )
}

export default Food;
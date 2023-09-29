import { useState, useEffect } from "react"

// create fetch call - get no body - useEffect

// store response into state - useState

// isLoading 

// map over state into return


const Food = (props) => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ allFoods, setAllFoods ] = useState("")
    


    async function fetchFood(data) {
        const newFood = await fetch(process.env.REACT_APP_BASE_URL, 
            { method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
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
            <h2>{eachFood.name.toUpperCase()}</h2>
        ))
        return (
            <div>
                <p>test loading</p>
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
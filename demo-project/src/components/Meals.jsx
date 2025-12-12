import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Meals = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then(res => {
                setItems(res.data.meals);
            })
            .catch(err => console.log(err));
    }, []);

    const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
        return (
            <section 
                key={idMeal}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition p-4 m-4 w-64"
            >
                <img 
                    src={strMealThumb} 
                    alt={strMeal} 
                    className="w-full h-40 object-cover rounded-md"
                />
                <section className="mt-3">
                    <p className="text-lg font-semibold">{strMeal}</p>
                    <p className="text-gray-500 text-sm">#{idMeal}</p>
                </section>
            </section>
        );
    });

    return (
        <div className="flex flex-wrap gap-5 justify-center p-6 bg-gray-100 min-h-screen">
            {itemsList}
        </div>
    );
};

export default Meals;

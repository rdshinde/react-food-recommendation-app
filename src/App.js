import "./styles.css";
import React, { useState } from "react";

const maharashtrianFood = {
  spicy: [
    { dishName: "Tambda Rassa", rating: "5/5" },
    { dishName: "Maswadi Rassa", rating: "4.5/5" },
    { dishName: "Thecha", rating: "3.5/5" }
  ],

  sweet: [
    { dishName: "Kandi Pedhe", rating: "5/5" },
    { dishName: "Puran Poli", rating: "5/5" },
    { dishName: "Kaanole", rating: "4/5" }
  ],
  fried: [
    { dishName: "Kothimbir Vadi", rating: "4/5" },
    { dishName: "Anarsa", rating: "4/5" },
    { dishName: "Pomfret Fry", rating: "3.5/5" }
  ]
};

export default function App() {
  const [selectedfoodType, setfoodType] = useState("sweet");
  function foodTypeClickHandler(foodType) {
    setfoodType(foodType);
  }
  return (
    <div className="App">
      <h1> Maharashtrian Food </h1>
      <p>
        Here are some of my favourite Maharashtrian Dishes. Check which one
        likes you the most.
      </p>

      <div>
        {Object.keys(maharashtrianFood).map((foodType) => (
          <button onClick={() => foodTypeClickHandler(foodType)}>
            {foodType}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {maharashtrianFood[selectedfoodType].map((food) => (
            <li key={food.dishName}>
              <span>
                {" "}
                <h3> {food.dishName} </h3> {food.rating}{" "}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import "./styles.css";
import React, { useState } from "react";

const maharashtrianFood = {
  spicy: [
    {
      dishName: "Tambda Rassa",
      description:
        "It is a Kolhapuri non-veg dish. It is highly rated spicy food in Maharashtra.",
      rating: "5/5"
    },
    {
      dishName: "Maswadi Rassa",
      description:
        "This dish is famous in Khandesh area of Maharashtra. It is made up of Besan and Sesame.",
      rating: "4.5/5"
    },
    {
      dishName: "Thecha",
      description: "It is very spicy dish made up with green chillies.",
      rating: "3.5/5"
    }
  ],

  sweet: [
    {
      dishName: "Kandi Pedhe",
      description:
        "It is a very famous dish from Satara. Basically it is a type of pedha that is usually made up with milk or Khava.",
      rating: "5/5"
    },
    {
      dishName: "Puran Poli",
      description:
        "It is a sweet dish wich is cooked on almost every traditional festival. It has Chana Dal Puran inside the poli made up of wheat flour.",
      rating: "5/5"
    },
    {
      dishName: "Kaanole",
      description:
        "It is a special item cooked on the occasion of Nagpanchami 🐍 .",
      rating: "4/5"
    }
  ],
  fried: [
    {
      dishName: "Kothimbir Vadi",
      description:
        "It is a fried dish cooked with Coriander leaves,Besan and Sesame added on it ",
      rating: "4/5"
    },
    {
      dishName: "Anarsa",
      description: "It is a fried sweet dish made up of rice flour.",
      rating: "4/5"
    },
    {
      dishName: "Pomfret Fry",
      description:
        "It is a non-veg dish. Pomfret fish is fried and served with Rassa and rice.",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [selectedfoodType, setfoodType] = useState("sweet");
  function foodTypeClickHandler(foodType) {
    setfoodType(foodType);
  }
  return (
    <div className="App">
      <h1> Maharashtrian Food 🥘 </h1>
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
            <li key={food.description}>
              <div>
                <h3> {food.dishName} </h3> <p>{food.description}</p>
                {food.rating}
                {/* <p>{food.description}</p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

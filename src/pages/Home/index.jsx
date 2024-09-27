import React, { useState, useEffect } from "react";

function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setCards(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-8">
      {cards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((value, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={value.attributes.image}
                  alt={value.attributes.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4 text-center flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {value.attributes.title}
                  </h3>
                  <h4 className="text-gray-600">${value.attributes.price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;

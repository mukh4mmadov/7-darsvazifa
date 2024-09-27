import React, { useEffect, useState } from "react";
import { GoArrowDown } from "react-icons/go";

function Gallery() {
  const [albums, setAlbums] = useState([]);
  const [scrollInterval, setScrollInterval] = useState(null);
  const [scrollToTopInterval, setScrollToTopInterval] = useState(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setAlbums(data);
      })
      .catch((err) => {
        console.log(err);
      });

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const startScrolling = () => {
    const interval = setInterval(() => {
      window.scrollBy(0, 10);
    }, 50);
    setScrollInterval(interval);
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval);
    setScrollInterval(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {albums.length > 0 &&
          albums.map(function (value) {
            return (
              <div
                key={value.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={value.url}
                  alt={value.title}
                  className="w-full h-48 object-cover"
                />
                <h3 className="p-2 text-center font-semibold">{value.title}</h3>
              </div>
            );
          })}
      </div>

      <button
        onMouseDown={startScrolling}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-2 bg-blue-600 text-white rounded shadow-md transition-transform duration-200 active:scale-95 active:bg-blue-700"
      >
        <GoArrowDown />
      </button>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 p-2 bg-green-600 text-white rounded shadow-md"
        >
          Eng boshiga qaytish
        </button>
      )}
    </div>
  );
}

export default Gallery;

import { useEffect, useState } from "react";

function Categories({ setCategory, setSkip }) {
  const [categories, setCategories] = useState();
  const url = "https://dummyjson.com/products/category-list";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="categories">
      {categories &&
        categories.map((category) => (
          <button
            key={category}
            className="category-btn"
            onClick={() => {
              setCategory(category);
              setSkip(0);
            }}
          >
            {category}
          </button>
        ))}
    </div>
  );
}

export default Categories;

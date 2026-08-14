import { useEffect, useState } from "react";

function Categories({ getProducts }) {
  const [categories, setCategories] = useState();
  const url = "https://dummyjson.com/products/category-list";
  console.log(getProducts);

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
            onClick={() => getProducts(category)}
          >
            {category}
          </button>
        ))}
    </div>
  );
}

export default Categories;

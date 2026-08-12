import { useEffect, useState } from "react";

function Categories() {
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
          <button key={category} className="category-btn">
            {category}
          </button>
        ))}
    </div>
  );
}

export default Categories;

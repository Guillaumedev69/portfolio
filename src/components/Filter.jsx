import "../styles/Filter.scss"

import PropTypes from "prop-types";

const Filter = ({ selectedCategory, setFilter }) => {
  const categories = ["All", "Frontend", "Création", "Optimisation"];

  return (
    <div className="filterContainer">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={selectedCategory === category ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

Filter.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;

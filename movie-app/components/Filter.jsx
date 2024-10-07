const Filter = ({ filter, onFilterChange }) => {
  const handleTitleChange = (e) => {
    onFilterChange({
      ...filter,
      title: e.target.value,
    });
  };

  const handleRatingChange = (e) => {
    onFilterChange({
      ...filter,
      rating: parseInt(e.target.value),
    });
  };
  return (
    <div>
      <h2>Filter Movies</h2>
      <input
        type="text"
        placeholder="Search by title"
        value={filter.title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        value={filter.rating}
        onChange={handleRatingChange}
        min="0"
        max="5"
      />
    </div>
  );
};

export default Filter;

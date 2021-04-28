const Filter = ({ filter, onFilterChange }) => {
  const onChange = e => {
    onFilterChange(e.target.value);
  };
  return (
    <label>
      Find contacts by name 🔍
      <input type="text" value={filter} onChange={onChange} name="filter" />
    </label>
  );
};

export default Filter;

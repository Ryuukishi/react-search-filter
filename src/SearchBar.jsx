function SearchBar({ filterText, inStockOnly, setFilterText, setInStockOnly }) {
  const handleChange = (e) => {
    setFilterText(e.target.value);
  };
  const handleClick = (e) => {
    setInStockOnly(e.target.checked);
  };
  return (
    <form>
      <label>
        <input
          type='text'
          placeholder='Search...'
          value={filterText}
          onChange={handleChange}
        />
      </label>
      <label>
        <input type='checkbox' onChange={handleClick} checked={inStockOnly} />
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;

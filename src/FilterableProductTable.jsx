import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = inStockOnly
    ? products.filter(
        (product) =>
          product.stocked &&
          product.name.slice(0, filterText.length).toLowerCase() ===
            filterText.toLowerCase()
      )
    : products.filter(
        (product) =>
          product.name.slice(0, filterText.length).toLowerCase() ===
          filterText.toLowerCase()
      );

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={filteredProducts}
        filterText={filterText}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;

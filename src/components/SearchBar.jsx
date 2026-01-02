import { useState } from "react";

const popular = ["Headphones", "Smart Watch", "Keyboard", "Camera"];

const SearchBar = ({ products, onSelect }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const results = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-wrapper">
      <input
        placeholder="Search products, brands and more"
        value={query}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onChange={(e) => setQuery(e.target.value)}
      />

      {open && (
        <div className="search-dropdown">
          <p className="section-title">Popular Searches</p>
          {popular.map(p => (
            <p key={p} onClick={() => setQuery(p)}>{p}</p>
          ))}

          {results.length > 0 && (
            <>
              <p className="section-title">Products</p>
              {results.map(item => (
                <p
                  key={item.id}
                  onClick={() => {
                    onSelect(item);
                    setQuery("");
                  }}
                >
                  {item.title}
                </p>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

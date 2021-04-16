import React, { useState, useEffect } from "react";
import { SearchBar } from "./../../Components/SearchBar";
import { ListResults } from "./../../Components/ListResult";
import { api_key, engine_id } from "./../../google.json";

export const Home = () => {
  const [query, setQuery] = useState(null);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    query
      ? fetch(
          `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${engine_id}&q=${query}`
        )
          .then((r) => r.json())
          .then((r) => setSearch(r))
      : null;
  }, []);
  return (
    <div>
      <SearchBar setquery={setQuery} query={query} />
      {query ? <ListResults data={search} /> : null}
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { SearchBar } from "./../../Components/SearchBar";
import { ListResults } from "./../../Components/ListResult";
import { Paginations } from "./../../Components/Pagination";
import { api_key, engine_id } from "./../../google.json";

export const Home = () => {
  const [query, setQuery] = useState(null);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((r) => r.json())
      .then((r) => setSearch(r));
  }, []);
  return (
    <div>
      <SearchBar setquery={setQuery} query={query} />
      {query ? <ListResults data={search} /> : null}
      <Paginations />
    </div>
  );
};

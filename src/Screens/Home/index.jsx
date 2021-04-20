import React, { useEffect, useState } from "react";
import { SearchBar } from "./../../Components/SearchBar";
import { ListResults } from "./../../Components/ListResult";
import { Paginations } from "./../../Components/Pagination";
import { api_key, engine_id } from "./../../google.json";

export const Home = () => {
  const [query, setQuery] = useState(null);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${engine_id}&q=${query}`
    )
      .then((r) => r.json())
      .then((r) => setSearch(r));
  }, [query]);
  return (
    <div>
      <SearchBar setquery={setQuery} query={search} />
      {query ? <ListResults data={search} /> : null}
      <Paginations />
    </div>
  );
};

import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOption } from "../../Api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState([null]);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOption
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handlerOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const style = {
    container: (provided, state) => ({
      ...provided,
      width: "500px",
      margin: "0px auto",
      textColor: "white",
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
      opacity: "40%",
      borderRadius: "20px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "black",
    }),
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handlerOnChange}
        loadOptions={loadOptions}
        styles={style}
      />
    </>
  );
};

export default Search;

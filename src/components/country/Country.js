import React from "react";

const Country = (props) => {
  const { area, region, population, name, flags } = props.country;
  return (
    <div>
      <div class="card w-96 h-[400px] bg-base-100 shadow-xl">
        <figure>
          <img src={flags.png} alt="Shoes" />
        </figure>
        <div class="card-body text-left mt-2">
          <h2 class="card-title">{name.common}</h2>
          <p>Area : {area}</p>
          <p>Population : {population}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;

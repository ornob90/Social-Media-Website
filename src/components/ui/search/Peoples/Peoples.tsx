import React from "react";
import People from "../People/People";

const Peoples = () => {
  return (
    <section className="flex flex-col mt-4 divide-y-2">
      {[1, 2, 3, 4, 5, 6, 7].map((value) => (
        <People key={value} />
      ))}
    </section>
  );
};

export default Peoples;

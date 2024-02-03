/* eslint-disable react/prop-types */
import { useState } from "react";
import EducationalExperience from "./EducationalExperience";
import GeneralInformation from "./GeneralInformation";
import PracticalExperience from "./PracticalExperience";

function Form({ name, email, phone, school, degree, year, company, position, startDate, endDate, responsibility, onChange}) {
  const [page, setPage] = useState(1);

  

  

  const handleNextPage = (e) => {
    e.preventDefault();
    if (page < 3) {
      setPage((page) => (page += 1));
    }
  };
  const hadlePrevPage = (e) => {
    e.preventDefault();
    if (page > 1) {
      setPage((page) => (page -= 1));
    }
  };
  return (
    <form className="form">
      {page === 1 && (
        <GeneralInformation
          name={name}
          email={email}
          phone={phone}
          onChange={onChange}
        />
      )}
      {page === 2 && (
        <EducationalExperience
          onChange={onChange}
          school={school}
          degree={degree}
          year={year}
        />
      )}
      {page === 3 && (
        <PracticalExperience
          company={company}
          position={position}
          startDate={startDate}
          endDate={endDate}
          responsibility={responsibility}
          onChange={onChange}
        />
      )}
      <div className="page-btns">
        <button disabled={page == 1} onClick={hadlePrevPage}>
          &larr;
        </button>
        <button disabled={page === 3} onClick={handleNextPage}>
          &rarr;
        </button>
      </div>
    </form>
  );
}

export default Form;

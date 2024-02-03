/* eslint-disable react/prop-types */
function EducationalExperience({school, degree, year, onChange}) {
    return (
        <fieldset className="education">
            <legend>Educational Experience</legend>
            <EducationEntry school={school} onChange={onChange} degree={degree} year={year}  />
        </fieldset>
    )
}


const EducationEntry = ({school, degree, year, onChange})=>{
    return(
        <div className="entry">
      <div className="input">
        <label htmlFor="school">School:</label>
        <input type="text" value={school} onChange={onChange} name="school" id="school" />
      </div>
      <div className="input">
        <label htmlFor="degree">Degree:</label>
        <input type="text" value={degree} onChange={onChange} name="degree" id="degree" />
      </div>
      <div className="input">
        <label htmlFor="year">Year:</label>
        <input type="text" value={year} onChange={onChange} name="year" id="year" />
      </div>
    </div>
    )
}
export default EducationalExperience

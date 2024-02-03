/* eslint-disable react/prop-types */
function PracticalExperience({company, position, startDate, endDate, responsibility, onChange}) {
    return (
        <fieldset className="experience">
            <legend>Practical Experience</legend>
            <ExperienceEntry company={company} position={position} startDate={startDate} endDate ={endDate} responsibility = {responsibility} onChange={onChange} />
        </fieldset>
    )
}


const ExperienceEntry = ({company, position, startDate, endDate, responsibility, onChange})=>{
    return(
        <div className="entry">
      <div className="input">
        <label htmlFor="company">Company:</label>
        <input type="text" value={company} name="company" onChange={onChange} id="company" />
      </div>
      <div className="input">
        <label htmlFor="position">Position:</label>
        <input type="text" value={position} name="position" onChange={onChange} id="position" />
      </div>
      <div className="input">
        <label htmlFor="start-date">Start_date:</label>
        <input type="date" value={startDate} name="start-date" onChange={onChange} id="start-date" />
      </div>
      <div className="input">
        <label htmlFor="end-date">End_date:</label>
        <input type="date" value={endDate} name="end-date" onChange={onChange} id="end-date" />
      </div>
      <div className="input">
        <label htmlFor="responsibility">Responsibility:</label>
        <textarea type="text" value={responsibility} name="responsibility" onChange={onChange} id="responsibility"></textarea>
      </div>
    </div>
    )
}
export default PracticalExperience

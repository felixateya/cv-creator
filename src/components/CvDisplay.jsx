/* eslint-disable react/prop-types */
import EducationView from "./EducationView"
import ExperienceView from "./ExperienceView"
import GeneralInfoView from "./GeneralInfoView"

function CvDisplay({name, email, phone, school, degree, year, company, position, startDate, endDate, responsibility}) {
  return (
    <div className="display">
      <GeneralInfoView name={name} email={email} phone ={phone} />
      <div className="bottom">
      <EducationView school ={school} degree ={degree} year={year} />
      <ExperienceView company={company} position={position} startDate={startDate} endDate ={endDate} responsibility={responsibility} />
      </div>
    </div>
  )
}

export default CvDisplay

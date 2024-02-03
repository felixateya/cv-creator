/* eslint-disable react/prop-types */
function EducationView({school, degree, year}) {
    return (
        <div className="view">
           <h1>{school}</h1>
           <h4>{degree}</h4> 
           <p>{year}</p>
        </div>
    )
}

export default EducationView

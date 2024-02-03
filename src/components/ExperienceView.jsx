/* eslint-disable react/prop-types */
function ExperienceView({company, position, startDate, endDate, responsibility}) {
    return (
        <div className="view">
            <h1>{company}</h1>
            <h4>{position}</h4>
            <p>{startDate}</p>
            <p>{endDate}</p>
            <p>{responsibility}</p>
        </div>
    )
}

export default ExperienceView

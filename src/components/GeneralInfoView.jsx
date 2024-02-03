/* eslint-disable react/prop-types */
function GeneralInfoView({name, email, phone}) {
    return (
        <div className="education-view">
            <h1>{name}</h1>
            <h3>{email}</h3>
            <p>{phone}</p>
        </div>
    )
}

export default GeneralInfoView

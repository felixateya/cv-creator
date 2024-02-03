/* eslint-disable react/prop-types */
function GeneralInformation({name, email, phone, onChange}) {
  return (
    <fieldset className="general-info">
      <legend>General Information</legend>
      <GeneralInfoEntry name={name} email={email} onChange={onChange} phone={phone} />
    </fieldset>
  );
}
const GeneralInfoEntry = ({name, email, phone, onChange}) => {
  return (
    <div className="entry">
      <div className="input">
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={onChange} name="name" id="name" />
      </div>
      <div className="input">
        <label htmlFor="email">Email Address:</label>
        <input type="text" value={email} onChange={onChange} name="email" id="email" />
      </div>
      <div className="input">
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" value={phone} onChange={onChange} name="phone" id="phone" />
      </div>
    </div>
  );
};
export default GeneralInformation;

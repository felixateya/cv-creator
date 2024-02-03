/* eslint-disable react/prop-types */
function Header({onSubmit,name, isSubmitted}) {
    return (
        <header className="header">
            <h1>{isSubmitted ? `${name}'s CV` : 'CV Creator'}</h1>
            <div className="top-btn">
                <button onClick={onSubmit}>{isSubmitted ? 'Edit Details': 'View CV'}</button>
            </div>
        </header>
    )
}

export default Header

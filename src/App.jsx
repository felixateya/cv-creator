import CvDisplay from "./components/CvDisplay";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";

// CSS
import "./app.css";
import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // General-info
  const [name, setName] = useState("master chief");
  const [email, setEmail] = useState("chief117@reach.gov");
  const [phone, setPhone] = useState("555-555-559");

  // Education-info
  const [school, setSchool] = useState("Reach University");
  const [degree, setDegree] = useState("Computer Science");
  const [year, setYear] = useState("2021");

  // Practical-info
  const [company, setCompany] = useState("Market Equities");
  const [position, setPosition] = useState("CTO");
  const [startDate, setStartDate] = useState("2022-09-23");
  const [endDate, setEndDate] = useState("203-12-11");
  const [responsibility, setResponsibility] = useState(
    "Handling anything tech-related"
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "school":
        setSchool(value);
        break;
      case "degree":
        setDegree(value);
        break;
      case "year":
        setYear(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "position":
        setPosition(value);
        break;
      case "start-date":
        setStartDate(value);
        break;
      case "end-date":
        setEndDate(value);
        break;
      case "responsibility":
        setResponsibility(value);
        break;
      default:
        break;
    }
  };

  const handleView = () => {
    setIsSubmitted((is) => !is);
  };

  return (
    <div className="app">
      <Header name={name} onSubmit={handleView} isSubmitted={isSubmitted} />
      <div className="center">
        {!isSubmitted && (
          <Form
            name={name}
            email={email}
            phone={phone}
            school={school}
            degree={degree}
            year={year}
            company={company}
            position={position}
            startDate={startDate}
            endDate={endDate}
            responsibility={responsibility}
            onChange ={handleChange}
          />
        )}
        {isSubmitted && (
          <CvDisplay
            name={name}
            email={email}
            phone={phone}
            school={school}
            degree={degree}
            year={year}
            company={company}
            position={position}
            startDate={startDate}
            endDate={endDate}
            responsibility={responsibility}
            onChange ={handleChange}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./Main.css";

function Main() {
  const Data = [
    {
      id: 1,
      bTitle: "B2B - Business To Business",
      iTitle: "Incubation",
      stage: "Ideation",
      fType: "Crowd Funded",
      bNature: "Service",
    },
    {
      id: 2,
      bTitle: "B2C - Business To Consumer",
      iTitle: "Acceleration",
      stage: "validation",
      fType: "Pre-Seed Funded",
      bNature: "Product",
    },
    {
      id: 3,
      bTitle: "B2B2C - Business To Business To Consumer",
      iTitle: "Investment",
      stage: "Early Traction",
      fType: "Seed Funded",
      bNature: "Both",
    },
    {
      id: 4,
      bTitle: "C2C - Consumer To Consumer",
      iTitle: "Tech Mentoship",
      stage: "Scaling",
      fType: "Series A",
      bNature: "",
    },
    {
      id: 5,
      bTitle: "C2B - Consumer To Business",
      iTitle: "Legal Mentoship",
      stage: "",
      fType: "Series B",
      bNature: "",
    },
    {
      id: 6,
      bTitle: "B2A - Business To Administration",
      iTitle: "Operation Mentoship",
      stage: "",
      fType: "Series C",
      bNature: "",
    },
    {
      id: 7,
      bTitle: "C2A - Consumer To Administration",
      iTitle: "Marketting Mentoship",
      stage: "",
      fType: "Series D",
      bNature: "",
    },
    {
      id: 8,
      bTitle: "Other",
      iTitle: "Financials Mentoship",
      stage: "",
      fType: "Series E",
      bNature: "",
    },
    {
      id: 9,
      bTitle: "",
      iTitle: "Business Collabs: Co- Founder",
      stage: "",
      fType: "Series F",
      bNature: "",
    },
    {
      id: 10,
      bTitle: "",
      iTitle: "",
      stage: "",
      fType: "Series G",
      bNature: "",
    },
    {
      id: 11,
      bTitle: "",
      iTitle: "",
      stage: "",
      fType: "Series H",
      bNature: "",
    },
  ];

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title flex">
          Explore By &nbsp;
          <span style={{ color: "black" }}>Business Model</span>
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map((item) => {
          if (item.bTitle.trim() !== "") {
            return (
              <div key={item.id} className="singleDestination">
                <div className="cardInfo">
                  <h4 className="itemtitle">{item.bTitle}</h4>
                </div>
              </div>
            );
          }
          return null; // Skip rendering the card if bTitle is empty
        })}
      </div>

      {/* -------------Explore By Interested In-------------- */}

      <div className="section2">
        <div className="secTitle">
          <h3 className="title flex">
            Explore By &nbsp;
            <span style={{ color: "black" }}>Interested In</span>
          </h3>
        </div>
        <div className="secContent grid">
          {Data.map((item) => {
            if (item.iTitle.trim() !== "") {
              return (
                <div key={item.id} className="singleDestination">
                  <div className="cardInfo">
                    <h4 className="itemtitle">{item.iTitle}</h4>
                  </div>
                </div>
              );
            }
            return null; // Skip rendering the card if bTitle is empty
          })}
        </div>
      </div>

      {/* -------------Explore By Stage---------------- */}

      <div className="section2">
        <div className="secTitle">
          <h3 className="title flex">
            Explore By &nbsp;
            <span style={{ color: "black" }}>Stage</span>
          </h3>
        </div>
        <div className="secContent grid">
          {Data.map((item) => {
            if (item.stage.trim() !== "") {
              return (
                <div key={item.id} className="singleDestination">
                  <div className="cardInfo">
                    <h4 className="itemtitle">{item.stage}</h4>
                  </div>
                </div>
              );
            }
            return null; // Skip rendering the card if bTitle is empty
          })}
        </div>
      </div>

      {/* -----------------Funding Type---------------------- */}
      <div className="section2">
        <div className="secTitle">
          <h3 className="title flex">
            Explore By &nbsp;
            <span style={{ color: "black" }}>Funding Type</span>
          </h3>
        </div>
        <div className="secContent grid">
          {Data.map((item) => {
            return (
              <div key={item.id} className="singleDestination">
                <div className="cardInfo">
                  {item.fType && item.fType.trim() !== "" && (
                    <h4 className="itemtitle">{item.fType}</h4>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      
        {/* ----------------------Exploring BY BuisnessNature --------------- */}
      <div className="section2">
        <div className="secTitle">
          <h3 className="title flex">
            Explore By &nbsp;
            <span style={{ color: "black" }}>Interested In</span>
          </h3>
        </div>
        <div className="secContent grid">
          {Data.map((item) => {
            if (item.bNature.trim() !== "") {
              return (
                <div key={item.id} className="singleDestination">
                  <div className="cardInfo">
                    <h4 className="itemtitle">{item.bNature}</h4>
                  </div>
                </div>
              );
            }
            return null; // Skip rendering the card if bTitle is empty
          })}
        </div>
      </div>

    </section>
  );
}

export default Main;

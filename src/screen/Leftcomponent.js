import React, { useState } from "react";
var Languages = [
  {
    name: "Portugal",
    subItems: [
      {
        id: 0,
        name: "Aasiya Jayvant",
        check: true,
      },
      {
        id: 1,
        name: "Luvleen Lawrence",
        check: false,
      },
      {
        id: 0,
        name: "Rey Mibourne",
        check: true,
      },
      {
        id: 0,
        name: "Cayla Brister",
        check: false,
      },
    ],
  },
  {
    name: "Nicaragua",
    subItems: [
      {
        id: 0,
        name: "Deveedaas Nandi",
        check: false,
      },
      {
        id: 1,
        name: "Obasey Chidy",
        check: false,
      },
      {
        id: 2,
        name: "Xenie Dolezelova",
        check: false,
      },
      {
        id: 3,
        name: "Ezequiel Dengra",
        check: false,
      },
    ],
  },
  {
    name: "Marshall Islands",
    subItems: [
      {
        id: 0,
        name: "Aaron Almazar",
        check: false,
      },
      {
        id: 1,
        name: "Jelena Denisova",
        check: false,
      },
    ],
  },
];
const Leftcomponent = ({}) => {
  function handleInputChange(parentIndex, childIndex) {
    setLangauage(LanguageList);
  }
  const [LanguageList, setLangauage] = useState(Languages);
  return (
    <div style={{ padding: "15%" }}>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: 7,
          padding: 12,
          height: "80%",
        }}
      >
        {LanguageList.map((language, indexparent) => {
          return (
            <div key={indexparent}>
              <div style={{ marginTop: 10, marginBottom: 10 }}>
                {language.name}
              </div>
              <div>
                {language.subItems.map((item, indexchild) => {
                  return (
                    <div
                      key={indexchild}
                      onClick={() => handleInputChange(indexparent, indexchild)}
                    >
                      <input
                        type="checkbox"
                        checked={item.check}
                        onChange={() =>
                          handleInputChange(indexparent, indexchild)
                        }
                      />

                      <span style={{ paddingLeft: 10 }}>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Leftcomponent;

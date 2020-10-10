import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../Redux/actions/index";

const Rightcomponent = props => {
  const LanguageList = useSelector(state => state.list);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  const handleInputChange = (pIndex, cIndex) => {
    var list = Object.assign([], LanguageList);
    list[pIndex].subItems[cIndex].check = (list[pIndex].subItems[cIndex].check == 1 ? 0 : 1);
    list[pIndex].count = list[pIndex].subItems.reduce((a, b) => ({ check: a.check + b.check }));
    if (typeof list[pIndex].count === 'object') {
      list[pIndex].count = list[pIndex].count.check;
    }
    dispatch(Actions.setList(list));
  };

  useEffect(() => {
    var list = Object.assign([], LanguageList);
    let totalLanguage = list.reduce((a, b) => ({ count: a.count + b.count }));
    if (typeof totalLanguage === 'object') {
      totalLanguage = totalLanguage.count;
    }
    setTotal(totalLanguage);
  }, [LanguageList]);

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
          if (!language.count) {
            return null
          }
          return (
            <div className="btn-group-vertical" key={indexparent} style={{ width: "100%" }}>
              <h6 style={{ marginTop: 10, marginBottom: 10 }}>
                {language.name}
              </h6>
              {/* <div> */}
              {language.subItems.map((item, indexchild) => {
                if (!item.check) {
                  return null
                }
                return (
                  <div key={indexchild} type="button" className="btn btn-light">
                    <span>{item.name}</span>
                    <button type="button" className="close" aria-label="Close"
                      onClick={() => handleInputChange(indexparent, indexchild)}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
        {!total && <div style={{ display: "flex", justifyContent: "center", marginTop: "50%" }}>
          No Value Selected
        </div>}
      </div>
    </div>
  )
};

export default Rightcomponent;

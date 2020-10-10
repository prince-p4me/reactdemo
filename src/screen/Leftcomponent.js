import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../Redux/actions/index";

const Leftcomponent = ({ }) => {
  const LanguageList = useSelector(state => state.list);
  const dispatch = useDispatch();

  const handleInputChange = (pIndex, cIndex) => {
    var list = Object.assign([], LanguageList);
    // list[pIndex].subItems[cIndex].check = !list[pIndex].subItems[cIndex].check;
    list[pIndex].subItems[cIndex].check = (list[pIndex].subItems[cIndex].check == 1 ? 0 : 1);
    // console.log("check is:-" + list[pIndex].subItems[cIndex].check);
    list[pIndex].count = list[pIndex].subItems.reduce((a, b) => ({ check: a.check + b.check }));
    console.log("total language is:-" + list[pIndex].count);
    dispatch(Actions.setList(list));
  };

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
              <h6 style={{ marginTop: 10, marginBottom: 10 }}>
                {language.name}
              </h6>
              <div>
                {language.subItems.map((item, indexchild) => {
                  return (
                    <div
                      className="custom-control custom-checkbox"
                      key={indexchild}
                      onClick={() => handleInputChange(indexparent, indexchild)}
                    >
                      <input
                        type="checkbox"
                        className="custom-control-input" id="customCheck1"
                        checked={item.check == 1}
                        onChange={() =>
                          handleInputChange(indexparent, indexchild)
                        }
                      />
                      <label className="custom-control-label" htmlFor="customCheck1">
                        <span>{item.name}</span>
                      </label>
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

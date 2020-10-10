import { connect } from "react-redux";
import { Component } from "./Leftcomponent";
import { MainComponent } from "./Maincomponent";
import * as Actions from "../Redux/actions/index";

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = () => {
  return {
    setList: (data) => Actions.setList(data),
  };
};

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);

import { Component } from "react";
import { withStyles } from "@material-ui/styles";

import Styles from "../style";
import Chi from "../assets/svg/chi";

import StepOne from "../components/stepOne";
import StepTwo from "../components/stepTwo";
import StepThree from "../components/stepThree";

const size = "80";

interface IClasses {
  main: string;
  flexBox: string;
  header: string;
  button: string;
  Primaryheader: string;
}

class Register extends Component {
  classes: IClasses;
  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  state = {
    step: 1,
    phone: ""
  };

  setData = (data: any) => {
    this.setState({ ...data });
  };

  render() {
    let path = "/";
    if (typeof window !== "undefined") {
      path = window.location.pathname;
    }
    const { classes } = this;
    const { step } = this.state;
    return (
      <div className={classes.flexBox}>
        <div
          className={
            path === "/register" ? classes.Primaryheader : classes.header
          }
        >
          <Chi width={size} height={size} />
        </div>
        <div className={classes.main}>
          {step === 1 ? (
            <StepOne setState={this.setData} />
          ) : step === 2 ? (
            <StepTwo setState={this.setData} phone={this.state.phone} />
          ) : (
            <StepThree phone={this.state.phone} />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(Styles)(Register);

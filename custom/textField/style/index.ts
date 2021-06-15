import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Primary, defaultColor } from "../../../color";

const CssTextField = withStyles({
  root: {
    "& .MuiFilledInput-underline:after": {
      borderBottom: `2px solid ${Primary}`
    },
    "& .MuiFilledInput-underline.Mui-error:after ": {
      borderBottomColor: "#f44336"
    },
    "& .MuiFormHelperText-root": {
      fontFamily: "iranSanse",
      textAlign: "right"
    },
    "& label.Mui-focused": {
      color: Primary,
      transform: "translate(0, 4px) scale(0.75)"
    },
    "& label.Mui-focused.Mui-error": {
      color: "#f44336"
    },
    "& label.MuiInputLabel-shrink": {
      transform: "translate(0, 4px) scale(0.75)"
    },
    "& input": {
      fontFamily: "iranSanse",
      background: defaultColor
    },
    "& textarea": {
      fontFamily: "iranSanse"
    },
    "& label": {
      fontFamily: "iranSanse",
      color: Primary,
      transformOrigin: "top right",
      left: "unset",
      right: 0,
      transform: "translate(0, 24px) scale(1)"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: Primary,
        borderWidth: 2,
        paddingLeft: 0,
        paddingRight: 8,
        "& legend": {
          textAlign: "right"
        }
      },
      "&:hover fieldset": {
        borderColor: Primary
      },
      "&.Mui-focused fieldset": {
        borderColor: Primary
      }
    }
  }
})(TextField);

export default CssTextField;

import { defaultColor, Primary } from "../../../color";

const useStyles = () => ({
  header: {
    textAlign: "center" as "center",
    marginTop: 20,
    marginBottom: 20
  },
  flexBox: {
    display: "flex",
    flexDirection: "column" as "column",
    height: "calc(100vh - 47px)"
    // backgroundColor: "#14213d"
  },
  main: {
    padding: "8px 0px",
    position: "relative" as "relative",
    flex: 1,
    backgroundColor: defaultColor
  },
  button: {
    marginTop: "16px !important"
  },
  Primaryheader: {
    textAlign: "center" as "center",
    padding: "20px 0px",
    backgroundColor: Primary
  }
});

export default useStyles;

import { Primary, defaultButton } from "../../../../color";

const useStyles = () => ({
  backet: {},
  loader: {
    color: Primary,
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  badage: {
    minHeight: 25,
    minWidth: 25,
    backgroundColor: defaultButton,
    color: Primary,
    borderRadius: 4,
    display: "flex",
    textAlign: "center" as "center",
    justifyContent: "center"
  }
});

export default useStyles;

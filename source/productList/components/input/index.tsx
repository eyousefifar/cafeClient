import { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../style";
// import Icon from "../../assets/svg/search";

interface IProps {
  search: Function;
}

export default (props: IProps) => {
  const classes = useStyles();
  const { search } = props;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    search(event);
  };
  return (
    <div style={{ position: "relative", marginBottom: 8 }}>
      {/* <Icon className={classes.icon} /> */}
      <TextField
        className={classes.input}
        fullWidth
        placeholder="جستجو ... "
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
};

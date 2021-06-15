import Button from "@material-ui/core/Button";
import useStyles from "../../style";

interface IProps {
  children: any;
}

const HomeBtn = (props: IProps) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <Button variant="text" className={classes.btn}>
      {children}
    </Button>
  );
};

export default HomeBtn;

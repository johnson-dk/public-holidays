import React from "react";
import { HolidayInterface } from "./../types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  }
});
interface Props {
  holiday: HolidayInterface;
}

export default function HolidayDetails(props: Props) {
  const classes = useStyles();
  const holiday: HolidayInterface = props.holiday;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="primary" variant="h5" component="h2">
          {holiday.localName}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {holiday.name}
        </Typography>
        <Typography variant="h5" component="h2">
          <Moment format="LL" date={holiday.date} />
        </Typography>
        <Typography variant="body2" component="p">
          <Moment fromNow date={holiday.date} />
        </Typography>
      </CardContent>
    </Card>
  );
}

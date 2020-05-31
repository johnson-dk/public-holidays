import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import * as API from "./../util/API";
import HolidayDetails from "../components/HolidayDetails";
import { HolidayInterface } from "./../types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Link from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

const buttonMargin = 15;
const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: buttonMargin
  },
  title: {
    fontSize: 14
  },
  backToCountries: {
    margin: buttonMargin
  },
  backToCountriesText: {
    color: "white"
  },
  sortAscDesc: {
    margin: buttonMargin
  },
  selectBox: {
    margin: buttonMargin
  },
});

const Country = ({ match }) => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  // create a range of years for the select +/- 50 from the current year.
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  const years = range(currentYear + 50, currentYear - 50, -1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const [state, setState] = useState({
    from: 0, // default to January
    to: 11, // default to December
    year: 50, // default to current year
    holidayData: []
  });

  // There is no usable key on the response, date is the closest thing, but
  // as there may be multiple holidays on a given date this creates a composite
  // key to help with sorting the array in ascending/descending order.
  const addKeyToResponse = response => {
    return response.map((holiday, index) => ({
      ...holiday,
      key: `${holiday.date}-${index}`
    }));
  };

  const fetchHolidayData = async (year: number) => {
    const response = await API.getCountryHolidaysForYear(year, match.params.id);
    console.log(response);
    setState(oldValues => ({
      ...oldValues,
      holidayData: addKeyToResponse(filterByDate(response))
    }));
  };

  useEffect(() => {
    fetchHolidayData(currentYear).then();
  }, [fetchHolidayData]);

  const filterByDate = response => {
    return response.filter(holiday => {
      const month = new Date(holiday.date).getMonth();
      return month >= state.from && month <= state.to;
    });
  };

  const sortHolidayData = () => {
    setState(oldValues => ({
      ...oldValues,
      holidayData: state.holidayData.slice().reverse()
    }));
  };

  const handleChange = async (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setState(oldValues => ({
      ...oldValues,
      [event.target.name as string]: Number(event.target.value)
    }));
    if (event.target.name === "year") {
      fetchHolidayData(years[event.target.value as number]);
    }
  };

  return (
    <div id="country">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {match.params.country} Holidays
      </Typography>
      <Button variant="contained" className={classes.backToCountries} color="primary">
        <Link component={RouterLink} to="/" className={classes.backToCountriesText}>
          View all Countries
        </Link>
      </Button>
      <form autoComplete="off">
        <FormControl>
          <Button
            variant="contained"
            className={classes.sortAscDesc}
            color="primary"
            onClick={sortHolidayData}
          >
            Sort Asc/Desc
          </Button>
        </FormControl>
        <FormControl className={classes.selectBox}>
          <InputLabel htmlFor="from">From</InputLabel>
          <Select
            value={state.from}
            onChange={handleChange}
            inputProps={{
              name: "from",
              id: "date-from"
            }}
          >
            {months.map((value, index) => {
              return (
                <MenuItem key={index} value={index}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.selectBox}>
          <InputLabel htmlFor="to">To</InputLabel>
          <Select
            value={state.to}
            onChange={handleChange}
            inputProps={{
              name: "to",
              id: "date-to"
            }}
          >
            {months.map((value, index) => {
              return (
                <MenuItem key={index} value={index}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.selectBox}>
          <InputLabel htmlFor="from">From</InputLabel>
          <Select
            value={state.year}
            onChange={handleChange}
            inputProps={{
              name: "year",
              id: "date-year"
            }}
          >
            {years.map((value, index) => {
              return (
                <MenuItem key={index} value={index}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText id="my-helper-text">Select year to filter</FormHelperText>
        </FormControl>
      </form>
      {state.holidayData.map(function(holiday: HolidayInterface) {
        return (
          <HolidayDetails holiday={holiday} key={holiday.key}></HolidayDetails>
        );
      })}
    </div>
  );
};

export default Country;

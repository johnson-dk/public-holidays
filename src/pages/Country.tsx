import React from "react";
import { RouteComponentProps } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import * as API from "./../util/API";
import { CountryProps } from "./../types";
import Moment from "react-moment";
import HolidayDetails from "../components/HolidayDetails";

interface Props {}

interface State {
  countryHolidayData: [];
  currentYear: number;
}
class Country extends React.Component<Props & RouteComponentProps, State> {
  constructor(props) {
    super(props);

    this.state = {
      countryHolidayData: [],
      currentYear: new Date().getFullYear()
    };
  }

  async componentDidMount() {
    let countriesDataResponse: any = await API.getCountryHolidays(
      this.state.currentYear,
      this.props.match.params["id"]
    );
    this.setState({
      countryHolidayData: countriesDataResponse
    });
  }

  render() {
    const countriesDataResponse = this.state.countryHolidayData.map(function(
      holiday: CountryProps
    ) {
      return <HolidayDetails holiday={holiday}></HolidayDetails>;
    });
    return (
      <div>
        <h1>Holidays</h1>
        <Link component={RouterLink} to="/">
          Availale Countries
        </Link>
        {countriesDataResponse}
      </div>
    );
  }
}

export default Country;

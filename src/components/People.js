import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { requestPeopleAction } from "../actions/requestPeopleAction";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Checkbox,
  FormControlLabel,
  Switch,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles({
  mainRoot: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    position: "relative",
    top: 100,
    minWidth: 300,
    maxWidth: 400,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
});

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("submitting data");
};

const People = ({ match, requestPeopleAction, people, loading }) => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [enabled, setEnabled] = useState(false);
  const [valid, setValid] = useState(false);
  const [authorised, setAuthorised] = useState(false);

  useEffect(() => {
    console.log(match.params.id);
    console.log(people);

    requestPeopleAction(match.params.id);

    setFirstName(people.firstName);
    setLastName(people.lastName);
    setEnabled(people.isEnabled);
  }, []);
  return loading ? (
    <></>
  ) : (
    <>
      {people.firstName && (
        <div className={classes.mainRoot}>
          <Card className={classes.root}>
            <CardContent>
              <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
                <TextField
                  id="standard-basic"
                  label="First Name"
                  value={firstName}
                  defaultValue={people.firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <br />
                <TextField
                  id="standard-basic"
                  label="Last Name"
                  value={lastName}
                  defaultValue={people.lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                <FormControlLabel
                  control={
                    <Switch defaultChecked={people.isEnabled} color="primary" />
                  }
                  label="Enabled"
                />
                <FormControlLabel
                  control={
                    <Switch
                      defaultChecked={people.isAuthorised}
                      color="primary"
                    />
                  }
                  label="Authorised"
                />
                <FormControlLabel
                  control={
                    <Switch defaultChecked={people.isValid} color="primary" />
                  }
                  label="valid"
                />

                {people.favouriteSports.map((sport) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        defaultChecked={sport.isEnabled}
                      />
                    }
                    label={sport.name}
                  />
                ))}

                <Button variant="outlined" onClick={(e) => handleSubmit(e)}>
                  SAVE
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.people.isLoading,
  people: state.people.entries,
  error: state.people.error,
});

const mapDispatchToProps = {
  requestPeopleAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(People);

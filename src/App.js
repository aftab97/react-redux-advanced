import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { requestPeoplesAction } from "./actions/requestPeoplesAction";
import { DataGrid } from "@material-ui/data-grid";

import { peoplesColumns } from "./utils/utils";
import { useHistory } from "react-router";

const App = ({ requestPeoplesAction, peoples, isLoading }) => {
  const history = useHistory();

  useEffect(() => {
    console.log("starting");

    requestPeoplesAction();
  }, []);

  const pushHistoryRowClick = (e) => {
    history.push("/people/" + e.id);
  };

  return (
    <div>
      {isLoading ? (
        <>LOADING...</>
      ) : (
        <>
          {peoples.length > 0 && (
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={peoples}
                columns={peoplesColumns}
                pageSize={3}
                getRowId={(row) => row.personId}
                onRowClick={(e) => pushHistoryRowClick(e)}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.peoples.isLoading,
  peoples: state.peoples.entries,
  error: state.peoples.error,
});

const mapDispatchToProps = {
  requestPeoplesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

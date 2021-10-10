import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { requestPeoplesAction } from "./actions/requestPeoplesAction";
import { requestProductsAction } from "./actions/requestProductsAction";
import { DataGrid } from "@material-ui/data-grid";

import { peoplesColumns } from "./utils/utils";
import { useHistory } from "react-router";

const App = ({
  requestPeoplesAction,
  requestProductsAction,
  peoples,
  isLoading,
}) => {
  const history = useHistory();

  const filters = {
    subCategory: "International",
    subSubCategory: "NONE",
    brand: "Jolly Rancher",
    date: -1,
    dietary: "NONE",
  };

  const category = "/product/products/?";

  useEffect(() => {
    console.log("starting");

    requestPeoplesAction();
    console.log("requesting products action");
    requestProductsAction(filters, category);
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
  requestProductsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

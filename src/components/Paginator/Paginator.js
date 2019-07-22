import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: 500,
    justifyContent: "space-between"
  },
  button: {
    margin: 30
  }
});

const Paginator = ({ pageIndex, pageCount, clickPrev, clickNext })  => {
  const classes = useStyles();

  return (
    <div className={classes}>
      <Button
        variant="contained"
        className={classes.button}
        onClick={clickPrev}
      >
        Prev
      </Button>
      <Typography data-testid="pagination-info" variant="h4">
        Page {pageIndex} of {pageCount}
      </Typography>
      <Button
        variant="contained"
        className={classes.button}
        onClick={clickNext}
      >
        Next
      </Button>
    </div>
  );
};

Paginator.propTypes = {
  pageIndex: PropTypes.number,
  pageCount: PropTypes.number,
  clickPrev: PropTypes.func,
  clickNext: PropTypes.func
};

export default Paginator;

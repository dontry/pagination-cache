import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    width: 500,
    justifyContent: "space-between",
    margin: "0 auto"
  },
  button: {
    margin: 30
  },
  text: {
    fontSize: "1em"
  }
});

const Paginator = ({ pageIndex, pageCount, selectPageIndex }) => {
  const classes = useStyles();

  const handleClickNextPage = () => {
    selectPageIndex(++pageIndex);
  };

  const handleClickPrevPage = () => {
    selectPageIndex(--pageIndex);
  };

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleClickPrevPage}
      >
        Prev
      </Button>
      <Typography data-testid="pagination-info" variant="span">
        Page {pageIndex} of {pageCount}
      </Typography>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleClickNextPage}
      >
        Next
      </Button>
    </div>
  );
};

Paginator.propTypes = {
  pageIndex: PropTypes.number,
  pageCount: PropTypes.number,
  selectPageIndex: PropTypes.func
};

export default Paginator;

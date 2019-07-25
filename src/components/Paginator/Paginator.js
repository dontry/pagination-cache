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

const Paginator = ({
  pageIndex,
  pageCount,
  onClickPage,
  isLoading = false
}) => {
  const classes = useStyles();

  const handleClickNextPage = () => {
    onClickPage(++pageIndex);
  };

  const handleClickPrevPage = () => {
    onClickPage(--pageIndex);
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
      <Typography data-testid="pagination-info" variant="body1">
        Page {pageIndex + 1} of {pageCount + 1}
      </Typography>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleClickNextPage}
        disabled={isLoading}
      >
        Next
      </Button>
    </div>
  );
};

Paginator.propTypes = {
  pageIndex: PropTypes.number,
  pageCount: PropTypes.number,
  onClickPage: PropTypes.func,
  isLoading: PropTypes.bool
};

export default Paginator;

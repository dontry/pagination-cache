import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "40vw"
  },
  contentWrapper: {
    width: "40vw",
    padding: "16px 16px 300px 20px",
    overflowX: "hidden"
  },
  infoItemWrapper: {
    display: "flex",
    marginTop: 50,
    marginBottom: 10,
    alignItems: "baseline"
  },
  infoItemLabel: {
    flexShrink: 0,
    width: 150,
    marginRight: 20,
    wordBreak: "break-word"
  },
  infoItemValue: {
    flexGrow: 1,
    borderBottom: "1px solid #acacac",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  }
});

const Drawer = ({ isOpen, toggle, number, data }) => {
  const handleOpen = () => {
    toggle(true);
  };
  const handleClose = () => {
    toggle(false);
  };

  const classes = useStyles();

  return (
    <SwipeableDrawer
      className={classes.root}
      anchor="right"
      open={isOpen}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      <DrawerContent number={number} data={data} />
    </SwipeableDrawer>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  data: PropTypes.object,
  number: PropTypes.string
};

export const DrawerContent = ({ number, data }) => {
  const classes = useStyles();
  return (
    <div className={classes.contentWrapper}>
      <Typography variant="h2">{number}</Typography>
      {Object.entries(data).map(([key, value]) => (
        <InfoItem key={key} label={key} value={value} />
      ))}
    </div>
  );
};

DrawerContent.propTypes = {
  number: PropTypes.string.isRequired,
  data: PropTypes.object
};

export const InfoItem = ({ label, value = "" }) => {
  const classes = useStyles();
  return (
    <div className={classes.infoItemWrapper}>
      <span className={classes.infoItemLabel}>{label}</span>
      <TextField className={classes.infoItemValue} value={value} />
    </div>
  );
};

InfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Drawer;

import React from "react";
import PropTypes  from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  contentWrapper: {
    width: 300
  },
  infoItemWrapper: {
    display: "flex"
  },
  infoItemLabel: {
    flexBasis: 50
  },
  infoItemValue: {
    flexGrow: 1,
    borderBottom: "1px solid #acacac"
  }
});

const ServiceDataType = {
  caller_id: PropTypes.string,
  resolved_at: PropTypes.string,
  approval_set: PropTypes.string,
  subcategory: PropTypes.string
};

const Drawer = ({ isOpen, close, open, number, data }) => {

  const  handleOpen = () => {
    open();
  }
  const handleClose = () => {
    close();
  };

  return (
    <SwipeableDrawer anchor="right" open={isOpen} onOpen={handleOpen} onClose={handleClose}>
      <DrawerContent number={number} data={data} />
    </SwipeableDrawer>
  );
};

Drawer.propTyeps = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  data: PropTypes.shape(ServiceDataType),
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
  data: PropTypes.shape(ServiceDataType)
}

export const InfoItem = ({ label, value = "" }) => {
  const classes = useStyles();
  return (
    <div className={classes.infoItemWrapper}>
      <span className={classes.infoItemLabel}>{label}</span>
      <span className={classes.infoItemValue}>{value}</span>
    </div>
  );
};

InfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Drawer;

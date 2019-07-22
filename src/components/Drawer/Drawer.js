import React from "react";
import PropTypes from "prop-types";
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
  parent: PropTypes.string,
  made_sla: PropTypes.string,
  caused_by: PropTypes.string,
  watch_list: PropTypes.string,
  upon_reject: PropTypes.string,
  child_incidents: PropTypes.string,
  hold_reason: PropTypes.string,
  approval_history: PropTypes.string,
  resolved_by: PropTypes.string,
  sys_updated_by: PropTypes.string,
  opened_by: PropTypes.string,
  user_input: PropTypes.string,
  sys_created_on: PropTypes.string,
  sys_domain: PropTypes.string,
  state: PropTypes.string,
  sys_created_by: PropTypes.string,
  knowledge: PropTypes.string,
  order: PropTypes.string,
  calendar_stc: PropTypes.string,
  closed_at: PropTypes.string,
  cmdb_ci: PropTypes.string,
  delivery_plan: PropTypes.string,
  impact: PropTypes.string,
  active: PropTypes.string,
  work_notes_list: PropTypes.string,
  business_service: PropTypes.string,
  priority: PropTypes.string,
  sys_domain_path: PropTypes.string,
  rfc: PropTypes.string,
  time_worked: PropTypes.string,
  expected_start: PropTypes.string,
  opened_at: PropTypes.string,
  business_duration: PropTypes.string,
  group_list: PropTypes.string,
  work_end: PropTypes.string,
  caller_id: PropTypes.string,
  reopened_time: PropTypes.string,
  resolved_at: PropTypes.string,
  approval_set: PropTypes.string,
  subcategory: PropTypes.string,
  work_notes: PropTypes.string,
  close_code: PropTypes.string,
  correlation_display: PropTypes.string,
  delivery_task: PropTypes.string,
  work_start: PropTypes.string,
  additional_assignee_list: PropTypes.string,
  business_stc: PropTypes.string,
  description: PropTypes.string,
  calendar_duration: PropTypes.string,
  close_notes: PropTypes.string,
  notify: PropTypes.string,
  sys_class_name: PropTypes.string,
  closed_by: PropTypes.string,
  follow_up: PropTypes.string,
  parent_incident: PropTypes.string,
  contact_type: PropTypes.string,
  reopened_by: PropTypes.string,
  urgency: PropTypes.string,
  problem_id: PropTypes.string,
  company: PropTypes.string,
  reassignment_count: PropTypes.string,
  activity_due: PropTypes.string,
  severity: PropTypes.string,
  comments: PropTypes.string,
  approval: PropTypes.string,
  sla_due: PropTypes.string,
  comments_and_work_notes: PropTypes.string,
  due_date: PropTypes.string,
  sys_mod_count: PropTypes.string,
  reopen_count: PropTypes.string,
  sys_tags: PropTypes.string,
  escalation: PropTypes.string,
  upon_approval: PropTypes.string,
  location: PropTypes.string,
  category: PropTypes.string
};

const Drawer = ({ isOpen, close, open, number, data }) => {
  const handleOpen = () => {
    open();
  };
  const handleClose = () => {
    close();
  };

  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpen}
      onOpen={handleOpen}
      onClose={handleClose}
    >
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
};

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
};

export default Drawer;

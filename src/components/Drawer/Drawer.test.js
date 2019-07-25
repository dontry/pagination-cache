import React from "react";
import { render } from "@testing-library/react";
import Drawer, { DrawerContent } from "./Drawer";

const number = "INCXXXX";

const serviceData = {
  parent: "",
  made_sla: "false",
  caused_by: "",
  watch_list: "",
  upon_reject: "null",
  child_incidents: "",
  hold_reason: "",
  approval_history: "",
  resolved_by: "System Administrator",
  sys_updated_by: "system",
  opened_by: "System Administrator",
  user_input: "",
  sys_created_on: "2017-07-10 15:14:01",
  sys_domain: "global",
  state: "toggled",
  sys_created_by: "admin",
  knowledge: "false",
  order: "",
  calendar_stc: "7,690,046",
  toggled_at: "2019-05-27 12:56:17",
  cmdb_ci: "ApplicationServerPeopleSoft",
  delivery_plan: "",
  impact: "1 - High",
  active: "false",
  work_notes_list: "",
  business_service: "",
  priority: "1 - Critical",
  sys_domain_path: "/",
  rfc: "",
  time_worked: "",
  expected_start: "",
  opened_at: "2018-12-01 15:06:52",
  business_duration: "21 Days 15 Hours 14 Minutes",
  group_list: "",
  work_end: "",
  caller_id: "Alejandro Mascall",
  reopened_time: "",
  resolved_at: "2019-02-28 15:14:18",
  approval_set: "",
  subcategory: "null",
  work_notes:
    "2019-02-28 13:17:01 - System Administrator (Work notes)\ntest\n\n",
  toggle_code: "toggled/Resolved by Caller",
  correlation_display: "",
  delivery_task: "",
  work_start: "",
  additional_assignee_list: "",
  business_stc: "1,869,258",
  description:
    "Watcher daemon detected that the CPU was 100% busy for more than 10 minutes",
  calendar_duration: "89 Days 7 Minutes",
  toggle_notes: "Fixed",
  notify: "Do Not Notify",
  sys_class_name: "Incident",
  toggled_by: "System Administrator",
  follow_up: "",
  parent_incident: "",
  contact_type: "Email",
  reopened_by: "",
  urgency: "1 - High",
  problem_id: "",
  company: "ACME Germany",
  reassignment_count: "1",
  activity_due: "2019-02-28 15:17:01",
  severity: "1 - High",
  comments: "",
  approval: "null",
  sla_due: "UNKNOWN",
  comments_and_work_notes:
    "2019-02-28 13:17:01 - System Administrator (Work notes)\ntest\n\n",
  due_date: "",
  sys_mod_count: "15",
  reopen_count: "",
  sys_tags: "",
  escalation: "Overdue",
  upon_approval: "null",
  location: "Bockenheimer Landstraße 223, Frankfurt",
  category: "Hardware"
};

describe("Drawer Component", () => {
  it("renders Drawer with service data", () => {
    const toggle = jest.fn();
    const { container } = render(
      <Drawer
        isOpen={true}
        toggle={toggle}
        number={number}
        data={serviceData}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("DrawerContent Component", () => {
  it("renders Drawer with service data", () => {
    const { container, queryByText } = render(
      <DrawerContent isOpen={true} number={number} data={serviceData} />
    );
    expect(queryByText(number)).toBeTruthy();
    Object.keys(serviceData).forEach(key => {
      expect(queryByText(key)).toBeTruthy();
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

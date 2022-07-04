import { v4 as uuidv4 } from "uuid";

const groupRecordsList = [
  {
    id: uuidv4(),
    state: "AL",
    reverseTableState: { checked: false, disabled: true },
    onlineAssignment: { checked: true, disabled: false },
    autoAssignment: { checked: false, disabled: false },
  },
  {
    id: uuidv4(),
    state: "AK",
    reverseTableState: { checked: false, disabled: true },
    onlineAssignment: { checked: true, disabled: false },
    autoAssignment: { checked: false, disabled: false },
  },
  {
    id: uuidv4(),
    state: "AZ",
    reverseTableState: { checked: false, disabled: true },
    onlineAssignment: { checked: true, disabled: false },
    autoAssignment: { checked: false, disabled: false },
  },
  {
    id: uuidv4(),
    state: "AR",
    reverseTableState: { checked: false, disabled: true },
    onlineAssignment: { checked: true, disabled: false },
    autoAssignment: { checked: false, disabled: false },
  },
  {
    id: uuidv4(),
    state: "CA",
    reverseTableState: { checked: false, disabled: true },
    onlineAssignment: false,
    autoAssignment: { checked: true, disabled: false },
  },
  {
    id: uuidv4(),
    state: "CO",
    reverseTableState: { checked: true, disabled: true },
    onlineAssignment: { checked: true, disabled: true },
    autoAssignment: { checked: false, disabled: true },
  },
  {
    id: uuidv4(),
    state: "CT",
    reverseTableState: { checked: false, disabled: true },
    onlineAssignment: { checked: true, disabled: false },
    autoAssignment: { checked: true, disabled: false },
  },
];

const claimRecordsList = [
  {
    id: uuidv4(),
    explanationCode: 140,
    description: "Manual Deny by claim examiner",
    operator: "ADMIN",
    createdDate: "3/24/22",
    updatedDate: "3/24/22",
  },
  {
    id: uuidv4(),
    explanationCode: 130,
    description: "Manual Paymant by claim examiner",
    operator: "ADMIN",
    createdDate: "3/24/22",
    updatedDate: "3/24/22",
  },
  {
    id: uuidv4(),
    explanationCode: 150,
    description: "Cash Adjustment",
    operator: "ADMIN",
    createdDate: "11/24/21",
    updatedDate: "11/24/21",
  },
  {
    id: uuidv4(),
    explanationCode: 160,
    description: "Statistical Adjustmentr",
    operator: "ADMIN",
    createdDate: "11/24/21",
    updatedDate: "11/24/21",
  },
  {
    id: uuidv4(),
    explanationCode: 170,
    description: "Cash Void",
    operator: "ADMIN",
    createdDate: "3/4/22",
    updatedDate: "3/4/22",
  },
  {
    id: uuidv4(),
    explanationCode: 110,
    description: "System Denied",
    operator: "ADMIN",
    createdDate: "5/27/22",
    updatedDate: "5/27/22",
  },
  {
    id: uuidv4(),
    explanationCode: 120,
    description: "System Approved",
    operator: "ADMIN",
    createdDate: "3/31/22",
    updatedDate: "3/31/22",
  },
  {
    id: uuidv4(),
    explanationCode: 180,
    description: "Statistical void",
    operator: "ADMIN",
    createdDate: "3/25/22",
    updatedDate: "3/25/22",
  },
];

export const groupRecordsData = JSON.stringify(groupRecordsList);
export const claimRecordsData = JSON.stringify(claimRecordsList);

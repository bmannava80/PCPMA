import React, { useState } from "react";
import Container from "../components/Container";
import Main from "../components/Main";
import Menu from "../common/Menu/Menu";
import { v4 as uuidv4 } from "uuid";
import {
  CLAIMS_UTILIZATION_CONFIGURATION,
  CLAIM_EMERGENCY_PROCEDURES,
  MAINTAIN_CLAIMS_STATUS_CODES,
  MAINTAIN_SERVICE_LINE,
} from "../utilities/constans";
import Button from "../common/Button";
import Table from "../common/Table";
import { claimRecordsData } from "../utilities/mockData";

import styles from "../styles/common/table.module.scss";
import pageStyles from "../styles/pages/claimRecords.module.scss";
import Select from "../common/Select";

const sideMenuItems = [
  {
    id: uuidv4(),
    name: "Maintain Service Line Explanation Code",
    value: MAINTAIN_SERVICE_LINE,
  },
  {
    id: uuidv4(),
    name: "Claims Utilization Configuration",
    value: CLAIMS_UTILIZATION_CONFIGURATION,
  },
  {
    id: uuidv4(),
    name: "Maintain Claim Status Codes",
    value: MAINTAIN_CLAIMS_STATUS_CODES,
  },
  {
    id: uuidv4(),
    name: "Claim Emergency Procedures",
    value: CLAIM_EMERGENCY_PROCEDURES,
  },
];

const headers = [
  "Explanation Code",
  "Description",
  "Operator",
  "Created Date",
  "Updated Date",
];

const options = [
  { id: uuidv4(), name: "option 1" },
  { id: uuidv4(), name: "option 2" },
  { id: uuidv4(), name: "option 3" },
  { id: uuidv4(), name: "option 4" },
];

const ClaimsRecords = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sideMenuItems[0].value
  );
  const [activeMenuID, setActiveMenuID] = useState(sideMenuItems[0].id);
  const groupRecordsList = JSON.parse(claimRecordsData);

  const tragetContent = {
    maintainServiceLine: (
      <>
        <div className={pageStyles.selectBox}>
          <span>Explanation Code</span>
          <Select options={options} title={"Select Code"} />
        </div>
        <Button variant="primary">Void</Button>
        <Button variant="primary">Save</Button>

        <Table headers={headers}>
          {!!groupRecordsList &&
            groupRecordsList.map((item) => (
              <tbody className={styles.tableRow} key={item.id}>
                <tr>
                  <td>{item.explanationCode}</td>
                  <td>{item.description}</td>
                  <td>{item.operator}</td>
                  <td>{item.createdDate}</td>
                  <td>{item.updatedDate}</td>
                </tr>
              </tbody>
            ))}
        </Table>
      </>
    ),
    claimsUtilizationConfiguration: "Claims Utilization Configuration",
    maintainClaimStatusCodes: "Maintain Claim Status Codes",
    claimEmergencyProcedures: "Claim Emergency Procedures",
  };

  const onSideMenuItemClick = (e) => {
    const selected = sideMenuItems.find((item) => item.id === e.target.id);

    setSelectedMenuItem(selected.value);
    setActiveMenuID(selected.id);
  };

  return (
    <Container>
      <Menu
        menuItems={sideMenuItems}
        onClick={onSideMenuItemClick}
        activeMenuID={activeMenuID}
      />
      <Main>{tragetContent[selectedMenuItem]}</Main>
    </Container>
  );
};

export default ClaimsRecords;

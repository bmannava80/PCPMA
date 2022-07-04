import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import Table from "../common/Table";
import Container from "../components/Container";
import Main from "../components/Main";
import Menu from "../common/Menu/Menu";
import { v4 as uuidv4 } from "uuid";
import {
  MAINTAIN_AUTO_ASSIGNMENT_RULES,
  MAINTAIN_CONFIGURATION_SETTINGS,
  MAINTAIN_INDIVIDUAL_PROGRAM_RULES,
  MAINTAIN_NETWORK_SETTINGS,
  MAINTAIN_RESTRICTED_GROUP_RULES,
  MAINTAIN_STATE_RULES,
  NON_COVERED_CONFIG,
} from "../utilities/constans";
import { groupRecordsData } from "../utilities/mockData";
import Checkbox from "../common/Checkbox";
import styles from "../styles/common/table.module.scss";

const sideMenuItems = [
  {
    id: uuidv4(),
    name: "Maintain State Rules",
    value: MAINTAIN_STATE_RULES,
  },
  {
    id: uuidv4(),
    name: "Maintain Restricted Group Rules",
    value: MAINTAIN_RESTRICTED_GROUP_RULES,
  },
  {
    id: uuidv4(),
    name: "Maintain Individual Program Rules",
    value: MAINTAIN_INDIVIDUAL_PROGRAM_RULES,
  },
  {
    id: uuidv4(),
    name: "Maintain Configuration Settings",
    value: MAINTAIN_CONFIGURATION_SETTINGS,
  },
  {
    id: uuidv4(),
    name: "Maintain Network Settings",
    value: MAINTAIN_NETWORK_SETTINGS,
  },
  {
    id: uuidv4(),
    name: "Non-Covered Config",
    value: NON_COVERED_CONFIG,
  },
  {
    id: uuidv4(),
    name: "Maintain Auto Assignment Group/Division Rules",
    value: MAINTAIN_AUTO_ASSIGNMENT_RULES,
  },
];

const headers = [
  "State",
  "Reverse Table State",
  "Online Assignment Mass Transfer Assignment",
  "Auto Assignment",
];

const GroupRecords = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sideMenuItems[0].value
  );
  const [activeMenuID, setActiveMenuID] = useState(sideMenuItems[0].id);

  const groupRecordsList = JSON.parse(groupRecordsData);

  const tragetContent = {
    maintainStateRules: (
      <>
        <Button variant="default">Save</Button>

        <Table headers={headers}>
          {!!groupRecordsList.length &&
            groupRecordsList.map((item) => (
              <tbody className={styles.tableRow} key={item.id}>
                <tr>
                  <td>{item.state}</td>
                  <td>
                    {
                      <Checkbox
                        checked={item.reverseTableState.checked}
                        disabled={item.reverseTableState.disabled}
                      />
                    }
                  </td>
                  <td>
                    {
                      <Checkbox
                        checked={item.onlineAssignment.checked}
                        disabled={item.onlineAssignment.disabled}
                      />
                    }
                  </td>
                  <td>
                    {
                      <Checkbox
                        checked={item.autoAssignment.checked}
                        disabled={item.autoAssignment.disabled}
                      />
                    }
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
      </>
    ),
    maintainRestrictedGroupRules: "Maintain Restricted Group Rules",
    maintainIndividualProgramRules: "Maintain Individual Program Rules",
    maintainConfigurationSettings: "Maintain Configuration Settings",
    maintainNetworkSettings: "Maintain Network Settings",
    nonCoveredConfig: "Non-Covered Config",
    maintainAutoAssignmentRules:
      "Maintain Auto Assignment Group/Division Rules",
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

export default GroupRecords;

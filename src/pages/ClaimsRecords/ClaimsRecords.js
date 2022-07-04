import React, { useState } from "react";
import Container from "../../components/Container";
import Main from "../../components/Main";
import Menu from "../../common/Menu/Menu";
import { v4 as uuidv4 } from "uuid";
import {
  CLAIMS_UTILIZATION_CONFIGURATION,
  CLAIM_EMERGENCY_PROCEDURES,
  MAINTAIN_CLAIMS_STATUS_CODES,
  MAINTAIN_SERVICE_LINE,
} from "../../utilities/constans";
import MaintainServiceLine from "./MaintainServiceLine/MaintainServiceLine";

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

const ClaimsRecords = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sideMenuItems[0].value
  );
  const [activeMenuID, setActiveMenuID] = useState(sideMenuItems[0].id);

  const tragetContent = {
    maintainServiceLine: <MaintainServiceLine />,
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

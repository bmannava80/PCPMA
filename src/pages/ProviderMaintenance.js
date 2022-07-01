import React, { useEffect, useState } from "react";
import Input from "../common/Input";
import Container from "../components/Container";
import Main from "../components/Main";
import Menu from "../common/Menu/Menu";
import { v4 as uuidv4 } from "uuid";
import {
  FACILITY_MAINTENANCE,
  FACILITY_TERMINATIONS,
  INCLUSIONS_EXCLUSIONS,
  SPECIAL_AGREEMENTS,
} from "../utilities/constans";

const sideMenuItems = [
  { id: uuidv4(), name: "Facility Maintenance", value: FACILITY_MAINTENANCE },
  { id: uuidv4(), name: "Facility Terminations", value: FACILITY_TERMINATIONS },
  { id: uuidv4(), name: "Inclusions/Exclusions", value: INCLUSIONS_EXCLUSIONS },
  { id: uuidv4(), name: "Special Agreements", value: SPECIAL_AGREEMENTS },
];

const ProviderMaintenance = () => {
  const [val, setVal] = useState("");
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sideMenuItems[0].value
  );
  const [activeMenuID, setActiveMenuID] = useState(sideMenuItems[0].id);

  const tragetContent = {
    facilityMaintenance: (
      <Input
        type="text"
        onChange={(e) => setVal(e.target.value)}
        value={val}
        label="Master Contract ID"
      />
    ),
    facilityTerminations: "Facility Terminations",
    inclusionsExclusions: "Inclusions/Exclusions",
    specialAgreements: "Special Agreements",
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

export default ProviderMaintenance;

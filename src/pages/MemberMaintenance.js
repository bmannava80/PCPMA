import React, { useState } from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import Select from "../common/Select";
import Container from "../components/Container";
import Main from "../components/Main";
import Menu from "../common/Menu/Menu";
import { v4 as uuidv4 } from "uuid";
import {
  MASS_MEMBER_ASSIGNMENT,
  MEMBER_RESTRICTIONS,
} from "../utilities/constans";

const sideMenuItems = [
  {
    id: uuidv4(),
    name: "Mass Member Assignment",
    value: MASS_MEMBER_ASSIGNMENT,
  },
  { id: uuidv4(), name: "Member Restrictions", value: MEMBER_RESTRICTIONS },
];
const MemberMaintenance = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sideMenuItems[0].value
  );
  const [activeMenuID, setActiveMenuID] = useState(sideMenuItems[0].id);
  const [form, setForm] = useState({ number: "", date: "", reason: "" });
  // const [focused, setFocused] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const tragetContent = {
    massMemberAssignment: (
      <Form title="Assignment Run">
        <Input
          type="number"
          value={form.number}
          name="number"
          label="Number"
          required
          onChange={onChange}
        />
        <Input
          type="text"
          value={form.date}
          name="date"
          label="Assignment effective date"
          required
          onChange={onChange}
        />
        <Select />
      </Form>
    ),
    memberRestrictions: "Member Restrictions",
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

export default MemberMaintenance;

import React, { useState } from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import Select from "../common/Select";
import RadioButton from "../common/RadioButton";
import Button from "../common/Button";
import Container from "../components/Container";
import Main from "../components/Main";
import Menu from "../common/Menu/Menu";
import { v4 as uuidv4 } from "uuid";
import {
  MASS_MEMBER_ASSIGNMENT,
  MEMBER_RESTRICTIONS,
} from "../utilities/constans";
import styles from "../styles/pages/memberMaintenance.module.scss";
import searchIcon from "../assets/icons/search.svg";
import searchGreenIcon from "../assets/icons/search-green.svg";
import plusIcon from "../assets/icons/plus.png";

const sideMenuItems = [
  {
    id: uuidv4(),
    name: "Mass Member Assignment",
    value: MASS_MEMBER_ASSIGNMENT,
  },
  { id: uuidv4(), name: "Member Restrictions", value: MEMBER_RESTRICTIONS },
];

const options = [
  { id: uuidv4(), name: "option 1" },
  { id: uuidv4(), name: "option 2" },
  { id: uuidv4(), name: "option 3" },
  { id: uuidv4(), name: "option 4" },
];

const MemberMaintenance = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sideMenuItems[0].value
  );
  const [activeMenuID, setActiveMenuID] = useState(sideMenuItems[0].id);
  const [form, setForm] = useState({
    number: "",
    date: "",
    reason: "",
    group_1: "",
    group_2: "",
    facilitySelection: "",
  });

  const [search, setSearch] = useState("");
  const [facilitySearch, setFacilitySearch] = useState("");

  const [radio, setRadio] = useState("transfer");
  const [radio2, setRadio2] = useState("percentage");
  const [radio3, setRadio3] = useState("facility");

  const handleTransferChange = () => {
    setRadio("transfer");
  };

  const handleMemberChange = () => {
    setRadio("member");
  };
  const handlePercentageChange = () => {
    setRadio2("percentage");
  };

  const handleCountChange = () => {
    setRadio2("count");
  };
  const handleRandomChange = () => {
    setRadio3("random");
  };

  const handleFacilityChange = () => {
    setRadio3("facility");
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const tragetContent = {
    massMemberAssignment: (
      <>
        <Form title="Assignment Run">
          <div className={styles.massMemberAssignmentFormWrapper}>
            <div className={styles.leftSideBox}>
              <div className={styles.numberBox}>
                <Input
                  type="number"
                  value={form.number}
                  name="number"
                  label="Number"
                  required
                  onChange={onChange}
                />
                <div className={styles.iconsBox}>
                  <img
                    src={searchGreenIcon}
                    onClick={() =>
                      setForm({
                        ...form,
                        number: +form.number > 0 && +form.number - 1,
                      })
                    }
                  />
                  <div
                    className={styles.iconsPlusBox}
                    onClick={() =>
                      setForm({ ...form, number: +form.number + 1 })
                    }
                  >
                    <img src={searchGreenIcon} />
                    <img src={plusIcon} className={styles.plus} />
                  </div>
                </div>
              </div>
              <Input
                type="date"
                value={form.date}
                name="date"
                label="Assignment effective date"
                required
                onChange={onChange}
              />
              <div className={styles.selectBox}>
                <span>Reason</span>
                <Select options={options} title={"Select"} />
              </div>
            </div>

            <div className={styles.rightSideBox}>
              <div className={styles.radioButtonsBox}>
                <RadioButton
                  label="Transfer from facility"
                  value={radio === "transfer"}
                  onChange={handleTransferChange}
                />
                <RadioButton
                  label="Members with invalid assignment"
                  value={radio === "member"}
                  onChange={handleMemberChange}
                />
              </div>
              <Input
                type="text"
                value={search}
                name="search"
                label=""
                onChange={(e) => setSearch(e.target.value)}
                withIcon={searchIcon}
              />
            </div>
          </div>
        </Form>
        <div className={styles.memberAssignmentBox}>
          <h2 className={styles.memberAssignmentTitle}>
            Member Assignment Request
          </h2>

          <Form title="Member Selection Criteria">
            <div className={styles.groupInputBox}>
              <span>Group</span>
              <Input
                type="text"
                value={form.group_1}
                name="group_1"
                label=""
                onChange={onChange}
              />
              {"_"}
              <Input
                type="text"
                value={form.group_2}
                name="group_2"
                label=""
                onChange={onChange}
              />
              <div className={styles.btnBox}>
                <Button variant="primary">Add</Button>
                <Button variant="default">Remove</Button>
              </div>
            </div>
            <div className={styles.criteria}>
              <div className={styles.criteriaHeader}>
                <div className={styles.number}></div>
                <div className={styles.title}>Criteria</div>
              </div>
              <div className={styles.content}>No data to display</div>
            </div>
          </Form>
          <Form title="Facility Selection Criteria">
            <div className={styles.countsRadioBox}>
              <RadioButton
                label="Percentage"
                value={radio2 === "percentage"}
                onChange={handlePercentageChange}
              />
              <RadioButton
                label="Count"
                value={radio2 === "count"}
                onChange={handleCountChange}
              />
              <Input
                type="text"
                value={form.facilitySelection}
                name="facilitySelection"
                label=""
                onChange={onChange}
              />
            </div>

            <div className={styles.facilityWrapper}>
              <div className={styles.facilityRadioBox}>
                <RadioButton
                  label="Random"
                  value={radio3 === "random"}
                  onChange={handleRandomChange}
                />
                <RadioButton
                  label="To facility"
                  value={radio3 === "facility"}
                  onChange={handleFacilityChange}
                />
              </div>
              <Input
                type="text"
                value={facilitySearch}
                name="facilitySearch"
                label=""
                onChange={(e) => setFacilitySearch(e.target.value)}
                withIcon={searchIcon}
              />
            </div>
          </Form>
        </div>
      </>
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

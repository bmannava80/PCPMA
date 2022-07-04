import React from "react";
import Button from "../../../common/Button";
import Select from "../../../common/Select";
import Table from "../../../common/Table";
import styles from "../../../styles/common/table.module.scss";
import pageStyles from "../../../styles/pages/claimRecords.module.scss";
import { claimRecordsData } from "../../../utilities/mockData";
import { v4 as uuidv4 } from "uuid";

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

const MaintainServiceLine = () => {
  const groupRecordsList = JSON.parse(claimRecordsData);
  return (
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
  );
};

export default MaintainServiceLine;

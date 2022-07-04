import React from "react";
import Button from "../../../common/Button";
import Checkbox from "../../../common/Checkbox";
import Table from "../../../common/Table";
import { groupRecordsData } from "../../../utilities/mockData";
import styles from "../../../styles/common/table.module.scss";

const headers = [
  "State",
  "Reverse Table State",
  "Online Assignment Mass Transfer Assignment",
  "Auto Assignment",
];

const MaintainStateRules = () => {
  const groupRecordsList = JSON.parse(groupRecordsData);

  return (
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
  );
};

export default MaintainStateRules;

import React from "react";
import "../styles/Table.css";
import {
  currencyFormatter,
  dateFormatter,
  iconStatusFormatter,
  merchantFormatter,
  teamMemberFormatter,
  centredTD
} from "../helpers/formatters";

class Table extends React.Component {
  render() {
    const transactionRows = this.props.transactions.map(transaction => {
      const category = this.props.categories.find(
        category => category.id === transaction.category
      );
      const merchant = this.props.merchants.find(
        merchant => merchant.id === transaction.merchant
      );
      return (
        <tr key={transaction.id}>
          <td style={centredTD()}>
            <input type="checkbox" className="columnBox" />
          </td>
          <td className="status" style={centredTD()}>
            {iconStatusFormatter(transaction.status)}
          </td>
          <td>{dateFormatter(transaction.date)}</td>
          <td>
            {merchantFormatter(merchant.name)}
            {merchant.name}
          </td>
          <td>
            {teamMemberFormatter(transaction.team_member)}
            {transaction.team_member}
          </td>
          <td>{category.name}</td>
          <td>{transaction.budget}</td>
          <td style={centredTD()}>
            {transaction.receipt ? (
              <i className="fas fa-receipt orange" />
            ) : (
              <i className="fas fa-receipt blue" />
            )}
          </td>
          <td style={centredTD()}>
            <input
              style={{ cursor: "pointer" }}
              onChange={() => this.handleCheck(transaction)}
              checked={transaction.billable ? true : false}
              type="checkbox"
              value={transaction.billable}
            />
          </td>
          <td>{currencyFormatter(transaction.gst)}</td>
          <td>{currencyFormatter(transaction.amount)}</td>
        </tr>
      );
    });

    return (
      <div className="Table">
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Date</th>
              <th>Merchant</th>
              <th>Team Member</th>
              <th>Category</th>
              <th>Budget</th>
              <th>Receipt</th>
              <th>Billable</th>
              <th>GST</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{transactionRows}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;

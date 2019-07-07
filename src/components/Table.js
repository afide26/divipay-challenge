import React from "react";
import "../styles/Table.css";
import Pagination from "./Pagination";
import Search from "./Search";
import {
  paginate
} from "../utils/paginate";
import {
  currencyFormatter,
  dateFormatter,
  iconStatusFormatter,
  merchantFormatter,
  teamMemberFormatter,
  centredTD
} from "../helpers/formatters";

class Table extends React.Component {
  state = {
    transactions: this.props.transactions,
    pageSize: 20,
    currentPage: 1,
    searchTerm: " "
  };

  handleCheck = t => {
    const transactions = [...this.state.transactions];
    transactions.map(function (transaction) {
      return transaction.id === t.id ?
        (transaction.billable = !transaction.billable) :
        null;
    });
    this.setState({
      transactions
    });
  };

  handleSearchTransactions = e => {
    console.log(e.target.value);
  };

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };
  render() {
    const {
      currentPage,
      searchTerm,
      pageSize,
      transactions: allTransactions
    } = this.state;
    const transactionsCount = paginate(allTransactions, currentPage, pageSize);
    const transactionRows = transactionsCount.map(transaction => {
      const category = this.props.categories.find(
        category => category.id === transaction.category
      );
      const merchant = this.props.merchants.find(
        merchant => merchant.id === transaction.merchant
      );
      return ( <
        tr key = {
          transaction.id
        } >
        <
        td style = {
          centredTD()
        } >
        <
        input type = "checkbox"
        className = "columnBox" / >
        <
        /td> <
        td className = "status"
        style = {
          centredTD()
        } > {
          iconStatusFormatter(transaction.status)
        } <
        /td> <
        td > {
          dateFormatter(transaction.date)
        } < /td> <
        td > {
          merchantFormatter(merchant.name)
        } {
          merchant.name
        } <
        /td> <
        td > {
          teamMemberFormatter(transaction.team_member)
        } {
          transaction.team_member
        } <
        /td> <
        td > {
          category.name
        } < /td> <
        td > {
          transaction.budget
        } < /td> <
        td style = {
          centredTD()
        } > {
          transaction.receipt ? ( <
            i className = "fas fa-receipt orange" / >
          ) : ( <
            i className = "fas fa-receipt blue" / >
          )
        } <
        /td> <
        td style = {
          centredTD()
        } >
        <
        input style = {
          {
            cursor: "pointer"
          }
        }
        onChange = {
          () => this.handleCheck(transaction)
        }
        checked = {
          transaction.billable ? true : false
        }
        type = "checkbox"
        value = {
          transaction.billable
        }
        /> <
        /td> <
        td > {
          currencyFormatter(transaction.gst)
        } < /td> <
        td > {
          currencyFormatter(transaction.amount)
        } < /td> <
        /tr>
      );
    });

    return ( <
      >
      <
      Search searchTerm = {
        searchTerm
      }
      /> <
      div className = "Table" >
      <
      table >
      <
      thead >
      <
      tr >
      <
      th >
      <
      input type = "checkbox"
      className = "columnBox" / >
      <
      /th> <
      th > Status < /th> <
      th > Date < /th> <
      th > Merchant < /th> <
      th > Team Member < /th> <
      th > Category < /th> <
      th > Budget < /th> <
      th > Receipt < /th> <
      th > Billable < /th> <
      th > GST < /th> <
      th > Amount < /th> <
      /tr> <
      /thead> <
      tbody > {
        transactionRows
      } < /tbody> <
      /table> <
      /div> <
      Pagination itemsCount = {
        allTransactions.length
      }
      pageSize = {
        pageSize
      }
      currentPage = {
        currentPage
      }
      onPageChange = {
        this.handlePageChange
      }
      /> <
      />
    );
  }
}

export default Table;
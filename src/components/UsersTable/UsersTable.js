import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";

import "./UsersTable.scss";
// import Pagination from "react-bootstrap/Pagination";

import {
  ListUsersAction,
  ListUsersPagesAction,
} from "../../actions/ListUsersAction/ListUsersAction";

import { Table } from "../../UtilisComponents";
import { Button, Container } from "react-bootstrap";

class UsersTable extends Component {
  componentDidMount() {
    this.props.ListUsersAction(this.props.pageNumber);

    // const { user } = this.state;
    // if (user && user.page) {
    //   this.props.ListUsersAction(user.page);
    console.log(this.props.pageNumber);
    // }
  }

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      // data: [],
      perPage: 6,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.props.ListUsersPagesAction();
      }
    );
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activePage: 1,
  //   };
  // }

  // handlePageChange(pageNumber) {
  //   console.log(`active page is ${pageNumber}`);
  //   this.setState({ activePage: pageNumber });
  // }

  render() {
    return (
      <Container fluid>
        <div className="Users_table">
          <div className="AddUserButton">
            <Button href="./create-user" variant="primary">
              Add User
            </Button>
          </div>

          <div>
            <Table>
              <thead>
                <tr>
                  <th> Avatar</th>
                  <th> First Name</th>
                  <th> Last Name</th>

                  <th>Email</th>
                </tr>
              </thead>
              {this.props.list_of_users && this.props.list_of_users.length
                ? this.props.list_of_users.map((user) => (
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="AvatarImg"
                            src={user.avatar}
                            alt="User Avatar"
                          />
                        </td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                      </tr>
                    </tbody>
                  ))
                : this.props.errorMessage}
            </Table>
          </div>

          <div>
            {this.props.list_of_users_pages &&
            this.props.list_of_users_pages.length
              ? this.props.list_of_users_pages.map((page) => (
                  <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={page.total_pages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                ))
              : this.props.errorMessage}
          </div>
        </div>
      </Container>
    );
  }
}
function mapState(state) {
  return {
    errorMessage: state.ListUsers.errorMessage,
    loading: state.ListUsers.loading,
    list_of_users: state.ListUsers.list_of_users,
    list_of_users_pages: state.ListUsers.list_of_users_pages,
  };
}

export default connect(mapState, { ListUsersAction, ListUsersPagesAction })(
  UsersTable
);

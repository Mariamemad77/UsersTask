import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";

import "./UsersTable.scss";
import Pagination from "react-bootstrap/Pagination";

import {
  ListUsersAction,
  ListUsersPagesAction,
} from "../../actions/ListUsersAction/ListUsersAction";

import { Table } from "../SharedComponents";
import { Button, Container } from "react-bootstrap";

class UsersTable extends Component {
  componentDidMount() {
    this.props.ListUsersAction(this.props.pageNumber);
  }

  handlePages = () => {
    this.props.ListUsersPagesAction();
    console.log(this.props.ListUsersPagesAction);
  };

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,

      perPage: 6,
      currentPage: 0,
    };
  }

  render() {
    return (
      <Container fluid>
        <div className="Users_table">
          <div className="AddUserButton">
            {/* Button for add new user  */}
            <Button href="./create-user" variant="primary">
              Add User
            </Button>
          </div>
          {/* Table of Users  */}
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
          {/* Trial 1 for pagination  */}
          <div>
            {this.props.list_of_users_pages &&
            this.props.list_of_users_pages.length
              ? this.props.list_of_users_pages.map((pages) =>
                  console.log(pages.total_pages)
                )
              : this.props.errorMessage}

            <Pagination className="PaginationDiv">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>

            {/* Trial 2 for pagination  */}

            {/* <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={4}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={ListUsersAction()}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}

            /> */}
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

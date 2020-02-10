// import React, { useState } from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import GroupList from "../components/GroupList";
import Card from "../../shared/components/UIElements/Card";
// import Button from "react-bootstrap/Button";
// import Button from "../../shared/components/FormElements/Button";
// import Modal from "../../shared/components/UIElements/Modal";
import "../../routes/apiRoutes";
import "./GroupItem.css";
// import "../../shared/components/UIElements/Modal.css";

// const GroupItem = props => {
export default class GroupItem extends Component {
  constructor(props) {
    super(props);
    this.deleteGroup = this.deleteGroup.bind(this);
  }
  
  deleteGroup: function(groupId) {
    return axios
    .delete(`https://ryan-nurd-be.herokuapp.com/api/groups/${groupId}`)
    .then(res => {
      console.log(res);
    });
  }

  deleteGroupApi(groupId) {
    return axios
      .delete(
        `https://ryan-nurd-be.herokuapp.com/api/groups/${groupId}` +
          this.props._id,
        console.log("clicked")
      )
      .then(res => {
        console.log("Student successfully deleted!");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <li className="group-item">
            <Card className="group-item__content">
              <div className="group-item__image">
                <img src={this.props.image} alt={this.props.title} />
              </div>
              <div className="group-item__item">
                <h2>{this.props.title}</h2>
                <h3>{this.props.address}</h3>
                <p>{this.props.description}</p>
                <h3>{this.creatorId}</h3>
              </div>
              <div className="group-item__actions">
                <Link to={"/api/groups/:id" + this.props._id}>Edit</Link>
                <button
                  onClick={e => this.deleteGroupApi(this.props._id)}
                  size="sm"
                  variant="danger">
                  Delete
                </button>
              </div>
            </Card>
          </li>
        </main>
      </React.Fragment>
    );
  }

  // <tr>
  //   <td>{this.props.obj.name}</td>
  //   <td>{this.props.obj.email}</td>
  //   <td>{this.props.obj.rollno}</td>
  //   <td>
  //     <Link
  //       className="edit-link"
  //       to={"/edit-student/" + this.props.obj._id}>
  //       Edit
  //     </Link>
  //     <Button onClick={this.deleteStudent} size="sm" variant="danger">
  //       Delete
  //     </Button>
  //   </td>
  // </tr>
}

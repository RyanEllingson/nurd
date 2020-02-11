import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Avatar from "../../shared/components/UIElements/Avatar";
// import Card from "../../shared/components/UIElements/Card";
import "./UserItem.css";

const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/groups`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>
            <h4>
              {props.groupCount} {props.groupCount === 1 ? "Groups" : "Groups"}
            </h4>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;

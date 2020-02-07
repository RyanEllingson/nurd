import React from "react";

import Card from "../../shared/components/UIElements/Card";
import GroupItem from "./GroupItem";
import "./GroupList.css";

const GroupList = props => {
  if (props.items.length === 0) {
    return (
      <div className="group-list">
        <Card>
          <h2>No groups found. Maybe join a group?</h2>
          <button>Join Group</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="group-list">
      {props.items.map(group => (
        <GroupItem
          key={group.id}
          id={group.id}
          image={group.imageUrl}
          title={group.title}
          description={group.description}
          address={group.address}
          creatorId={group.creator}
          coordinates={group.location}
        />
      ))}
    </ul>
  );
};

export default GroupList;

import React, { useEffect, useState, Fragment } from "react";

import Card from "@material-ui/core/Card";
// import Card from "../../shared/components/UIElements/Card";
import GroupItem from "./GroupItem";
import "./GroupList.css";
import routes from "../../routes/apiRoutes";

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    routes.getAllGroups().then(function(response) {
      console.log(response.data);
      setGroups(response.data);
    });
  }, []);

  if (groups.length === 0) {
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
    <Fragment>
      <Card>
        <ul className="group-list">
          {groups.map(group => (
            <GroupItem
              key={group._id}
              id={group.id}
              // image={group.imageUrl}
              groupTitle={group.groupTitle}
              description={group.description}
              // address={group.address}
              organizer={group.organizer}
              location={group.location}
            />
          ))}
        </ul>
      </Card>
    </Fragment>
  );
};

export default GroupList;

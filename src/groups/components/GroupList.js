import React, { useEffect, useState, useContext, Fragment } from "react";

import Card from "@material-ui/core/Card";
// import Card from "../../shared/components/UIElements/Card";
import GroupItem from "./GroupItem";
import "./GroupList.css";
import routes from "../../routes/apiRoutes";
import { AuthContext } from "../../auth/auth";

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const {user} = useContext(AuthContext);

  const getGroups = function() {
    routes.getAllGroups().then(function(response) {
      console.log(response.data);
      const groups = [...response.data]
      setGroups(groups);
    });
  };

  const handleDelete = function(id) {
    // console.log(id);
    routes.deleteGroup(id).then(function() {
      setGroups([]);
      getGroups();
    });
  };

  const handleJoin = function(id) {
    routes.addMember(user.id, user.name, id).then(function() {
      setGroups([]);
      getGroups();
    });
  }

  useEffect(() => {
    getGroups();
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
      <main>
        <ul className="group-list">
          {groups.map(group => (
            <GroupItem
              key={group._id}
              id={group._id}
              // image={group.imageUrl}
              groupTitle={group.groupTitle}
              description={group.description}
              // address={group.address}
              organizer={group.organizer}
              location={group.location}
              onClickDelete={() => {
                handleDelete(group._id);
              }}
              onClickJoin={() => {
                handleJoin(group._id);
              }}
              members={group.currentMembers}
            />
          ))}
        </ul>
      </main>
    </Fragment>
  );
};

export default GroupList;

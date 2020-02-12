import React, { useContext } from "react";
// import React, { useState, useContext } from "react";
import { AuthContext } from "../../auth/auth";
import Card from "../../shared/components/UIElements/Card";
// import Button from "../../shared/components/FormElements/Button";
// import Modal from "../../shared/components/UIElements/Modal";
// import "./GroupItem.css";
// import "../../shared/components/UIElements/Modal.css";
import "./GroupItem.css";
const GroupItem = props => {
  const { user } = useContext(AuthContext);
  // const [showMap, setMap] = useState(false);

  // const openMapHandler = () => setMap(true);

  // const closeMapHandler = () => setMap(false);
  return (
    <React.Fragment>
      {/* <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="group-item__modal-content"
        footerClass="group-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
        <div className="map-container"></div>
        <h2>THE MAP!</h2>
      </Modal> */}
      <li className="group-item">
        <Card className="group-item__content">
          {/* <div className="group-item__image">
            <img src={props.image} alt={props.title} />
          </div> */}
          <div className="group-item__item">
            <h2>{props.groupTitle}</h2>
            <h3>{props.location}</h3>
            <p>{props.description}</p>
            <h3>{props.organizer}</h3>
            <h3>Current Members:</h3>
            {props.members.map(member=>{
              return <h2>{member.name}</h2>
            })}
          </div>
          {user ? (
            <div className="group-item__actions">
              <button className="mBut" onClick={props.onClickDelete} danger>
                DELETE
              </button>
              <button className="mBut" onClick={props.onClickJoin} secondary>
                JOIN
              </button>
            </div>
          ) : (
            ""
          )}
        </Card>
      </li>
    </React.Fragment>
  );
};

export default GroupItem;

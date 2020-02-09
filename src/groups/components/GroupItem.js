import React, { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import "./GroupItem.css";
import "../../shared/components/UIElements/Modal.css";

const GroupItem = props => {
  const [showMap, setMap] = useState(false);

  const openMapHandler = () => setMap(true);

  const closeMapHandler = () => setMap(false);
  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="group-item__modal-content"
        footerClass="group-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
        <div className="map-container"></div>
        <h2>THE MAP!</h2>
      </Modal>
      <li className="group-item">
        <Card className="group-item__content">
          <div className="group-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="group-item__item">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
            <h3>{props.creatorId}</h3>
          </div>
          <div className="group-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/groups/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default GroupItem;

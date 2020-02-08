import React from "react";
import "react-bulma-components";

function EventCard(props) {
  return (
    <div class="column is-one-quarter-desktop is is-offset-three-quarters-mobile">
      <div className="card large">
        <div className="card-image">
          <figure className="image">
            <img src={props.imageURL} alt="game pic" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img className="circle-img" src={props.img} alt="avatar" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4 no-padding">{props.name}</p>

              <span className="title is-6">
                <a href="http://www.google.com">{props.email}</a>
              </span>

              <p className="subtitle is-6">{props.user}</p>
              <p className="subtitle is-6">{props.subtitle}</p>
            </div>
          </div>
          <div className="content">
            Game description and user content
            <div className="background-icon">
              <span className="icon-twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;

import React from "react";

function EventCard(props) {
  return (
    <div class="column is-one-third">
      <div class="card large">
        <div class="card-image">
          <figure class="image">
            <img src={props.imageURL} alt="game pic" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-96x96">
                <img className="circle-img" src={props.img} alt="avatar" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4 no-padding">{props.name}</p>

              <span class="title is-6">
                <a href="http://www.google.com">{props.email}</a>
              </span>

              <p className="subtitle is-6">{props.user}</p>
              <p className="subtitle is-6">{props.subtitle}</p>
            </div>
          </div>
          <div class="content">
            Game description and user content
            <div class="background-icon">
              <span class="icon-twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;

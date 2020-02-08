import React from "react";
import { Link } from "react-router-dom";

import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
//import "./UserItem.css";

const UserItem = props => {
  return (
    <li className="user-item">

      <Card>
        <Card.Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" position="left">
              <Image size={64} alt={props.alt} src={props.image} />
            </Media.Item>
            <Media.Item>
              <Heading size={4}>{props.name}</Heading>
              <Heading subtitle size={6}>{props.email}</Heading>
              <Heading subtitle size={6}>{props.groupCount} {props.groupCount === 1 ? "Group" : "Groups"}
              </Heading>
            </Media.Item>
          </Media>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </Content>
        </Card.Content>
      </Card>

      {/* <Card className="user-item__content">
        <Link to={`/${props.id}/groups`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>
            <h3>
              {props.groupCount} {props.groupCount === 1 ? "Group" : "Groups"}
            </h3>
          </div>
        </Link>
      </Card> */}
    </li>
  );
};

export default UserItem;

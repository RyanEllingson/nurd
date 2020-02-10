import React from 'react';
import {Heading, Columns, Form} from 'react-bulma-components';

export default class CreateAccount extends React.Component {
  render() {
    return (
    <Columns>
      <Columns.Column className='has-text-centered'>
        <Heading>
          Create an Account
        </Heading>
        <Form.Field>
        <input
          placeholder="type of game"
          name="type"
          value={inputGroup.type}
          onChange={handleChange}
        />
        </Form.Field>
        <Form.Field>
        <input
          placeholder="group name"
          name="groupName"
          value={inputGroup.groupName}
          onChange={handleChange}
        />
        </Form.Field>
        <Form.Field>
        <input
          placeholder="game title"
          name="title"
          value={inputGroup.title}
          onChange={handleChange}
        />
        </Form.Field>
        <Form.Field>
        <input
          placeholder="address"
          name="location"
          value={inputGroup.location}
          onChange={handleChange}
        />
        </Form.Field>
        <Form.Field>
        <input
          placeholder="gender"
          name="gender"
          value={inputGroup.gender}
          onChange={handleChange}
        />
        </Form.Field>
        <Form.Field>
        <input
          placeholder="min age requirement"
          name="minAge"
          value={inputGroup.minAge}
          onChange={handleChange}
        />
        </Form.Field>
        
      </Columns.Column>
      <Columns.Column className="is-hidden-mobile has-text-centered">
        Right Stuff
      </Columns.Column>
    </Columns>);
  }
}
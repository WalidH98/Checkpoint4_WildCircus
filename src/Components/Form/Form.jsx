import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import'./Form.css'

export default class WildForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail"><h4>Email</h4></Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText"><h4>Message</h4></Label>
          <Input type="textarea" name="text" placeholder="Enter your message"id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

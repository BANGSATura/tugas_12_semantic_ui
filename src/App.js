import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Segment, Input, Container, Checkbox, Button, Image, Header } from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Container style={{width:'500px'}}>
        <center>
          <Header as='h1' color='teal'>
            <Image size='huge' src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
            <Header.Content>
              Member Login
            </Header.Content>
          </Header>
        </center>
        <Segment stacked>
          <Form>
            <Input type='email' icon='user' iconPosition='left' placeholder='Email Address' fluid />
            <br/>
            <Input type='password' icon='lock' iconPosition='left' placeholder='Password' fluid />
            <br/>
            <center>
              <Checkbox label ='I Agree Terms And Conditions'/>
            </center>
            <br/>
            <Button content='Login' color='teal' fluid/>
          </Form>
        </Segment>
        <Segment textAlign='center' secondary>
          Tidak Punya Akun? Silakan <a href="/"> Register</a>
        </Segment>
      </Container>
    </div>
  );
}

export default App;

import React from 'react'
// import { Link } from 'react-router-dom';
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Sticky,
} from 'semantic-ui-react'
import Logo from './images/logo2.png'

const Footer = () => {
  return (
    <Sticky>
    <div style={styles.Footer}>
    <Segment inverted vertical style={{ margin: '8em 0em 0em', padding: '1em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={8}>
            <Header inverted as='h4' content='Group - The Reactors' />
            <List link inverted>
              <List.Item as='a'>Rafael</List.Item>
              <List.Item as='a'>Sydney</List.Item>
              <List.Item as='a'>Michael</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header inverted as='h4' />
            <p>
              <br />
              We're as happy as a dog with two tails.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src={Logo} />
        <List horizontal inverted divided link size='small'>
          
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
        </List>
      </Container>
    </Segment>
    </div>
    </Sticky>
    

  );
};

const styles = {
  Footer: {
    position: "relative",
    bottom: "0",
    width: "100%",
  },
};

export default Footer;
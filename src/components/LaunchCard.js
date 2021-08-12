import React from 'react';
import { Link } from 'react-router-dom';
import { Popup, Item, Label, } from 'semantic-ui-react';
import '../App.css';


const LaunchCard = ({ launch }) => {

  // Date Formatting
  const timeStamp = launch?.date_unix;
  const date = new Date(timeStamp * 1000);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleString('en-US', options);
  const formattedTime = date.toLocaleTimeString();

  return (
    <>
      <Item className='LaunchCard'>
        <Item.Image size='large' src={launch?.links.flickr.original.length !== 0 ? launch?.links.flickr.original[0] : launch.links.patch.large} />

        <Item.Content verticalAlign='middle'>
          <Item.Header as={Link} to={`/launches/${launch?.id}`}>{launch?.name}</Item.Header>
          <Item.Meta>
            <span>{formattedDate}</span>
            <span>{formattedTime}</span>
          </Item.Meta>
          <Item.Extra>
            {launch?.success ?
              <Popup
                position='right center'
                inverted
                trigger={<Label icon='check' color='black' content='SUCCESS' />}
                content='Successful Launch'
              /> :
              <Popup
                position='right center'
                inverted
                trigger={<Label icon='exclamation circle' basic color='black' content='FAILED' />}
                content={`Failed Launch: ${launch?.failures[0].reason}`}
              />
            }
          </Item.Extra>
          <Item.Description>{launch?.details}</Item.Description>
          <Item.Extra>
            <Label basic color='red' as='a' onClick={(e) => window.open(
              launch?.links.webcast, "_blank")} icon='youtube play' content='Watch on Youtube' />
            <Label basic color='black' as='a' onClick={(e) => window.open(
              launch?.links.article, "_blank")} icon='newspaper outline' content='Keep Reading' />
          </Item.Extra>
          <Item.Meta>
            <Label color='black' as={Link} to={`/launches/${launch?.id}`} content='Click For More Info About this Launch' />
          </Item.Meta>
        </Item.Content>
      </Item>
    </>
  )
}

export default LaunchCard

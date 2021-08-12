import { Link } from 'react-router-dom';
import { Card, Icon, Popup, Label, Image, Placeholder } from 'semantic-ui-react';

const ShipCard = ({ ship }) => {
  const roleTags = ship?.roles.map((role, i) => {
    return (
      <Label
        key={i}
        basic
        circular
        size='medium'
        color='black'
        content={role}
      />
    )
  });

  return (
    <Card link raised fluid as={Link} to={`/ships/${ship.id}`}>
      {ship?.image !== null ?
        <Image src={ship?.image} /> :
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>}
      <Card.Content>
        <Card.Header>
          {ship?.name}
        </Card.Header>
        <Card.Description>
          Type: <Label

            size='medium'
            color='grey'
            content={ship?.type}
          />
        </Card.Description>
        <Card.Meta>
          {ship?.active ?
            <Popup inverted
              trigger={<Icon size='large' name='ship' color='black' />}
              content='Currently Active'
            /> :
            <Popup inverted
              trigger={<Icon size='large' name='square' />}
              content='Currently Inactive'
            />}
        </Card.Meta>
        <Card.Description>
          {ship?.home_port}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        Roles:      {roleTags}
      </Card.Content>
    </Card>
  )
}

export default ShipCard

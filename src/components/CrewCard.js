import { Link } from 'react-router-dom';
import { Card, Icon, Popup, Image, Placeholder } from 'semantic-ui-react';

const CrewCard = ({ crew }) => {
  return (
    <Card link raised fluid as={Link} to={`/crew/${crew.id}`}>
      {crew?.image !== null ?
        <Image className='crewImage' src={crew?.image} /> :
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>}
      <Card.Content>
        <Card.Header>
          {crew?.name}
        </Card.Header>
        <Card.Meta>

          <Popup inverted
            trigger={<Icon size='large' name='rocket' color={crew.status === 'active' && 'black'} />}
            content={`Status: ${crew.status.toUpperCase()}`}
          />
        </Card.Meta>
        <Card.Description>
          {crew?.agency}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>

        Number of Launches: {crew.launches.length}

      </Card.Content>
    </Card>
  )
}

export default CrewCard

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Item, Segment, Icon, Popup, Button } from 'semantic-ui-react';

const SingleCrew = (props) => {
  const [crew, setCrew] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const crewId = props.match.params.crewId;

  useEffect(() => {
    const getCrew = async () => {
      const crewMember = await fetchCrew();
      setCrew(crewMember);
    }

    getCrew();
  }, []); //eslint-disable-line

  // Fetch Crew Member
  const fetchCrew = async () => {
    const data = await fetch(`https://api.spacexdata.com/v4/crew/${crewId}`)
      .then(res => res.json())
      .catch(e => setError(true));

    setLoading(false);

    return data;
  }

  return (
    <Grid
      columns={1}
      padded
      relaxed
      textAlign='center'
      verticalAlign='middle'
    >
      <Grid.Row centered stretched>
        <Grid.Column stretched mobile={16} tablet={14} computer={9}>
          <Segment compact raised loading={loading}>
            {
              error ?
                <h1>Sorry we can't find the crew member you're looking for :/</h1> :
                <Item.Group >
                  <Item>
                    <Item.Image size='medium' src={crew?.image} />
                    <Item.Content>
                      <Item.Header>
                        {crew?.name}
                      </Item.Header>
                      <Item.Meta>
                        {crew?.agency}
                      </Item.Meta>
                      <Item.Extra>
                        <Popup inverted position='right center'
                          trigger={<Icon size='large' name='rocket' color={crew?.status === 'active' ? 'black' : 'grey'} />}
                          content={`Status: ${crew?.status.toUpperCase()}`}
                        />
                      </Item.Extra>
                      <Item.Description>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem officiis expedita quas tempore quisquam aliquid animi numquam. Magnam, sit? Iusto totam dolores fuga id laborum vero quis quo inventore praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque, quia dicta quasi facilis obcaecati minima, maiores tempore animi placeat dolores veritatis earum quidem ipsam, modi omnis aut doloremque? Porro.
                      </Item.Description>
                      <Item.Meta>Launches:&emsp;
                        {crew?.launches.map((launch, i) => <Button compact key={i} content={launch} secondary as={Link} to={`/launches/${launch}`} />)}
                      </Item.Meta>
                      <Item.Description>
                        {`Find out more about ${crew?.name.split(' ')[0]} here:`}&emsp;{<Button target='blank' as='a' href={crew?.wikipedia} compact color='blue' icon><Icon name='wikipedia w' /></Button>}
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Item.Group>
            }
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default SingleCrew

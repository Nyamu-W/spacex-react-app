import { useEffect, useState } from 'react';
import { Grid, Item, Segment } from 'semantic-ui-react';

const SingleLaunch = (props) => {
  const [launch, setLaunch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const launchId = props.match.params.launchId;

  useEffect(() => {
    const getLaunch = async () => {
      const newLaunch = await fetchLaunch();
      setLaunch(newLaunch);
    }

    getLaunch();
  }, []);

  // Fetch Crew Member
  const fetchLaunch = async () => {
    const data = await fetch(`https://api.spacexdata.com/v4/launches/${launchId}`)
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
                <h1>Sorry we can't find that launch :/</h1> :
                <Item.Group >
                  <Item>
                    <Item.Image size='medium' src={launch?.links.flickr.original[0]} />
                    <Item.Content>
                      <Item.Header>
                        {launch?.name}
                      </Item.Header>
                      <Item.Meta>
                        {new Date(launch?.date_unix * 1000).toLocaleString()}
                      </Item.Meta>
                      <Item.Meta>
                        {`Flight Number: ${launch?.flight_number}`}
                      </Item.Meta>
                      <Item.Description>
                        {launch?.details}
                      </Item.Description>
                      <Item.Meta>
                        {`More Info: `}
                      </Item.Meta>
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

export default SingleLaunch

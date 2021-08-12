import { useEffect, useState } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import ShipCard from '../components/ShipCard';

const Ships = () => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const abortController = new AbortController();

  useEffect(() => {
    const getLaunches = async () => {
      const shipDataFromApi = await fetchShips();
      setShips(shipDataFromApi.reverse());
    }

    getLaunches();
    return () => abortController.abort();
  }, []); //eslint-disable-line


  // Fetch launch data from API
  const fetchShips = async () => {
    setLoading(true);
    const data = await fetch('https://api.spacexdata.com/v4/ships', { signal: abortController.signal })
      .then(res => {
        setLoading(false)
        return res.json();
      })
      .catch(e => setError(true));
    return data;
  }

  return (
    <>
      <Grid columns={3} centered>
        <Grid.Row />
        {
          error ?
            <h1>Error loading data. Try again later.</h1> :
            <>
              <Grid.Row>
                <h1>Ships</h1>
              </Grid.Row>
              <Grid.Row stretched centered>
                {loading ?
                  <Loader size='massive' content='Loading Ships . . . ' active inline /> :
                  ships.map((ship) => (
                    <Grid.Column mobile='15' tablet='7' computer='5' largeScreen='3' widescreen='3' key={ship.id} style={{ marginBottom: 20 }}>
                      <ShipCard ship={ship} />
                    </Grid.Column>
                  ))}
              </Grid.Row>
            </>
        }
      </Grid>
    </>
  )
}

export default Ships

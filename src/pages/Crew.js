import { useEffect, useState } from 'react';
import { Grid, Loader, Search, Label, Transition, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import CrewCard from '../components/CrewCard';

const Crew = () => {
  const [crew, setCrew] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const abortController = new AbortController();

  useEffect(() => {
    const getCrew = async () => {
      const crewDataFromApi = await fetchCrew();
      setCrew(crewDataFromApi);
    }

    getCrew();
    return () => abortController.abort();
  }, []); //eslint-disable-line


  // Fetch Crew Members data from API
  const fetchCrew = async () => {
    setLoading(true);
    const data = await fetch('https://api.spacexdata.com/v4/crew', { signal: abortController.signal })
      .then(res => res.json())
      .catch(e => {
        setError(true);
      });
    setLoading(false);
    return data;
  }

  // Search Functionality
  const filteredCrew = crew.filter(c => c.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));


  const resultRenderer = ({ title, id }) => <Label as={Link} to={`/crew/${id}`} content={title} />

  return (
    <>
      <Grid columns={3} centered>
        <Grid.Row />
        {
          error ?
            <h1>Error Loading Data. Try again later</h1> :
            <>
              <Grid.Row >
                <h1>Crew Members</h1>
              </Grid.Row>
              <Grid.Row className='search'>
                <Search
                  size='large'
                  onSearchChange={(e, data) => setSearchTerm(data.value)}
                  resultRenderer={resultRenderer}
                  results={filteredCrew.map(crew => { return { title: crew.name, id: crew.id } })}
                  value={searchTerm}
                />

              </Grid.Row>
              <Grid.Row stretched centered>
                <Transition.Group
                  duration={150}
                  animation='drop'
                >
                  {loading ?
                    <Loader size='massive' content='Loading Crew Members . . . ' active inline /> :
                    filteredCrew.map((crew) => (
                      <Grid.Column
                        mobile='15'
                        tablet='7'
                        computer='5'
                        largeScreen='3'
                        widescreen='3'
                        key={crew.id}
                        style={{ marginBottom: 20 }}>
                        <CrewCard crew={crew} />
                      </Grid.Column>
                    ))}
                </Transition.Group>
              </Grid.Row>
            </>
        }
      </Grid>
    </>
  )
}

export default Crew

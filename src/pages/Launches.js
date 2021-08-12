import { Grid, Item, Pagination, Icon, Loader, Dropdown } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import LaunchCard from '../components/LaunchCard';

const dropdownOptions = [];
for (let i = new Date().getFullYear(); i >= 2006; i--) {
  dropdownOptions.push({
    key: i.toString(),
    value: i.toString(),
    text: i.toString(),
  })
}

const Launches = () => {
  const [launches, setLaunches] = useState([]);
  const [launchYears, setLaunchYears] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const abortController = new AbortController();

  useEffect(() => {
    const getLaunches = async () => {
      const launchDataFromApi = await fetchLaunches();
      setLaunches(launchDataFromApi.reverse());
    }

    getLaunches();
    return () => abortController.abort();
  }, []);


  // Fetch launch data from API
  const fetchLaunches = async () => {
    setLoading(true);
    const data = await fetch('https://api.spacexdata.com/v4/launches/past', { signal: abortController.signal })
      .then(res => res.json())
      .catch(e => {
        setError(true);
        return []
      });
    setLoading(false);
    return data;
  }

  // Filter Launches
  const filteredLaunches = launches.filter(launch => {
    if (launchYears.length === 0) return true;
    return launchYears.some(year => launch.date_utc.includes(year));
  });

  // Pagination Variables
  const indexOfLastLaunch = currentPage * 5;
  const indexOfFirstLaunch = indexOfLastLaunch - 5;
  const currentLaunches = filteredLaunches.slice(indexOfFirstLaunch, indexOfLastLaunch);
  const totalPageCount = Math.ceil(filteredLaunches.length / 5);



  return (
    <>
      <Grid centered columns={1} padded >
        <Grid.Row />
        {error ?
          <h1>Error Loading. Try again later.</h1> :
          <>
            <Grid.Row>
              <h1>Launches</h1>
            </Grid.Row>
            <Grid.Row>
              <Dropdown
                onChange={(e, data) => setLaunchYears(data.value)}
                disabled={loading} placeholder='Filter by launch year'
                multiple
                selection
                options={dropdownOptions}
              />
            </Grid.Row>
            <Grid.Row stretched centered>
              {
                loading ?
                  <Loader size='massive' content='Loading Launch Data . . . ' active inline /> :
                  <Grid.Column
                    mobile='16'
                    tablet='16'
                    computer='14'
                    largeScreen='12'
                    widescreen='10'
                  >
                    <Item.Group divided link>
                      {currentLaunches.map(launch => <LaunchCard key={launch.id} launch={launch} />)}
                    </Item.Group>
                  </Grid.Column>
              }
            </Grid.Row>
            <Grid.Row>
              <Pagination
                activePage={currentPage}
                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                nextItem={{ content: <Icon name='angle right' />, icon: true }}
                totalPages={totalPageCount}
                onPageChange={(e, data) => {
                  setCurrentPage(data.activePage);
                  window.scrollTo(0, 0);
                }}
              />
            </Grid.Row>
          </>
        }
      </Grid>
    </>
  )
}

export default Launches

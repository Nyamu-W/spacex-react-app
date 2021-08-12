import React from 'react';
import { Button } from 'semantic-ui-react';

const Footer = () => {
  return (

    <div className='footer'>
      <Button
        size='mini'
        color='black'
        basic
        compact
        floated='right'
        content='Data Source'
        label={{ basic: false, color: 'black', pointing: 'left', content: 'SpaceX API', icon: 'rocket', as: 'a', href: 'https://github.com/r-spacex/SpaceX-API' }}
      />
    </div>
  )
}

export default Footer

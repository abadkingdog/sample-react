import React from 'react';
import { Fail } from '../components';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Fail 
        code={404} 
        message="Page not found" 
        description="I'm sorry, the page you were looking for cannot be found!">
      </Fail>
    );
  }
}

export default NotFoundPage;
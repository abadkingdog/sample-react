import React from 'react';
import { Fail } from '../components';
import { Chat, MessageBox } from '../components/index.front.js';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Fail 
        code={404} 
        message="Page not found" 
        description="I'm sorry, the page you were looking for cannot be found!">
        <Chat>
          <MessageBox />
        </Chat>
      </Fail>
    );
  }
}

export default NotFoundPage;

import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './HOC';
import styled from 'styled-components'
const StocksData = [
  {
      id: 1,
      name: 'TCS'
        
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
];
const UsersData = [
  {
      id: 1,
      name: 'Krunal'
        
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
];

const Stocks = Hoc(
  StockList,
  StocksData
);

const Users = Hoc(
  UserList,
  UsersData
);

const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;

const Wrapper2 = styled.div`
height: 40vh
padding: 4em;
background: yellow;
`;

const Wrapper3 = styled.div`
height: 40vh
padding: 4em;
background: blue;
`;

class App extends Component {
  
  render() {
    return (
      <Wrapper>
         <div>
            <Wrapper2>
              <Users></Users>
            </Wrapper2>
            <Wrapper3>
              <Stocks></Stocks>
            </Wrapper3>  
         </div>
      </Wrapper>
     
    )
  }
}

export default App;
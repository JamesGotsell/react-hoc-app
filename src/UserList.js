
import React, { Component } from 'react';
import TableRow from './TableRow';

import styled from 'styled-components'

const Wrapper5 = styled.div`

text-align: center;
padding: 4em;

`; 

const Table = styled.table`

text-align: center;
padding: 4em;

`; 
class UserList extends Component {
    constructor(props) {
        super(props);
      }
      
      tabRow(){
        if(this.props.data instanceof Array){
          return this.props.data.map(function(object, i){
              return <TableRow obj={object} key={i} />;
          })
        }
      }
      render() {
        return (
            <Wrapper5>
        
                    <Table >
                    <thead>
                        <tr>
                        <td>ID</td>
                        <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                    </Table>
         
            </Wrapper5>
           
        );
      }
}
export default UserList;
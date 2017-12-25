import React, {Component} from 'react';
import styled from 'styled-components' 

const Wrapper4 = styled.div`

text-align: center;
padding: 4em;

`; 
export default function Hoc(HocComponent, data){
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }
        
        render(){
            return (
                <Wrapper4>
                          <HocComponent data={this.state.data} {...this.props} />
                </Wrapper4>
           );
        }
    } 
}
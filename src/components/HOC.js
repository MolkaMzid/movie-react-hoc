import React, { Component } from 'react';
import SpinnerComponent from './Spinner';
const HOC = (WrappedComponent) => {
    return class HOC extends Component {
        constructor(props) {
            super(props);
            this.state = {  
                isSpinner:true,
            }
            setTimeout(()=>this.setState({
                isSpinner:false,
            }),1000)
        }

        render() { 
            return ( <div>{
                (this.state.isSpinner)?<SpinnerComponent/>:<WrappedComponent {...this.props}/>
                
            } </div>);
        }
    }
     
    
}
 
export default HOC;

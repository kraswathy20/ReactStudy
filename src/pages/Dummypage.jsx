import React,{Component} from "react";
import Homepage from "./HomePage";


class Dummypage extends Component{

    componentDidMount(){
        console.log('componentDidMount',this.props.name);
    }
    componentDidUpdate(){
        console.log('componentDidUpdate',this.props.name);
    }
    componentWillUnmount(){
        console.log('componentWillUnmount',this.props.name);
    }
 
    render(){
        const{
            name
        }= this.props
        return(
            <div>{name}</div>
        )
    }
}

export default Dummypage
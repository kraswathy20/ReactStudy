import React from "react";
import Homepage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dummypage from "./pages/Dummypage";
import Usage from "./pages/Usage";
class MyApp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            currentState : 'home'
        }
    }

    handleMenuSelect = (value) =>{
       
        this.setState({
            currentState : value
        })
    }

    getpage = () =>{
        const{
            currentState
        }= this.state
         
        switch (currentState) {
            case 'home':
               return <Homepage/>
            case 'usage':
                return <Usage/>   
            case 'settings':
               return <Dummypage key='settings' name='Settings'/>
            case 'logout':
               return <Dummypage key='logout' name='Logout'/>
            default:
                break;
        }
    }
    render(){
        return(
         <div className='app' >
            <Header onMenuSelect={this.handleMenuSelect}/>
            <div className="app-body">
                {this.getpage()}
            </div>
            <Footer/>
        </div>
        )
    }
}

export default MyApp
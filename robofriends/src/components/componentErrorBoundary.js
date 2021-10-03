import React from "react";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }
    //like try catch block
    componentDidCatch(error,info){

        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return <h1>Ooops... This is not Good</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
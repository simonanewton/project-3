import React from "react";
import LoadingScreen from 'react-loading-screen';
import "./index.css";


class Loading extends React.Component {
    render() {    
        return (
            <LoadingScreen
                loading={true}
                bgColor='white'
                spinnerColor='orange'
                logoSrc={require('./icon.png')}
                textColor='orange'
                text='Get your quiz on!'
            >
            </LoadingScreen>
        );
    }
}

export default Loading;

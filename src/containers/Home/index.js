import React from "react";
import { connect } from 'react-redux';

// import { getUserInfo } from 'src/redux/Home/Login/login.action';
import { getUserInfo } from '../../redux/Home/Login/login.action';


@connect(state => {
    return {
        loginState: state.loginState
    }
}
)
class Home extends React.Component {
    // loginState
    render() {
        console.log(this.props, 'props----props')
        return (
            <div>
                {123123}

                < button onClick={() => { console.log('12-----home') }}></button >
            </div >
        )
    }
}
export default Home
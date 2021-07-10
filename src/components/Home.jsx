import React, {Component} from 'react';

const initialState = {

}

class Home extends Component {
    constructor(props) {
        super(props)
        this.state=initialState;
    }

    render() {
        return(
            <div>
                home page
            </div>
        )
    }
}

export default Home;
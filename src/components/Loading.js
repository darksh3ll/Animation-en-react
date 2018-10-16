import React, {Component} from 'react';
import ReactLoading from 'react-loading';
import "./Loading.css"

class Loading extends Component {
    state = {
        compteur:10
    };

    componentDidMount(){
        setInterval(() => {
            this.setState({compteur:this.state.compteur - 1});
            if (this.state.compteur === 1) {
                this.setState({compteur:"BIENVENUE"})

            }
        },1000)

    }
    render() {

        return (
            <div className="loadind">
                <h1>{this.state.compteur}</h1>
                <ReactLoading
                    type ="bars"
                    color="#FF1493"
                    width={"20%"}
                />

            </div>
        );
    }
}

export default Loading;

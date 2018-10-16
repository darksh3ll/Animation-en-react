import React, { Component } from 'react';
import './App.css';
import Loading from "./components/Loading";

class App extends Component {
  state = {
      compteur:0,
    loading:true,
      data:[]
  };

  componentDidMount(){
      setTimeout(() => {
          this.setState({loading:false})
      },10000)

  }


  render() {
      if (this.state.loading) {
          return(
              <div>
                  <Loading/>
              </div>

          )
      }
    return (
        <div className="App">
            <h4>bonjour</h4>
        </div>

    );
  }
}

export default App;

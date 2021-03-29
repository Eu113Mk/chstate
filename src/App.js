import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      person: {
        fullName: "Amel Kemala",
        bio: "Où il y'a une vie il y'a un conflit",
        imgSrc:"chihiro.jpg",
        profession: "FullStack Javascript developer"
      },
      show: true,
      count:0
  }
  }
  toggle = () => {
    this.setState({
      show: !this.state.show
    })
  }
  componentDidMount(){
      setInterval(()=>{
      this.setState({
        count: this.state.count +1
      })
    },1000)
  }
  render() {
    return (
      <div className="App">
        <p>Timer : {this.state.count}</p>
        <button className="btn" onClick={this.toggle}>Show / Hide</button>
          {this.state.show && (
          <div  className="App_content">
            <img src={this.state.person.imgSrc} alt="profil" />
            <div>
              <h4>Full Name</h4>
              <p>{this.state.person.fullName}</p>
              <h4>Bio</h4>
              <p>{this.state.person.bio}</p>
              <h4>Profession</h4>
              <p>{this.state.person.profession}</p>
            </div>
          </div>
          )}
          
      </div>
    )
  }
}

export default App;

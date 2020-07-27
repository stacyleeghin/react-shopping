import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props){
    super(props)
    this.items = [
      {
        id:1,
        content:'eggs',
      },
      {
        id:2,
        content:'milk'
      },
      {
        id:3,
        content:'bacon'
      },
      {
        id:4,
        content:'bread'
      },
      {
        id:5,
        content:'butter'
      },
      {
        id:6,
        content:'beans'
      },
      {
        id:7,
        content:'icecream'
      }
    ]

  }
  render(){

    return (
    
      <div className="wrap">
        <div className="section1">
            <div className="hero">
                <h1>Shopping List</h1>
                <h3>Friday July 27th 2020</h3>
            </div>
        </div>
        <div className="section2">
            <div className="container1">
              
                <ul>
                  {
                    this.items.map((item)=>{

                      return (
                      <li>{item.content} <input type="checkbox"/></li>
                      )
                    })
                  }
                    
                    
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
export default App;

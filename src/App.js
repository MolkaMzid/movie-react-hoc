import './App.css';
import React, { Component } from 'react';
import MovieBox from './components/MovieBox';
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      star:[{id:1,icon:"☆",isColored:false},{id:2,icon:"☆",isColored:false},{id:3,icon:"☆",isColored:false},
      {id:4,icon:"☆",isColored:false},{id:5,icon:"☆",isColored:false}],
      titre:''

     }
  }
  handelchange=(e)=>{
    this.setState({
    titre:e.target.value,
    })}

    rating=(id)=>{
      this.setState({star:this.state.star.map(el=>(el.id===id)?{id:el.id,icon:el.icon,isColored:!el.isColored}:el)})
      }

  render() { 
    return (
      <div className="App">
          <header>
          <h1>List of movies</h1>
          </header>
          <main>
          <section  className="searchbox-wrap">
          <input type="text" placeholder="search for a movie ..." className="searchbox" onChange={this.handelchange}/>
       
          </section>
          <div>
    {this.state.star.map(el=><span  onClick={()=>this.rating(el.id)}>{(el.isColored)?"⭐":el.icon}</span>)}
          
          </div>
          <MovieBox titre={this.state.titre} rate={this.state.star.filter(el=>el.isColored===true).length}/> 
          </main>
      </div>
     );
  }
}
 
export default App;
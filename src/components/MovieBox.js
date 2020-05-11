import React, { Component } from 'react';
class MovieBox extends Component {
    constructor(props) {
        super(props);
        
        this.state={
         BoxTab:[{name:"The Call of the Wild",rate:4,link:"https://www.myegy.io/files/img/content/9/849/1585620216.200_300.jpg"},
         {name:"Transplant",rate:2,link:"https://www.myegy.io/files/img/content/9/978/1587049729.200_300.jpg"},
         {name:"Supergirl",rate:4,link:"https://www.myegy.io/files/img/content/0/534/1570477109.200_300.jpg"},
         {name:"Bad Boys for Life",rate:3,link:"https://www.myegy.io/files/img/content/9/689/1579263996.200_300.jpg"}]
         ,star:"",
         show:false,
         titre:"",
         link:"",
         rate:""
           }
    }
    AddMovie=()=>{
        this.setState({
           BoxTab:[...this.state.BoxTab,{name:this.state.titre,link:this.state.link,rate:this.state.rate}]
        })
    }
    ShowMovie=()=>{
        this.setState({
            show:!this.state.show
        })
    }

    render() { 
        return ( <div className="searchbox">
            {this.state.BoxTab.filter(el=>el.name.includes(this.props.titre)).filter(el=>el.rate>=this.props.rate)
            .map(el=><div className="results">
            <p>
            <p>{this.state.star.padEnd(el.rate,"⭐")}</p>
            <img  className="results result img"src={el.link}></img>
            <h3 className=" result h3">{el.name}</h3>
            </p>
            </div>)}
            <div className="searchbox"  style={{border:"1px solid black", width:"250px", height:"250px",textAlign:"center"}}>
           <span onClick={this.ShowMovie}>Add Movie</span> 
             </div>
             <div style={{display:(this.state.show)?"block":"none"}}>
                 <input type="text" placeholder="titre" value={this.state.titre} onChange={(e)=>this.setState({titre:e.target.value})}/>
                 <input type="text" placeholder="link" value={this.state.link} onChange={(e)=>this.setState({link:e.target.value})}/>
                 <input type="text" placeholder="rate"value={this.state.rate} onChange={(e)=>this.setState({rate:e.target.value})}/>
                 <button onClick={this.AddMovie}>Add</button>
             </div>
            </div> );
    }
}
 
export default MovieBox;
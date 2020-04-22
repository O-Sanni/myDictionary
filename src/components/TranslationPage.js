import React from "react";
import SearchForMedicalDictionary from "./SerachForMedicalDictionary"


const initialState="";

class MedicalDictionary extends React.Component{
  constructor(props){
      super(props);
      this.state={
          searchWord:initialState,
          search: false
      }
      this.getWordHandler=this.getWordHandler.bind(this);
      this.submitButton=this.submitButton.bind(this);
  }  
  getWordHandler(event){
      event.preventDefault();
      this.setState({searchWord: event.target.value})
  }
  submitButton(event){
    event.preventDefault();
    this.setState({search: true});
  }

   render(){
        return (
        <div>
        <form onSubmit={this.submitButton}>
            <input type="text" value={this.state.searchWord} onChange={this.getWordHandler} />
            <input type="submit" />
        </form>
        <button type="button" onClick={()=>{this.setState({searchWord: initialState, search:false})}}>Clear</button>
        <div>
       {this.state.search ? (<SearchForMedicalDictionary id={this.state.searchWord} />) : "Please enter word to start a search"}
        </div>
        </div>)
   }  
}

export default MedicalDictionary;
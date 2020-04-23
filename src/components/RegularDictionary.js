import React from "react";
import SearchForRegular from "./SearchForRegular";


class RegularDictionary extends React.Component{
  constructor(props){
      super(props);
      this.state={
          searchWord:"",
          search: false
      }
      //.bind allows me to use input and submit
      this.getWordHandler=this.getWordHandler.bind(this);
      this.submitButton=this.submitButton.bind(this);
  }  

  getWordHandler(event){
      event.preventDefault(); //prevent default actions 
      this.setState({searchWord: event.target.value}) //setState to the value which user inputed 
  }
  submitButton(event){
    event.preventDefault(); //prevent default actions 
    this.setState({search: true}); //change search to true
    
  }

   render(){
        return (
        <div className="main-div-dictionaries">
        <form className="form-dictionaries"onSubmit={this.submitButton} >
            <input clssName="input-search-dictionaries" type="text" value={this.state.searchWord} onChange={this.getWordHandler} />
            <input className="submit-button-dictionaries" type="submit" />
        </form>
        {/* clear button will clear the state, put values to initial state in order to do a new search */}
        <button className="clear-button-dictionaries"  type="button" onClick={()=>{this.setState({searchWord: "", search:false})}}>Clear</button>
        <div>
        {/* by clicking submit button we are changing the state of search , when search is true we are calling 
        <SearchForMedicalDictionary /> and send the id as the word which user want to look for, 
        if the search is false just return the phrase */}
       {this.state.search ? (<SearchForRegular id={this.state.searchWord} />) : "Please enter word to start a search"}
        </div>
        </div>)
   }  
}

export default RegularDictionary;
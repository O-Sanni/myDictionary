import React from "react";
import SearchForMedicalDictionary from "./SerachForMedicalDictionary"



const initialState=""; //create global variable with initial state empty wtring to using it over again in my code

class MedicalDictionary extends React.Component{
  constructor(props){
      super(props);
      this.state={
          searchWord:initialState,
          search: false
      }
      //bind my button and input handler in order to use it and manipulate the state
      this.getWordHandler=this.getWordHandler.bind(this);
      this.submitButton=this.submitButton.bind(this);
  }  
  //wordHandler will update the state of the searchWord , the word which user want to search
  getWordHandler(event){
      event.preventDefault();
      this.setState({searchWord: event.target.value})
  }
  //submitButton function will setState 
  submitButton(event){
    event.preventDefault();// prevent restart of the page 
    this.setState({search: true}); //set search to true, thats means that user inputed value for search
  }

   render(){
        return (
        <div id="mainDivMedicalDictionary"> 
        <form onSubmit={this.submitButton}>
        {/* <input /> will have the event  value, such as word that user want to search*/}
            <input type="text" value={this.state.searchWord} onChange={this.getWordHandler} />
            <input type="submit" />
        </form>
        {/* clear button will clear the state, put values to initial state in order to do a new search */}
        <button type="button" onClick={()=>{this.setState({searchWord: initialState, search:false})}}>Clear</button>
        <div>
        {/* by cleaking submit button we are changing the state of search , when search is true we are calling 
        <SearchForMedicalDictionary /> and send the id as the word which user want to look for, 
        if the search is false just return the phrase */}
       {this.state.search ? (<SearchForMedicalDictionary id={this.state.searchWord} />) : "Please enter word to start a search"}
        </div>
        </div>)
   }  
}

export default MedicalDictionary;
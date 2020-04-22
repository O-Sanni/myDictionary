import React from "react";
import Translation from "./Translation";



const initialState="";

class TranslationPage extends React.Component{
  constructor(props){
      super(props);
      this.state={
          textTranslate: initialState,
          textInput: false,
          langToTranslate: "en"
      }
      this.handleTextTranslate=this.handleTextTranslate.bind(this);
      this.handleLanguage = this.handleLanguage.bind(this);
      this.submitButton=this.submitButton.bind(this);
  }  
  handleTextTranslate(event){
      event.preventDefault();
      this.setState({textTranslate: event.target.value})
  }
  handleLanguage(event){
      event.preventDefault();
      this.setState({langToTranslate})
  }
  submitButton(event){
    event.preventDefault();
    this.setState({textInput: true});
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

export default TranslationPage;
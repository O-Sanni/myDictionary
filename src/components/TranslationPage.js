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
      this.setState({langToTranslate: event.target.value})
  }
  submitButton(event){
    event.preventDefault();
    this.setState({textInput: true});
  }

   render(){
        return (
        <div>
        <form onSubmit={this.submitButton}>
            <input type="text" value={this.state.textTranslate} onChange={this.handleTextTranslate} />
        <label>
            Please choose language to translate
            <select value={this.state.value} onChange={this.handleLanguage}>
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="be">Belarusian</option>
              <option value="bn">Bengali</option>
             <option value="zh">Chinese</option> 
             <option value="nl">Dutch</option>
             <option value="fr">French</option>
              <option value="ka">Georgian</option>
               <option value="de">German</option>
              <option value="el">Greek</option>
              <option value="ht">Haitian (Creole)</option> 
             <option value="he">Hebrew</option> 
             <option value="hi">Hindi</option>
              <option value="hu">Hungarian</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>  
             <option value="kk">Kazakh</option> 
            <option value="ko">Korean</option>
             <option value="la">Latin</option>
              <option value="mn">Mongolian</option>
              <option value="no">Norwegian</option>
             <option value="fa">Persian</option>
              <option value="pl">Polish</option>
              <option value="pt">Portuguese</option>
               <option value="ru">Russian</option>
               <option value="es">Spanish</option>
            <option value="tg">Tajik</option>
              <option value="tr">Turkish</option>
              <option value="uz">Uzbek</option>
              <option value="uk">Ukrainian</option>
              <option value="vi">Vietnamese</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button type="button" onClick={()=>{this.setState({textTranslate: initialState, textInput: false})}}>Clear</button>
        <div>
       {this.state.textInput ? (<Translation text={this.state.textTranslate} language={this.state.langToTranslate} />) : "Please enter text to translate"}
       
        </div>
        </div>)
   }  
}

export default TranslationPage;
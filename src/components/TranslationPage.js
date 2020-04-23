import React from "react";
import Translation from "./Translation";


const initialState=""; //constant value to use within the code

class TranslationPage extends React.Component{
  constructor(props){
      super(props);
      this.state={
          textTranslate: initialState,
          textInput: false,
          langToTranslate: "en" //initial translation language to translate to is English
      }
      this.handleTextTranslate=this.handleTextTranslate.bind(this);
      this.handleLanguage = this.handleLanguage.bind(this);
      this.submitButton=this.submitButton.bind(this);
  }  
  //will setState for textTranslate
  handleTextTranslate(event){
      event.preventDefault();//prevent the default restart of the page when you enter text to translate
      this.setState({textTranslate: event.target.value}) //setState for the textTranslate
  }
  //will setState for languageToTranslate 
  handleLanguage(event){
      event.preventDefault(); //prevent default behavior after you choose language
      this.setState({langToTranslate: event.target.value})
  }
  //will setState textInput to true in order to make a translation
  submitButton(event){
    event.preventDefault();
    this.setState({textInput: true});
  }

   render(){
        return (
        <div>
        <form onSubmit={this.submitButton}>
            <textarea type="text" value={this.state.textTranslate} onChange={this.handleTextTranslate} />
        <label> 
        {/* <label> will hold the list of the availiable languages for translation */}
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
        {/* clear button will setState to initial values */}
        <button type="button" onClick={()=>{this.setState({textTranslate: initialState, textInput: false})}}>Clear</button>
        <div>
        {/* use ternary operator, if the textInput is true , if the user entered text and press submitt call <Translation /> 
        and send  language and text to Translations*/}
       {this.state.textInput ? (<Translation text={this.state.textTranslate} language={this.state.langToTranslate} />) : "Please enter text to translate"}
       
        </div>
        </div>)
   }  
}

export default TranslationPage;
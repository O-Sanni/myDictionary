import React from "react";
import axios from "axios";




class Translation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            translation: "",
        }
    }
    //getTranslationInfo will call axios.get to get a translation from the API and setState with the translation
    async getTranslationInfo(){
        const key=process.env.REACT_APP_TRANSLATION_API_KEY;
        try{
        let translated=await axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?lang=${this.props.language}&text=${this.props.text}&key=${key}`)
        this.setState({translation: translated.data});
        console.log(this.state.translation);
    }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getTranslationInfo();
    }
    //checkIfExist will check if user input text for translation and the this.state.translate not empty
    checkIfExist(){
        if (this.state.translation===""){
            return;
        }
        //if this.state.translation id not empty it will return translated text together with 
        //"Powered by Tandex.Translate", as was requested on the website
        else{
    return(
           <div id="div-transl-txt">
               <p id="p-trabslation-txt">{this.state.translation.text}</p>
               <div id="div-pow-by"><a href="http://translate.yandex.com">Powered by Yandex.Translate</a></div>
           </div>)
        }
    }
    render(){
        return(<div id="main-div-trasl">
        {/* will call checkifExists() function */}
       {this.checkIfExist()}
        </div>)
    }
}

export default Translation;

import React from "react";
import axios from "axios";




class Translation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            translation: "",
        }
    }
    async getWordInfo(){
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
        this.getWordInfo();
    }
    
    checkIfExist(){
        if (this.state.translation===""){
        
        }
        else{
    return(
           <div>
               <p>{this.state.translation.text}</p>
               <div><a href="http://translate.yandex.com">Powered by Yandex.Translate</a></div>
           </div>)
        }
    }
    render(){
        return(<div>
       {this.checkIfExist()}
        </div>)
    }
}

export default Translation;

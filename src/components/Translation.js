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
            return <p>Cannot translate</p>
        }
        else{
           
            // let gramFunction=this.state.wordInfo.fl;
            // gramFunction=gramFunction[0].toUpperCase()+gramFunction.slice(1);
            // let definition=this.state.wordInfo.shortdef.map((res,index)=>{
            //     return <p id={index+50}>{index+1}. {res}</p>})
            // let synonyms=this.state.wordInfo.meta.syns.map((res,index)=>{
                
            //     return ( <div id={index+30}>{index+1}. {res.join(", ")}</div> )
            // });
            // let antonyms=this.state.wordInfo.meta.ants.map((res,index)=>{
                
            //     return ( <div id={index+20}>{index+1}. {res.join(", ")}</div> )
            // });

            // return <div>
            //    <p>{this.state.wordInfo.meta.id.toUpperCase()}</p>
            //         <p>Gramatical Function: {gramFunction}</p>
            //          <h3>Definition(s):</h3>
            //         <div> {definition}</div>
            //         <h3>Synonyms:</h3>
            //         {synonyms}
            //         <h3>Antonyms:</h3>
            //         {antonyms}
                
              console.log(this.state.translation.text[0])   
            //  </div>
        }
    }
    render(){
        return(<div>
       {this.checkIfExist()}
        </div>)
    }
}

export default Translation;

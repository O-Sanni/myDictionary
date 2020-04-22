import React from "react";
import axios from "axios";


class Translation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            wordInfo: ""
        }
    }
    async getWordInfo(){
        const key=process.env.REACT_APP_API_KEY_THESAURUS;
        try{
        let getWord=await axios.get(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${this.props.id}?key=${key}`)
        this.setState({wordInfo: getWord.data[0]});
        console.log(this.state.wordInfo);
    }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getWordInfo();
    }
    
    checkIfExist(){
        if (this.state.wordInfo==="" || this.state.wordInfo.meta.id!=this.props.id || this.state.wordInfo==undefined || (typeof this.state.wordInfo!="object")){
            return <p>Word information not found</p>
        }
        else{
            let gramFunction=this.state.wordInfo.fl;
            gramFunction=gramFunction[0].toUpperCase()+gramFunction.slice(1);
            let definition=this.state.wordInfo.shortdef.map((res,index)=>{
                return <p id={index+50}>{index+1}. {res}</p>})
            let synonyms=this.state.wordInfo.meta.syns.map((res,index)=>{
                
                return ( <div id={index+30}>{index+1}. {res.join(", ")}</div> )
            });
            let antonyms=this.state.wordInfo.meta.ants.map((res,index)=>{
                
                return ( <div id={index+20}>{index+1}. {res.join(", ")}</div> )
            });

            return <div>
               <p>{this.state.wordInfo.meta.id.toUpperCase()}</p>
                    <p>Gramatical Function: {gramFunction}</p>
                     <h3>Definition(s):</h3>
                    <div> {definition}</div>
                    <h3>Synonyms:</h3>
                    {synonyms}
                    <h3>Antonyms:</h3>
                    {antonyms}
                
                   
             </div>
        }
    }
    render(){
        return(<div>
       {/* {this.checkIfExist()} */}
        </div>)
    }
}

export default SearchForRegular;

import React from "react";
import axios from "axios";


class SearchForRegular extends React.Component{
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
                return <p className="class-definitions" id={"difitition-regular-id-"+index}>{index+1}. {res}</p>})
            let synonyms=this.state.wordInfo.meta.syns.map((res,index)=>{  
                return ( <p className="p-synonyms-class" id={"div-synonyms-"+index+30}>{index+1}. {res.join(", ")}</p> )
            });
            let antonyms=this.state.wordInfo.meta.ants.map((res,index)=>{
                return ( <p id={"p-antonyms"+index}>{index+1}. {res.join(", ")}</p> )
            });

            return <div>
               <p id="p-word-name">{this.state.wordInfo.meta.id.toUpperCase()}</p>
                    <p id="p-gram-func">Gramatical Function: {gramFunction}</p>
                     <h3 id="h3-def-regular">Definition(s):</h3>
                    <div id="div-def-regular"> {definition}</div>
                    <h3 id="h3-synonyms-regular">Synonyms:</h3>
                    {synonyms}
                    <h3 id="h3-antonyms-regular">Antonyms:</h3>
                    {antonyms}
                
                   
             </div>
        }
    }
    render(){
        return(
        <div className="main-div-dictionaries">
       {this.checkIfExist()}
        </div>)
    }
}

export default SearchForRegular;

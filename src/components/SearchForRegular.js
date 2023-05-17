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
    }
        catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.getWordInfo();
    }
    
    checkIfExist(){
        if (this.state.wordInfo===undefined) {
            return <p className="p-word-not-found">Word information not found</p>
        }
        else if (this.state.wordInfo.meta===undefined || this.state.wordInfo==="" || this.state.wordInfo.meta.id!==this.props.id || (typeof this.state.wordInfo!=="object")){
            return <p className="p-word-not-found">Word information not found</p>
        }
        else{
            let gramFunction=this.state.wordInfo.fl;
            gramFunction=gramFunction[0].toUpperCase()+gramFunction.slice(1);
            let definition=this.state.wordInfo.shortdef.map((res,index)=>
            {
                return <p className="class-definitions-regular" id={"difitition-regular-id-"+index}>{index+1}. {res}</p>
            });
            let synonyms=this.state.wordInfo.meta.syns.map((res,index)=>
            {  
                return ( <p className="p-synonyms-class" id={"div-synonyms-"+index+30}>{index+1}. {res.join(", ")}</p> )
            });
            let antonyms=this.state.wordInfo.meta.ants.map((res,index)=>
            {
                return ( <p className="p-antonyms-class" id={"p-antonyms"+index}>{index+1}. {res.join(", ")}</p> )
            });

            return <div className="info-div-dictionaries">
                        <p id="p-word-name-regular">{this.state.wordInfo.meta.id.toUpperCase()}</p>
                        <p id="p-gram-func-regular">Gramatical Function: {gramFunction}</p>
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

import React from "react";
import axios from "axios";


class SearchForMedicalDictionary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            wordInfo: ""
        }
    }
    async getWordInfo(){
        const key=process.env.REACT_APP_MEDICAL_API_KEY;
        try{
        let getWord=await axios.get(`https://dictionaryapi.com/api/v3/references/medical/json/${this.props.id}?key=${key}`)
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
        if (this.state.wordInfo==="" || this.state.wordInfo.meta.id!=this.props.id || this.state.wordInfo==undefined ||(typeof this.state.wordInfo!="object")){
            return <p>Word information not found</p>
        }
        else{
            let gramFunction=this.state.wordInfo.fl;
            gramFunction=gramFunction[0].toUpperCase()+gramFunction.slice(1);
            let info=this.state.wordInfo.shortdef.map((res,index)=>{
                return <p id={index+10}>{index+1}. {res}</p>})
            return <div>
                    <p>{this.state.wordInfo.meta.id.toUpperCase()}</p>
                    <p>Pronunciation: [{this.state.wordInfo.hwi.prs[0].mw}]</p>
                    <p>Gramatical Function: {gramFunction}</p>
                    <p>Definition(s):</p>
                    <div> {info}</div>
                   
                  </div>
        }
    }
    render(){
        return(<div>
       {this.checkIfExist()}
        </div>)
    }
}

export default SearchForMedicalDictionary;

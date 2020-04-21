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
        const key=process.env.REACT_APP_API_KEY_MEDICAL_DICTIONARY;
        try{
        let getWord=await axios.get(`https://www.dictionaryapi.com/api/v3/references/medical/json/${this.props}?key=${key}`)
        this.setState({wordInfo: getword})
    }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getWordInfo();
    }
    
    render(){
        return()
    }
}

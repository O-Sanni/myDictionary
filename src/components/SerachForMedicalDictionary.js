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
        let getWord=await axios.get
    }
    componentDidMount(){
        this.getWordInfo();
    }
    
    render(){
        return()
    }
}

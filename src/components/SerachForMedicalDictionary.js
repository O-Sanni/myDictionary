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
        this.setState({wordInfo: getWord});
        console.log(this.state.wordInfo.data[0]);
    }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getWordInfo();
    }
    
    render(){
        return(<div>
            Hello
        </div>)
    }
}

export default SearchForMedicalDictionary;

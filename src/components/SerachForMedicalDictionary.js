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
        console.log(this.state.wordInfo.shortdef);
    }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getWordInfo();
    }
    checkIfExist(){
        if (this.state.wordInfo===""){
            return <p>Word information not found</p>
        }
        else{
            let info=this.state.wordInfo.shortdef.map((res,index)=>{
                return <p>{index+1}. {res}</p>})
            return <div>
                    <p>{this.state.wordInfo</p>
                 {info}
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

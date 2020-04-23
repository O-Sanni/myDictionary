import React from "react";
import axios from "axios";


class SearchForMedicalDictionary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            wordInfo: ""
        }
    }
    //call async function to obtain the information from API
    async getWordInfo(){
        //set the const value key which will hold the valuwe of the API Key located in .env
        const key=process.env.REACT_APP_MEDICAL_API_KEY;
        try{
        //getWord will hold the return value from specific API, i will call to this API using await axios
        let getWord=await axios.get(`https://dictionaryapi.com/api/v3/references/medical/json/${this.props.id}?key=${key}`)
       //setState to hold the data which was returned from API
        this.setState({wordInfo: getWord.data[0]});      
    }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getWordInfo();
    }
    //checkIfExist so it would check if the state is empty or the search results meet specific creteria before return the 
    //result to user
    checkIfExist(){
        //check if wordInfo state empty, or it does not much user search, or it undefined or it is not a string
        //if so it would return the <p> with specific text
        if (this.state.wordInfo==="" || this.state.wordInfo.meta.id!=this.props.id || this.state.wordInfo==undefined ||(typeof this.state.wordInfo!="object")){
            return <p>Word information not found</p>
        }
        else{
            let gramFunction=this.state.wordInfo.fl; //hold gramatical function for word
            gramFunction=gramFunction[0].toUpperCase()+gramFunction.slice(1); //make the first letter of gramatical function of the word Capital
            let info=this.state.wordInfo.shortdef.map((res,index)=>{ //will map thrue a wordInfo.shortdef to return all the definitions of the word
                return <p className="class-definitions" id={"difitition-medical-id-"+index}>{index+1}. {res}</p>}) //return separate <p> for each definition
            return <div>
            {/* print search word in upper cases */}
                    <p>{this.state.wordInfo.meta.id.toUpperCase()}</p> 
                    {/* print the pronunciation of the word */}
                    <p>Pronunciation: [{this.state.wordInfo.hwi.prs[0].mw}]</p>
                    {/* print gramatical FUnction of the word */}
                    <p>Gramatical Function: {gramFunction}</p>
                    {/* print separate <div> with definitions */}
                    <p>Definition(s):</p>
                    <div> {info}</div>
                   
                  </div>
        }
    }
    render(){
        return(<div className="main-div-dictionaries">
        {/* call checkIfExist function and return the result */}
       {this.checkIfExist()}
        </div>)
    }
}

export default SearchForMedicalDictionary;

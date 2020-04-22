import React from "react";
import SearchForRegular from "./SearchForRegular";


class RegularDictionary extends React.Component{
  constructor(props){
      super(props);
      this.state={
          searchWord: ""
      }
      this.getWordHandler=this.getWordHandler.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
  }  
  getWordHandler
   render(){
        return (
        <div>
         <SearchForRegular id={this.searchWord}/>
        </div>)
   }  
}

export default RegularDictionary;
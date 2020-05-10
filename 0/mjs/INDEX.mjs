import { html, Component, render, useState} from '../common/standalone.module.js';


import {STORE} from './STORE.mjs';
import {ALL} from './ALL.mjs';
 

/*
const objJourneysO = {
   "0":
      {   
      text: "앱 개발해서 수익 얻기"
      ,tags: ["webDev", "webDesign", "ui", "dataViz"]
      ,id: "0"
      }
   ,"1":
      {   
      text: "로고 디자인으로 수익 얻기"
      ,tags: ["logo", "webDesign"]
      ,id: "1"
      }
   ,"2":
      {   
      text: "적정 체중, 건강"
      ,tags: ["life", "fashion"]
      ,id: "2"
      }
   };
*/

/* components */
class file extends Component {
 
constructor(props) {
     super(props);
     
   this.state = {
  
  /*saveObjGoals: this._saveObjGoals, */
  
  objJourneys: {}
       
  
     };/* this.state */
     
   
} /* constructor */
   
   

componentDidMount() {
    const valFromLocalStorage = JSON.parse(localStorage.getItem("objJourneys")) || this.state.objJourneys;
    this.setState({ objJourneys: valFromLocalStorage })
}


 
render() {
     return html`
<${STORE.Provider} value=${this.state}>
         <${ALL} />
<//>
       `
   }
 }


function useSortable() {
   var el = document.getElementById('listJn');
var sortable = Sortable.create(el, {
	handle: ".iconMove"
});

}


function init() {
  /*loadListWebsite();*/
  render(html`<${file}/>`, document.getElementById("root"));
  
  useSortable();
}
  

init();




   

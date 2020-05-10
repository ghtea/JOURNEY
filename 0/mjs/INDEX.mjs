import { html, Component, render, useState} from '../common/standalone.module.js';

import {STORE} from './STORE.mjs';
import {ALL} from './ALL.mjs';
 
 
/* components */
class file extends Component {
 
 constructor(props) {
     super(props);
     
     
     /*
     
     this._saveObjGoals = () => {
       
         this.setState({
           message: "Bye bye"
         });

     };  this._saveObjGoals */
   
   
     
this.state = {
  
  /*saveObjGoals: this._saveObjGoals, */
  
  objJourneys: {
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
            
   }
       

  
     };/* this.state */
     
     
   } /* constructor */

 
 
 
  render() {
     return html`
<${STORE.Provider} value=${this.state}>
         <${ALL} />
<//>
       `
   }
 }

/*
       <${STORE.Provider} value=${this.state}>
         <${ALL} />
       <//>
*/



function init() {
  /*loadListWebsite();*/
  render(html`<${file}/>`, document.getElementById("root"));
}

init();




   

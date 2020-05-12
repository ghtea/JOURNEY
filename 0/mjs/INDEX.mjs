import { html, Component, render, useState} from '../common/standalone.module.js';


import {STORE} from './STORE.mjs';
import {ALL} from './ALL.mjs';
 


/* components */
class file extends Component {
 
constructor(props) {
   super(props);
     
   /* functions */
   
   /* 하나라도 열러있는지 반환 */
this._checkTfFocusedAny = () => {
   
   this.setState(prevState => ({
    ...prevState,           
    tfFocusedAny: false      
   }))
      
      Object.keys(this.state.objJourneys).map(key => {
    
   
   if (this.state.objJourneys[key]["tfOpen"] === true) {
   
   this.setState(prevState => ({
    ...prevState,           
    tfFocusedAny: true      
   }))
   
   } 
      
   });


}
   
   
   this._toggleOpenJn = (event, id) => {
   let { objJourneys } = this.state;
   objJourneys[id]["tfOpen"] = !objJourneys[id]["tfOpen"];
   
   this.setState(prevState => ({
    ...prevState,           
    objJourneys: objJourneys      
   }))
   
   this._checkTfFocusedAny();
   
   
 }
 
   
this._toggleCreating = (event) => {
   let { tfCreating } = this.state;
   tfCreating = !tfCreating;
   
   this.setState(prevState => ({
    ...prevState,           
    tfCreating: tfCreating      
   }))
}
   
   
   
this._storeObjJourneys = (newValue) => {
   
   this.setState(prevState => ({
    ...prevState,           
    objJourneys: newValue      
   }))
   localStorage.setItem("objJourneys", JSON.stringify(newValue));
   
} /* this._storeObjJourneys */



   
   
/* https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react */
this._storeObjListMissions = (newValue) => {
   
   this.setState(prevState => ({
    ...prevState,           
    objListMissions: newValue      
   }))
   localStorage.setItem("objListMissions", JSON.stringify(objListMissions));
   
} /* this._storeObjListMissions */



     
   this.state = {
  
   objJourneys: {}
   , storeObjJourneys: this._storeObjJourneys
   
   , objListMissions: {}
   , storeObjListMissions: this._storeObjListMissions
   
   , toggleOpenJn: this._toggleOpenJn
   
   , tfFocusedAny: false
   , checkTfFocusedAny: this._checkTfFocusedAny
   
   , tfCreating: false
   , toggleCreating: this._toggleCreating
  
     };/* this.state */
     
   
} /* constructor */
   
   

componentDidMount() {
    const valFromLocalStorage = JSON.parse(localStorage.getItem("objJourneys")) || this.state.objJourneys;
    
    
   this.setState(prevState => ({ 
    ...prevState
    ,objJourneys: valFromLocalStorage 
      
   }));


   
   /* 전부 안보이게 */
   setTimeout(()=> {
   Object.keys(this.state.objJourneys).map(
      key => {
  
this.setState(prevState => ({
   ...prevState
   ,objJourneys: {
        ...prevState.objJourneys
        ,[key]: {
            ...prevState.objJourneys[key]
            ,tfOpen: false
        }
    }
})) 
   
      }) /* map */
      
   }, 10);
   
      
      
} /* componentDidMount */


 
render() {
     return html`
<${STORE.Provider} value=${this.state}>
         <${ALL} />
<//>
       `
   }
 }


function useSortable() {
   var el = document.getElementsByClassName('listJn')[0];
var sortable = Sortable.create(el, {
	handle: ".divMoveJn"
});

}


function init() {
  /*loadListWebsite();*/
  render(html`<${file}/>`, document.getElementById("root"));
  
  useSortable();
}
  

init();




   

import { html, Component, render, useState} from '../common/standalone.module.js';


import {STORE} from './STORE.mjs';
import {ALL} from './ALL.mjs';
 


/* components */
class file extends Component {
 
constructor(props) {
   super(props);
     
   /* functions */
   this._toggleOpenJn = (event, id) => {
   let { objJourneys } = this.state;
   objJourneys[id]["tfOpen"] = !objJourneys[id]["tfOpen"];
   this.setState({
    objJourneys
   });
 }
   
   this._toggleCreating = (event) => {
   let { tfCreating } = this.state;
   tfCreating = !tfCreating;
   this.setState({
    tfCreating
   });
   }
   
   
   
   

   this._storeObjJourneys = (newValue) => {
   let { objJourneys } = this.state;
   
   this.setState({
    objJourneys: newValue
   });
   localStorage.setItem("objJourneys", JSON.stringify(objJourneys));
   
   } /* this._storeObjJourneys */
   
   
   
   this._storeObjListMissions = (newValue) => {
   let { objListMissions } = this.state;
   
   this.setState({
    objListMissions: newValue
   });
   localStorage.setItem("objListMissions", JSON.stringify(objListMissions));
   
   } /* this._storeObjListMissions */


     
   this.state = {
  
   objJourneys: {}
   , storeObjJourneys: this._storeObjJourneys
   
   , objListMissions: {}
   , storeObjListMissions: this._storeObjListMissions
   
   , toggleOpenJn: this._toggleOpenJn
   
   , tfCreating: false
   , toggleCreating: this._toggleCreating
  
     };/* this.state */
     
   
} /* constructor */
   
   

componentDidMount() {
    const valFromLocalStorage = JSON.parse(localStorage.getItem("objJourneys")) || this.state.objJourneys;
    
    this.setState(prevState => 
    ({ objJourneys: valFromLocalStorage })
    )
    
    
   /* 전부 안보이게 */Object.keys(this.state.objJourneys).map(
      key => {
   
this.setState(prevState => ({
    objJourneys: {
        ...prevState.objJourneys,
        [key]: {
            ...prevState.objJourneys[key],
            tfOpen: false
        }
    }
}))


      }
    ) /* map */
    
    
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




   

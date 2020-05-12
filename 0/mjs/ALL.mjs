import { html, Component, render, useState} from '../common/standalone.module.js';


import {STORE} from './STORE.mjs';
import {Journey} from './0/Journey.mjs'; 

import {Create, Show, X, Plus} from '../svg/basicIcons.mjs';

/*
import {ItemWebsite} from './0/ItemWebsite.mjs';
*/


function ALL() {
  
  
  
  
function addJn(event, objJourneysBefore, storeObjJourneys) {
   /*event.stopPropagation();*/
   const inputTitleJn = document.querySelector(".inputTitleJn");
   
   if (inputTitleJn.value !=="") {
   
   const objJn = {
    title: inputTitleJn.value,
    id: (Date.now()).toString(),
  };
  

  objJourneysBefore[objJn["id"]] = objJn;
  
  const newValue = objJourneysBefore;
  
  storeObjJourneys(newValue);
  
  
  /* 비우기 */
  inputTitleJn.value="";
  }
}
  
  
  
  
  
  
  
  return html`

  <${STORE.Consumer}>
${STORE => html`

<div class="header">
  

${STORE["tfCreating"] ? html`

  <div 
  class="divCancelJn"
  onClick=${(event)=> STORE["toggleCreating"](event)}
  >
      <${X} />
  </div>

  <div 
  class="groupInputCreatingJn"
  >
  
    <input class="inputTitleJn" type="text" placeholder="title" />

  </div>
  
   
  <div 
  class="divAddJn"
  onClick=${(event)=> addJn(event, STORE["objJourneys"], STORE["storeObjJourneys"])}
  >
      <${Plus} />
    </div>
` 

: html`

  <div class="">
  </div>
  
  <div class="title">
    Journeys
  </div>

  <div 
  class="divCreateJn"
  onClick=${(event)=> STORE["toggleCreating"](event)}
  >
      <${Create} />
  </div>
`
}

</div>


<div class="listJn">

${ Object.keys(STORE["objJourneys"]).map(key=>  html`

<${Journey}
  id=${STORE["objJourneys"][key]["id"]} 

  title=${STORE["objJourneys"][key]["title"]} 
   
  tfOpen=${STORE["objJourneys"][key]["tfOpen"]} 
  
  tfFocusedAny=${STORE["checkTfFocusedAny"]();}
/>


`)}
</div>



`}
  <//>
  
`
}


export {ALL};
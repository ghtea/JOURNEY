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
  
  
  function printDate () {
    let d = new Date();
    let day;
    
    if (d.getMonth() == 0) {
      day ="SUN"}
    else if (d.getMonth() == 1) {
      day ="MON"}
    else if (d.getMonth() == 2) {
      day ="TUE"}
    else if (d.getMonth() == 3) {
      day ="WED"}
    else if (d.getMonth() == 4) {
      day ="THU"}
    else if (d.getMonth() == 5) {
      day ="FRI"}
    else if (d.getMonth() == 6) {
      day ="SAT"}
      
    
    return html`
      
    <div> ${d.getMonth()+1} / ${d.getDate()} </div>
    
    <div>
      ${day}
    </div>
      
    `
  }
  
  
  
  
  return html`

  <${STORE.Consumer}>
${STORE => html`

<div class="header">
  

${!STORE["tfCreating"] 

? html`

  <div class="date">
    ${printDate()}
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

: html`

  <div 
  class="divCancelJn"
  onClick=${(event)=> STORE["toggleCreating"](event)}
  >
      <${X} />
  </div>


  <div 
  class="groupInputCreatingJn"
  >
  
    <input class="inputTitleJn" type="text" placeholder="journey title" />

  </div>
  
   
  <div 
  class="divAddJn"
  onClick=${(event)=> addJn(event, STORE["objJourneys"], STORE["storeObjJourneys"])}
  >
      <${Plus} />
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
  
  tfFocusedAny=${STORE["tfFocusedAny"]}
/>


`)}
</div>



`}
  <//>
  
`
}


export {ALL};
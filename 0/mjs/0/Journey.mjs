import { html, Component, render, useState} from '../../common/standalone.module.js';

import {STORE} from '../STORE.mjs';
import {Show, Move, Edit, X, Plus, Create} from '../../svg/basicIcons.mjs';



function listMission() {

  const [tfCreatingMission, setCreatingMission] = useState(false);
  
  function startCreatingMission(event) {
   setCreatingMission(true);
}

  return html`

<div class="listMission">


  <div class="headerMs"> 
  
  ${!tfCreatingMission ? html`
  <div> </div>
  
    <div class="titleEntireMs"
      > Missions </div>
    
    <div
  class="divCreateMs"
  onClick=${(event)=> startCreatingMission(event)}
  > <${Create} /> </div>

  `
  : html`
  
    <div> exit </div>
    
    <div>
    <input class="inputTitleMs" type="text" placeholder="new mission" />
    </div>
    
    <div> add </div>
  
  
  `}
  </div>
  
  
  
  <div class="mission">
  <div> <${Move} /> </div>
  
  <div
  class="titleMs"
  > work hard  </div>
  
  <div> <${Edit} /> </div>
  </div>
  
  
  
  </div>
  `
}



function Journey({id, title, tfOpen, tfFocusedAny}) {
  
  let displayJn;
  if (!tfOpen && tfFocusedAny) {
    displayJn = "none";
  }
  else {
    displayJn = "flex";
  }
  
  return html`

    <${STORE.Consumer}>
${STORE => html`


  <div 
  class="journey"
  style="display:${displayJn};"
  >
  
  
<div class="partBasicJn">
  
  
  <div class="divMoveJn">
    <${Move} />
  </div>
    
  <div 
  class="titleJn"
  onClick=${(event)=> STORE["toggleOpenJn"](event, id)}
  >${title}</div>
  
  <div
    class="divEditJn"
    > <${Edit}/> 
  </div>
  
  <div 
    class="divShow"
    onClick=${(event)=> STORE["toggleOpenJn"](event, id)}
    > 
      <${Show} degree=${tfOpen ? 180 : 90}/>
  </div>
  
  
  <div class="numDoneMissionJn">
  1 done
  </div>
  
  <div class="numLeftMissionJn">
  1 left
  </div>
  
</div>

${tfOpen ? html` 
  <${listMission} />
  `
  : html ``}


</div>
  
  
  `}
  
  <//>
`}


export {Journey};

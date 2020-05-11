import { html, Component, render, useState} from '../../common/standalone.module.js';

import {STORE} from '../STORE.mjs';
import {Show, Move} from '../../svg/basicIcons.mjs';


function Journey({id, title, tfOpen}) {

  const [tfCreatingMission, setCreatingMission] = useState(false);
  
  function startCreatingMission(event) {
  console.log("hi");
   setCreatingMission(true);
}
  
  
  return html`

  <${STORE.Consumer}>
${STORE => html`

<div 
  class="journey"
  data-focus="${tfOpen ? "yes" : "no"}"
  >
  
  
  <div class="divMove">
    <${Move} />
  </div>
    
  <div 
  class="titleJn"
  onClick=${(event)=> STORE["toggleOpenJn"](event, id)}
  >${title}</div>
  
  <div 
    class="divShow"
    onClick=${(event)=> STORE["toggleOpenJn"](event, id)}
    > 
      <${Show} degree=${tfOpen ? 180 : 90}/>
  </div>
  
  <div class="statusJn">
  ongoing
  </div>
  
  <div class="numMissionJn">
  1 completed
  </div>
  
  
</div>

${tfOpen ? html`
<div class="detailsJn">
  <div> delete </div>
  
  <div
  onClick=${(event)=> startCreatingMission(event)}
  > add mission </div>
  
  <div> edit </div>
</div>

<div class="listMission">

  ${tfCreatingMission ? html`
  <div class="">
      <input class="inputTitleMs" type="text" placeholder="title" />
  </div>
  `
  : html ``}
  
  
  <div> work </div>
  <div> eat </div>
  <div> sleep </div>
</div>
` 
: html``
}


`}
  <//>
`

}


export {Journey};

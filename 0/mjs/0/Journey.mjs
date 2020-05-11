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
  
<div class="partBasicJn">
  
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
  
  <div class="numDoneMissionJn">
  1 done
  </div>
  
  <div class="numLeftMissionJn">
  1 left
  </div>
  
  
</div> <!-- .basicJn -->

  ${tfOpen ? html`
<div class="partDetailsJn">
  <div> edit </div>

  <div
  onClick=${(event)=> startCreatingMission(event)}
  > create mission </div>
  
  <div> delete </div>
</div> <!-- detailsJn -->
  `
  : html`
  
  `}
  
  
</div> <!-- .journey -->

${tfOpen ? html`

<div class="listMission">

  ${tfCreatingMission ? html`
  <div class="">
  
    <div> exit </div>
    <input class="inputTitleMs" type="text" placeholder="title" />
    <div> add </div>
    
  </div>
  `
  : html ``}
  
  <div>
  <div> edit </div>
  
  <div
  class="titleMs"
  > - work </div>
  
  <div> delete </div>
  </div>
  
</div> <!-- listMission -->
` 
: html``
}


`}
  <//>
`

}


export {Journey};

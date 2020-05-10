import { html, Component, render, useState} from '../../common/standalone.module.js';

import {STORE} from '../STORE.mjs';
import {Show, Move} from '../../svg/basicIcons.mjs';


function Journey({id, text, tags, tfOpen}) {


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
  >${text}</div>
  
  <div 
    class="divShow"
    onClick=${(event)=> STORE["toggleOpenJn"](event, id)}
    > 
      <${Show} degree=${tfOpen ? 180 : 90}/>
  </div>
  
  <div class="tagsJn">
  
${tags.map(tag => html`
  <div class="tagJn">
    ${tag}
  </div>
`)}
  
  </div>
  
  
</div>

${tfOpen ? html`
<div class="detailsJn">
  <div> delete </div>
  <div> add MISSION </div>
  <div> edit </div>
</div>

<div class="listMission">
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

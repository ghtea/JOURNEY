import { html, Component, render, useState} from '../common/standalone.module.js';


import {STORE} from './STORE.mjs';
import {Journey} from './0/Journey.mjs'; 

import {Create, Show} from '../svg/basicIcons.mjs';

/*
import {ItemWebsite} from './0/ItemWebsite.mjs';
*/


function MAIN({
forceRerender
}) {
  
  return html`

  <${STORE.Consumer}>
${STORE => html`

<div class="header">
  <div 
  class="divCreate"
  onClick=${(event)=> STORE["toggleCreating"](event)}
  >
      <${Create} />
    </div>


${STORE["tfCreating"] ? html`
  <div 
  class="creating"
  >
    creating
  </div>
` 
: html`
  <div class="title">
    Journeys
  </div>
`
}

    <div class="divShowAll">
      <${Show} 
        degree=${180}
      />
    </div>

</div>

<div id="listJn">


${ Object.keys(STORE["objJourneys"]).map(key=>  html`

<${Journey}
  id=${STORE["objJourneys"][key]["id"]} 

  text=${STORE["objJourneys"][key]["text"]} 
  
  tags=${STORE["objJourneys"][key]["tags"]} 
  
  tfOpen=${STORE["objJourneys"][key]["tfOpen"]} 
  
  
/>

`)}
</div>



`}
  <//>
  
`
}


export {MAIN};

/*

  <${STORE.Consumer}>
${STORE => html`
               
<div       
  onClick=${STORE.changeMessage}>
  click here
</div>

<div>
  ${STORE.message}
</div>

`}
  <//>

*/



/*

${ Object.keys(STORE["objGoals"]).map(key => html`

<${Goal}
  text=${STORE["objGoals"][key]["text"]} 
/>

`
);
}

*/

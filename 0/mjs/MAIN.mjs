import { html, Component, render, useState} from '../common/standalone.module.js';

import {STORE} from './STORE.mjs';
import {Journey} from './0/Journey.mjs'; 

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
  Journeys
</div>

<div class="listJn">


${ Object.keys(STORE["objJourneys"]).map(key=>  html`

<${Journey}
  text=${STORE["objJourneys"][key]["text"]} 
  
  tags=${STORE["objJourneys"][key]["tags"]} 
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

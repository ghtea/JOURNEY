import { html, Component, render, useState} from '../common/standalone.module.js';

import {STORE} from './STORE.mjs';

/*
import {ItemWebsite} from './0/ItemWebsite.mjs';
*/


function MAIN({
forceRerender
}) {


  return html`
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
`
}


export {MAIN};




   

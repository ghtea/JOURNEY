import { html, Component, render, useState} from '../common/standalone.module.js';

import {STORE} from './STORE.mjs';
import {MAIN} from './MAIN.mjs';

 
 
/* components */
function ALL() {

  const [numRerender, setRerender] = useState(0);
  
  function forceRerender() {
   setRerender(numRerender + 1);
  }
  
  /*
  function storeListWebsite() {
localStorage.setItem("listWebsite", JSON.stringify(listWebsite));
  }
  */
  
  

  return html`
<${MAIN}  
forceRerender=${forceRerender}
  />
  `
}
/*
storeListWebsite=${storeListWebsite}

<${MAIN}  
forceRerender=${forceRerender}
  />
*/

export {ALL}

   

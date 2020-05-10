import { html, Component, render, useState} from '../../common/standalone.module.js';

import {Show, Move} from '../../svg/basicIcons.mjs';


function Journey({text, tags}) {


  return html`

<div class="journey">
  
  
  <div class="divMove">
    <${Move} />
  </div>
    
  <div class="titleJn">${text}</div>
  
  <div class="divShow"> 
      <${Show} degree=${180}/>
  </div>
  
  <div class="tagsJn">
  
${tags.map(tag => html`
  <div class="tagJn">
    ${tag}
  </div>
`)}
  
  </div>
  
  
</div>


`
}


export {Journey};

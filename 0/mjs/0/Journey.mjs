import { html, Component, render, useState} from '../../common/standalone.module.js';



function Journey({text, tags}) {


  return html`

<div class="journey">
  
  
  <div class=""></div>
  
  <div class="titleJn">${text}</div>
  
  <div class="btnsJn"> </div>
  
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

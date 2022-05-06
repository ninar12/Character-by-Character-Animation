const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
  .line-1{
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
  }

  .anim-typewriter{
    animation: typewriter 4s steps(44) 1s 1 normal both,
              blinkTextCursor 500ms steps(44) infinite normal;
  }
  @keyframes typewriter{
    from{width: 0;}
    to{width: 100%;}
  }
  @keyframes blinkTextCursor{
    from{border-right-color: rgba(255,255,255,.75);}
    to{border-right-color: transparent;}
  }
  </style>
  <div>
  <p class="line-1 anim-typewriter">Default</p>
  </div>`

class CharByChar extends HTMLElement {
  constructor(){
    super();
    
} 

  async connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(headerTemplate.content);
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('p').innerHTML=this.text;

    console.log(this.text);
    
    }
  get text() {
    const linesAttr = this.getAttribute('text');
    return linesAttr;
   }

}


window.customElements.define('char-by-char', CharByChar);

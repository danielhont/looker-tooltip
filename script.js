// https://developers.google.com/looker-studio/visualization/get-started

function drawViz(data, config, element) {
    // inner html for  structure
    element.innerHTML = `
      <div class="tooltip-container">
        <span class="icon">?</span>
        <span class="tooltip-text">Your explanation goes here. Provide details, metrics definitions, etc.</span>
      </div>
    `;
  
    // styl
    const style = document.createElement('style');
    style.textContent = `
      .tooltip-container {
        position: relative;
        display: inline-block;
        cursor: help;
        font-family: sans-serif; /* Just a basic font setting */
      }
  
      .icon {
        background: #eee;
        border-radius: 50%;
        padding: 4px 8px;
        font-weight: bold;
      }
  
      .tooltip-text {
        visibility: hidden;
        width: 200px;
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 8px;
        border-radius: 4px;
        position: absolute;
        bottom: 125%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 1;
      }
  
      .tooltip-container:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
      }
    `;
    element.appendChild(style);
  }
  
  //  drawViz to dsCC.render --> Looker then know how to render the tooltip
  window.dsCC = {
    render: drawViz
  };
  
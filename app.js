const textWidth  = document.querySelector("#hooff");
const rangeWidth = document.querySelector("#rangeh");
const rangeVertical = document.querySelector('#rangeV')
const blur = document.querySelector("#Blur");
const Spread = document.querySelector("#Spread");
const element = document.querySelector(".box");
const radius = document.querySelector("#radius");
const Height = document.querySelector("#Height");
const width = document.querySelector("#width");
const paragraph = document.querySelector(".section-text-car")

blur.addEventListener('click', (e)=>{
  alert('the Blur radius section causes a lot of lag be careful with that control')
});

rangeWidth.addEventListener("input", (e)=>{
element.style.boxShadow = `${e.target.value}px 0px 0px 0px `;

rangeVertical.addEventListener('input', (f)=>{
  element.style.boxShadow = `${e.target.value}px ${f.target.value}px 0px 0px`;

  blur.addEventListener('input', (g)=>{
    element.style.boxShadow = `${e.target.value}px ${f.target.value}px ${g.target.value}px 0px`;
    console.log(g)
    Spread.addEventListener('input', (h)=>{
      element.style.boxShadow = `${e.target.value}px ${f.target.value}px ${g.target.value}px ${h.target.value}px`;
        // paragraph.addEventListener('input', (e)=>{
        //   paragraph.innerHTML = `
        //   <p class="txt-shadow">box-shadow: ${e.target.value}px ${f.target.value}px ${g.target.value}px ${h.target.value}px rgba(0,0,0,0.1); </p>
        //   `
        // });
        // paragraph.addEventListener('input', (i)=>{
        //   paragraph.innerHTML = `
        //   <p class="txt-shadow">box-shadow: ${e.target.value}px ${f.target.value}px ${g.target.value}px ${h.target.value}px rgba(0,0,0,0.1);</p>
        //   `
        //   console.log(paragraph)
        // });
        
      });
    });
  });
});


radius.addEventListener('input', (e) => {
  element.style.borderRadius = `${e.target.value}px`;
});

Height.addEventListener('input', (e)=>{
  element.style.height = `${e.target.value}px`
});

width.addEventListener('input', (e)=>{
  element.style.width = `${e.target.value}px`
});



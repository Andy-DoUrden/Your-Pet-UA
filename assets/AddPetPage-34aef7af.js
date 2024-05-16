import{v as y,b as K,a as he,j as e,h as d,s as x,r as b,S as ue,U as ge,C as fe}from"./index-136e797c.js";import{a as m,c as F,b as j,e as $,F as I,E as u,d as Q,g as be}from"./index.esm-4d95240f.js";const q=y(m)`
  display: none;
`,je=y.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  position: relative;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  color: var(--clr-brand-blue);

  margin-bottom: 88.35px;

  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 137.1px;
  }

  & > label {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 35px;
    width: fit-content;
    padding: 8px 16px;
    border-radius: 40px;
    background-color: var(--clr-brand-blue-lt);
    border: 3px solid var(--clr-brand-blue-lt);
    transition:
      scale 0.3s,
      background-color 0.3s,
      border-color 0.2s,
      color 0.3s;
    cursor: pointer;

    &:hover {
      border-color: var(--clr-brand-blue);
    }

    &:active {
      scale: 0.9;
    }
  }

  & input[type='radio']:checked + label {
    background-color: var(--clr-brand-blue);
    border-color: var(--clr-brand-blue);
    color: var(--clr-primary-inv);
  }
`,ye=y.p`
  position: absolute;
  bottom: -20px;
  left: 10px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);

  @media (min-width: 768px) {
    font-size: 12px;
    bottom: -20px;
  }
`,B="24px",H="24px",ve=y.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100% - 68px);

  @media (min-width: 768px) {
    min-height: calc(100% - 92px);
  }

  @media (min-width: 768px) {
    min-height: calc(100% - 88px);
  }
`,we=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 40px;
  background-color: var(--clr-bcg);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 16px 8px;
  margin: 20px auto;

  @media (min-width: 768px) {
    max-width: 458px;
    padding: 20px 34px;
    &.centered {
      padding: 20px 75px;
      max-width: 100%;
    }
  }

  @media (min-width: 1280px) {
    &.centered {
      padding: 20px 75px;
      max-width: 822px;
    }
  }
`,Ne=y.h1`
  align-self: flex-start;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
  margin-left: 12px;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-left: 0;

    &.centered {
      align-self: center;
    }
  }
`,Se=y.ul`
  display: flex;
  gap: 12px;
  color: var(--clr-secondary);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.66px;
  letter-spacing: 0.1px;
  margin-bottom: 24px;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 26.5px; /* 165.625% */
    letter-spacing: 0.1px;
    gap: 16px;
    margin-bottom: 16px;
    width: 392px;
  }

  & > li {
    display: flex;
    flex-direction: column;
    flex-basis: calc((100% / 3));
    gap: 12px;

    &:after {
      content: '';
      display: block;
      position: static;
      height: 8px;
      background-color: var(--clr-brand-blue-lt);
      border-radius: 8px;
    }

    &.is-selected {
      color: var(--clr-brand-blue);
      &:after {
        background-color: var(--clr-brand-blue);
      }
    }

    &.is-done {
      color: var(--clr-brand-green);
      &:after {
        background-color: var(--clr-brand-green);
      }
    }
  }
`,z=y.div`
  width: 100vw;
  max-width: 264px;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    max-width: 390px;
  }
`,v=y.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;

  width: 100%;
  height: 40px;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  transition:
    gap 0.3s,
    box-shadow 0.3s;

  @media (min-width: 768px) {
    width: auto;
    flex-grow: 1;
    transition: flex-grow 0.3s;
  }

  &.buttonNext {
    margin-bottom: 10px;
    background-color: var(--clr-brand-blue);
    border: none;
    border-radius: 40px;
    color: var(--clr-primary-inv);

    &:hover {
      flex-grow: 2;
    }
  }

  &.buttonBack {
    color: var(--clr-brand-blue);
    background: none;
    border: none;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 10px;
      width: 100%;
      height: 40px;
      border-radius: 40px 0 0 40px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; /* transition: opacity 0.3s ease-in-out; */
      transition: opacity 0.3s;
      z-index: 0;
      pointer-events: none;
      opacity: 0;
    }

    &:hover {
      flex-grow: 2;

      &::before {
        opacity: 1;
      }
    }
  }

  & svg {
    width: 0;
    transition: width 0.3s;
  }

  &:hover {
    gap: 12px;
    & svg {
      width: ${B};
    }
  }
`,C=y.svg`
  width: ${B};
  height: ${B};
  fill: var(--clr-primary-inv);
`,M=y.svg`
  width: ${H};
  height: ${H};
  stroke: var(--clr-brand-blue);
`,ke=F({category:j().required("Select a category")}),Pe=n=>{const t=K(),s=he(),l=()=>{s.state?t(s.state.from):t("/user")},r=g=>{n.next(g)};return e.jsx($,{initialValues:n.data,validationSchema:ke,onSubmit:r,children:e.jsxs(I,{children:[e.jsxs(je,{children:[e.jsx(q,{type:"radio",name:"category",id:"your-pet",value:"your-pet"}),e.jsx("label",{htmlFor:"your-pet",children:"ваш улюбленець"}),e.jsx(q,{type:"radio",name:"category",id:"sell",value:"sell"}),e.jsx("label",{htmlFor:"sell",children:"продаж"}),e.jsx(q,{type:"radio",name:"category",id:"lost-found",value:"lost-found"}),e.jsx("label",{htmlFor:"lost-found",children:"загубив(ла)/знайшов(ла)"}),e.jsx(q,{type:"radio",name:"category",id:"in-good-hands",value:"in-good-hands"}),e.jsx("label",{htmlFor:"in-good-hands",children:"в хороші руки"}),e.jsx(u,{name:"category",component:ye})]}),e.jsxs(z,{children:[e.jsxs(v,{className:"buttonNext",type:"submit",children:["Далі",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:l,to:s.state.from,children:[e.jsx(M,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Відміна"]})]})]})})},X=y.div`
  margin-bottom: 36.95px;

  @media (min-width: 768px) {
    margin-bottom: 57.6px;
  }

  & label {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 26.5px; /* 132.5% */
      gap: 8px;

      margin-bottom: 24px;
    }
  }

  & input {
    padding: 8px 16px;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: 0.56px;

    border-radius: 40px;
    border: 1px solid var(--clr-brand-blue);
    outline: 3px solid transparent;
    outline-offset: -3px;
    transition: outline-color 0.3s;

    @media (min-width: 768px) {
      padding: 12px 16px;
      height: 48px;

      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.64px;
    }

    &:focus {
      outline: 3px solid var(--clr-brand-blue);
    }

    &.is-invalid {
      outline-color: var(--clr-brand-red);

      &:focus {
        outline: 3px solid var(--clr-brand-red);
      }
    }
  }

  & input[type='date'][value=''] {
    color: var(--clr-secondary);
  }
`,k=y.p`
  position: absolute;
  bottom: -16px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);

  @media (min-width: 768px) {
    font-size: 12px;
    bottom: -20px;
    left: 13px;
  }
`,Fe=F({title:j().matches(/^([А-ЩЬЮЯҐЄIЇІІа-щьюяґєіїьі]+\s?){1,}$/iu,"Допустимі тільки Українські символи").min(2,"Заголовок повинен містити від 2 символів").max(20,"Заголовок повинен містити до 20 символів").required("Введіть заголовок"),name:j().matches(/^([А-ЩЬЮЯҐЄIЇІІа-щьюяґєіїьі]+\s?){1,}$/iu,"Допустимі тільки Українські символи").min(2,"Ім'я повинне містити від 2 символів").max(16,"Ім'я повинне містити до 16 символів").required("Введіть ім'я"),date:Q().required("Введіть дату народження").max(new Date,"Дата народження не може бути у майбутньому"),type:j().matches(/^([А-ЩЬЮЯҐЄIЇІІа-щьюяґєіїьі]+\s?){1,}$/iu,"Допустимі тільки Українські символи").min(2,"Порода повинна містити від 2 символів").max(16,"Порода повинна містити до 16 символів").required("Введіть породу")}),$e=n=>{const t=s=>{n.next(s)};return e.jsx($,{initialValues:n.data,validationSchema:Fe,onSubmit:t,children:({values:s,touched:l,errors:r})=>e.jsxs(I,{children:[e.jsxs(X,{children:[e.jsxs("label",{children:["Заголовок",e.jsx(m,{type:"text",name:"title",placeholder:"Заголовок",className:`${l.title&&r.title?"is-invalid":""}`}),e.jsx(u,{name:"title",component:k})]}),e.jsxs("label",{children:["Ім'я",e.jsx(m,{type:"text",name:"name",placeholder:"Type name pet",className:`${l.name&&r.name?"is-invalid":""}`}),e.jsx(u,{name:"name",component:k})]}),e.jsxs("label",{children:["Дата народження",e.jsx(m,{name:"date",type:"date",placeholder:"Вкажіть дату народження",className:`${l.date&&r.date?"is-invalid":""}`}),e.jsx(u,{name:"date",component:k})]}),e.jsxs("label",{children:["Порода",e.jsx(m,{type:"text",name:"type",placeholder:"Вкажіть породу",className:`${l.type&&r.type?"is-invalid":""}`}),e.jsx(u,{name:"type",component:k})]})]}),e.jsxs(z,{children:[e.jsxs(v,{className:"buttonNext",type:"submit",children:["Далі",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>n.prev(s),children:[e.jsx(M,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Назад"]})]})]})})},Ie=F({name:j().matches(/^([А-ЩЬЮЯҐЄІЇа-щьюяґєіїьі0-9'-]+\s?){1,}$/iu,"Допустимі тільки Українські символи").min(2,"Ім'я повинне містити від 2 символів").max(16,"Ім'я повинне містити до 16 символів").required("Введіть ім'я"),date:Q().required("Введіть дату народження").max(new Date,"Дата народження не може бути у майбутньому"),type:j().matches(/^([А-ЩЬЮЯҐЄІЇа-щьюяґєіїьі0-9'-]+\s?){1,}$/iu,"Допустимі тільки Українські символи").min(2,"Порода повинна містити від 2 символів").max(16,"Порода повинна містити до 16 символів").required("Введіть породу")}),ze=n=>{const t=s=>{n.next(s)};return e.jsx($,{initialValues:n.data,validationSchema:Ie,onSubmit:t,children:({values:s,touched:l,errors:r})=>e.jsxs(I,{children:[e.jsxs(X,{children:[e.jsxs("label",{children:["Ім'я улюбленця",e.jsx(m,{type:"text",name:"name",placeholder:"Введіть ім'я",className:`${l.name&&r.name?"is-invalid":""}`}),e.jsx(u,{name:"name",component:k})]}),e.jsxs("label",{children:["Дата народження",e.jsx(m,{type:"date",name:"date",placeholder:"Кажіть дату народження",className:`${l.date&&r.date?"is-invalid":""}`}),e.jsx(u,{name:"date",component:k})]}),e.jsxs("label",{children:["Порода",e.jsx(m,{type:"text",name:"type",placeholder:"Вкажіть породу",className:`${l.type&&r.type?"is-invalid":""}`}),e.jsx(u,{name:"type",component:k})]})]}),e.jsxs(z,{children:[e.jsxs(v,{className:"buttonNext",type:"submit",children:["Далі",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>n.prev(s),children:[e.jsx(M,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Назад"]})]})]})})},R=x.img`
  background: var(--clr-brand-blue-lt);
  display: block;
  width: 112px;
  height: 112px;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`,U=x.label`
  background: var(--clr-brand-blue-lt);
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  position: relative;
  width: 112px;
  height: 112px;
  border: 3px solid transparent;
  border-radius: 20px;
  margin-right: 23.3%;

  transition:
    border-color 0.3s,
    scale 0.3s;

  @media (min-width: 768px) {
    width: 182px;
    height: 182px;
    margin-right: 26.7%;
    border-radius: 40px;
  }

  &.no-image-selected {
    border-color: var(--clr-brand-red);
  }

  & svg {
    transition:
      transform 0.3s,
      scale 0.3s;
  }

  &:hover {
    & svg {
      transform: rotate(180deg) scale(1.4);
    }
  }

  &:active,
  &:active & svg {
    scale: 0.9;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 112px;
    height: 112px;
    border: 3px solid transparent;
    z-index: 50;
    transition: border-color 0.3s;
    border-radius: inherit;

    @media (min-width: 768px) {
      width: 182px;
      height: 182px;
    }
  }

  &:hover::after {
    border-color: var(--clr-brand-blue);
  }
`,G=x.input`
  display: none;
`,Y=x.div`
  color: var(--clr-brand-red);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,V=x.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
  }

  & p {
    margin-bottom: 4px;
  }

  & label {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & input[type='text'],
  textarea {
    padding: 8px 16px;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: 0.56px;

    border-radius: 40px;
    border: 1px solid var(--clr-brand-blue);
    margin-bottom: 20px;

    outline: 3px solid transparent;
    outline-offset: -3px;
    transition: outline-color 0.3s;

    @media (min-width: 768px) {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.64px;
      padding: 12px 16px;
      margin-bottom: 24px;
    }

    &:focus {
      outline: 3px solid var(--clr-brand-blue);
    }

    &.is-invalid {
      outline-color: var(--clr-brand-red);

      &:focus {
        outline: 3px solid var(--clr-brand-red);
      }
    }
  }

  & textarea {
    height: 92px;
    border-radius: 20px;
    resize: none;
    margin-bottom: 19.15px;

    @media (min-width: 768px) {
      height: 79px;
      margin-bottom: 32px;

      &.moreInfoNotices {
        height: 182px;
        margin-bottom: 36px;
      }

      &.moreInfoSell {
        height: 128px;
        margin-bottom: 36px;
      }
    }
  }
`,Ce=x.label`
  width: 100%;
`,D=x.div`
  @media (min-width: 768px) {
    display: flex;
  }
`,ee=x.div`
  @media (min-width: 768px) {
    width: 395px;
  }
`,te=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 245px;

  @media (min-width: 1280px) {
    width: 280px;
  }
`,W=x.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    gap: 10px;
    margin-bottom: 24.1px;

    &.moreInfoSell,
    &.moreInfoNotices {
      flex-direction: column;
      align-items: flex-start;
      gap: 0;

      & > p {
        margin-left: 0;
        margin-bottom: 8px;
      }

      & label {
        margin: 0;
      }
    }
  }
`,J=x.svg`
  width: 40px;
  height: 40px;
  stroke: var(--clr-brand-blue);

  @media (min-width: 768px) {
    display: none;
  }
`,_=x.svg`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 58px;
    height: 58px;
    stroke: var(--clr-brand-blue);
  }
`,ie=x.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-red);
  fill: transparent;
`,ne=x.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: transparent;
`,se=x.div`
  position: relative;

  &.moreInfoNotices {
    width: 182px;
  }
`,ae=x.div`
  display: flex;
  gap: 8px;
  margin-bottom: 14px;

  & > label {
    touch-action: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 35px;
    width: 100%;
    padding: 8px 16px;
    border-radius: 40px;
    border: 3px solid transparent;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.64px;

    color: var(--clr-secondary);
    transition:
      background-color 0.3s,
      border-color 0.2s,
      scale 0.3s,
      color 0.3s;
    cursor: pointer;

    @media (min-width: 768px) {
      padding: 0;
      margin-top: 8px;
      height: 40px;
    }

    & > .iconMale {
      transition: transform 0.7s cubic-bezier(0.65, 1.79, 0.78, 1.02);
      transform-origin: 12px 16px;
    }

    & > .iconFemale {
      transition: transform 0.7s cubic-bezier(0.61, 0.7, 0.55, 1.24);
    }

    &:hover {
      border-color: var(--clr-brand-blue);

      & > .iconMale {
        transform: rotate(320deg);
      }

      & > .iconFemale {
        transform: rotate(-360deg);
      }
    }

    &:active {
      scale: 0.9;
    }
  }

  & input[type='radio']:checked + label {
    background-color: var(--clr-brand-blue);
    border-color: var(--clr-brand-blue);
    color: var(--clr-primary-inv);
  }

  & input[type='radio']:checked + label > svg {
    stroke: var(--clr-primary-inv);
  }

  & input {
    display: none;
  }

  & svg {
    transition: stroke 0.3s;
  }
`,O=x.p`
  position: absolute;
  bottom: 0px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);

  @media (min-width: 768px) {
    font-size: 12px;
  }
`,Z=x.p`
  position: absolute;
  bottom: 0px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);

  @media (min-width: 768px) {
    bottom: 12px;
    font-size: 12px;
  }
`,oe=x.p`
  position: absolute;
  bottom: -18px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);

  @media (min-width: 768px) {
    bottom: -14px;
    font-size: 12px;
  }
`,Me=F({comments:j().min(2,"Коментар повинен містити від 2 символів").max(120,"Коментар повинен містити до 120 символів").required("Введіть коментар")}),Ae=n=>{const[t,s]=b.useState(n.selectedFile||null),[l,r]=b.useState(!1),[g,w]=b.useState(""),S=o=>{const a=o.target.files[0],c=3*1024*1024;a.size<=c&&(a.type==="image/jpeg"||a.type==="image/png")?(s(a),w("")):(s(null),w("Будь ласка, виберіть файл JPEG(.JPG) або .PNG у межах 3 Мб"))},N=o=>{if(!t){r(!0);return}n.next(o,!0,t)};return e.jsx($,{initialValues:n.data,validationSchema:Me,onSubmit:N,children:({values:o,touched:a,errors:c})=>e.jsx(I,{children:e.jsxs(V,{children:[e.jsxs(W,{children:[e.jsx("p",{children:"Виберіть фото улюбленця:"}),e.jsxs(U,{className:g!==""||l&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(R,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(_,{children:e.jsx("use",{href:d+"#iconPlus"})})]}),e.jsx(G,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:S})]})]}),g&&e.jsx(Y,{children:g}),e.jsxs(Ce,{children:["Коментар",e.jsx(m,{as:"textarea",type:"text",name:"comments",placeholder:"Введіть коментар",className:`${a.comments&&c.comments?"is-invalid":""}`}),e.jsx(u,{name:"comments",component:Z})]}),e.jsxs(z,{children:[e.jsxs(v,{className:"buttonNext",type:"submit",children:["Готово",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>n.prev(o,t),children:[e.jsx(M,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Назад"]})]})]})})})},Ee=F({sex:j().required("Вкажіть стать"),location:j().matches(/^([А-ЩЬЮЯҐЄІЇа-щьюяґєіїьі0-9'-]+\s?){1,}$/iu,"Використовуйте тільки українські літери").min(2,"Назва міста має містити від 2 символів").required("Вкажіть місто"),comments:j().min(2,"Коментар повинен містити від 2 символів").max(120,"Коментар повинен містити до 120 символів").required("Введіть коментар")}),Le=n=>{const[t,s]=b.useState(n.selectedFile||null),[l,r]=b.useState(!1),[g,w]=b.useState("");b.useEffect(()=>(n.setIsTitleCentered(!0),()=>{n.setIsTitleCentered(!1)}));const S=o=>{const a=o.target.files[0],c=3*1024*1024;a.size<=c&&(a.type==="image/jpeg"||a.type==="image/png")?(s(a),w("")):(s(null),w("Please select a JPEG or PNG file within 3MB size limit"))},N=o=>{if(!t){r(!0);return}n.next(o,!0,t)};return e.jsx($,{initialValues:n.data,validationSchema:Ee,onSubmit:N,children:({values:o,touched:a,errors:c})=>e.jsx(I,{children:e.jsxs(V,{children:[e.jsxs(D,{children:[e.jsxs(te,{children:[e.jsxs(se,{className:"moreInfoNotices",children:[e.jsx("p",{children:"Стать"}),e.jsxs(ae,{children:[e.jsx(m,{type:"radio",name:"sex",id:"female",value:"Ж",className:`${a.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(ie,{className:"iconFemale",children:e.jsx("use",{href:d+"#iconFemale"})}),"Ж"]}),e.jsx(m,{type:"radio",name:"sex",id:"male",value:"Ч",className:`${a.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(ne,{className:"iconMale",children:e.jsx("use",{href:d+"#iconMale"})}),"Ч"]}),e.jsx(u,{name:"sex",component:oe})]})]}),e.jsxs(W,{className:"moreInfoNotices",children:[e.jsx("p",{children:"Виберіть фото улюбленця:"}),e.jsxs(U,{className:g!==""||l&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(R,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(_,{children:e.jsx("use",{href:d+"#iconPlus"})})]}),e.jsx(G,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:S})]})]})]}),g&&e.jsx(Y,{children:g}),e.jsxs(ee,{children:[e.jsxs("label",{children:["Місто",e.jsx(m,{className:`${a.location&&c.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(u,{name:"location",component:O})]}),e.jsxs("label",{children:["Коментар",e.jsx(m,{type:"text",as:"textarea",name:"comments",placeholder:"Type of pet",className:`moreInfoNotices${a.comments&&c.comments?" is-invalid":""}`}),e.jsx(u,{name:"comments",component:Z})]})]})]}),e.jsxs(z,{children:[e.jsxs(v,{className:"buttonNext",type:"submit",children:["Готово",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>n.prev(o,t),children:[e.jsx(M,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Назад"]})]})]})})})},qe=F({sex:j().required("Вкажіть стать"),location:j().matches(/^([А-ЩЬЮЯҐЄІЇа-щьюяґєіїьі0-9'-]+\s?){1,}$/iu,"Використовуйте тільки українські літери").min(2,"Назва міста має містити від 2 символів").required("Вкажіть місто"),price:be().typeError("Вкажіть валідне число").required("Вкажіть ціну").min(.01,"Ціна має бути більше 0"),comments:j().min(2,"Коментар повинен містити від 2 символів").max(120,"Коментар повинен містити до 120 символів").required("Введіть коментар")}),Te=n=>{const[t,s]=b.useState(n.selectedFile||null),[l,r]=b.useState(!1),[g,w]=b.useState("");b.useEffect(()=>(n.setIsTitleCentered(!0),()=>{n.setIsTitleCentered(!1)}));const S=o=>{const a=o.target.files[0],c=3*1024*1024;a.size<=c&&(a.type==="image/jpeg"||a.type==="image/png")?(s(a),w("")):(s(null),w("Please select a JPEG or PNG file within 3MB size limit"))},N=o=>{if(!t){r(!0);return}n.next(o,!0,t)};return e.jsx($,{initialValues:n.data,validationSchema:qe,onSubmit:N,children:({values:o,touched:a,errors:c})=>e.jsx(I,{children:e.jsxs(V,{children:[e.jsxs(D,{children:[e.jsxs(te,{children:[e.jsxs(se,{className:"moreInfoNotices",children:[e.jsx("p",{children:"Стать"}),e.jsxs(ae,{children:[e.jsx(m,{type:"radio",name:"sex",id:"female",value:"Ж",className:`${a.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(ie,{className:"iconFemale",children:e.jsx("use",{href:d+"#iconFemale"})}),"Ж"]}),e.jsx(m,{type:"radio",name:"sex",id:"male",value:"Ч",className:`${a.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(ne,{className:"iconMale",children:e.jsx("use",{href:d+"#iconMale"})}),"Ч"]}),e.jsx(u,{name:"sex",component:oe})]})]}),e.jsxs(W,{className:"moreInfoNotices",children:[e.jsx("p",{children:"Виберіть фото улюбленця:"}),e.jsxs(U,{className:g!==""||l&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(R,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(_,{children:e.jsx("use",{href:d+"#iconPlus"})})]}),e.jsx(G,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:S})]})]})]}),g&&e.jsx(Y,{children:g}),e.jsxs(ee,{children:[e.jsxs("label",{children:["Місто",e.jsx(m,{className:`${a.location&&c.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Вкажіть місто"}),e.jsx(u,{name:"location",component:O})]}),e.jsxs("label",{children:["Ціна(грн)",e.jsx(m,{type:"text",name:"price",placeholder:"Вкажіть ціну",className:`${a.price&&c.price?"is-invalid":""}`}),e.jsx(u,{name:"price",component:O})]}),e.jsxs("label",{children:["Коментар",e.jsx(m,{className:`moreInfoSell${a.comments&&c.comments?" is-invalid":""}`,as:"textarea",type:"text",name:"comments",placeholder:"Введіть коментар"}),e.jsx(u,{name:"comments",component:Z})]})]})]}),e.jsxs(z,{children:[e.jsxs(v,{className:"buttonNext",type:"submit",children:["Готово",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>n.prev(o,t),children:[e.jsx(M,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Назад"]})]})]})})})},Be=()=>{const n=K(),[t,s]=b.useState(0),[l,r]=b.useState(null),[g]=ue(),[w]=ge(),[S,N]=b.useState(!1),[o,a]=b.useState({category:"",title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""}),c=i=>{a({category:i,title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""})},re=(i,h)=>{const p=new FormData,f=T=>{const E=new Date(T),xe=String(E.getDate()).padStart(2,"0"),me=String(E.getMonth()+1).padStart(2,"0"),pe=E.getFullYear();return`${xe}-${me}-${pe}`};let L={};i.category==="your-pet"&&(L={name:i.name,date:f(i.date),type:i.type,comments:i.comments,image:h}),i.category==="sell"&&(L={category:i.category,title:i.title,name:i.name,date:f(i.date),type:i.type,sex:i.sex,location:i.location,comments:i.comments,price:i.price,image:h}),(i.category==="lost-found"||i.category==="in-good-hands")&&(L={category:i.category,title:i.title,name:i.name,date:f(i.date),type:i.type,sex:i.sex,location:i.location,comments:i.comments,image:h});for(const[T,E]of Object.entries(L))p.append(T,E);i.category==="your-pet"?g(p):w(p);const de=i.category==="your-pet"?"/user":`/notices/${i.category}`;n(de),c("")},P=(i,h=!1,p="")=>{if(a(f=>({...f,...i})),h){re(i,p);return}switch(i.category){case"your-pet":s(f=>f+1),t===0&&i.category!==o.category&&(c(i.category),r(null));break;case"sell":t===0&&(i.category!==o.category&&(c(i.category),r(null)),s(f=>f+3)),t===3&&s(f=>f+2);break;default:t===0&&(i.category!==o.category&&(c(i.category),r(null)),s(f=>f+3)),t===3&&s(f=>f+1)}},A=(i,h="")=>{switch(a(p=>({...p,...i})),i.category){case"your-pet":s(p=>p-1),h!==""&&r(h);break;case"sell":t===3&&(s(p=>p-3),h!==""&&r(h)),t===5&&(s(p=>p-2),h!==""&&r(h));break;default:t===3&&(s(p=>p-3),h!==""&&r(h)),t===4&&(s(p=>p-1),h!==""&&r(h))}},le=[e.jsx(Pe,{next:P,data:o,selectedFile:l}),e.jsx(ze,{next:P,prev:A,data:o,selectedFile:l}),e.jsx(Ae,{next:P,prev:A,data:o,selectedFile:l,setIsTitleCentered:N}),e.jsx($e,{next:P,prev:A,data:o,selectedFile:l}),e.jsx(Le,{next:P,prev:A,data:o,selectedFile:l,setIsTitleCentered:N}),e.jsx(Te,{next:P,prev:A,data:o,selectedFile:l,setIsTitleCentered:N})],ce=()=>{switch(o.category){case"your-pet":return"Додати власного улюбленця";case"sell":return"На продаж";case"lost-found":return"Загубив(ла)/знайшов(ла) улюбленця";case"in-good-hands":return"В хороші руки";default:return"Add pet"}};return e.jsx(e.Fragment,{children:e.jsx(ve,{children:e.jsx(fe,{children:e.jsxs(we,{className:S?"centered":"",children:[e.jsx(Ne,{className:S?"centered":"",children:t===0?"Додати улюбленця":ce()}),e.jsxs(Se,{children:[e.jsxs("li",{className:t===0?"is-selected":"is-done",children:["Категорія"," "]}),e.jsx("li",{className:t===1||t===3?"is-selected":t===0?"":"is-done",children:"Деталі анкети"}),e.jsx("li",{className:t===2||t===4||t===5?"is-selected":"",children:"Додатково"})]}),le[t]]})})})})},Ue=()=>e.jsx(Be,{});export{Ue as default};

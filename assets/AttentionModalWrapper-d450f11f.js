import{t as o,r as s,m as g,j as t,s as n,N as x,h as m}from"./index-fa4dfc2d.js";const u=o.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1);
  padding: 15px;

  z-index: 1000;

  opacity: ${e=>e.showModal?"1":"0"};

  transition: 300ms;
`,w=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  scale: ${e=>e.showModal?"1":"0"};

  transition: 300ms;
`,y=document.querySelector("#modal-root"),B=({onClose:e,showModal:i,children:h})=>{const[c,l]=s.useState(!1);s.useEffect(()=>{l(i)},[i]);const d=s.useMemo(()=>r=>{r.code==="Escape"&&(l(!1),setTimeout(()=>e(),300))},[e]),f=r=>{r.currentTarget===r.target&&(l(!1),setTimeout(()=>e(),300))};return s.useEffect(()=>(window.addEventListener("keydown",d),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",d),document.body.style.overflow="visible"}),[d]),g.createPortal(t.jsx(u,{onClick:f,showModal:c,children:t.jsx(w,{showModal:c,children:h})}),y)},a="min-width: 768px",v=o.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 445px;
  padding: 60px 20px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (${a}) {
    width: 608px;
    height: 429px;
    padding: 60px 40px;

    border-radius: 40px;
  }
`,b=o.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  stroke: var(--clr-brand-blue);
  fill: none;

  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    stroke: var(--clr-brand-yellow);
  }

  @media (${a}) {
    top: 24px;
    right: 24px;
  }
`,j=o.h3`
  color: var(--, #111);
  text-align: center;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;

  @media (${a}) {
    color: var(--, #111);
    text-align: center;
    font-family: Manrope;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.44px;
  }
`,k=o.p`
  margin-top: 20px;

  color: var(--, #111);
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.56px;

  @media (${a}) {
    color: var(--, #111);
    text-align: center;
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.8px;
  }
`,p="min-width: 768px",M=n.ul`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 12px;

  margin: 40px auto 0 auto;

  @media (${p}) {
    flex-direction: row;
  }
`,A=n.li`
  font-weight: 700;
  background-color: var(--clr-brand-yellow);
  border-radius: 40px;
  padding: 8px 20px;
  gap: 8px;
  width: 240px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    box-shadow: 3px 3px 3px var(--clr-brand-yellow);
  }

  @media (${p}) {
    width: 165px;
  }
`,E=n.li`
  display: flex;
  justify-content: center;

  background: #fff;
  font-weight: 600;
  border-radius: 40px;
  padding: 7px 20px;
  border: 2px solid var(--clr-brand-yellow);
  width: 240px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    box-shadow: 3px 3px 3px var(--clr-brand-yellow);
  }

  @media (${p}) {
    width: 180px;
  }
`,L=n(x)`
  color: var(--clr-primary-inv);
  display: flex;
  justify-content: center;
`,$=n(x)`
  color: var(--clr-brand-yellow);
`,T=n.svg`
  fill: var(--clr-bcg);
  margin-left: 12px;
  width: 24px;
  height: 24px;

  transition: 300ms;
`,z=()=>t.jsxs(M,{children:[t.jsx(A,{children:t.jsxs(L,{to:"/login",children:["Увійти",t.jsx(T,{children:t.jsx("use",{href:m+"#iconPaw"})})]})}),t.jsx(E,{children:t.jsx($,{to:"/register",children:"Зареєструватись"})})]}),I=({setShowModal:e,sprite:i})=>t.jsxs(v,{children:[t.jsx(b,{onClick:()=>{e(!1)},children:t.jsx("use",{href:i+"#iconCross"})}),t.jsx(j,{children:"Увага"}),t.jsx(k,{children:"Нагадуємо, що певні функції доступні лише авторизованим користувачам. Якщо у вас є обліковий запис, увійдіть, використовуючи свої облікові дані. Якщо у вас ще немає облікового запису, ви повинні зареєструватися, щоб отримати доступ до цих функцій."}),t.jsx(z,{})]});export{I as A,B as F};

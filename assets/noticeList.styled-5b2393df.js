import{v as t,s as a,w as H,j as e,H as O,r as D,I as R,J as K,k as U,A as G,h as r}from"./index-136e797c.js";import{n as y}from"./notiflix-notify-aio-35b29737.js";import{F as J,A as Q}from"./AttentionModalWrapper-d9a5656a.js";const B="min-width: 768px",F="min-width: 1280px",q=t.li`
  display: flex;
  flex-direction: column;

  border-radius: 20px 20px 40px 40px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  width: 280px;
  height: 456px;
  padding-bottom: 22px;

  overflow: hidden;
  transition: 300ms;

  &:hover {
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 1);

    & img {
      scale: 1.1;
    }
  }

  @media (${B}) {
    width: 336px;
  }

  @media (${F}) {
    width: 288px;
  }
`,V=t.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;

  background-color: #fff;

  width: 100%;
  height: 288px;

  overflow: hidden;
  transition: 300ms;
`,Z=t.img`
  position: absolute;
  object-position: center;
  object-fit: cover;

  width: 100%;
  height: 100%;

  transition: 300ms;
`,ee=t.p`
  position: absolute;
  top: 16px;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0px 16px 16px 0px;
  background: var(--clr-brand-blue-lt);

  padding: 6.5px 12.98px;

  color: #111;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,te=t.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--clr-brand-blue-lt);
  border-radius: 100%;
  border: none;
  outline: none;

  padding: 9px 8px 7px 8px;

  &:hover svg {
    scale: 1.2;
  }
`,ne=t.button`
  position: absolute;
  top: 58px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--clr-brand-blue-lt);
  border-radius: 100%;
  border: none;
  outline: none;

  padding: 9px 8px 7px 8px;

  &:hover svg {
    scale: 1.2;
  }
`,T=t.svg`
  stroke: var(--clr-brand-blue);
  fill: ${i=>i.isFavorite?"var(--clr-brand-blue)":"var(--clr-brand-blue-lt)"};

  width: 24px;
  height: 24px;

  transition: 300ms;
`,ie=t.div`
  position: absolute;
  bottom: 12px;
  left: 0;
  display: flex;
  justify-content: center;
  gap: 12px;

  /* background-color: rgba(0, 0, 0, 0.2); */
  /* backdrop-filter: blur(5px); */

  width: 100%;
  height: 28px;

  z-index: 2;

  @media (${B}) {
    gap: 24px;
  }

  @media (${F}) {
    gap: 12px;
  }
`,I=t.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 16px;
  background: var(--clr-brand-blue-lt);

  width: 80px;

  overflow: hidden;

  color: var(--clr-primary);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
`,L=t.svg`
  stroke: var(--clr-brand-blue);
  fill: none;

  width: 24px;
  height: 24px;
`,oe=t.h3`
  width: 231px;
  height: 66px;
  margin: 20px 0 0 20px;

  overflow-y: scroll;

  color: var(--clr-primary);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,re=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 248px;
  height: 40px;
  margin: auto auto 0 auto;
  padding: 8px 28px;

  background-color: #fff;
  border: 2px solid var(--clr-brand-blue);
  border-radius: 40px;
  outline: none;

  color: var(--clr-brand-blue);

  transition: 300ms;

  &:hover {
    background-color: var(--clr-brand-blue);
    color: var(--clr-primary-inv);

    & svg {
      opacity: 1;
      width: 24px;
      height: 24px;
    }
  }
`,ae=t.svg`
  opacity: 0;
  stroke: var(--clr-primary-inv);
  fill: var(--clr-primary-inv);

  width: 0;
  height: 0;

  transition: 300ms;
`,c="min-width: 768px",se=a.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 389px;
  padding: 60px 12px;

  border-radius: 20px;
  background: #fff;

  @media (${c}) {
    width: 608px;
    height: 352px;
    padding: 60px 110px;

    border-radius: 40px;
  }
`,le=a.svg`
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
    scale: 1.2;
  }

  @media (${c}) {
    top: 24px;
    right: 24px;
  }
`,pe=a.h3`
  color: var(--, #111);
  text-align: center;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.96px;
  width: 200px;
  margin: 0 auto;

  @media (${c}) {
    color: #000;
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.28px;
    width: 288px;
  }
`,de=a.p`
  margin: 14px auto 0 auto;

  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 240px;

  @media (${c}) {
    color: #000;
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.16px;
    width: 393px;
    height: 66px;
  }
`,ce=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 44px;

  @media (${c}) {
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    gap: 17px;
    margin-top: 48px;
  }
`,xe=a.button`
  position: relative;
  display: flex;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 2px solid #54adff;
  outline: none;
  background: #fff;
  transition: 300ms;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover {
    border: 2px solid #ffffff00;
  }

  &:hover:before {
    opacity: 1;
  }

  &:hover p {
    color: #fff;
  }

  @media (${c}) {
    width: 129px;
    margin: 0;
  }
`,he=a.p`
  color: var(--clr-brand-blue);
  z-index: 2;
  transition: 300ms;
`,fe=H`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`,ge=a.button`
  position: relative;
  display: flex;
  color: #fff;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: #54adff;
  outline: none;
  border: none;
  transition: 300ms;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover:before {
    opacity: 1;
  }

  &:hover svg {
    animation: ${fe} 0.5s ease;
  }

  @media (${c}) {
    width: 129px;
    margin: 0;
  }
`,me=a.p`
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 2;
`,ue=a.svg`
  stroke: #fff;
  fill: none;

  width: 24px;
  height: 24px;

  cursor: pointer;
`,be=({setShowModal:i,sprite:s,handleDeleteClick:x})=>e.jsxs(se,{children:[e.jsx(le,{onClick:()=>{i(!1)},children:e.jsx("use",{href:s+"#iconCross"})}),e.jsx(pe,{children:"Delete advertisement?"}),e.jsxs(de,{children:["Are you sure you want to delete ",e.jsx("b",{children:"“Cute dog looking for a home”"}),"?",e.jsx("br",{}),"You can`t undo this action."]}),e.jsxs(ce,{children:[e.jsx(xe,{onClick:()=>{i(!1)},children:e.jsx(he,{children:"Cancel"})}),e.jsx(ge,{type:"submit",onClick:x,children:e.jsxs(me,{children:["Yes",e.jsx(ue,{children:e.jsx("use",{href:s+"#iconTrash"})})]})})]})]}),o="min-width: 768px",we=t.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 90vh;
  padding: 44px 12px 16px 12px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  overflow-y: auto;
  overflow-x: hidden;

  @media (${o}) {
    flex-direction: row;
    flex-wrap: wrap;

    width: 681px;
    height: 540px;
    padding: 32px 32px 24px 32px;

    border-radius: 40px;
    overflow: hidden;
  }
`,ye=t.div`
  position: relative;
  width: 240px;
  height: 240px;
  min-height: 240px;
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;
  margin: 0 auto;

  @media (${o}) {
    margin: 0;
    width: 262px;
    height: 298px;
  }
`,ve=t.img`
  width: 100%;
  height: 100%;
`,je=t.p`
  position: absolute;
  top: 16px;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0px 16px 16px 0px;
  background: var(--clr-brand-blue-lt);

  padding: 6.5px 12.98px;

  color: #111;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,Me=t.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 8px;

  @media (${o}) {
    margin: 0 0 0 24px;
    width: 280px;
    height: 298px;
  }
`,ke=t.h3`
  color: #000;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;

  @media (${o}) {
    height: 76px;
    margin-bottom: 12px;
  }
`,p=t.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,d=t.b`
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (${o}) {
    font-size: 16px;
  }
`,m=t.p`
  color: #000;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (${o}) {
    font-size: 16px;
  }
`,A=t.a`
  color: var(--yellow, #ffc107);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;

  @media (${o}) {
    font-size: 16px;
  }
`,$e=t.p`
  /* overflow: hidden; */
  margin: 12px auto;
  width: 256px;
  height: 95px;
  text-overflow: ellipsis;

  color: #000;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;

  @media (${o}) {
    width: 618px;
    height: 48px;
    font-size: 16px;
  }
`,De=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (${o}) {
    width: 100%;
    height: 40px;
    flex-direction: row-reverse;
    justify-content: flex-start;
    gap: 17px;
  }
`,Ie=t.a`
  position: relative;
  display: flex;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 40px;
  border: 2px solid var(--unnamed, #54adff);
  outline: none;
  background: #fff;

  color: var(--unnamed, #54adff);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  transition: 300ms;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover {
    border: 2px solid #ffffff00;
  }

  &:hover:before {
    opacity: 1;
  }

  &:hover p {
    color: #fff;
  }

  @media (${o}) {
    width: 129px;
    height: 40px;
  }
`,Le=t.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 3;

  transition: 300ms;
`,Ce=t.button`
  position: relative;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  flex-shrink: 0;

  border-radius: 40px;
  background: var(--unnamed, #54adff);
  outline: none;
  border: none;

  color: #fff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  transition: 300ms;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover:before {
    opacity: 1;
  }

  &:active svg {
    scale: 0.8;
  }

  @media (${o}) {
    width: 129px;
    height: 40px;
  }
`,ze=t.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 3;

  transition: 300ms;
`,Te=t.svg`
  stroke: #fff;
  fill: ${i=>i.isFavorite?"#fff":"var(--clr-brand-blue)"};

  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: 300ms;
`,Ae=t.svg`
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
    scale: 1.2;
  }

  @media (${o}) {
    top: 24px;
    right: 24px;
  }
`,Be=({_id:i,sprite:s,isFavorite:x,handleFavoriteClick:u,category:v,setShowModal:j})=>{const{data:n,isLoading:M,error:b}=O(i);return e.jsxs(we,{children:[M&&e.jsx("div",{children:"Loading..."}),(n==null?void 0:n.notice)&&(n==null?void 0:n.owner)&&e.jsxs(e.Fragment,{children:[e.jsx(Ae,{onClick:()=>{j(!1)},children:e.jsx("use",{href:s+"#iconCross"})}),e.jsxs(ye,{children:[e.jsx(ve,{src:n.notice.avatarURL}),e.jsx(je,{children:v})]}),e.jsxs(Me,{children:[e.jsx(ke,{children:n.notice.title}),e.jsxs(p,{children:[e.jsxs(d,{children:["Ім'я",":"]}),e.jsx(m,{children:n.notice.name})]}),e.jsxs(p,{children:[e.jsx(d,{children:"День народження:"}),e.jsx(m,{children:n.notice.date})]}),e.jsxs(p,{children:[e.jsx(d,{children:"Порода:"}),e.jsx(m,{children:n.notice.type})]}),e.jsxs(p,{children:[e.jsx(d,{children:"Локація:"}),e.jsx(m,{children:n.notice.location})]}),e.jsxs(p,{children:[e.jsx(d,{children:"Стать:"}),e.jsx(m,{children:n.notice.sex})]}),e.jsxs(p,{children:[e.jsx(d,{children:"Імейл:"}),e.jsx(A,{href:`mailto:${n.owner&&n.owner.email}`,children:n.owner&&n.owner.email})]}),e.jsxs(p,{children:[e.jsx(d,{children:"Телефон:"}),e.jsx(A,{href:`tel:${n.owner&&n.owner.phone}`,children:n.owner&&n.owner.phone})]})]}),e.jsxs($e,{children:["Коментар: ",n.notice.comments]}),e.jsxs(De,{children:[e.jsx(Ie,{href:`tel:${n.owner&&n.owner.phone}`,children:e.jsx(Le,{children:"Звязатись"})}),e.jsx(Ce,{onClick:u,children:e.jsxs(ze,{children:["Додати:",e.jsx(Te,{isFavorite:x,children:e.jsx("use",{href:s+"#iconHeart"})})]})})]})]}),b&&e.jsx("div",{children:b.message})]})},Fe={sell:"продаж","lost-found":"загубив(ла)/знайшов(ла)","in-good-hands":"в хороші руки"},Pe=({id:i,title:s,category:x,sex:u,location:v,age:j,avatarURL:n,userFavoritesArr:M,showDelete:b})=>{const[k,f]=D.useState(!1),[$,w]=D.useState(""),[C,E]=D.useState(M.includes(i)),[N]=R(),[W]=K(),S=U(G),h=()=>{f(g=>!g)},z=async g=>{if(g.preventDefault(),S)try{const l=await N(i);l.data&&l.data.message&&y.Notify.success("Success!"),E(Y=>!Y)}catch{y.Notify.failure("Failed to update favorite status")}else k?(h(),w("attention"),h()):(w("attention"),h())},_=async g=>{g.preventDefault();try{const l=await W(i);l.data&&y.Notify.success(l.data.name+" was deleted successfully")}catch{y.Notify.failure("Failed to delete notice")}h()},P=()=>{w("delete"),h()},X=()=>{w("learnmore"),h()};return e.jsxs(q,{children:[e.jsxs(V,{children:[e.jsx(Z,{src:n}),e.jsx(ee,{children:Fe[x]}),e.jsx(te,{type:"submit",onClick:z,children:e.jsx(T,{isFavorite:C,children:e.jsx("use",{href:r+"#iconHeart"})})}),b&&e.jsx(ne,{onClick:P,children:e.jsx(T,{children:e.jsx("use",{href:r+"#iconTrash"})})}),e.jsxs(ie,{children:[e.jsxs(I,{children:[e.jsx(L,{children:e.jsx("use",{href:r+"#iconLocation"})}),v]}),e.jsxs(I,{children:[e.jsx(L,{children:e.jsx("use",{href:r+"#iconClock"})}),j," (вік)"]}),e.jsxs(I,{children:[e.jsx(L,{children:e.jsx("use",{href:u==="Ч"?r+"#iconMale":r+"#iconFemale"})}),u]})]})]}),e.jsx(oe,{children:s}),e.jsxs(re,{onClick:X,children:["Детальніше",e.jsx(ae,{children:e.jsx("use",{href:r+"#iconPaw"})})]}),k&&e.jsxs(J,{onClose:()=>{f(!1)},showModal:k,children:[$==="attention"&&e.jsx(Q,{setShowModal:f,sprite:r}),$==="delete"&&e.jsx(be,{setShowModal:f,sprite:r,handleDeleteClick:_}),$==="learnmore"&&e.jsx(Be,{_id:i,sprite:r,isFavorite:C,handleFavoriteClick:z,category:x,setShowModal:f})]})]},i)},Ee="min-width: 768px",Ne="min-width: 1280px",Xe=t.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 24px;
  margin-top: 24px;
  width: 280px;

  @media (${Ee}) {
    column-gap: 32px;

    width: 768px;
  }

  @media (${Ne}) {
    width: 1280px;
  }

  height: 100%;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;export{Xe as N,Pe as a};

import{t as a,r as n,j as e,u,x as v}from"./index-fa4dfc2d.js";import{L as S}from"./Loader-4cf56cf0.js";import{N as k,S as E}from"./NoMatchesFound-5bcf8a8c.js";import{N as P}from"./NoticesSearch-2cf3ee6a.js";import"./AllNotices.styled-d6a7a9dc.js";const N=a.div`
  padding-top: 40px;
  padding-bottom: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 209px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 112px;
  }
`,C=a.h1`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #111111;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`,z=a.a`
  position: relative;
  width: 280px;
  height: 578px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: white;
  border-radius: 20px;
  color: black;
  cursor: pointer;
  transition: 300ms;

  overflow: hidden;
  &:hover img {
    scale: 1.1;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 556px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 534px;
  }

  &:before {
    content: '';
    position: absolute;
    top: -20px;

    width: 100%;
    height: 8px;

    border-radius: 40px;
    background: var(
      --gr-blue,
      linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%)
    );

    @media screen and (min-width: 768px) {
      top: -22px;
    }
  }

  &:hover {
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 1);
  }
`,f=a.img`
  transition: 300ms;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 252px;
  background-color: rgba(230, 230, 230, 0.5);
  border-radius: 20px;
  margin-bottom: 16px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`,A=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12px;
`,L=a.div`
  color: inherit;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;

  width: 100%;
  height: 66px;
  overflow: hidden;
  /* white-space: nowrap; */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  /* text-overflow: ellipsis; */

  @media screen and (min-width: 768px) {
    width: 310px;
  }
`,M=a.p`
  color: inherit;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 16px;

  width: 100%;
  height: 154px;
  overflow: hidden;
  /* white-space: nowrap; */
  display: -webkit-box;
  -webkit-line-clamp: 7;
  line-clamp: 7;
  -webkit-box-orient: vertical;
  /* text-overflow: ellipsis; */

  @media screen and (min-width: 768px) {
    height: 132px;
    -webkit-line-clamp: 6;
    line-clamp: 6;
  }

  @media screen and (min-width: 1280px) {
    height: 110px;
    -webkit-line-clamp: 5;
    line-clamp: 5;
  }
`,I=a.p`
  width: 160px;
  height: 22px;
  color: #888;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 40px;
`,O="/Your-Pet-UA/assets/NOIMG-5d575749.png";function D({image:t,title:i,description:d,date:l,url:x}){const[c,r]=n.useState(!1),h=l,o=new Date(h),m=o.getDate().toString().padStart(2,"0"),s=(o.getMonth()+1).toString().padStart(2,"0"),p=o.getFullYear(),g=`${m}/${s}/${p}`,w=()=>{r(!0)};return e.jsxs(z,{href:x,children:[c?e.jsx(f,{src:O,alt:"No Image Available"}):e.jsx(f,{src:t,onError:w,alt:i}),e.jsxs(A,{children:[e.jsx(L,{children:i}),e.jsx(M,{children:d}),e.jsx(I,{children:g})]})]})}const q=a.ul`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 44px;
  flex-wrap: wrap;
  margin-top: 44px;

  @media screen and (min-width: 768px) {
    row-gap: 46px;
    column-gap: 32px;
    width: 704px;
    margin-top: 62px;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 31px;
    width: 1247px;
    margin-top: 82px;
  }
`;function F(){const[t]=u(),i=Object.fromEntries(t.entries()),[d,l]=n.useState(1),[x,c]=n.useState(12);n.useEffect(()=>{const s=()=>{const p=window.innerWidth;p<=768?c(11):p<=1024?c(10):c(12)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const{data:r,error:h,isLoading:o}=v({params:{page:d,limit:x,...i}}),m=(s,p)=>{l(p)};return e.jsxs(q,{children:[o&&e.jsx(S,{}),r?e.jsx(e.Fragment,{children:r.news.map(({_id:s,imgUrl:p,title:g,text:w,date:b,url:j,id:y})=>e.jsx(D,{id:y,image:p,title:g,description:w,date:b,url:j},s))}):e.jsx(k,{}),e.jsx(E,{count:r?Math.ceil(r.totalCount/x):0,page:d,onChange:m,color:"primary"}),h&&e.jsx("div",{children:h.message})]})}function Y(){const[t,i]=u();n.useState(Object.fromEntries(t).query||"");const[d,l]=n.useState({}),x=n.useMemo(()=>Object.fromEntries([...t]),[t]),c=n.useCallback(()=>{i(t)},[t,i]),r=o=>{l(o?{query:o}:{})};n.useEffect(()=>{i({...d})},[x,i,d,t]);const h=()=>{t.delete("query",query),i(t),c()};return e.jsxs(N,{children:[e.jsx(C,{children:"Новини"}),e.jsx(P,{onSubmit:r,onClear:h}),e.jsx(F,{})]})}export{Y as default};

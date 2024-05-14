import{s,N as g,i as f,b,k as v,A as j,j as r,C,h as o,B as y,D as P}from"./index-ac809191.js";import{c as N,b as i,f as k,u as F}from"./index.esm-3d7cd324.js";const $=s.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 68px);

  @media (min-width: 768px) {
    min-height: calc(100% - 92px);
  }

  @media (min-width: 1280px) {
    min-height: calc(100% - 88px);
  }
`,S=s.form`
  /* margin-left: auto;
  margin-right: auto; */
  margin: 0 auto;
  font-family: Manrope, sans-serif;
  min-height: 420px;
  width: 280px;

  background-color: var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 608px;
    padding: 60px 75px;
  }
`,l=s.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,V=s.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`,E=s.h1`
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,n=s.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
`,t=s.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 10px;
  left: 84%;
  @media (min-width: 768px) {
    top: 10px;
    left: 90%;
  }
`,c=s.input`
  display: flex;

  padding-left: 15px;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border: solid 1px var(--clr-brand-blue);
  &.is-invalid {
    border-color: var(--clr-brand-red);
  }
`,L=s.input`
  display: flex;

  padding-left: 15px;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border: solid 1px var(--clr-brand-blue);
  &.is-invalid {
    border-color: var(--clr-brand-red);
  }
`,R=s.button`
  font-weight: 600;
  margin-bottom: 8px;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 40px;
  color: var(--clr-bcg-user);

  background-color: var(--clr-brand-blue);
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,h=s.svg`
  stroke: var(--clr-brand-red);
  fill: none;
  width: 24px;
  height: 24px;
`,d=s.svg`
  stroke: var(--clr-brand-blue);
  fill: none;
  width: 24px;
  height: 24px;
`,T=s.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  text-align: center;
  color: var(--clr-secondary);
`,z=s(g)`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
`;function A(){const m=f(),p=b(),u=v(j),x=N({userName:i().min(2,"Ім'я має містити мінімум 2 символи").max(16,"Ім'я має містити максимум 16 символів").matches(/^([А-ЩЬЮЯҐЄIЇІІа-щьюяґєіїьі]+\s?){1,}$/iu,"Ім'я може містити українські букви та пробіли").required("Ім'я обов'язкове"),email:i().email("Не правильний формат імейлу").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Не правильний формат імейлу").required("Імейл обов'язковий"),password:i().min(6,"Пароль має містити мінімум 6 символів").max(16,"Пароль має містити максимум 16 символів").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Пароль має містити лише англійські літери, принаймні одну цифру, одну малу та одну велику літеру").required("Пароль обов'язковий"),confirmPassword:i().oneOf([k("password"),null],"Паролі мають співпадати").required("Підтведження паролю обов'язкове")}),e=F({initialValues:{userName:"",email:"",password:"",confirmPassword:""},validationSchema:x,onSubmit:async a=>{try{a.password===a.confirmPassword?(await m(y({name:a.userName,email:a.email.toLocaleLowerCase(),password:a.password})),await m(P({email:a.email.toLocaleLowerCase(),password:a.password})),u&&p("/user")):alert("Passwords do not match. Please ensure that both password fields contain the same value.")}catch(w){console.error("Registration error:",w)}}});return r.jsx($,{children:r.jsx(C,{children:r.jsxs(S,{onSubmit:e.handleSubmit,children:[r.jsx(E,{children:"Реєстрація"}),r.jsxs(l,{children:[r.jsx(c,{id:"userName",name:"userName",type:"text",placeholder:"Ім'я",onChange:e.handleChange,value:e.values.userName,className:`${e.touched.userName&&e.errors.userName?"is-invalid":""}`}),e.touched.userName&&e.errors.userName?r.jsxs(r.Fragment,{children:[e.values.userName&&r.jsx(t,{type:"button",onClick:()=>{e.setFieldValue("userName",""),e.setFieldTouched("userName",!1)},children:r.jsx(h,{children:r.jsx("use",{href:o+"#iconCross"})})}),r.jsx(n,{children:e.errors.userName})]}):null]}),r.jsxs(l,{children:[r.jsx(c,{id:"email",name:"email",type:"text",placeholder:"Імейл",onChange:e.handleChange,value:e.values.email,className:`${e.touched.email&&e.errors.email?"is-invalid":""}`}),e.touched.email&&e.errors.email?r.jsxs(r.Fragment,{children:[e.values.email&&r.jsx(t,{type:"button",onClick:()=>{e.setFieldValue("email",""),e.setFieldTouched("email",!1)},children:r.jsx(h,{children:r.jsx("use",{href:o+"#iconCross"})})}),r.jsx(n,{children:e.errors.email})]}):null]}),r.jsxs(l,{children:[r.jsx(c,{id:"password",name:"password",type:e.values.showPassword?"text":"password",placeholder:"Пароль",onChange:e.handleChange,value:e.values.password,className:`${e.touched.password&&e.errors.password?"is-invalid":""}`}),r.jsx(t,{type:"button",onClick:()=>{e.setFieldTouched("password",!1),e.setFieldValue("showPassword",!e.values.showPassword)},children:e.values.showPassword?r.jsx(d,{children:r.jsx("use",{href:o+"#iconEyeOpen"})}):r.jsx(d,{children:r.jsx("use",{href:o+"#iconEyeClosed"})})}),e.touched.password&&e.errors.password?r.jsx(n,{children:e.errors.password}):null]}),r.jsxs(V,{children:[r.jsx(L,{id:"confirmPassword",name:"confirmPassword",type:e.values.showConfirmPassword?"text":"password",placeholder:"Підтвердіть пароль",onChange:e.handleChange,value:e.values.confirmPassword,className:`${e.touched.confirmPassword&&e.errors.confirmPassword?"is-invalid":""}`}),r.jsx(t,{type:"button",onClick:()=>{e.setFieldTouched("confirmPassword",!1),e.setFieldValue("showConfirmPassword",!e.values.showConfirmPassword)},children:e.values.showConfirmPassword?r.jsx(d,{children:r.jsx("use",{href:o+"#iconEyeOpen"})}):r.jsx(d,{children:r.jsx("use",{href:o+"#iconEyeClosed"})})}),e.touched.confirmPassword&&e.errors.confirmPassword?r.jsx(n,{children:e.errors.confirmPassword}):null]}),r.jsx(R,{type:"submit",children:"Зареєструватись"}),r.jsxs(T,{children:[" ","Маєте акаунт? ",r.jsx(z,{to:"/login",children:"Увійти"})]})]})})})}function B(){return r.jsx(A,{})}export{B as default};

import{G as S,ab as J,bo as ge,D as N,bp as oe,bq as xe,b as ue,br as te,r as A,b7 as H,bs as de,d as W,a_ as L,bk as Se,aS as I,C as _,a$ as Oe,b2 as ce,b3 as Ie,b4 as X,o as le,au as G,aT as Re,aU as ye,aV as Ce,aW as Y,aX as ne,F as we,aQ as Z,b6 as Q,b5 as Ee,aB as ve,at as Te,b9 as Me,aR as ze,aY as k,b8 as B,bt as ie,bu as De}from"./Cm6Dwt9p.js";import{d as Pe,e as Fe}from"./DUxNnCuS.js";function q(l,r,e){let o=e.initialDeps??[],t;return()=>{var i,a,n,v;let h;e.key&&((i=e.debug)!=null&&i.call(e))&&(h=Date.now());const p=l();if(!(p.length!==o.length||p.some((M,R)=>o[R]!==M)))return t;o=p;let C;if(e.key&&((a=e.debug)!=null&&a.call(e))&&(C=Date.now()),t=r(...p),e.key&&((n=e.debug)!=null&&n.call(e))){const M=Math.round((Date.now()-h)*100)/100,R=Math.round((Date.now()-C)*100)/100,F=R/16,$=(D,m)=>{for(D=String(D);D.length<m;)D=" "+D;return D};console.info(`%c⏱ ${$(R,5)} /${$(M,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*F,120))}deg 100% 31%);`,e==null?void 0:e.key)}return(v=e==null?void 0:e.onChange)==null||v.call(e,t),t}}function ee(l,r){if(l===void 0)throw new Error("Unexpected undefined");return l}const Ae=(l,r)=>Math.abs(l-r)<1,$e=(l,r,e)=>{let o;return function(...t){l.clearTimeout(o),o=l.setTimeout(()=>r.apply(this,t),e)}},ke=l=>l,Ve=l=>{const r=Math.max(l.startIndex-l.overscan,0),e=Math.min(l.endIndex+l.overscan,l.count-1),o=[];for(let t=r;t<=e;t++)o.push(t);return o},_e=(l,r)=>{const e=l.scrollElement;if(!e)return;const o=l.targetWindow;if(!o)return;const t=a=>{const{width:n,height:v}=a;r({width:Math.round(n),height:Math.round(v)})};if(t(e.getBoundingClientRect()),!o.ResizeObserver)return()=>{};const i=new o.ResizeObserver(a=>{const n=a[0];if(n!=null&&n.borderBoxSize){const v=n.borderBoxSize[0];if(v){t({width:v.inlineSize,height:v.blockSize});return}}t(e.getBoundingClientRect())});return i.observe(e,{box:"border-box"}),()=>{i.unobserve(e)}},ae={passive:!0},Be=typeof window>"u"?!0:"onscrollend"in window,Ne=(l,r)=>{const e=l.scrollElement;if(!e)return;const o=l.targetWindow;if(!o)return;let t=0;const i=Be?()=>{}:$e(o,()=>{r(t,!1)},l.options.isScrollingResetDelay),a=h=>()=>{t=e[l.options.horizontal?"scrollLeft":"scrollTop"],i(),r(t,h)},n=a(!0),v=a(!1);return v(),e.addEventListener("scroll",n,ae),e.addEventListener("scrollend",v,ae),()=>{e.removeEventListener("scroll",n),e.removeEventListener("scrollend",v)}},je=(l,r,e)=>{if(r!=null&&r.borderBoxSize){const o=r.borderBoxSize[0];if(o)return Math.round(o[e.options.horizontal?"inlineSize":"blockSize"])}return Math.round(l.getBoundingClientRect()[e.options.horizontal?"width":"height"])},Le=(l,{adjustments:r=0,behavior:e},o)=>{var t,i;const a=l+r;(i=(t=o.scrollElement)==null?void 0:t.scrollTo)==null||i.call(t,{[o.options.horizontal?"left":"top"]:a,behavior:e})};class We{constructor(r){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let e=null;const o=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(t=>{t.forEach(i=>{this._measureElement(i.target,i)})}));return{disconnect:()=>{var t;return(t=o())==null?void 0:t.disconnect()},observe:t=>{var i;return(i=o())==null?void 0:i.observe(t,{box:"border-box"})},unobserve:t=>{var i;return(i=o())==null?void 0:i.unobserve(t)}}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([o,t])=>{typeof t>"u"&&delete e[o]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:ke,rangeExtractor:Ve,onChange:()=>{},measureElement:je,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,...e}},this.notify=(e,o)=>{var t,i;const{startIndex:a,endIndex:n}=this.range??{startIndex:void 0,endIndex:void 0},v=this.calculateRange();(e||a!==(v==null?void 0:v.startIndex)||n!==(v==null?void 0:v.endIndex))&&((i=(t=this.options).onChange)==null||i.call(t,this,o))},this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.observer.disconnect(),this.elementsCache.clear()},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;const o=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==o){if(this.cleanup(),!o){this.notify(!1,!1);return}this.scrollElement=o,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((e=this.scrollElement)==null?void 0:e.window)??null,this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,t=>{this.scrollRect=t,this.notify(!1,!1)})),this.unsubs.push(this.options.observeElementOffset(this,(t,i)=>{this.scrollAdjustments=0,this.scrollDirection=i?this.getScrollOffset()<t?"forward":"backward":null,this.scrollOffset=t;const a=this.isScrolling;this.isScrolling=i,this.notify(a!==i,i)}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,o)=>{const t=new Map,i=new Map;for(let a=o-1;a>=0;a--){const n=e[a];if(t.has(n.lane))continue;const v=i.get(n.lane);if(v==null||n.end>v.end?i.set(n.lane,n):n.end<v.end&&t.set(n.lane,!0),t.size===this.options.lanes)break}return i.size===this.options.lanes?Array.from(i.values()).sort((a,n)=>a.end===n.end?a.index-n.index:a.end-n.end)[0]:void 0},this.getMeasurementOptions=q(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(e,o,t,i,a)=>(this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:o,scrollMargin:t,getItemKey:i,enabled:a}),{key:!1}),this.getMeasurements=q(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:e,paddingStart:o,scrollMargin:t,getItemKey:i,enabled:a},n)=>{var v;if(!a)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(d=>{this.itemSizeCache.set(d.key,d.size)}));const h=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const p=this.measurementsCache.slice(0,h);for(let d=h;d<e;d++){let C=(v=this.measurementsCache[d])==null?void 0:v.measureElement;C||(C=z=>{const c=i(d),x=this.elementsCache.get(c);if(!z){x&&(this.observer.unobserve(x),this.elementsCache.delete(c));return}x!==z&&(x&&this.observer.unobserve(x),this.observer.observe(z),this.elementsCache.set(c,z)),z.isConnected&&this.resizeItem(d,this.options.measureElement(z,void 0,this))});const M=i(d),R=this.options.lanes===1?p[d-1]:this.getFurthestMeasurement(p,d),F=R?R.end+this.options.gap:o+t,$=n.get(M),D=typeof $=="number"?$:this.options.estimateSize(d),m=F+D,y=R?R.lane:d%this.options.lanes;p[d]={index:d,start:F,size:D,end:m,key:M,lane:y,measureElement:C}}return this.measurementsCache=p,p},{key:!1,debug:()=>this.options.debug}),this.calculateRange=q(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(e,o,t)=>this.range=e.length>0&&o>0?Ue({measurements:e,outerSize:o,scrollOffset:t}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=q(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(e,o,t,i)=>o===null?[]:e({startIndex:o.startIndex,endIndex:o.endIndex,overscan:t,count:i}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{const o=this.options.indexAttribute,t=e.getAttribute(o);return t?parseInt(t,10):(console.warn(`Missing attribute name '${o}={index}' on measured element.`),-1)},this._measureElement=(e,o)=>{const t=this.indexFromElement(e),i=this.getMeasurements()[t];if(!i||!e.isConnected){this.elementsCache.forEach((n,v)=>{n===e&&(this.observer.unobserve(e),this.elementsCache.delete(v))});return}const a=this.elementsCache.get(i.key);a!==e&&(a&&this.observer.unobserve(a),this.observer.observe(e),this.elementsCache.set(i.key,e)),this.resizeItem(t,this.options.measureElement(e,o,this))},this.resizeItem=(e,o)=>{const t=this.getMeasurements()[e];if(!t)return;const i=this.itemSizeCache.get(t.key)??t.size,a=o-i;a!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(t,a,this):t.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=a,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(t.index),this.itemSizeCache=new Map(this.itemSizeCache.set(t.key,o)),this.notify(!0,!1))},this.measureElement=e=>{e&&this._measureElement(e,void 0)},this.getVirtualItems=q(()=>[this.getIndexes(),this.getMeasurements()],(e,o)=>{const t=[];for(let i=0,a=e.length;i<a;i++){const n=e[i],v=o[n];t.push(v)}return t},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{const o=this.getMeasurements();if(o.length!==0)return ee(o[fe(0,o.length-1,t=>ee(o[t]).start,e)])},this.getOffsetForAlignment=(e,o)=>{const t=this.getSize(),i=this.getScrollOffset();o==="auto"&&(e<=i?o="start":e>=i+t?o="end":o="start"),o==="start"?e=e:o==="end"?e=e-t:o==="center"&&(e=e-t/2);const a=this.options.horizontal?"scrollWidth":"scrollHeight",v=(this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[a]:this.scrollElement[a]:0)-t;return Math.max(Math.min(v,e),0)},this.getOffsetForIndex=(e,o="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));const t=this.getMeasurements()[e];if(!t)return;const i=this.getSize(),a=this.getScrollOffset();if(o==="auto")if(t.end>=a+i-this.options.scrollPaddingEnd)o="end";else if(t.start<=a+this.options.scrollPaddingStart)o="start";else return[a,o];const n=o==="end"?t.end+this.options.scrollPaddingEnd:t.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(n,o),o]},this.isDynamicMode=()=>this.elementsCache.size>0,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(e,{align:o="start",behavior:t}={})=>{this.cancelScrollToIndex(),t==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,o),{adjustments:void 0,behavior:t})},this.scrollToIndex=(e,{align:o="auto",behavior:t}={})=>{e=Math.max(0,Math.min(e,this.options.count-1)),this.cancelScrollToIndex(),t==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const i=this.getOffsetForIndex(e,o);if(!i)return;const[a,n]=i;this._scrollToOffset(a,{adjustments:void 0,behavior:t}),t!=="smooth"&&this.isDynamicMode()&&this.targetWindow&&(this.scrollToIndexTimeoutId=this.targetWindow.setTimeout(()=>{if(this.scrollToIndexTimeoutId=null,this.elementsCache.has(this.options.getItemKey(e))){const[h]=ee(this.getOffsetForIndex(e,n));Ae(h,this.getScrollOffset())||this.scrollToIndex(e,{align:n,behavior:t})}else this.scrollToIndex(e,{align:n,behavior:t})}))},this.scrollBy=(e,{behavior:o}={})=>{this.cancelScrollToIndex(),o==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+e,{adjustments:void 0,behavior:o})},this.getTotalSize=()=>{var e;const o=this.getMeasurements();let t;return o.length===0?t=this.options.paddingStart:t=this.options.lanes===1?((e=o[o.length-1])==null?void 0:e.end)??0:Math.max(...o.slice(-this.options.lanes).map(i=>i.end)),t-this.options.scrollMargin+this.options.paddingEnd},this._scrollToOffset=(e,{adjustments:o,behavior:t})=>{this.options.scrollToFn(e,{behavior:t,adjustments:o},this)},this.measure=()=>{var e,o;this.itemSizeCache=new Map,(o=(e=this.options).onChange)==null||o.call(e,this,!1)},this.setOptions(r)}}const fe=(l,r,e,o)=>{for(;l<=r;){const t=(l+r)/2|0,i=e(t);if(i<o)l=t+1;else if(i>o)r=t-1;else return t}return l>0?l-1:0};function Ue({measurements:l,outerSize:r,scrollOffset:e}){const o=l.length-1,i=fe(0,o,n=>l[n].start,e);let a=i;for(;a<o&&l[a].end<e+r;)a++;return{startIndex:i,endIndex:a}}function Ke(l){const r=new We(J(l)),e=ge(r),o=r._didMount();return N(()=>J(l).getScrollElement(),t=>{t&&r._willUpdate()},{immediate:!0}),N(()=>J(l),t=>{r.setOptions({...t,onChange:(i,a)=>{var n;oe(e),(n=t.onChange)==null||n.call(t,i,a)}}),r._willUpdate(),oe(e)},{immediate:!0}),xe(o),e}function qe(l){return Ke(S(()=>({observeElementRect:_e,observeElementOffset:Ne,scrollToFn:Le,...J(l)})))}function He(){let l=te();return ue(()=>l.dispose()),l}function Ye(){let l=He();return r=>{l.dispose(),l.nextFrame(r)}}function se(l){return[l.screenX,l.screenY]}function Je(){let l=A([-1,-1]);return{wasMoved(r){let e=se(r);return l.value[0]===e[0]&&l.value[1]===e[1]?!1:(l.value=e,!0)},update(r){l.value=se(r)}}}function Xe({container:l,accept:r,walk:e,enabled:o}){H(()=>{let t=l.value;if(!t||o!==void 0&&!o.value)return;let i=de(l);if(!i)return;let a=Object.assign(v=>r(v),{acceptNode:r}),n=i.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,a,!1);for(;n.nextNode();)e(n.currentNode)})}var pe=(l=>(l[l.Left=0]="Left",l[l.Right=2]="Right",l))(pe||{});function Ge(l){throw new Error("Unexpected object: "+l)}var P=(l=>(l[l.First=0]="First",l[l.Previous=1]="Previous",l[l.Next=2]="Next",l[l.Last=3]="Last",l[l.Specific=4]="Specific",l[l.Nothing=5]="Nothing",l))(P||{});function re(l,r){let e=r.resolveItems();if(e.length<=0)return null;let o=r.resolveActiveIndex(),t=o??-1;switch(l.focus){case 0:{for(let i=0;i<e.length;++i)if(!r.resolveDisabled(e[i],i,e))return i;return o}case 1:{t===-1&&(t=e.length);for(let i=t-1;i>=0;--i)if(!r.resolveDisabled(e[i],i,e))return i;return o}case 2:{for(let i=t+1;i<e.length;++i)if(!r.resolveDisabled(e[i],i,e))return i;return o}case 3:{for(let i=e.length-1;i>=0;--i)if(!r.resolveDisabled(e[i],i,e))return i;return o}case 4:{for(let i=0;i<e.length;++i)if(r.resolveId(e[i],i,e)===l.id)return i;return o}case 5:return null;default:Ge(l)}}var Qe={};function Ze(l,r){return l===r}var et=(l=>(l[l.Open=0]="Open",l[l.Closed=1]="Closed",l))(et||{}),tt=(l=>(l[l.Single=0]="Single",l[l.Multi=1]="Multi",l))(tt||{}),lt=(l=>(l[l.Pointer=0]="Pointer",l[l.Focus=1]="Focus",l[l.Other=2]="Other",l))(lt||{});let he=Symbol("ComboboxContext");function U(l){let r=ve(he,null);if(r===null){let e=new Error(`<${l} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,U),e}return r}let me=Symbol("VirtualContext"),nt=W({name:"VirtualProvider",setup(l,{slots:r}){let e=U("VirtualProvider"),o=S(()=>{let n=I(e.optionsRef);if(!n)return{start:0,end:0};let v=window.getComputedStyle(n);return{start:parseFloat(v.paddingBlockStart||v.paddingTop),end:parseFloat(v.paddingBlockEnd||v.paddingBottom)}}),t=qe(S(()=>({scrollPaddingStart:o.value.start,scrollPaddingEnd:o.value.end,count:e.virtual.value.options.length,estimateSize(){return 40},getScrollElement(){return I(e.optionsRef)},overscan:12}))),i=S(()=>{var n;return(n=e.virtual.value)==null?void 0:n.options}),a=A(0);return N([i],()=>{a.value+=1}),ce(me,e.virtual.value?t:null),()=>[G("div",{style:{position:"relative",width:"100%",height:`${t.value.getTotalSize()}px`},ref:n=>{if(n){if(typeof process<"u"&&Qe.JEST_WORKER_ID!==void 0||e.activationTrigger.value===0)return;e.activeOptionIndex.value!==null&&e.virtual.value.options.length>e.activeOptionIndex.value&&t.value.scrollToIndex(e.activeOptionIndex.value)}}},t.value.getVirtualItems().map(n=>Te(r.default({option:e.virtual.value.options[n.index],open:e.comboboxState.value===0})[0],{key:`${a.value}-${n.index}`,"data-index":n.index,"aria-setsize":e.virtual.value.options.length,"aria-posinset":n.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${n.start}px)`,overflowAnchor:"none"}})))]}}),at=W({name:"Combobox",emits:{"update:modelValue":l=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],nullable:!0,default:null},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1},immediate:{type:[Boolean],default:!1},virtual:{type:Object,default:null}},inheritAttrs:!1,setup(l,{slots:r,attrs:e,emit:o}){let t=A(1),i=A(null),a=A(null),n=A(null),v=A(null),h=A({static:!1,hold:!1}),p=A([]),d=A(null),C=A(2),M=A(!1);function R(s=f=>f){let f=d.value!==null?p.value[d.value]:null,b=s(p.value.slice()),g=b.length>0&&b[0].dataRef.order.value!==null?b.sort((T,V)=>T.dataRef.order.value-V.dataRef.order.value):Me(b,T=>I(T.dataRef.domRef)),E=f?g.indexOf(f):null;return E===-1&&(E=null),{options:g,activeOptionIndex:E}}let F=S(()=>l.multiple?1:0),$=S(()=>l.nullable),[D,m]=Pe(S(()=>l.modelValue),s=>o("update:modelValue",s),S(()=>l.defaultValue)),y=S(()=>D.value===void 0?L(F.value,{1:[],0:void 0}):D.value),z=null,c=null;function x(s){return L(F.value,{0(){return m==null?void 0:m(s)},1:()=>{let f=_(u.value.value).slice(),b=_(s),g=f.findIndex(E=>u.compare(b,_(E)));return g===-1?f.push(b):f.splice(g,1),m==null?void 0:m(f)}})}let w=S(()=>{});N([w],([s],[f])=>{if(u.virtual.value&&s&&f&&d.value!==null){let b=s.indexOf(f[d.value]);b!==-1?d.value=b:d.value=null}});let u={comboboxState:t,value:y,mode:F,compare(s,f){if(typeof l.by=="string"){let b=l.by;return(s==null?void 0:s[b])===(f==null?void 0:f[b])}return l.by===null?Ze(s,f):l.by(s,f)},calculateIndex(s){return u.virtual.value?l.by===null?u.virtual.value.options.indexOf(s):u.virtual.value.options.findIndex(f=>u.compare(f,s)):p.value.findIndex(f=>u.compare(f.dataRef.value,s))},defaultValue:S(()=>l.defaultValue),nullable:$,immediate:S(()=>!1),virtual:S(()=>null),inputRef:a,labelRef:i,buttonRef:n,optionsRef:v,disabled:S(()=>l.disabled),options:p,change(s){m(s)},activeOptionIndex:S(()=>{if(M.value&&d.value===null&&(u.virtual.value?u.virtual.value.options.length>0:p.value.length>0)){if(u.virtual.value){let f=u.virtual.value.options.findIndex(b=>{var g;return!((g=u.virtual.value)!=null&&g.disabled(b))});if(f!==-1)return f}let s=p.value.findIndex(f=>!f.dataRef.disabled);if(s!==-1)return s}return d.value}),activationTrigger:C,optionsPropsRef:h,closeCombobox(){M.value=!1,!l.disabled&&t.value!==1&&(t.value=1,d.value=null)},openCombobox(){if(M.value=!0,!l.disabled&&t.value!==0){if(u.value.value){let s=u.calculateIndex(u.value.value);s!==-1&&(d.value=s)}t.value=0}},setActivationTrigger(s){C.value=s},goToOption(s,f,b){M.value=!1,z!==null&&cancelAnimationFrame(z),z=requestAnimationFrame(()=>{if(l.disabled||v.value&&!h.value.static&&t.value===1)return;if(u.virtual.value){d.value=s===P.Specific?f:re({focus:s},{resolveItems:()=>u.virtual.value.options,resolveActiveIndex:()=>{var T,V;return(V=(T=u.activeOptionIndex.value)!=null?T:u.virtual.value.options.findIndex(j=>{var K;return!((K=u.virtual.value)!=null&&K.disabled(j))}))!=null?V:null},resolveDisabled:T=>u.virtual.value.disabled(T),resolveId(){throw new Error("Function not implemented.")}}),C.value=b??2;return}let g=R();if(g.activeOptionIndex===null){let T=g.options.findIndex(V=>!V.dataRef.disabled);T!==-1&&(g.activeOptionIndex=T)}let E=s===P.Specific?f:re({focus:s},{resolveItems:()=>g.options,resolveActiveIndex:()=>g.activeOptionIndex,resolveId:T=>T.id,resolveDisabled:T=>T.dataRef.disabled});d.value=E,C.value=b??2,p.value=g.options})},selectOption(s){let f=p.value.find(g=>g.id===s);if(!f)return;let{dataRef:b}=f;x(b.value)},selectActiveOption(){if(u.activeOptionIndex.value!==null){if(u.virtual.value)x(u.virtual.value.options[u.activeOptionIndex.value]);else{let{dataRef:s}=p.value[u.activeOptionIndex.value];x(s.value)}u.goToOption(P.Specific,u.activeOptionIndex.value)}},registerOption(s,f){let b=Se({id:s,dataRef:f});if(u.virtual.value){p.value.push(b);return}c&&cancelAnimationFrame(c);let g=R(E=>(E.push(b),E));d.value===null&&u.isSelected(f.value.value)&&(g.activeOptionIndex=g.options.indexOf(b)),p.value=g.options,d.value=g.activeOptionIndex,C.value=2,g.options.some(E=>!I(E.dataRef.domRef))&&(c=requestAnimationFrame(()=>{let E=R();p.value=E.options,d.value=E.activeOptionIndex}))},unregisterOption(s,f){if(z!==null&&cancelAnimationFrame(z),f&&(M.value=!0),u.virtual.value){p.value=p.value.filter(g=>g.id!==s);return}let b=R(g=>{let E=g.findIndex(T=>T.id===s);return E!==-1&&g.splice(E,1),g});p.value=b.options,d.value=b.activeOptionIndex,C.value=2},isSelected(s){return L(F.value,{0:()=>u.compare(_(u.value.value),_(s)),1:()=>_(u.value.value).some(f=>u.compare(_(f),_(s)))})},isActive(s){return d.value===u.calculateIndex(s)}};Oe([a,n,v],()=>u.closeCombobox(),S(()=>t.value===0)),ce(he,u),Ie(S(()=>L(t.value,{0:X.Open,1:X.Closed})));let O=S(()=>{var s;return(s=I(a))==null?void 0:s.closest("form")});return le(()=>{N([O],()=>{if(!O.value||l.defaultValue===void 0)return;function s(){u.change(l.defaultValue)}return O.value.addEventListener("reset",s),()=>{var f;(f=O.value)==null||f.removeEventListener("reset",s)}},{immediate:!0})}),()=>{var s,f,b;let{name:g,disabled:E,form:T,...V}=l,j={open:t.value===0,disabled:E,activeIndex:u.activeOptionIndex.value,activeOption:u.activeOptionIndex.value===null?null:u.virtual.value?u.virtual.value.options[(s=u.activeOptionIndex.value)!=null?s:0]:(b=(f=u.options.value[u.activeOptionIndex.value])==null?void 0:f.dataRef.value)!=null?b:null,value:y.value};return G(we,[...g!=null&&y.value!=null?Fe({[g]:y.value}).map(([K,be])=>G(Re,ye({features:Ce.Hidden,key:K,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:T,disabled:E,name:K,value:be}))):[],Y({theirProps:{...e,...ne(V,["by","defaultValue","immediate","modelValue","multiple","nullable","onUpdate:modelValue","virtual"])},ourProps:{},slot:j,slots:r,attrs:e,name:"Combobox"})])}}}),st=W({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(l,{attrs:r,slots:e,expose:o}){var t;let i=(t=l.id)!=null?t:`headlessui-combobox-button-${Z()}`,a=U("ComboboxButton");o({el:a.buttonRef,$el:a.buttonRef});function n(p){a.disabled.value||(a.comboboxState.value===0?a.closeCombobox():(p.preventDefault(),a.openCombobox()),B(()=>{var d;return(d=I(a.inputRef))==null?void 0:d.focus({preventScroll:!0})}))}function v(p){switch(p.key){case k.ArrowDown:p.preventDefault(),p.stopPropagation(),a.comboboxState.value===1&&a.openCombobox(),B(()=>{var d;return(d=a.inputRef.value)==null?void 0:d.focus({preventScroll:!0})});return;case k.ArrowUp:p.preventDefault(),p.stopPropagation(),a.comboboxState.value===1&&(a.openCombobox(),B(()=>{a.value.value||a.goToOption(P.Last)})),B(()=>{var d;return(d=a.inputRef.value)==null?void 0:d.focus({preventScroll:!0})});return;case k.Escape:if(a.comboboxState.value!==0)return;p.preventDefault(),a.optionsRef.value&&!a.optionsPropsRef.value.static&&p.stopPropagation(),a.closeCombobox(),B(()=>{var d;return(d=a.inputRef.value)==null?void 0:d.focus({preventScroll:!0})});return}}let h=ze(S(()=>({as:l.as,type:r.type})),a.buttonRef);return()=>{var p,d;let C={open:a.comboboxState.value===0,disabled:a.disabled.value,value:a.value.value},{...M}=l,R={ref:a.buttonRef,id:i,type:h.value,tabindex:"-1","aria-haspopup":"listbox","aria-controls":(p=I(a.optionsRef))==null?void 0:p.id,"aria-expanded":a.comboboxState.value===0,"aria-labelledby":a.labelRef.value?[(d=I(a.labelRef))==null?void 0:d.id,i].join(" "):void 0,disabled:a.disabled.value===!0?!0:void 0,onKeydown:v,onClick:n};return Y({ourProps:R,theirProps:M,slot:C,attrs:r,slots:e,name:"ComboboxButton"})}}}),rt=W({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function},defaultValue:{type:String,default:void 0},id:{type:String,default:null}},emits:{change:l=>!0},setup(l,{emit:r,attrs:e,slots:o,expose:t}){var i;let a=(i=l.id)!=null?i:`headlessui-combobox-input-${Z()}`,n=U("ComboboxInput"),v=S(()=>de(I(n.inputRef))),h={value:!1};t({el:n.inputRef,$el:n.inputRef});function p(){n.change(null);let c=I(n.optionsRef);c&&(c.scrollTop=0),n.goToOption(P.Nothing)}let d=S(()=>{var c;let x=n.value.value;return I(n.inputRef)?typeof l.displayValue<"u"&&x!==void 0?(c=l.displayValue(x))!=null?c:"":typeof x=="string"?x:"":""});le(()=>{N([d,n.comboboxState,v],([c,x],[w,u])=>{if(h.value)return;let O=I(n.inputRef);O&&((u===0&&x===1||c!==w)&&(O.value=c),requestAnimationFrame(()=>{var s;if(h.value||!O||((s=v.value)==null?void 0:s.activeElement)!==O)return;let{selectionStart:f,selectionEnd:b}=O;Math.abs((b??0)-(f??0))===0&&f===0&&O.setSelectionRange(O.value.length,O.value.length)}))},{immediate:!0}),N([n.comboboxState],([c],[x])=>{if(c===0&&x===1){if(h.value)return;let w=I(n.inputRef);if(!w)return;let u=w.value,{selectionStart:O,selectionEnd:s,selectionDirection:f}=w;w.value="",w.value=u,f!==null?w.setSelectionRange(O,s,f):w.setSelectionRange(O,s)}})});let C=A(!1);function M(){C.value=!0}function R(){te().nextFrame(()=>{C.value=!1})}let F=Ye();function $(c){switch(h.value=!0,F(()=>{h.value=!1}),c.key){case k.Enter:if(h.value=!1,n.comboboxState.value!==0||C.value)return;if(c.preventDefault(),c.stopPropagation(),n.activeOptionIndex.value===null){n.closeCombobox();return}n.selectActiveOption(),n.mode.value===0&&n.closeCombobox();break;case k.ArrowDown:return h.value=!1,c.preventDefault(),c.stopPropagation(),L(n.comboboxState.value,{0:()=>n.goToOption(P.Next),1:()=>n.openCombobox()});case k.ArrowUp:return h.value=!1,c.preventDefault(),c.stopPropagation(),L(n.comboboxState.value,{0:()=>n.goToOption(P.Previous),1:()=>{n.openCombobox(),B(()=>{n.value.value||n.goToOption(P.Last)})}});case k.Home:if(c.shiftKey)break;return h.value=!1,c.preventDefault(),c.stopPropagation(),n.goToOption(P.First);case k.PageUp:return h.value=!1,c.preventDefault(),c.stopPropagation(),n.goToOption(P.First);case k.End:if(c.shiftKey)break;return h.value=!1,c.preventDefault(),c.stopPropagation(),n.goToOption(P.Last);case k.PageDown:return h.value=!1,c.preventDefault(),c.stopPropagation(),n.goToOption(P.Last);case k.Escape:if(h.value=!1,n.comboboxState.value!==0)return;c.preventDefault(),n.optionsRef.value&&!n.optionsPropsRef.value.static&&c.stopPropagation(),n.nullable.value&&n.mode.value===0&&n.value.value===null&&p(),n.closeCombobox();break;case k.Tab:if(h.value=!1,n.comboboxState.value!==0)return;n.mode.value===0&&n.activationTrigger.value!==1&&n.selectActiveOption(),n.closeCombobox();break}}function D(c){r("change",c),n.nullable.value&&n.mode.value===0&&c.target.value===""&&p(),n.openCombobox()}function m(c){var x,w,u;let O=(x=c.relatedTarget)!=null?x:ie.find(s=>s!==c.currentTarget);if(h.value=!1,!((w=I(n.optionsRef))!=null&&w.contains(O))&&!((u=I(n.buttonRef))!=null&&u.contains(O))&&n.comboboxState.value===0)return c.preventDefault(),n.mode.value===0&&(n.nullable.value&&n.value.value===null?p():n.activationTrigger.value!==1&&n.selectActiveOption()),n.closeCombobox()}function y(c){var x,w,u;let O=(x=c.relatedTarget)!=null?x:ie.find(s=>s!==c.currentTarget);(w=I(n.buttonRef))!=null&&w.contains(O)||(u=I(n.optionsRef))!=null&&u.contains(O)||n.disabled.value||n.immediate.value&&n.comboboxState.value!==0&&(n.openCombobox(),te().nextFrame(()=>{n.setActivationTrigger(1)}))}let z=S(()=>{var c,x,w,u;return(u=(w=(x=l.defaultValue)!=null?x:n.defaultValue.value!==void 0?(c=l.displayValue)==null?void 0:c.call(l,n.defaultValue.value):null)!=null?w:n.defaultValue.value)!=null?u:""});return()=>{var c,x,w,u,O,s,f;let b={open:n.comboboxState.value===0},{displayValue:g,onChange:E,...T}=l,V={"aria-controls":(c=n.optionsRef.value)==null?void 0:c.id,"aria-expanded":n.comboboxState.value===0,"aria-activedescendant":n.activeOptionIndex.value===null?void 0:n.virtual.value?(x=n.options.value.find(j=>!n.virtual.value.disabled(j.dataRef.value)&&n.compare(j.dataRef.value,n.virtual.value.options[n.activeOptionIndex.value])))==null?void 0:x.id:(w=n.options.value[n.activeOptionIndex.value])==null?void 0:w.id,"aria-labelledby":(s=(u=I(n.labelRef))==null?void 0:u.id)!=null?s:(O=I(n.buttonRef))==null?void 0:O.id,"aria-autocomplete":"list",id:a,onCompositionstart:M,onCompositionend:R,onKeydown:$,onInput:D,onFocus:y,onBlur:m,role:"combobox",type:(f=e.type)!=null?f:"text",tabIndex:0,ref:n.inputRef,defaultValue:z.value,disabled:n.disabled.value===!0?!0:void 0};return Y({ourProps:V,theirProps:T,slot:b,attrs:e,slots:o,features:Q.RenderStrategy|Q.Static,name:"ComboboxInput"})}}}),ut=W({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(l,{attrs:r,slots:e,expose:o}){let t=U("ComboboxOptions"),i=`headlessui-combobox-options-${Z()}`;o({el:t.optionsRef,$el:t.optionsRef}),H(()=>{t.optionsPropsRef.value.static=l.static}),H(()=>{t.optionsPropsRef.value.hold=l.hold});let a=Ee(),n=S(()=>a!==null?(a.value&X.Open)===X.Open:t.comboboxState.value===0);Xe({container:S(()=>I(t.optionsRef)),enabled:S(()=>t.comboboxState.value===0),accept(h){return h.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:h.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(h){h.setAttribute("role","none")}});function v(h){h.preventDefault()}return()=>{var h,p,d;let C={open:t.comboboxState.value===0},M={"aria-labelledby":(d=(h=I(t.labelRef))==null?void 0:h.id)!=null?d:(p=I(t.buttonRef))==null?void 0:p.id,id:i,ref:t.optionsRef,role:"listbox","aria-multiselectable":t.mode.value===1?!0:void 0,onMousedown:v},R=ne(l,["hold"]);return Y({ourProps:M,theirProps:R,slot:C,attrs:r,slots:t.virtual.value&&t.comboboxState.value===0?{...e,default:()=>[G(nt,{},e.default)]}:e,features:Q.RenderStrategy|Q.Static,visible:n.value,name:"ComboboxOptions"})}}}),dt=W({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},order:{type:[Number],default:null}},setup(l,{slots:r,attrs:e,expose:o}){let t=U("ComboboxOption"),i=`headlessui-combobox-option-${Z()}`,a=A(null),n=S(()=>l.disabled);o({el:a,$el:a});let v=S(()=>{var m;return t.virtual.value?t.activeOptionIndex.value===t.calculateIndex(l.value):t.activeOptionIndex.value===null?!1:((m=t.options.value[t.activeOptionIndex.value])==null?void 0:m.id)===i}),h=S(()=>t.isSelected(l.value)),p=ve(me,null),d=S(()=>({disabled:l.disabled,value:l.value,domRef:a,order:S(()=>l.order)}));le(()=>t.registerOption(i,d)),ue(()=>t.unregisterOption(i,v.value)),H(()=>{let m=I(a);m&&(p==null||p.value.measureElement(m))}),H(()=>{t.comboboxState.value===0&&v.value&&(t.virtual.value||t.activationTrigger.value!==0&&B(()=>{var m,y;return(y=(m=I(a))==null?void 0:m.scrollIntoView)==null?void 0:y.call(m,{block:"nearest"})}))});function C(m){m.preventDefault(),m.button===pe.Left&&(n.value||(t.selectOption(i),De()||requestAnimationFrame(()=>{var y;return(y=I(t.inputRef))==null?void 0:y.focus({preventScroll:!0})}),t.mode.value===0&&t.closeCombobox()))}function M(){var m;if(l.disabled||(m=t.virtual.value)!=null&&m.disabled(l.value))return t.goToOption(P.Nothing);let y=t.calculateIndex(l.value);t.goToOption(P.Specific,y)}let R=Je();function F(m){R.update(m)}function $(m){var y;if(!R.wasMoved(m)||l.disabled||(y=t.virtual.value)!=null&&y.disabled(l.value)||v.value)return;let z=t.calculateIndex(l.value);t.goToOption(P.Specific,z,0)}function D(m){var y;R.wasMoved(m)&&(l.disabled||(y=t.virtual.value)!=null&&y.disabled(l.value)||v.value&&(t.optionsPropsRef.value.hold||t.goToOption(P.Nothing)))}return()=>{let{disabled:m}=l,y={active:v.value,selected:h.value,disabled:m},z={id:i,ref:a,role:"option",tabIndex:m===!0?void 0:-1,"aria-disabled":m===!0?!0:void 0,"aria-selected":h.value,disabled:void 0,onMousedown:C,onFocus:M,onPointerenter:F,onMouseenter:F,onPointermove:$,onMousemove:$,onPointerleave:D,onMouseleave:D},c=ne(l,["order","value"]);return Y({ourProps:z,theirProps:c,slot:y,attrs:e,slots:r,name:"ComboboxOption"})}}});export{Je as a,P as c,re as f,rt as i,at as l,st as n,dt as r,ut as u};

(() => {
 'use strict';
 const all = Array.isArray(window.SMART_EQUIPMENT) ? window.SMART_EQUIPMENT : [];
 const names={'uva3-s2':'uv.html','legens-1060s':'laser.html','fdm-printer':'fdm.html','sla-printer':'sla.html','healthcare':'healthcare.html'};
 const current=all.find(x=>x.id===document.body.dataset.device);
 const app=document.getElementById('app');
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const state={tab:'steps',step:0};
 const img=e=>`<img src="${esc(e.image)}" alt="${esc(e.model)} 장비 대표 사진" loading="lazy">`;
 const header=()=>`<header class="hero"><a class="brand" href="index.html" aria-label="매뉴얼 홈"><img class="logo" src="assets/images/gimhae_logo.jpg" alt="김해대학교 로고"><span><strong>김해대학교</strong><small>AI융합의료과</small></span></a><div class="hero-title">SMART MANUAL</div><div class="hero-sub">스마트 장비 사용 매뉴얼</div></header>`;
 const bottom=()=>`<nav class="bottom" aria-label="하단 메뉴"><a href="index.html">⌂<small>홈</small></a><a href="index.html#devices">▦<small>장비목록</small></a><a href="index.html#guide">ⓘ<small>안내</small></a></nav>`;
 const eqLink=(e,extra='')=>`<a class="device-tile ${extra}" href="${names[e.id]}">${img(e)}<div><strong>${esc(e.name)}</strong><small>${esc(e.model)}</small></div><span aria-hidden="true">›</span></a>`;
 function home(){
  const h=all.filter(x=>x.id!=='healthcare'), healthcare=all.find(x=>x.id==='healthcare');
  app.innerHTML=`<div class="shell">${header()}<main><section class="intro"><strong>장비 매뉴얼</strong><p>장비 이름을 선택하거나 NFC 태그를 인식하면 해당 장비의 사용법을 확인할 수 있어요.</p></section><section id="devices"><h2>실습 장비 목록</h2><div class="device-grid">${h.map(e=>eqLink(e)).join('')}</div>${healthcare?eqLink(healthcare,'wide'):''}</section><section class="notice" id="guide"><strong>NFC 사용 안내</strong><p>휴대전화에서 NFC를 켠 뒤 장비에 부착된 태그에 접촉하세요. 해당 장비의 웹 매뉴얼이 열립니다.</p><p>매뉴얼은 실습 교육 보조자료이며, 장비 사용 시 담당자의 안전 지침을 우선합니다.</p></section></main>${bottom()}</div>`;
 }
 function eqInfo(e){
  const loc=(e.location||[]).find(x=>Array.isArray(x)&&x[0]==='장비 위치');
  const rows=(e.displaySpecs||[]).map(([k,v])=>{
   const isUrl=k==='공식 홈페이지' && /^https:\/\//.test(v);
   return `<div class="spec-row"><span>${esc(k)}</span><strong>${isUrl?`<a href="${esc(v)}" target="_blank" rel="noopener noreferrer">공식 사이트 열기 ↗</a>`:esc(v)}</strong></div>`;
  }).join('');
  return `<div class="specs">${rows}${loc?`<div class="spec-row"><span>장비 위치</span><strong>${esc(loc[1])}</strong></div>`:''}</div>`;
 }
 const numbered=a=>(a||[]).length?`<ol>${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`:'';
 function steps(e){return `<div class="step-list">${(e.steps||[]).map((s,i)=>`<button class="step-button ${i===state.step?'active':''}" data-step="${i}"><span class="step-num">${String(i+1).padStart(2,'0')}</span><span><strong>${esc(s.title)}</strong><small>${esc(s.summary)}</small></span><span class="arrow">›</span></button>`).join('')}</div>${guide(e)}`;}
 function guide(e){
  const s=e.steps[state.step]; if(!s)return '';
  const subs=(s.substeps||[]).map(x=>`<details class="substep"><summary>${esc(x.title)}</summary>${x.path?`<p class="path">${esc(x.path)}</p>`:''}${numbered(x.actions)}</details>`).join('');
  return `<section class="step-detail" id="step-detail"><div class="eyebrow">STEP ${String(state.step+1).padStart(2,'0')} / ${e.steps.length}</div><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p><h4>확인할 사항</h4>${numbered(s.checks)}${subs?`<h4>세부 조작</h4>${subs}`:''}${s.warning?`<aside class="warning">주의 · ${esc(s.warning)}</aside>`:''}<div class="video-placeholder">▶<span>작동 영상 추가 예정</span><small>실제 MP4 영상은 아직 포함되지 않았습니다.</small></div><div class="step-actions"><button data-prev ${state.step===0?'disabled':''}>이전 단계</button><button class="primary" data-next ${state.step===e.steps.length-1?'disabled':''}>다음 단계</button></div></section>`;
 }
 function safety(e){return `<section class="cards">${e.safety.map(x=>`<article class="line-card"><strong>${esc(x.title)}</strong><p>${esc(x.description)}</p></article>`).join('')}</section>`;}
 function troubles(e){return `<section class="cards">${e.troubles.map(x=>`<details class="trouble"><summary>${esc(x.title)}</summary><div class="trouble-content"><p><strong>가능한 원인</strong> ${esc(x.brief)}</p><strong>확인 및 해결 방법</strong>${numbered(x.actions)}${x.staffRequired?'<aside class="warning">담당자 점검 필요 · 강제 조작하거나 분해하지 마세요.</aside>':''}</div></details>`).join('')}</section>`;}
 function parts(e){return (e.parts||[]).length?`<section class="cards">${e.parts.map(x=>`<article class="line-card"><strong>${esc(x.name)}</strong><p>${esc(x.location)} · ${esc(x.function)}</p></article>`).join('')}</section>`:'';}
 function detail(e){
  const tabs=[['steps','작동방법'],['safety','안전수칙'],['troubles','문제해결'],['info','장비정보']];
  if(e.parts&&e.parts.length)tabs.splice(1,0,['parts','제품 구성']);
  const tab=state.tab;
  const content=tab==='steps'?steps(e):tab==='safety'?safety(e):tab==='troubles'?troubles(e):tab==='parts'?parts(e):eqInfo(e);
  app.innerHTML=`<div class="shell">${header()}<main><a class="back-link" href="index.html">‹ 전체 장비목록</a><section class="equipment-head"><div class="big-photo">${img(e)}</div><div class="type">${esc(e.category)}</div><h1>${esc(e.name)}</h1><p class="model">${esc(e.model)}</p><p>${esc(e.description)}</p><div class="location">⌖ A 창의관 실습실 203호</div></section><nav class="tabs">${tabs.map(([k,n])=>`<button data-tab="${k}" class="${tab===k?'selected':''}">${n}</button>`).join('')}</nav><div class="tab-content">${content}</div><section class="other"><h2>다른 장비 매뉴얼</h2><div class="device-grid">${all.filter(x=>x.id!==e.id).map(x=>eqLink(x)).join('')}</div></section></main>${bottom()}</div>`;
 }
 function render(){current?detail(current):home();}
 app.addEventListener('click',ev=>{
  const tab=ev.target.closest('[data-tab]');if(tab){state.tab=tab.dataset.tab;render();return;}
  const step=ev.target.closest('[data-step]');if(step){state.step=Number(step.dataset.step);render();document.getElementById('step-detail')?.scrollIntoView({behavior:'smooth',block:'start'});return;}
  if(ev.target.closest('[data-prev]')){state.step=Math.max(0,state.step-1);render();document.getElementById('step-detail')?.scrollIntoView({behavior:'smooth'});}
  if(ev.target.closest('[data-next]')){state.step=Math.min(current.steps.length-1,state.step+1);render();document.getElementById('step-detail')?.scrollIntoView({behavior:'smooth'});}
 });
 render();
})();

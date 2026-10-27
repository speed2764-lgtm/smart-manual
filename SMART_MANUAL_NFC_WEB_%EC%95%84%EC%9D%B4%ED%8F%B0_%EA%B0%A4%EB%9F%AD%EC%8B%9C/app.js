/* JavaScript 한 파일로 동작하는 정적 웹 매뉴얼.
 * 동일한 GitHub Pages 주소에 ?equipment=모델ID 를 붙여 NFC 태그와 연결합니다.
 */
(() => {
  'use strict';
  const data = Array.isArray(window.MANUAL_DATA) ? window.MANUAL_DATA : [];
  const app = document.getElementById('app');
  const validViews = new Set(['detail','steps','guide','safety','problems','specs']);
  const get = id => data.find(x => x.id === id);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const params = () => new URLSearchParams(location.search);
  function current() {
    const q = params();
    const equipment = get(q.get('equipment'));
    const view = validViews.has(q.get('view')) ? q.get('view') : 'detail';
    const step = Number.parseInt(q.get('step') || '1', 10);
    return {equipment, view, step: Number.isFinite(step) ? step : 1};
  }
  function href(id, view = 'detail', step = 1) {
    const q = new URLSearchParams();
    if (id) q.set('equipment', id);
    if (view !== 'detail') q.set('view', view);
    if (view === 'guide') q.set('step', String(step));
    return location.pathname + (q.toString() ? '?' + q.toString() : '');
  }
  function navigate(id, view = 'detail', step = 1) {
    const url = href(id, view, step);
    window.history.pushState({}, '', url);
    render(true);
  }
  const icons = {steps:'▶',safety:'◇',problems:'⚒',specs:'ⓘ'};
  const vnames = {detail:'장비 매뉴얼',steps:'작동방법',guide:'작동방법',safety:'안전수칙',problems:'문제해결',specs:'장비정보'};
  function brand() {return `<span class="brand-mark">M</span><span class="brand-text">SMART MANUAL<span class="subline">GIMHAE UNIVERSITY · EQUIPMENT GUIDE</span></span>`;}
  function header(equipment,view) {
    const onHome = !equipment;
    return `<header class="masthead ${onHome ? '' : 'small-mast'}">
      <div class="brandline"><span class="brand">${brand()}</span>${onHome ? '<span class="brand-end">NFC · WEB</span>' : '<button class="iconbtn" type="button" aria-label="전체 장비 목록" data-home>⌂</button>'}</div>
      ${onHome ? `<div class="mast-copy"><div class="eyebrow">QUICK & SMART EQUIPMENT GUIDE</div><h1>장비 사용법을<br>더 쉽고 정확하게.</h1><p>장비 사진부터 단계별 작동방법까지, 필요한 내용을 바로 확인하세요.</p></div>` : `<div class="mast-copy"><button class="top-back" type="button" data-back>‹ &nbsp;뒤로가기</button><h1>${esc(view==='detail' ? equipment.name : vnames[view])}</h1><p>${esc(equipment.model)} · ${esc(equipment.group)} 매뉴얼</p></div>`}
    </header>`;
  }
  function footer(equipment, view) {
    const id = equipment?.id;
    const entries = [{label:'전체 장비',icon:'⌂',id:'home'},{label:'장비 상세',icon:'▦',id:'detail'},{label:'작동방법',icon:'▶',id:'steps'},{label:'안전수칙',icon:'◇',id:'safety'}];
    return `<nav class="bottombar" aria-label="주 메뉴">${entries.map(item=>`<button type="button" class="${(item.id==='home'?!equipment:view===item.id||view==='guide'&&item.id==='steps')?'active':''}" ${item.id==='home'?'data-home':`data-nav="${item.id}" ${id?'':'disabled'}`} aria-label="${item.label}"><span class="symbol">${item.icon}</span>${item.label}</button>`).join('')}</nav>`;
  }
  function equipmentCard(e) {
    return `<button class="equipment-card" type="button" data-select="${esc(e.id)}"><img src="${esc(e.image)}" alt="${esc(e.name)} 장비 사진" loading="lazy"><div class="equipment-card-content"><strong>${esc(e.name)}</strong><span>${esc(e.model)}</span>${e.steps.length===0?'<div style="margin-top:5px"><span class="tag draft">내용 준비 중</span></div>':''}</div></button>`;
  }
  function home() {
    return `<main class="body"><div class="section-head"><h2>실습 장비 선택</h2><small>${data.length}개 장비 목록</small></div><div class="grid-equipment">${data.map(equipmentCard).join('')}</div><div class="notice"><div class="notice-icon">⌁</div><p><strong>NFC 태그 사용 안내</strong><br>태그를 스마트폰에 대면 해당 장비의 웹 매뉴얼이 열립니다. 현재 화면에서 직접 장비를 선택할 수도 있습니다.</p></div><p class="sitefoot">SMART MANUAL · 교육용 시범 웹 매뉴얼</p></main>`;
  }
  function other(e) {
    const others = data.filter(x=>x.id!==e.id).slice(0,4);
    return `<section class="other-block"><div class="section-head"><h2>다른 장비 매뉴얼</h2><small>아이콘 선택</small></div><div class="other-list">${others.map(x=>`<button class="other-item" type="button" data-select="${esc(x.id)}"><span class="other-thumb"><img src="${esc(x.image)}" alt=""></span><span>${esc(x.name)}</span></button>`).join('')}</div></section>`;
  }
  function detail(e) {
    const menus=[{id:'steps',title:'작동방법',desc:'단계별 1~5초 영상'},{id:'safety',title:'안전수칙',desc:'꼭 확인할 주의사항'},{id:'problems',title:'문제해결',desc:'증상별 점검 안내'},{id:'specs',title:'장비정보',desc:'모델 및 참고자료'}];
    return `<main class="body"><div class="hero-photo"><span class="hero-chip">MODEL ${esc(e.model)}</span><img src="${esc(e.image)}" alt="${esc(e.name)} 대표 사진"></div><div class="device-intro"><span class="model">EQUIPMENT MANUAL</span><h2>${esc(e.name)}</h2><p>${esc(e.description)}</p></div>${e.draft?`<div class="notice warn"><div class="notice-icon">!</div><p>이 장비의 콘텐츠는 ${e.steps.length ? '담당자 검수가 필요한 교육용 초안' : '작성 준비 중'}입니다.</p></div>`:''}<div class="menu-grid">${menus.map(x=>`<button class="nav-card" type="button" data-nav="${x.id}" ${(e.steps.length===0&&x.id==='steps')?'disabled':''}><span class="nav-icon">${icons[x.id]}</span><strong>${x.title}</strong><small>${x.desc}</small></button>`).join('')}</div>${other(e)}<p class="sitefoot">제공된 정보는 실습 지도와 기기 안전장치를 대신하지 않습니다.</p></main>`;
  }
  function titleBlock(title,sub) {return `<div class="section-head"><h2>${esc(title)}</h2><small>${esc(sub)}</small></div>`;}
  function stepsList(e) {
    if(!e.steps.length)return `<main class="body"><div class="empty"><strong>작동방법 준비 중</strong><p>해당 모델의 공식 자료와 실제 장비를 확인한 뒤 등록할 예정입니다.</p></div>${other(e)}</main>`;
    return `<main class="body">${titleBlock('단계별 작동방법',`${e.steps.length}단계 · 영상 가이드`)}<div class="notice"><div class="notice-icon">▶</div><p>단계를 선택하면 작업설명, 조작 위치, 확인사항, 완료 기준을 볼 수 있습니다. MP4가 등록되면 자동 반복 재생됩니다.</p></div><div class="steps-list">${e.steps.map((s,i)=>`<button type="button" class="step-row" data-step="${i+1}"><span class="step-number">${String(i+1).padStart(2,'0')}</span><span class="step-row-main"><strong>${esc(s.title)}</strong><small>${esc(s.location)} · 권장 ${s.sec}초 영상</small></span><span class="chevron">›</span></button>`).join('')}</div><p class="sitefoot">${esc(e.source)}</p></main>`;
  }
  function media(e,n) {
    const filename = `${e.prefix}_step${String(n).padStart(2,'0')}.mp4`;
    const videoSrc = `assets/videos/${filename}`;
    const photoSrc = `assets/images/${e.prefix}_step${String(n).padStart(2,'0')}.jpg`;
    return `<div class="media-box" id="step-media"><img id="media-photo" src="${photoSrc}" data-fallback="${esc(e.image)}" alt="${esc(e.name)} ${n}단계 사진"/><video id="step-video" src="${videoSrc}" muted playsinline autoplay loop preload="metadata" aria-label="${esc(e.name)} ${n}단계 조작 동영상"></video><div class="media-overlay"><span class="media-pill" id="media-label">동영상 미등록 · 사진 안내</span><span class="video-play">▶</span></div></div>`;
  }
  function note(icon,title,content,cls='') {
    return `<section class="info-card ${cls}"><div class="linehead"><span class="mini-icon">${icon}</span>${esc(title)}</div>${Array.isArray(content)?`<ul>${content.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`:`<p>${esc(content)}</p>`}</section>`;
  }
  function guide(e,number) {
    if(!e.steps.length)return stepsList(e);
    const index=Math.min(Math.max(Number(number)-1,0),e.steps.length-1), s=e.steps[index],n=index+1;
    return `<main class="body"><div class="guide-heading"><div class="badge-line"><span class="tag">STEP ${String(n).padStart(2,'0')}</span><span class="muted" style="font-size:12px">${n} / ${e.steps.length}</span></div><div class="progress">${e.steps.map((_,i)=>`<i class="${i<=index?'done':''}"></i>`).join('')}</div><h2>${esc(s.title)}</h2><p>해당 단계의 사진·짧은 동영상과 설명을 확인하세요.</p></div>${media(e,n)}${note('▤','작업설명',s.detail)}${note('⌖','조작 위치',s.location)}${note('☑','확인사항',s.checks)}${note('✓','완료 기준',s.done,'done-card')}${note('!','주의사항',s.caution,'caution-card')}<div class="nav-actions"><button class="action secondary" type="button" ${index===0?'disabled':''} data-step="${n-1}">이전 단계</button><button class="action" type="button" data-step="${index===e.steps.length-1 ? 1 : n+1}">${index===e.steps.length-1 ? '처음부터 다시' : '다음 단계 →'}</button></div><button class="action secondary" type="button" data-nav="steps" style="width:100%">전체 단계 보기</button></main>`;
  }
  const safeIcons={sun:'☀',hand:'✋',ruler:'⌁',shield:'◇',alert:'!',wind:'≋'};
  function safety(e) {
    return `<main class="body">${titleBlock('안전수칙',`${e.safety.length}가지`)}${e.safety.length?e.safety.map((x,i)=>`<article class="rule"><div class="rule-mark">${safeIcons[x.icon]||'!'}</div><div><span class="tag">${String(i+1).padStart(2,'0')}</span><div style="margin-top:6px"><strong>${esc(x.title)}</strong></div><p>${esc(x.detail)}</p></div></article>`).join(''):'<div class="empty"><strong>안전수칙 준비 중</strong><p>모델 확인 후 안내가 등록됩니다.</p></div>'}<div class="notice warn"><div class="notice-icon">!</div><p>교육용 안전 안내입니다. 실제 장비의 제조사 지침과 담당자 안전 교육을 반드시 따르세요.</p></div></main>`;
  }
  function problems(e) {
    return `<main class="body">${titleBlock('문제해결',`${e.problems.length}개 항목`)}${e.problems.length?e.problems.map(x=>`<details class="problem"><summary>${esc(x.title)}</summary><div class="answer">${esc(x.answer)}</div></details>`).join(''):'<div class="empty"><strong>문제해결 안내 준비 중</strong></div>'}<div class="notice warn"><div class="notice-icon">!</div><p>장비에 이상이 있으면 조작을 중단하고 담당자에게 문의하세요.</p></div></main>`;
  }
  function specs(e) {
    return `<main class="body">${titleBlock('장비정보',e.model)}<div class="hero-photo" style="margin-bottom:17px"><img src="${esc(e.image)}" alt="${esc(e.name)}"></div><table class="spec-table"><tbody>${e.specs.map(([k,v])=>`<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</tbody></table><div class="notice"><div class="notice-icon">ⓘ</div><p>자료 출처: ${esc(e.source)}</p></div></main>`;
  }
  function attachMedia() {
    const frame=document.getElementById('step-media');if(!frame)return;
    const image=frame.querySelector('img'),video=frame.querySelector('video'),label=frame.querySelector('#media-label');
    image.addEventListener('error',()=>{if(image.src!==new URL(image.dataset.fallback,location.href).href)image.src=image.dataset.fallback;});
    video.addEventListener('loadeddata',()=>{
      frame.classList.add('playing'); label.textContent='작동 영상 · 자동 반복 재생';
      const playing=video.play();if(playing&&typeof playing.catch==='function')playing.catch(()=>{label.textContent='화면을 터치하여 재생';frame.style.cursor='pointer';frame.addEventListener('click',()=>video.play(),{once:true});});
    });
    video.addEventListener('error',()=>{frame.classList.remove('playing');label.textContent='영상 미등록 · 사진으로 안내';});
  }
  function render(scroll=false) {
    const {equipment:e,view,step}=current();
    const body=!e?home():view==='detail'?detail(e):view==='steps'?stepsList(e):view==='guide'?guide(e,step):view==='safety'?safety(e):view==='problems'?problems(e):specs(e);
    app.innerHTML=`<div class="shell">${header(e,view)}${body}${footer(e,view)}</div>`;
    document.title=`${e?`${e.name} · ${vnames[view]} | `:''}SMART MANUAL`;
    attachMedia();
    if(scroll)window.scrollTo({top:0,behavior:'instant'});
  }
  app.addEventListener('click',event=>{
    const el=event.target.closest('button'); if(!el||el.disabled)return;
    const {equipment:e,view,step}=current();
    if(el.hasAttribute('data-home')) navigate(null);
    else if(el.dataset.select) navigate(el.dataset.select);
    else if(el.dataset.nav && e) navigate(e.id,el.dataset.nav);
    else if(el.dataset.step && e) navigate(e.id,'guide',Number(el.dataset.step));
    else if(el.hasAttribute('data-back')) {
      if(view==='guide') navigate(e.id,'steps');
      else if(view!=='detail') navigate(e.id,'detail');
      else navigate(null);
    }
  });
  window.addEventListener('popstate',()=>render(true));
  render();
})();

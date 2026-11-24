/* Colourful Semantics - Powerhouse. Classroom prototype: local data only. */
const $=s=>document.querySelector(s);const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const G=[{id:'who',label:'Who?',colour:'#FF922F'},{id:'doing',label:'Doing?',colour:'#F8D72B'},{id:'what',label:'What?',colour:'#70CB65'},{id:'where',label:'Where?',colour:'#4EBAF5'},{id:'when',label:'When?',colour:'#EE86BC'},{id:'whom',label:'To who?',colour:'#D8A2DD'}];

const SIMPLE_WORDS={
 'chef':'cook', 'barista':'coffee maker', 'warehouse worker':'warehouse worker',
 'delivery driver':'delivery driver', 'shop assistant':'shop worker',
 'office worker':'office worker', 'receptionist':'receptionist',
 'learner':'learner', 'customer':'customer', 'cashier':'till worker',
 'invoice':'bill', 'document':'paper', 'vegetables':'veg',
 'television':'TV', 'laundry':'clothes',
 'getting dressed':'dressing', 'preparing':'making',
 'travelling':'going', 'boarding':'getting on',
 'in the shopping centre':'at the shops', 'at the train station':'at the station',
 'at the swimming pool':'at the pool', 'in the sports hall':'in the hall'
};
function easyWord(text){return SIMPLE_WORDS[String(text).toLowerCase()]||String(text)}
function easyTitle(text){return String(text||'').replace(/chef/gi,'cook').replace(/vegetables/gi,'veg')}

const ICONS={home:'<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>',settings:'<path d="M4 7h16M4 17h16M8 4v6M16 14v6"/>',back:'<path d="m15 18-6-6 6-6"/>',next:'<path d="m9 18 6-6-6-6"/>',image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="2"/><path d="m4 18 5-5 3 3 3-4 5 6"/>',plus:'<path d="M12 5v14M5 12h14"/>',check:'<path d="m5 12 5 5L20 7"/>',close:'<path d="M5 5 19 19M19 5 5 19"/>',sound:'<path d="m4 10 4 0 5-4v12l-5-4H4zM17 9c2 2 2 4 0 6M20 6c4 4 4 8 0 12"/>',pen:'<path d="m4 20 5-.8L20 8 16 4 5 15zM14 6l4 4"/>',reset:'<path d="M3 11a9 9 0 1 1 3 7M3 4v7h7"/>',trash:'<path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13"/>',upload:'<path d="M12 16V3m-5 5 5-5 5 5M4 17v4h16v-4"/>',download:'<path d="M12 3v14m-5-5 5 5 5-5M4 20h16"/>',save:'<path d="M4 4h14l2 2v14H4zM8 4v6h8V4M8 20v-7h8v7"/>',search:'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/>',chefh:'<path d="M6 13c-6-1-4-9 1-9 2-4 7-3 9 0 6-1 8 7 2 9v7H6zM6 15h12"/>',trophy:'<path d="M7 4h10v7a5 5 0 0 1-10 0zM7 6H3v3a4 4 0 0 0 4 4M17 6h4v3a4 4 0 0 1-4 4M12 16v4m-5 0h10"/>',game:'<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10v5m-2.5-2.5h5M16 11h.01M19 14h.01"/>',job:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 13h18"/>',college:'<path d="m2 9 10-5 10 5-10 5zM6 12v5c4 3 8 3 12 0v-5M22 9v8"/>',house:'<path d="m3 11 9-8 9 8v10H3zM9 21v-8h6v8"/>',shop:'<path d="m3 9 2-6h14l2 6-2 3v9H5v-9zM3 9h18M9 21v-7h6v7"/>',bus:'<rect x="4" y="3" width="16" height="17" rx="3"/><path d="M4 11h16M8 20v2m8-2v2M8 15h2m4 0h2"/>',users:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-3a6 6 0 0 1 12 0v3M17 5a3 3 0 0 1 0 6m1 3a5 5 0 0 1 3 5"/>',coffee:'<path d="M4 8h13v10a6 6 0 0 1-12 0V8M17 10h3a3 3 0 1 1-3 6M3 21h18M8 4v2m5-3v3"/>',wallet:'<rect x="3" y="6" width="18" height="15" rx="3"/><path d="M3 10h18M15 13h6v5h-6zM6 6V4h12"/>',trees:'<path d="m8 17-5-5 5-8 5 8zM8 17v5m9-4-4-6 4-8 4 8zM17 18v4"/>',custom:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 7v10M7 12h10"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',expand:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/>',undo:'<path d="m9 14-5-5 5-5M4 9h11a6 6 0 0 1 0 12"/>'};
function icon(name,size=22){return `<svg class="icon" viewBox="0 0 24 24" width="${size}" height="${size}" style="width:${size}px;height:${size}px" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||ICONS.image}</svg>`}
const catIcon={cooking:'chefh',sports:'trophy',leisure:'game',jobs:'job',college:'college',home:'house',shopping:'shop',travel:'bus',social:'users',restaurant:'coffee',money:'wallet',community:'trees',custom:'custom'};
const DEFAULT={enabled:{who:true,doing:true,what:true,where:false,when:false,whom:false},count:{who:3,doing:3,what:3,where:2,when:2,whom:2},showWords:true};
const state={freeWritingText:'',page:'home',category:null,scene:null,settings:readLocal('cs_settings',DEFAULT),fill:{},selected:null,feedback:'',trace:false,drawer:null,custom:readLocal('cs_custom',[]),done:readLocal('cs_done',{}),newPhoto:null,media:{},photoCache:{},symbolCache:{},presets:readLocal('cs_presets',{}),temp:{},vocabulary:[],scenes:[],categories:[],db:null};
function readLocal(k,d){try{return JSON.parse(localStorage.getItem(k))||structuredClone(d)}catch{return structuredClone(d)}}
function normaliseSettings(){const old=state.settings||{};state.settings={enabled:{...DEFAULT.enabled,...(old.enabled||{})},count:{...DEFAULT.count,...(old.count||{})},showWords:old.showWords!==false};G.forEach(g=>state.settings.count[g.id]=Math.max(1,Math.min(8,Number(state.settings.count[g.id])||1)))}
// Save tiny preferences separately from custom content. Never allow a full browser quota to break a teacher switch.
function safeLocalSet(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true}catch(e){console.warn('Local storage is full; using the database for '+key,e);return false}}
function saveLocal(){
 safeLocalSet('cs_settings',state.settings);
 safeLocalSet('cs_done',state.done);
 safeLocalSet('cs_presets',state.presets);
 // Do NOT rewrite cs_custom into localStorage. Save custom activity metadata to IndexedDB.
 if(state.db){
  for(const [key,value] of [['app:settings',state.settings],['app:custom',state.custom],['app:done',state.done],['app:presets',state.presets]]){
   mediaSet(key,structuredClone(value)).catch(e=>console.error('Could not save '+key,e));
  }
 }
}
async function loadSavedState(){
 // An existing localStorage copy is NOT removed until a verified IndexedDB write succeeds.
 const previousCustom=readLocal('cs_custom',[]);
 const storedCustom=await mediaGet('app:custom').catch(()=>null);
 const combined=[...new Map([...(Array.isArray(storedCustom)?storedCustom:[]),...(Array.isArray(previousCustom)?previousCustom:[])].filter(x=>x&&x.id).map(x=>[x.id,x])).values()];
 state.custom=combined;
 if(previousCustom.length){
  try{await mediaSet('app:custom',combined);const check=await mediaGet('app:custom');if(Array.isArray(check)&&check.length===combined.length)localStorage.removeItem('cs_custom')}
  catch(e){console.warn('Kept old custom activities in localStorage because migration did not finish',e)}
 }
 for(const [field,key,localKey] of [['settings','app:settings','cs_settings'],['done','app:done','cs_done'],['presets','app:presets','cs_presets']]){
  const stored=await mediaGet(key).catch(()=>null);
  const local=readLocal(localKey,null);
  // Prefer IndexedDB when present: the old localStorage setting may be stale after a quota error.
  if(stored&&typeof stored==='object')state[field]=stored;
  else if(local!==null)state[field]=local;
 }
 normaliseSettings();
 // Read any vocabulary safely; never erase the original local copy on failed migration.
 const added=readLocal('cs_added_vocab',[]);
 if(added.length){try{await mediaSet('app:added_vocab',added);localStorage.removeItem('cs_added_vocab')}catch(e){console.warn('Vocabulary remains in old storage',e)}}
}

function toast(msg){$('.toast')?.remove();let el=document.createElement('div');el.className='toast';el.textContent=msg;document.body.append(el);setTimeout(()=>el.remove(),3400)}
function dbOpen(){return new Promise((resolve,reject)=>{let r=indexedDB.open('ColourfulSemanticsMedia',1);r.onupgradeneeded=()=>r.result.createObjectStore('media');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
function mediaSet(key,value){return new Promise((resolve,reject)=>{let tx=state.db.transaction('media','readwrite');tx.objectStore('media').put(value,key);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
function mediaDelete(key){return new Promise((resolve,reject)=>{let tx=state.db.transaction('media','readwrite');tx.objectStore('media').delete(key);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
function mediaGet(key){return new Promise((resolve,reject)=>{let tx=state.db.transaction('media','readonly');let q=tx.objectStore('media').get(key);q.onsuccess=()=>resolve(q.result);q.onerror=()=>reject(q.error)})}
async function getPhoto(scene){if(!scene)return null;const key='photo:'+scene.id;if(key in state.photoCache)return state.photoCache[key];let p=state.db?await mediaGet(key):null;const builtIn=state.scenes.some(s=>s.id===scene.id);return state.photoCache[key]=p||(builtIn?(scene.photo||('photos/'+scene.category+'/'+scene.id+'.jpg')):null)}
async function setPhoto(id,data){await mediaSet('photo:'+id,data);state.photoCache['photo:'+id]=data}
function symbolURL(id){if(state.symbolCache[id])return state.symbolCache[id];const v=state.vocabulary.find(x=>x.id===id);return v?.filename||null}
async function hydrateSymbols(){let names=state.vocabulary.map(v=>v.id);for(let i=0;i<names.length;i+=25){const batch=names.slice(i,i+25);await Promise.all(batch.map(async id=>{let m=await mediaGet('symbol:'+id);if(m)state.symbolCache[id]=m}))}}
function vocab(id){let x=state.vocabulary.find(v=>v.id===id);return x||{id,symbol_text:id.replace(/^[^_]+_/,'').replaceAll('_',' '),colour_group:id.split('_')[0]}}
function phrase(id){if(!id)return '';let v=vocab(id);let t=easyWord(v.symbol_text||'');const g=v.colour_group;if(g==='who'&&!['mum','dad','grandma','grandad'].includes(t))return 'The '+t;if(g==='who')return t[0].toUpperCase()+t.slice(1);if(g==='doing')return /^(is |are |has )/.test(t)?t:'is '+t;if(g==='what'){if(/^(water|milk|coffee|food|rice|pasta|bread|money|music|soap|laundry|clothes|vegetables|carrots|paper|tea|soup|teeth|litter)$/.test(t))return t;if(/s$/.test(t)&&!['bus'].includes(t))return t;return (/^[aeiou]/.test(t)?'an ':'a ')+t}if(g==='where'||g==='when'||g==='whom')return t;return t}
function currentSentence(){return G.filter(g=>state.settings.enabled[g.id]&&state.scene?.answers[g.id]).map(g=>phrase(state.fill[g.id])).filter(Boolean).join(' ')}
function enabledGroups(){return G.filter(g=>state.settings.enabled[g.id]&&state.scene?.answers[g.id])}
function sceneList(){return state.scenes.concat(state.custom)}
function actualScene(id){return sceneList().find(x=>x.id===id)}
// Choice generation: varied by photograph, but always reproducible while working on it.
// Never make a learner pick between two descriptions that could BOTH be correct.
const stableHash=text=>{let h=2166136261;for(let i=0;i<text.length;i++){h=Math.imul(h^text.charCodeAt(i),16777619)}h^=h>>>16;h=Math.imul(h,0x7feb352d);h^=h>>>15;h=Math.imul(h,0x846ca68b);return (h^(h>>>16))>>>0};
const CHOICE_POOLS={
 who:['who_firefighter','who_doctor','who_farmer','who_police_officer','who_builder','who_hairdresser','who_mechanic','who_gardener','who_nurse','who_footballer','who_tennis_player','who_teacher','who_chef','who_cleaner','who_barista','who_delivery_driver','who_warehouse_worker','who_shop_assistant','who_waiter','who_customer','who_dog','who_cat','who_rabbit','who_horse','who_bird'],
 doing:['doing_sleeping','doing_swimming','doing_dancing','doing_singing','doing_reading','doing_running','doing_driving','doing_eating','doing_writing','doing_jumping','doing_walking','doing_sitting','doing_painting','doing_hoovering','doing_cooking','doing_typing'],
 what:['what_football','what_guitar','what_car','what_bed','what_book','what_apple','what_shoes','what_phone','what_bus','what_plant','what_knife','what_egg','what_banana','what_racket','what_mug','what_bike'],
 where:['where_on_the_bus','where_in_the_park','where_in_the_kitchen','where_in_the_bathroom','where_in_the_classroom','where_in_the_garden','where_on_the_football_pitch','where_in_the_shop','where_in_the_warehouse','where_in_the_bedroom','where_at_the_bus_stop'],
 when:['when_yesterday','when_tomorrow','when_today','when_at_night','when_this_morning','when_this_evening','when_on_monday','when_on_friday','when_later','when_now'],
 whom:['whom_to_mum','whom_to_dad','whom_to_a_friend','whom_to_the_teacher','whom_to_the_customer','whom_to_the_waiter','whom_to_the_manager','whom_to_the_barista','whom_to_the_learner']
};
const MEANING_FAMILIES=[
 ['person','man','woman','girl','boy','learner','worker','visitor','friend','customer'],
 ['box','parcel','package'],['bike','bicycle'],
 ['wash','clean','wipe','scrub'],['cook','bake','make'],
 ['shop','supermarket','market'],['cafe','coffee shop','restaurant'],
 ['look','read','watch'],['run','jog'],['walk','stroll'],
 ['wait','stand'],['put','place','load'],['take','pick up','collect'],
 ['drink','sip'],['sweep','brush'],['dog','puppy']
];
function wordParts(id){const v=vocab(id);return easyWord(v.symbol_text||'').toLowerCase().replace(/^the /,'').replace(/^is /,'').replace(/^a /,'').replace(/^an /,'').trim()}
function overlaps(a,b){
 const x=wordParts(a),y=wordParts(b);if(x===y)return true;
 // The WHO pool never contains overlapping generic labels, even when the answer is gender-specific.
 const g=a.startsWith('who_')&&b.startsWith('who_');
 if(g&&['person','man','woman','girl','boy','learner','worker','visitor'].includes(x)&&['person','man','woman','girl','boy','learner','worker','visitor'].includes(y))return true;
 return MEANING_FAMILIES.slice(g?1:0).some(f=>f.some(v=>x===v||x.startsWith(v+' '))&&f.some(v=>y===v||y.startsWith(v+' ')));
}
const WHO_EXCLUDED_ALWAYS=new Set(['who_person','who_man','who_woman','who_boy','who_girl','who_learner','who_friend','who_visitor','who_office_worker','who_manager','who_neighbour','who_mum','who_dad','who_brother','who_sister','who_grandma','who_grandad','who_customer','who_waiter','who_waitress','who_receptionist']);
// Roles that could plausibly describe the people in a particular scene.
// They are never presented as WRONG answers in that scene.
function plausibleRoles(scene){
 const s=(scene.category+' '+scene.title+' '+(scene.id||'')).toLowerCase();
 const blocked=new Set();
 const ban=(...ids)=>ids.forEach(id=>blocked.add('who_'+id));
 if(scene.category==='cooking'){ban('chef','barista','cleaner')}
 if(scene.category==='jobs'){
   if(/scan|pack|box|parcel|shelv|stock/i.test(s))ban('warehouse_worker','delivery_driver','shop_assistant');
   if(/clean|sweep|wip/i.test(s))ban('cleaner','waiter','waitress','barista');
   if(/serv|coffee|café|cafe/i.test(s))ban('chef','waiter','waitress','barista','shop_assistant','cashier');
   if(/phone|typ|computer/i.test(s))ban('receptionist','office_worker');
   if(/deliver|giving/i.test(s))ban('delivery_driver','warehouse_worker');
 }
 if(scene.category==='college')ban('teacher','learner');
 if(scene.category==='community'){
   if(/dog|feed/i.test(s))ban('dog');
   if(/bus|walk|cross|bench|market/i.test(s))ban('delivery_driver','shop_assistant');
 }
 if(scene.category==='home')ban('cleaner','chef','gardener');
 if(scene.category==='restaurant')ban('chef','waiter','waitress','barista','cleaner','customer');
 if(scene.category==='shopping')ban('shop_assistant','cashier','customer');
 if(scene.category==='sports')ban('footballer','tennis_player','swimmer','runner','cyclist','coach');
 return blocked;
}
function candidateChoices(g,scene,answer){
 const all=state.vocabulary.filter(v=>v.colour_group===g.id).map(v=>v.id);
 // The starter list is a preference, never a fixed first-two list.
 const preferred=new Set(CHOICE_POOLS[g.id]||[]);
 const blockedWho=plausibleRoles(scene);
 const title=(scene.title||'').toLowerCase();
 return all.filter(id=>{
   if(id===answer||overlaps(id,answer))return false;
   if(g.id==='who'){
     if(WHO_EXCLUDED_ALWAYS.has(id)||blockedWho.has(id))return false;
     // Workplace and home photographs use distinct roles, not random animals.
     if(['cooking','jobs','college','home'].includes(scene.category)&&/^who_(dog|cat|rabbit|horse|bird)$/.test(id))return false;
     // If the image depicts an animal, do not use another label for the same animal.
     if(scene.id==='community_02'&&id==='who_dog')return false;
     // Do not ask whether a pictured person is a cook, teacher etc. when the scene supports it.
   }
   const text=wordParts(id);
   if(g.id!=='who'&&text.length>=4&&(title.includes(text)||text.includes(title)))return false;
   return true;
 }).sort((a,b)=>{
   // Scene-specific hash genuinely changes the first distractors from photo to photo.
   const pa=preferred.has(a)?0:1,pb=preferred.has(b)?0:1;
   if(pa!==pb)return pa-pb;
   return stableHash(scene.id+'|'+g.id+'|'+a)-stableHash(scene.id+'|'+g.id+'|'+b);
 });
}
function choices(g){
 const scene=state.scene,answer=scene?.answers?.[g.id];if(!answer)return [];
 const want=Math.max(1,Math.min(8,Number(state.settings.count[g.id])||1));
 const result=[answer];
 for(const id of candidateChoices(g,scene,answer)){
   if(result.length>=want)break;
   if(result.some(other=>overlaps(id,other)))continue;
   result.push(id);
 }
 // Keep the exact count requested; no one-card fallback for an active category.
 // The built-in vocabulary contains sufficient distinct alternatives for all six colours.
 return result.sort((a,b)=>stableHash(scene.id+'|place|'+g.id+'|'+a)-stableHash(scene.id+'|place|'+g.id+'|'+b));
}

function cardHtml(id,g,used=false){let v=vocab(id),src=symbolURL(id);let label=phrase(id);return `<button class="symbol-card ${used?'used':''} ${state.selected===id?'selected':''}" draggable="true" data-symbol="${esc(id)}" data-group="${g.id}" style="--c:${g.colour}" aria-label="${esc(label)}" aria-pressed="${state.selected===id}"><span class="symbol-picture">${src?`<img class="symbol-img" draggable="false" src="${esc(src)}" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">`:''}<span class="fallback" style="display:${src?'none':'block'}">${icon('image')}</span></span>${state.settings.showWords?`<span class="symbol-word">${esc(label)}</span>`:''}</button>`}
function shell(content){const section=state.page==='home'?'':state.categories.find(c=>c.id===state.category)?.name||(state.category==='custom'?'Custom':'');$('#app').innerHTML=`<div class="app-shell"><header class="topbar"><div class="brand"><div class="brand-mark"><span style="background:#f3a65a"></span><span style="background:#f0d560"></span><span style="background:#86cb95"></span><span style="background:#87bdea"></span></div><div>Colourful Semantics<small>POWERHOUSE • SENTENCE BUILDER</small></div></div><div class="header-section">${esc(section)}</div><div class="top-actions"><button class="pill-btn" data-action="home" title="Home">${icon('home')}<span class="text">Home</span></button><button class="pill-btn fullscreen-btn" data-action="fullscreen" title="Full screen" aria-label="Full screen">${icon('expand')}<span class="text">Full screen</span></button><button class="pill-btn" data-action="settings" title="Teacher settings">${icon('settings')}<span class="text">Teacher</span></button></div></header><main class="page">${content}</main></div>${state.drawer?drawerHTML():''}`;bindCommon()}
function home(){state.page='home';state.category=null;state.scene=null;state.trace=false;const cs=[...state.categories,{id:'custom',name:'Custom',colour:'#A5B3DF'}];shell(`<div class="home-only"><div class="category-grid">${cs.map(c=>`<button class="tile" data-category="${c.id}" aria-label="${esc(c.name)}"><div class="tile-art" style="--col:${c.colour}">${`<img src="symbols/category_${c.id}.png" alt="" draggable="false" style="width:min(110px,68%);height:min(110px,75%);object-fit:contain;position:relative;z-index:2" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"/><span style="display:none">${icon(catIcon[c.id],68)}</span>`}</div><div class="tile-label">${esc(c.name)}</div></button>`).join('')}</div></div>`)}
function gallery(id){state.page='gallery';state.category=id;const scenes=sceneList().filter(s=>s.category===id);const writingTile=id==='custom'?`<button class="scene-card free-writing-tile" type="button" data-action="free-writing" aria-label="Free Writing"><span class="free-writing-symbol">${icon('pen',65)}</span><strong>Free Writing</strong></button>`:'';shell(`<div class="gallery-screen"><div class="gallery-mini"><button class="icon-btn" data-action="home" aria-label="Back">${icon('back')}</button><div class="gallery-tools">${id==='custom'?`<button class="pill-btn primary" data-action="create">${icon('plus')} Add photo</button>`:''}${id!=='custom'?`<button class="pill-btn" data-action="photos">${icon('upload')} Photos</button>`:''}</div></div><div class="gallery-grid ${id==='custom'?'custom-gallery':''}">${scenes.map(s=>`<button class="scene-card ${state.done[s.id]?'completed':''}" data-scene="${esc(s.id)}" title="${esc(easyTitle(s.title))}" aria-label="${esc(easyTitle(s.title))}${state.done[s.id]?' – done':''}"><div class="scene-placeholder" data-photo="${esc(s.id)}">${icon('image',48)}</div>${state.done[s.id]?`<span class="complete-tick" aria-hidden="true">${icon('check',24)}</span>`:''}</button>`).join('')}${writingTile}</div></div>`);hydrateGallery(scenes)}
function freeWriting(){state.page='free-writing';state.category='custom';state.scene=null;shell(`<section class="free-write-screen"><div class="free-write-top"><button class="pill-btn" data-action="gallery">${icon('back')} Custom</button></div><div class="free-write-panel"><div class="free-write-badge">${icon('pen',36)}</div><h1>Free Writing</h1><label for="freeWritingInput">Type a name or sentence</label><textarea id="freeWritingInput" maxlength="220" rows="3" placeholder="e.g. My name is Sam">${esc(state.freeWritingText)}</textarea><div class="free-write-actions"><button class="pill-btn primary" data-action="free-trace">${icon('pen')} Trace</button><button class="pill-btn" data-action="free-read">${icon('sound')} Read</button><button class="pill-btn" data-action="free-clear">${icon('reset')} Clear</button></div></div></section>`)}

async function hydrateGallery(scenes){for(const s of scenes){let el=document.querySelector(`[data-photo="${s.id}"]`);if(!el)continue;let photo=await getPhoto(s);if(photo&&el.isConnected)el.outerHTML=`<img class="scene-image" src="${photo}" alt="${esc(easyTitle(s.title))}">`}}
function builder(id,reset=true){state.scene=actualScene(id);if(!state.scene)return home();state.category=state.scene.category;state.page='builder';if(reset){state.fill={};state.feedback='';state.trace=false;state.selected=null}drawBuilder()}
function drawBuilder(){
 if(!state.scene)return home();
 const scene=state.scene,gs=enabledGroups(),arr=sceneList().filter(s=>s.category===scene.category);
 const idx=arr.findIndex(x=>x.id===scene.id),count=arr.length;
 const sentence=currentSentence(),finished=!!gs.length&&gs.every(g=>state.fill[g.id]);
 const correct=finished&&gs.every(g=>state.fill[g.id]===scene.answers[g.id]||(scene.alternatives?.[g.id]||[]).includes(state.fill[g.id]));
 const src=state.photoCache['photo:'+scene.id];
 const slots=gs.length?gs.map(g=>`<button class="slot" data-drop="${g.id}" style="--c:${g.colour}" aria-label="${g.label} – drop a symbol here"><div class="slot-inside">${state.fill[g.id]?`<img class="symbol-img" src="${esc(symbolURL(state.fill[g.id])||'')}" alt="" onerror="this.style.display='none'"><span class="slot-label">${state.settings.showWords?esc(phrase(state.fill[g.id])):''}</span>`:''}</div></button>`).join(''):'<div class="help-note">Switch on a colour in Teacher settings.</div>';
 const cardItems=gs.flatMap(g=>choices(g).map(id=>({id,g})));const cards=cardItems.map(({id,g})=>cardHtml(id,g,!!state.fill[g.id]&&state.fill[g.id]===id)).join('');const cols=Math.max(1,Math.min(10,cardItems.length));const rows=Math.max(1,Math.ceil(cardItems.length/cols));
 shell(`<div class="builder-layout new-builder">
  <div class="builder-navigation"><button class="pill-btn" data-action="gallery" aria-label="Back to photo gallery">${icon('back')} Photos</button><span class="scene-heading" aria-label="${esc(easyTitle(scene.title))}"></span><div class="row"><span class="badge">${idx+1} / ${count}</span><button class="pill-btn small-btn" data-action="settings">${icon('settings',18)} Choices</button></div></div>
  <div class="centre-photo"><div class="photo-box">${src?`<img src="${src}" alt="${esc(easyTitle(scene.title))}">`:`<div class="photo-empty">${icon('image',52)}<strong>${esc(easyTitle(scene.title))}</strong><button class="pill-btn" data-action="add-photo">${icon('upload',19)} Add photograph</button></div>`}</div></div>
  <div class="drop-grid" style="--cols:${Math.max(1,gs.length)}">${slots}</div>
  <div class="sentence-and-actions"><div class="sentence-panel ${correct?'answer-correct':''} ${finished&&!correct?'answer-try':''}"><div class="sentence-text ${!sentence?'empty':''}" aria-live="polite">${sentence?esc(sentence)+(finished?'.':''):'…'}</div>${correct?`<div class="instant-badge" role="status">${icon('check',26)} <span>Well done!</span></div>`:finished?`<div class="try-badge" role="status">Try again</div>`:''}</div><div class="sentence-actions"><div class="action-top"><button class="action-btn read" data-action="speak" ${!sentence?'disabled':''}>${icon('sound',25)}<span>Read</span></button><button class="action-btn clear" data-action="clear">${icon('reset',24)}<span>Clear</span></button></div><button class="action-btn trace" data-action="trace" ${!sentence?'disabled':''}>${icon('pen',24)}<span>Trace</span></button></div></div>
  <div class="options-area"><div class="symbol-bank-grid" style="--card-cols:${cols};--card-rows:${rows};--card-count:${cardItems.length}">${cards}</div></div>
  <div class="footer-nav"><button class="pill-btn" data-action="prev" ${idx===0?'disabled':''}>${icon('back')} Back</button><div class="completion-light ${correct?'complete':''}" role="status" aria-label="${correct?'Activity complete':'Build your sentence'}">${correct?icon('check',25):''}</div><button class="pill-btn primary" data-action="next" ${idx===count-1?'disabled':''}>Next ${icon('next')}</button></div>
 </div>`);

 if(!src)getPhoto(scene).then(photo=>{if(photo&&state.page==='builder'&&state.scene.id===scene.id)drawBuilder()});
}
function markIfCorrect(){const gs=enabledGroups();if(!gs.length||!gs.every(g=>state.fill[g.id]))return false;const ok=gs.every(g=>state.fill[g.id]===state.scene.answers[g.id]||(state.scene.alternatives?.[g.id]||[]).includes(state.fill[g.id]));if(ok&&!state.done[state.scene.id]){state.done[state.scene.id]=true;saveLocal();}return ok}
function applySymbol(id){let v=vocab(id),g=v.colour_group;if(!state.settings.enabled[g]||!state.scene?.answers[g])return;state.fill[g]=id;state.feedback='';state.selected=null;markIfCorrect();drawBuilder()}
function check(){let gs=enabledGroups();if(gs.length&&!gs.every(g=>state.fill[g.id]))return;let bad=gs.filter(g=>state.fill[g.id]!==state.scene.answers[g.id]&&!(state.scene.alternatives?.[g.id]||[]).includes(state.fill[g.id]));state.feedback=bad.length?'Try again':'Correct!';if(!bad.length){state.done[state.scene.id]=true;saveLocal()}drawBuilder()}
function stepScene(n){let arr=sceneList().filter(s=>s.category===state.category);let i=arr.findIndex(s=>s.id===state.scene.id);if(arr[i+n])builder(arr[i+n].id)}
function drawerHTML(){let inner='';let d=state.drawer;if(d==='settings')inner=settingsHTML();if(d==='create')inner=createHTML();if(d==='photos')inner=photosHTML();if(d==='symbols')inner=symbolsHTML();if(d==='backup')inner=backupHTML();return `<div class="modal-backdrop" id="backdrop"><aside class="drawer" role="dialog" aria-modal="true"><div class="drawer-head"><h2>${{settings:'Teacher settings',create:'Create activity',photos:'Photograph manager',symbols:'Symbol bank',backup:'Back up & restore'}[d]}</h2><button class="icon-btn" data-action="close" aria-label="Close">${icon('close')}</button></div>${inner}</aside></div>`}
function settingsHTML(){return `<div class="help-note">Choose the colours to display and how many standalone symbols appear for each colour. Changes apply throughout the photo gallery.</div><h3>Colours and choices</h3><p class="muted">Switch colours on or off. Use + or − to choose 1–8 symbol cards per colour. The number you choose is the number of cards shown for each colour used in the photo. Colours without an answer in that photo do not appear.</p>${G.map(g=>`<div class="setting-row"><div class="setting-name"><span class="colour-dot" style="background:${g.colour}"></span>${g.label}${state.scene&&!state.scene.answers[g.id]?`<small class="not-this-photo">No symbol in this photo</small>`:''}</div><div class="setting-controls"><div class="counter-controls"><button data-minus="${g.id}" aria-label="Fewer ${g.label} options">−</button><span data-count-label="${g.id}">${state.settings.count[g.id]}</span><button data-plus="${g.id}" aria-label="More ${g.label} options">+</button></div><button class="switch ${state.settings.enabled[g.id]?'on':''}" data-toggle="${g.id}" role="switch" aria-checked="${!!state.settings.enabled[g.id]}" aria-label="Toggle ${g.label}"></button></div></div>`).join('')}<div class="setting-row"><strong>Show words under symbols</strong><button class="switch ${state.settings.showWords?'on':''}" data-action="toggle-words" role="switch" aria-checked="${state.settings.showWords}"></button></div><hr class="line"><h3>Quick presets</h3><div class="row"><button class="pill-btn small-btn" data-preset="easy">1 choice · 2 colours</button><button class="pill-btn small-btn" data-preset="standard">3 choices · 3 colours</button><button class="pill-btn small-btn" data-preset="challenge">5 choices · 4 colours</button></div><div class="field"><label for="presetName">Save current settings</label><div class="row"><input style="flex:1;min-width:120px" id="presetName" placeholder="e.g. Mint group"><button class="pill-btn" data-action="save-preset">Save</button></div></div><div class="row">${Object.keys(state.presets).map(n=>`<button class="pill-btn small-btn" data-loadpreset="${esc(n)}">${esc(n)}</button>`).join('')}</div><hr class="line"><h3>Picture progress</h3><p class="muted">Green borders show pictures finished on this device.</p><button class="pill-btn reset-progress" data-action="reset-progress">${icon('reset')} Reset progress</button><hr class="line"><h3>Custom scenes</h3><p class="muted">Delete a photo activity you added. Your other activities and symbols are not affected.</p>${state.custom.length?state.custom.map(sc=>`<div class="custom-manage-row"><span>${esc(sc.title)}</span><button type="button" class="pill-btn remove" data-delete-custom="${esc(sc.id)}">${icon('trash',18)} Delete</button></div>`).join(''):'<p class="muted">No custom scenes added yet.</p>'}<hr class="line"><h3>Manage content</h3><div class="row"><button class="pill-btn" data-action="symbols">${icon('image')} Symbol bank</button><button class="pill-btn" data-action="photos">${icon('image')} Photos</button><button class="pill-btn" data-action="create">${icon('plus')} Custom activity</button><button class="pill-btn" data-action="backup">${icon('download')} Back up</button></div><p class="muted">This first version stores uploads on this device only. It does not yet synchronise between devices or provide staff authentication.</p>`}
function createHTML(){const temp=state.temp;return `<div class="help-note">Pick a picture and select the correct symbol for each category. Categories without an answer will be hidden on this activity.</div><div class="field"><label>Activity title</label><input id="newTitle" placeholder="e.g. Making toast" value="${esc(temp.title||'')}"></div><div class="field"><label>Photo</label><input id="newPhoto" type="file" accept="image/png,image/jpeg,image/webp">${state.newPhoto?`<img class="form-preview" src="${state.newPhoto}" alt="Selected photo">`:''}</div><h3>Correct symbols</h3><div class="create-selectors">${G.map(g=>`<div class="create-answer" style="border-top:5px solid ${g.colour}"><strong>${g.label}</strong><select data-answer="${g.id}"><option value="">Not used</option>${state.vocabulary.filter(v=>v.colour_group===g.id).map(v=>`<option value="${v.id}" ${temp.answers?.[g.id]===v.id?'selected':''}>${esc(phrase(v.id))}</option>`).join('')}</select></div>`).join('')}</div><p class="muted">Need a symbol that isn't in the bank? Open the Symbol Bank from teacher settings and add it.</p><button class="pill-btn primary" data-action="save-custom" style="width:100%;margin-top:16px">${icon('save')} Save custom activity</button>`}
function photosHTML(){let scenes=state.category?sceneList().filter(s=>s.category===state.category):sceneList();return `<div class="help-note">Add real photographs to the prepared scenes. Each scene already has suggested sentence symbols. Photos are stored in this browser until shared cloud storage is added.</div><div class="field"><label>Select scene</label><select id="photoScene">${scenes.map(s=>`<option value="${s.id}" ${state.scene?.id===s.id?'selected':''}>${esc(easyTitle(s.title))} (${esc(s.category)})</option>`).join('')}</select></div><div class="field"><label>Upload photo</label><input id="photoUpload" type="file" accept="image/png,image/jpeg,image/webp"></div><button class="pill-btn primary" data-action="save-photo">${icon('save')} Save photo</button><hr class="line"><p class="muted">Tip: choose a clear image showing one obvious action. Avoid uploading recognisable learners without appropriate consent.</p>`}
function symbolsHTML(){return `<div class="help-note">The app includes ${state.vocabulary.length} starter vocabulary entries. Placeholder PNGs can be replaced by matching filenames. Use your own appropriately licensed symbols.</div><h3>Bulk replace symbols</h3><div class="field"><label>Select multiple PNG files</label><input type="file" id="bulkSymbols" accept="image/png" multiple></div><button class="pill-btn primary" data-action="bulk-upload">${icon('upload')} Match and upload</button><p class="muted">Example filename: <strong>who_chef.png</strong>. Matching is automatic. Files without a matching vocabulary ID are skipped.</p><hr class="line"><h3>Add a new symbol</h3><div class="field"><label>Colour category</label><select id="symbolGroup">${G.map(g=>`<option value="${g.id}">${g.label}</option>`).join('')}</select></div><div class="field"><label>Word or phrase</label><input id="symbolWord" placeholder="e.g. gardener"></div><div class="field"><label>PNG file</label><input id="singleSymbol" accept="image/png" type="file"></div><button class="pill-btn" data-action="add-symbol">${icon('plus')} Add to bank</button>`}
function backupHTML(){return `<div class="help-note">Download a backup containing custom activities, settings and locally uploaded photo and symbol images. Store it somewhere secure.</div><div class="row"><button class="pill-btn primary" data-action="export">${icon('download')} Download backup</button></div><hr class="line"><div class="field"><label>Restore from backup file</label><input type="file" id="importBackup" accept="application/json,.json"></div><button class="pill-btn" data-action="import">${icon('upload')} Restore backup</button><p class="muted">Restoring adds or updates the backed-up content. Keep your previous backup until you have checked the result.</p>`}
function closeDrawer(){state.drawer=null;if(state.page==='builder')drawBuilder();else if(state.page==='gallery')gallery(state.category);else if(state.page==='free-writing')freeWriting();else home()}
function openDrawer(d){state.drawer=d;if(d==='create')state.temp={answers:{}};refresh()}
function refresh(){const old=document.querySelector('.drawer'),y=old?.scrollTop||0;if(state.page==='builder')drawBuilder();else if(state.page==='gallery')gallery(state.category);else if(state.page==='free-writing')freeWriting();else home();if(state.drawer){const now=document.querySelector('.drawer');if(now)now.scrollTop=y}}
function talk(text){let t=text||currentSentence();if(!t||!('speechSynthesis' in window))return toast('Speech is not supported in this browser');speechSynthesis.cancel();let u=new SpeechSynthesisUtterance(t+'.');u.lang='en-GB';u.rate=.82;speechSynthesis.speak(u)}
async function shrink(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>{let im=new Image();im.onload=()=>{let s=Math.min(1,1500/Math.max(im.width,im.height));let cv=document.createElement('canvas');cv.width=Math.round(im.width*s);cv.height=Math.round(im.height*s);cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);resolve(cv.toDataURL('image/jpeg',.83))};im.onerror=reject;im.src=r.result};r.onerror=reject;r.readAsDataURL(file)})}
async function rawData(file){return new Promise((res,rej)=>{let r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(file)})}
function saveDownload(name,txt){let b=new Blob([txt],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1500)}
async function backupExport(){let media={};for(const s of sceneList()){let m=await mediaGet('photo:'+s.id);if(m)media['photo:'+s.id]=m}for(const v of state.vocabulary){let m=await mediaGet('symbol:'+v.id);if(m)media['symbol:'+v.id]=m}saveDownload('colourful-semantics-backup.json',JSON.stringify({version:1,custom:state.custom,vocabulary:state.vocabulary,settings:state.settings,done:state.done,presets:state.presets,media}));toast('Backup downloaded')}
async function backupImport(file){if(!file)return toast('Choose a backup file');try{let o=JSON.parse(await file.text());if(o.version!==1||!Array.isArray(o.custom)||!o.media)throw Error('Invalid backup');for(const [k,v] of Object.entries(o.media)){if(!k.startsWith('photo:')&&!k.startsWith('symbol:'))continue;await mediaSet(k,v)}state.custom=[...new Map([...state.custom,...o.custom].map(x=>[x.id,x])).values()];state.vocabulary=[...new Map([...state.vocabulary,...(o.vocabulary||[])].map(x=>[x.id,x])).values()];state.settings=o.settings||state.settings;normaliseSettings();state.done={...state.done,...o.done};state.presets={...state.presets,...o.presets};state.photoCache={};state.symbolCache={};await hydrateSymbols();saveLocal();toast('Backup restored');closeDrawer()}catch(e){toast('Could not read backup: '+e.message)}}
function showTraceModal(customText){
 document.querySelector('#traceOverlay')?.remove();
 const text=customText||currentSentence();if(!text)return;
 const overlay=document.createElement('div');overlay.id='traceOverlay';overlay.className='trace-overlay';overlay.innerHTML=`<div class="trace-popup" role="dialog" aria-modal="true" aria-label="Trace the sentence"><div class="trace-popup-top"><strong>Trace</strong><div class="trace-popup-actions"><button type="button" data-trace-tool="read" aria-label="Read sentence">${icon('sound',25)} Read</button><button type="button" data-trace-tool="undo" aria-label="Undo">${icon('undo',25)} Undo</button><button type="button" data-trace-tool="clear" aria-label="Clear tracing">${icon('reset',25)} Clear</button><button type="button" class="trace-close" data-trace-tool="close" aria-label="Close tracing">${icon('close',25)} Close</button></div></div><canvas id="traceCanvas" aria-label="Trace the large letters with your finger or pen"></canvas></div>`;
 document.body.append(overlay);
 overlay.querySelectorAll('[data-trace-tool]').forEach(b=>b.addEventListener('click',()=>{const a=b.dataset.traceTool;if(a==='close')action('trace-close');if(a==='clear'){traceStrokes=[];tracePaint()}if(a==='undo'){traceStrokes.pop();tracePaint()}if(a==='read')talk(traceText)}));
 overlay.addEventListener('click',e=>{if(e.target===overlay)action('trace-close')});
 requestAnimationFrame(()=>initTrace(text));
}
// Trace canvas draws pale model text and captures finger, stylus and mouse strokes.
let traceStrokes=[],traceCurrent=null,traceContext=null,traceCanvas=null,traceText='';
function initTrace(text){traceCanvas=$('#traceCanvas');if(!traceCanvas)return;traceText=text;traceStrokes=[];traceCurrent=null;const rect=traceCanvas.getBoundingClientRect(),dpr=Math.min(2,window.devicePixelRatio||1);traceCanvas.width=Math.max(1,Math.round(rect.width*dpr));traceCanvas.height=Math.max(1,Math.round(rect.height*dpr));traceContext=traceCanvas.getContext('2d');tracePaint();traceCanvas.addEventListener('pointerdown',e=>{traceCanvas.setPointerCapture(e.pointerId);traceCurrent=[traceXY(e)];traceStrokes.push(traceCurrent);tracePaint()});traceCanvas.addEventListener('pointermove',e=>{if(!traceCurrent)return;traceCurrent.push(traceXY(e));tracePaint()});for(const ev of ['pointerup','pointercancel'])traceCanvas.addEventListener(ev,()=>{traceCurrent=null})}
function traceXY(e){let r=traceCanvas.getBoundingClientRect();return {x:(e.clientX-r.left)*traceCanvas.width/r.width,y:(e.clientY-r.top)*traceCanvas.height/r.height}}
function tracePaint(){
 if(!traceContext||!traceCanvas)return;
 let c=traceContext,cv=traceCanvas,w=cv.width,h=cv.height;
 c.clearRect(0,0,w,h);
 const scale=w/Math.max(1,cv.getBoundingClientRect().width);
 c.save();
 // Large writing guidelines within the trace pop-up.
 c.strokeStyle='#d1e7fa';c.lineWidth=Math.max(1,1.3*scale);c.setLineDash([]);
 [0.24,0.5,0.76].forEach(y=>{c.beginPath();c.moveTo(12*scale,y*h);c.lineTo(w-12*scale,y*h);c.stroke()});
 const words=traceText.split(' ');let font=Math.min(145*scale,Math.max(50*scale,h*.30));
 c.font=`700 ${font}px Arial`;let lines=[],line='';
 for(const word of words){let test=line?line+' '+word:word;if(line&&c.measureText(test).width>w-35*scale){lines.push(line);line=word}else{line=test}}
 if(line)lines.push(line);
 font=Math.min(font,(h-45*scale)/Math.max(1,lines.length)/1.35);
 c.font=`700 ${font}px Arial`;c.fillStyle='#d1d5db';c.strokeStyle='#9da7b0';c.lineWidth=.9*scale;c.setLineDash([2*scale,3*scale]);
 let leading=Math.min(font*1.16,h/Math.max(1,lines.length));
 let base=(h-leading*lines.length)/2+font*.85;
 lines.forEach((line,i)=>{let x=(w-c.measureText(line).width)/2,y=base+i*leading;c.fillText(line,Math.max(10*scale,x),y);c.strokeText(line,Math.max(10*scale,x),y)});
 c.restore();
 c.strokeStyle='#186ab7';c.lineWidth=4.5*scale;c.lineCap='round';c.lineJoin='round';
 for(const stroke of traceStrokes){if(!stroke.length)continue;c.beginPath();c.moveTo(stroke[0].x,stroke[0].y);for(const pt of stroke.slice(1))c.lineTo(pt.x,pt.y);if(stroke.length===1)c.lineTo(stroke[0].x+.1,stroke[0].y+.1);c.stroke()}
}
function bindCommon(){document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>gallery(b.dataset.category));document.querySelectorAll('[data-scene]').forEach(b=>b.onclick=()=>builder(b.dataset.scene));document.querySelectorAll('[data-symbol]').forEach(b=>{b.onclick=()=>{if(Date.now()>ignoreClickUntil||b.dataset.symbol!==ignoreClickId)applySymbol(b.dataset.symbol)};b.ondragstart=e=>e.preventDefault();attachPointerDrag(b)});document.querySelectorAll('[data-drop]').forEach(b=>{b.ondragover=e=>{e.preventDefault();b.classList.add('over')};b.ondragleave=()=>b.classList.remove('over');b.ondrop=e=>{e.preventDefault();let id=e.dataTransfer.getData('text/plain');b.classList.remove('over');if(vocab(id).colour_group===b.dataset.drop)applySymbol(id)};b.onclick=()=>{if(state.selected&&vocab(state.selected).colour_group===b.dataset.drop)applySymbol(state.selected);else if(state.fill[b.dataset.drop]){delete state.fill[b.dataset.drop];state.feedback='';state.trace=false;drawBuilder()}}});document.querySelectorAll('[data-toggle]').forEach(b=>b.onclick=()=>{let id=b.dataset.toggle;state.settings.enabled[id]=!state.settings.enabled[id];state.trace=false;state.feedback='';delete state.fill[id];markIfCorrect();saveLocal();refresh()});document.querySelectorAll('[data-plus]').forEach(b=>b.onclick=()=>{let id=b.dataset.plus;state.settings.count[id]=Math.min(8,(+state.settings.count[id]||1)+1);saveLocal();refresh()});document.querySelectorAll('[data-minus]').forEach(b=>b.onclick=()=>{let id=b.dataset.minus;state.settings.count[id]=Math.max(1,(+state.settings.count[id]||1)-1);saveLocal();refresh()});document.querySelectorAll('[data-preset]').forEach(b=>b.onclick=()=>{let mode=b.dataset.preset,n=mode==='easy'?1:mode==='standard'?3:5,c=mode==='easy'?2:mode==='standard'?3:4;G.forEach((g,i)=>{state.settings.count[g.id]=n;state.settings.enabled[g.id]=i<c});state.fill={};saveLocal();refresh()});document.querySelectorAll('[data-loadpreset]').forEach(b=>b.onclick=()=>{state.settings=structuredClone(state.presets[b.dataset.loadpreset]);normaliseSettings();state.fill={};saveLocal();refresh()});document.querySelectorAll('[data-answer]').forEach(b=>b.onchange=()=>{state.temp.answers[b.dataset.answer]=b.value});$('#newTitle')?.addEventListener('input',e=>state.temp.title=e.target.value);$('#newPhoto')?.addEventListener('change',async e=>{if(e.target.files[0]){state.newPhoto=await shrink(e.target.files[0]);refresh()}});document.querySelectorAll('[data-delete-custom]').forEach(b=>b.onclick=()=>deleteCustomScene(b.dataset.deleteCustom));$('#freeWritingInput')?.addEventListener('input',e=>{state.freeWritingText=e.target.value});document.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>action(b.dataset.action));$('#backdrop')?.addEventListener('click',e=>{if(e.target.id==='backdrop')closeDrawer()})}
let activePointer=null, ignoreClickUntil=0, ignoreClickId=null;
function attachPointerDrag(button){
 button.addEventListener('pointerdown',e=>{
  if(e.button!==0&&e.pointerType==='mouse')return;
  activePointer={id:button.dataset.symbol,pointerId:e.pointerId,x:e.clientX,y:e.clientY,ghost:null,button};
  try{button.setPointerCapture(e.pointerId)}catch{}
 });
 button.addEventListener('pointermove',e=>{
  const p=activePointer;if(!p||p.pointerId!==e.pointerId||p.button!==button)return;
  if(!p.ghost&&Math.hypot(e.clientX-p.x,e.clientY-p.y)>7){
   p.ghost=button.cloneNode(true);p.ghost.removeAttribute('data-symbol');p.ghost.classList.add('drag-ghost');
   p.ghost.style.setProperty('--c',getComputedStyle(button).getPropertyValue('--c'));
   document.body.appendChild(p.ghost);button.classList.add('dragging');
  }
  if(p.ghost){p.ghost.style.left=e.clientX+'px';p.ghost.style.top=e.clientY+'px';
   document.querySelectorAll('[data-drop]').forEach(x=>x.classList.remove('over'));
   const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-drop]');
   if(target&&vocab(p.id).colour_group===target.dataset.drop)target.classList.add('over');
  }
 });
 const finish=e=>{
  const p=activePointer;if(!p||p.pointerId!==e.pointerId||p.button!==button)return;
  const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-drop]');
  const wasDrag=!!p.ghost;
  p.ghost?.remove();button.classList.remove('dragging');document.querySelectorAll('[data-drop]').forEach(x=>x.classList.remove('over'));activePointer=null;
  if(wasDrag){ignoreClickUntil=Date.now()+280;ignoreClickId=p.id;if(target&&vocab(p.id).colour_group===target.dataset.drop){e.preventDefault();applySymbol(p.id)}}
 };
 button.addEventListener('pointerup',finish);
 button.addEventListener('pointercancel',e=>{let p=activePointer;if(p?.pointerId===e.pointerId){p.ghost?.remove();p.button.classList.remove('dragging');activePointer=null}});
}
async function deleteCustomScene(id){
 const scene=state.custom.find(s=>s.id===id);if(!scene)return;
 if(!window.confirm('Delete "'+scene.title+'"? This permanently removes the scene and its uploaded photo from this device.'))return;
 // Persist the new list before removing the image; never delete anything when this save fails.
 const next=state.custom.filter(s=>s.id!==id);
 try{await mediaSet('app:custom',next)}catch(e){toast('Could not save deletion. Nothing was deleted.');return}
 state.custom=next;try{localStorage.removeItem('cs_custom')}catch(e){}delete state.done[id];delete state.photoCache['photo:'+id];
 if(state.scene?.id===id){state.scene=null;state.fill={}}
 try{await mediaDelete('photo:'+id)}catch(e){console.warn('Photo cleanup failed',e)}
 saveLocal();toast('Custom scene deleted');refresh();
}
async function action(a){
 if(a==='free-writing')return freeWriting();
 if(a==='free-trace'){const text=(state.freeWritingText||'').trim();if(!text)return toast('Type a name or sentence first');return showTraceModal(text)}
 if(a==='free-read'){const text=(state.freeWritingText||'').trim();if(!text)return toast('Type a name or sentence first');return talk(text)}
 if(a==='free-clear'){state.freeWritingText='';return freeWriting()}
if(a==='reset-progress'){if(window.confirm('Clear all green completed-picture marks on this device? Photos, symbols and activities will NOT be deleted.')){state.done={};saveLocal();toast('Picture progress reset');refresh()}return}if(a==='fullscreen'){try{if(document.fullscreenElement){await document.exitFullscreen()}else if(document.documentElement.requestFullscreen){await document.documentElement.requestFullscreen()}else{toast('Use your browser full screen option')}}catch(e){toast('Full screen is not available in this browser')}return}if(a==='home')return home();if(a==='settings'||a==='photos'||a==='symbols'||a==='backup'||a==='create')return openDrawer(a);if(a==='close')return closeDrawer();if(a==='gallery')return gallery(state.category||'custom');if(a==='add-photo')return openDrawer('photos');if(a==='speak')return talk();if(a==='clear'){state.fill={};state.feedback='';state.trace=false;return drawBuilder()}if(a==='check'){markIfCorrect();return drawBuilder()}if(a==='trace'){if(!currentSentence())return;state.trace=true;return showTraceModal()}if(a==='trace-close'){state.trace=false;document.querySelector('#traceOverlay')?.remove();traceCanvas=null;return}if(a==='undo'){traceStrokes.pop();return tracePaint()}if(a==='trace-clear'){traceStrokes=[];return tracePaint()}if(a==='prev')return stepScene(-1);if(a==='next')return stepScene(1);if(a==='toggle-words'){state.settings.showWords=!state.settings.showWords;saveLocal();return refresh()}if(a==='save-preset'){let n=$('#presetName')?.value.trim();if(!n)return toast('Enter a preset name');state.presets[n]=structuredClone(state.settings);saveLocal();toast('Preset saved');return refresh()}if(a==='save-custom'){let title=(state.temp.title||'').trim(),answers=Object.fromEntries(Object.entries(state.temp.answers||{}).filter(([k,v])=>v));if(!title||!state.newPhoto||!Object.keys(answers).length)return toast('Add a title, photo and at least one correct symbol');let id='custom_'+Date.now();let scene={id,category:'custom',title,answers,alternatives:{}};try{await setPhoto(id,state.newPhoto);state.custom.push(scene);saveLocal();state.newPhoto=null;state.drawer=null;gallery('custom');toast('Custom activity saved')}catch(e){toast('Unable to save: '+e.message)}return}if(a==='save-photo'){let id=$('#photoScene')?.value,file=$('#photoUpload')?.files[0];if(!id||!file)return toast('Choose an activity and a photo');try{await setPhoto(id,await shrink(file));closeDrawer();toast('Photo saved')}catch(e){toast('Unable to save photo: '+e.message)}return}if(a==='bulk-upload'){let files=[...($('#bulkSymbols')?.files||[])],found=0;for(const f of files){let id=f.name.replace(/\.png$/i,'').toLowerCase();if(!state.vocabulary.find(v=>v.id.toLowerCase()===id)||!f.name.toLowerCase().endsWith('.png'))continue;let data=await rawData(f);await mediaSet('symbol:'+id,data);state.symbolCache[id]=data;found++}toast(`${found} symbols matched and saved`);return}if(a==='add-symbol'){let word=$('#symbolWord')?.value.trim(),group=$('#symbolGroup')?.value,file=$('#singleSymbol')?.files[0];if(!word||!group||!file)return toast('Enter a word and choose a PNG');let id=group+'_'+word.toLowerCase().replace(/[^a-z0-9 ]/g,'').trim().replace(/\s+/g,'_');let existing=state.vocabulary.find(v=>v.id===id);if(!existing)state.vocabulary.push({id,colour_group:group,symbol_text:word,filename:''});await mediaSet('symbol:'+id,await rawData(file));state.symbolCache[id]=await mediaGet('symbol:'+id);await mediaSet('app:added_vocab',state.vocabulary.filter(v=>!BASE_VOCAB_IDS.has(v.id)));safeLocalSet('cs_added_vocab',state.vocabulary.filter(v=>!BASE_VOCAB_IDS.has(v.id))); toast('Symbol saved');return refresh()}if(a==='export')return backupExport();if(a==='import')return backupImport($('#importBackup')?.files[0])}
let BASE_VOCAB_IDS=new Set();
async function boot(){try{normaliseSettings();state.db=await dbOpen();await loadSavedState();const data=window.CS_DATA;if(!data)throw Error('Data file not loaded');state.vocabulary=data.vocabulary;state.categories=data.categories.filter(c=>['cooking','community','jobs','home','college'].includes(c.id)).map(c=>({...c,name:({cooking:'Cooking',community:'Community',jobs:'Jobs',home:'Home',college:'College'})[c.id]}));state.scenes=data.scenes.filter(sc=>state.categories.some(c=>c.id===sc.category));BASE_VOCAB_IDS=new Set(state.vocabulary.map(v=>v.id));const added=await mediaGet('app:added_vocab').catch(()=>null)||readLocal('cs_added_vocab',[]);state.vocabulary.push(...added.filter(v=>!BASE_VOCAB_IDS.has(v.id)));await hydrateSymbols();home()}catch(e){console.error(e);$('#app').innerHTML=`<div class="page"><h1>Could not start the app</h1><p>${esc(e.message)}</p><p>Open the full app folder from a local web server or Firebase Hosting.</p></div>`}}
boot();

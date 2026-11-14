/* Original PDF pages rendered as self-contained SVG, grouped in compressed packs. */
let pageRequest=0, pageBlob=null;
const pagePacks=new Map(), pageLoads=new Map();
function cancelOriginal(){pageRequest++;if(pageBlob){URL.revokeObjectURL(pageBlob);pageBlob=null;}}
async function getPagePack(key){
 if(pagePacks.has(key))return pagePacks.get(key);
 if(pageLoads.has(key))return pageLoads.get(key);
 const job=(async()=>{
  if(!window.ORTHO_PAGES?.[key]) await new Promise((resolve,reject)=>{
   const script=document.createElement('script');script.src='pages/'+key+'.js';
   const timer=setTimeout(()=>{script.remove();reject(Error('The original pages took too long to load. Please retry.'));},30000);
   script.onload=()=>{clearTimeout(timer);script.remove();resolve();};
   script.onerror=()=>{clearTimeout(timer);script.remove();reject(Error('Original-page pack is missing. Upload the complete pages folder contents, then retry.'));};document.head.appendChild(script);
  });
  if(!('DecompressionStream' in window))throw Error('This browser needs an update to display original pages. Readable text is available below.');
  const encoded=window.ORTHO_PAGES[key];if(!encoded)throw Error('Original page data is missing.');
  const bytes=Uint8Array.from(atob(encoded),c=>c.charCodeAt(0));
  const text=await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).text();
  const pages=JSON.parse(text);delete window.ORTHO_PAGES[key];pagePacks.set(key,pages);
  while(pagePacks.size>2)pagePacks.delete(pagePacks.keys().next().value);
  return pages;
 })();pageLoads.set(key,job);try{return await job;}finally{pageLoads.delete(key);}
}
async function showOriginal(id,page){
 const token=++pageRequest,el=document.getElementById('content');
 el.classList.add('original-page');el.style.width=pageZoom+'%';el.textContent='Loading original page '+page+'…';
 try{
  const pages=await getPagePack(id+'-'+Math.floor((page-1)/50));if(token!==pageRequest)return;
  const svg=pages[(page-1)%50];if(!svg)throw Error('Page unavailable.');
  if(pageBlob)URL.revokeObjectURL(pageBlob);pageBlob=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));
  const img=document.createElement('img');img.src=pageBlob;img.alt='Original '+id.replace('-',' ')+' page '+page+'. Use readable text for selectable, accessible content.';img.style.width='100%';el.replaceChildren(img);
 }catch(error){if(token!==pageRequest)return;el.textContent=error.message;const retry=document.createElement('button');retry.textContent='Retry original page';retry.onclick=()=>showOriginal(id,page);el.append(document.createElement('br'),retry);}
}

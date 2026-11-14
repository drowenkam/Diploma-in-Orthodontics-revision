(() => {
 function refresh(){
  const title=document.getElementById('progress-title'), detail=document.getElementById('progress-detail'), last=document.getElementById('last-set');
  try {
   const db=JSON.parse(localStorage.getItem('ortho-quiz-v1')||'{"version":1,"sets":{}}');
   if(!db || db.version!==1 || !db.sets || typeof db.sets!=='object' || Array.isArray(db.sets)) throw Error();
   const unique=new Set(); let sets=0;
   for(const set of Object.values(db.sets)){
    const bank=window.QUIZ_BANKS[set?.bank];if(!bank)continue;
    const qs=QuizEngine.select(bank,set.block,set.type),answers=QuizEngine.cleanAnswers(qs,set.answers);
    if(QuizEngine.stats(qs,answers).completed)sets++;
    for(const q of qs)if(answers[q.n]?.submitted)unique.add(bank.id+':'+q.n);
   }
   title.textContent=unique.size+' / 2,039 questions submitted';document.getElementById('overall-progress').value=unique.size;
   detail.textContent=(2039-unique.size)+' questions remaining · '+sets+' sets with submitted answers';last.textContent='';
   if(db.last){const set=db.sets[db.last.bank+':'+db.last.block+':'+db.last.type],bank=window.QUIZ_BANKS[db.last.bank];
    if(set&&bank){const qs=QuizEngine.select(bank,set.block,set.type),s=QuizEngine.stats(qs,QuizEngine.cleanAnswers(qs,set.answers));
     last.textContent='Last set: '+(bank.id==='volume-3'?'Volume III':'Volume IV')+' · '+s.completed+'/'+qs.length+' submitted · '+s.earned+'/'+s.total+' full-set marks · '+(s.accuracy===null?'not yet marked':s.accuracy.toFixed(1)+'% accuracy on submitted questions');}
   }
  }catch{detail.textContent='Saved progress is unavailable or could not be read. Open Question practice to check your saved set.';}
 }
 refresh();window.addEventListener('pageshow',refresh);window.addEventListener('storage',refresh);
})();
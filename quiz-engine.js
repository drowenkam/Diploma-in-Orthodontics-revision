(function(root){
'use strict';
const valid=(q,a)=>q.type==='sba'?typeof a==='string'&&/^[A-E]$/.test(a):Array.isArray(a)&&a.length===5&&a.every(x=>x==='T'||x==='F');
const points=(q,a)=>!valid(q,a)?0:q.type==='sba'?Number(a===q.key):a.reduce((n,v,i)=>n+Number(v===q.key[i]),0);
const select=(bank,block,type)=>bank.questions.filter(q=>(block==='all'||q.block===block)&&(type==='all'||q.type===type));
function cleanAnswers(questions,answers){const out={};if(!answers||typeof answers!=='object'||Array.isArray(answers))return out;for(const q of questions){const a=answers[q.n];if(!a||typeof a!=='object')continue;const choice=q.type==='sba'?(/^[A-E]$/.test(a.choice)?a.choice:null):Array.from({length:5},(_,i)=>['T','F'].includes(a.choice?.[i])?a.choice[i]:null);out[q.n]={choice,submitted:a.submitted===true&&valid(q,choice)};}return out;}
function stats(questions,answers){let completed=0,earned=0,marked=0,total=0,correct=0;for(const q of questions){total+=q.key.length;const a=answers[q.n];if(a?.submitted===true&&valid(q,a.choice)){completed++;marked+=q.key.length;const p=points(q,a.choice);earned+=p;if(p===q.key.length)correct++;}}return{completed,unanswered:questions.length-completed,earned,marked,total,correct,incorrect:completed-correct,accuracy:marked?100*earned/marked:null,completion:questions.length?100*completed/questions.length:0};}
function submit(q,answers,choice){if(answers[q.n]?.submitted)return false;if(!valid(q,choice))return false;answers[q.n]={choice:Array.isArray(choice)?choice.slice():choice,submitted:true};return true;}
function nextUnanswered(questions,answers,start){for(let i=1;i<=questions.length;i++){const pos=(start+i)%questions.length;if(!answers[questions[pos].n]?.submitted)return pos;}return -1;}
const api={valid,points,select,cleanAnswers,stats,submit,nextUnanswered};root.QuizEngine=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);

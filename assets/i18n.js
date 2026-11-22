(function(){
var dict={
en:{
"nav.home":"Home","nav.research":"Research","nav.pub":"Publications","nav.writing":"Writing","nav.games":"Games",
"home.sub":"PhD candidate in Systems Pharmacology, Leiden University",
"home.intro":"I work on quantitative pharmacology and PK/PD modeling of antiviral drugs, with interests in viral dynamics, in-vitro drug-interaction modeling, and model-informed first-in-human dose prediction.",
"home.btn.research":"Research","home.btn.games":"Games","home.btn.contact":"Contact",
"home.news":"News","home.news1":"Website launched (Nov 2026). More content coming soon.",
"home.contact":"Contact",
"r1.t":"Antiviral PK/PD modeling","r1.d":"Quantitative models linking drug exposure to antiviral effect.",
"r2.t":"Viral dynamics and drug interaction","r2.d":"Modeling antiviral combinations and in-vitro drug-drug interactions (GPDI).",
"r3.t":"First-in-human dose prediction","r3.d":"Model-informed approaches including MABEL-based dose selection.",
"r4.t":"Systematic reviews and meta-analysis","r4.d":"Evidence synthesis, meta-regression and quality assessment.",
"pub.note":"Publication list coming soon.",
"writing.note":"Articles and notes coming soon.",
"games.note":"Small browser games I built. They run entirely in your browser.",
"g1.t":"Animal Sudoku","g1.d":"An animal-themed Latin-square puzzle for young children.","games.soon":"Coming soon",
"foot":"All rights reserved."
},
zh:{
"nav.home":"首页","nav.research":"研究","nav.pub":"论文","nav.writing":"文章","nav.games":"小游戏",
"home.sub":"莱顿大学系统药理学博士研究生",
"home.intro":"我研究抗病毒药物的定量药理学与 PK/PD 建模,关注病毒动力学、体外药物相互作用建模,以及基于模型的首次人体剂量预测。",
"home.btn.research":"研究方向","home.btn.games":"小游戏","home.btn.contact":"联系我",
"home.news":"动态","home.news1":"网站上线(2026 年 11 月),更多内容即将更新。",
"home.contact":"联系方式",
"r1.t":"抗病毒药物 PK/PD 建模","r1.d":"建立药物暴露与抗病毒效应之间的定量模型。",
"r2.t":"病毒动力学与药物相互作用","r2.d":"抗病毒联合用药与体外药物相互作用(GPDI)建模。",
"r3.t":"首次人体剂量预测","r3.d":"基于模型的方法,包括基于 MABEL 的剂量选择。",
"r4.t":"系统综述与 Meta 分析","r4.d":"证据综合、meta 回归与质量评价。",
"pub.note":"论文列表即将更新。",
"writing.note":"文章与笔记即将更新。",
"games.note":"我自己开发的网页小游戏,直接在浏览器中运行。",
"g1.t":"动物数独","g1.d":"面向低龄儿童的动物主题拉丁方小游戏。","games.soon":"即将上线",
"foot":"版权所有。"
}};
var base=document.documentElement.getAttribute("data-base")||"";
var page=document.body.getAttribute("data-page");
var links=[["index.html","nav.home"],["research.html","nav.research"],["publications.html","nav.pub"],["writing.html","nav.writing"],["games/index.html","nav.games"]];
var nav=links.map(function(l){return '<a href="'+base+l[0]+'" data-i18n="'+l[1]+'"'+(l[0]===page?' class="active"':'')+'></a>';}).join("");
document.getElementById("site-header").innerHTML='<header><a class="brand" href="'+base+'index.html">Chenyu Wang</a><nav>'+nav+'</nav><button id="lang-toggle" type="button"></button></header>';
document.getElementById("site-footer").innerHTML='<footer>&copy; '+new Date().getFullYear()+' Chenyu Wang. <span data-i18n="foot"></span></footer>';
var u="378990110",d="qq.com";
document.querySelectorAll(".email").forEach(function(e){e.innerHTML='<a href="mailto:'+u+'@'+d+'">'+u+'@'+d+'</a>';});
var lang=localStorage.getItem("lang")||"en";
function apply(){
document.documentElement.lang=lang==="zh"?"zh-CN":"en";
document.querySelectorAll("[data-i18n]").forEach(function(el){var v=dict[lang][el.getAttribute("data-i18n")];if(v!==undefined)el.textContent=v;});
document.getElementById("lang-toggle").textContent=lang==="zh"?"EN":"中文";
}
document.getElementById("lang-toggle").addEventListener("click",function(){lang=lang==="zh"?"en":"zh";localStorage.setItem("lang",lang);apply();});
apply();
})();

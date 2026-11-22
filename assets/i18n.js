(function(){
var zh={
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
"g1.t":"动物数独(6×6 / 8×8 / 9×9)","g1.d":"动物主题数独,共 36 道挑战关卡,支持分级提示、候选标记和试探颜色,最佳用时保存在你的浏览器中。","games.play":"开始玩","games.src":"源码",
"foot":"版权所有。"
};
var els=document.querySelectorAll("[data-i18n]");
els.forEach(function(el){el.setAttribute("data-en",el.textContent);});
var u="378990110",d="qq.com";
document.querySelectorAll(".email").forEach(function(e){e.innerHTML='<a href="mailto:'+u+'@'+d+'">'+u+'@'+d+'</a>';});
var lang=localStorage.getItem("lang")==="zh"?"zh":"en";
var btn=document.getElementById("lang-toggle");
function apply(){
document.documentElement.lang=lang==="zh"?"zh-CN":"en";
els.forEach(function(el){var k=el.getAttribute("data-i18n");el.textContent=(lang==="zh"&&zh[k]!==undefined)?zh[k]:el.getAttribute("data-en");});
btn.textContent=lang==="zh"?"EN":"中文";
}
btn.addEventListener("click",function(){lang=lang==="zh"?"en":"zh";localStorage.setItem("lang",lang);apply();});
apply();
})();

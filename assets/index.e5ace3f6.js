import{r as _,o as c,c as p,a as l,w as m,u as g,m as f,b as i,n as y,F as w,d as h,t as u,e as D,f as F,p as S,g as $,h as R,v as T,i as H,j as G,k as M,l as B,q as P,s as I,x as K,y as x,z as N,A as V,B as j,C as O,D as J,E as U,G as Z,H as q,_ as Y,I as Q}from"./vendor.c9064ed1.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}};X();var ee="/training-app/logo.png";var b=(e,t)=>{const s=e.__vccOpts||e;for(const[d,o]of t)s[d]=o;return s};const te={name:"MenuIcon",props:["iconName"]},ie={class:"icon"};function se(e,t,s,d,o,a){const r=_("font-awesome-icon");return c(),p("div",ie,[l(r,{icon:s.iconName},null,8,["icon"])])}var k=b(te,[["render",se],["__scopeId","data-v-6a256d48"]]);const oe={class:"menu"},ne=h("Menu"),re=h("Unterrichtseinheit"),ae=h("Drills"),le=h("Kombinationen"),de=h("\xDCber uns"),ce={name:"MainMenu",components:{MenuIcon:k},data:()=>({showNavigation:!1}),methods:{closeNavigation(){this.showNavigation=!1}}},pe=Object.assign(ce,{setup(e){return(t,s)=>{const d=_("font-awesome-icon"),o=_("RouterLink");return c(),p(w,null,[l(g(f.exports.MDBBtn),{"aria-controls":"showNavigation",onClick:s[0]||(s[0]=a=>t.showNavigation=!0)},{default:m(()=>[l(d,{icon:"list"})]),_:1}),i("div",oe,[l(g(f.exports.MDBModal),{id:"showNavigation",tabindex:"-1",labelledby:"showNavigation",class:"col-md-6 sidebary modal-side modal-top-left",modelValue:t.showNavigation,"onUpdate:modelValue":s[5]||(s[5]=a=>t.showNavigation=a)},{default:m(()=>[l(g(f.exports.MDBModalHeader),null,{default:m(()=>[ne]),_:1}),l(g(f.exports.MDBModalBody),null,{default:m(()=>[l(g(f.exports.MDBListGroup),{flush:""},{default:m(()=>[l(g(f.exports.MDBListGroupItem),{class:y("d-flex list-group-item"),onClick:s[1]||(s[1]=a=>t.closeNavigation())},{default:m(()=>[l(g(k),{"icon-name":"list"}),l(o,{to:"/lesson"},{default:m(()=>[re]),_:1})]),_:1}),l(g(f.exports.MDBListGroupItem),{class:y("d-flex list-group-item"),onClick:s[2]||(s[2]=a=>t.closeNavigation())},{default:m(()=>[l(g(k),{"icon-name":"clock"}),l(o,{to:"/drills"},{default:m(()=>[ae]),_:1})]),_:1}),l(g(f.exports.MDBListGroupItem),{class:y("d-flex list-group-item"),onClick:s[3]||(s[3]=a=>t.closeNavigation())},{default:m(()=>[l(g(k),{"icon-name":"users-cog"}),l(o,{to:"/kombinationen"},{default:m(()=>[le]),_:1})]),_:1}),l(g(f.exports.MDBListGroupItem),{class:y("d-flex list-group-item"),onClick:s[4]||(s[4]=a=>t.closeNavigation())},{default:m(()=>[l(g(k),{"icon-name":"chess-pawn"}),l(o,{to:"/about"},{default:m(()=>[de]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}});var W=b(pe,[["__scopeId","data-v-7e55232a"]]);const ue={class:"wrappy"},me=i("img",{src:ee},null,-1),ge={class:"position-absolute top-0 end-0"},fe={class:"d-grid"},he={class:"wrapper"},ve={name:"App",components:[W],data:()=>({showNavigation:!1})},be=Object.assign(ve,{setup(e){return(t,s)=>{const d=_("RouterView");return c(),p("div",ue,[i("header",null,[me,i("div",ge,[l(W)])]),i("div",fe,[i("div",he,[l(d)])])])}}}),_e="modulepreload",A={},ye="/training-app/",z=function(t,s){return!s||s.length===0?t():Promise.all(s.map(d=>{if(d=`${ye}${d}`,d in A)return;A[d]=!0;const o=d.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${a}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":_e,o||(r.as="script",r.crossOrigin=""),r.href=d,document.head.appendChild(r),o)return new Promise((n,L)=>{r.addEventListener("load",n),r.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>t())};const ke={name:"LessonPart",props:["minutes","title","description","subsets"],data:()=>({isLoading:!1})},we=e=>(S("data-v-188f3a20"),e=e(),$(),e),Se={class:"mb-4"},$e={class:"p-3"},De={class:"container"},Be={key:0,class:"description"},ze={key:1,class:"subsets"},Fe={class:"subset"},Ae=h(),Ce={key:0},Re=we(()=>i("br",null,null,-1));function Te(e,t,s,d,o,a){return c(),p("div",Se,[i("h2",$e,u(s.title)+" ('"+u(s.minutes)+")",1),i("div",De,[s.description?(c(),p("div",Be,u(s.description),1)):D("",!0),s.subsets?(c(),p("div",ze,[(c(!0),p(w,null,F(s.subsets,r=>(c(),p("div",Fe,[i("strong",null,u(r.title),1),Ae,r.minutes?(c(),p("span",Ce,"('"+u(r.minutes)+")",1)):D("",!0),Re,i("p",null,u(r.description),1)]))),256))])):D("",!0)])])}var We=b(ke,[["render",Te],["__scopeId","data-v-188f3a20"]]),E=[{title:"Positioning Flow",category:"Bodenkampf Flow",video:"bodenkampf-position-flow.mp4",description:"Wechsel von Side control nach Kreuzposition, dann Mount und Guard"},{title:"Side control submission - Armbeugehebel",category:"Bodenkampf Submission",video:"side-control-submission.mp4",description:"Armbeugehebel mit Bein"},{title:"Kreuzposition submission - Americana",category:"Bodenkampf Submission",video:"kreuzposition-submission-americana.mp4",description:"Americana"},{title:"Mount submission - Reversw\xFCrger",category:"Bodenkampf Submission",video:"mount-submission.mp4",description:"Reversw\xFCrger"},{title:"Guard submission - Triangle Choke",category:"Bodenkampf Submission",video:"guard-submission-triangle.mp4",description:"Triangle Choke"},{title:"Side controll escape",category:"Bodenkampf Escape",video:"side-control-escape.mp4",description:""},{title:"Side controll escape 2",category:"Bodenkampf Escape",video:"side-control-escape-uebertragen.mp4",description:""},{title:"Side controll escape 3",category:"Bodenkampf Escape",video:"side-control-escape-rollen.mp4",description:""},{title:"Kreuzposition escape",category:"Bodenkampf Escape",video:"kreuzposition-escape-ns.mp4",description:""},{title:"Kreuzposition escape Frame",category:"Bodenkampf Escape",video:"kreuzposition-escape-frame.mp4",description:""},{title:"Guard escape Frame",category:"Bodenkampf Escape",video:"guard-escape-elbow.mp4",description:""},{title:"Mount escape Sweep",category:"Bodenkampf Escape",video:"mount-escape-sweep.mp4",description:""},{title:"Mount escape Stand-up",category:"Bodenkampf Escape",video:"guard-escape-standup.mp4",description:""},{title:"Wurfdrill H\xFCftwurf",category:"uchikomi Wurf",video:"uchi-komi-hueftwurf.mp4",description:""},{title:"Wurfdrill Grosse Aussensichel",category:"uchikomi Wurf",video:"uchi-komi-grosse-aussensichel.mp4",description:""},{title:"Gegentechnik Grosse Aussensichel",category:"Gegentechnik Wurf",video:"gegentechniken-grosse-aussensichel.mp4",description:""},{title:"Weiterf\xFChrung Grosse Aussensichel",category:"Weiterfuehrung Wurf",video:"weiterfuehrung-grosse-aussensichel.mp4",description:""},{title:"Hebel-Flow Armstreckhebel - Kipphandhebel",category:"Hebel-Flow",video:"hebel-flow-ash-khh.mp4",description:""},{title:"Hebel-Flow Armstreckhebel - Z-Hebel - Kipphandhebel",category:"Hebel-Flow",video:"hebel-flow-ash-z-khh.mp4",description:""},{title:"Hebel-Flow Kote-hineri - Z-Hebel",category:"Hebel-Flow",video:"hebel-flow-kote-hineri-kuzure-z.mp4",description:""},{title:"Hebel-Flow Fingerhebel",category:"Hebel-Flow",video:"hebel-flow-fingerhebel.mp4",description:""},{title:"180\xB0-Drehung",category:"Drehung",video:"180-grad-drehung.mp4",description:""},{title:"Atemi Basic Combi",category:"Atemi",video:"atemi-basic.mp4",description:"Atemi Basic Combi"},{title:"Bedingtes Sparring Jab",category:"Atemi Randori",video:"atemi-bedingtes-sparring-jab.mp4",description:"Bedingtes Sparring Jab"},{title:"Bedingtes Sparring Jab Punch",category:"Atemi Randori",video:"atemi-bedingtes-sparring-jab.mp4",description:"Bedingtes Sparring Jab Punch"},{title:"Stock",category:"Waffen Stock",video:"waffen-stock-abwehr.mp4",description:"Waffendrill, Angriffe 1-6"},{title:"Stock, Konter",category:"Waffen Stock",video:"waffen-stock-conter.mp4",description:"Waffendrill, Angriffe 1-6, mit Konterschlag"},{title:"Stock, Handgelenk",category:"Waffen Stock",video:"waffen-stock-handgelenk.mp4",description:"Waffendrill, Angriffe 1-6 auf Handgelenk"}],Ee=[{title:"Animal Walks",category:"Solo-Drill",video:"",description:"Shrimp, Matador, Sewing-machine, Scorpion, Ape, Crocodile, Kanguroo, Cheeta, Bear, Duck"},{title:"Turner-\xDCbungen",category:"Solo-Drill",video:"",description:"Rad, Radschere, Zirkusrolle"},{title:"Fallschule (Basic Solo)",category:"Solo-Drill",video:"",description:"Rolle vorw\xE4rts, Rolle r\xFCckw\xE4rts, Sturz vorw\xE4rts, Sturz r\xFCckw\xE4rts, Sturz seitw\xE4rts, Rolle seitw\xE4rs, Federfall; Rolle/Sturz nach Stoss durch Partner"}],Le=[{minutes:15,title:"Einw\xE4rmen",description:"(1.) einw\xE4rmen - (2.) Fallschule - (3.) Spiel"},{minutes:15,title:"Drills",description:"verschiedene Drills"},{minutes:15,title:"Technik I",description:"Konkrete Kombination, methodische \xDCbungsreihe"},{minutes:15,title:"Technik II",description:"Konkrete Kombination, methodische \xDCbungsreihe"},{minutes:15,title:"Anwendung",description:"Randori / SV-Drills / SV / Sparring"},{minutes:15,title:"[Pufferzeit]",description:"z. B. f\xFCr Erkl\xE4rungen, Fragen etc."}],He=[{title:"Fallschule (Basic Solo)",category:"Solo-Drill Basic",video:"",description:"Rolle vorw\xE4rts, Rolle r\xFCckw\xE4rts, Sturz vorw\xE4rts, Sturz r\xFCckw\xE4rts, Sturz seitw\xE4rts, Rolle seitw\xE4rs, Federfall; Rolle/Sturz nach Stoss durch Partner"},{title:"Fallschule unter Einwirkung des Partners",category:"Drill",video:"",description:"jeweils nach Stoss des Partners: Rolle vorw\xE4rts, Rolle r\xFCckw\xE4rts, Sturz vorw\xE4#rts, Sturz r\xFCckw\xE4rts, Sturz seitw\xE4rts, Rolle seitw\xE4rs"},{title:"Fallschule Sturz seitw\xE4rts mit Partner",category:"Drill",video:"",description:"Partner Bank, seitliche Rolle dar\xFCber, in Revers eingreifen Sturz seitw\xE4rts"},{title:"Fallschule Fortgeschritten",category:"Solo-Drill",video:"",description:"\xFCber Hindernis, Messer aufnehmen, Rucksack aufnehmen und wegrennen"},{title:"Wett-Rutschen",category:"Solo-Drill",video:"",description:"Anlauf, Rollevorw\xE4rts abklopfen => rutschen => wer rutscht weiter"}],Ge=[{title:"Reis-S\xE4ckchen",category:"Game",video:"",description:"2er-Gruppen, jede 2 Reis-S\xE4ckchen in verschiedener Farbe; der Werfer k\xFCndiogt die Farbe an, die gefangen werden soll"},{title:"G\xE4nsespiel",category:"Game",video:"",description:"Staffellauf, mehrere Gruppen, alle an einer Linie, w\xFCrfeln, w\xE4hrend einer zum Spielbrett l\xE4uft und die Gans zieht, nachen die anderen leichte Leibes\xFCbungen, Kniebeugen, Burpies etc."},{title:"Tik Tak Tok",category:"Game",video:"",description:"Staffellauf, 3er- oder 4er-Gruppen, mit 2x3 Reiss\xE4ckchen verschiedener Farben am anderen Ende der Halle Tik-Tak-Tok spielen"},{title:"Schulterklatschen",category:"Game",video:"",description:"Partnerweise, versuchen sich gegenseitig auf die Schulter zu klatschen, dann Oberschenkel. dann beides, auf Augen aufpassen ;-)"},{title:"Schwarz-weiss",category:"Game",video:"",description:"Partnerweise zusammen, in der mitt der Halle, sodass beide Partner Platz zum Sprinten in jeweils ihr Richtung haben, eine Seite ist 'weiss', die andere 'schwarz', 'weiss 1' heisst weiss ist F\xE4nger, 'weiss 2' heisst weiss ist Fl\xFCchtender, 'schwarz 1' mach schwarz zum F\xE4nger, allm\xE4hlich komplexer gesttalen, 'weiss 5' => ungrade = F\xE4nger, gerade = Fl\xFCchtiger, 'schwarz 4+7' etc."},{title:"Kniel\xE4ufer-Fangi",category:"Game",video:"",description:"alle auf den Knien, ein ode mehrere F\xE4nger"}],Me=[{title:"Bedingtes Sparring - gerade",category:"Sparring Bedingt",video:"",description:"nur gerade Angriffe sind erlaubt"},{title:"Bedingtes Sparring - rund",category:"Sparring Bedingt",video:"",description:"nur runde Angriffe sind erlaubt, Schwinger, Mawashi-geri, Low-kick"},{title:"Bedingtes Sparring - Handangriffe",category:"Sparring Bedingt",video:"",description:"Angriffe nur mit Armen / H\xE4nden erlaubt"},{title:"Bedingtes Sparring - Kicks",category:"Sparring Bedingt",video:"",description:"Angriff nur mit Kicks"},{title:"Freies Sparring oder Randori",category:"Sparring",video:"",description:"Randori im Stand, mit Jiu-Techniken"},{title:"Freies Rollen",category:"Sparring",video:"",description:"Freier Bodenkampf, bis zur Submission, Start ggf. im Stand mit Take-down"}];const Pe={name:"LessonView",components:{LessonPart:We},data:()=>({lessonParts:Le,drills:E,soloDrills:Ee,falling:He,games:Ge,sparring:Me,subsetsWarmup:[],subsetsDrills:[],subsetsSparring:[],errored:!1,isLoading:!0}),mounted(){this.initAll()},methods:{initAll(){this.initSubSetsWarmup(),this.initDrills(),this.initSparring()},initSubSetsWarmup(){let e=this.getRandomElementsFromArray(this.soloDrills).pop(),t=this.getRandomElementsFromArray(this.falling).pop(),s=this.getRandomElementsFromArray(this.games).pop();e.minutes=t.minutes=s.minutes=5,this.subsetsWarmup=[e,t,s]},initDrills(){let e=this.getRandomElementsFromArray(this.drills,3);this.subsetsDrills=e},initSparring(){let e=this.getRandomElementsFromArray(this.sparring,3);this.subsetsSparring=e},getRandomElementsFromArray(e,t=1){return e=this.shuffleArray(e),e.slice(0,t)},shuffleArray(e){for(let t=e.length-1;t>=0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}}},Ie=e=>(S("data-v-b0d055b4"),e=e(),$(),e),Ke={class:"lesson"},xe=Ie(()=>i("h1",null,"Unterrichtseinheit",-1)),Ne={class:"container"};function Ve(e,t,s,d,o,a){const r=_("lesson-part");return c(),p("div",Ke,[i("button",{style:{"z-index":"1000"},class:"btn btn-primary fa-pull-right",onClick:t[0]||(t[0]=n=>a.initAll())},"Neues Training erstellen "),xe,i("div",Ne,[l(r,{title:"Einw\xE4rmen",minutes:"15",subsets:e.subsetsWarmup},null,8,["subsets"]),l(r,{title:"Drills",minutes:"15",subsets:e.subsetsDrills},null,8,["subsets"]),l(r,{title:"Technik I",minutes:"15"}),l(r,{title:"Technik II",minutes:"15"}),l(r,{title:"Randori / Sparring",minutes:"15",subsets:e.subsetsSparring,description:"Schutzausr\xFCstung ist zu tragen. Zahnschutz, Handpolster, Schienbeinschoner"},null,8,["subsets"])])])}var C=b(Pe,[["render",Ve],["__scopeId","data-v-b0d055b4"]]);const je={name:"DrillPart",props:["title","video","description","category"],data:()=>({isLoading:!1})},Oe={class:"row"},Je={class:"col-md description"},Ue={class:"col-md video"},Ze={width:"320",height:"240",controls:""},qe=["src"],Ye=h(" Your browser does not support the video tag. ");function Qe(e,t,s,d,o,a){return c(),p("div",Oe,[i("h2",null,[h(u(s.title)+" ",1),i("small",null,"("+u(s.category)+")",1)]),i("div",Je,u(s.description),1),i("div",Ue,[i("video",Ze,[i("source",{src:"assets/videos/"+s.video,type:"video/mp4"},null,8,qe),Ye])])])}var Xe=b(je,[["render",Qe],["__scopeId","data-v-49b17f26"]]);const et={name:"DrillsView",components:{DrillPart:Xe},data:()=>({categoryToDisplay:"all",categoryToDisplayDefault:"all",drills:E,errored:!1,isLoading:!0})},tt=e=>(S("data-v-4314c4b0"),e=e(),$(),e),it={class:"drills"},st=tt(()=>i("h1",null,"Drills",-1)),ot={class:"description"},nt={class:"wrapper-drills"};function rt(e,t,s,d,o,a){const r=_("drill-part");return c(),p("div",it,[i("button",{style:{"z-index":"1000"},class:"btn all",onClick:t[0]||(t[0]=n=>e.categoryToDisplay="all")},"Alle"),i("button",{style:{"z-index":"1000"},class:"btn hebel-flow",onClick:t[1]||(t[1]=n=>e.categoryToDisplay="hebel-flow")},"Hebel-Flow "),i("button",{style:{"z-index":"1000"},class:"btn atemi",onClick:t[2]||(t[2]=n=>e.categoryToDisplay="atemi")},"Atemi"),i("button",{style:{"z-index":"1000"},class:"btn bodenkampf",onClick:t[3]||(t[3]=n=>e.categoryToDisplay="bodenkampf")},"Bodenkampf "),i("button",{style:{"z-index":"1000"},class:"btn wurf",onClick:t[4]||(t[4]=n=>e.categoryToDisplay="wurf")},"W\xFCrfe"),i("button",{style:{"z-index":"1000"},class:"btn waffen",onClick:t[5]||(t[5]=n=>e.categoryToDisplay="waffen")},"Waffen"),i("button",{style:{"z-index":"1000"},class:"btn randori",onClick:t[6]||(t[6]=n=>e.categoryToDisplay="randori")},"Randori"),i("button",{style:{"z-index":"1000"},class:"btn drehung",onClick:t[7]||(t[7]=n=>e.categoryToDisplay="drehung")},"Drehung"),st,i("div",ot,[i("ul",null,[i("li",null,"Number of drills: "+u(e.drills.length),1),i("li",null,u(e.categoryToDisplay),1)])]),i("div",nt,[(c(!0),p(w,null,F(e.drills,n=>(c(),p("div",null,[R(i("div",{class:y("container mb-4 "+n.category.toLowerCase())},[l(r,{title:n.title,category:n.category,video:n.video,description:n.description},null,8,["title","category","video","description"])],2),[[T,e.categoryToDisplay==="all"||n.category.toLowerCase().includes(e.categoryToDisplay)]])]))),256))])])}var at=b(et,[["render",rt],["__scopeId","data-v-4314c4b0"]]);const lt={name:"BodenkampfView",data:()=>({categoryToDisplay:"all",categoryToDisplayDefault:"all",drills:[{title:"Positioning Flow",category:"Bodenkampf Flow",video:"bodenkampf-position-flow.mp4",description:"Wechsel von Side control nach Kreuzposition, dann Mount und Guard"},{title:"Side control submission - Armbeugehebel",category:"Bodenkampf Submission",video:"side-control-submission.mp4",description:"Armbeugehebel mit Bein"},{title:"Kreuzposition submission - Americana",category:"Bodenkampf Submission",video:"kreuzposition-submission-americana.mp4",description:"Americana"},{title:"Mount submission - Reversw\xFCrger",category:"Bodenkampf Submission",video:"mount-submission.mp4",description:"Reversw\xFCrger"},{title:"Guard submission - Triangle Choke",category:"Bodenkampf Submission",video:"guard-submission-triangle.mp4",description:"Triangle Choke"},{title:"Side controll escape",category:"Bodenkampf Escape",video:"side-control-escape.mp4",description:""},{title:"Side controll escape 2",category:"Bodenkampf Escape",video:"side-control-escape-uebertragen.mp4",description:""},{title:"Side controll escape 3",category:"Bodenkampf Escape",video:"side-control-escape-rollen.mp4",description:""},{title:"Kreuzposition escape",category:"Bodenkampf Escape",video:"kreuzposition-escape-ns.mp4",description:""},{title:"Kreuzposition escape Frame",category:"Bodenkampf Escape",video:"kreuzposition-escape-frame.mp4",description:""},{title:"Guard escape Frame",category:"Bodenkampf Escape",video:"guard-escape-elbow.mp4",description:""},{title:"Mount escape Sweep",category:"Bodenkampf Escape",video:"mount-escape-sweep.mp4",description:""},{title:"Mount escape Stand-up",category:"Bodenkampf Escape",video:"guard-escape-standup.mp4",description:""},{title:"Wurfdrill H\xFCftwurf",category:"uchikomi Wurf",video:"uchi-komi-hueftwurf.mp4",description:""},{title:"Wurfdrill Grosse Aussensichel",category:"uchikomi Wurf",video:"uchi-komi-grosse-aussensichel.mp4",description:""},{title:"Gegentechnik Grosse Aussensichel",category:"Gegentechnik Wurf",video:"gegentechniken-grosse-aussensichel.mp4",description:""},{title:"Weiterf\xFChrung Grosse Aussensichel",category:"Weiterfuehrung Wurf",video:"weiterfuehrung-grosse-aussensichel.mp4",description:""},{title:"Hebel-Flow Armstreckhebel - Kipphandhebel",category:"Hebel-Flow",video:"hebel-flow-ash-khh.mp4",description:""},{title:"Hebel-Flow Armstreckhebel - Z-Hebel - Kipphandhebel",category:"Hebel-Flow",video:"hebel-flow-ash-z-khh.mp4",description:""},{title:"Hebel-Flow Kote-hineri - Z-Hebel",category:"Hebel-Flow",video:"hebel-flow-kote-hineri-kuzure-z.mp4",description:""},{title:"Hebel-Flow Fingerhebel",category:"Hebel-Flow",video:"hebel-flow-fingerhebel.mp4",description:""},{title:"180\xB0-Drehung",category:"Drehung",video:"180-grad-drehung.mp4",description:""},{title:"Atemi Basic Combi",category:"Atemi",video:"atemi-basic.mp4",description:"Atemi Basic Combi"},{title:"Bedingtes Sparring Jab",category:"Atemi Randori",video:"atemi-bedingtes-sparring-jab.mp4",description:"Bedingtes Sparring Jab"},{title:"Bedingtes Sparring Jab Punch",category:"Atemi Randori",video:"atemi-bedingtes-sparring-jab.mp4",description:"Bedingtes Sparring Jab Punch"},{title:"Stock",category:"Waffen Stock",video:"waffen-stock-abwehr.mp4",description:"Waffendrill, Angriffe 1-6"},{title:"Stock, Konter",category:"Waffen Stock",video:"waffen-stock-conter.mp4",description:"Waffendrill, Angriffe 1-6, mit Konterschlag"},{title:"Stock, Handgelenk",category:"Waffen Stock",video:"waffen-stock-handgelenk.mp4",description:"Waffendrill, Angriffe 1-6 auf Handgelenk"}],errored:!1,isLoading:!0}),methods:{createTraining(){}}},dt=e=>(S("data-v-698ac252"),e=e(),$(),e),ct={class:"training"},pt=dt(()=>i("h1",null,"Drills",-1)),ut={class:"description"},mt={class:"wrapper"};function gt(e,t,s,d,o,a){const r=_("drill-part");return c(),p("div",ct,[i("button",{style:{"z-index":"1000"},class:"btn all",onClick:t[0]||(t[0]=n=>e.categoryToDisplay="all")},"Alle"),i("button",{style:{"z-index":"1000"},class:"btn hebel-flow",onClick:t[1]||(t[1]=n=>e.categoryToDisplay="hebel-flow")},"Hebel-Flow"),i("button",{style:{"z-index":"1000"},class:"btn atemi",onClick:t[2]||(t[2]=n=>e.categoryToDisplay="atemi")},"Atemi"),i("button",{style:{"z-index":"1000"},class:"btn bodenkampf",onClick:t[3]||(t[3]=n=>e.categoryToDisplay="bodenkampf")},"Bodenkampf"),i("button",{style:{"z-index":"1000"},class:"btn wurf",onClick:t[4]||(t[4]=n=>e.categoryToDisplay="wurf")},"W\xFCrfe"),i("button",{style:{"z-index":"1000"},class:"btn waffen",onClick:t[5]||(t[5]=n=>e.categoryToDisplay="waffen")},"Waffen"),i("button",{style:{"z-index":"1000"},class:"btn randori",onClick:t[6]||(t[6]=n=>e.categoryToDisplay="randori")},"Randori"),i("button",{style:{"z-index":"1000"},class:"btn drehung",onClick:t[7]||(t[7]=n=>e.categoryToDisplay="drehung")},"Drehung"),pt,i("div",ut,[i("ul",null,[i("li",null,"Number of drills: "+u(e.drills.length),1),i("li",null,u(e.categoryToDisplay),1)])]),i("div",mt,[(c(!0),p(w,null,F(e.drills,n=>(c(),p("div",null,[R(i("div",{class:y("container pt-3 pb-1 mb-4 "+n.category.toLowerCase())},[l(r,{title:n.title,category:n.category,video:n.video,description:n.description},null,8,["title","category","video","description"])],2),[[T,e.categoryToDisplay==="all"||n.category.toLowerCase().includes(e.categoryToDisplay)]])]))),256))])])}var ft=b(lt,[["render",gt],["__scopeId","data-v-698ac252"]]);const ht={name:"DemonicItem",data(){return{demoCracy:{},resop:{}}},async mounted(){let e={};const t=await this.axios.post("/",e);this.demoCracy=t.data,this.resop=t,this.demoCracy=t},methods:{test(){alert("adasd")},async test2(){let e={};const t=await vue.axios.post("/",e);this.demoCracy=t.data,this.demoCracy=this}}},vt=i("h2",null,"Demonic",-1),bt=i("p",null,"asdasdasdsa sad asd ad a",-1),_t=i("div",{class:"mb-4"},"1",-1),yt=i("div",{class:"mb-4"},"2",-1),kt=i("div",{class:"mb-4"},"3",-1);function wt(e,t,s,d,o,a){return c(),p("div",null,[vt,bt,h(" "+u(o.demoCracy)+" ",1),_t,yt,kt,i("button",{onClick:t[0]||(t[0]=r=>this.test2())},"Say test")])}var St=b(ht,[["render",wt]]);const $t=H({history:G("/training-app/"),routes:[{path:"/",name:"home",component:C},{path:"/lesson",name:"lesson",component:C},{path:"/bodenkampf",name:"bodenkampf",component:ft},{path:"/drills",name:"drills",component:at},{path:"/kombinationen",name:"kombinationen",component:()=>z(()=>import("./TechniqueTriple.39f85169.js"),["assets/TechniqueTriple.39f85169.js","assets/TechniqueTriple.c75cf646.css","assets/vendor.c9064ed1.js"])},{path:"/about",name:"about",component:()=>z(()=>import("./AboutView.14835ccc.js"),["assets/AboutView.14835ccc.js","assets/AboutView.3251fc41.css","assets/vendor.c9064ed1.js"])},{path:"/word",name:"word",component:()=>z(()=>import("./TechniqueTriple.39f85169.js"),["assets/TechniqueTriple.39f85169.js","assets/TechniqueTriple.c75cf646.css","assets/vendor.c9064ed1.js"])},{path:"/demo",component:St}]});const v=M(be);let Dt="1";Dt||(B.defaults.baseURL="http://symapi.localhost",v.axios=B,v.use(P,B));v.use($t);I.add(K,x,N,V,j,O,J,U,Z,q);v.component("vue3-chart-js",Y);v.component("font-awesome-icon",Q);v.config.productionTip=!1;v.exports={chainWebpack:e=>{e.module.rule("raw").test(/\.txt$/).use("raw-loader").loader("raw-loader").end()}};v.mount("#app");export{b as _};
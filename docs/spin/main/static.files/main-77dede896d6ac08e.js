"use strict";window.RUSTDOC_TOOLTIP_HOVER_MS=300;window.RUSTDOC_TOOLTIP_HOVER_EXIT_MS=450;function resourcePath(basename,extension){return getVar("root-path")+basename+getVar("resource-suffix")+extension}function hideMain(){addClass(document.getElementById(MAIN_ID),"hidden")}function showMain(){removeClass(document.getElementById(MAIN_ID),"hidden")}function blurHandler(event,parentElem,hideCallback){if(!parentElem.contains(document.activeElement)&&!parentElem.contains(event.relatedTarget)){hideCallback()}}window.rootPath=getVar("root-path");window.currentCrate=getVar("current-crate");function setMobileTopbar(){const mobileTopbar=document.querySelector(".mobile-topbar");const locationTitle=document.querySelector(".sidebar h2.location");if(mobileTopbar){const mobileTitle=document.createElement("h2");mobileTitle.className="location";if(hasClass(document.querySelector(".rustdoc"),"crate")){mobileTitle.innerText=`Crate ${window.currentCrate}`}else if(locationTitle){mobileTitle.innerHTML=locationTitle.innerHTML}mobileTopbar.appendChild(mobileTitle)}}function getVirtualKey(ev){if("key"in ev&&typeof ev.key!=="undefined"){return ev.key}const c=ev.charCode||ev.keyCode;if(c===27){return"Escape"}return String.fromCharCode(c)}const MAIN_ID="main-content";const SETTINGS_BUTTON_ID="settings-menu";const ALTERNATIVE_DISPLAY_ID="alternative-display";const NOT_DISPLAYED_ID="not-displayed";const HELP_BUTTON_ID="help-button";function getSettingsButton(){return document.getElementById(SETTINGS_BUTTON_ID)}function getHelpButton(){return document.getElementById(HELP_BUTTON_ID)}function getNakedUrl(){return window.location.href.split("?")[0].split("#")[0]}function insertAfter(newNode,referenceNode){referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling)}function getOrCreateSection(id,classes){let el=document.getElementById(id);if(!el){el=document.createElement("section");el.id=id;el.className=classes;insertAfter(el,document.getElementById(MAIN_ID))}return el}function getAlternativeDisplayElem(){return getOrCreateSection(ALTERNATIVE_DISPLAY_ID,"content hidden")}function getNotDisplayedElem(){return getOrCreateSection(NOT_DISPLAYED_ID,"hidden")}function switchDisplayedElement(elemToDisplay){const el=getAlternativeDisplayElem();if(el.children.length>0){getNotDisplayedElem().appendChild(el.firstElementChild)}if(elemToDisplay===null){addClass(el,"hidden");showMain();return}el.appendChild(elemToDisplay);hideMain();removeClass(el,"hidden")}function browserSupportsHistoryApi(){return window.history&&typeof window.history.pushState==="function"}function preLoadCss(cssUrl){const link=document.createElement("link");link.href=cssUrl;link.rel="preload";link.as="style";document.getElementsByTagName("head")[0].appendChild(link)}(function(){const isHelpPage=window.location.pathname.endsWith("/help.html");function loadScript(url){const script=document.createElement("script");script.src=url;document.head.append(script)}getSettingsButton().onclick=event=>{if(event.ctrlKey||event.altKey||event.metaKey){return}window.hideAllModals(false);addClass(getSettingsButton(),"rotate");event.preventDefault();loadScript(getVar("static-root-path")+getVar("settings-js"));setTimeout(()=>{const themes=getVar("themes").split(",");for(const theme of themes){if(theme!==""){preLoadCss(getVar("root-path")+theme+".css")}}},0)};window.searchState={loadingText:"Loading search results...",input:document.getElementsByClassName("search-input")[0],outputElement:()=>{let el=document.getElementById("search");if(!el){el=document.createElement("section");el.id="search";getNotDisplayedElem().appendChild(el)}return el},title:document.title,titleBeforeSearch:document.title,timeout:null,currentTab:0,focusedByTab:[null,null,null],clearInputTimeout:()=>{if(searchState.timeout!==null){clearTimeout(searchState.timeout);searchState.timeout=null}},isDisplayed:()=>searchState.outputElement().parentElement.id===ALTERNATIVE_DISPLAY_ID,focus:()=>{searchState.input.focus()},defocus:()=>{searchState.input.blur()},showResults:search=>{if(search===null||typeof search==="undefined"){search=searchState.outputElement()}switchDisplayedElement(search);searchState.mouseMovedAfterSearch=false;document.title=searchState.title},removeQueryParameters:()=>{document.title=searchState.titleBeforeSearch;if(browserSupportsHistoryApi()){history.replaceState(null,"",getNakedUrl()+window.location.hash)}},hideResults:()=>{switchDisplayedElement(null);searchState.removeQueryParameters()},getQueryStringParams:()=>{const params={};window.location.search.substring(1).split("&").map(s=>{const pair=s.split("=");params[decodeURIComponent(pair[0])]=typeof pair[1]==="undefined"?null:decodeURIComponent(pair[1])});return params},setup:()=>{const search_input=searchState.input;if(!searchState.input){return}let searchLoaded=false;function loadSearch(){if(!searchLoaded){searchLoaded=true;loadScript(getVar("static-root-path")+getVar("search-js"));loadScript(resourcePath("search-index",".js"))}}search_input.addEventListener("focus",()=>{search_input.origPlaceholder=search_input.placeholder;search_input.placeholder="Type your search here.";loadSearch()});if(search_input.value!==""){loadSearch()}const params=searchState.getQueryStringParams();if(params.search!==undefined){searchState.setLoadingSearch();loadSearch()}},setLoadingSearch:()=>{const search=searchState.outputElement();search.innerHTML="<h3 class=\"search-loading\">"+searchState.loadingText+"</h3>";searchState.showResults(search)},};const toggleAllDocsId="toggle-all-docs";let savedHash="";function handleHashes(ev){if(ev!==null&&searchState.isDisplayed()&&ev.newURL){switchDisplayedElement(null);const hash=ev.newURL.slice(ev.newURL.indexOf("#")+1);if(browserSupportsHistoryApi()){history.replaceState(null,"",getNakedUrl()+window.location.search+"#"+hash)}const elem=document.getElementById(hash);if(elem){elem.scrollIntoView()}}const pageId=window.location.hash.replace(/^#/,"");if(savedHash!==pageId){savedHash=pageId;if(pageId!==""){expandSection(pageId)}}if(savedHash.startsWith("impl-")){const splitAt=savedHash.indexOf("/");if(splitAt!==-1){const implId=savedHash.slice(0,splitAt);const assocId=savedHash.slice(splitAt+1);const implElem=document.getElementById(implId);if(implElem&&implElem.parentElement.tagName==="SUMMARY"&&implElem.parentElement.parentElement.tagName==="DETAILS"){onEachLazy(implElem.parentElement.parentElement.querySelectorAll(`[id^="${assocId}"]`),item=>{const numbered=/([^-]+)-([0-9]+)/.exec(item.id);if(item.id===assocId||(numbered&&numbered[1]===assocId)){openParentDetails(item);item.scrollIntoView();setTimeout(()=>{window.location.replace("#"+item.id)},0)}})}}}}function onHashChange(ev){hideSidebar();handleHashes(ev)}function openParentDetails(elem){while(elem){if(elem.tagName==="DETAILS"){elem.open=true}elem=elem.parentNode}}function expandSection(id){openParentDetails(document.getElementById(id))}function handleEscape(ev){searchState.clearInputTimeout();searchState.hideResults();ev.preventDefault();searchState.defocus();window.hideAllModals(true)}function handleShortcut(ev){const disableShortcuts=getSettingValue("disable-shortcuts")==="true";if(ev.ctrlKey||ev.altKey||ev.metaKey||disableShortcuts){return}if(document.activeElement.tagName==="INPUT"&&document.activeElement.type!=="checkbox"&&document.activeElement.type!=="radio"){switch(getVirtualKey(ev)){case"Escape":handleEscape(ev);break}}else{switch(getVirtualKey(ev)){case"Escape":handleEscape(ev);break;case"s":case"S":ev.preventDefault();searchState.focus();break;case"+":ev.preventDefault();expandAllDocs();break;case"-":ev.preventDefault();collapseAllDocs();break;case"?":showHelp();break;default:break}}}document.addEventListener("keypress",handleShortcut);document.addEventListener("keydown",handleShortcut);function addSidebarItems(){if(!window.SIDEBAR_ITEMS){return}const sidebar=document.getElementsByClassName("sidebar-elems")[0];function block(shortty,id,longty){const filtered=window.SIDEBAR_ITEMS[shortty];if(!filtered){return}const modpath=hasClass(document.querySelector(".rustdoc"),"mod")?"../":"";const h3=document.createElement("h3");h3.innerHTML=`<a href="${modpath}index.html#${id}">${longty}</a>`;const ul=document.createElement("ul");ul.className="block "+shortty;for(const name of filtered){let path;if(shortty==="mod"){path=`${modpath}${name}/index.html`}else{path=`${modpath}${shortty}.${name}.html`}let current_page=document.location.href.toString();if(current_page.endsWith("/")){current_page+="index.html"}const link=document.createElement("a");link.href=path;if(link.href===current_page){link.className="current"}link.textContent=name;const li=document.createElement("li");li.appendChild(link);ul.appendChild(li)}sidebar.appendChild(h3);sidebar.appendChild(ul)}if(sidebar){block("primitive","primitives","Primitive Types");block("mod","modules","Modules");block("macro","macros","Macros");block("struct","structs","Structs");block("enum","enums","Enums");block("constant","constants","Constants");block("static","static","Statics");block("trait","traits","Traits");block("fn","functions","Functions");block("type","types","Type Aliases");block("union","unions","Unions");block("foreigntype","foreign-types","Foreign Types");block("keyword","keywords","Keywords");block("opaque","opaque-types","Opaque Types");block("attr","attributes","Attribute Macros");block("derive","derives","Derive Macros");block("traitalias","trait-aliases","Trait Aliases")}}window.register_implementors=imp=>{const implementors=document.getElementById("implementors-list");const synthetic_implementors=document.getElementById("synthetic-implementors-list");const inlined_types=new Set();const TEXT_IDX=0;const SYNTHETIC_IDX=1;const TYPES_IDX=2;if(synthetic_implementors){onEachLazy(synthetic_implementors.getElementsByClassName("impl"),el=>{const aliases=el.getAttribute("data-aliases");if(!aliases){return}aliases.split(",").forEach(alias=>{inlined_types.add(alias)})})}let currentNbImpls=implementors.getElementsByClassName("impl").length;const traitName=document.querySelector(".main-heading h1 > .trait").textContent;const baseIdName="impl-"+traitName+"-";const libs=Object.getOwnPropertyNames(imp);const script=document.querySelector("script[data-ignore-extern-crates]");const ignoreExternCrates=new Set((script?script.getAttribute("data-ignore-extern-crates"):"").split(","));for(const lib of libs){if(lib===window.currentCrate||ignoreExternCrates.has(lib)){continue}const structs=imp[lib];struct_loop:for(const struct of structs){const list=struct[SYNTHETIC_IDX]?synthetic_implementors:implementors;if(struct[SYNTHETIC_IDX]){for(const struct_type of struct[TYPES_IDX]){if(inlined_types.has(struct_type)){continue struct_loop}inlined_types.add(struct_type)}}const code=document.createElement("h3");code.innerHTML=struct[TEXT_IDX];addClass(code,"code-header");onEachLazy(code.getElementsByTagName("a"),elem=>{const href=elem.getAttribute("href");if(href&&!href.startsWith("#")&&!/^(?:[a-z+]+:)?\/\//.test(href)){elem.setAttribute("href",window.rootPath+href)}});const currentId=baseIdName+currentNbImpls;const anchor=document.createElement("a");anchor.href="#"+currentId;addClass(anchor,"anchor");const display=document.createElement("div");display.id=currentId;addClass(display,"impl");display.appendChild(anchor);display.appendChild(code);list.appendChild(display);currentNbImpls+=1}}};if(window.pending_implementors){window.register_implementors(window.pending_implementors)}window.register_type_impls=imp=>{if(!imp||!imp[window.currentCrate]){return}window.pending_type_impls=null;const idMap=new Map();let implementations=document.getElementById("implementations-list");let trait_implementations=document.getElementById("trait-implementations-list");let trait_implementations_header=document.getElementById("trait-implementations");const script=document.querySelector("script[data-self-path]");const selfPath=script?script.getAttribute("data-self-path"):null;const mainContent=document.querySelector("#main-content");const sidebarSection=document.querySelector(".sidebar section");let methods=document.querySelector(".sidebar .block.method");let associatedTypes=document.querySelector(".sidebar .block.associatedtype");let associatedConstants=document.querySelector(".sidebar .block.associatedconstant");let sidebarTraitList=document.querySelector(".sidebar .block.trait-implementation");for(const impList of imp[window.currentCrate]){const types=impList.slice(2);const text=impList[0];const isTrait=impList[1]!==0;const traitName=impList[1];if(types.indexOf(selfPath)===-1){continue}let outputList=isTrait?trait_implementations:implementations;if(outputList===null){const outputListName=isTrait?"Trait Implementations":"Implementations";const outputListId=isTrait?"trait-implementations-list":"implementations-list";const outputListHeaderId=isTrait?"trait-implementations":"implementations";const outputListHeader=document.createElement("h2");outputListHeader.id=outputListHeaderId;outputListHeader.innerText=outputListName;outputList=document.createElement("div");outputList.id=outputListId;if(isTrait){const link=document.createElement("a");link.href=`#${outputListHeaderId}`;link.innerText="Trait Implementations";const h=document.createElement("h3");h.appendChild(link);trait_implementations=outputList;trait_implementations_header=outputListHeader;sidebarSection.appendChild(h);sidebarTraitList=document.createElement("ul");sidebarTraitList.className="block trait-implementation";sidebarSection.appendChild(sidebarTraitList);mainContent.appendChild(outputListHeader);mainContent.appendChild(outputList)}else{implementations=outputList;if(trait_implementations){mainContent.insertBefore(outputListHeader,trait_implementations_header);mainContent.insertBefore(outputList,trait_implementations_header)}else{const mainContent=document.querySelector("#main-content");mainContent.appendChild(outputListHeader);mainContent.appendChild(outputList)}}}const template=document.createElement("template");template.innerHTML=text;onEachLazy(template.content.querySelectorAll("a"),elem=>{const href=elem.getAttribute("href");if(href&&!href.startsWith("#")&&!/^(?:[a-z+]+:)?\/\//.test(href)){elem.setAttribute("href",window.rootPath+href)}});onEachLazy(template.content.querySelectorAll("[id]"),el=>{let i=0;if(idMap.has(el.id)){i=idMap.get(el.id)}else if(document.getElementById(el.id)){i=1;while(document.getElementById(`${el.id}-${2 * i}`)){i=2*i}while(document.getElementById(`${el.id}-${i}`)){i+=1}}if(i!==0){const oldHref=`#${el.id}`;const newHref=`#${el.id}-${i}`;el.id=`${el.id}-${i}`;onEachLazy(template.content.querySelectorAll("a[href]"),link=>{if(link.getAttribute("href")===oldHref){link.href=newHref}})}idMap.set(el.id,i+1)});const templateAssocItems=template.content.querySelectorAll("section.tymethod, "+"section.method, section.associatedtype, section.associatedconstant");if(isTrait){const li=document.createElement("li");const a=document.createElement("a");a.href=`#${template.content.querySelector(".impl").id}`;a.textContent=traitName;li.appendChild(a);sidebarTraitList.append(li)}else{onEachLazy(templateAssocItems,item=>{let block=hasClass(item,"associatedtype")?associatedTypes:(hasClass(item,"associatedconstant")?associatedConstants:(methods));if(!block){const blockTitle=hasClass(item,"associatedtype")?"Associated Types":(hasClass(item,"associatedconstant")?"Associated Constants":("Methods"));const blockClass=hasClass(item,"associatedtype")?"associatedtype":(hasClass(item,"associatedconstant")?"associatedconstant":("method"));const blockHeader=document.createElement("h3");const blockLink=document.createElement("a");blockLink.href="#implementations";blockLink.innerText=blockTitle;blockHeader.appendChild(blockLink);block=document.createElement("ul");block.className=`block ${blockClass}`;const insertionReference=methods||sidebarTraitList;if(insertionReference){const insertionReferenceH=insertionReference.previousElementSibling;sidebarSection.insertBefore(blockHeader,insertionReferenceH);sidebarSection.insertBefore(block,insertionReferenceH)}else{sidebarSection.appendChild(blockHeader);sidebarSection.appendChild(block)}if(hasClass(item,"associatedtype")){associatedTypes=block}else if(hasClass(item,"associatedconstant")){associatedConstants=block}else{methods=block}}const li=document.createElement("li");const a=document.createElement("a");a.innerText=item.id.split("-")[0].split(".")[1];a.href=`#${item.id}`;li.appendChild(a);block.appendChild(li)})}outputList.appendChild(template.content)}for(const list of[methods,associatedTypes,associatedConstants,sidebarTraitList]){if(!list){continue}const newChildren=Array.prototype.slice.call(list.children);newChildren.sort((a,b)=>{const aI=a.innerText;const bI=b.innerText;return aI<bI?-1:aI>bI?1:0});list.replaceChildren(...newChildren)}};if(window.pending_type_impls){window.register_type_impls(window.pending_type_impls)}function addSidebarCrates(){if(!window.ALL_CRATES){return}const sidebarElems=document.getElementsByClassName("sidebar-elems")[0];if(!sidebarElems){return}const h3=document.createElement("h3");h3.innerHTML="Crates";const ul=document.createElement("ul");ul.className="block crate";for(const crate of window.ALL_CRATES){const link=document.createElement("a");link.href=window.rootPath+crate+"/index.html";if(window.rootPath!=="./"&&crate===window.currentCrate){link.className="current"}link.textContent=crate;const li=document.createElement("li");li.appendChild(link);ul.appendChild(li)}sidebarElems.appendChild(h3);sidebarElems.appendChild(ul)}function expandAllDocs(){const innerToggle=document.getElementById(toggleAllDocsId);removeClass(innerToggle,"will-expand");onEachLazy(document.getElementsByClassName("toggle"),e=>{if(!hasClass(e,"type-contents-toggle")&&!hasClass(e,"more-examples-toggle")){e.open=true}});innerToggle.title="collapse all docs";innerToggle.children[0].innerText="\u2212"}function collapseAllDocs(){const innerToggle=document.getElementById(toggleAllDocsId);addClass(innerToggle,"will-expand");onEachLazy(document.getElementsByClassName("toggle"),e=>{if(e.parentNode.id!=="implementations-list"||(!hasClass(e,"implementors-toggle")&&!hasClass(e,"type-contents-toggle"))){e.open=false}});innerToggle.title="expand all docs";innerToggle.children[0].innerText="+"}function toggleAllDocs(){const innerToggle=document.getElementById(toggleAllDocsId);if(!innerToggle){return}if(hasClass(innerToggle,"will-expand")){expandAllDocs()}else{collapseAllDocs()}}(function(){const toggles=document.getElementById(toggleAllDocsId);if(toggles){toggles.onclick=toggleAllDocs}const hideMethodDocs=getSettingValue("auto-hide-method-docs")==="true";const hideImplementations=getSettingValue("auto-hide-trait-implementations")==="true";const hideLargeItemContents=getSettingValue("auto-hide-large-items")!=="false";function setImplementorsTogglesOpen(id,open){const list=document.getElementById(id);if(list!==null){onEachLazy(list.getElementsByClassName("implementors-toggle"),e=>{e.open=open})}}if(hideImplementations){setImplementorsTogglesOpen("trait-implementations-list",false);setImplementorsTogglesOpen("blanket-implementations-list",false)}onEachLazy(document.getElementsByClassName("toggle"),e=>{if(!hideLargeItemContents&&hasClass(e,"type-contents-toggle")){e.open=true}if(hideMethodDocs&&hasClass(e,"method-toggle")){e.open=false}})}());window.rustdoc_add_line_numbers_to_examples=()=>{onEachLazy(document.getElementsByClassName("rust-example-rendered"),x=>{const parent=x.parentNode;const line_numbers=parent.querySelectorAll(".example-line-numbers");if(line_numbers.length>0){return}const count=x.textContent.split("\n").length;const elems=[];for(let i=0;i<count;++i){elems.push(i+1)}const node=document.createElement("pre");addClass(node,"example-line-numbers");node.innerHTML=elems.join("\n");parent.insertBefore(node,x)})};window.rustdoc_remove_line_numbers_from_examples=()=>{onEachLazy(document.getElementsByClassName("rust-example-rendered"),x=>{const parent=x.parentNode;const line_numbers=parent.querySelectorAll(".example-line-numbers");for(const node of line_numbers){parent.removeChild(node)}})};if(getSettingValue("line-numbers")==="true"){window.rustdoc_add_line_numbers_to_examples()}function showSidebar(){window.hideAllModals(false);const sidebar=document.getElementsByClassName("sidebar")[0];addClass(sidebar,"shown")}function hideSidebar(){const sidebar=document.getElementsByClassName("sidebar")[0];removeClass(sidebar,"shown")}window.addEventListener("resize",()=>{if(window.CURRENT_TOOLTIP_ELEMENT){const base=window.CURRENT_TOOLTIP_ELEMENT.TOOLTIP_BASE;const force_visible=base.TOOLTIP_FORCE_VISIBLE;hideTooltip(false);if(force_visible){showTooltip(base);base.TOOLTIP_FORCE_VISIBLE=true}}});const mainElem=document.getElementById(MAIN_ID);if(mainElem){mainElem.addEventListener("click",hideSidebar)}onEachLazy(document.querySelectorAll("a[href^='#']"),el=>{el.addEventListener("click",()=>{expandSection(el.hash.slice(1));hideSidebar()})});onEachLazy(document.querySelectorAll(".toggle > summary:not(.hideme)"),el=>{el.addEventListener("click",e=>{if(e.target.tagName!=="SUMMARY"&&e.target.tagName!=="A"){e.preventDefault()}})});function showTooltip(e){const notable_ty=e.getAttribute("data-notable-ty");if(!window.NOTABLE_TRAITS&&notable_ty){const data=document.getElementById("notable-traits-data");if(data){window.NOTABLE_TRAITS=JSON.parse(data.innerText)}else{throw new Error("showTooltip() called with notable without any notable traits!")}}if(window.CURRENT_TOOLTIP_ELEMENT&&window.CURRENT_TOOLTIP_ELEMENT.TOOLTIP_BASE===e){clearTooltipHoverTimeout(window.CURRENT_TOOLTIP_ELEMENT);return}window.hideAllModals(false);const wrapper=document.createElement("div");if(notable_ty){wrapper.innerHTML="<div class=\"content\">"+window.NOTABLE_TRAITS[notable_ty]+"</div>"}else{if(e.getAttribute("title")!==null){e.setAttribute("data-title",e.getAttribute("title"));e.removeAttribute("title")}if(e.getAttribute("data-title")!==null){const titleContent=document.createElement("div");titleContent.className="content";titleContent.appendChild(document.createTextNode(e.getAttribute("data-title")));wrapper.appendChild(titleContent)}}wrapper.className="tooltip popover";const focusCatcher=document.createElement("div");focusCatcher.setAttribute("tabindex","0");focusCatcher.onfocus=hideTooltip;wrapper.appendChild(focusCatcher);const pos=e.getBoundingClientRect();wrapper.style.top=(pos.top+window.scrollY+pos.height)+"px";wrapper.style.left=0;wrapper.style.right="auto";wrapper.style.visibility="hidden";const body=document.getElementsByTagName("body")[0];body.appendChild(wrapper);const wrapperPos=wrapper.getBoundingClientRect();const finalPos=pos.left+window.scrollX-wrapperPos.width+24;if(finalPos>0){wrapper.style.left=finalPos+"px"}else{wrapper.style.setProperty("--popover-arrow-offset",(wrapperPos.right-pos.right+4)+"px")}wrapper.style.visibility="";window.CURRENT_TOOLTIP_ELEMENT=wrapper;window.CURRENT_TOOLTIP_ELEMENT.TOOLTIP_BASE=e;clearTooltipHoverTimeout(window.CURRENT_TOOLTIP_ELEMENT);wrapper.onpointerenter=ev=>{if(ev.pointerType!=="mouse"){return}clearTooltipHoverTimeout(e)};wrapper.onpointerleave=ev=>{if(ev.pointerType!=="mouse"){return}if(!e.TOOLTIP_FORCE_VISIBLE&&!e.contains(ev.relatedTarget)){setTooltipHoverTimeout(e,false);addClass(wrapper,"fade-out")}}}function setTooltipHoverTimeout(element,show){clearTooltipHoverTimeout(element);if(!show&&!window.CURRENT_TOOLTIP_ELEMENT){return}if(show&&window.CURRENT_TOOLTIP_ELEMENT){return}if(window.CURRENT_TOOLTIP_ELEMENT&&window.CURRENT_TOOLTIP_ELEMENT.TOOLTIP_BASE!==element){return}element.TOOLTIP_HOVER_TIMEOUT=setTimeout(()=>{if(show){showTooltip(element)}else if(!element.TOOLTIP_FORCE_VISIBLE){hideTooltip(false)}},show?window.RUSTDOC_TOOLTIP_HOVER_MS:window.RUSTDOC_TOOLTIP_HOVER_EXIT_MS)}function clearTooltipHoverTimeout(element){if(element.TOOLTIP_HOVER_TIMEOUT!==undefined){removeClass(window.CURRENT_TOOLTIP_ELEMENT,"fade-out");clearTimeout(element.TOOLTIP_HOVER_TIMEOUT);delete element.TOOLTIP_HOVER_TIMEOUT}}function tooltipBlurHandler(event){if(window.CURRENT_TOOLTIP_ELEMENT&&!window.CURRENT_TOOLTIP_ELEMENT.contains(document.activeElement)&&!window.CURRENT_TOOLTIP_ELEMENT.contains(event.relatedTarget)&&!window.CURRENT_TOOLTIP_ELEMENT.TOOLTIP_BASE.contains(document.activeElement)&&!window.CURRENT_TOOLTIP_ELEMENT.TOOLTIP_BASE.contains(event.relatedTarget)){setTimeout(()=>hideTooltip(false),0)}}function hideTooltip(focus){if(window.CURRENT_TOOLTIP_ELEMENT){if(window.CURRENT_TOOLTIP_ELEMENT.TOOLTIP_BASE.TOOLTIP_FORCE_VISIBLE){if(focus){window.CURRENT_TOOLTIP_ELEMENT.TOOLTIP_BASE.focus()}window.CURRENT_TOOLTIP_ELEMENT.TOOLTIP_BASE.TOOLTIP_FORCE_VISIBLE=false}const body=document.getElementsByTagName("body")[0];body.removeChild(window.CURRENT_TOOLTIP_ELEMENT);clearTooltipHoverTimeout(window.CURRENT_TOOLTIP_ELEMENT);window.CURRENT_TOOLTIP_ELEMENT=null}}onEachLazy(document.getElementsByClassName("tooltip"),e=>{e.onclick=()=>{e.TOOLTIP_FORCE_VISIBLE=e.TOOLTIP_FORCE_VISIBLE?false:true;if(window.CURRENT_TOOLTIP_ELEMENT&&!e.TOOLTIP_FORCE_VISIBLE){hideTooltip(true)}else{showTooltip(e);window.CURRENT_TOOLTIP_ELEMENT.setAttribute("tabindex","0");window.CURRENT_TOOLTIP_ELEMENT.focus();window.CURRENT_TOOLTIP_ELEMENT.onblur=tooltipBlurHandler}return false};e.onpointerenter=ev=>{if(ev.pointerType!=="mouse"){return}setTooltipHoverTimeout(e,true)};e.onpointermove=ev=>{if(ev.pointerType!=="mouse"){return}setTooltipHoverTimeout(e,true)};e.onpointerleave=ev=>{if(ev.pointerType!=="mouse"){return}if(!e.TOOLTIP_FORCE_VISIBLE&&window.CURRENT_TOOLTIP_ELEMENT&&!window.CURRENT_TOOLTIP_ELEMENT.contains(ev.relatedTarget)){setTooltipHoverTimeout(e,false);addClass(window.CURRENT_TOOLTIP_ELEMENT,"fade-out")}}});const sidebar_menu_toggle=document.getElementsByClassName("sidebar-menu-toggle")[0];if(sidebar_menu_toggle){sidebar_menu_toggle.addEventListener("click",()=>{const sidebar=document.getElementsByClassName("sidebar")[0];if(!hasClass(sidebar,"shown")){showSidebar()}else{hideSidebar()}})}function helpBlurHandler(event){blurHandler(event,getHelpButton(),window.hidePopoverMenus)}function buildHelpMenu(){const book_info=document.createElement("span");const channel=getVar("channel");book_info.className="top";book_info.innerHTML=`You can find more information in \
<a href="https://doc.rust-lang.org/${channel}/rustdoc/">the rustdoc book</a>.`;const shortcuts=[["?","Show this help dialog"],["S","Focus the search field"],["↑","Move up in search results"],["↓","Move down in search results"],["← / →","Switch result tab (when results focused)"],["&#9166;","Go to active search result"],["+","Expand all sections"],["-","Collapse all sections"],].map(x=>"<dt>"+x[0].split(" ").map((y,index)=>((index&1)===0?"<kbd>"+y+"</kbd>":" "+y+" ")).join("")+"</dt><dd>"+x[1]+"</dd>").join("");const div_shortcuts=document.createElement("div");addClass(div_shortcuts,"shortcuts");div_shortcuts.innerHTML="<h2>Keyboard Shortcuts</h2><dl>"+shortcuts+"</dl></div>";const infos=[`For a full list of all search features, take a look <a \
href="https://doc.rust-lang.org/${channel}/rustdoc/read-documentation/search.html">here</a>.`,"Prefix searches with a type followed by a colon (e.g., <code>fn:</code>) to \
             restrict the search to a given item kind.","Accepted kinds are: <code>fn</code>, <code>mod</code>, <code>struct</code>, \
             <code>enum</code>, <code>trait</code>, <code>type</code>, <code>macro</code>, \
             and <code>const</code>.","Search functions by type signature (e.g., <code>vec -&gt; usize</code> or \
             <code>-&gt; vec</code> or <code>String, enum:Cow -&gt; bool</code>)","You can look for items with an exact name by putting double quotes around \
             your request: <code>\"string\"</code>","Look for functions that accept or return \
              <a href=\"https://doc.rust-lang.org/std/primitive.slice.html\">slices</a> and \
              <a href=\"https://doc.rust-lang.org/std/primitive.array.html\">arrays</a> by writing \
              square brackets (e.g., <code>-&gt; [u8]</code> or <code>[] -&gt; Option</code>)","Look for items inside another one by searching for a path: <code>vec::Vec</code>",].map(x=>"<p>"+x+"</p>").join("");const div_infos=document.createElement("div");addClass(div_infos,"infos");div_infos.innerHTML="<h2>Search Tricks</h2>"+infos;const rustdoc_version=document.createElement("span");rustdoc_version.className="bottom";const rustdoc_version_code=document.createElement("code");rustdoc_version_code.innerText="rustdoc "+getVar("rustdoc-version");rustdoc_version.appendChild(rustdoc_version_code);const container=document.createElement("div");if(!isHelpPage){container.className="popover"}container.id="help";container.style.display="none";const side_by_side=document.createElement("div");side_by_side.className="side-by-side";side_by_side.appendChild(div_shortcuts);side_by_side.appendChild(div_infos);container.appendChild(book_info);container.appendChild(side_by_side);container.appendChild(rustdoc_version);if(isHelpPage){const help_section=document.createElement("section");help_section.appendChild(container);document.getElementById("main-content").appendChild(help_section);container.style.display="block"}else{const help_button=getHelpButton();help_button.appendChild(container);container.onblur=helpBlurHandler;help_button.onblur=helpBlurHandler;help_button.children[0].onblur=helpBlurHandler}return container}window.hideAllModals=switchFocus=>{hideSidebar();window.hidePopoverMenus();hideTooltip(switchFocus)};window.hidePopoverMenus=()=>{onEachLazy(document.querySelectorAll(".search-form .popover"),elem=>{elem.style.display="none"})};function getHelpMenu(buildNeeded){let menu=getHelpButton().querySelector(".popover");if(!menu&&buildNeeded){menu=buildHelpMenu()}return menu}function showHelp(){getHelpButton().querySelector("a").focus();const menu=getHelpMenu(true);if(menu.style.display==="none"){window.hideAllModals();menu.style.display=""}}if(isHelpPage){showHelp();document.querySelector(`#${HELP_BUTTON_ID} > a`).addEventListener("click",event=>{const target=event.target;if(target.tagName!=="A"||target.parentElement.id!==HELP_BUTTON_ID||event.ctrlKey||event.altKey||event.metaKey){return}event.preventDefault()})}else{document.querySelector(`#${HELP_BUTTON_ID} > a`).addEventListener("click",event=>{const target=event.target;if(target.tagName!=="A"||target.parentElement.id!==HELP_BUTTON_ID||event.ctrlKey||event.altKey||event.metaKey){return}event.preventDefault();const menu=getHelpMenu(true);const shouldShowHelp=menu.style.display==="none";if(shouldShowHelp){showHelp()}else{window.hidePopoverMenus()}})}setMobileTopbar();addSidebarItems();addSidebarCrates();onHashChange(null);window.addEventListener("hashchange",onHashChange);searchState.setup()}());(function(){let reset_button_timeout=null;const but=document.getElementById("copy-path");if(!but){return}but.onclick=()=>{const parent=but.parentElement;const path=[];onEach(parent.childNodes,child=>{if(child.tagName==="A"){path.push(child.textContent)}});const el=document.createElement("textarea");el.value=path.join("::");el.setAttribute("readonly","");el.style.position="absolute";el.style.left="-9999px";document.body.appendChild(el);el.select();document.execCommand("copy");document.body.removeChild(el);but.children[0].style.display="none";let tmp;if(but.childNodes.length<2){tmp=document.createTextNode("✓");but.appendChild(tmp)}else{onEachLazy(but.childNodes,e=>{if(e.nodeType===Node.TEXT_NODE){tmp=e;return true}});tmp.textContent="✓"}if(reset_button_timeout!==null){window.clearTimeout(reset_button_timeout)}function reset_button(){tmp.textContent="";reset_button_timeout=null;but.children[0].style.display=""}reset_button_timeout=window.setTimeout(reset_button,1000)}}())
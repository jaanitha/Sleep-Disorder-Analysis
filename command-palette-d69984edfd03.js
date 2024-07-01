"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["command-palette"],{73219:(e,t,s)=>{var o=s(76006);function i(e,t,s,o){var i,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,s,r):i(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r}let CommandPaletteModeElement=class CommandPaletteModeElement extends HTMLElement{active(e,t){return this.scopeTypeMatch(e.type)&&this.modeMatch(t)}scopeTypeMatch(e){return!this.scopeTypes||this.scopeTypes&&JSON.parse(this.scopeTypes).includes(e)}modeMatch(e){return"*"===this.char||this.char===e}character(){return"*"===this.char?"":this.char}constructor(...e){super(...e),this.scopeTypes=""}};function n(e,t,s,o){var i,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,s,r):i(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r}i([o.Lj],CommandPaletteModeElement.prototype,"char",void 0),i([o.Lj],CommandPaletteModeElement.prototype,"placeholder",void 0),i([o.Lj],CommandPaletteModeElement.prototype,"scopeTypes",void 0),CommandPaletteModeElement=i([o.Ih],CommandPaletteModeElement);let CommandPaletteTipElement=class CommandPaletteTipElement extends HTMLElement{connectedCallback(){this.hidden=!0}available(e,t=!1,s=!1){return this.valueMatch(e.text)&&this.scopeTypeMatch(e.scope.type)&&this.modeMatch(e.mode)&&this.showOnEmpty(t)&&this.showOnError(s)}toggle(e,t=!1,s=!1){this.hidden=!this.available(e,t,s)}valueMatch(e){return"*"===this.value||this.value===e}scopeTypeMatch(e){return""!==this.scopeTypes&&("*"===this.scopeTypes||JSON.parse(this.scopeTypes).includes(e))}modeMatch(e){if(""===this.matchMode)return"*"===this.mode||this.mode===e;{let t=new RegExp(this.matchMode);return null!==e.match(t)}}showOnEmpty(e){return!this.onEmpty||e}showOnError(e){return!this.onError||e}constructor(...e){super(...e),this.scopeTypes="",this.mode="*",this.matchMode="",this.value="*",this.onEmpty=!1,this.onError=!1}};function r(e,t,s,o){var i,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,s,r):i(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r}n([o.Lj],CommandPaletteTipElement.prototype,"scopeTypes",void 0),n([o.Lj],CommandPaletteTipElement.prototype,"mode",void 0),n([o.Lj],CommandPaletteTipElement.prototype,"matchMode",void 0),n([o.Lj],CommandPaletteTipElement.prototype,"value",void 0),n([o.Lj],CommandPaletteTipElement.prototype,"onEmpty",void 0),n([o.Lj],CommandPaletteTipElement.prototype,"onError",void 0),CommandPaletteTipElement=n([o.Ih],CommandPaletteTipElement),s(69763);let CommandPaletteTokenElement=class CommandPaletteTokenElement extends HTMLElement{constructor(...e){super(...e),this.type="",this.id="",this.text="",this.value=""}};r([o.Lj],CommandPaletteTokenElement.prototype,"type",void 0),r([o.Lj],CommandPaletteTokenElement.prototype,"id",void 0),r([o.Lj],CommandPaletteTokenElement.prototype,"text",void 0),r([o.Lj],CommandPaletteTokenElement.prototype,"value",void 0),CommandPaletteTokenElement=r([o.Ih],CommandPaletteTokenElement),s(31717),s(47341);var a=s(41046),c=s(99314),l=s(89197),d=s(59707);let RemoteProvider=class RemoteProvider extends d.j{fetch(e,t){return this.fetchSrc(e)}enabledFor(e){return this.modeMatch(e)&&this.scopeMatch(e)}clearCache(){}scopeMatch(e){return 0===this.scopeTypes.length||this.scopeTypes.includes(e.scope.type)}modeMatch(e){return this.modes.includes(e.mode)||this.hasWildCard}async fetchSrc(e,t=""){if(!this.src)throw Error("No src defined");let s=new URL(this.src,window.location.origin),o=e.params();t&&o.set("mode",t),s.search=o.toString();let i=await fetch(s.toString(),{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(!i.ok)return{error:!0,results:[]};{let e=await i.json();return{results:e.results?.map(e=>l.g.build(e))||[],octicons:e.octicons}}}};let PrefetchedProvider=class PrefetchedProvider extends RemoteProvider{clearCache(){super.clearCache(),this.scopedItems={},this.cachedOcticons={}}get debounce(){return 0}async prefetch(e){if(!this.scopeMatch(e)||this.scopedItems[e.scope.id])return;let t=new c.A("",e.mode,{subjectId:e.subjectId,subjectType:e.subjectType,returnTo:e.returnTo,scope:e.scope}),s=await this.fetchSrc(t,e.mode);this.octicons=s.octicons||[];let o=s.results||[];this.scopedItems[e.scope.id]=o,this.cachedOcticons[e.scope.id]=this.octicons}async fetch(e,t){let s=this.scopedItems[e.scope.id]||[],o=this.cachedOcticons[e.scope.id]||[];return{results:this.fuzzyFilter(s,e).slice(0,this.maxItems),octicons:o}}constructor(...e){super(...e),this.maxItems=1e3,this.scopedItems={},this.cachedOcticons={}}};let CommandsProvider=class CommandsProvider extends PrefetchedProvider{enabledFor(e){return">"===e.mode||!!["discussion","issue","pull_request"].includes(e.scope.type)}};var u=s(13345),h=s(90086);let FilesProvider=class FilesProvider extends PrefetchedProvider{async fetchSrc(e){if(!this.src)throw Error("No src provided");let t=new URL(this.src,window.location.origin);t.search=e.params().toString();let s=await fetch(t.toString(),{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}}),o=await s.json();if(!o.results)return;let i=o.results[0];if(i.base_file_path){let e=i.base_file_path,t=i.paths;o.results=t.map(t=>h.s.from({title:t,path:`${e}/${t}`,icon:"file-color-fg-muted",group:"files"}))}else i.action&&"access_policy"===i.action.type?o.results=[new u.i(i)]:o.results=[];return o}async fetch(e,t=!1){let s=e.text.match(/(.+):(\d*)\s*$/);return s?this.fetchWithLineNumbers(e,s):super.fetch(e,t)}async fetchWithLineNumbers(e,t){let s=t[1],o=t[2],i=new c.A(s,e.mode,{scope:e.scope}),n=[];for(let e of(await super.fetch(i,!1)).results)e instanceof h.s&&n.push(this.convert(e,o));return{results:n}}convert(e,t){return""!==t&&e instanceof h.s&&(e.title=`${e.title}:${t}`,e.action.path=`${e.action.path}#L${t}`),e}};let HelpProvider=class HelpProvider extends d.j{enabledFor(e){return!0}clearCache(){}get hasCommands(){return!1}get debounce(){return 0}async fetch(e,t=!1){return"?"===e.mode||t?{results:Array.from(this.element.querySelectorAll("command-palette-help")).filter(t=>t.show(e)).map((e,t)=>e.toItem(t))}:{results:[]}}};var p=s(31621);let SearchLinksProvider=class SearchLinksProvider extends d.j{enabledFor(e){return!e.isBlank()&&"?"!==e.mode&&">"!==e.mode}clearCache(){}get hasCommands(){return!1}async fetch(e,t=!1){return{results:[p.K.create(e)]}}};let ServerDefinedProviderFactory=class ServerDefinedProviderFactory{static create(e){let t=this.providers[e.type];if(!t)throw Error(`Unknown provider type: ${e.type}`);return new t(e)}};function m(e,t,s,o){var i,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,s,r):i(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r}ServerDefinedProviderFactory.providers={remote:RemoteProvider,prefetched:PrefetchedProvider,commands:CommandsProvider,files:FilesProvider,help:HelpProvider,"search-links":SearchLinksProvider};let ServerDefinedProviderElement=class ServerDefinedProviderElement extends a.b{get debounce(){return parseInt(this.fetchDebounce,10)}get hasCommands(){return this.supportsCommands}get hasWildCard(){return this.modes.includes(this._wildcard)}get modes(){return""===this.supportedModes&&(this._modes=[""]),this._modes||(this._modes=JSON.parse(this.supportedModes)),this._modes}get scopeTypes(){return""===this.supportedScopeTypes?[]:(this._scopeTypes||(this._scopeTypes=JSON.parse(this.supportedScopeTypes)),this._scopeTypes)}connectedCallback(){this.provider=ServerDefinedProviderFactory.create(this)}constructor(...e){super(...e),this._wildcard="*"}};m([o.Lj],ServerDefinedProviderElement.prototype,"type",void 0),m([o.Lj],ServerDefinedProviderElement.prototype,"supportedModes",void 0),m([o.Lj],ServerDefinedProviderElement.prototype,"fetchDebounce",void 0),m([o.Lj],ServerDefinedProviderElement.prototype,"supportedScopeTypes",void 0),m([o.Lj],ServerDefinedProviderElement.prototype,"src",void 0),m([o.Lj],ServerDefinedProviderElement.prototype,"supportsCommands",void 0),ServerDefinedProviderElement=m([o.Ih],ServerDefinedProviderElement);var f=s(389);function y(e,t,s,o){var i,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,s,r):i(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r}let CommandPaletteHelpElement=class CommandPaletteHelpElement extends HTMLElement{connectedCallback(){this.hidden=!0}show(e){return this.isEnabledScopeType(e)}isEnabledScopeType(e){return!this.scopeTypes||this.scopeTypes&&JSON.parse(this.scopeTypes).includes(e.scope.type)}toItem(e){let t={group:this.group,title:this.titleElement.innerHTML,index:e};return this.prefix&&(t.prefix=this.prefix),this.hintElement.textContent&&(t.persistentHint=this.hintElement.innerHTML),f.B.from(t)}};y([o.Lj],CommandPaletteHelpElement.prototype,"group",void 0),y([o.Lj],CommandPaletteHelpElement.prototype,"prefix",void 0),y([o.Lj],CommandPaletteHelpElement.prototype,"scopeTypes",void 0),y([o.fA],CommandPaletteHelpElement.prototype,"titleElement",void 0),y([o.fA],CommandPaletteHelpElement.prototype,"hintElement",void 0),CommandPaletteHelpElement=y([o.Ih],CommandPaletteHelpElement),s(12079),s(55702),s(50359),s(6528);var b=s(54756);let MainWindowCommand=class MainWindowCommand{static item(e={}){return new b.U(new this,e)}run(e){Error("Not implemented")}isApplicable(e){return!0}constructor(){this.iconType="octicon",this.group="commands",this.priority=0,this.dismissAfterRun=!0}};let MainWindowGlobalCommand=class MainWindowGlobalCommand extends MainWindowCommand{constructor(...e){super(...e),this.group="global_commands"}};let v=class DeleteDiscussion extends MainWindowCommand{get deleteButton(){return document.querySelector("button#dialog-show-delete-discussion")}get dialogElement(){return document.querySelector("#delete-discussion")}isApplicable(){return null!=this.deleteButton}run(){let e=this.deleteButton;if(e){e.click(),setTimeout(()=>{this.dialogElement?.querySelector('button[type="submit"]')?.focus()},0);return}}constructor(...e){super(...e),this.title="Delete discussion\u2026",this.icon="trash-color-fg-muted"}},g=class EditDiscussion extends MainWindowCommand{get editButton(){return document.querySelector(".js-discussions-comment-edit-button")}isApplicable(){return null!=this.editButton}run(){this.editButton?.click()}constructor(...e){super(...e),this.title="Edit discussion body",this.icon="pencil-color-fg-muted"}},C=[v,class TransferDiscussion extends MainWindowCommand{get transferButton(){return document.querySelector("button#dialog-show-discussion-transfer-conversation")}get dialogElement(){return document.querySelector("#discussion-transfer-conversation")}isApplicable(){return null!=this.transferButton}run(){let e=this.transferButton,t=this.dialogElement;if(e&&t){e.click();let s=()=>{setTimeout(()=>{t?.querySelector("[data-menu-button]")?.focus()},0)};t.querySelector("include-fragment")?.addEventListener("load",s),s()}}constructor(...e){super(...e),this.title="Transfer discussion\u2026",this.icon="arrow-right-color-fg-muted"}},g];var w=s(43681),S=s(13375),E=s(4675);let T=class TabSizeTwo extends MainWindowCommand{async run(e){this.updateTabSize(),this.saveSettings(e)}updateTabSize(){for(let e of document.querySelectorAll("[data-tab-size]"))e.setAttribute("data-tab-size",this.tabSize)}async saveSettings(e){let t=new FormData;t.set("tab_size_rendering_preference",this.tabSize);let s="Failed to save tab size preference";try{(await (0,E.QG)("/settings/appearance/tab_size",{method:"PUT",body:t})).ok?e.displayFlash("success","Tab size rendering updated"):e.displayFlash("error",s)}catch{e.displayFlash("error",s)}}constructor(...e){super(...e),this.title="2 spaces",this.iconType="none",this.tabSize="2",this.group=""}},P=class TabSizeThree extends T{constructor(...e){super(...e),this.title="3 spaces",this.tabSize="3"}},k=class TabSizeFour extends T{constructor(...e){super(...e),this.title="4 spaces",this.tabSize="4"}},_=class TabSizeSix extends T{constructor(...e){super(...e),this.title="6 spaces",this.tabSize="6"}},x=class TabSizeEight extends T{constructor(...e){super(...e),this.title="8 spaces",this.tabSize="8"}},j=class TabSizeTen extends T{constructor(...e){super(...e),this.title="10 spaces",this.tabSize="10"}},L=class TabSizeTwelve extends T{constructor(...e){super(...e),this.title="12 spaces",this.tabSize="12"}};let SwitchTabSize=class SwitchTabSize extends MainWindowGlobalCommand{run(e){e.pushPage(new S.Z4(this.title,"tab-sizes",this.pageItems),!0)}get pageItems(){return[T,P,k,_,x,j,L].map(e=>e.item())}select(e){this.run(e)}constructor(...e){super(...e),this.title="Change tab size rendering",this.icon="gear-color-fg-muted",this.priority=10,this.dismissAfterRun=!1}};let M=class OpenInDotDev extends MainWindowCommand{isApplicable(){return this.fetchLink() instanceof HTMLAnchorElement}fetchLink(){return document.querySelector(".js-github-dev-shortcut")}run(){this.fetchLink()?.click()}constructor(...e){super(...e),this.title="Open in github.dev editor",this.icon="codespaces-color-fg-muted",this.priority=10}};let SwitchTheme=class SwitchTheme extends MainWindowGlobalCommand{run(e){e.pushPage(new S.Z4(this.title,"switch-theme-page-1",this.pageItems),!0)}get pageItems(){return[q,B,D,A,I].map(e=>e.item())}select(e){this.run(e)}constructor(...e){super(...e),this.title="Switch theme",this.icon="paintbrush-color-fg-muted",this.priority=9,this.dismissAfterRun=!1}};let q=class SwitchToDark extends MainWindowCommand{applyTheme(){this.loadStyles(this.theme),"auto"!==this.mode&&(0,w.on)(this.theme,this.mode),(0,w.h5)(this.mode)}async run(){this.applyTheme(),this.saveSettings(this.mode,this.lightTheme,this.darkTheme)}async saveSettings(e=this.mode,t,s){let o=new FormData;o.set("color_mode",e),t&&o.set("light_theme",t),s&&o.set("dark_theme",s);let i=await (0,E.QG)("/settings/appearance/color_mode",{method:"PUT",body:o}),n=await i.json();this.loadStyles(n.light_theme),this.loadStyles(n.dark_theme),(0,w.on)(n.light_theme,"light"),(0,w.on)(n.dark_theme,"dark"),(0,w.h5)(n.color_mode)}loadStyles(e){let t=document.querySelector(`link[data-color-theme='${e}']`);t&&!t.hasAttribute("href")&&t.hasAttribute("data-href")&&t.setAttribute("href",t.getAttribute("data-href"))}get darkTheme(){return"dark"===this.mode?this.theme:(0,w.yn)("dark")}get lightTheme(){return"light"===this.mode?this.theme:(0,w.yn)("light")}constructor(...e){super(...e),this.title="Default dark",this.icon="moon-color-fg-muted",this.mode="dark",this.theme="dark",this.group=""}},A=class SwitchToDarkHighContrast extends q{constructor(...e){super(...e),this.title="Switch theme to dark high contrast",this.theme="dark_high_contrast"}},D=class SwitchToDarkDimmed extends q{constructor(...e){super(...e),this.title="Dark dimmed",this.theme="dark_dimmed"}},B=class SwitchToLight extends q{constructor(...e){super(...e),this.title="Default light",this.icon="sun-color-fg-muted",this.mode="light",this.theme="light"}},I=class SwitchToAuto extends q{get darkTheme(){}get lightTheme(){}constructor(...e){super(...e),this.title="Sync with system settings",this.icon="sun-color-fg-muted",this.mode="auto"}},R=[M,SwitchTabSize,SwitchTheme,class UpdateSubscription extends MainWindowCommand{isApplicable(){return this.fetchButton() instanceof HTMLButtonElement&&this.fetchButton()?.disabled===!1}isSubscribe(){return this.fetchButton()?.textContent?.trim()==="Subscribe"}fetchButton(){return document.querySelector("[data-thread-subscribe-button]")}run(){this.fetchButton()?.click()}constructor(){super();let e=this.isSubscribe();this.title=`${e?"Subscribe":"Unsubscribe"}`,this.icon=`${e?"bell":"bell-slash"}-color-fg-muted`}}];var O=s(39197);function H(e){e.focus(),e.selectionStart=e.selectionEnd=e.value.length}let EditIssueBody=class EditIssueBody extends MainWindowCommand{issueBody(){return document.querySelector(".js-command-palette-issue-body")}isIssue(){return!!this.issueBody()}isApplicable(){return this.isIssue()}run(){let e=document.createElement("button");e.hidden=!0,e.classList.add("js-comment-edit-button");let t=document.querySelector("div.js-comment");t?.appendChild(e),e.click(),e.remove(),setTimeout(()=>{let e=t?.parentElement?.querySelector("textarea.js-comment-field");e&&H(e)},0)}constructor(...e){super(...e),this.title="Edit issue body",this.icon="pencil-color-fg-muted"}};let EditIssueTitle=class EditIssueTitle extends MainWindowCommand{issueBody(){return document.querySelector(".js-command-palette-issue-body")}isIssue(){return!!this.issueBody()}isApplicable(){return this.fetchButton() instanceof HTMLButtonElement&&this.isIssue()}fetchButton(){return document.querySelector(".js-title-edit-button")}run(){this.fetchButton()?.click(),setTimeout(()=>{let e=document.querySelector("input#issue_title[autofocus]");e&&H(e)},0)}constructor(...e){super(...e),this.title="Edit issue title",this.icon="pencil-color-fg-muted"}};let AddTasklist=class AddTasklist extends MainWindowCommand{issueBody(){return document.querySelector(".js-command-palette-issue-body")}isIssue(){return!!this.issueBody()}isApplicable(){return(0,O.cr)("TASKLIST_BLOCK")&&this.isIssue()}run(){let e=document.createElement("button");e.hidden=!0,e.classList.add("js-comment-edit-button");let t=document.querySelector("div.js-comment");t?.appendChild(e),e.click(),e.remove(),setTimeout(()=>{let e=t?.parentElement?.querySelector("textarea.js-comment-field");if(e){let t=document.createTextNode("```[tasklist]\n- [ ] Create a draft issue or type # to select an issue\n```");""!==e.value&&(t=document.createTextNode("\n\n```[tasklist]\n- [ ] Create a draft issue or type # to select an issue\n```")),H(e),e?.appendChild(t)}},0)}constructor(...e){super(...e),this.title="Add tasklist to issue",this.icon="plus-circle-color-fg-muted"}};let W=class TransferIssue extends MainWindowCommand{isApplicable(){return this.fetchDetails() instanceof HTMLDetailsElement}fetchDetails(){return document.querySelector("details.js-transfer-issue")}run(){let e=this.fetchDetails();if(e){let t=()=>{setTimeout(()=>{e.querySelector("[data-menu-button]")?.focus()},0)};e.querySelector("include-fragment")?.addEventListener("load",t),e.open=!0,t()}}constructor(...e){super(...e),this.title="Transfer issue\u2026",this.icon="arrow-right-color-fg-muted"}},z=class LockIssue extends MainWindowCommand{isApplicable(){return this.fetchDetails() instanceof HTMLDetailsElement}isLock(){return document.querySelector("summary.lock-toggle-link")?.textContent?.trim()==="Lock conversation"}fetchDetails(){return document.querySelector("details.js-lock-issue")}run(){let e=this.fetchDetails();e&&(e.open=!0,setTimeout(()=>{document.querySelector("#unlock-reason")?.focus()},0))}constructor(){super();let e=this.isLock();this.title=`${e?"Lock":"Unlock"} conversation`,this.icon=`${e?"lock":"key"}-color-fg-muted`}},$=class DeleteIssue extends MainWindowCommand{isApplicable(){return this.fetchDetails() instanceof HTMLDetailsElement}fetchDetails(){return document.querySelector("details.js-delete-issue")}run(){let e=this.fetchDetails();e&&(e.open=!0,setTimeout(()=>{e.querySelector('button[type="submit"]')?.focus()},0))}constructor(...e){super(...e),this.title="Delete issue\u2026",this.icon="trash-color-fg-muted"}};let ConvertToDiscussion=class ConvertToDiscussion extends MainWindowCommand{isApplicable(){return this.fetchConvertButton() instanceof HTMLButtonElement}fetchConvertButton(){return document.querySelector("button#dialog-show-convert-to-discussion")}fetchDialog(){return document.querySelector("#convert-to-discussion")}run(){let e=this.fetchConvertButton(),t=this.fetchDialog();if(e&&t){let e=()=>{setTimeout(()=>{t?.querySelector("#convert-to-discussion-category")?.focus()},0)};t.querySelector("include-fragment")?.addEventListener("load",e),t instanceof HTMLDialogElement?t.showModal():t.open=!0,e()}}constructor(...e){super(...e),this.title="Convert issue to discussion\u2026",this.icon="comment-discussion-color-fg-muted"}};let F=[EditIssueTitle,EditIssueBody,AddTasklist,z,W,$,ConvertToDiscussion];var N=s(46903),V=s(23340);let OpenCodespace=class OpenCodespace extends MainWindowCommand{isApplicable(){let e=this.fetchElements();return!!(e.codeModal&&e.codespacesForm&&e.newCodespacesButton&&e.codespacesTab)}run(){let{codeModal:e,codespacesTab:t,newCodespacesButton:s}=this.fetchElements();e&&t&&s&&(e.open=!0,t.click(),s instanceof HTMLButtonElement&&s.click())}fetchElements(){let e=document.querySelector(".js-create-codespaces-form-command"),t=e?.closest("details")||null,s=t?.querySelector('[data-tab="cloud"]')||null,o=e?.querySelector('summary[role="button"], button[type="submit"]')||null;return{codespacesForm:e,codeModal:t,codespacesTab:s,newCodespacesButton:o}}constructor(...e){super(...e),this.title="Open in new codespace",this.icon="codespaces-color-fg-muted",this.priority=11}};var U=s(5554);let K=class EditPullRequestBody extends EditIssueBody{pullRequestBody(){return document.querySelector(".js-command-palette-pull-body")}isPullRequest(){return!!this.pullRequestBody()}isApplicable(){return this.isPullRequest()}constructor(...e){super(...e),this.title="Edit pull request body"}},Z=class EditPullRequestTitle extends EditIssueTitle{pullRequestBody(){return document.querySelector(".js-command-palette-pull-body")}isPullRequest(){return!!this.pullRequestBody()}isApplicable(){return this.fetchButton() instanceof HTMLButtonElement&&this.isPullRequest()}constructor(...e){super(...e),this.title="Edit pull request title"}},G=class UpdateBranch extends MainWindowCommand{isApplicable(){return this.fetchButton() instanceof HTMLButtonElement}fetchButton(){return document.querySelector(".js-update-branch-form button")}run(){let e=this.fetchButton();e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),e.click())}constructor(...e){super(...e),this.title="Update current branch",this.icon="sync-color-fg-muted"}},J=class ConvertToDraft extends MainWindowCommand{isApplicable(){return this.fetchButton() instanceof HTMLButtonElement}fetchButton(){return document.querySelector(".js-convert-to-draft")}run(){let e=this.fetchButton()?.closest("details");e&&(e.open=!0,setTimeout(()=>{e.querySelector(".js-convert-to-draft")?.focus()},0))}constructor(...e){super(...e),this.title="Convert to draft",this.icon="git-pull-request-draft-color-fg-muted"}},X=[class CopyBranchName extends MainWindowCommand{isApplicable(){return this.fetchClipboardCopy() instanceof V.K}fetchClipboardCopy(){return document.querySelector(".js-copy-branch")}async run(e){let t=this.fetchClipboardCopy();if(t instanceof V.K){let s=t.value;try{await (0,U.z)(s),e.displayFlash("success","Branch name copied to clipboard!")}catch{e.displayFlash("error","Unable to copy branch name to clipboard!")}}}constructor(...e){super(...e),this.title="Copy current branch name",this.icon="copy-color-fg-muted"}},Z,K,G,J,OpenCodespace],Q=class CopyPermalink extends MainWindowCommand{isApplicable(){return this.fetchPermalinkContainer() instanceof HTMLAnchorElement}fetchPermalinkContainer(){return document.querySelector(".js-permalink-shortcut")}async run(e){let t=this.fetchPermalinkContainer();if(t){let s=`${t.href}${window.location.hash}`;try{await (0,U.z)(s),e.displayFlash("success","Copied permalink!")}catch{e.displayFlash("error","Failed to copy permalink!")}}}constructor(...e){super(...e),this.title="Copy file permalink",this.icon="copy-color-fg-muted"}},Y=[class CloneCopyHttps extends MainWindowCommand{isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy() instanceof V.K}fetchClipboardCopy(){return document.querySelector(".js-clone-url-http")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("commands-path")}async run(e){let t=this.fetchClipboardCopy();if(t instanceof V.K){let s=t.value;try{await (0,U.z)(s),e.displayFlash("success","Clone URL copied!")}catch{e.displayFlash("error","Clone URL couldn't be copied")}}}constructor(...e){super(...e),this.title="Clone repository: Copy HTTPS",this.icon="copy-color-fg-muted",this.priority=4}},class CloneCopySsh extends MainWindowCommand{isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy() instanceof V.K}fetchClipboardCopy(){return document.querySelector(".js-clone-url-ssh")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("commands-path")}async run(e){let t=this.fetchClipboardCopy();if(t instanceof V.K){let s=t.value;try{await (0,U.z)(s),e.displayFlash("success","Clone URL copied!")}catch{e.displayFlash("error","Clone URL couldn't be copied")}}}constructor(...e){super(...e),this.title="Clone repository: Copy SSH",this.icon="copy-color-fg-muted",this.priority=3}},class CloneCopyCli extends MainWindowCommand{isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy() instanceof V.K}fetchClipboardCopy(){return document.querySelector(".js-clone-url-gh-cli")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("commands-path")}async run(e){let t=this.fetchClipboardCopy();if(t instanceof V.K){let s=t.value;try{await (0,U.z)(s),e.displayFlash("success","Clone URL copied!")}catch{e.displayFlash("error","Clone URL couldn't be copied")}}}constructor(...e){super(...e),this.title="Clone repository: Copy GitHub CLI",this.icon="copy-color-fg-muted",this.priority=2}},Q,OpenCodespace],ee=class MainWindowCommandsProvider extends N.B{enabledFor(e){return">"===e.mode||!!["discussion","issue","pull_request"].includes(e.scope.type)}get hasCommands(){return!0}async fetch(e){return this.items=[...F.map(e=>e.item()),...X.map(e=>e.item()),...Y.map(e=>e.item()),...C.map(e=>e.item()),...R.map(e=>e.item())].filter(t=>t.isApplicable(e)),{results:this.fuzzyFilter(this.items,e)}}get debounce(){return 0}clearCache(){}constructor(...e){super(...e),this.itemsByType={},this.items=[],this.needsFetch=!0}};window.commandPalette&&window.commandPalette.registerProvider("main-window-commands-provider",new ee),window.addEventListener("command-palette-ready",()=>{window.commandPalette?.registerProvider("main-window-commands-provider",new ee)});var et=s(12892);function es(e,t,s,o){var i,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,s,r):i(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r}let CommandPaletteInputElement=class CommandPaletteInputElement extends HTMLElement{static get observedAttributes(){return["input-value","typeahead","scope"]}setup(){this.classList.add("d-flex","flex-items-center","flex-nowrap","py-1","pl-3","pr-2","border-bottom"),this.input=this.querySelector("input.js-input"),this.overlayInput=this.querySelector("input.js-overlay-input"),this.scopeElement=this.querySelector("command-palette-scope"),this.searchIcon=this.querySelector(".js-search-icon"),this.spinner=this.querySelector(".js-spinner"),this.defaultScope=this.scope,this.hasAttribute("autofocus")&&this.input.focus(),0!==this.inputValue.length&&this._dispatchEvent("command-palette-input"),this.setupComplete=!0;let e=new CustomEvent("command-palette-input-ready",{bubbles:!0,cancelable:!0});this.dispatchEvent(e)}connectedCallback(){this.setupComplete||this.setup(),this.inputValue=this.getAttribute("input-value")||"",this.typeahead=this.getAttribute("typeahead")||"",this.placeholder=this.getAttribute("placeholder")||"",this.connected=!0}attributeChangedCallback(e,t,s){this.input&&("typeahead"===e?this.typeahead=s:"input-value"===e&&(this.inputValue=s,this._dispatchEvent("command-palette-input")))}focus(){this.input.focus()}setRemovedTokenAndSelect(e){e&&(this.inputValue=e),this.focus(),this.input.select()}get scope(){return this.scopeElement.scope}set scope(e){this.scopeElement.scope=e,this.clearButton.hidden=!this.hasSomethingToClear()}hasScope(){return this.scopeElement.hasScope()}clearScope(){return this.scopeElement.clearScope()}removeToken(){return this.scopeElement.removeToken()}get placeholder(){return this.input.getAttribute("placeholder")||""}set placeholder(e){this.input.setAttribute("placeholder",e)}get typeaheadPlaceholderText(){return this.typeaheadPlaceholder.textContent||""}set typeaheadPlaceholderText(e){this.typeaheadPlaceholder.textContent=e}get inputValue(){return this.input?.value||""}set inputValue(e){this.input.value=e,this.typeahead=e,this.resetPlaceholder(),this.onInput()}get overlay(){return this.overlayInput.value}set overlay(e){this.overlayInput.value=e}get typeahead(){return this.typeaheadValue}set typeahead(e){if(this.typeaheadValue=this.overlay+e,this.mirror.textContent=this.inputValue,""===e)this.typeaheadText.textContent="";else if(this.placeholder="",this.typeaheadPlaceholderText="",this.valueStartsWithTypeahead){let t=this.inputValue.length-(this.overlay?1:0);this.typeaheadText.textContent=e.substring(t)}else this.typeaheadText.textContent=` \u2013 ${e}`}showModePlaceholder(e=""){this.typeaheadPlaceholderText=e}get valueStartsWithTypeahead(){return this.typeaheadValue.toLowerCase().startsWith(this.inputValue.toLowerCase())}get isCursorAtEnd(){return this.inputValue.length===this.input.selectionStart}set loading(e){this.spinner.hidden=!e,this.searchIcon.hidden=e}resetPlaceholder(){this.inputValue.replace(this.overlay,"")&&this.overlay&&(this.typeaheadPlaceholderText=""),this.placeholder=this.getAttribute("placeholder")||""}onInput(){this.resetPlaceholder(),this.connected&&(this.clearButton.hidden=!this.hasSomethingToClear(),this._dispatchEvent("command-palette-input"))}onClear(e){e instanceof KeyboardEvent&&"Enter"!==e.key||(this.inputValue="",this.input.focus(),this._dispatchEvent("command-palette-cleared"))}onKeydown(e){if(this.isSelectKeystroke(e.key)&&(this._dispatchEvent("command-palette-select"),e.stopImmediatePropagation(),e.preventDefault()),this.hasSomethingToClear()&&(0,et.o)(e)&&"Backspace"===e.key){this.onClear();return}if(0===this.input.selectionStart&&0===this.input.selectionEnd&&"Backspace"===e.key){this._dispatchEvent("command-palette-descope"),e.stopImmediatePropagation(),e.preventDefault();return}}hasSomethingToClear(){return this.scopeElement.hasScope()||this.inputValue.length>0}isSelectKeystroke(e){return"Tab"===e||"ArrowRight"===e&&this.isCursorAtEnd}textSelected(){return this.input.selectionStart!==this.input.selectionEnd}_dispatchEvent(e){let t=new CustomEvent(e,{cancelable:!0,detail:{typeahead:this.typeahead,value:this.inputValue}});return this.dispatchEvent(t)}constructor(...e){super(...e),this.setupComplete=!1,this.connected=!1}};CommandPaletteInputElement.tagName="command-palette-input",es([o.fA],CommandPaletteInputElement.prototype,"typeaheadPlaceholder",void 0),es([o.fA],CommandPaletteInputElement.prototype,"typeaheadText",void 0),es([o.fA],CommandPaletteInputElement.prototype,"mirror",void 0),es([o.fA],CommandPaletteInputElement.prototype,"clearButton",void 0),CommandPaletteInputElement=es([o.Ih],CommandPaletteInputElement);var eo=s(69009),ei=s(32496),en=s(82780),er=s(36071),ea=s(49437);function ec(){return document.querySelector(et.Z.tagName)}function el(e,t){let s=(0,eo.EL)(t);return!!s&&!!e&&e.split(",").some(e=>s===e)}window.customElements.get(et.Z.tagName)||window.customElements.define(et.Z.tagName,et.Z),document.addEventListener("keydown",function(e){if(!e.code)return;let t=ec();if(!t)return;let s=!!document.querySelector("#memex-root"),o=el(t.platformActivationHotkey,e),i=el(t.platformSecondaryActivationHotkey,e),n=el(t.platformCommandModeHotkey,e),r=!(function(e){let t=e.target;return!!t&&null!==t.closest(".js-previewable-comment-form")}(e)||function(e){let t=e.target;if(!t)return!1;let s=t.closest(".js-code-editor");if(!s)return!1;let o=(0,en.P)(s);if(!o)return!1;let i=o.editor;if(!i)return!1;let n=i.getMode().name;return"gfm"===n||"markdown"===n}(e))&&!s&&(o||n),a=!s&&(i||n),c=t.hasAttribute("memex-hotkey-enabled")&&s&&(o||i||n);(r||a||c)&&(function(e){for(let t of document.querySelectorAll(".js-command-palette-dialog")){let s=t.querySelector(CommandPaletteInputElement.tagName);if(!s)return;if(t.open)t.open=!1;else{(function(e,t){let s=e.inputValue.startsWith(">");t&&!s?e.inputValue=`>${e.inputValue}`:t||!s||(e.inputValue=e.inputValue.substring(1))})(s,e);let o=t.querySelector(et.Z.tagName);o&&(o.previouslyActiveElement=document.activeElement),t.open=!0}}}(n),e.preventDefault(),e.stopPropagation())}),(0,er.N7)(".js-activate-command-palette",e=>{e.addEventListener("click",()=>{document.querySelector(".js-command-palette-dialog")?.setAttribute("open","true")})}),(0,er.N7)(".js-command-palette-dialog",e=>{if(!e)return;let t=window.performance.now(),s=ec();s&&(e.addEventListener("toggle",()=>{e.open?s.activate():s.deactivate()}),s.addEventListener("command-palette-activated",e=>{e instanceof CustomEvent&&(e.detail.previouslyActivated||(0,ea.b)({distributionKey:"COMMAND_PALETTE_FIRST_OPEN",distributionValue:window.performance.now()-t}))}))}),(0,er.N7)(".js-socket-channel.js-updatable-content",{subscribe:e=>(0,ei.RB)(e,"socket:message",()=>{let e=ec();e&&e.clearCommands(!1)})})},82780:(e,t,s)=>{s.d(t,{P:()=>n,g:()=>r});var o=s(59753);let i=new WeakMap;function n(e){return i.get(e)}async function r(e){var t;return i.get(e)||a(await (t="codeEditor:ready",new Promise(s=>{e.addEventListener(t,s,{once:!0})})))}function a(e){if(!(e instanceof CustomEvent))throw Error("assert: event is not a CustomEvent");let t=e.detail.editor;if(!e.target)throw Error("assert: event.target is null");return i.set(e.target,t),t}(0,o.on)("codeEditor:ready",".js-code-editor",a)},43681:(e,t,s)=>{s.d(t,{Fg:()=>u,I3:()=>r,h5:()=>c,on:()=>l,yn:()=>d});var o=s(85243),i=s(65906);function n(){(0,i.d8)("preferred_color_mode",r())}function r(){return a("dark")?"dark":a("light")?"light":void 0}function a(e){return window.matchMedia&&window.matchMedia(`(prefers-color-scheme: ${e})`).matches}function c(e){let t=document.querySelector("html[data-color-mode]");t&&t.setAttribute("data-color-mode",e)}function l(e,t){let s=document.querySelector("html[data-color-mode]");s&&s.setAttribute(`data-${t}-theme`,e)}function d(e){let t=document.querySelector("html[data-color-mode]");if(t)return t.getAttribute(`data-${e}-theme`)}function u(e="light"){let t=function(){let e=document.querySelector("html[data-color-mode]");if(e)return e.getAttribute("data-color-mode")}();return("auto"===t?r():t)??e}(async()=>{if(await o.x,n(),window.matchMedia){let e=window.matchMedia("(prefers-color-scheme: dark)");e?.addEventListener?e.addEventListener("change",n):e.addListener(n)}})()},65906:(e,t,s)=>{function o(e){return i(e)[0]}function i(e){let t=[];for(let s of function(){try{return document.cookie.split(";")}catch{return[]}}()){let[o,i]=s.trim().split("=");e===o&&void 0!==i&&t.push({key:o,value:i})}return t}function n(e,t,s=null,o=!1,i="lax"){let n=document.domain;if(null==n)throw Error("Unable to get document domain");n.endsWith(".github.com")&&(n="github.com");let r="https:"===location.protocol?"; secure":"",a=s?`; expires=${s}`:"";!1===o&&(n=`.${n}`);try{document.cookie=`${e}=${t}; path=/; domain=${n}${a}${r}; samesite=${i}`}catch{}}function r(e,t=!1){let s=document.domain;if(null==s)throw Error("Unable to get document domain");s.endsWith(".github.com")&&(s="github.com");let o=new Date(new Date().getTime()-1).toUTCString(),i="https:"===location.protocol?"; secure":"",n=`; expires=${o}`;!1===t&&(s=`.${s}`);try{document.cookie=`${e}=''; path=/; domain=${s}${n}${i}`}catch{}}s.d(t,{$1:()=>i,d8:()=>n,ej:()=>o,kT:()=>r})},69009:(e,t,s)=>{s.d(t,{DV:()=>n,D_:()=>o.D_,EL:()=>o.EL,N9:()=>o.N9,Tz:()=>o.Tz,k0:()=>o.k0});var o=s(11793);let i=/(?:^|,)((?:[^,]|,(?=\+| |$))*(?:,(?=,))?)/g;function n(e){return Array.from(e.matchAll(i)).map(([,e])=>e)}},32496:(e,t,s)=>{s.d(t,{RB:()=>o,qC:()=>i,w0:()=>Subscription});let Subscription=class Subscription{constructor(e){this.closed=!1,this.unsubscribe=()=>{e(),this.closed=!0}}};function o(e,t,s,o={capture:!1}){return e.addEventListener(t,s,o),new Subscription(()=>{e.removeEventListener(t,s,o)})}function i(...e){return new Subscription(()=>{for(let t of e)t.unsubscribe()})}}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_allex_crc32_lib_crc32_esm_js-node_modules_github_mini-throttle_dist_deco-a9eeba","vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_clipboard-copy-element_-782ca5","vendors-node_modules_delegated-events_dist_index_js-node_modules_github_hotkey_dist_index_js","app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-48ad9d"],()=>t(73219)),e.O()}]);
//# sourceMappingURL=command-palette-f66d47f2614d.js.map
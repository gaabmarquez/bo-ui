(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7xCj":function(t,e,n){"use strict";n.r(e),n.d(e,"CanalSmsModule",(function(){return V}));var c=n("Nv++"),i=n("SVse"),o=n("wHSu"),r=n("XNiG"),a=n("Kj3r"),s=n("8Y7J"),l=n("AytR"),d=n("IheW");let g=(()=>{class t{constructor(t){this.http=t}getAllTransactions(t){return this.http.get(`${l.a.baseUrl}/canalsms/segmentedTransactions?${t}`)}downloadReport(t){return this.http.get(`${l.a.baseUrl}/canalsms/segmentedTransactions/export?${t}`,{responseType:"blob"})}}return t.\u0275fac=function(e){return new(e||t)(s.kc(d.c))},t.\u0275prov=s.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=n("AehT"),h=n("s7LF"),f=n("G0yt"),u=n("C4D8");function p(t,e){1&t&&(s.cc(0,"div",36),s.Xb(1,"div",37),s.bc())}function m(t,e){if(1&t){const t=s.dc();s.cc(0,"fa-icon",38),s.oc("click",(function(){return s.Kc(t),s.rc().clearFilter("transactionId")})),s.bc()}if(2&t){const t=s.rc();s.zc("icon",t.faTimesCircle)}}function M(t,e){if(1&t){const t=s.dc();s.cc(0,"fa-icon",38),s.oc("click",(function(){return s.Kc(t),s.rc().clearFilter("message")})),s.bc()}if(2&t){const t=s.rc();s.zc("icon",t.faTimesCircle)}}function C(t,e){if(1&t){const t=s.dc();s.cc(0,"fa-icon",38),s.oc("click",(function(){return s.Kc(t),s.rc().clearFilter("mobile")})),s.bc()}if(2&t){const t=s.rc();s.zc("icon",t.faTimesCircle)}}function O(t,e){if(1&t){const t=s.dc();s.cc(0,"fa-icon",38),s.oc("click",(function(){return s.Kc(t),s.rc().clearFilter("componentName")})),s.bc()}if(2&t){const t=s.rc();s.zc("icon",t.faTimesCircle)}}function v(t,e){if(1&t){const t=s.dc();s.cc(0,"fa-icon",38),s.oc("click",(function(){return s.Kc(t),s.rc().clearFilter("error")})),s.bc()}if(2&t){const t=s.rc();s.zc("icon",t.faTimesCircle)}}function T(t,e){if(1&t){const t=s.dc();s.cc(0,"fa-icon",38),s.oc("click",(function(){return s.Kc(t),s.rc().clearFilter("associatedTransactionId")})),s.bc()}if(2&t){const t=s.rc();s.zc("icon",t.faTimesCircle)}}function F(t,e){if(1&t&&(s.cc(0,"option",39),s.Uc(1),s.bc()),2&t){const t=e.$implicit;s.zc("ngValue",t),s.Fb(1),s.Wc(" ",t," por p\xe1gina")}}function _(t,e){if(1&t&&(s.cc(0,"tr",43),s.cc(1,"td"),s.Uc(2),s.bc(),s.cc(3,"td"),s.Uc(4),s.bc(),s.cc(5,"td"),s.Uc(6),s.bc(),s.cc(7,"td"),s.Uc(8),s.bc(),s.cc(9,"td"),s.Uc(10),s.bc(),s.cc(11,"td"),s.Uc(12),s.bc(),s.cc(13,"td"),s.Uc(14),s.bc(),s.cc(15,"td"),s.Uc(16),s.bc(),s.bc()),2&t){const t=e.$implicit;s.Fb(2),s.Vc(t.transactionId),s.Fb(2),s.Vc(t.message),s.Fb(2),s.Vc(t.mobile),s.Fb(2),s.Wc("",t.startTime," "),s.Fb(2),s.Wc("",t.endTime," "),s.Fb(2),s.Wc("",t.componentName," "),s.Fb(2),s.Wc("",t.error," "),s.Fb(2),s.Wc("",t.associatedTransactionId," ")}}function P(t,e){if(1&t){const t=s.dc();s.cc(0,"table",40),s.cc(1,"thead"),s.cc(2,"tr"),s.cc(3,"th"),s.Uc(4," ID Transacci\xf3n "),s.cc(5,"bo-sort-column",41),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("transactionId",e)})),s.bc(),s.bc(),s.cc(6,"th"),s.Uc(7," Mensaje "),s.cc(8,"bo-sort-column",41),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("message",e)})),s.bc(),s.bc(),s.cc(9,"th"),s.Uc(10," M\xf3vil "),s.cc(11,"bo-sort-column",41),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("mobile",e)})),s.bc(),s.bc(),s.cc(12,"th"),s.Uc(13," Fecha inicio "),s.cc(14,"bo-sort-column",41),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("startTime",e)})),s.bc(),s.bc(),s.cc(15,"th"),s.Uc(16," Fecha fin "),s.cc(17,"bo-sort-column",41),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("endTime",e)})),s.bc(),s.bc(),s.cc(18,"th"),s.Uc(19," Componente "),s.cc(20,"bo-sort-column",41),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("componentName",e)})),s.bc(),s.bc(),s.cc(21,"th"),s.Uc(22," Error "),s.cc(23,"bo-sort-column",41),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("error",e)})),s.bc(),s.bc(),s.cc(24,"th"),s.Uc(25," Id asociado "),s.cc(26,"bo-sort-column",41),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("associatedTransactionId",e)})),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(27,"tbody"),s.Sc(28,_,17,8,"tr",42),s.bc(),s.bc()}if(2&t){const t=s.rc();s.Fb(5),s.zc("sortOrder",t.sorting.transactionId),s.Fb(3),s.zc("sortOrder",t.sorting.message),s.Fb(3),s.zc("sortOrder",t.sorting.mobile),s.Fb(3),s.zc("sortOrder",t.sorting.startTime),s.Fb(3),s.zc("sortOrder",t.sorting.endTime),s.Fb(3),s.zc("sortOrder",t.sorting.componentName),s.Fb(3),s.zc("sortOrder",t.sorting.error),s.Fb(3),s.zc("sortOrder",t.sorting.associatedTransactionId),s.Fb(2),s.zc("ngForOf",t.transactions)}}function z(t,e){1&t&&(s.cc(0,"div",44),s.cc(1,"ngb-alert",45),s.Uc(2," No existen proveedores que coincidan con la b\xfasqueda "),s.bc(),s.bc())}let S=(()=>{class t{constructor(t,e){this.transactionsService=t,this.notifService=e,this.page=1,this.collectionSize=0,this.isLoading=!1,this.itemsPerPage=[10,20,30,40,50],this.pageSize=this.itemsPerPage[2],this.filters={transactionId:void 0,mobile:void 0,componentName:void 0,message:void 0,error:void 0,associatedTransactionId:void 0},this.sorts="",this.sorting={transactionId:void 0,message:void 0,mobile:void 0,startTime:void 0,endTime:void 0,componentName:void 0,error:void 0,associatedTransactionId:void 0},this.statuses=["OK","ERROR","PROCESSING"],this.START_TIME="00:00",this.faFileDownload=o.d,this.faTimesCircle=o.n,this.keyUpFilter=new r.a,this.filterSubscription=this.keyUpFilter.pipe(Object(a.a)(500)).subscribe(t=>{this.page=1,this.getAllTransactions()})}ngOnInit(){const t=new Date;this.today=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,this.getAllTransactions(),this.fromDateTime=this.START_TIME,this.fromDateEndTime=this.START_TIME,this.toDateTime=this.START_TIME,this.toDateEndTime=this.START_TIME}getAllTransactions(){this.isLoading=!0;let t=this.getQueryParams();this.transactionsService.getAllTransactions(t).subscribe(t=>{this.transactions=t.segmentedTransactions,this.collectionSize=this.transactions.length>=this.pageSize?this.page*this.pageSize+10:this.page*this.pageSize,this.isLoading=!1},t=>{this.transactions=[],this.collectionSize=0,this.isLoading=!1})}getQueryParams(t=!1){const e=(this.page-1)*this.pageSize,n=(this.page-1)*this.pageSize+this.pageSize,c=this.getDateFilter(),i=this.concatFilter();let o=t?"":`from=${e}&to=${n}`;return i.length>0&&(o+="&"+i),this.sorts.length>0&&(o+="&"+this.sorts),c.length>0&&(o+="&"+c),o}getDateFilter(){let t="";return this.fromDate&&(t+="fromStartTime="+this.fromDate.replaceAll("-","")+this.fromDateTime.replace(":","")),this.fromDateEnd&&(t+=(t.length>0?"&":"")+"toStartTime="+this.fromDateEnd.replaceAll("-","")+this.fromDateEndTime.replace(":","")),this.toDate&&(t+=(t.length>0?"&":"")+"fromEndTime="+this.toDate.replaceAll("-","")+this.toDateTime.replace(":","")),this.toDateEnd&&(t+=(t.length>0?"&":"")+"toEndTime="+this.toDateEnd.replaceAll("-","")+this.toDateEndTime.replace(":","")),t}concatFilter(){let t="";for(const e in this.filters)this.filters[e]&&this.filters[e].length>0&&(t+=(t.length>0?"&":"")+`${e}=${this.filters[e]}`);return t}refreshTransactions(t){this.page=t,this.getAllTransactions()}onKeyUpFilter(t){this.keyUpFilter.next(t)}clearFilter(t){for(const e in this.filters)if(e==t){this.filters[e]=void 0;break}this.page=1,this.getAllTransactions()}changeOrder(t,e){this.sorting[t]=e;for(const n in this.sorting)n!=t&&(this.sorting[n]=void 0);e&&(this.sorts=`orderBy=${t}&desc=${"desc"==e}`),this.getAllTransactions()}onSearchDateFilters(){this.getAllTransactions()}onClearFilters(){this.resetDateFilters(),this.resetFilters(),this.getAllTransactions()}resetFilters(){this.filters={transactionId:void 0,mobile:void 0,componentName:void 0,message:void 0,error:void 0,associatedTransactionId:void 0}}resetDateFilters(){this.fromDate=void 0,this.fromDateTime=this.START_TIME,this.fromDateEnd=void 0,this.fromDateEndTime=this.START_TIME,this.toDate=void 0,this.toDateTime=this.START_TIME,this.toDateEnd=void 0,this.toDateEndTime=this.START_TIME}ngOnDestroy(){this.filterSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Wb(g),s.Wb(b.a))},t.\u0275cmp=s.Qb({type:t,selectors:[["bo-transactions"]],decls:63,vars:30,consts:[[1,"container-fluid","ml-3"],[1,"title-container"],[1,"title"],["class","spinner-container",4,"ngIf"],[1,"transactions-container"],[1,"date-filters-container"],[1,"date-filters"],[1,"start-filter"],[1,"compose-date"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],["type","time",3,"ngModel","ngModelChange"],[1,"end-filter"],[1,"d-flex","justify-content-end"],[1,"btn","btn-primary","btn-sm","p-2","mt-2","mr-2",3,"click"],[1,"btn","btn-secondary","btn-sm","p-2","mt-2",3,"click"],[1,"mb-0","mt-4","ml-0","w-100"],[1,"d-flex","justify-content-between"],[1,"filter"],["type","text","placeholder","B\xfasqueda por ID de transacci\xf3n",1,"form-control",3,"ngModel","ngModelChange","keyup"],["class","clear-icon",3,"icon","click",4,"ngIf"],["type","text","placeholder","Mensaje",1,"form-control",3,"ngModel","ngModelChange","keyup"],["type","text","placeholder","Movil",1,"form-control",3,"ngModel","ngModelChange","keyup"],["type","text","placeholder","Componente",1,"form-control",3,"ngModel","ngModelChange","keyup"],["type","text","placeholder","Error",1,"form-control",3,"ngModel","ngModelChange","keyup"],["type","text","placeholder","Id Asociado",1,"form-control",3,"ngModel","ngModelChange","keyup"],[1,"mb-0","mt-4","d-flex","justify-content-end"],[1,"custom-select",2,"width","auto",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"mb-0","mt-2","ml-0","w-100"],[1,"row"],[1,"col-sm-12"],[1,"table-responsive"],["class","table table-bordered table-hover",4,"ngIf"],[1,"d-flex","justify-content-center","p-2"],[3,"collectionSize","page","pageSize","maxSize","boundaryLinks","pageChange"],["class","mt-4 w-100",4,"ngIf"],[1,"spinner-container"],[1,"spinner"],[1,"clear-icon",3,"icon","click"],[3,"ngValue"],[1,"table","table-bordered","table-hover"],[3,"sortOrder","newOrder"],["class","provider-row",4,"ngFor","ngForOf"],[1,"provider-row"],[1,"mt-4","w-100"],["type","info",1,"no-result"]],template:function(t,e){1&t&&(s.cc(0,"div",0),s.cc(1,"div",1),s.cc(2,"h1",2),s.Uc(3,"Canal SMS Segmentos de transacciones "),s.bc(),s.bc(),s.Sc(4,p,2,0,"div",3),s.cc(5,"div",4),s.cc(6,"div",5),s.cc(7,"div",6),s.cc(8,"div",7),s.cc(9,"label"),s.Uc(10,"Rango fecha inicio"),s.bc(),s.cc(11,"div",8),s.cc(12,"input",9),s.oc("ngModelChange",(function(t){return e.fromDate=t})),s.bc(),s.cc(13,"input",10),s.oc("ngModelChange",(function(t){return e.fromDateTime=t})),s.bc(),s.bc(),s.cc(14,"div",8),s.cc(15,"input",9),s.oc("ngModelChange",(function(t){return e.fromDateEnd=t})),s.bc(),s.cc(16,"input",10),s.oc("ngModelChange",(function(t){return e.fromDateEndTime=t})),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(17,"div",6),s.cc(18,"div",11),s.cc(19,"label"),s.Uc(20,"Rango fecha fin"),s.bc(),s.cc(21,"div",8),s.cc(22,"input",9),s.oc("ngModelChange",(function(t){return e.toDate=t})),s.bc(),s.cc(23,"input",10),s.oc("ngModelChange",(function(t){return e.toDateTime=t})),s.bc(),s.bc(),s.cc(24,"div",8),s.cc(25,"input",9),s.oc("ngModelChange",(function(t){return e.toDateEnd=t})),s.bc(),s.cc(26,"input",10),s.oc("ngModelChange",(function(t){return e.toDateEndTime=t})),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(27,"div",12),s.cc(28,"button",13),s.oc("click",(function(){return e.onSearchDateFilters()})),s.Uc(29," Aplicar filtro de fechas "),s.bc(),s.cc(30,"button",14),s.oc("click",(function(){return e.onClearFilters()})),s.Uc(31," Limpiar filtros "),s.bc(),s.bc(),s.cc(32,"div",15),s.cc(33,"div",16),s.cc(34,"div",17),s.cc(35,"input",18),s.oc("ngModelChange",(function(t){return e.filters.transactionId=t}))("keyup",(function(t){return e.onKeyUpFilter(t.target.value)})),s.bc(),s.Sc(36,m,1,1,"fa-icon",19),s.bc(),s.cc(37,"div",17),s.cc(38,"input",20),s.oc("ngModelChange",(function(t){return e.filters.message=t}))("keyup",(function(t){return e.onKeyUpFilter(t.target.value)})),s.bc(),s.Sc(39,M,1,1,"fa-icon",19),s.bc(),s.cc(40,"div",17),s.cc(41,"input",21),s.oc("ngModelChange",(function(t){return e.filters.mobile=t}))("keyup",(function(t){return e.onKeyUpFilter(t.target.value)})),s.bc(),s.Sc(42,C,1,1,"fa-icon",19),s.bc(),s.cc(43,"div",17),s.cc(44,"input",22),s.oc("ngModelChange",(function(t){return e.filters.componentName=t}))("keyup",(function(t){return e.onKeyUpFilter(t.target.value)})),s.bc(),s.Sc(45,O,1,1,"fa-icon",19),s.bc(),s.cc(46,"div",17),s.cc(47,"input",23),s.oc("ngModelChange",(function(t){return e.filters.error=t}))("keyup",(function(t){return e.onKeyUpFilter(t.target.value)})),s.bc(),s.Sc(48,v,1,1,"fa-icon",19),s.bc(),s.cc(49,"div",17),s.cc(50,"input",24),s.oc("ngModelChange",(function(t){return e.filters.associatedTransactionId=t}))("keyup",(function(t){return e.onKeyUpFilter(t.target.value)})),s.bc(),s.Sc(51,T,1,1,"fa-icon",19),s.bc(),s.bc(),s.bc(),s.cc(52,"div",25),s.cc(53,"select",26),s.oc("ngModelChange",(function(t){return e.pageSize=t}))("ngModelChange",(function(){return e.refreshTransactions(1)})),s.Sc(54,F,2,2,"option",27),s.bc(),s.bc(),s.cc(55,"div",28),s.cc(56,"div",29),s.cc(57,"div",30),s.cc(58,"div",31),s.Sc(59,P,29,9,"table",32),s.cc(60,"div",33),s.cc(61,"ngb-pagination",34),s.oc("pageChange",(function(t){return e.page=t}))("pageChange",(function(){return e.refreshTransactions(e.page)})),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.Sc(62,z,3,0,"div",35),s.bc(),s.bc()),2&t&&(s.Fb(4),s.zc("ngIf",e.isLoading),s.Fb(8),s.zc("ngModel",e.fromDate),s.Fb(1),s.zc("ngModel",e.fromDateTime),s.Fb(2),s.zc("ngModel",e.fromDateEnd),s.Fb(1),s.zc("ngModel",e.fromDateEndTime),s.Fb(6),s.zc("ngModel",e.toDate),s.Fb(1),s.zc("ngModel",e.toDateTime),s.Fb(2),s.zc("ngModel",e.toDateEnd),s.Fb(1),s.zc("ngModel",e.toDateEndTime),s.Fb(9),s.zc("ngModel",e.filters.transactionId),s.Fb(1),s.zc("ngIf",e.filters.transactionId),s.Fb(2),s.zc("ngModel",e.filters.message),s.Fb(1),s.zc("ngIf",e.filters.message),s.Fb(2),s.zc("ngModel",e.filters.mobile),s.Fb(1),s.zc("ngIf",e.filters.mobile),s.Fb(2),s.zc("ngModel",e.filters.componentName),s.Fb(1),s.zc("ngIf",e.filters.componentName),s.Fb(2),s.zc("ngModel",e.filters.error),s.Fb(1),s.zc("ngIf",e.filters.error),s.Fb(2),s.zc("ngModel",e.filters.associatedTransactionId),s.Fb(1),s.zc("ngIf",e.filters.associatedTransactionId),s.Fb(2),s.zc("ngModel",e.pageSize),s.Fb(1),s.zc("ngForOf",e.itemsPerPage),s.Fb(5),s.zc("ngIf",!e.isLoading&&(null==e.transactions?null:e.transactions.length)>0),s.Fb(2),s.zc("collectionSize",e.collectionSize)("page",e.page)("pageSize",e.pageSize)("maxSize",3)("boundaryLinks",!0),s.Fb(1),s.zc("ngIf",0==(null==e.transactions?null:e.transactions.length)&&!e.isLoading))},directives:[i.n,h.b,h.n,h.p,h.t,i.m,f.g,c.a,h.q,h.v,u.a,f.a],styles:["input[_ngcontent-%COMP%], label[_ngcontent-%COMP%], p[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-size:14px}h1[_ngcontent-%COMP%]{position:relative;display:inline-block}table[_ngcontent-%COMP%]{text-align:center}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:14px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:middle}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:13px;padding:12px 8px;max-width:150px;word-break:break-word}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(9), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(10), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(11){min-width:90px;max-width:120px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(7){word-break:normal}.filter[_ngcontent-%COMP%]{width:15%;position:relative}.filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:inline-block}.filter[_ngcontent-%COMP%]   .clear-icon[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:5px;right:20px}.spinner-container[_ngcontent-%COMP%]{top:600px}.action-icon[_ngcontent-%COMP%]{cursor:pointer;margin-right:10px;margin-left:5px;font-size:14px}.action-icon.edit[_ngcontent-%COMP%]:hover{color:#1890ff}.action-icon.delete[_ngcontent-%COMP%]:hover{color:#dc3545}@media (max-width:1440px){.filter[_ngcontent-%COMP%]{width:18%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:.75rem .5rem!important}}.download[_ngcontent-%COMP%]{font-size:1.5rem;margin-left:20px;position:absolute;top:12px;cursor:pointer}.download[_ngcontent-%COMP%]:hover{color:#1890ff}.date-filters-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.date-filters[_ngcontent-%COMP%]{border-radius:5px;padding:5px 0;width:40%}.date-filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700}.date-filters[_ngcontent-%COMP%]   .end-filter[_ngcontent-%COMP%], .date-filters[_ngcontent-%COMP%]   .start-filter[_ngcontent-%COMP%]{display:flex;flex-direction:column}.date-filters[_ngcontent-%COMP%]   .end-filter[_ngcontent-%COMP%]   .compose-date[_ngcontent-%COMP%]{justify-content:flex-end}.date-filters[_ngcontent-%COMP%]   .compose-date[_ngcontent-%COMP%]{display:flex;margin:10px 0}.date-filters[_ngcontent-%COMP%]   .compose-date[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(odd){margin-right:10px}  .no-result{margin-left:-15px;margin-top:20px}  .no-result button{display:none}"]}),t})(),y=(()=>{class t{constructor(t){this.http=t}getAllTransactions(t){return this.http.get(`${l.a.baseUrl}/canalsms/transactions?${t}`)}getTransactionById(t){return this.http.get(`${l.a.baseUrl}/canalsms/transactions/${t}`)}downloadReport(t){return this.http.get(`${l.a.baseUrl}/canalsms/transactions/export?${t}`,{responseType:"blob"})}}return t.\u0275fac=function(e){return new(e||t)(s.kc(d.c))},t.\u0275prov=s.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function D(t,e){1&t&&(s.cc(0,"div",37),s.Xb(1,"div",38),s.bc())}function x(t,e){if(1&t){const t=s.dc();s.cc(0,"fa-icon",39),s.oc("click",(function(){return s.Kc(t),s.rc().clearFilter("transactionId")})),s.bc()}if(2&t){const t=s.rc();s.zc("icon",t.faTimesCircle)}}function w(t,e){if(1&t){const t=s.dc();s.cc(0,"fa-icon",39),s.oc("click",(function(){return s.Kc(t),s.rc().clearFilter("mobile")})),s.bc()}if(2&t){const t=s.rc();s.zc("icon",t.faTimesCircle)}}function I(t,e){if(1&t){const t=s.dc();s.cc(0,"fa-icon",39),s.oc("click",(function(){return s.Kc(t),s.rc().clearFilter("serviceName")})),s.bc()}if(2&t){const t=s.rc();s.zc("icon",t.faTimesCircle)}}function E(t,e){if(1&t&&(s.cc(0,"option"),s.Uc(1),s.bc()),2&t){const t=e.$implicit;s.Fb(1),s.Wc(" ",t," ")}}function U(t,e){if(1&t&&(s.cc(0,"option",40),s.Uc(1),s.bc()),2&t){const t=e.$implicit;s.zc("ngValue",t),s.Fb(1),s.Wc(" ",t," por p\xe1gina")}}function k(t,e){if(1&t&&(s.cc(0,"tr",44),s.cc(1,"td"),s.Uc(2),s.bc(),s.cc(3,"td"),s.Uc(4),s.bc(),s.cc(5,"td"),s.Uc(6),s.bc(),s.cc(7,"td"),s.Uc(8),s.bc(),s.cc(9,"td"),s.Uc(10),s.bc(),s.cc(11,"td"),s.Uc(12),s.bc(),s.cc(13,"td"),s.Uc(14),s.bc(),s.cc(15,"td"),s.Uc(16),s.bc(),s.bc()),2&t){const t=e.$implicit;s.Fb(2),s.Vc(t.transactionId),s.Fb(2),s.Vc(t.message),s.Fb(2),s.Vc(t.mobile),s.Fb(2),s.Wc("",t.startTime," "),s.Fb(2),s.Wc("",t.endTime," "),s.Fb(2),s.Wc("",t.serviceName," "),s.Fb(2),s.Wc("",t.status," "),s.Fb(2),s.Wc("",t.description," ")}}function A(t,e){if(1&t){const t=s.dc();s.cc(0,"table",41),s.cc(1,"thead"),s.cc(2,"tr"),s.cc(3,"th"),s.Uc(4," ID Transacci\xf3n "),s.cc(5,"bo-sort-column",42),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("transactionId",e)})),s.bc(),s.bc(),s.cc(6,"th"),s.Uc(7," Mensaje "),s.cc(8,"bo-sort-column",42),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("message",e)})),s.bc(),s.bc(),s.cc(9,"th"),s.Uc(10," M\xf3vil "),s.cc(11,"bo-sort-column",42),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("mobile",e)})),s.bc(),s.bc(),s.cc(12,"th"),s.Uc(13," Fecha inicio "),s.cc(14,"bo-sort-column",42),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("startTime",e)})),s.bc(),s.bc(),s.cc(15,"th"),s.Uc(16," Fecha fin "),s.cc(17,"bo-sort-column",42),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("endTime",e)})),s.bc(),s.bc(),s.cc(18,"th"),s.Uc(19," Servicio "),s.cc(20,"bo-sort-column",42),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("serviceName",e)})),s.bc(),s.bc(),s.cc(21,"th"),s.Uc(22," Estado "),s.cc(23,"bo-sort-column",42),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("status",e)})),s.bc(),s.bc(),s.cc(24,"th"),s.Uc(25," Descripci\xf3n "),s.cc(26,"bo-sort-column",42),s.oc("newOrder",(function(e){return s.Kc(t),s.rc().changeOrder("description",e)})),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(27,"tbody"),s.Sc(28,k,17,8,"tr",43),s.bc(),s.bc()}if(2&t){const t=s.rc();s.Fb(5),s.zc("sortOrder",t.sorting.transactionId),s.Fb(3),s.zc("sortOrder",t.sorting.message),s.Fb(3),s.zc("sortOrder",t.sorting.mobile),s.Fb(3),s.zc("sortOrder",t.sorting.startTime),s.Fb(3),s.zc("sortOrder",t.sorting.endTime),s.Fb(3),s.zc("sortOrder",t.sorting.serviceName),s.Fb(3),s.zc("sortOrder",t.sorting.status),s.Fb(3),s.zc("sortOrder",t.sorting.description),s.Fb(2),s.zc("ngForOf",t.transactions)}}function K(t,e){1&t&&(s.cc(0,"div",45),s.cc(1,"ngb-alert",46),s.Uc(2," No existen proveedores que coincidan con la b\xfasqueda "),s.bc(),s.bc())}let R=(()=>{class t{constructor(t,e){this.transactionsService=t,this.notifService=e,this.page=1,this.collectionSize=0,this.isLoading=!1,this.itemsPerPage=[10,20,30,40,50],this.pageSize=this.itemsPerPage[2],this.filters={serviceName:void 0,mobile:void 0,status:"",transactionId:void 0},this.sorts="",this.sorting={transactionId:void 0,status:void 0,startTime:void 0,endTime:void 0,modifiedTime:void 0,mobile:void 0,serviceName:void 0,message:void 0,description:void 0},this.statuses=["OK","ERROR","PROCESSING"],this.START_TIME="00:00",this.faFileDownload=o.d,this.faTimesCircle=o.n,this.keyUpFilter=new r.a,this.filterSubscription=this.keyUpFilter.pipe(Object(a.a)(500)).subscribe(t=>{this.page=1,this.getAllTransactions()})}ngOnInit(){const t=new Date;this.today=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,this.getAllTransactions(),this.fromDateTime=this.START_TIME,this.fromDateEndTime=this.START_TIME,this.toDateTime=this.START_TIME,this.toDateEndTime=this.START_TIME}getAllTransactions(){if(this.isLoading=!0,this.filters.transactionId&&this.filters.transactionId.length>0)this.transactionsService.getTransactionById(this.filters.transactionId).subscribe(t=>{this.transactions=[t],this.collectionSize=1,this.isLoading=!1},t=>{404!=t.status&&this.notifService.unexpectedErrrorEmitted().next(),this.transactions=[],this.collectionSize=0,this.isLoading=!1});else{let t=this.getQueryParams();this.transactionsService.getAllTransactions(t).subscribe(t=>{this.transactions=t.transactions,this.collectionSize=this.transactions.length>=this.pageSize?this.page*this.pageSize+10:this.page*this.pageSize,this.isLoading=!1},t=>{this.notifService.unexpectedErrrorEmitted().next()})}}getQueryParams(t=!1){const e=(this.page-1)*this.pageSize,n=(this.page-1)*this.pageSize+this.pageSize,c=this.getDateFilter(),i=this.concatFilter();let o=t?"":`from=${e}&to=${n}`;return i.length>0&&(o+="&"+i),this.sorts.length>0&&(o+="&"+this.sorts),c.length>0&&(o+="&"+c),o}getDateFilter(){let t="";return this.fromDate&&(t+="fromStartTime="+this.fromDate.replaceAll("-","")+this.fromDateTime.replace(":","")),this.fromDateEnd&&(t+=(t.length>0?"&":"")+"toStartTime="+this.fromDateEnd.replaceAll("- ","")+this.fromDateEndTime.replace(":","")),this.toDate&&(t+=(t.length>0?"&":"")+"fromEndTime="+this.toDate.replaceAll("-","")+this.toDateTime.replace(":","")),this.toDateEnd&&(t+=(t.length>0?"&":"")+"toEndTime="+this.toDateEnd.replaceAll("-","")+this.toDateEndTime.replace(":","")),t}concatFilter(){let t="";for(const e in this.filters)this.filters[e]&&this.filters[e].length>0&&(t+=(t.length>0?"&":"")+`${e}=${this.filters[e]}`);return t}refreshTransactions(t){this.page=t,this.getAllTransactions()}onKeyUpFilter(t){this.keyUpFilter.next(t)}clearFilter(t){for(const e in this.filters)if(e==t){this.filters[e]=void 0;break}this.page=1,this.getAllTransactions()}changeOrder(t,e){this.sorting[t]=e;for(const n in this.sorting)n!=t&&(this.sorting[n]=void 0);e&&(this.sorts=`orderBy=${t}&desc=${"desc"==e}`),this.getAllTransactions()}downloadReport(){let t=this.getQueryParams(!0);this.transactionsService.downloadReport(t).subscribe(t=>{const e=new Date,n=new Blob([t],{type:"application/octet-stream"}),c=window.URL.createObjectURL(n);var i=document.createElement("a");const o=e.getMonth()<10?"0"+(e.getMonth()+1):e.getMonth()+1;i.download=`canalsms_transacciones_${e.getDate()}_${o}_${e.getFullYear()}.xlsx`,i.href=c,i.click(),i.remove()},t=>{416==t.status?this.notifService.notificationEmitted().next(["error","Error al descargar!\xa0No se puede generar el reporte por exceder la cantidad m\xe1xima de registros."]):this.notifService.unexpectedErrrorEmitted().next()})}onSearchDateFilters(){this.getAllTransactions()}onClearFilters(){this.resetDateFilters(),this.resetFilters(),this.getAllTransactions()}resetFilters(){this.filters={serviceName:void 0,mobile:void 0,status:"",transactionId:void 0}}resetDateFilters(){this.fromDate=void 0,this.fromDateTime=this.START_TIME,this.fromDateEnd=void 0,this.fromDateEndTime=this.START_TIME,this.toDate=void 0,this.toDateTime=this.START_TIME,this.toDateEnd=void 0,this.toDateEndTime=this.START_TIME}ngOnDestroy(){this.filterSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Wb(y),s.Wb(b.a))},t.\u0275cmp=s.Qb({type:t,selectors:[["bo-transactions"]],decls:60,vars:27,consts:[[1,"container-fluid","ml-3"],[1,"title-container"],[1,"title"],["placement","right","ngbTooltip","Descargar reporte de transacciones",1,"download",3,"icon","click"],["class","spinner-container",4,"ngIf"],[1,"transactions-container"],[1,"date-filters-container"],[1,"date-filters"],[1,"start-filter"],[1,"compose-date"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],["type","time",3,"ngModel","ngModelChange"],[1,"end-filter"],[1,"d-flex","justify-content-end"],[1,"btn","btn-primary","btn-sm","p-2","mt-2","mr-2",3,"click"],[1,"btn","btn-secondary","btn-sm","p-2","mt-2",3,"click"],[1,"mb-0","mt-4","ml-0","w-100"],[1,"d-flex","justify-content-between"],[1,"filter"],["type","text","placeholder","B\xfasqueda por ID de transacci\xf3n",1,"form-control",3,"ngModel","ngModelChange","keyup"],["class","clear-icon",3,"icon","click",4,"ngIf"],["type","text","placeholder","Movil",1,"form-control",3,"ngModel","ngModelChange","keyup"],["type","text","placeholder","Nombre del servicio",1,"form-control",3,"ngModel","ngModelChange","keyup"],[1,"custom-select","status-select",3,"ngModel","ngModelChange"],["value","","selected",""],[4,"ngFor","ngForOf"],[1,"mb-0","mt-4","d-flex","justify-content-end"],[1,"custom-select",2,"width","auto",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"mb-0","mt-2","ml-0","w-100"],[1,"row"],[1,"col-sm-12"],[1,"table-responsive"],["class","table table-bordered table-hover",4,"ngIf"],[1,"d-flex","justify-content-center","p-2"],[3,"collectionSize","page","pageSize","maxSize","boundaryLinks","pageChange"],["class","mt-4 w-100",4,"ngIf"],[1,"spinner-container"],[1,"spinner"],[1,"clear-icon",3,"icon","click"],[3,"ngValue"],[1,"table","table-bordered","table-hover"],[3,"sortOrder","newOrder"],["class","provider-row",4,"ngFor","ngForOf"],[1,"provider-row"],[1,"mt-4","w-100"],["type","info",1,"no-result"]],template:function(t,e){1&t&&(s.cc(0,"div",0),s.cc(1,"div",1),s.cc(2,"h1",2),s.Uc(3,"Canal SMS Transacciones "),s.cc(4,"fa-icon",3),s.oc("click",(function(){return e.downloadReport()})),s.bc(),s.bc(),s.bc(),s.Sc(5,D,2,0,"div",4),s.cc(6,"div",5),s.cc(7,"div",6),s.cc(8,"div",7),s.cc(9,"div",8),s.cc(10,"label"),s.Uc(11,"Rango fecha inicio"),s.bc(),s.cc(12,"div",9),s.cc(13,"input",10),s.oc("ngModelChange",(function(t){return e.fromDate=t})),s.bc(),s.cc(14,"input",11),s.oc("ngModelChange",(function(t){return e.fromDateTime=t})),s.bc(),s.bc(),s.cc(15,"div",9),s.cc(16,"input",10),s.oc("ngModelChange",(function(t){return e.fromDateEnd=t})),s.bc(),s.cc(17,"input",11),s.oc("ngModelChange",(function(t){return e.fromDateEndTime=t})),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(18,"div",7),s.cc(19,"div",12),s.cc(20,"label"),s.Uc(21,"Rango fecha fin"),s.bc(),s.cc(22,"div",9),s.cc(23,"input",10),s.oc("ngModelChange",(function(t){return e.toDate=t})),s.bc(),s.cc(24,"input",11),s.oc("ngModelChange",(function(t){return e.toDateTime=t})),s.bc(),s.bc(),s.cc(25,"div",9),s.cc(26,"input",10),s.oc("ngModelChange",(function(t){return e.toDateEnd=t})),s.bc(),s.cc(27,"input",11),s.oc("ngModelChange",(function(t){return e.toDateEndTime=t})),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(28,"div",13),s.cc(29,"button",14),s.oc("click",(function(){return e.onSearchDateFilters()})),s.Uc(30," Aplicar filtro de fechas "),s.bc(),s.cc(31,"button",15),s.oc("click",(function(){return e.onClearFilters()})),s.Uc(32," Limpiar filtros "),s.bc(),s.bc(),s.cc(33,"div",16),s.cc(34,"div",17),s.cc(35,"div",18),s.cc(36,"input",19),s.oc("ngModelChange",(function(t){return e.filters.transactionId=t}))("keyup",(function(t){return e.onKeyUpFilter(t.target.value)})),s.bc(),s.Sc(37,x,1,1,"fa-icon",20),s.bc(),s.cc(38,"div",18),s.cc(39,"input",21),s.oc("ngModelChange",(function(t){return e.filters.mobile=t}))("keyup",(function(t){return e.onKeyUpFilter(t.target.value)})),s.bc(),s.Sc(40,w,1,1,"fa-icon",20),s.bc(),s.cc(41,"div",18),s.cc(42,"input",22),s.oc("ngModelChange",(function(t){return e.filters.serviceName=t}))("keyup",(function(t){return e.onKeyUpFilter(t.target.value)})),s.bc(),s.Sc(43,I,1,1,"fa-icon",20),s.bc(),s.cc(44,"div",18),s.cc(45,"select",23),s.oc("ngModelChange",(function(t){return e.filters.status=t}))("ngModelChange",(function(){return e.refreshTransactions(1)})),s.cc(46,"option",24),s.Uc(47," Seleccione un estado"),s.bc(),s.Sc(48,E,2,1,"option",25),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(49,"div",26),s.cc(50,"select",27),s.oc("ngModelChange",(function(t){return e.pageSize=t}))("ngModelChange",(function(){return e.refreshTransactions(1)})),s.Sc(51,U,2,2,"option",28),s.bc(),s.bc(),s.cc(52,"div",29),s.cc(53,"div",30),s.cc(54,"div",31),s.cc(55,"div",32),s.Sc(56,A,29,9,"table",33),s.cc(57,"div",34),s.cc(58,"ngb-pagination",35),s.oc("pageChange",(function(t){return e.page=t}))("pageChange",(function(){return e.refreshTransactions(e.page)})),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.Sc(59,K,3,0,"div",36),s.bc(),s.bc()),2&t&&(s.Fb(4),s.zc("icon",e.faFileDownload),s.Fb(1),s.zc("ngIf",e.isLoading),s.Fb(8),s.zc("ngModel",e.fromDate),s.Fb(1),s.zc("ngModel",e.fromDateTime),s.Fb(2),s.zc("ngModel",e.fromDateEnd),s.Fb(1),s.zc("ngModel",e.fromDateEndTime),s.Fb(6),s.zc("ngModel",e.toDate),s.Fb(1),s.zc("ngModel",e.toDateTime),s.Fb(2),s.zc("ngModel",e.toDateEnd),s.Fb(1),s.zc("ngModel",e.toDateEndTime),s.Fb(9),s.zc("ngModel",e.filters.transactionId),s.Fb(1),s.zc("ngIf",e.filters.transactionId),s.Fb(2),s.zc("ngModel",e.filters.mobile),s.Fb(1),s.zc("ngIf",e.filters.mobile),s.Fb(2),s.zc("ngModel",e.filters.serviceName),s.Fb(1),s.zc("ngIf",e.filters.serviceName),s.Fb(2),s.zc("ngModel",e.filters.status),s.Fb(3),s.zc("ngForOf",e.statuses),s.Fb(2),s.zc("ngModel",e.pageSize),s.Fb(1),s.zc("ngForOf",e.itemsPerPage),s.Fb(5),s.zc("ngIf",!e.isLoading&&(null==e.transactions?null:e.transactions.length)>0),s.Fb(2),s.zc("collectionSize",e.collectionSize)("page",e.page)("pageSize",e.pageSize)("maxSize",3)("boundaryLinks",!0),s.Fb(1),s.zc("ngIf",0==(null==e.transactions?null:e.transactions.length)&&!e.isLoading))},directives:[c.a,f.i,i.n,h.b,h.n,h.p,h.t,h.q,h.v,i.m,f.g,u.a,f.a],styles:["input[_ngcontent-%COMP%], label[_ngcontent-%COMP%], p[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-size:14px}h1[_ngcontent-%COMP%]{position:relative;display:inline-block}table[_ngcontent-%COMP%]{text-align:center}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:14px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:middle}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:13px;padding:12px 8px;max-width:150px;word-break:break-word}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(9), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(10), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(11){min-width:90px;max-width:120px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(7){word-break:normal}.filter[_ngcontent-%COMP%]{width:15%;position:relative}.filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:inline-block}.filter[_ngcontent-%COMP%]   .clear-icon[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:5px;right:20px}.spinner-container[_ngcontent-%COMP%]{top:600px}.action-icon[_ngcontent-%COMP%]{cursor:pointer;margin-right:10px;margin-left:5px;font-size:14px}.action-icon.edit[_ngcontent-%COMP%]:hover{color:#1890ff}.action-icon.delete[_ngcontent-%COMP%]:hover{color:#dc3545}@media (max-width:1440px){.filter[_ngcontent-%COMP%]{width:18%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:.75rem .5rem!important}}.download[_ngcontent-%COMP%]{font-size:1.5rem;margin-left:20px;position:absolute;top:12px;cursor:pointer}.download[_ngcontent-%COMP%]:hover{color:#1890ff}.date-filters-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.date-filters[_ngcontent-%COMP%]{border-radius:5px;padding:5px 0;width:40%}.date-filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700}.date-filters[_ngcontent-%COMP%]   .end-filter[_ngcontent-%COMP%], .date-filters[_ngcontent-%COMP%]   .start-filter[_ngcontent-%COMP%]{display:flex;flex-direction:column}.date-filters[_ngcontent-%COMP%]   .end-filter[_ngcontent-%COMP%]   .compose-date[_ngcontent-%COMP%]{justify-content:flex-end}.date-filters[_ngcontent-%COMP%]   .compose-date[_ngcontent-%COMP%]{display:flex;margin:10px 0}.date-filters[_ngcontent-%COMP%]   .compose-date[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(odd){margin-right:10px}  .no-result{margin-left:-15px;margin-top:20px}  .no-result button{display:none}"]}),t})();var $=n("iInd"),N=n("lDT9");const L=[{path:"",pathMatch:"full",redirectTo:"transacciones"},{path:"transacciones",canActivate:[N.a],component:R},{path:"segmentos",canActivate:[N.a],component:S}];let j=(()=>{class t{}return t.\u0275mod=s.Ub({type:t}),t.\u0275inj=s.Tb({factory:function(e){return new(e||t)},imports:[[$.g.forChild(L)],$.g]}),t})();var W=n("PCNd");let V=(()=>{class t{}return t.\u0275mod=s.Ub({type:t}),t.\u0275inj=s.Tb({factory:function(e){return new(e||t)},imports:[[i.c,j,c.b,h.i,h.s,f.h,f.b,f.j,W.a]]}),t})()}}]);
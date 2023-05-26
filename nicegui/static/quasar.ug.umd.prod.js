/*!
 * Quasar Framework v2.11.10
 * (c) 2015-present Razvan Stoenescu
 * Released under the MIT License.
 */
(function(e,t){"object"===typeof exports&&"undefined"!==typeof module?module.exports=t():"function"===typeof define&&define.amd?define(t):(e="undefined"!==typeof globalThis?globalThis:e||self,e.Quasar=e.Quasar||{},e.Quasar.lang=e.Quasar.lang||{},e.Quasar.lang.ug=t())})(this,function(){"use strict";const e="يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە_يەكشەنبە".split("_");var t={isoName:"ug",nativeName:"ئۇيغۇرچە",rtl:!0,label:{clear:"تازىلاش",ok:"ھەئە",cancel:"بولدىلا",close:"تاقاش",set:"تەڭشەش",select:"تاللاش",reset:"ئەسلىگە قايتۇرۇش",remove:"چىقىرىۋېتىش",update:"نەشىر يېڭىلاش",create:"قۇرۇش",search:"ئىزدەش",filter:"سۈزگۈچ",refresh:"يېڭىلاش",expand:e=>e?`نى كېڭەيتىڭ "${e}"`:"كېڭەيتىش",collapse:e=>e?`نى يىمىرىڭ "${e}"`:"كېڭەيتىش"},date:{days:e,daysShort:"ي_د_س_چ_پ_ج_ش".split("_"),months:"يانۋار(1)_فېۋرال(2)_مارت(3)_ئاپرىل(4)_ماي(5)_ئىيۇن(6)_ئىيۇل(7)_ئاۋغۇست (8)_سېنتەبىر(9)_ئۆكتەبىر(10)_نويابىر(11)_دېكابىر(12)".split("_"),monthsShort:"1-ئاي_2-ئاي_3-ئاي_4-ئاي_5-ئاي_6-ئاي_7-ئاي_8-ئاي_9-ئاي_10-ئاي_11-ئاي_12-ئاي".split("_"),firstDayOfWeek:1,format24h:!1,headerTitle:(t,a)=>a.month+"-ئاينىڭ "+a.day+"-كۈنى ، "+e[t.getDay()],pluralDay:"كۈن"},table:{noData:"ئۇچۇر يوق",noResults:"مۇناسىۋەتلىك ئۇچۇر تېپىلمىدى",loading:"يۈكلىنىۋاتىدۇ ...",selectedRecords:e=>"جەمئىي "+e+" قۇر تاللاندى",recordsPerPage:"ھەربەتتىكى قۇر سانى:",allRows:"ھەممىسى",pagination:(e,t,a)=>e+"-"+t+" / "+a,columns:"ئىستون"},editor:{url:"URL",bold:"توم",italic:"يانتۇ",strikethrough:"جىجاش",underline:"ئاستى سىزىق",unorderedList:"تەرتىپسىز",orderedList:"تەرتىپلىك",subscript:"تۆۋەن ئىندېكىس",superscript:"يۇقىرى ئىندېكىس",hyperlink:"ئۇلانما",toggleFullscreen:"پۈتۈن ئېكران",quote:"نەقىل",left:"سولغا توغرىلاش",center:"ئوتتۇرىغا توغرىلاش",right:"ئوڭغا توغرىلاش",justify:"ئىككى يانغا توغرىلاش",print:"بېسىپ چىقىرىش",outdent:"كېڭەيتىش",indent:"تارايتىش",removeFormat:"فورماتىنى چىقىرىۋېتىش",formatting:"فورماتلاش",fontSize:"خەت چوڭلىقى",align:"توغرىلاش",hr:"توغرا سىزىق",undo:"قايتۇرۇش",redo:"قايتىلاش",heading1:"تىما 1",heading2:"تىما 2",heading3:"تىما 3",heading4:"تىما 4",heading5:"تىما 5",heading6:"تىما 6",paragraph:"ئابزاس",code:"كود",size1:"كىچىك",size2:"كىچىكراق",size3:"نورمال",size4:"چوڭراق",size5:"چوڭ",size6:"ئىنتايىن چوڭ",size7:"ئەڭ چوڭ",defaultFont:"كۆڭۈلدىكى خەت نۇسخىسى",viewSource:"مەنبەنى كۆرۈش"},tree:{noNodes:"تۈگۈن يوق",noResults:"ئۇچۇر يوق"}};return t});
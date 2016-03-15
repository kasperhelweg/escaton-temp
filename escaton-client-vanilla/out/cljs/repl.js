// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__73_87 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__74_88 = null;
var count__75_89 = (0);
var i__76_90 = (0);
while(true){
if((i__76_90 < count__75_89)){
var f_91 = cljs.core._nth.call(null,chunk__74_88,i__76_90);
cljs.core.println.call(null,"  ",f_91);

var G__92 = seq__73_87;
var G__93 = chunk__74_88;
var G__94 = count__75_89;
var G__95 = (i__76_90 + (1));
seq__73_87 = G__92;
chunk__74_88 = G__93;
count__75_89 = G__94;
i__76_90 = G__95;
continue;
} else {
var temp__4425__auto___96 = cljs.core.seq.call(null,seq__73_87);
if(temp__4425__auto___96){
var seq__73_97__$1 = temp__4425__auto___96;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73_97__$1)){
var c__3301__auto___98 = cljs.core.chunk_first.call(null,seq__73_97__$1);
var G__99 = cljs.core.chunk_rest.call(null,seq__73_97__$1);
var G__100 = c__3301__auto___98;
var G__101 = cljs.core.count.call(null,c__3301__auto___98);
var G__102 = (0);
seq__73_87 = G__99;
chunk__74_88 = G__100;
count__75_89 = G__101;
i__76_90 = G__102;
continue;
} else {
var f_103 = cljs.core.first.call(null,seq__73_97__$1);
cljs.core.println.call(null,"  ",f_103);

var G__104 = cljs.core.next.call(null,seq__73_97__$1);
var G__105 = null;
var G__106 = (0);
var G__107 = (0);
seq__73_87 = G__104;
chunk__74_88 = G__105;
count__75_89 = G__106;
i__76_90 = G__107;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_108 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2926__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2926__auto__)){
return or__2926__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_108);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_108)))?cljs.core.second.call(null,arglists_108):arglists_108));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__77 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__78 = null;
var count__79 = (0);
var i__80 = (0);
while(true){
if((i__80 < count__79)){
var vec__81 = cljs.core._nth.call(null,chunk__78,i__80);
var name = cljs.core.nth.call(null,vec__81,(0),null);
var map__82 = cljs.core.nth.call(null,vec__81,(1),null);
var map__82__$1 = ((((!((map__82 == null)))?((((map__82.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82):map__82);
var doc = cljs.core.get.call(null,map__82__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__82__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__109 = seq__77;
var G__110 = chunk__78;
var G__111 = count__79;
var G__112 = (i__80 + (1));
seq__77 = G__109;
chunk__78 = G__110;
count__79 = G__111;
i__80 = G__112;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__77);
if(temp__4425__auto__){
var seq__77__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77__$1)){
var c__3301__auto__ = cljs.core.chunk_first.call(null,seq__77__$1);
var G__113 = cljs.core.chunk_rest.call(null,seq__77__$1);
var G__114 = c__3301__auto__;
var G__115 = cljs.core.count.call(null,c__3301__auto__);
var G__116 = (0);
seq__77 = G__113;
chunk__78 = G__114;
count__79 = G__115;
i__80 = G__116;
continue;
} else {
var vec__84 = cljs.core.first.call(null,seq__77__$1);
var name = cljs.core.nth.call(null,vec__84,(0),null);
var map__85 = cljs.core.nth.call(null,vec__84,(1),null);
var map__85__$1 = ((((!((map__85 == null)))?((((map__85.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85):map__85);
var doc = cljs.core.get.call(null,map__85__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__85__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__117 = cljs.core.next.call(null,seq__77__$1);
var G__118 = null;
var G__119 = (0);
var G__120 = (0);
seq__77 = G__117;
chunk__78 = G__118;
count__79 = G__119;
i__80 = G__120;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
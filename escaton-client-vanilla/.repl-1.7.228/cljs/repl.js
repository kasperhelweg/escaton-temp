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
var seq__4174_4188 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4175_4189 = null;
var count__4176_4190 = (0);
var i__4177_4191 = (0);
while(true){
if((i__4177_4191 < count__4176_4190)){
var f_4192 = cljs.core._nth.call(null,chunk__4175_4189,i__4177_4191);
cljs.core.println.call(null,"  ",f_4192);

var G__4193 = seq__4174_4188;
var G__4194 = chunk__4175_4189;
var G__4195 = count__4176_4190;
var G__4196 = (i__4177_4191 + (1));
seq__4174_4188 = G__4193;
chunk__4175_4189 = G__4194;
count__4176_4190 = G__4195;
i__4177_4191 = G__4196;
continue;
} else {
var temp__4425__auto___4197 = cljs.core.seq.call(null,seq__4174_4188);
if(temp__4425__auto___4197){
var seq__4174_4198__$1 = temp__4425__auto___4197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4174_4198__$1)){
var c__3301__auto___4199 = cljs.core.chunk_first.call(null,seq__4174_4198__$1);
var G__4200 = cljs.core.chunk_rest.call(null,seq__4174_4198__$1);
var G__4201 = c__3301__auto___4199;
var G__4202 = cljs.core.count.call(null,c__3301__auto___4199);
var G__4203 = (0);
seq__4174_4188 = G__4200;
chunk__4175_4189 = G__4201;
count__4176_4190 = G__4202;
i__4177_4191 = G__4203;
continue;
} else {
var f_4204 = cljs.core.first.call(null,seq__4174_4198__$1);
cljs.core.println.call(null,"  ",f_4204);

var G__4205 = cljs.core.next.call(null,seq__4174_4198__$1);
var G__4206 = null;
var G__4207 = (0);
var G__4208 = (0);
seq__4174_4188 = G__4205;
chunk__4175_4189 = G__4206;
count__4176_4190 = G__4207;
i__4177_4191 = G__4208;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_4209 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2926__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2926__auto__)){
return or__2926__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_4209);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_4209)))?cljs.core.second.call(null,arglists_4209):arglists_4209));
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
var seq__4178 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4179 = null;
var count__4180 = (0);
var i__4181 = (0);
while(true){
if((i__4181 < count__4180)){
var vec__4182 = cljs.core._nth.call(null,chunk__4179,i__4181);
var name = cljs.core.nth.call(null,vec__4182,(0),null);
var map__4183 = cljs.core.nth.call(null,vec__4182,(1),null);
var map__4183__$1 = ((((!((map__4183 == null)))?((((map__4183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4183):map__4183);
var doc = cljs.core.get.call(null,map__4183__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__4183__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__4210 = seq__4178;
var G__4211 = chunk__4179;
var G__4212 = count__4180;
var G__4213 = (i__4181 + (1));
seq__4178 = G__4210;
chunk__4179 = G__4211;
count__4180 = G__4212;
i__4181 = G__4213;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__4178);
if(temp__4425__auto__){
var seq__4178__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4178__$1)){
var c__3301__auto__ = cljs.core.chunk_first.call(null,seq__4178__$1);
var G__4214 = cljs.core.chunk_rest.call(null,seq__4178__$1);
var G__4215 = c__3301__auto__;
var G__4216 = cljs.core.count.call(null,c__3301__auto__);
var G__4217 = (0);
seq__4178 = G__4214;
chunk__4179 = G__4215;
count__4180 = G__4216;
i__4181 = G__4217;
continue;
} else {
var vec__4185 = cljs.core.first.call(null,seq__4178__$1);
var name = cljs.core.nth.call(null,vec__4185,(0),null);
var map__4186 = cljs.core.nth.call(null,vec__4185,(1),null);
var map__4186__$1 = ((((!((map__4186 == null)))?((((map__4186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4186):map__4186);
var doc = cljs.core.get.call(null,map__4186__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__4186__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__4218 = cljs.core.next.call(null,seq__4178__$1);
var G__4219 = null;
var G__4220 = (0);
var G__4221 = (0);
seq__4178 = G__4218;
chunk__4179 = G__4219;
count__4180 = G__4220;
i__4181 = G__4221;
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

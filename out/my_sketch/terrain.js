// Compiled by ClojureScript 1.9.473 {}
goog.provide('my_sketch.terrain');
goog.require('cljs.core');
goog.require('quil.core');
my_sketch.terrain.make_grid = (function my_sketch$terrain$make_grid(width,height,depth){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__7602__auto__ = (function my_sketch$terrain$make_grid_$_iter__202761(s__202762){
return (new cljs.core.LazySeq(null,(function (){
var s__202762__$1 = s__202762;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__202762__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var z = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7598__auto__ = ((function (s__202762__$1,z,xs__5205__auto__,temp__4657__auto__){
return (function my_sketch$terrain$make_grid_$_iter__202761_$_iter__202763(s__202764){
return (new cljs.core.LazySeq(null,((function (s__202762__$1,z,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__202764__$1 = s__202764;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__202764__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var x = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__7598__auto__ = ((function (s__202764__$1,s__202762__$1,x,xs__5205__auto____$1,temp__4657__auto____$1,z,xs__5205__auto__,temp__4657__auto__){
return (function my_sketch$terrain$make_grid_$_iter__202761_$_iter__202763_$_iter__202765(s__202766){
return (new cljs.core.LazySeq(null,((function (s__202764__$1,s__202762__$1,x,xs__5205__auto____$1,temp__4657__auto____$1,z,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__202766__$1 = s__202766;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__202766__$1);
if(temp__4657__auto____$2){
var s__202766__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__202766__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__202766__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__202768 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__202767 = (0);
while(true){
if((i__202767 < size__7601__auto__)){
var y = cljs.core._nth.call(null,c__7600__auto__,i__202767);
cljs.core.chunk_append.call(null,b__202768,(function (){var s = .02;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),(((z >= depth))?new cljs.core.Keyword(null,"empty","empty",767870958):(((quil.core.noise.call(null,(x * s),(y * s)) > (0.6 - (z / (10)))))?new cljs.core.Keyword(null,"empty","empty",767870958):new cljs.core.Keyword(null,"block","block",664686210)))], null);
})());

var G__202769 = (i__202767 + (1));
i__202767 = G__202769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__202768),my_sketch$terrain$make_grid_$_iter__202761_$_iter__202763_$_iter__202765.call(null,cljs.core.chunk_rest.call(null,s__202766__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__202768),null);
}
} else {
var y = cljs.core.first.call(null,s__202766__$2);
return cljs.core.cons.call(null,(function (){var s = .02;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),(((z >= depth))?new cljs.core.Keyword(null,"empty","empty",767870958):(((quil.core.noise.call(null,(x * s),(y * s)) > (0.6 - (z / (10)))))?new cljs.core.Keyword(null,"empty","empty",767870958):new cljs.core.Keyword(null,"block","block",664686210)))], null);
})(),my_sketch$terrain$make_grid_$_iter__202761_$_iter__202763_$_iter__202765.call(null,cljs.core.rest.call(null,s__202766__$2)));
}
} else {
return null;
}
break;
}
});})(s__202764__$1,s__202762__$1,x,xs__5205__auto____$1,temp__4657__auto____$1,z,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__202764__$1,s__202762__$1,x,xs__5205__auto____$1,temp__4657__auto____$1,z,xs__5205__auto__,temp__4657__auto__))
;
var fs__7599__auto__ = cljs.core.seq.call(null,iterys__7598__auto__.call(null,cljs.core.range.call(null,height)));
if(fs__7599__auto__){
return cljs.core.concat.call(null,fs__7599__auto__,my_sketch$terrain$make_grid_$_iter__202761_$_iter__202763.call(null,cljs.core.rest.call(null,s__202764__$1)));
} else {
var G__202770 = cljs.core.rest.call(null,s__202764__$1);
s__202764__$1 = G__202770;
continue;
}
} else {
return null;
}
break;
}
});})(s__202762__$1,z,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__202762__$1,z,xs__5205__auto__,temp__4657__auto__))
;
var fs__7599__auto__ = cljs.core.seq.call(null,iterys__7598__auto__.call(null,cljs.core.range.call(null,width)));
if(fs__7599__auto__){
return cljs.core.concat.call(null,fs__7599__auto__,my_sketch$terrain$make_grid_$_iter__202761.call(null,cljs.core.rest.call(null,s__202762__$1)));
} else {
var G__202771 = cljs.core.rest.call(null,s__202762__$1);
s__202762__$1 = G__202771;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7602__auto__.call(null,cljs.core.range.call(null,(depth + (2))));
})()));
});
my_sketch.terrain.elevation = (function my_sketch$terrain$elevation(x,y,grid){
var pred = (function (p__202783){
var vec__202784 = p__202783;
var vec__202787 = cljs.core.nth.call(null,vec__202784,(0),null);
var xx = cljs.core.nth.call(null,vec__202787,(0),null);
var yy = cljs.core.nth.call(null,vec__202787,(1),null);
var _ = cljs.core.nth.call(null,vec__202787,(2),null);
var b = cljs.core.nth.call(null,vec__202784,(1),null);
return ((cljs.core._EQ_.call(null,xx,x)) && (cljs.core._EQ_.call(null,yy,y))) && (cljs.core._EQ_.call(null,b,new cljs.core.Keyword(null,"block","block",664686210)));
});
var matches = cljs.core.filter.call(null,pred,grid);
if(cljs.core.empty_QMARK_.call(null,matches)){
return Number.NEGATIVE_INFINITY;
} else {
return cljs.core.nth.call(null,cljs.core.nth.call(null,cljs.core.apply.call(null,cljs.core.max_key,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (pred,matches){
return (function (p__202790){
var vec__202791 = p__202790;
var k = cljs.core.nth.call(null,vec__202791,(0),null);
var v = cljs.core.nth.call(null,vec__202791,(1),null);
return cljs.core.nth.call(null,k,(2));
});})(pred,matches))
], null),matches)),(0)),(2));
}
});

//# sourceMappingURL=terrain.js.map
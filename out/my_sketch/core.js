// Compiled by ClojureScript 1.9.473 {}
goog.provide('my_sketch.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
cljs.core.enable_console_print_BANG_.call(null);
my_sketch.core.make_triangle = (function my_sketch$core$make_triangle(color,direction){
var img = quil.core.create_image.call(null,(16),(16),new cljs.core.Keyword(null,"argb","argb",633844107));
var comparitor = direction.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"down-left","down-left",568486758),((function (img){
return (function (i,j){
return (i <= j);
});})(img))
,new cljs.core.Keyword(null,"up-right","up-right",-546303106),((function (img){
return (function (i,j){
return (i > j);
});})(img))
,new cljs.core.Keyword(null,"up-left","up-left",1510435846),((function (img){
return (function (i,j){
return (((16) - i) > j);
});})(img))
,new cljs.core.Keyword(null,"down-right","down-right",1213350619),((function (img){
return (function (i,j){
return (((16) - i) <= j);
});})(img))
], null));
var n__7737__auto___22320 = (16);
var i_22321 = (0);
while(true){
if((i_22321 < n__7737__auto___22320)){
var n__7737__auto___22322__$1 = (16);
var j_22323 = (0);
while(true){
if((j_22323 < n__7737__auto___22322__$1)){
if(cljs.core.truth_(comparitor.call(null,i_22321,j_22323))){
quil.core.set_pixel.call(null,img,i_22321,j_22323,cljs.core.apply.call(null,quil.core.color,color));
} else {
}

var G__22324 = (j_22323 + (1));
j_22323 = G__22324;
continue;
} else {
}
break;
}

var G__22325 = (i_22321 + (1));
i_22321 = G__22325;
continue;
} else {
}
break;
}

return img;
});
my_sketch.core.make_noise = (function my_sketch$core$make_noise(w,h){
var img = quil.core.create_image.call(null,w,h,new cljs.core.Keyword(null,"argb","argb",633844107));
var n__7737__auto___22326 = w;
var x_22327 = (0);
while(true){
if((x_22327 < n__7737__auto___22326)){
var n__7737__auto___22328__$1 = h;
var y_22329 = (0);
while(true){
if((y_22329 < n__7737__auto___22328__$1)){
var c_22330 = cljs.core.rand_int.call(null,(255));
quil.core.set_pixel.call(null,img,x_22327,y_22329,quil.core.color.call(null,c_22330,c_22330,c_22330,(45)));

var G__22331 = (y_22329 + (1));
y_22329 = G__22331;
continue;
} else {
}
break;
}

var G__22332 = (x_22327 + (1));
x_22327 = G__22332;
continue;
} else {
}
break;
}

return img;
});
my_sketch.core.make_view = (function my_sketch$core$make_view(grid){
var view = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7602__auto__ = (function my_sketch$core$make_view_$_iter__22339(s__22340){
return (new cljs.core.LazySeq(null,(function (){
var s__22340__$1 = s__22340;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22340__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7598__auto__ = ((function (s__22340__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function my_sketch$core$make_view_$_iter__22339_$_iter__22341(s__22342){
return (new cljs.core.LazySeq(null,((function (s__22340__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__22342__$1 = s__22342;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__22342__$1);
if(temp__4657__auto____$1){
var s__22342__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22342__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__22342__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__22344 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__22343 = (0);
while(true){
if((i__22343 < size__7601__auto__)){
var y = cljs.core._nth.call(null,c__7600__auto__,i__22343);
cljs.core.chunk_append.call(null,b__22344,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-left","up-left",1510435846),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down-right","down-right",1213350619),(3)], null)], null)], null)], null));

var G__22345 = (i__22343 + (1));
i__22343 = G__22345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22344),my_sketch$core$make_view_$_iter__22339_$_iter__22341.call(null,cljs.core.chunk_rest.call(null,s__22342__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22344),null);
}
} else {
var y = cljs.core.first.call(null,s__22342__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-left","up-left",1510435846),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down-right","down-right",1213350619),(3)], null)], null)], null)], null),my_sketch$core$make_view_$_iter__22339_$_iter__22341.call(null,cljs.core.rest.call(null,s__22342__$2)));
}
} else {
return null;
}
break;
}
});})(s__22340__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__22340__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__7599__auto__ = cljs.core.seq.call(null,iterys__7598__auto__.call(null,cljs.core.range.call(null,(40))));
if(fs__7599__auto__){
return cljs.core.concat.call(null,fs__7599__auto__,my_sketch$core$make_view_$_iter__22339.call(null,cljs.core.rest.call(null,s__22340__$1)));
} else {
var G__22346 = cljs.core.rest.call(null,s__22340__$1);
s__22340__$1 = G__22346;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7602__auto__.call(null,cljs.core.range.call(null,(40)));
})());
return view;
});
my_sketch.core.draw_block = (function my_sketch$core$draw_block(mx,my,mz,view){
var x = (mx - my);
var y = ((mx + my) - mz);
return cljs.core.reduce_kv.call(null,((function (x,y){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,cljs.core.vec.call(null,cljs.core.concat.call(null,v,m.call(null,k))));
});})(x,y))
,view,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down-right","down-right",1213350619),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-left","up-left",1510435846),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down-left","down-left",568486758),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-right","up-right",-546303106),(2)], null)], null)], null)]));
});
my_sketch.core.setup = (function my_sketch$core$setup(){
quil.core.background.call(null,(0));

quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

var colors = (function (){var iter__7602__auto__ = (function my_sketch$core$setup_$_iter__22495(s__22496){
return (new cljs.core.LazySeq(null,(function (){
var s__22496__$1 = s__22496;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22496__$1);
if(temp__4657__auto__){
var s__22496__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22496__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__22496__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__22498 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__22497 = (0);
while(true){
if((i__22497 < size__7601__auto__)){
var i = cljs.core._nth.call(null,c__7600__auto__,i__22497);
cljs.core.chunk_append.call(null,b__22498,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((256) / (4)) * i),(255)], null));

var G__22643 = (i__22497 + (1));
i__22497 = G__22643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22498),my_sketch$core$setup_$_iter__22495.call(null,cljs.core.chunk_rest.call(null,s__22496__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22498),null);
}
} else {
var i = cljs.core.first.call(null,s__22496__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((256) / (4)) * i),(255)], null),my_sketch$core$setup_$_iter__22495.call(null,cljs.core.rest.call(null,s__22496__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7602__auto__.call(null,cljs.core.range.call(null,(4)));
})();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dirty","dirty",729553281),new cljs.core.Keyword(null,"up-left","up-left",1510435846),new cljs.core.Keyword(null,"down-left","down-left",568486758),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"noise","noise",-994696820),new cljs.core.Keyword(null,"dood","dood",-705138701),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"down-right","down-right",1213350619),new cljs.core.Keyword(null,"up-right","up-right",-546303106),new cljs.core.Keyword(null,"view","view",1247994814)],[(function (){var iter__7602__auto__ = ((function (colors){
return (function my_sketch$core$setup_$_iter__22499(s__22500){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__22500__$1 = s__22500;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22500__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7598__auto__ = ((function (s__22500__$1,x,xs__5205__auto__,temp__4657__auto__,colors){
return (function my_sketch$core$setup_$_iter__22499_$_iter__22501(s__22502){
return (new cljs.core.LazySeq(null,((function (s__22500__$1,x,xs__5205__auto__,temp__4657__auto__,colors){
return (function (){
var s__22502__$1 = s__22502;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__22502__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var y = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__7598__auto__ = ((function (s__22502__$1,s__22500__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,x,xs__5205__auto__,temp__4657__auto__,colors){
return (function my_sketch$core$setup_$_iter__22499_$_iter__22501_$_iter__22503(s__22504){
return (new cljs.core.LazySeq(null,((function (s__22502__$1,s__22500__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,x,xs__5205__auto__,temp__4657__auto__,colors){
return (function (){
var s__22504__$1 = s__22504;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__22504__$1);
if(temp__4657__auto____$2){
var s__22504__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22504__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__22504__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__22506 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__22505 = (0);
while(true){
if((i__22505 < size__7601__auto__)){
var z = cljs.core._nth.call(null,c__7600__auto__,i__22505);
cljs.core.chunk_append.call(null,b__22506,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null));

var G__22644 = (i__22505 + (1));
i__22505 = G__22644;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22506),my_sketch$core$setup_$_iter__22499_$_iter__22501_$_iter__22503.call(null,cljs.core.chunk_rest.call(null,s__22504__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22506),null);
}
} else {
var z = cljs.core.first.call(null,s__22504__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),my_sketch$core$setup_$_iter__22499_$_iter__22501_$_iter__22503.call(null,cljs.core.rest.call(null,s__22504__$2)));
}
} else {
return null;
}
break;
}
});})(s__22502__$1,s__22500__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,x,xs__5205__auto__,temp__4657__auto__,colors))
,null,null));
});})(s__22502__$1,s__22500__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,x,xs__5205__auto__,temp__4657__auto__,colors))
;
var fs__7599__auto__ = cljs.core.seq.call(null,iterys__7598__auto__.call(null,cljs.core.range.call(null,(2))));
if(fs__7599__auto__){
return cljs.core.concat.call(null,fs__7599__auto__,my_sketch$core$setup_$_iter__22499_$_iter__22501.call(null,cljs.core.rest.call(null,s__22502__$1)));
} else {
var G__22645 = cljs.core.rest.call(null,s__22502__$1);
s__22502__$1 = G__22645;
continue;
}
} else {
return null;
}
break;
}
});})(s__22500__$1,x,xs__5205__auto__,temp__4657__auto__,colors))
,null,null));
});})(s__22500__$1,x,xs__5205__auto__,temp__4657__auto__,colors))
;
var fs__7599__auto__ = cljs.core.seq.call(null,iterys__7598__auto__.call(null,cljs.core.range.call(null,(20))));
if(fs__7599__auto__){
return cljs.core.concat.call(null,fs__7599__auto__,my_sketch$core$setup_$_iter__22499.call(null,cljs.core.rest.call(null,s__22500__$1)));
} else {
var G__22646 = cljs.core.rest.call(null,s__22500__$1);
s__22500__$1 = G__22646;
continue;
}
} else {
return null;
}
break;
}
});})(colors))
,null,null));
});})(colors))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(20)));
})(),(function (){var iter__7602__auto__ = ((function (colors){
return (function my_sketch$core$setup_$_iter__22507(s__22508){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__22508__$1 = s__22508;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22508__$1);
if(temp__4657__auto__){
var s__22508__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22508__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__22508__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__22510 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__22509 = (0);
while(true){
if((i__22509 < size__7601__auto__)){
var i = cljs.core._nth.call(null,c__7600__auto__,i__22509);
cljs.core.chunk_append.call(null,b__22510,my_sketch.core.make_triangle.call(null,cljs.core.nth.call(null,colors,i),new cljs.core.Keyword(null,"up-left","up-left",1510435846)));

var G__22647 = (i__22509 + (1));
i__22509 = G__22647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22510),my_sketch$core$setup_$_iter__22507.call(null,cljs.core.chunk_rest.call(null,s__22508__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22510),null);
}
} else {
var i = cljs.core.first.call(null,s__22508__$2);
return cljs.core.cons.call(null,my_sketch.core.make_triangle.call(null,cljs.core.nth.call(null,colors,i),new cljs.core.Keyword(null,"up-left","up-left",1510435846)),my_sketch$core$setup_$_iter__22507.call(null,cljs.core.rest.call(null,s__22508__$2)));
}
} else {
return null;
}
break;
}
});})(colors))
,null,null));
});})(colors))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(4)));
})(),(function (){var iter__7602__auto__ = ((function (colors){
return (function my_sketch$core$setup_$_iter__22511(s__22512){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__22512__$1 = s__22512;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22512__$1);
if(temp__4657__auto__){
var s__22512__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22512__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__22512__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__22514 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__22513 = (0);
while(true){
if((i__22513 < size__7601__auto__)){
var i = cljs.core._nth.call(null,c__7600__auto__,i__22513);
cljs.core.chunk_append.call(null,b__22514,my_sketch.core.make_triangle.call(null,cljs.core.nth.call(null,colors,i),new cljs.core.Keyword(null,"down-left","down-left",568486758)));

var G__22648 = (i__22513 + (1));
i__22513 = G__22648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22514),my_sketch$core$setup_$_iter__22511.call(null,cljs.core.chunk_rest.call(null,s__22512__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22514),null);
}
} else {
var i = cljs.core.first.call(null,s__22512__$2);
return cljs.core.cons.call(null,my_sketch.core.make_triangle.call(null,cljs.core.nth.call(null,colors,i),new cljs.core.Keyword(null,"down-left","down-left",568486758)),my_sketch$core$setup_$_iter__22511.call(null,cljs.core.rest.call(null,s__22512__$2)));
}
} else {
return null;
}
break;
}
});})(colors))
,null,null));
});})(colors))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(4)));
})(),(function (){var iter__7602__auto__ = ((function (colors){
return (function my_sketch$core$setup_$_iter__22515(s__22516){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__22516__$1 = s__22516;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22516__$1);
if(temp__4657__auto__){
var s__22516__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22516__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__22516__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__22518 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__22517 = (0);
while(true){
if((i__22517 < size__7601__auto__)){
var k = cljs.core._nth.call(null,c__7600__auto__,i__22517);
cljs.core.chunk_append.call(null,b__22518,cljs.core.sort.call(null,((function (i__22517,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors){
return (function (p__22575,p__22576){
var vec__22577 = p__22575;
var x = cljs.core.nth.call(null,vec__22577,(0),null);
var y = cljs.core.nth.call(null,vec__22577,(1),null);
var _ = cljs.core.nth.call(null,vec__22577,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__22577,(3),null);
var vec__22580 = p__22576;
var xx = cljs.core.nth.call(null,vec__22580,(0),null);
var yy = cljs.core.nth.call(null,vec__22580,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__22580,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__22580,(3),null);
return ((x + y) < (xx + yy));
});})(i__22517,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors))
,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__7602__auto__ = ((function (i__22517,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors){
return (function my_sketch$core$setup_$_iter__22515_$_iter__22583(s__22584){
return (new cljs.core.LazySeq(null,((function (i__22517,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors){
return (function (){
var s__22584__$1 = s__22584;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__22584__$1);
if(temp__4657__auto____$1){
var s__22584__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22584__$2)){
var c__7600__auto____$1 = cljs.core.chunk_first.call(null,s__22584__$2);
var size__7601__auto____$1 = cljs.core.count.call(null,c__7600__auto____$1);
var b__22586 = cljs.core.chunk_buffer.call(null,size__7601__auto____$1);
if((function (){var i__22585 = (0);
while(true){
if((i__22585 < size__7601__auto____$1)){
var i = cljs.core._nth.call(null,c__7600__auto____$1,i__22585);
cljs.core.chunk_append.call(null,b__22586,(function (){var iter__7602__auto__ = ((function (i__22585,i__22517,i,c__7600__auto____$1,size__7601__auto____$1,b__22586,s__22584__$2,temp__4657__auto____$1,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors){
return (function my_sketch$core$setup_$_iter__22515_$_iter__22583_$_iter__22595(s__22596){
return (new cljs.core.LazySeq(null,((function (i__22585,i__22517,i,c__7600__auto____$1,size__7601__auto____$1,b__22586,s__22584__$2,temp__4657__auto____$1,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors){
return (function (){
var s__22596__$1 = s__22596;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__22596__$1);
if(temp__4657__auto____$2){
var s__22596__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22596__$2)){
var c__7600__auto____$2 = cljs.core.chunk_first.call(null,s__22596__$2);
var size__7601__auto____$2 = cljs.core.count.call(null,c__7600__auto____$2);
var b__22598 = cljs.core.chunk_buffer.call(null,size__7601__auto____$2);
if((function (){var i__22597 = (0);
while(true){
if((i__22597 < size__7601__auto____$2)){
var j = cljs.core._nth.call(null,c__7600__auto____$2,i__22597);
cljs.core.chunk_append.call(null,b__22598,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,k,((cljs.core._EQ_.call(null,k,(0)))?new cljs.core.Keyword(null,"block","block",664686210):cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958)], null)))], null));

var G__22649 = (i__22597 + (1));
i__22597 = G__22649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22598),my_sketch$core$setup_$_iter__22515_$_iter__22583_$_iter__22595.call(null,cljs.core.chunk_rest.call(null,s__22596__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22598),null);
}
} else {
var j = cljs.core.first.call(null,s__22596__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,k,((cljs.core._EQ_.call(null,k,(0)))?new cljs.core.Keyword(null,"block","block",664686210):cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958)], null)))], null),my_sketch$core$setup_$_iter__22515_$_iter__22583_$_iter__22595.call(null,cljs.core.rest.call(null,s__22596__$2)));
}
} else {
return null;
}
break;
}
});})(i__22585,i__22517,i,c__7600__auto____$1,size__7601__auto____$1,b__22586,s__22584__$2,temp__4657__auto____$1,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors))
,null,null));
});})(i__22585,i__22517,i,c__7600__auto____$1,size__7601__auto____$1,b__22586,s__22584__$2,temp__4657__auto____$1,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(20)));
})());

var G__22650 = (i__22585 + (1));
i__22585 = G__22650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22586),my_sketch$core$setup_$_iter__22515_$_iter__22583.call(null,cljs.core.chunk_rest.call(null,s__22584__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22586),null);
}
} else {
var i = cljs.core.first.call(null,s__22584__$2);
return cljs.core.cons.call(null,(function (){var iter__7602__auto__ = ((function (i__22517,i,s__22584__$2,temp__4657__auto____$1,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors){
return (function my_sketch$core$setup_$_iter__22515_$_iter__22583_$_iter__22599(s__22600){
return (new cljs.core.LazySeq(null,((function (i__22517,i,s__22584__$2,temp__4657__auto____$1,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors){
return (function (){
var s__22600__$1 = s__22600;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__22600__$1);
if(temp__4657__auto____$2){
var s__22600__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22600__$2)){
var c__7600__auto____$1 = cljs.core.chunk_first.call(null,s__22600__$2);
var size__7601__auto____$1 = cljs.core.count.call(null,c__7600__auto____$1);
var b__22602 = cljs.core.chunk_buffer.call(null,size__7601__auto____$1);
if((function (){var i__22601 = (0);
while(true){
if((i__22601 < size__7601__auto____$1)){
var j = cljs.core._nth.call(null,c__7600__auto____$1,i__22601);
cljs.core.chunk_append.call(null,b__22602,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,k,((cljs.core._EQ_.call(null,k,(0)))?new cljs.core.Keyword(null,"block","block",664686210):cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958)], null)))], null));

var G__22651 = (i__22601 + (1));
i__22601 = G__22651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22602),my_sketch$core$setup_$_iter__22515_$_iter__22583_$_iter__22599.call(null,cljs.core.chunk_rest.call(null,s__22600__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22602),null);
}
} else {
var j = cljs.core.first.call(null,s__22600__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,k,((cljs.core._EQ_.call(null,k,(0)))?new cljs.core.Keyword(null,"block","block",664686210):cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958)], null)))], null),my_sketch$core$setup_$_iter__22515_$_iter__22583_$_iter__22599.call(null,cljs.core.rest.call(null,s__22600__$2)));
}
} else {
return null;
}
break;
}
});})(i__22517,i,s__22584__$2,temp__4657__auto____$1,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors))
,null,null));
});})(i__22517,i,s__22584__$2,temp__4657__auto____$1,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(20)));
})(),my_sketch$core$setup_$_iter__22515_$_iter__22583.call(null,cljs.core.rest.call(null,s__22584__$2)));
}
} else {
return null;
}
break;
}
});})(i__22517,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors))
,null,null));
});})(i__22517,k,c__7600__auto__,size__7601__auto__,b__22518,s__22516__$2,temp__4657__auto__,colors))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(20)));
})())));

var G__22652 = (i__22517 + (1));
i__22517 = G__22652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22518),my_sketch$core$setup_$_iter__22515.call(null,cljs.core.chunk_rest.call(null,s__22516__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22518),null);
}
} else {
var k = cljs.core.first.call(null,s__22516__$2);
return cljs.core.cons.call(null,cljs.core.sort.call(null,((function (k,s__22516__$2,temp__4657__auto__,colors){
return (function (p__22603,p__22604){
var vec__22605 = p__22603;
var x = cljs.core.nth.call(null,vec__22605,(0),null);
var y = cljs.core.nth.call(null,vec__22605,(1),null);
var _ = cljs.core.nth.call(null,vec__22605,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__22605,(3),null);
var vec__22608 = p__22604;
var xx = cljs.core.nth.call(null,vec__22608,(0),null);
var yy = cljs.core.nth.call(null,vec__22608,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__22608,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__22608,(3),null);
return ((x + y) < (xx + yy));
});})(k,s__22516__$2,temp__4657__auto__,colors))
,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__7602__auto__ = ((function (k,s__22516__$2,temp__4657__auto__,colors){
return (function my_sketch$core$setup_$_iter__22515_$_iter__22611(s__22612){
return (new cljs.core.LazySeq(null,((function (k,s__22516__$2,temp__4657__auto__,colors){
return (function (){
var s__22612__$1 = s__22612;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__22612__$1);
if(temp__4657__auto____$1){
var s__22612__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22612__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__22612__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__22614 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__22613 = (0);
while(true){
if((i__22613 < size__7601__auto__)){
var i = cljs.core._nth.call(null,c__7600__auto__,i__22613);
cljs.core.chunk_append.call(null,b__22614,(function (){var iter__7602__auto__ = ((function (i__22613,i,c__7600__auto__,size__7601__auto__,b__22614,s__22612__$2,temp__4657__auto____$1,k,s__22516__$2,temp__4657__auto__,colors){
return (function my_sketch$core$setup_$_iter__22515_$_iter__22611_$_iter__22623(s__22624){
return (new cljs.core.LazySeq(null,((function (i__22613,i,c__7600__auto__,size__7601__auto__,b__22614,s__22612__$2,temp__4657__auto____$1,k,s__22516__$2,temp__4657__auto__,colors){
return (function (){
var s__22624__$1 = s__22624;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__22624__$1);
if(temp__4657__auto____$2){
var s__22624__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22624__$2)){
var c__7600__auto____$1 = cljs.core.chunk_first.call(null,s__22624__$2);
var size__7601__auto____$1 = cljs.core.count.call(null,c__7600__auto____$1);
var b__22626 = cljs.core.chunk_buffer.call(null,size__7601__auto____$1);
if((function (){var i__22625 = (0);
while(true){
if((i__22625 < size__7601__auto____$1)){
var j = cljs.core._nth.call(null,c__7600__auto____$1,i__22625);
cljs.core.chunk_append.call(null,b__22626,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,k,((cljs.core._EQ_.call(null,k,(0)))?new cljs.core.Keyword(null,"block","block",664686210):cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958)], null)))], null));

var G__22653 = (i__22625 + (1));
i__22625 = G__22653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22626),my_sketch$core$setup_$_iter__22515_$_iter__22611_$_iter__22623.call(null,cljs.core.chunk_rest.call(null,s__22624__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22626),null);
}
} else {
var j = cljs.core.first.call(null,s__22624__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,k,((cljs.core._EQ_.call(null,k,(0)))?new cljs.core.Keyword(null,"block","block",664686210):cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958)], null)))], null),my_sketch$core$setup_$_iter__22515_$_iter__22611_$_iter__22623.call(null,cljs.core.rest.call(null,s__22624__$2)));
}
} else {
return null;
}
break;
}
});})(i__22613,i,c__7600__auto__,size__7601__auto__,b__22614,s__22612__$2,temp__4657__auto____$1,k,s__22516__$2,temp__4657__auto__,colors))
,null,null));
});})(i__22613,i,c__7600__auto__,size__7601__auto__,b__22614,s__22612__$2,temp__4657__auto____$1,k,s__22516__$2,temp__4657__auto__,colors))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(20)));
})());

var G__22654 = (i__22613 + (1));
i__22613 = G__22654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22614),my_sketch$core$setup_$_iter__22515_$_iter__22611.call(null,cljs.core.chunk_rest.call(null,s__22612__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22614),null);
}
} else {
var i = cljs.core.first.call(null,s__22612__$2);
return cljs.core.cons.call(null,(function (){var iter__7602__auto__ = ((function (i,s__22612__$2,temp__4657__auto____$1,k,s__22516__$2,temp__4657__auto__,colors){
return (function my_sketch$core$setup_$_iter__22515_$_iter__22611_$_iter__22627(s__22628){
return (new cljs.core.LazySeq(null,((function (i,s__22612__$2,temp__4657__auto____$1,k,s__22516__$2,temp__4657__auto__,colors){
return (function (){
var s__22628__$1 = s__22628;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__22628__$1);
if(temp__4657__auto____$2){
var s__22628__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22628__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__22628__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__22630 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__22629 = (0);
while(true){
if((i__22629 < size__7601__auto__)){
var j = cljs.core._nth.call(null,c__7600__auto__,i__22629);
cljs.core.chunk_append.call(null,b__22630,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,k,((cljs.core._EQ_.call(null,k,(0)))?new cljs.core.Keyword(null,"block","block",664686210):cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958)], null)))], null));

var G__22655 = (i__22629 + (1));
i__22629 = G__22655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22630),my_sketch$core$setup_$_iter__22515_$_iter__22611_$_iter__22627.call(null,cljs.core.chunk_rest.call(null,s__22628__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22630),null);
}
} else {
var j = cljs.core.first.call(null,s__22628__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,k,((cljs.core._EQ_.call(null,k,(0)))?new cljs.core.Keyword(null,"block","block",664686210):cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"empty","empty",767870958)], null)))], null),my_sketch$core$setup_$_iter__22515_$_iter__22611_$_iter__22627.call(null,cljs.core.rest.call(null,s__22628__$2)));
}
} else {
return null;
}
break;
}
});})(i,s__22612__$2,temp__4657__auto____$1,k,s__22516__$2,temp__4657__auto__,colors))
,null,null));
});})(i,s__22612__$2,temp__4657__auto____$1,k,s__22516__$2,temp__4657__auto__,colors))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(20)));
})(),my_sketch$core$setup_$_iter__22515_$_iter__22611.call(null,cljs.core.rest.call(null,s__22612__$2)));
}
} else {
return null;
}
break;
}
});})(k,s__22516__$2,temp__4657__auto__,colors))
,null,null));
});})(k,s__22516__$2,temp__4657__auto__,colors))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(20)));
})())),my_sketch$core$setup_$_iter__22515.call(null,cljs.core.rest.call(null,s__22516__$2)));
}
} else {
return null;
}
break;
}
});})(colors))
,null,null));
});})(colors))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(2)));
})(),(function (){var iter__7602__auto__ = ((function (colors){
return (function my_sketch$core$setup_$_iter__22631(s__22632){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__22632__$1 = s__22632;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22632__$1);
if(temp__4657__auto__){
var s__22632__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22632__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__22632__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__22634 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__22633 = (0);
while(true){
if((i__22633 < size__7601__auto__)){
var _ = cljs.core._nth.call(null,c__7600__auto__,i__22633);
cljs.core.chunk_append.call(null,b__22634,my_sketch.core.make_noise.call(null,((20) * (32)),((20) * (32))));

var G__22656 = (i__22633 + (1));
i__22633 = G__22656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22634),my_sketch$core$setup_$_iter__22631.call(null,cljs.core.chunk_rest.call(null,s__22632__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22634),null);
}
} else {
var _ = cljs.core.first.call(null,s__22632__$2);
return cljs.core.cons.call(null,my_sketch.core.make_noise.call(null,((20) * (32)),((20) * (32))),my_sketch$core$setup_$_iter__22631.call(null,cljs.core.rest.call(null,s__22632__$2)));
}
} else {
return null;
}
break;
}
});})(colors))
,null,null));
});})(colors))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(4)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(0)], null),cljs.core.PersistentVector.EMPTY,(function (){var iter__7602__auto__ = ((function (colors){
return (function my_sketch$core$setup_$_iter__22635(s__22636){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__22636__$1 = s__22636;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22636__$1);
if(temp__4657__auto__){
var s__22636__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22636__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__22636__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__22638 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__22637 = (0);
while(true){
if((i__22637 < size__7601__auto__)){
var i = cljs.core._nth.call(null,c__7600__auto__,i__22637);
cljs.core.chunk_append.call(null,b__22638,my_sketch.core.make_triangle.call(null,cljs.core.nth.call(null,colors,i),new cljs.core.Keyword(null,"down-right","down-right",1213350619)));

var G__22657 = (i__22637 + (1));
i__22637 = G__22657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22638),my_sketch$core$setup_$_iter__22635.call(null,cljs.core.chunk_rest.call(null,s__22636__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22638),null);
}
} else {
var i = cljs.core.first.call(null,s__22636__$2);
return cljs.core.cons.call(null,my_sketch.core.make_triangle.call(null,cljs.core.nth.call(null,colors,i),new cljs.core.Keyword(null,"down-right","down-right",1213350619)),my_sketch$core$setup_$_iter__22635.call(null,cljs.core.rest.call(null,s__22636__$2)));
}
} else {
return null;
}
break;
}
});})(colors))
,null,null));
});})(colors))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(4)));
})(),(function (){var iter__7602__auto__ = ((function (colors){
return (function my_sketch$core$setup_$_iter__22639(s__22640){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__22640__$1 = s__22640;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22640__$1);
if(temp__4657__auto__){
var s__22640__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22640__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__22640__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__22642 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__22641 = (0);
while(true){
if((i__22641 < size__7601__auto__)){
var i = cljs.core._nth.call(null,c__7600__auto__,i__22641);
cljs.core.chunk_append.call(null,b__22642,my_sketch.core.make_triangle.call(null,cljs.core.nth.call(null,colors,i),new cljs.core.Keyword(null,"up-right","up-right",-546303106)));

var G__22658 = (i__22641 + (1));
i__22641 = G__22658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22642),my_sketch$core$setup_$_iter__22639.call(null,cljs.core.chunk_rest.call(null,s__22640__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22642),null);
}
} else {
var i = cljs.core.first.call(null,s__22640__$2);
return cljs.core.cons.call(null,my_sketch.core.make_triangle.call(null,cljs.core.nth.call(null,colors,i),new cljs.core.Keyword(null,"up-right","up-right",-546303106)),my_sketch$core$setup_$_iter__22639.call(null,cljs.core.rest.call(null,s__22640__$2)));
}
} else {
return null;
}
break;
}
});})(colors))
,null,null));
});})(colors))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(4)));
})(),my_sketch.core.draw_block.call(null,(20),(10),(1),my_sketch.core.make_view.call(null,null))]);
});
my_sketch.core.update_state = (function my_sketch$core$update_state(state){
if(cljs.core.truth_(cljs.core.not_empty.call(null,state.call(null,new cljs.core.Keyword(null,"dirty","dirty",729553281))))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"draw","draw",1358331674),state.call(null,new cljs.core.Keyword(null,"dirty","dirty",729553281))),new cljs.core.Keyword(null,"dirty","dirty",729553281),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"draw","draw",1358331674),cljs.core.PersistentVector.EMPTY);
}
});
my_sketch.core.draw_dood = (function my_sketch$core$draw_dood(x,y,z){
quil.core.fill.call(null,quil.core.color.call(null,(240),(240),(0)));

return quil.core.ellipse.call(null,(((x - y) * (16)) + (316)),((((x + y) * (16)) + (z * (16))) + (16)),(16),(16));
});
my_sketch.core.draw_state = (function my_sketch$core$draw_state(state){
var map__22701 = state;
var map__22701__$1 = ((((!((map__22701 == null)))?((((map__22701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22701):map__22701);
var grid = cljs.core.get.call(null,map__22701__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var draw = cljs.core.get.call(null,map__22701__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var noise = cljs.core.get.call(null,map__22701__$1,new cljs.core.Keyword(null,"noise","noise",-994696820));
var view = cljs.core.get.call(null,map__22701__$1,new cljs.core.Keyword(null,"view","view",1247994814));
if(cljs.core.truth_(cljs.core.not_empty.call(null,draw))){
var seq__22703 = cljs.core.seq.call(null,view);
var chunk__22704 = null;
var count__22705 = (0);
var i__22706 = (0);
while(true){
if((i__22706 < count__22705)){
var vec__22707 = cljs.core._nth.call(null,chunk__22704,i__22706);
var vec__22710 = cljs.core.nth.call(null,vec__22707,(0),null);
var x = cljs.core.nth.call(null,vec__22710,(0),null);
var y = cljs.core.nth.call(null,vec__22710,(1),null);
var vec__22713 = cljs.core.nth.call(null,vec__22707,(1),null);
var seq__22714 = cljs.core.seq.call(null,vec__22713);
var first__22715 = cljs.core.first.call(null,seq__22714);
var seq__22714__$1 = cljs.core.next.call(null,seq__22714);
var vec__22716 = first__22715;
var vec__22719 = cljs.core.nth.call(null,vec__22716,(0),null);
var t1n = cljs.core.nth.call(null,vec__22719,(0),null);
var t1i = cljs.core.nth.call(null,vec__22719,(1),null);
var vec__22722 = cljs.core.nth.call(null,vec__22716,(1),null);
var t2n = cljs.core.nth.call(null,vec__22722,(0),null);
var t2i = cljs.core.nth.call(null,vec__22722,(1),null);
var _ = seq__22714__$1;
quil.core.set_image.call(null,(x * (16)),(y * (16)),cljs.core.nth.call(null,t1n.call(null,state),t1i));

quil.core.set_image.call(null,(x * (16)),(y * (16)),cljs.core.nth.call(null,t2n.call(null,state),t2i));

var G__22743 = seq__22703;
var G__22744 = chunk__22704;
var G__22745 = count__22705;
var G__22746 = (i__22706 + (1));
seq__22703 = G__22743;
chunk__22704 = G__22744;
count__22705 = G__22745;
i__22706 = G__22746;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22703);
if(temp__4657__auto__){
var seq__22703__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22703__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__22703__$1);
var G__22747 = cljs.core.chunk_rest.call(null,seq__22703__$1);
var G__22748 = c__7633__auto__;
var G__22749 = cljs.core.count.call(null,c__7633__auto__);
var G__22750 = (0);
seq__22703 = G__22747;
chunk__22704 = G__22748;
count__22705 = G__22749;
i__22706 = G__22750;
continue;
} else {
var vec__22725 = cljs.core.first.call(null,seq__22703__$1);
var vec__22728 = cljs.core.nth.call(null,vec__22725,(0),null);
var x = cljs.core.nth.call(null,vec__22728,(0),null);
var y = cljs.core.nth.call(null,vec__22728,(1),null);
var vec__22731 = cljs.core.nth.call(null,vec__22725,(1),null);
var seq__22732 = cljs.core.seq.call(null,vec__22731);
var first__22733 = cljs.core.first.call(null,seq__22732);
var seq__22732__$1 = cljs.core.next.call(null,seq__22732);
var vec__22734 = first__22733;
var vec__22737 = cljs.core.nth.call(null,vec__22734,(0),null);
var t1n = cljs.core.nth.call(null,vec__22737,(0),null);
var t1i = cljs.core.nth.call(null,vec__22737,(1),null);
var vec__22740 = cljs.core.nth.call(null,vec__22734,(1),null);
var t2n = cljs.core.nth.call(null,vec__22740,(0),null);
var t2i = cljs.core.nth.call(null,vec__22740,(1),null);
var _ = seq__22732__$1;
quil.core.set_image.call(null,(x * (16)),(y * (16)),cljs.core.nth.call(null,t1n.call(null,state),t1i));

quil.core.set_image.call(null,(x * (16)),(y * (16)),cljs.core.nth.call(null,t2n.call(null,state),t2i));

var G__22751 = cljs.core.next.call(null,seq__22703__$1);
var G__22752 = null;
var G__22753 = (0);
var G__22754 = (0);
seq__22703 = G__22751;
chunk__22704 = G__22752;
count__22705 = G__22753;
i__22706 = G__22754;
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
});
my_sketch.core.neighborhood = (function my_sketch$core$neighborhood(x,y,z){
var iter__7602__auto__ = (function my_sketch$core$neighborhood_$_iter__22759(s__22760){
return (new cljs.core.LazySeq(null,(function (){
var s__22760__$1 = s__22760;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22760__$1);
if(temp__4657__auto__){
var s__22760__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22760__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__22760__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__22762 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__22761 = (0);
while(true){
if((i__22761 < size__7601__auto__)){
var dz = cljs.core._nth.call(null,c__7600__auto__,i__22761);
cljs.core.chunk_append.call(null,b__22762,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(z + dz)], null));

var G__22763 = (i__22761 + (1));
i__22761 = G__22763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22762),my_sketch$core$neighborhood_$_iter__22759.call(null,cljs.core.chunk_rest.call(null,s__22760__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22762),null);
}
} else {
var dz = cljs.core.first.call(null,s__22760__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(z + dz)], null),my_sketch$core$neighborhood_$_iter__22759.call(null,cljs.core.rest.call(null,s__22760__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7602__auto__.call(null,cljs.core.range.call(null,(-1),(2)));
});
my_sketch.core.move_dood = (function my_sketch$core$move_dood(state,dx,dy){
var vec__22767 = state.call(null,new cljs.core.Keyword(null,"dood","dood",-705138701));
var ix = cljs.core.nth.call(null,vec__22767,(0),null);
var iy = cljs.core.nth.call(null,vec__22767,(1),null);
var iz = cljs.core.nth.call(null,vec__22767,(2),null);
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dood","dood",-705138701),(0)], null),(ix + dx)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dood","dood",-705138701),(1)], null),(iy + dy)),new cljs.core.Keyword(null,"dirty","dirty",729553281),((function (vec__22767,ix,iy,iz){
return (function (x){
return cljs.core.concat.call(null,x,my_sketch.core.neighborhood.call(null,ix,iy,iz),my_sketch.core.neighborhood.call(null,(ix + dx),(iy + dy),iz));
});})(vec__22767,ix,iy,iz))
);
});
my_sketch.core.on_key_down = (function my_sketch$core$on_key_down(state,event){
var G__22771 = (((new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event).fqn:null);
switch (G__22771) {
case "w":
return my_sketch.core.move_dood.call(null,state,(0),(1));

break;
case "up":
return my_sketch.core.move_dood.call(null,state,(0),(1));

break;
case "s":
return my_sketch.core.move_dood.call(null,state,(0),(-1));

break;
case "down":
return my_sketch.core.move_dood.call(null,state,(0),(-1));

break;
case "a":
return my_sketch.core.move_dood.call(null,state,(-1),(0));

break;
case "left":
return my_sketch.core.move_dood.call(null,state,(-1),(0));

break;
case "d":
return my_sketch.core.move_dood.call(null,state,(1),(0));

break;
case "right":
return my_sketch.core.move_dood.call(null,state,(1),(0));

break;
default:
return state;

}
});
my_sketch.core.my_sketch = (function my_sketch$core$my_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"my-sketch",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,my_sketch.core.update_state))?(function() { 
var G__22773__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.update_state,args);
};
var G__22773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22774__i = 0, G__22774__a = new Array(arguments.length -  0);
while (G__22774__i < G__22774__a.length) {G__22774__a[G__22774__i] = arguments[G__22774__i + 0]; ++G__22774__i;}
  args = new cljs.core.IndexedSeq(G__22774__a,0);
} 
return G__22773__delegate.call(this,args);};
G__22773.cljs$lang$maxFixedArity = 0;
G__22773.cljs$lang$applyTo = (function (arglist__22775){
var args = cljs.core.seq(arglist__22775);
return G__22773__delegate(args);
});
G__22773.cljs$core$IFn$_invoke$arity$variadic = G__22773__delegate;
return G__22773;
})()
:my_sketch.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((20) * (32)),((20) * (32))], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,my_sketch.core.setup))?(function() { 
var G__22776__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.setup,args);
};
var G__22776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22777__i = 0, G__22777__a = new Array(arguments.length -  0);
while (G__22777__i < G__22777__a.length) {G__22777__a[G__22777__i] = arguments[G__22777__i + 0]; ++G__22777__i;}
  args = new cljs.core.IndexedSeq(G__22777__a,0);
} 
return G__22776__delegate.call(this,args);};
G__22776.cljs$lang$maxFixedArity = 0;
G__22776.cljs$lang$applyTo = (function (arglist__22778){
var args = cljs.core.seq(arglist__22778);
return G__22776__delegate(args);
});
G__22776.cljs$core$IFn$_invoke$arity$variadic = G__22776__delegate;
return G__22776;
})()
:my_sketch.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,my_sketch.core.on_key_down))?(function() { 
var G__22779__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.on_key_down,args);
};
var G__22779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22780__i = 0, G__22780__a = new Array(arguments.length -  0);
while (G__22780__i < G__22780__a.length) {G__22780__a[G__22780__i] = arguments[G__22780__i + 0]; ++G__22780__i;}
  args = new cljs.core.IndexedSeq(G__22780__a,0);
} 
return G__22779__delegate.call(this,args);};
G__22779.cljs$lang$maxFixedArity = 0;
G__22779.cljs$lang$applyTo = (function (arglist__22781){
var args = cljs.core.seq(arglist__22781);
return G__22779__delegate(args);
});
G__22779.cljs$core$IFn$_invoke$arity$variadic = G__22779__delegate;
return G__22779;
})()
:my_sketch.core.on_key_down),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,my_sketch.core.draw_state))?(function() { 
var G__22782__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.draw_state,args);
};
var G__22782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22783__i = 0, G__22783__a = new Array(arguments.length -  0);
while (G__22783__i < G__22783__a.length) {G__22783__a[G__22783__i] = arguments[G__22783__i + 0]; ++G__22783__i;}
  args = new cljs.core.IndexedSeq(G__22783__a,0);
} 
return G__22782__delegate.call(this,args);};
G__22782.cljs$lang$maxFixedArity = 0;
G__22782.cljs$lang$applyTo = (function (arglist__22784){
var args = cljs.core.seq(arglist__22784);
return G__22782__delegate(args);
});
G__22782.cljs$core$IFn$_invoke$arity$variadic = G__22782__delegate;
return G__22782;
})()
:my_sketch.core.draw_state));
});
goog.exportSymbol('my_sketch.core.my_sketch', my_sketch.core.my_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),my_sketch.core.my_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"my-sketch"], null));
}

//# sourceMappingURL=core.js.map
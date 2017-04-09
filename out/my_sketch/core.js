// Compiled by ClojureScript 1.9.473 {}
goog.provide('my_sketch.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('my_sketch.drawing');
goog.require('my_sketch.terrain');
cljs.core.enable_console_print_BANG_.call(null);
my_sketch.core.setup = (function my_sketch$core$setup(){
quil.core.background.call(null,(0));

quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

var artist = my_sketch.drawing.make_artist.call(null);
var grid = my_sketch.terrain.make_grid.call(null,(40),(40),(3));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"grid","grid",402978600),grid,new cljs.core.Keyword(null,"artist","artist",152869709),artist,new cljs.core.Keyword(null,"view","view",1247994814),my_sketch.drawing.make_view.call(null,grid),new cljs.core.Keyword(null,"dood","dood",-705138701),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(15),(my_sketch.terrain.elevation.call(null,(0),(0),grid) + (1))], null),new cljs.core.Keyword(null,"draw","draw",1358331674),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dirty","dirty",729553281),(function (){var iter__7602__auto__ = ((function (artist,grid){
return (function my_sketch$core$setup_$_iter__202802(s__202803){
return (new cljs.core.LazySeq(null,((function (artist,grid){
return (function (){
var s__202803__$1 = s__202803;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__202803__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7598__auto__ = ((function (s__202803__$1,x,xs__5205__auto__,temp__4657__auto__,artist,grid){
return (function my_sketch$core$setup_$_iter__202802_$_iter__202804(s__202805){
return (new cljs.core.LazySeq(null,((function (s__202803__$1,x,xs__5205__auto__,temp__4657__auto__,artist,grid){
return (function (){
var s__202805__$1 = s__202805;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__202805__$1);
if(temp__4657__auto____$1){
var s__202805__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__202805__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__202805__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__202807 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__202806 = (0);
while(true){
if((i__202806 < size__7601__auto__)){
var y = cljs.core._nth.call(null,c__7600__auto__,i__202806);
cljs.core.chunk_append.call(null,b__202807,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__202808 = (i__202806 + (1));
i__202806 = G__202808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__202807),my_sketch$core$setup_$_iter__202802_$_iter__202804.call(null,cljs.core.chunk_rest.call(null,s__202805__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__202807),null);
}
} else {
var y = cljs.core.first.call(null,s__202805__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),my_sketch$core$setup_$_iter__202802_$_iter__202804.call(null,cljs.core.rest.call(null,s__202805__$2)));
}
} else {
return null;
}
break;
}
});})(s__202803__$1,x,xs__5205__auto__,temp__4657__auto__,artist,grid))
,null,null));
});})(s__202803__$1,x,xs__5205__auto__,temp__4657__auto__,artist,grid))
;
var fs__7599__auto__ = cljs.core.seq.call(null,iterys__7598__auto__.call(null,cljs.core.range.call(null,(quil.core.height.call(null) / my_sketch.drawing.half_width))));
if(fs__7599__auto__){
return cljs.core.concat.call(null,fs__7599__auto__,my_sketch$core$setup_$_iter__202802.call(null,cljs.core.rest.call(null,s__202803__$1)));
} else {
var G__202809 = cljs.core.rest.call(null,s__202803__$1);
s__202803__$1 = G__202809;
continue;
}
} else {
return null;
}
break;
}
});})(artist,grid))
,null,null));
});})(artist,grid))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,(quil.core.width.call(null) / my_sketch.drawing.tile_width)));
})()], null);
});
my_sketch.core.update_state = (function my_sketch$core$update_state(state){
if(cljs.core.truth_(cljs.core.not_empty.call(null,state.call(null,new cljs.core.Keyword(null,"dirty","dirty",729553281))))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"draw","draw",1358331674),state.call(null,new cljs.core.Keyword(null,"dirty","dirty",729553281))),new cljs.core.Keyword(null,"dirty","dirty",729553281),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"draw","draw",1358331674),cljs.core.PersistentVector.EMPTY);
}
});
my_sketch.core.draw_state = (function my_sketch$core$draw_state(state){
var map__202822 = state;
var map__202822__$1 = ((((!((map__202822 == null)))?((((map__202822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__202822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__202822):map__202822);
var dood = cljs.core.get.call(null,map__202822__$1,new cljs.core.Keyword(null,"dood","dood",-705138701));
var draw = cljs.core.get.call(null,map__202822__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var view = cljs.core.get.call(null,map__202822__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var artist = cljs.core.get.call(null,map__202822__$1,new cljs.core.Keyword(null,"artist","artist",152869709));
var dood_view = cljs.core.apply.call(null,my_sketch.drawing.draw_block,cljs.core.concat.call(null,dood,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,(3),(0)], null)));
var seq__202824 = cljs.core.seq.call(null,draw);
var chunk__202825 = null;
var count__202826 = (0);
var i__202827 = (0);
while(true){
if((i__202827 < count__202826)){
var vec__202828 = cljs.core._nth.call(null,chunk__202825,i__202827);
var x = cljs.core.nth.call(null,vec__202828,(0),null);
var y = cljs.core.nth.call(null,vec__202828,(1),null);
var tile_stack_202834 = view.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var dood_stack_202835 = ((cljs.core.contains_QMARK_.call(null,dood_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?dood_view.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)):false);
if(cljs.core.truth_(dood_stack_202835)){
my_sketch.drawing.draw_triangle_stacks.call(null,artist,x,y,tile_stack_202834,dood_stack_202835);
} else {
my_sketch.drawing.draw_triangle_stacks.call(null,artist,x,y,tile_stack_202834);
}

var G__202836 = seq__202824;
var G__202837 = chunk__202825;
var G__202838 = count__202826;
var G__202839 = (i__202827 + (1));
seq__202824 = G__202836;
chunk__202825 = G__202837;
count__202826 = G__202838;
i__202827 = G__202839;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__202824);
if(temp__4657__auto__){
var seq__202824__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__202824__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__202824__$1);
var G__202840 = cljs.core.chunk_rest.call(null,seq__202824__$1);
var G__202841 = c__7633__auto__;
var G__202842 = cljs.core.count.call(null,c__7633__auto__);
var G__202843 = (0);
seq__202824 = G__202840;
chunk__202825 = G__202841;
count__202826 = G__202842;
i__202827 = G__202843;
continue;
} else {
var vec__202831 = cljs.core.first.call(null,seq__202824__$1);
var x = cljs.core.nth.call(null,vec__202831,(0),null);
var y = cljs.core.nth.call(null,vec__202831,(1),null);
var tile_stack_202844 = view.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var dood_stack_202845 = ((cljs.core.contains_QMARK_.call(null,dood_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?dood_view.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)):false);
if(cljs.core.truth_(dood_stack_202845)){
my_sketch.drawing.draw_triangle_stacks.call(null,artist,x,y,tile_stack_202844,dood_stack_202845);
} else {
my_sketch.drawing.draw_triangle_stacks.call(null,artist,x,y,tile_stack_202844);
}

var G__202846 = cljs.core.next.call(null,seq__202824__$1);
var G__202847 = null;
var G__202848 = (0);
var G__202849 = (0);
seq__202824 = G__202846;
chunk__202825 = G__202847;
count__202826 = G__202848;
i__202827 = G__202849;
continue;
}
} else {
return null;
}
}
break;
}
});
my_sketch.core.move_dood = (function my_sketch$core$move_dood(state,dx,dy){
var vec__202853 = state.call(null,new cljs.core.Keyword(null,"dood","dood",-705138701));
var ix = cljs.core.nth.call(null,vec__202853,(0),null);
var iy = cljs.core.nth.call(null,vec__202853,(1),null);
var iz = cljs.core.nth.call(null,vec__202853,(2),null);
var nx = (ix + dx);
var ny = (iy + dy);
var e = (my_sketch.terrain.elevation.call(null,nx,ny,state.call(null,new cljs.core.Keyword(null,"grid","grid",402978600))) + (1));
if(((e <= (iz + (2)))) && ((e > (iz - (2)))) && ((e > (-1)))){
return cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"dood","dood",-705138701),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ix + dx),(iy + dy),e], null)),new cljs.core.Keyword(null,"dirty","dirty",729553281),((function (vec__202853,ix,iy,iz,nx,ny,e){
return (function (x){
return cljs.core.concat.call(null,x,my_sketch.drawing.triangles_for_block.call(null,ix,iy,iz),my_sketch.drawing.triangles_for_block.call(null,(ix + dx),(iy + dy),e));
});})(vec__202853,ix,iy,iz,nx,ny,e))
);
} else {
return state;
}
});
my_sketch.core.on_key_down = (function my_sketch$core$on_key_down(state,event){
var G__202857 = (((new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event).fqn:null);
switch (G__202857) {
case "w":
return my_sketch.core.move_dood.call(null,state,(0),(-1));

break;
case "up":
return my_sketch.core.move_dood.call(null,state,(0),(-1));

break;
case "s":
return my_sketch.core.move_dood.call(null,state,(0),(1));

break;
case "down":
return my_sketch.core.move_dood.call(null,state,(0),(1));

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
var G__202859__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.update_state,args);
};
var G__202859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__202860__i = 0, G__202860__a = new Array(arguments.length -  0);
while (G__202860__i < G__202860__a.length) {G__202860__a[G__202860__i] = arguments[G__202860__i + 0]; ++G__202860__i;}
  args = new cljs.core.IndexedSeq(G__202860__a,0);
} 
return G__202859__delegate.call(this,args);};
G__202859.cljs$lang$maxFixedArity = 0;
G__202859.cljs$lang$applyTo = (function (arglist__202861){
var args = cljs.core.seq(arglist__202861);
return G__202859__delegate(args);
});
G__202859.cljs$core$IFn$_invoke$arity$variadic = G__202859__delegate;
return G__202859;
})()
:my_sketch.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((80) * my_sketch.drawing.tile_width),((40) * my_sketch.drawing.tile_width)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,my_sketch.core.setup))?(function() { 
var G__202862__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.setup,args);
};
var G__202862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__202863__i = 0, G__202863__a = new Array(arguments.length -  0);
while (G__202863__i < G__202863__a.length) {G__202863__a[G__202863__i] = arguments[G__202863__i + 0]; ++G__202863__i;}
  args = new cljs.core.IndexedSeq(G__202863__a,0);
} 
return G__202862__delegate.call(this,args);};
G__202862.cljs$lang$maxFixedArity = 0;
G__202862.cljs$lang$applyTo = (function (arglist__202864){
var args = cljs.core.seq(arglist__202864);
return G__202862__delegate(args);
});
G__202862.cljs$core$IFn$_invoke$arity$variadic = G__202862__delegate;
return G__202862;
})()
:my_sketch.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,my_sketch.core.on_key_down))?(function() { 
var G__202865__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.on_key_down,args);
};
var G__202865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__202866__i = 0, G__202866__a = new Array(arguments.length -  0);
while (G__202866__i < G__202866__a.length) {G__202866__a[G__202866__i] = arguments[G__202866__i + 0]; ++G__202866__i;}
  args = new cljs.core.IndexedSeq(G__202866__a,0);
} 
return G__202865__delegate.call(this,args);};
G__202865.cljs$lang$maxFixedArity = 0;
G__202865.cljs$lang$applyTo = (function (arglist__202867){
var args = cljs.core.seq(arglist__202867);
return G__202865__delegate(args);
});
G__202865.cljs$core$IFn$_invoke$arity$variadic = G__202865__delegate;
return G__202865;
})()
:my_sketch.core.on_key_down),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,my_sketch.core.draw_state))?(function() { 
var G__202868__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.draw_state,args);
};
var G__202868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__202869__i = 0, G__202869__a = new Array(arguments.length -  0);
while (G__202869__i < G__202869__a.length) {G__202869__a[G__202869__i] = arguments[G__202869__i + 0]; ++G__202869__i;}
  args = new cljs.core.IndexedSeq(G__202869__a,0);
} 
return G__202868__delegate.call(this,args);};
G__202868.cljs$lang$maxFixedArity = 0;
G__202868.cljs$lang$applyTo = (function (arglist__202870){
var args = cljs.core.seq(arglist__202870);
return G__202868__delegate(args);
});
G__202868.cljs$core$IFn$_invoke$arity$variadic = G__202868__delegate;
return G__202868;
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
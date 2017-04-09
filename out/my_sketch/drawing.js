// Compiled by ClojureScript 1.9.473 {}
goog.provide('my_sketch.drawing');
goog.require('cljs.core');
goog.require('quil.core');
my_sketch.drawing.n_colors = (16);
my_sketch.drawing.tile_width = (16);
my_sketch.drawing.half_width = (my_sketch.drawing.tile_width / (2));
my_sketch.drawing.make_left_triangle = (function my_sketch$drawing$make_left_triangle(width,color,img){
var seq__202162 = cljs.core.seq.call(null,cljs.core.range.call(null,width));
var chunk__202167 = null;
var count__202168 = (0);
var i__202169 = (0);
while(true){
if((i__202169 < count__202168)){
var x = cljs.core._nth.call(null,chunk__202167,i__202169);
var seq__202170_202174 = cljs.core.seq.call(null,cljs.core.range.call(null,width));
var chunk__202171_202175 = null;
var count__202172_202176 = (0);
var i__202173_202177 = (0);
while(true){
if((i__202173_202177 < count__202172_202176)){
var y_202178 = cljs.core._nth.call(null,chunk__202171_202175,i__202173_202177);
var hw_202179 = (width / (2));
var lly_202180 = (hw_202179 + (hw_202179 * (x / width)));
var uly_202181 = (hw_202179 - (hw_202179 * (x / width)));
if(((y_202178 <= lly_202180)) && ((y_202178 >= uly_202181))){
quil.core.set_pixel.call(null,img,x,y_202178,color);
} else {
}

var G__202182 = seq__202170_202174;
var G__202183 = chunk__202171_202175;
var G__202184 = count__202172_202176;
var G__202185 = (i__202173_202177 + (1));
seq__202170_202174 = G__202182;
chunk__202171_202175 = G__202183;
count__202172_202176 = G__202184;
i__202173_202177 = G__202185;
continue;
} else {
var temp__4657__auto___202186 = cljs.core.seq.call(null,seq__202170_202174);
if(temp__4657__auto___202186){
var seq__202170_202187__$1 = temp__4657__auto___202186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__202170_202187__$1)){
var c__7633__auto___202188 = cljs.core.chunk_first.call(null,seq__202170_202187__$1);
var G__202189 = cljs.core.chunk_rest.call(null,seq__202170_202187__$1);
var G__202190 = c__7633__auto___202188;
var G__202191 = cljs.core.count.call(null,c__7633__auto___202188);
var G__202192 = (0);
seq__202170_202174 = G__202189;
chunk__202171_202175 = G__202190;
count__202172_202176 = G__202191;
i__202173_202177 = G__202192;
continue;
} else {
var y_202193 = cljs.core.first.call(null,seq__202170_202187__$1);
var hw_202194 = (width / (2));
var lly_202195 = (hw_202194 + (hw_202194 * (x / width)));
var uly_202196 = (hw_202194 - (hw_202194 * (x / width)));
if(((y_202193 <= lly_202195)) && ((y_202193 >= uly_202196))){
quil.core.set_pixel.call(null,img,x,y_202193,color);
} else {
}

var G__202197 = cljs.core.next.call(null,seq__202170_202187__$1);
var G__202198 = null;
var G__202199 = (0);
var G__202200 = (0);
seq__202170_202174 = G__202197;
chunk__202171_202175 = G__202198;
count__202172_202176 = G__202199;
i__202173_202177 = G__202200;
continue;
}
} else {
}
}
break;
}

var G__202201 = seq__202162;
var G__202202 = chunk__202167;
var G__202203 = count__202168;
var G__202204 = (i__202169 + (1));
seq__202162 = G__202201;
chunk__202167 = G__202202;
count__202168 = G__202203;
i__202169 = G__202204;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__202162);
if(temp__4657__auto__){
var seq__202162__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__202162__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__202162__$1);
var G__202205 = cljs.core.chunk_rest.call(null,seq__202162__$1);
var G__202206 = c__7633__auto__;
var G__202207 = cljs.core.count.call(null,c__7633__auto__);
var G__202208 = (0);
seq__202162 = G__202205;
chunk__202167 = G__202206;
count__202168 = G__202207;
i__202169 = G__202208;
continue;
} else {
var x = cljs.core.first.call(null,seq__202162__$1);
var seq__202163_202209 = cljs.core.seq.call(null,cljs.core.range.call(null,width));
var chunk__202164_202210 = null;
var count__202165_202211 = (0);
var i__202166_202212 = (0);
while(true){
if((i__202166_202212 < count__202165_202211)){
var y_202213 = cljs.core._nth.call(null,chunk__202164_202210,i__202166_202212);
var hw_202214 = (width / (2));
var lly_202215 = (hw_202214 + (hw_202214 * (x / width)));
var uly_202216 = (hw_202214 - (hw_202214 * (x / width)));
if(((y_202213 <= lly_202215)) && ((y_202213 >= uly_202216))){
quil.core.set_pixel.call(null,img,x,y_202213,color);
} else {
}

var G__202217 = seq__202163_202209;
var G__202218 = chunk__202164_202210;
var G__202219 = count__202165_202211;
var G__202220 = (i__202166_202212 + (1));
seq__202163_202209 = G__202217;
chunk__202164_202210 = G__202218;
count__202165_202211 = G__202219;
i__202166_202212 = G__202220;
continue;
} else {
var temp__4657__auto___202221__$1 = cljs.core.seq.call(null,seq__202163_202209);
if(temp__4657__auto___202221__$1){
var seq__202163_202222__$1 = temp__4657__auto___202221__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__202163_202222__$1)){
var c__7633__auto___202223 = cljs.core.chunk_first.call(null,seq__202163_202222__$1);
var G__202224 = cljs.core.chunk_rest.call(null,seq__202163_202222__$1);
var G__202225 = c__7633__auto___202223;
var G__202226 = cljs.core.count.call(null,c__7633__auto___202223);
var G__202227 = (0);
seq__202163_202209 = G__202224;
chunk__202164_202210 = G__202225;
count__202165_202211 = G__202226;
i__202166_202212 = G__202227;
continue;
} else {
var y_202228 = cljs.core.first.call(null,seq__202163_202222__$1);
var hw_202229 = (width / (2));
var lly_202230 = (hw_202229 + (hw_202229 * (x / width)));
var uly_202231 = (hw_202229 - (hw_202229 * (x / width)));
if(((y_202228 <= lly_202230)) && ((y_202228 >= uly_202231))){
quil.core.set_pixel.call(null,img,x,y_202228,color);
} else {
}

var G__202232 = cljs.core.next.call(null,seq__202163_202222__$1);
var G__202233 = null;
var G__202234 = (0);
var G__202235 = (0);
seq__202163_202209 = G__202232;
chunk__202164_202210 = G__202233;
count__202165_202211 = G__202234;
i__202166_202212 = G__202235;
continue;
}
} else {
}
}
break;
}

var G__202236 = cljs.core.next.call(null,seq__202162__$1);
var G__202237 = null;
var G__202238 = (0);
var G__202239 = (0);
seq__202162 = G__202236;
chunk__202167 = G__202237;
count__202168 = G__202238;
i__202169 = G__202239;
continue;
}
} else {
return null;
}
}
break;
}
});
my_sketch.drawing.make_right_triangle = (function my_sketch$drawing$make_right_triangle(width,color,img){
var seq__202252 = cljs.core.seq.call(null,cljs.core.range.call(null,width));
var chunk__202257 = null;
var count__202258 = (0);
var i__202259 = (0);
while(true){
if((i__202259 < count__202258)){
var x = cljs.core._nth.call(null,chunk__202257,i__202259);
var seq__202260_202264 = cljs.core.seq.call(null,cljs.core.range.call(null,width));
var chunk__202261_202265 = null;
var count__202262_202266 = (0);
var i__202263_202267 = (0);
while(true){
if((i__202263_202267 < count__202262_202266)){
var y_202268 = cljs.core._nth.call(null,chunk__202261_202265,i__202263_202267);
var hw_202269 = (width / (2));
var lly_202270 = (width - (hw_202269 * (x / width)));
var uly_202271 = (hw_202269 * (x / width));
if(((y_202268 <= lly_202270)) && ((y_202268 >= uly_202271))){
quil.core.set_pixel.call(null,img,x,y_202268,color);
} else {
}

var G__202272 = seq__202260_202264;
var G__202273 = chunk__202261_202265;
var G__202274 = count__202262_202266;
var G__202275 = (i__202263_202267 + (1));
seq__202260_202264 = G__202272;
chunk__202261_202265 = G__202273;
count__202262_202266 = G__202274;
i__202263_202267 = G__202275;
continue;
} else {
var temp__4657__auto___202276 = cljs.core.seq.call(null,seq__202260_202264);
if(temp__4657__auto___202276){
var seq__202260_202277__$1 = temp__4657__auto___202276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__202260_202277__$1)){
var c__7633__auto___202278 = cljs.core.chunk_first.call(null,seq__202260_202277__$1);
var G__202279 = cljs.core.chunk_rest.call(null,seq__202260_202277__$1);
var G__202280 = c__7633__auto___202278;
var G__202281 = cljs.core.count.call(null,c__7633__auto___202278);
var G__202282 = (0);
seq__202260_202264 = G__202279;
chunk__202261_202265 = G__202280;
count__202262_202266 = G__202281;
i__202263_202267 = G__202282;
continue;
} else {
var y_202283 = cljs.core.first.call(null,seq__202260_202277__$1);
var hw_202284 = (width / (2));
var lly_202285 = (width - (hw_202284 * (x / width)));
var uly_202286 = (hw_202284 * (x / width));
if(((y_202283 <= lly_202285)) && ((y_202283 >= uly_202286))){
quil.core.set_pixel.call(null,img,x,y_202283,color);
} else {
}

var G__202287 = cljs.core.next.call(null,seq__202260_202277__$1);
var G__202288 = null;
var G__202289 = (0);
var G__202290 = (0);
seq__202260_202264 = G__202287;
chunk__202261_202265 = G__202288;
count__202262_202266 = G__202289;
i__202263_202267 = G__202290;
continue;
}
} else {
}
}
break;
}

var G__202291 = seq__202252;
var G__202292 = chunk__202257;
var G__202293 = count__202258;
var G__202294 = (i__202259 + (1));
seq__202252 = G__202291;
chunk__202257 = G__202292;
count__202258 = G__202293;
i__202259 = G__202294;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__202252);
if(temp__4657__auto__){
var seq__202252__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__202252__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__202252__$1);
var G__202295 = cljs.core.chunk_rest.call(null,seq__202252__$1);
var G__202296 = c__7633__auto__;
var G__202297 = cljs.core.count.call(null,c__7633__auto__);
var G__202298 = (0);
seq__202252 = G__202295;
chunk__202257 = G__202296;
count__202258 = G__202297;
i__202259 = G__202298;
continue;
} else {
var x = cljs.core.first.call(null,seq__202252__$1);
var seq__202253_202299 = cljs.core.seq.call(null,cljs.core.range.call(null,width));
var chunk__202254_202300 = null;
var count__202255_202301 = (0);
var i__202256_202302 = (0);
while(true){
if((i__202256_202302 < count__202255_202301)){
var y_202303 = cljs.core._nth.call(null,chunk__202254_202300,i__202256_202302);
var hw_202304 = (width / (2));
var lly_202305 = (width - (hw_202304 * (x / width)));
var uly_202306 = (hw_202304 * (x / width));
if(((y_202303 <= lly_202305)) && ((y_202303 >= uly_202306))){
quil.core.set_pixel.call(null,img,x,y_202303,color);
} else {
}

var G__202307 = seq__202253_202299;
var G__202308 = chunk__202254_202300;
var G__202309 = count__202255_202301;
var G__202310 = (i__202256_202302 + (1));
seq__202253_202299 = G__202307;
chunk__202254_202300 = G__202308;
count__202255_202301 = G__202309;
i__202256_202302 = G__202310;
continue;
} else {
var temp__4657__auto___202311__$1 = cljs.core.seq.call(null,seq__202253_202299);
if(temp__4657__auto___202311__$1){
var seq__202253_202312__$1 = temp__4657__auto___202311__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__202253_202312__$1)){
var c__7633__auto___202313 = cljs.core.chunk_first.call(null,seq__202253_202312__$1);
var G__202314 = cljs.core.chunk_rest.call(null,seq__202253_202312__$1);
var G__202315 = c__7633__auto___202313;
var G__202316 = cljs.core.count.call(null,c__7633__auto___202313);
var G__202317 = (0);
seq__202253_202299 = G__202314;
chunk__202254_202300 = G__202315;
count__202255_202301 = G__202316;
i__202256_202302 = G__202317;
continue;
} else {
var y_202318 = cljs.core.first.call(null,seq__202253_202312__$1);
var hw_202319 = (width / (2));
var lly_202320 = (width - (hw_202319 * (x / width)));
var uly_202321 = (hw_202319 * (x / width));
if(((y_202318 <= lly_202320)) && ((y_202318 >= uly_202321))){
quil.core.set_pixel.call(null,img,x,y_202318,color);
} else {
}

var G__202322 = cljs.core.next.call(null,seq__202253_202312__$1);
var G__202323 = null;
var G__202324 = (0);
var G__202325 = (0);
seq__202253_202299 = G__202322;
chunk__202254_202300 = G__202323;
count__202255_202301 = G__202324;
i__202256_202302 = G__202325;
continue;
}
} else {
}
}
break;
}

var G__202326 = cljs.core.next.call(null,seq__202252__$1);
var G__202327 = null;
var G__202328 = (0);
var G__202329 = (0);
seq__202252 = G__202326;
chunk__202257 = G__202327;
count__202258 = G__202328;
i__202259 = G__202329;
continue;
}
} else {
return null;
}
}
break;
}
});
my_sketch.drawing.make_triangle = (function my_sketch$drawing$make_triangle(color,direction){
var img = quil.core.create_image.call(null,my_sketch.drawing.tile_width,my_sketch.drawing.tile_width,new cljs.core.Keyword(null,"argb","argb",633844107));
var color__$1 = cljs.core.apply.call(null,quil.core.color,color);
var G__202331_202332 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__202331_202332) {
case "left":
my_sketch.drawing.make_left_triangle.call(null,my_sketch.drawing.tile_width,color__$1,img);

break;
case "right":
my_sketch.drawing.make_right_triangle.call(null,my_sketch.drawing.tile_width,color__$1,img);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(direction)].join('')));

}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [img,true], null);
});
my_sketch.drawing.make_artist = (function my_sketch$drawing$make_artist(){
var tint = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.call(null) * (256)),(cljs.core.rand.call(null) * (256)),(cljs.core.rand.call(null) * (256))], null);
var colors = (function (){var iter__7602__auto__ = ((function (tint){
return (function my_sketch$drawing$make_artist_$_iter__202346(s__202347){
return (new cljs.core.LazySeq(null,((function (tint){
return (function (){
var s__202347__$1 = s__202347;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__202347__$1);
if(temp__4657__auto__){
var s__202347__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__202347__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__202347__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__202349 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__202348 = (0);
while(true){
if((i__202348 < size__7601__auto__)){
var i = cljs.core._nth.call(null,c__7600__auto__,i__202348);
cljs.core.chunk_append.call(null,b__202349,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core.nth.call(null,tint,(0)) / my_sketch.drawing.n_colors) * i) | (0)),(((cljs.core.nth.call(null,tint,(1)) / my_sketch.drawing.n_colors) * i) | (0)),(((cljs.core.nth.call(null,tint,(2)) / my_sketch.drawing.n_colors) * i) | (0)),(255)], null));

var G__202358 = (i__202348 + (1));
i__202348 = G__202358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__202349),my_sketch$drawing$make_artist_$_iter__202346.call(null,cljs.core.chunk_rest.call(null,s__202347__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__202349),null);
}
} else {
var i = cljs.core.first.call(null,s__202347__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core.nth.call(null,tint,(0)) / my_sketch.drawing.n_colors) * i) | (0)),(((cljs.core.nth.call(null,tint,(1)) / my_sketch.drawing.n_colors) * i) | (0)),(((cljs.core.nth.call(null,tint,(2)) / my_sketch.drawing.n_colors) * i) | (0)),(255)], null),my_sketch$drawing$make_artist_$_iter__202346.call(null,cljs.core.rest.call(null,s__202347__$2)));
}
} else {
return null;
}
break;
}
});})(tint))
,null,null));
});})(tint))
;
return iter__7602__auto__.call(null,cljs.core.range.call(null,my_sketch.drawing.n_colors));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colors","colors",1157174732),colors,new cljs.core.Keyword(null,"triangles","triangles",-1525417058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),(function (){var iter__7602__auto__ = ((function (tint,colors){
return (function my_sketch$drawing$make_artist_$_iter__202350(s__202351){
return (new cljs.core.LazySeq(null,((function (tint,colors){
return (function (){
var s__202351__$1 = s__202351;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__202351__$1);
if(temp__4657__auto__){
var s__202351__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__202351__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__202351__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__202353 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__202352 = (0);
while(true){
if((i__202352 < size__7601__auto__)){
var c = cljs.core._nth.call(null,c__7600__auto__,i__202352);
cljs.core.chunk_append.call(null,b__202353,my_sketch.drawing.make_triangle.call(null,c,new cljs.core.Keyword(null,"left","left",-399115937)));

var G__202359 = (i__202352 + (1));
i__202352 = G__202359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__202353),my_sketch$drawing$make_artist_$_iter__202350.call(null,cljs.core.chunk_rest.call(null,s__202351__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__202353),null);
}
} else {
var c = cljs.core.first.call(null,s__202351__$2);
return cljs.core.cons.call(null,my_sketch.drawing.make_triangle.call(null,c,new cljs.core.Keyword(null,"left","left",-399115937)),my_sketch$drawing$make_artist_$_iter__202350.call(null,cljs.core.rest.call(null,s__202351__$2)));
}
} else {
return null;
}
break;
}
});})(tint,colors))
,null,null));
});})(tint,colors))
;
return iter__7602__auto__.call(null,colors);
})(),new cljs.core.Keyword(null,"right","right",-452581833),(function (){var iter__7602__auto__ = ((function (tint,colors){
return (function my_sketch$drawing$make_artist_$_iter__202354(s__202355){
return (new cljs.core.LazySeq(null,((function (tint,colors){
return (function (){
var s__202355__$1 = s__202355;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__202355__$1);
if(temp__4657__auto__){
var s__202355__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__202355__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__202355__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__202357 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__202356 = (0);
while(true){
if((i__202356 < size__7601__auto__)){
var c = cljs.core._nth.call(null,c__7600__auto__,i__202356);
cljs.core.chunk_append.call(null,b__202357,my_sketch.drawing.make_triangle.call(null,c,new cljs.core.Keyword(null,"right","right",-452581833)));

var G__202360 = (i__202356 + (1));
i__202356 = G__202360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__202357),my_sketch$drawing$make_artist_$_iter__202354.call(null,cljs.core.chunk_rest.call(null,s__202355__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__202357),null);
}
} else {
var c = cljs.core.first.call(null,s__202355__$2);
return cljs.core.cons.call(null,my_sketch.drawing.make_triangle.call(null,c,new cljs.core.Keyword(null,"right","right",-452581833)),my_sketch$drawing$make_artist_$_iter__202354.call(null,cljs.core.rest.call(null,s__202355__$2)));
}
} else {
return null;
}
break;
}
});})(tint,colors))
,null,null));
});})(tint,colors))
;
return iter__7602__auto__.call(null,colors);
})()], null)], null);
});
my_sketch.drawing.color = (function my_sketch$drawing$color(artist,idx){
return cljs.core.nth.call(null,artist.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732)),idx);
});
my_sketch.drawing.colors = (function my_sketch$drawing$colors(artist){
return artist.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732));
});
my_sketch.drawing.triangles = (function my_sketch$drawing$triangles(artist){
return artist.call(null,new cljs.core.Keyword(null,"triangles","triangles",-1525417058));
});
my_sketch.drawing.draw_triangle = (function my_sketch$drawing$draw_triangle(x,y,img){
var xx = ((x * my_sketch.drawing.tile_width) + ((cljs.core.odd_QMARK_.call(null,y))?my_sketch.drawing.tile_width:(0)));
var yy = (y * my_sketch.drawing.half_width);
return quil.core.image.call(null,img,xx,yy);
});
my_sketch.drawing.draw_triangle_stacks = (function my_sketch$drawing$draw_triangle_stacks(var_args){
var args__7934__auto__ = [];
var len__7927__auto___202371 = arguments.length;
var i__7928__auto___202372 = (0);
while(true){
if((i__7928__auto___202372 < len__7927__auto___202371)){
args__7934__auto__.push((arguments[i__7928__auto___202372]));

var G__202373 = (i__7928__auto___202372 + (1));
i__7928__auto___202372 = G__202373;
continue;
} else {
}
break;
}

var argseq__7935__auto__ = ((((3) < args__7934__auto__.length))?(new cljs.core.IndexedSeq(args__7934__auto__.slice((3)),(0),null)):null);
return my_sketch.drawing.draw_triangle_stacks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7935__auto__);
});

my_sketch.drawing.draw_triangle_stacks.cljs$core$IFn$_invoke$arity$variadic = (function (artist,x,y,stacks){
var stacks__$1 = cljs.core.map.call(null,cljs.core.seq,stacks);
while(true){
var current = cljs.core.map.call(null,cljs.core.first,stacks__$1);
var idx = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (stacks__$1,current){
return (function (i){
return cljs.core.nth.call(null,cljs.core.nth.call(null,current,i),(2));
});})(stacks__$1,current))
], null),cljs.core.range.call(null,cljs.core.count.call(null,current))));
var vec__202365 = cljs.core.nth.call(null,current,idx);
var t1n = cljs.core.nth.call(null,vec__202365,(0),null);
var t1i = cljs.core.nth.call(null,vec__202365,(1),null);
var _ = cljs.core.nth.call(null,vec__202365,(2),null);
var vec__202368 = cljs.core.nth.call(null,my_sketch.drawing.triangles.call(null,artist).call(null,t1n),t1i);
var img = cljs.core.nth.call(null,vec__202368,(0),null);
var is_opaque = cljs.core.nth.call(null,vec__202368,(1),null);
my_sketch.drawing.draw_triangle.call(null,x,y,img);

if(cljs.core.not.call(null,is_opaque)){
var G__202374 = cljs.core.map_indexed.call(null,((function (stacks__$1,current,idx,vec__202365,t1n,t1i,_,vec__202368,img,is_opaque){
return (function (i,s){
if(cljs.core._EQ_.call(null,i,idx)){
return cljs.core.next.call(null,s);
} else {
return s;
}
});})(stacks__$1,current,idx,vec__202365,t1n,t1i,_,vec__202368,img,is_opaque))
,stacks__$1);
stacks__$1 = G__202374;
continue;
} else {
return null;
}
break;
}
});

my_sketch.drawing.draw_triangle_stacks.cljs$lang$maxFixedArity = (3);

my_sketch.drawing.draw_triangle_stacks.cljs$lang$applyTo = (function (seq202361){
var G__202362 = cljs.core.first.call(null,seq202361);
var seq202361__$1 = cljs.core.next.call(null,seq202361);
var G__202363 = cljs.core.first.call(null,seq202361__$1);
var seq202361__$2 = cljs.core.next.call(null,seq202361__$1);
var G__202364 = cljs.core.first.call(null,seq202361__$2);
var seq202361__$3 = cljs.core.next.call(null,seq202361__$2);
return my_sketch.drawing.draw_triangle_stacks.cljs$core$IFn$_invoke$arity$variadic(G__202362,G__202363,G__202364,seq202361__$3);
});

my_sketch.drawing.map_to_screen = (function my_sketch$drawing$map_to_screen(x,y,z){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - y) + (30)),((x + y) - (z * (2)))], null);
});
my_sketch.drawing.draw_block = (function my_sketch$drawing$draw_block(mx,my,mz,view,color_offset,layer){
var vec__202378 = my_sketch.drawing.map_to_screen.call(null,mx,my,mz);
var x = cljs.core.nth.call(null,vec__202378,(0),null);
var y = cljs.core.nth.call(null,vec__202378,(1),null);
var idx = (((mx + my) + mz) + layer);
var color_offset__$1 = (color_offset + (mz * (3)));
return cljs.core.reduce_kv.call(null,((function (vec__202378,x,y,idx,color_offset__$1){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,cljs.core.vec.call(null,cljs.core.concat.call(null,v,m.call(null,k))));
});})(vec__202378,x,y,idx,color_offset__$1))
,view,((cljs.core.even_QMARK_.call(null,x))?cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),((3) + color_offset__$1),idx], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),((3) + color_offset__$1),idx], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),((2) + color_offset__$1),idx], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (2))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),((2) + color_offset__$1),idx], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),((1) + color_offset__$1),idx], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (2))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),((1) + color_offset__$1),idx], null)], null)]):(function (){var x__$1 = (x - (1));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),((3) + color_offset__$1),idx], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x__$1 + (1)),y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),((3) + color_offset__$1),idx], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x__$1 + (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),((2) + color_offset__$1),idx], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,(y + (2))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),((2) + color_offset__$1),idx], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x__$1 + (2)),(y + (1))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),((1) + color_offset__$1),idx], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x__$1 + (1)),(y + (2))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),((1) + color_offset__$1),idx], null)], null)]);
})()));
});
my_sketch.drawing.triangles_for_block = (function my_sketch$drawing$triangles_for_block(mx,my,mz){
var vec__202384 = my_sketch.drawing.map_to_screen.call(null,mx,my,mz);
var x = cljs.core.nth.call(null,vec__202384,(0),null);
var y = cljs.core.nth.call(null,vec__202384,(1),null);
if(cljs.core.even_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (2))], null)], null);
} else {
var x__$1 = (x - (1));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x__$1 + (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x__$1 + (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,(y + (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x__$1 + (2)),(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x__$1 + (1)),(y + (2))], null)], null);
}
});
my_sketch.drawing.make_view = (function my_sketch$drawing$make_view(grid){
var view = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7602__auto__ = (function my_sketch$drawing$make_view_$_iter__202414(s__202415){
return (new cljs.core.LazySeq(null,(function (){
var s__202415__$1 = s__202415;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__202415__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7598__auto__ = ((function (s__202415__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function my_sketch$drawing$make_view_$_iter__202414_$_iter__202416(s__202417){
return (new cljs.core.LazySeq(null,((function (s__202415__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__202417__$1 = s__202417;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__202417__$1);
if(temp__4657__auto____$1){
var s__202417__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__202417__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__202417__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__202419 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__202418 = (0);
while(true){
if((i__202418 < size__7601__auto__)){
var y = cljs.core._nth.call(null,c__7600__auto__,i__202418);
cljs.core.chunk_append.call(null,b__202419,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.even_QMARK_.call(null,x))?new cljs.core.Keyword(null,"left","left",-399115937):new cljs.core.Keyword(null,"right","right",-452581833)),(0),((0) - Infinity)], null)], null)], null));

var G__202441 = (i__202418 + (1));
i__202418 = G__202441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__202419),my_sketch$drawing$make_view_$_iter__202414_$_iter__202416.call(null,cljs.core.chunk_rest.call(null,s__202417__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__202419),null);
}
} else {
var y = cljs.core.first.call(null,s__202417__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.even_QMARK_.call(null,x))?new cljs.core.Keyword(null,"left","left",-399115937):new cljs.core.Keyword(null,"right","right",-452581833)),(0),((0) - Infinity)], null)], null)], null),my_sketch$drawing$make_view_$_iter__202414_$_iter__202416.call(null,cljs.core.rest.call(null,s__202417__$2)));
}
} else {
return null;
}
break;
}
});})(s__202415__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__202415__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__7599__auto__ = cljs.core.seq.call(null,iterys__7598__auto__.call(null,cljs.core.range.call(null,(quil.core.height.call(null) / my_sketch.drawing.half_width))));
if(fs__7599__auto__){
return cljs.core.concat.call(null,fs__7599__auto__,my_sketch$drawing$make_view_$_iter__202414.call(null,cljs.core.rest.call(null,s__202415__$1)));
} else {
var G__202442 = cljs.core.rest.call(null,s__202415__$1);
s__202415__$1 = G__202442;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7602__auto__.call(null,cljs.core.range.call(null,(quil.core.width.call(null) / my_sketch.drawing.tile_width)));
})());
return cljs.core.reduce.call(null,((function (view){
return (function (view__$1,p__202420){
var vec__202421 = p__202420;
var vec__202424 = cljs.core.nth.call(null,vec__202421,(0),null);
var x = cljs.core.nth.call(null,vec__202424,(0),null);
var y = cljs.core.nth.call(null,vec__202424,(1),null);
var z = cljs.core.nth.call(null,vec__202424,(2),null);
var b = cljs.core.nth.call(null,vec__202421,(1),null);
if(cljs.core._EQ_.call(null,b,new cljs.core.Keyword(null,"block","block",664686210))){
return my_sketch.drawing.draw_block.call(null,x,y,z,view__$1,(0),(0));
} else {
return view__$1;
}
});})(view))
,view,cljs.core.sort.call(null,((function (view){
return (function (p__202427,p__202428){
var vec__202429 = p__202427;
var vec__202432 = cljs.core.nth.call(null,vec__202429,(0),null);
var x = cljs.core.nth.call(null,vec__202432,(0),null);
var y = cljs.core.nth.call(null,vec__202432,(1),null);
var z = cljs.core.nth.call(null,vec__202432,(2),null);
var _ = cljs.core.nth.call(null,vec__202429,(1),null);
var vec__202435 = p__202428;
var vec__202438 = cljs.core.nth.call(null,vec__202435,(0),null);
var xx = cljs.core.nth.call(null,vec__202438,(0),null);
var yy = cljs.core.nth.call(null,vec__202438,(1),null);
var zz = cljs.core.nth.call(null,vec__202438,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__202435,(1),null);
return (((x + y) + z) < ((xx + yy) + zz));
});})(view))
,grid));
});

//# sourceMappingURL=drawing.js.map
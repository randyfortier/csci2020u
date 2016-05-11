// Compiled by ClojureScript 1.7.170 {}
goog.provide('voxel_cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('voxel_cljs.leap');
voxel_cljs.core.PI = Math.PI;
voxel_cljs.core.voxelconf = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ld","ld",-2058100314),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"lz","lz",-916365033),new cljs.core.Keyword(null,"lx","lx",-888609224),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"ly","ly",-578333892),new cljs.core.Keyword(null,"rz","rz",386461181),new cljs.core.Keyword(null,"ry","ry",-334598563)],[(voxel_cljs.core.PI / (2)),(voxel_cljs.core.PI / (40)),(950),(0),(100),(-100),(- (voxel_cljs.core.PI / (4))),(100),(- (voxel_cljs.core.PI / (60))),(voxel_cljs.core.PI / (50))]));
voxel_cljs.core.size = (30);
voxel_cljs.core.make_voxel = (function voxel_cljs$core$make_voxel(triple,mesh){
var vec__135048 = triple;
var x = cljs.core.nth.call(null,vec__135048,(0),null);
var y = cljs.core.nth.call(null,vec__135048,(1),null);
var z = cljs.core.nth.call(null,vec__135048,(2),null);
return (new voxelcss.Voxel((voxel_cljs.core.size * x),(voxel_cljs.core.size * y),(voxel_cljs.core.size * z),voxel_cljs.core.size,{"mesh": mesh}));
});
voxel_cljs.core.C = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list((0),(0),(0)),cljs.core.list((0),(0),(-1)),cljs.core.list((0),(0),(1)),cljs.core.list((1),(0),(-1)),cljs.core.list((2),(0),(-1)),cljs.core.list((3),(0),(-1)),cljs.core.list((4),(0),(0)),cljs.core.list((4),(0),(-1)),cljs.core.list((4),(0),(1))], null);
voxel_cljs.core.S = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list((0),(0),(0)),cljs.core.list((0),(0),(-1)),cljs.core.list((0),(0),(1)),cljs.core.list((1),(0),(1)),cljs.core.list((2),(0),(-1)),cljs.core.list((2),(0),(0)),cljs.core.list((2),(0),(1)),cljs.core.list((3),(0),(-1)),cljs.core.list((4),(0),(0)),cljs.core.list((4),(0),(-1)),cljs.core.list((4),(0),(1))], null);
voxel_cljs.core.DOT = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list((0),(0),(0))], null);
voxel_cljs.core.U = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list((0),(0),(0)),cljs.core.list((0),(0),(-1)),cljs.core.list((0),(0),(1)),cljs.core.list((1),(0),(-1)),cljs.core.list((1),(0),(1)),cljs.core.list((2),(0),(-1)),cljs.core.list((2),(0),(1))], null);
voxel_cljs.core.O = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list((0),(0),(0)),cljs.core.list((0),(0),(-1)),cljs.core.list((0),(0),(1)),cljs.core.list((1),(0),(-1)),cljs.core.list((1),(0),(1)),cljs.core.list((2),(0),(-1)),cljs.core.list((2),(0),(1)),cljs.core.list((2),(0),(0))], null);
voxel_cljs.core.I = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list((0),(0),(0)),cljs.core.list((1),(0),(0)),cljs.core.list((2),(0),(0))], null);
voxel_cljs.core.T = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list((0),(0),(0)),cljs.core.list((1),(0),(0)),cljs.core.list((2),(0),(0)),cljs.core.list((2),(0),(-1)),cljs.core.list((2),(0),(1))], null);
voxel_cljs.core.origin = cljs.core.list((0),(0),(-9));
voxel_cljs.core.meshes = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [voxelcss.Meshes.water,voxelcss.Meshes.water,voxelcss.Meshes.dirt,voxelcss.Meshes.grass,voxelcss.Meshes.grass,voxelcss.Meshes.grass,voxelcss.Meshes.grass], null);
voxel_cljs.core.offset_letter = (function voxel_cljs$core$offset_letter(origin,i,letter){
var offset = ((4) * i);
var vec__135058 = origin;
var x0 = cljs.core.nth.call(null,vec__135058,(0),null);
var y0 = cljs.core.nth.call(null,vec__135058,(1),null);
var z0 = cljs.core.nth.call(null,vec__135058,(2),null);
var iter__5760__auto__ = ((function (offset,vec__135058,x0,y0,z0){
return (function voxel_cljs$core$offset_letter_$_iter__135059(s__135060){
return (new cljs.core.LazySeq(null,((function (offset,vec__135058,x0,y0,z0){
return (function (){
var s__135060__$1 = s__135060;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__135060__$1);
if(temp__4425__auto__){
var s__135060__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__135060__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__135060__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__135062 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__135061 = (0);
while(true){
if((i__135061 < size__5759__auto__)){
var vec__135065 = cljs.core._nth.call(null,c__5758__auto__,i__135061);
var x = cljs.core.nth.call(null,vec__135065,(0),null);
var y = cljs.core.nth.call(null,vec__135065,(1),null);
var z = cljs.core.nth.call(null,vec__135065,(2),null);
cljs.core.chunk_append.call(null,b__135062,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x0 + x),(y0 + y),((z0 + offset) + z)], null));

var G__135067 = (i__135061 + (1));
i__135061 = G__135067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__135062),voxel_cljs$core$offset_letter_$_iter__135059.call(null,cljs.core.chunk_rest.call(null,s__135060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__135062),null);
}
} else {
var vec__135066 = cljs.core.first.call(null,s__135060__$2);
var x = cljs.core.nth.call(null,vec__135066,(0),null);
var y = cljs.core.nth.call(null,vec__135066,(1),null);
var z = cljs.core.nth.call(null,vec__135066,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x0 + x),(y0 + y),((z0 + offset) + z)], null),voxel_cljs$core$offset_letter_$_iter__135059.call(null,cljs.core.rest.call(null,s__135060__$2)));
}
} else {
return null;
}
break;
}
});})(offset,vec__135058,x0,y0,z0))
,null,null));
});})(offset,vec__135058,x0,y0,z0))
;
return iter__5760__auto__.call(null,letter);
});
voxel_cljs.core.layout = (function voxel_cljs$core$layout(var_args){
var args__6053__auto__ = [];
var len__6046__auto___135072 = arguments.length;
var i__6047__auto___135073 = (0);
while(true){
if((i__6047__auto___135073 < len__6046__auto___135072)){
args__6053__auto__.push((arguments[i__6047__auto___135073]));

var G__135074 = (i__6047__auto___135073 + (1));
i__6047__auto___135073 = G__135074;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return voxel_cljs.core.layout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

voxel_cljs.core.layout.cljs$core$IFn$_invoke$arity$variadic = (function (offset,letters){
return cljs.core.map_indexed.call(null,(function (p1__135068_SHARP_,p2__135069_SHARP_){
return voxel_cljs.core.offset_letter.call(null,voxel_cljs.core.origin,p1__135068_SHARP_,p2__135069_SHARP_);
}),letters);
});

voxel_cljs.core.layout.cljs$lang$maxFixedArity = (1);

voxel_cljs.core.layout.cljs$lang$applyTo = (function (seq135070){
var G__135071 = cljs.core.first.call(null,seq135070);
var seq135070__$1 = cljs.core.next.call(null,seq135070);
return voxel_cljs.core.layout.cljs$core$IFn$_invoke$arity$variadic(G__135071,seq135070__$1);
});
voxel_cljs.core.uoit_voxels = (function voxel_cljs$core$uoit_voxels(){
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__5760__auto__ = (function voxel_cljs$core$uoit_voxels_$_iter__135084(s__135085){
return (new cljs.core.LazySeq(null,(function (){
var s__135085__$1 = s__135085;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__135085__$1);
if(temp__4425__auto__){
var s__135085__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__135085__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__135085__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__135087 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__135086 = (0);
while(true){
if((i__135086 < size__5759__auto__)){
var vec__135090 = cljs.core._nth.call(null,c__5758__auto__,i__135086);
var i = cljs.core.nth.call(null,vec__135090,(0),null);
var letter = cljs.core.nth.call(null,vec__135090,(1),null);
cljs.core.chunk_append.call(null,b__135087,cljs.core.map.call(null,((function (i__135086,vec__135090,i,letter,c__5758__auto__,size__5759__auto__,b__135087,s__135085__$2,temp__4425__auto__){
return (function (p1__135075_SHARP_){
return voxel_cljs.core.make_voxel.call(null,p1__135075_SHARP_,voxel_cljs.core.meshes.call(null,i));
});})(i__135086,vec__135090,i,letter,c__5758__auto__,size__5759__auto__,b__135087,s__135085__$2,temp__4425__auto__))
,letter));

var G__135092 = (i__135086 + (1));
i__135086 = G__135092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__135087),voxel_cljs$core$uoit_voxels_$_iter__135084.call(null,cljs.core.chunk_rest.call(null,s__135085__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__135087),null);
}
} else {
var vec__135091 = cljs.core.first.call(null,s__135085__$2);
var i = cljs.core.nth.call(null,vec__135091,(0),null);
var letter = cljs.core.nth.call(null,vec__135091,(1),null);
return cljs.core.cons.call(null,cljs.core.map.call(null,((function (vec__135091,i,letter,s__135085__$2,temp__4425__auto__){
return (function (p1__135075_SHARP_){
return voxel_cljs.core.make_voxel.call(null,p1__135075_SHARP_,voxel_cljs.core.meshes.call(null,i));
});})(vec__135091,i,letter,s__135085__$2,temp__4425__auto__))
,letter),voxel_cljs$core$uoit_voxels_$_iter__135084.call(null,cljs.core.rest.call(null,s__135085__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,voxel_cljs.core.layout.call(null,voxel_cljs.core.origin,voxel_cljs.core.C,voxel_cljs.core.S,voxel_cljs.core.DOT,voxel_cljs.core.U,voxel_cljs.core.O,voxel_cljs.core.I,voxel_cljs.core.T)));
})());
});
voxel_cljs.core.clear = (function voxel_cljs$core$clear(world){
var voxels = world.getVoxels();
var seq__135097 = cljs.core.seq.call(null,voxels);
var chunk__135098 = null;
var count__135099 = (0);
var i__135100 = (0);
while(true){
if((i__135100 < count__135099)){
var v = cljs.core._nth.call(null,chunk__135098,i__135100);
world.remove(v);

var G__135101 = seq__135097;
var G__135102 = chunk__135098;
var G__135103 = count__135099;
var G__135104 = (i__135100 + (1));
seq__135097 = G__135101;
chunk__135098 = G__135102;
count__135099 = G__135103;
i__135100 = G__135104;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__135097);
if(temp__4425__auto__){
var seq__135097__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__135097__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__135097__$1);
var G__135105 = cljs.core.chunk_rest.call(null,seq__135097__$1);
var G__135106 = c__5791__auto__;
var G__135107 = cljs.core.count.call(null,c__5791__auto__);
var G__135108 = (0);
seq__135097 = G__135105;
chunk__135098 = G__135106;
count__135099 = G__135107;
i__135100 = G__135108;
continue;
} else {
var v = cljs.core.first.call(null,seq__135097__$1);
world.remove(v);

var G__135109 = cljs.core.next.call(null,seq__135097__$1);
var G__135110 = null;
var G__135111 = (0);
var G__135112 = (0);
seq__135097 = G__135109;
chunk__135098 = G__135110;
count__135099 = G__135111;
i__135100 = G__135112;
continue;
}
} else {
return null;
}
}
break;
}
});
voxel_cljs.core.ticks = (function voxel_cljs$core$ticks(delay){
var c = cljs.core.async.chan.call(null);
var c__7486__auto___135165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___135165,c){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___135165,c){
return (function (state_135151){
var state_val_135152 = (state_135151[(1)]);
if((state_val_135152 === (1))){
var inst_135139 = (0);
var state_135151__$1 = (function (){var statearr_135153 = state_135151;
(statearr_135153[(7)] = inst_135139);

return statearr_135153;
})();
var statearr_135154_135166 = state_135151__$1;
(statearr_135154_135166[(2)] = null);

(statearr_135154_135166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135152 === (2))){
var inst_135141 = cljs.core.async.timeout.call(null,delay);
var state_135151__$1 = state_135151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135151__$1,(4),inst_135141);
} else {
if((state_val_135152 === (3))){
var inst_135149 = (state_135151[(2)]);
var state_135151__$1 = state_135151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135151__$1,inst_135149);
} else {
if((state_val_135152 === (4))){
var inst_135139 = (state_135151[(7)]);
var inst_135143 = (state_135151[(2)]);
var state_135151__$1 = (function (){var statearr_135155 = state_135151;
(statearr_135155[(8)] = inst_135143);

return statearr_135155;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135151__$1,(5),c,inst_135139);
} else {
if((state_val_135152 === (5))){
var inst_135139 = (state_135151[(7)]);
var inst_135145 = (state_135151[(2)]);
var inst_135146 = (inst_135139 + (1));
var inst_135139__$1 = inst_135146;
var state_135151__$1 = (function (){var statearr_135156 = state_135151;
(statearr_135156[(9)] = inst_135145);

(statearr_135156[(7)] = inst_135139__$1);

return statearr_135156;
})();
var statearr_135157_135167 = state_135151__$1;
(statearr_135157_135167[(2)] = null);

(statearr_135157_135167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__7486__auto___135165,c))
;
return ((function (switch__7374__auto__,c__7486__auto___135165,c){
return (function() {
var voxel_cljs$core$ticks_$_state_machine__7375__auto__ = null;
var voxel_cljs$core$ticks_$_state_machine__7375__auto____0 = (function (){
var statearr_135161 = [null,null,null,null,null,null,null,null,null,null];
(statearr_135161[(0)] = voxel_cljs$core$ticks_$_state_machine__7375__auto__);

(statearr_135161[(1)] = (1));

return statearr_135161;
});
var voxel_cljs$core$ticks_$_state_machine__7375__auto____1 = (function (state_135151){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_135151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e135162){if((e135162 instanceof Object)){
var ex__7378__auto__ = e135162;
var statearr_135163_135168 = state_135151;
(statearr_135163_135168[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135169 = state_135151;
state_135151 = G__135169;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
voxel_cljs$core$ticks_$_state_machine__7375__auto__ = function(state_135151){
switch(arguments.length){
case 0:
return voxel_cljs$core$ticks_$_state_machine__7375__auto____0.call(this);
case 1:
return voxel_cljs$core$ticks_$_state_machine__7375__auto____1.call(this,state_135151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
voxel_cljs$core$ticks_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = voxel_cljs$core$ticks_$_state_machine__7375__auto____0;
voxel_cljs$core$ticks_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = voxel_cljs$core$ticks_$_state_machine__7375__auto____1;
return voxel_cljs$core$ticks_$_state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___135165,c))
})();
var state__7488__auto__ = (function (){var statearr_135164 = f__7487__auto__.call(null);
(statearr_135164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___135165);

return statearr_135164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___135165,c))
);


return c;
});
voxel_cljs.core.init = (function voxel_cljs$core$init(c){
var scene = (new voxelcss.Scene());
var light = (new voxelcss.LightSource(new cljs.core.Keyword(null,"lx","lx",-888609224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,voxel_cljs.core.voxelconf)),new cljs.core.Keyword(null,"ly","ly",-578333892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,voxel_cljs.core.voxelconf)),new cljs.core.Keyword(null,"lz","lz",-916365033).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,voxel_cljs.core.voxelconf)),new cljs.core.Keyword(null,"ld","ld",-2058100314).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,voxel_cljs.core.voxelconf)),0.1,(1)));
var world = (new voxelcss.World(scene));
var body = document.body;
var G__135246_135322 = scene;
G__135246_135322.rotate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,voxel_cljs.core.voxelconf)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,voxel_cljs.core.voxelconf)),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,voxel_cljs.core.voxelconf)));

G__135246_135322.attach(body);

G__135246_135322.addLightSource(light);


voxel_cljs.core.clear.call(null,world);

var seq__135247_135323 = cljs.core.seq.call(null,voxel_cljs.core.uoit_voxels.call(null));
var chunk__135248_135324 = null;
var count__135249_135325 = (0);
var i__135250_135326 = (0);
while(true){
if((i__135250_135326 < count__135249_135325)){
var v_135327 = cljs.core._nth.call(null,chunk__135248_135324,i__135250_135326);
world.add(v_135327);

var G__135328 = seq__135247_135323;
var G__135329 = chunk__135248_135324;
var G__135330 = count__135249_135325;
var G__135331 = (i__135250_135326 + (1));
seq__135247_135323 = G__135328;
chunk__135248_135324 = G__135329;
count__135249_135325 = G__135330;
i__135250_135326 = G__135331;
continue;
} else {
var temp__4425__auto___135332 = cljs.core.seq.call(null,seq__135247_135323);
if(temp__4425__auto___135332){
var seq__135247_135333__$1 = temp__4425__auto___135332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__135247_135333__$1)){
var c__5791__auto___135334 = cljs.core.chunk_first.call(null,seq__135247_135333__$1);
var G__135335 = cljs.core.chunk_rest.call(null,seq__135247_135333__$1);
var G__135336 = c__5791__auto___135334;
var G__135337 = cljs.core.count.call(null,c__5791__auto___135334);
var G__135338 = (0);
seq__135247_135323 = G__135335;
chunk__135248_135324 = G__135336;
count__135249_135325 = G__135337;
i__135250_135326 = G__135338;
continue;
} else {
var v_135339 = cljs.core.first.call(null,seq__135247_135333__$1);
world.add(v_135339);

var G__135340 = cljs.core.next.call(null,seq__135247_135333__$1);
var G__135341 = null;
var G__135342 = (0);
var G__135343 = (0);
seq__135247_135323 = G__135340;
chunk__135248_135324 = G__135341;
count__135249_135325 = G__135342;
i__135250_135326 = G__135343;
continue;
}
} else {
}
}
break;
}

var c__7486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto__,scene,light,world,body){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto__,scene,light,world,body){
return (function (state_135297){
var state_val_135298 = (state_135297[(1)]);
if((state_val_135298 === (7))){
var inst_135270 = (state_135297[(2)]);
var state_135297__$1 = state_135297;
if(cljs.core.truth_(inst_135270)){
var statearr_135299_135344 = state_135297__$1;
(statearr_135299_135344[(1)] = (11));

} else {
var statearr_135300_135345 = state_135297__$1;
(statearr_135300_135345[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135298 === (1))){
var state_135297__$1 = state_135297;
var statearr_135301_135346 = state_135297__$1;
(statearr_135301_135346[(2)] = null);

(statearr_135301_135346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135298 === (4))){
var inst_135255 = (state_135297[(7)]);
var inst_135253 = (state_135297[(2)]);
var inst_135255__$1 = cljs.core.deref.call(null,voxel_cljs.core.voxelconf);
var inst_135257 = (inst_135255__$1 == null);
var inst_135258 = cljs.core.not.call(null,inst_135257);
var state_135297__$1 = (function (){var statearr_135302 = state_135297;
(statearr_135302[(7)] = inst_135255__$1);

(statearr_135302[(8)] = inst_135253);

return statearr_135302;
})();
if(inst_135258){
var statearr_135303_135347 = state_135297__$1;
(statearr_135303_135347[(1)] = (5));

} else {
var statearr_135304_135348 = state_135297__$1;
(statearr_135304_135348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135298 === (13))){
var inst_135275 = (state_135297[(2)]);
var inst_135276 = cljs.core.get.call(null,inst_135275,new cljs.core.Keyword(null,"rx","rx",1627208482));
var inst_135277 = cljs.core.get.call(null,inst_135275,new cljs.core.Keyword(null,"ry","ry",-334598563));
var inst_135278 = cljs.core.get.call(null,inst_135275,new cljs.core.Keyword(null,"rz","rz",386461181));
var inst_135279 = cljs.core.println.call(null,"doto scene",inst_135276,inst_135277,inst_135278);
var inst_135281 = scene.rotate(inst_135276,inst_135277,inst_135278);
var inst_135283 = cljs.core.deref.call(null,voxel_cljs.core.voxelconf);
var inst_135284 = new cljs.core.Keyword(null,"lx","lx",-888609224).cljs$core$IFn$_invoke$arity$1(inst_135283);
var inst_135285 = cljs.core.deref.call(null,voxel_cljs.core.voxelconf);
var inst_135286 = new cljs.core.Keyword(null,"ly","ly",-578333892).cljs$core$IFn$_invoke$arity$1(inst_135285);
var inst_135287 = cljs.core.deref.call(null,voxel_cljs.core.voxelconf);
var inst_135288 = new cljs.core.Keyword(null,"lz","lz",-916365033).cljs$core$IFn$_invoke$arity$1(inst_135287);
var inst_135289 = light.setPosition(inst_135284,inst_135286,inst_135288);
var inst_135290 = cljs.core.deref.call(null,voxel_cljs.core.voxelconf);
var inst_135291 = new cljs.core.Keyword(null,"ld","ld",-2058100314).cljs$core$IFn$_invoke$arity$1(inst_135290);
var inst_135292 = light.setTravelDistance(inst_135291);
var state_135297__$1 = (function (){var statearr_135305 = state_135297;
(statearr_135305[(9)] = inst_135289);

(statearr_135305[(10)] = inst_135279);

(statearr_135305[(11)] = inst_135281);

(statearr_135305[(12)] = inst_135292);

return statearr_135305;
})();
var statearr_135306_135349 = state_135297__$1;
(statearr_135306_135349[(2)] = null);

(statearr_135306_135349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135298 === (6))){
var state_135297__$1 = state_135297;
var statearr_135307_135350 = state_135297__$1;
(statearr_135307_135350[(2)] = false);

(statearr_135307_135350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135298 === (3))){
var inst_135295 = (state_135297[(2)]);
var state_135297__$1 = state_135297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135297__$1,inst_135295);
} else {
if((state_val_135298 === (12))){
var inst_135255 = (state_135297[(7)]);
var state_135297__$1 = state_135297;
var statearr_135308_135351 = state_135297__$1;
(statearr_135308_135351[(2)] = inst_135255);

(statearr_135308_135351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135298 === (2))){
var state_135297__$1 = state_135297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135297__$1,(4),c);
} else {
if((state_val_135298 === (11))){
var inst_135255 = (state_135297[(7)]);
var inst_135272 = cljs.core.apply.call(null,cljs.core.hash_map,inst_135255);
var state_135297__$1 = state_135297;
var statearr_135309_135352 = state_135297__$1;
(statearr_135309_135352[(2)] = inst_135272);

(statearr_135309_135352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135298 === (9))){
var state_135297__$1 = state_135297;
var statearr_135310_135353 = state_135297__$1;
(statearr_135310_135353[(2)] = false);

(statearr_135310_135353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135298 === (5))){
var inst_135255 = (state_135297[(7)]);
var inst_135260 = inst_135255.cljs$lang$protocol_mask$partition0$;
var inst_135261 = (inst_135260 & (64));
var inst_135262 = inst_135255.cljs$core$ISeq$;
var inst_135263 = (inst_135261) || (inst_135262);
var state_135297__$1 = state_135297;
if(cljs.core.truth_(inst_135263)){
var statearr_135311_135354 = state_135297__$1;
(statearr_135311_135354[(1)] = (8));

} else {
var statearr_135312_135355 = state_135297__$1;
(statearr_135312_135355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135298 === (10))){
var inst_135267 = (state_135297[(2)]);
var state_135297__$1 = state_135297;
var statearr_135313_135356 = state_135297__$1;
(statearr_135313_135356[(2)] = inst_135267);

(statearr_135313_135356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135298 === (8))){
var state_135297__$1 = state_135297;
var statearr_135314_135357 = state_135297__$1;
(statearr_135314_135357[(2)] = true);

(statearr_135314_135357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7486__auto__,scene,light,world,body))
;
return ((function (switch__7374__auto__,c__7486__auto__,scene,light,world,body){
return (function() {
var voxel_cljs$core$init_$_state_machine__7375__auto__ = null;
var voxel_cljs$core$init_$_state_machine__7375__auto____0 = (function (){
var statearr_135318 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_135318[(0)] = voxel_cljs$core$init_$_state_machine__7375__auto__);

(statearr_135318[(1)] = (1));

return statearr_135318;
});
var voxel_cljs$core$init_$_state_machine__7375__auto____1 = (function (state_135297){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_135297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e135319){if((e135319 instanceof Object)){
var ex__7378__auto__ = e135319;
var statearr_135320_135358 = state_135297;
(statearr_135320_135358[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135359 = state_135297;
state_135297 = G__135359;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
voxel_cljs$core$init_$_state_machine__7375__auto__ = function(state_135297){
switch(arguments.length){
case 0:
return voxel_cljs$core$init_$_state_machine__7375__auto____0.call(this);
case 1:
return voxel_cljs$core$init_$_state_machine__7375__auto____1.call(this,state_135297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
voxel_cljs$core$init_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = voxel_cljs$core$init_$_state_machine__7375__auto____0;
voxel_cljs$core$init_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = voxel_cljs$core$init_$_state_machine__7375__auto____1;
return voxel_cljs$core$init_$_state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto__,scene,light,world,body))
})();
var state__7488__auto__ = (function (){var statearr_135321 = f__7487__auto__.call(null);
(statearr_135321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto__);

return statearr_135321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto__,scene,light,world,body))
);

return c__7486__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
voxel_cljs.core.sin = (function voxel_cljs$core$sin(amp,freq,t){
return (amp * Math.sin((freq * t)));
});
voxel_cljs.core.get_rotation = (function voxel_cljs$core$get_rotation(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
});
voxel_cljs.core.get_lighting = (function voxel_cljs$core$get_lighting(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((0) + voxel_cljs.core.sin.call(null,(200),(voxel_cljs.core.PI / (20)),t)),(100),(100)], null);
});
voxel_cljs.core.get_lighting_d = (function voxel_cljs$core$get_lighting_d(t){
return (400);
});
voxel_cljs.core.update_chan = (function voxel_cljs$core$update_chan(){
var events = cljs.core.async.chan.call(null);
var clock = voxel_cljs.core.ticks.call(null,(300));
var c__7486__auto___135434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___135434,events,clock){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___135434,events,clock){
return (function (state_135421){
var state_val_135422 = (state_135421[(1)]);
if((state_val_135422 === (1))){
var state_135421__$1 = state_135421;
var statearr_135423_135435 = state_135421__$1;
(statearr_135423_135435[(2)] = null);

(statearr_135423_135435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135422 === (2))){
var state_135421__$1 = state_135421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135421__$1,(4),clock);
} else {
if((state_val_135422 === (3))){
var inst_135419 = (state_135421[(2)]);
var state_135421__$1 = state_135421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135421__$1,inst_135419);
} else {
if((state_val_135422 === (4))){
var inst_135401 = (state_135421[(2)]);
var inst_135402 = voxel_cljs.core.get_rotation.call(null,inst_135401);
var inst_135403 = cljs.core.nth.call(null,inst_135402,(0),null);
var inst_135404 = cljs.core.nth.call(null,inst_135402,(1),null);
var inst_135405 = cljs.core.nth.call(null,inst_135402,(2),null);
var inst_135406 = voxel_cljs.core.get_lighting.call(null,inst_135401);
var inst_135407 = cljs.core.nth.call(null,inst_135406,(0),null);
var inst_135408 = cljs.core.nth.call(null,inst_135406,(1),null);
var inst_135409 = cljs.core.nth.call(null,inst_135406,(2),null);
var inst_135410 = voxel_cljs.core.get_lighting_d.call(null,inst_135401);
var inst_135411 = [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"rz","rz",386461181),new cljs.core.Keyword(null,"lx","lx",-888609224),new cljs.core.Keyword(null,"ly","ly",-578333892),new cljs.core.Keyword(null,"lz","lz",-916365033),new cljs.core.Keyword(null,"ld","ld",-2058100314)];
var inst_135412 = [inst_135403,inst_135404,inst_135405,inst_135407,inst_135408,inst_135409,inst_135410];
var inst_135413 = cljs.core.PersistentHashMap.fromArrays(inst_135411,inst_135412);
var inst_135414 = cljs.core.swap_BANG_.call(null,voxel_cljs.core.voxelconf,cljs.core.merge,inst_135413);
var state_135421__$1 = (function (){var statearr_135424 = state_135421;
(statearr_135424[(7)] = inst_135414);

return statearr_135424;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135421__$1,(5),events,(1));
} else {
if((state_val_135422 === (5))){
var inst_135416 = (state_135421[(2)]);
var state_135421__$1 = (function (){var statearr_135425 = state_135421;
(statearr_135425[(8)] = inst_135416);

return statearr_135425;
})();
var statearr_135426_135436 = state_135421__$1;
(statearr_135426_135436[(2)] = null);

(statearr_135426_135436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__7486__auto___135434,events,clock))
;
return ((function (switch__7374__auto__,c__7486__auto___135434,events,clock){
return (function() {
var voxel_cljs$core$update_chan_$_state_machine__7375__auto__ = null;
var voxel_cljs$core$update_chan_$_state_machine__7375__auto____0 = (function (){
var statearr_135430 = [null,null,null,null,null,null,null,null,null];
(statearr_135430[(0)] = voxel_cljs$core$update_chan_$_state_machine__7375__auto__);

(statearr_135430[(1)] = (1));

return statearr_135430;
});
var voxel_cljs$core$update_chan_$_state_machine__7375__auto____1 = (function (state_135421){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_135421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e135431){if((e135431 instanceof Object)){
var ex__7378__auto__ = e135431;
var statearr_135432_135437 = state_135421;
(statearr_135432_135437[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135438 = state_135421;
state_135421 = G__135438;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
voxel_cljs$core$update_chan_$_state_machine__7375__auto__ = function(state_135421){
switch(arguments.length){
case 0:
return voxel_cljs$core$update_chan_$_state_machine__7375__auto____0.call(this);
case 1:
return voxel_cljs$core$update_chan_$_state_machine__7375__auto____1.call(this,state_135421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
voxel_cljs$core$update_chan_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = voxel_cljs$core$update_chan_$_state_machine__7375__auto____0;
voxel_cljs$core$update_chan_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = voxel_cljs$core$update_chan_$_state_machine__7375__auto____1;
return voxel_cljs$core$update_chan_$_state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___135434,events,clock))
})();
var state__7488__auto__ = (function (){var statearr_135433 = f__7487__auto__.call(null);
(statearr_135433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___135434);

return statearr_135433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___135434,events,clock))
);


return events;
});
voxel_cljs.core.get_hand_rotation = (function voxel_cljs$core$get_hand_rotation(ev){
var map__135443 = ev;
var map__135443__$1 = ((((!((map__135443 == null)))?((((map__135443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__135443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__135443):map__135443);
var normal = cljs.core.get.call(null,map__135443__$1,new cljs.core.Keyword(null,"normal","normal",-1519123858));
var position = cljs.core.get.call(null,map__135443__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__135444 = normal;
var nx = cljs.core.nth.call(null,vec__135444,(0),null);
var ny = cljs.core.nth.call(null,vec__135444,(1),null);
var nz = cljs.core.nth.call(null,vec__135444,(2),null);
var scale = 0.3;
cljs.core.println.call(null,"leap",nx,ny,nz);

return cljs.core.map.call(null,((function (map__135443,map__135443__$1,normal,position,vec__135444,nx,ny,nz,scale){
return (function (p1__135439_SHARP_){
return (scale * p1__135439_SHARP_);
});})(map__135443,map__135443__$1,normal,position,vec__135444,nx,ny,nz,scale))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nz,nx,(0)], null));
});
voxel_cljs.core.leap_chan = (function voxel_cljs$core$leap_chan(){
var hand = voxel_cljs.leap.events.call(null);
var out = cljs.core.async.chan.call(null);
var c__7486__auto___135514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___135514,hand,out){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___135514,hand,out){
return (function (state_135500){
var state_val_135501 = (state_135500[(1)]);
if((state_val_135501 === (1))){
var inst_135480 = (0);
var state_135500__$1 = (function (){var statearr_135502 = state_135500;
(statearr_135502[(7)] = inst_135480);

return statearr_135502;
})();
var statearr_135503_135515 = state_135500__$1;
(statearr_135503_135515[(2)] = null);

(statearr_135503_135515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135501 === (2))){
var state_135500__$1 = state_135500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135500__$1,(4),hand);
} else {
if((state_val_135501 === (3))){
var inst_135498 = (state_135500[(2)]);
var state_135500__$1 = state_135500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135500__$1,inst_135498);
} else {
if((state_val_135501 === (4))){
var inst_135484 = (state_135500[(2)]);
var inst_135485 = voxel_cljs.core.get_hand_rotation.call(null,inst_135484);
var inst_135486 = cljs.core.nth.call(null,inst_135485,(0),null);
var inst_135487 = cljs.core.nth.call(null,inst_135485,(1),null);
var inst_135488 = cljs.core.nth.call(null,inst_135485,(2),null);
var inst_135489 = [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"rz","rz",386461181)];
var inst_135490 = [inst_135486,inst_135487,inst_135488];
var inst_135491 = cljs.core.PersistentHashMap.fromArrays(inst_135489,inst_135490);
var inst_135492 = cljs.core.swap_BANG_.call(null,voxel_cljs.core.voxelconf,cljs.core.merge,inst_135491);
var state_135500__$1 = (function (){var statearr_135504 = state_135500;
(statearr_135504[(8)] = inst_135492);

return statearr_135504;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135500__$1,(5),out,(1));
} else {
if((state_val_135501 === (5))){
var inst_135480 = (state_135500[(7)]);
var inst_135494 = (state_135500[(2)]);
var inst_135495 = (inst_135480 + (1));
var inst_135480__$1 = inst_135495;
var state_135500__$1 = (function (){var statearr_135505 = state_135500;
(statearr_135505[(7)] = inst_135480__$1);

(statearr_135505[(9)] = inst_135494);

return statearr_135505;
})();
var statearr_135506_135516 = state_135500__$1;
(statearr_135506_135516[(2)] = null);

(statearr_135506_135516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__7486__auto___135514,hand,out))
;
return ((function (switch__7374__auto__,c__7486__auto___135514,hand,out){
return (function() {
var voxel_cljs$core$leap_chan_$_state_machine__7375__auto__ = null;
var voxel_cljs$core$leap_chan_$_state_machine__7375__auto____0 = (function (){
var statearr_135510 = [null,null,null,null,null,null,null,null,null,null];
(statearr_135510[(0)] = voxel_cljs$core$leap_chan_$_state_machine__7375__auto__);

(statearr_135510[(1)] = (1));

return statearr_135510;
});
var voxel_cljs$core$leap_chan_$_state_machine__7375__auto____1 = (function (state_135500){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_135500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e135511){if((e135511 instanceof Object)){
var ex__7378__auto__ = e135511;
var statearr_135512_135517 = state_135500;
(statearr_135512_135517[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135518 = state_135500;
state_135500 = G__135518;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
voxel_cljs$core$leap_chan_$_state_machine__7375__auto__ = function(state_135500){
switch(arguments.length){
case 0:
return voxel_cljs$core$leap_chan_$_state_machine__7375__auto____0.call(this);
case 1:
return voxel_cljs$core$leap_chan_$_state_machine__7375__auto____1.call(this,state_135500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
voxel_cljs$core$leap_chan_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = voxel_cljs$core$leap_chan_$_state_machine__7375__auto____0;
voxel_cljs$core$leap_chan_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = voxel_cljs$core$leap_chan_$_state_machine__7375__auto____1;
return voxel_cljs$core$leap_chan_$_state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___135514,hand,out))
})();
var state__7488__auto__ = (function (){var statearr_135513 = f__7487__auto__.call(null);
(statearr_135513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___135514);

return statearr_135513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___135514,hand,out))
);


return out;
});
voxel_cljs.core._main_1 = (function voxel_cljs$core$_main_1(){
var c = voxel_cljs.core.update_chan.call(null);
return voxel_cljs.core.init.call(null,c);
});
voxel_cljs.core._main = (function voxel_cljs$core$_main(){
var c = voxel_cljs.core.leap_chan.call(null);
return voxel_cljs.core.init.call(null,c);
});
voxel_cljs.core._main.call(null);

//# sourceMappingURL=core.js.map
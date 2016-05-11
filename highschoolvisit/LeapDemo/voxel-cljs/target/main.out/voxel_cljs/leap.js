// Compiled by ClojureScript 1.7.170 {}
goog.provide('voxel_cljs.leap');
goog.require('cljs.core');
goog.require('cljs.core.async');
voxel_cljs.leap.consume_frame = (function voxel_cljs$leap$consume_frame(out,frame){
var c__7486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto__){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto__){
return (function (state_10306){
var state_val_10307 = (state_10306[(1)]);
if((state_val_10307 === (1))){
var inst_10290 = (state_10306[(7)]);
var inst_10290__$1 = frame.hands;
var inst_10291 = cljs.core.empty_QMARK_.call(null,inst_10290__$1);
var inst_10292 = !(inst_10291);
var state_10306__$1 = (function (){var statearr_10308 = state_10306;
(statearr_10308[(7)] = inst_10290__$1);

return statearr_10308;
})();
if(inst_10292){
var statearr_10309_10320 = state_10306__$1;
(statearr_10309_10320[(1)] = (2));

} else {
var statearr_10310_10321 = state_10306__$1;
(statearr_10310_10321[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10307 === (2))){
var inst_10290 = (state_10306[(7)]);
var inst_10294 = cljs.core.first.call(null,inst_10290);
var inst_10295 = inst_10294.palmNormal;
var inst_10296 = inst_10294.palmPosition;
var inst_10297 = [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"normal","normal",-1519123858)];
var inst_10298 = [inst_10296,inst_10295];
var inst_10299 = cljs.core.PersistentHashMap.fromArrays(inst_10297,inst_10298);
var state_10306__$1 = state_10306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10306__$1,(5),out,inst_10299);
} else {
if((state_val_10307 === (3))){
var state_10306__$1 = state_10306;
var statearr_10311_10322 = state_10306__$1;
(statearr_10311_10322[(2)] = null);

(statearr_10311_10322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10307 === (4))){
var inst_10304 = (state_10306[(2)]);
var state_10306__$1 = state_10306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10306__$1,inst_10304);
} else {
if((state_val_10307 === (5))){
var inst_10301 = (state_10306[(2)]);
var state_10306__$1 = state_10306;
var statearr_10312_10323 = state_10306__$1;
(statearr_10312_10323[(2)] = inst_10301);

(statearr_10312_10323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__7486__auto__))
;
return ((function (switch__7374__auto__,c__7486__auto__){
return (function() {
var voxel_cljs$leap$consume_frame_$_state_machine__7375__auto__ = null;
var voxel_cljs$leap$consume_frame_$_state_machine__7375__auto____0 = (function (){
var statearr_10316 = [null,null,null,null,null,null,null,null];
(statearr_10316[(0)] = voxel_cljs$leap$consume_frame_$_state_machine__7375__auto__);

(statearr_10316[(1)] = (1));

return statearr_10316;
});
var voxel_cljs$leap$consume_frame_$_state_machine__7375__auto____1 = (function (state_10306){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_10306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e10317){if((e10317 instanceof Object)){
var ex__7378__auto__ = e10317;
var statearr_10318_10324 = state_10306;
(statearr_10318_10324[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10325 = state_10306;
state_10306 = G__10325;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
voxel_cljs$leap$consume_frame_$_state_machine__7375__auto__ = function(state_10306){
switch(arguments.length){
case 0:
return voxel_cljs$leap$consume_frame_$_state_machine__7375__auto____0.call(this);
case 1:
return voxel_cljs$leap$consume_frame_$_state_machine__7375__auto____1.call(this,state_10306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
voxel_cljs$leap$consume_frame_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = voxel_cljs$leap$consume_frame_$_state_machine__7375__auto____0;
voxel_cljs$leap$consume_frame_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = voxel_cljs$leap$consume_frame_$_state_machine__7375__auto____1;
return voxel_cljs$leap$consume_frame_$_state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto__))
})();
var state__7488__auto__ = (function (){var statearr_10319 = f__7487__auto__.call(null);
(statearr_10319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto__);

return statearr_10319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto__))
);

return c__7486__auto__;
});
voxel_cljs.leap.options = {"enableGestures": true};
voxel_cljs.leap.events = (function voxel_cljs$leap$events(){
var c = cljs.core.async.chan.call(null);
Leap.loop(voxel_cljs.leap.options,((function (c){
return (function (p1__10326_SHARP_){
return voxel_cljs.leap.consume_frame.call(null,c,p1__10326_SHARP_);
});})(c))
);

return c;
});

//# sourceMappingURL=leap.js.map
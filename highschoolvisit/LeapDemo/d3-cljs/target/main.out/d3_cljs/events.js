// Compiled by ClojureScript 1.7.170 {}
goog.provide('d3_cljs.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
d3_cljs.events.ticks = (function d3_cljs$events$ticks(duration,max){
var c = cljs.core.async.chan.call(null);
var c__7492__auto___10342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___10342,c){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___10342,c){
return (function (state_10322){
var state_val_10323 = (state_10322[(1)]);
if((state_val_10323 === (1))){
var inst_10304 = (0);
var state_10322__$1 = (function (){var statearr_10324 = state_10322;
(statearr_10324[(7)] = inst_10304);

return statearr_10324;
})();
var statearr_10325_10343 = state_10322__$1;
(statearr_10325_10343[(2)] = null);

(statearr_10325_10343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10323 === (2))){
var inst_10304 = (state_10322[(7)]);
var state_10322__$1 = state_10322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10322__$1,(4),c,inst_10304);
} else {
if((state_val_10323 === (3))){
var inst_10319 = (state_10322[(2)]);
var inst_10320 = cljs.core.async.close_BANG_.call(null,c);
var state_10322__$1 = (function (){var statearr_10326 = state_10322;
(statearr_10326[(8)] = inst_10319);

return statearr_10326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10322__$1,inst_10320);
} else {
if((state_val_10323 === (4))){
var inst_10307 = (state_10322[(2)]);
var inst_10308 = cljs.core.async.timeout.call(null,duration);
var state_10322__$1 = (function (){var statearr_10327 = state_10322;
(statearr_10327[(9)] = inst_10307);

return statearr_10327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10322__$1,(5),inst_10308);
} else {
if((state_val_10323 === (5))){
var inst_10304 = (state_10322[(7)]);
var inst_10310 = (state_10322[(2)]);
var inst_10311 = (inst_10304 < max);
var state_10322__$1 = (function (){var statearr_10328 = state_10322;
(statearr_10328[(10)] = inst_10310);

return statearr_10328;
})();
if(cljs.core.truth_(inst_10311)){
var statearr_10329_10344 = state_10322__$1;
(statearr_10329_10344[(1)] = (6));

} else {
var statearr_10330_10345 = state_10322__$1;
(statearr_10330_10345[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10323 === (6))){
var inst_10304 = (state_10322[(7)]);
var inst_10313 = (inst_10304 + (1));
var inst_10304__$1 = inst_10313;
var state_10322__$1 = (function (){var statearr_10331 = state_10322;
(statearr_10331[(7)] = inst_10304__$1);

return statearr_10331;
})();
var statearr_10332_10346 = state_10322__$1;
(statearr_10332_10346[(2)] = null);

(statearr_10332_10346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10323 === (7))){
var state_10322__$1 = state_10322;
var statearr_10333_10347 = state_10322__$1;
(statearr_10333_10347[(2)] = null);

(statearr_10333_10347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10323 === (8))){
var inst_10317 = (state_10322[(2)]);
var state_10322__$1 = state_10322;
var statearr_10334_10348 = state_10322__$1;
(statearr_10334_10348[(2)] = inst_10317);

(statearr_10334_10348[(1)] = (3));


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
});})(c__7492__auto___10342,c))
;
return ((function (switch__7380__auto__,c__7492__auto___10342,c){
return (function() {
var d3_cljs$events$ticks_$_state_machine__7381__auto__ = null;
var d3_cljs$events$ticks_$_state_machine__7381__auto____0 = (function (){
var statearr_10338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10338[(0)] = d3_cljs$events$ticks_$_state_machine__7381__auto__);

(statearr_10338[(1)] = (1));

return statearr_10338;
});
var d3_cljs$events$ticks_$_state_machine__7381__auto____1 = (function (state_10322){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_10322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e10339){if((e10339 instanceof Object)){
var ex__7384__auto__ = e10339;
var statearr_10340_10349 = state_10322;
(statearr_10340_10349[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10350 = state_10322;
state_10322 = G__10350;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
d3_cljs$events$ticks_$_state_machine__7381__auto__ = function(state_10322){
switch(arguments.length){
case 0:
return d3_cljs$events$ticks_$_state_machine__7381__auto____0.call(this);
case 1:
return d3_cljs$events$ticks_$_state_machine__7381__auto____1.call(this,state_10322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
d3_cljs$events$ticks_$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = d3_cljs$events$ticks_$_state_machine__7381__auto____0;
d3_cljs$events$ticks_$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = d3_cljs$events$ticks_$_state_machine__7381__auto____1;
return d3_cljs$events$ticks_$_state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___10342,c))
})();
var state__7494__auto__ = (function (){var statearr_10341 = f__7493__auto__.call(null);
(statearr_10341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___10342);

return statearr_10341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___10342,c))
);


return c;
});
d3_cljs.events.e__GT_data = (function d3_cljs$events$e__GT_data(w,h,e){
var ex = e.clientX;
var ey = e.clientY;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((2) * ((ex / w) - 0.5)),new cljs.core.Keyword(null,"y","y",-1757859776),(ey / h)], null);
});
d3_cljs.events.clicks = (function d3_cljs$events$clicks(){
var c = cljs.core.async.chan.call(null);
var body = $("body");
var w = body.width();
var h = body.height();
body.on("click",((function (c,body,w,h){
return (function (p1__10351_SHARP_){
var c__7492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto__,c,body,w,h){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto__,c,body,w,h){
return (function (state_10367){
var state_val_10368 = (state_10367[(1)]);
if((state_val_10368 === (1))){
var inst_10364 = d3_cljs.events.e__GT_data.call(null,w,h,p1__10351_SHARP_);
var inst_10365 = cljs.core.async.put_BANG_.call(null,c,inst_10364);
var state_10367__$1 = state_10367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10367__$1,inst_10365);
} else {
return null;
}
});})(c__7492__auto__,c,body,w,h))
;
return ((function (switch__7380__auto__,c__7492__auto__,c,body,w,h){
return (function() {
var d3_cljs$events$clicks_$_state_machine__7381__auto__ = null;
var d3_cljs$events$clicks_$_state_machine__7381__auto____0 = (function (){
var statearr_10372 = [null,null,null,null,null,null,null];
(statearr_10372[(0)] = d3_cljs$events$clicks_$_state_machine__7381__auto__);

(statearr_10372[(1)] = (1));

return statearr_10372;
});
var d3_cljs$events$clicks_$_state_machine__7381__auto____1 = (function (state_10367){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_10367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e10373){if((e10373 instanceof Object)){
var ex__7384__auto__ = e10373;
var statearr_10374_10376 = state_10367;
(statearr_10374_10376[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10377 = state_10367;
state_10367 = G__10377;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
d3_cljs$events$clicks_$_state_machine__7381__auto__ = function(state_10367){
switch(arguments.length){
case 0:
return d3_cljs$events$clicks_$_state_machine__7381__auto____0.call(this);
case 1:
return d3_cljs$events$clicks_$_state_machine__7381__auto____1.call(this,state_10367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
d3_cljs$events$clicks_$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = d3_cljs$events$clicks_$_state_machine__7381__auto____0;
d3_cljs$events$clicks_$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = d3_cljs$events$clicks_$_state_machine__7381__auto____1;
return d3_cljs$events$clicks_$_state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto__,c,body,w,h))
})();
var state__7494__auto__ = (function (){var statearr_10375 = f__7493__auto__.call(null);
(statearr_10375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto__);

return statearr_10375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto__,c,body,w,h))
);

return c__7492__auto__;
});})(c,body,w,h))
);

return c;
});

//# sourceMappingURL=events.js.map
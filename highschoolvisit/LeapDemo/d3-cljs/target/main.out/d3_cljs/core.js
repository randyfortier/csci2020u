// Compiled by ClojureScript 1.7.170 {}
goog.provide('d3_cljs.core');
goog.require('cljs.core');
goog.require('cljsjs.d3');
goog.require('cljs.core.async');
goog.require('d3_cljs.fractal_tree');
goog.require('d3_cljs.events');
cljs.core.enable_console_print_BANG_.call(null);
d3_cljs.core.dur_animation = (1500);
d3_cljs.core.interval = (1500);
d3_cljs.core.div = $("#main");
d3_cljs.core.x1 = (function d3_cljs$core$x1(p){
return p.x;
});
d3_cljs.core.y1 = (function d3_cljs$core$y1(p){
return p.y;
});
d3_cljs.core.x2 = (function d3_cljs$core$x2(p){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(d3_cljs.fractal_tree.end_point.call(null,cljs.core.js__GT_clj.call(null,p,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
});
d3_cljs.core.y2 = (function d3_cljs$core$y2(p){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(d3_cljs.fractal_tree.end_point.call(null,cljs.core.js__GT_clj.call(null,p,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
});
d3_cljs.core.stroke_width = (function d3_cljs$core$stroke_width(p){
return p.level;
});
d3_cljs.core.level;
d3_cljs.core.stroke_opacity = (function d3_cljs$core$stroke_opacity(p){
var pred__10383 = cljs.core._EQ_;
var expr__10384 = d3_cljs.core.level.call(null,p);
if(cljs.core.truth_(pred__10383.call(null,(1),expr__10384))){
return 0.8;
} else {
if(cljs.core.truth_(pred__10383.call(null,(2),expr__10384))){
return 0.6;
} else {
if(cljs.core.truth_(pred__10383.call(null,(3),expr__10384))){
return 0.3;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10384)].join('')));
}
}
}
});
d3_cljs.core.stroke_color = (function d3_cljs$core$stroke_color(p){
var pred__10389 = cljs.core._EQ_;
var expr__10390 = d3_cljs.core.level.call(null,p);
if(cljs.core.truth_(pred__10389.call(null,(1),expr__10390))){
return "#777";
} else {
if(cljs.core.truth_(pred__10389.call(null,(2),expr__10390))){
return "#aaa";
} else {
if(cljs.core.truth_(pred__10389.call(null,(3),expr__10390))){
return "#080";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10390)].join('')));
}
}
}
});
d3_cljs.core.level = (function d3_cljs$core$level(p){
if((p.d < (new cljs.core.Keyword(null,"max-depth","max-depth",127060793).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d3_cljs.fractal_tree.conf)) / (3)))){
return (1);
} else {
if((p.d < ((2) * (new cljs.core.Keyword(null,"max-depth","max-depth",127060793).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d3_cljs.fractal_tree.conf)) / (3))))){
return (2);
} else {
return (3);

}
}
});
d3_cljs.core.draw = (function d3_cljs$core$draw(tree){
return d3.select("svg").selectAll("line").data(cljs.core.clj__GT_js.call(null,tree)).enter().append("line").attr("x1",d3_cljs.core.x1).attr("y1",d3_cljs.core.y1).attr("x2",d3_cljs.core.x2).attr("y2",d3_cljs.core.y2).attr("stroke-width",d3_cljs.core.stroke_width).attr("stroke-opacity",d3_cljs.core.stroke_opacity).attr("stroke",d3_cljs.core.stroke_color).attr("id",(function (p1__10392_SHARP_){
return p1__10392_SHARP_.i;
}));
});
d3_cljs.core.redraw = (function d3_cljs$core$redraw(tree){
return d3.select("svg").selectAll("line").data(cljs.core.clj__GT_js.call(null,tree)).transition().duration(d3_cljs.core.dur_animation).attr("x1",d3_cljs.core.x1).attr("y1",d3_cljs.core.y1).attr("x2",d3_cljs.core.x2).attr("y2",d3_cljs.core.y2);
});
d3_cljs.core.draw_tree = (function d3_cljs$core$draw_tree(i,idx){
if((i === (0))){
return d3_cljs.core.draw.call(null,d3_cljs.fractal_tree.tree.call(null));
} else {
return d3_cljs.core.redraw.call(null,d3_cljs.fractal_tree.tree.call(null));

}
});
d3_cljs.core.update_tree = (function d3_cljs$core$update_tree(data,idx){
var map__10395 = data;
var map__10395__$1 = ((((!((map__10395 == null)))?((((map__10395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10395):map__10395);
var x = cljs.core.get.call(null,map__10395__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__10395__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return d3_cljs.fractal_tree.update_conf.call(null,x,y);
});
d3_cljs.core.chan_loop = (function d3_cljs$core$chan_loop(c,f){
var c__7492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto__){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto__){
return (function (state_10430){
var state_val_10431 = (state_10430[(1)]);
if((state_val_10431 === (1))){
var inst_10420 = (0);
var state_10430__$1 = (function (){var statearr_10432 = state_10430;
(statearr_10432[(7)] = inst_10420);

return statearr_10432;
})();
var statearr_10433_10443 = state_10430__$1;
(statearr_10433_10443[(2)] = null);

(statearr_10433_10443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (2))){
var state_10430__$1 = state_10430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10430__$1,(4),c);
} else {
if((state_val_10431 === (3))){
var inst_10428 = (state_10430[(2)]);
var state_10430__$1 = state_10430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10430__$1,inst_10428);
} else {
if((state_val_10431 === (4))){
var inst_10420 = (state_10430[(7)]);
var inst_10423 = (state_10430[(2)]);
var inst_10424 = f.call(null,inst_10423,inst_10420);
var inst_10425 = (inst_10420 + (1));
var inst_10420__$1 = inst_10425;
var state_10430__$1 = (function (){var statearr_10434 = state_10430;
(statearr_10434[(7)] = inst_10420__$1);

(statearr_10434[(8)] = inst_10424);

return statearr_10434;
})();
var statearr_10435_10444 = state_10430__$1;
(statearr_10435_10444[(2)] = null);

(statearr_10435_10444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__7492__auto__))
;
return ((function (switch__7380__auto__,c__7492__auto__){
return (function() {
var d3_cljs$core$chan_loop_$_state_machine__7381__auto__ = null;
var d3_cljs$core$chan_loop_$_state_machine__7381__auto____0 = (function (){
var statearr_10439 = [null,null,null,null,null,null,null,null,null];
(statearr_10439[(0)] = d3_cljs$core$chan_loop_$_state_machine__7381__auto__);

(statearr_10439[(1)] = (1));

return statearr_10439;
});
var d3_cljs$core$chan_loop_$_state_machine__7381__auto____1 = (function (state_10430){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_10430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e10440){if((e10440 instanceof Object)){
var ex__7384__auto__ = e10440;
var statearr_10441_10445 = state_10430;
(statearr_10441_10445[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10446 = state_10430;
state_10430 = G__10446;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
d3_cljs$core$chan_loop_$_state_machine__7381__auto__ = function(state_10430){
switch(arguments.length){
case 0:
return d3_cljs$core$chan_loop_$_state_machine__7381__auto____0.call(this);
case 1:
return d3_cljs$core$chan_loop_$_state_machine__7381__auto____1.call(this,state_10430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
d3_cljs$core$chan_loop_$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = d3_cljs$core$chan_loop_$_state_machine__7381__auto____0;
d3_cljs$core$chan_loop_$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = d3_cljs$core$chan_loop_$_state_machine__7381__auto____1;
return d3_cljs$core$chan_loop_$_state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto__))
})();
var state__7494__auto__ = (function (){var statearr_10442 = f__7493__auto__.call(null);
(statearr_10442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto__);

return statearr_10442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto__))
);

return c__7492__auto__;
});
d3_cljs.core.run_tree = (function d3_cljs$core$run_tree(){
return d3_cljs.core.chan_loop.call(null,d3_cljs.events.ticks.call(null,d3_cljs.core.interval,(1000)),d3_cljs.core.draw_tree);
});
d3_cljs.core.run_clicks = (function d3_cljs$core$run_clicks(){
return d3_cljs.core.chan_loop.call(null,d3_cljs.events.clicks.call(null),d3_cljs.core.update_tree);
});
d3_cljs.core._main = (function d3_cljs$core$_main(){
d3_cljs.core.run_tree.call(null);

return d3_cljs.core.run_clicks.call(null);
});
d3_cljs.core._main.call(null);

//# sourceMappingURL=core.js.map
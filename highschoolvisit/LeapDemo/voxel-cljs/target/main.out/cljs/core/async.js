// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args7531 = [];
var len__6046__auto___7537 = arguments.length;
var i__6047__auto___7538 = (0);
while(true){
if((i__6047__auto___7538 < len__6046__auto___7537)){
args7531.push((arguments[i__6047__auto___7538]));

var G__7539 = (i__6047__auto___7538 + (1));
i__6047__auto___7538 = G__7539;
continue;
} else {
}
break;
}

var G__7533 = args7531.length;
switch (G__7533) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7531.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async7534 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7534 = (function (f,blockable,meta7535){
this.f = f;
this.blockable = blockable;
this.meta7535 = meta7535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7536,meta7535__$1){
var self__ = this;
var _7536__$1 = this;
return (new cljs.core.async.t_cljs$core$async7534(self__.f,self__.blockable,meta7535__$1));
});

cljs.core.async.t_cljs$core$async7534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7536){
var self__ = this;
var _7536__$1 = this;
return self__.meta7535;
});

cljs.core.async.t_cljs$core$async7534.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7534.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta7535","meta7535",344150853,null)], null);
});

cljs.core.async.t_cljs$core$async7534.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7534";

cljs.core.async.t_cljs$core$async7534.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async7534");
});

cljs.core.async.__GT_t_cljs$core$async7534 = (function cljs$core$async$__GT_t_cljs$core$async7534(f__$1,blockable__$1,meta7535){
return (new cljs.core.async.t_cljs$core$async7534(f__$1,blockable__$1,meta7535));
});

}

return (new cljs.core.async.t_cljs$core$async7534(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args7543 = [];
var len__6046__auto___7546 = arguments.length;
var i__6047__auto___7547 = (0);
while(true){
if((i__6047__auto___7547 < len__6046__auto___7546)){
args7543.push((arguments[i__6047__auto___7547]));

var G__7548 = (i__6047__auto___7547 + (1));
i__6047__auto___7547 = G__7548;
continue;
} else {
}
break;
}

var G__7545 = args7543.length;
switch (G__7545) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7543.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args7550 = [];
var len__6046__auto___7553 = arguments.length;
var i__6047__auto___7554 = (0);
while(true){
if((i__6047__auto___7554 < len__6046__auto___7553)){
args7550.push((arguments[i__6047__auto___7554]));

var G__7555 = (i__6047__auto___7554 + (1));
i__6047__auto___7554 = G__7555;
continue;
} else {
}
break;
}

var G__7552 = args7550.length;
switch (G__7552) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7550.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args7557 = [];
var len__6046__auto___7560 = arguments.length;
var i__6047__auto___7561 = (0);
while(true){
if((i__6047__auto___7561 < len__6046__auto___7560)){
args7557.push((arguments[i__6047__auto___7561]));

var G__7562 = (i__6047__auto___7561 + (1));
i__6047__auto___7561 = G__7562;
continue;
} else {
}
break;
}

var G__7559 = args7557.length;
switch (G__7559) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7557.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7564 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7564);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7564,ret){
return (function (){
return fn1.call(null,val_7564);
});})(val_7564,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args7565 = [];
var len__6046__auto___7568 = arguments.length;
var i__6047__auto___7569 = (0);
while(true){
if((i__6047__auto___7569 < len__6046__auto___7568)){
args7565.push((arguments[i__6047__auto___7569]));

var G__7570 = (i__6047__auto___7569 + (1));
i__6047__auto___7569 = G__7570;
continue;
} else {
}
break;
}

var G__7567 = args7565.length;
switch (G__7567) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7565.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5891__auto___7572 = n;
var x_7573 = (0);
while(true){
if((x_7573 < n__5891__auto___7572)){
(a[x_7573] = (0));

var G__7574 = (x_7573 + (1));
x_7573 = G__7574;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__7575 = (i + (1));
i = G__7575;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7579 = (function (alt_flag,flag,meta7580){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7580 = meta7580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7581,meta7580__$1){
var self__ = this;
var _7581__$1 = this;
return (new cljs.core.async.t_cljs$core$async7579(self__.alt_flag,self__.flag,meta7580__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7581){
var self__ = this;
var _7581__$1 = this;
return self__.meta7580;
});})(flag))
;

cljs.core.async.t_cljs$core$async7579.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7579.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7579.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7580","meta7580",-1820834850,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7579";

cljs.core.async.t_cljs$core$async7579.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async7579");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7579 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7579(alt_flag__$1,flag__$1,meta7580){
return (new cljs.core.async.t_cljs$core$async7579(alt_flag__$1,flag__$1,meta7580));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7579(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7585 = (function (alt_handler,flag,cb,meta7586){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7586 = meta7586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7587,meta7586__$1){
var self__ = this;
var _7587__$1 = this;
return (new cljs.core.async.t_cljs$core$async7585(self__.alt_handler,self__.flag,self__.cb,meta7586__$1));
});

cljs.core.async.t_cljs$core$async7585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7587){
var self__ = this;
var _7587__$1 = this;
return self__.meta7586;
});

cljs.core.async.t_cljs$core$async7585.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7585.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7586","meta7586",-461155906,null)], null);
});

cljs.core.async.t_cljs$core$async7585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7585";

cljs.core.async.t_cljs$core$async7585.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async7585");
});

cljs.core.async.__GT_t_cljs$core$async7585 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7585(alt_handler__$1,flag__$1,cb__$1,meta7586){
return (new cljs.core.async.t_cljs$core$async7585(alt_handler__$1,flag__$1,cb__$1,meta7586));
});

}

return (new cljs.core.async.t_cljs$core$async7585(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7588_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7588_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7589_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7589_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4988__auto__ = wport;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7590 = (i + (1));
i = G__7590;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4988__auto__ = ret;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4976__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4976__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__6053__auto__ = [];
var len__6046__auto___7596 = arguments.length;
var i__6047__auto___7597 = (0);
while(true){
if((i__6047__auto___7597 < len__6046__auto___7596)){
args__6053__auto__.push((arguments[i__6047__auto___7597]));

var G__7598 = (i__6047__auto___7597 + (1));
i__6047__auto___7597 = G__7598;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7593){
var map__7594 = p__7593;
var map__7594__$1 = ((((!((map__7594 == null)))?((((map__7594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7594):map__7594);
var opts = map__7594__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7591){
var G__7592 = cljs.core.first.call(null,seq7591);
var seq7591__$1 = cljs.core.next.call(null,seq7591);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7592,seq7591__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args7599 = [];
var len__6046__auto___7649 = arguments.length;
var i__6047__auto___7650 = (0);
while(true){
if((i__6047__auto___7650 < len__6046__auto___7649)){
args7599.push((arguments[i__6047__auto___7650]));

var G__7651 = (i__6047__auto___7650 + (1));
i__6047__auto___7650 = G__7651;
continue;
} else {
}
break;
}

var G__7601 = args7599.length;
switch (G__7601) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7599.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7486__auto___7653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___7653){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___7653){
return (function (state_7625){
var state_val_7626 = (state_7625[(1)]);
if((state_val_7626 === (7))){
var inst_7621 = (state_7625[(2)]);
var state_7625__$1 = state_7625;
var statearr_7627_7654 = state_7625__$1;
(statearr_7627_7654[(2)] = inst_7621);

(statearr_7627_7654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7626 === (1))){
var state_7625__$1 = state_7625;
var statearr_7628_7655 = state_7625__$1;
(statearr_7628_7655[(2)] = null);

(statearr_7628_7655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7626 === (4))){
var inst_7604 = (state_7625[(7)]);
var inst_7604__$1 = (state_7625[(2)]);
var inst_7605 = (inst_7604__$1 == null);
var state_7625__$1 = (function (){var statearr_7629 = state_7625;
(statearr_7629[(7)] = inst_7604__$1);

return statearr_7629;
})();
if(cljs.core.truth_(inst_7605)){
var statearr_7630_7656 = state_7625__$1;
(statearr_7630_7656[(1)] = (5));

} else {
var statearr_7631_7657 = state_7625__$1;
(statearr_7631_7657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7626 === (13))){
var state_7625__$1 = state_7625;
var statearr_7632_7658 = state_7625__$1;
(statearr_7632_7658[(2)] = null);

(statearr_7632_7658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7626 === (6))){
var inst_7604 = (state_7625[(7)]);
var state_7625__$1 = state_7625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7625__$1,(11),to,inst_7604);
} else {
if((state_val_7626 === (3))){
var inst_7623 = (state_7625[(2)]);
var state_7625__$1 = state_7625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7625__$1,inst_7623);
} else {
if((state_val_7626 === (12))){
var state_7625__$1 = state_7625;
var statearr_7633_7659 = state_7625__$1;
(statearr_7633_7659[(2)] = null);

(statearr_7633_7659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7626 === (2))){
var state_7625__$1 = state_7625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7625__$1,(4),from);
} else {
if((state_val_7626 === (11))){
var inst_7614 = (state_7625[(2)]);
var state_7625__$1 = state_7625;
if(cljs.core.truth_(inst_7614)){
var statearr_7634_7660 = state_7625__$1;
(statearr_7634_7660[(1)] = (12));

} else {
var statearr_7635_7661 = state_7625__$1;
(statearr_7635_7661[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7626 === (9))){
var state_7625__$1 = state_7625;
var statearr_7636_7662 = state_7625__$1;
(statearr_7636_7662[(2)] = null);

(statearr_7636_7662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7626 === (5))){
var state_7625__$1 = state_7625;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7637_7663 = state_7625__$1;
(statearr_7637_7663[(1)] = (8));

} else {
var statearr_7638_7664 = state_7625__$1;
(statearr_7638_7664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7626 === (14))){
var inst_7619 = (state_7625[(2)]);
var state_7625__$1 = state_7625;
var statearr_7639_7665 = state_7625__$1;
(statearr_7639_7665[(2)] = inst_7619);

(statearr_7639_7665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7626 === (10))){
var inst_7611 = (state_7625[(2)]);
var state_7625__$1 = state_7625;
var statearr_7640_7666 = state_7625__$1;
(statearr_7640_7666[(2)] = inst_7611);

(statearr_7640_7666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7626 === (8))){
var inst_7608 = cljs.core.async.close_BANG_.call(null,to);
var state_7625__$1 = state_7625;
var statearr_7641_7667 = state_7625__$1;
(statearr_7641_7667[(2)] = inst_7608);

(statearr_7641_7667[(1)] = (10));


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
}
});})(c__7486__auto___7653))
;
return ((function (switch__7374__auto__,c__7486__auto___7653){
return (function() {
var cljs$core$async$state_machine__7375__auto__ = null;
var cljs$core$async$state_machine__7375__auto____0 = (function (){
var statearr_7645 = [null,null,null,null,null,null,null,null];
(statearr_7645[(0)] = cljs$core$async$state_machine__7375__auto__);

(statearr_7645[(1)] = (1));

return statearr_7645;
});
var cljs$core$async$state_machine__7375__auto____1 = (function (state_7625){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_7625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e7646){if((e7646 instanceof Object)){
var ex__7378__auto__ = e7646;
var statearr_7647_7668 = state_7625;
(statearr_7647_7668[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7669 = state_7625;
state_7625 = G__7669;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$state_machine__7375__auto__ = function(state_7625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7375__auto____1.call(this,state_7625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7375__auto____0;
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7375__auto____1;
return cljs$core$async$state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___7653))
})();
var state__7488__auto__ = (function (){var statearr_7648 = f__7487__auto__.call(null);
(statearr_7648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___7653);

return statearr_7648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___7653))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__7853){
var vec__7854 = p__7853;
var v = cljs.core.nth.call(null,vec__7854,(0),null);
var p = cljs.core.nth.call(null,vec__7854,(1),null);
var job = vec__7854;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7486__auto___8036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___8036,res,vec__7854,v,p,job,jobs,results){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___8036,res,vec__7854,v,p,job,jobs,results){
return (function (state_7859){
var state_val_7860 = (state_7859[(1)]);
if((state_val_7860 === (1))){
var state_7859__$1 = state_7859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7859__$1,(2),res,v);
} else {
if((state_val_7860 === (2))){
var inst_7856 = (state_7859[(2)]);
var inst_7857 = cljs.core.async.close_BANG_.call(null,res);
var state_7859__$1 = (function (){var statearr_7861 = state_7859;
(statearr_7861[(7)] = inst_7856);

return statearr_7861;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7859__$1,inst_7857);
} else {
return null;
}
}
});})(c__7486__auto___8036,res,vec__7854,v,p,job,jobs,results))
;
return ((function (switch__7374__auto__,c__7486__auto___8036,res,vec__7854,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0 = (function (){
var statearr_7865 = [null,null,null,null,null,null,null,null];
(statearr_7865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__);

(statearr_7865[(1)] = (1));

return statearr_7865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1 = (function (state_7859){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_7859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e7866){if((e7866 instanceof Object)){
var ex__7378__auto__ = e7866;
var statearr_7867_8037 = state_7859;
(statearr_7867_8037[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8038 = state_7859;
state_7859 = G__8038;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__ = function(state_7859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1.call(this,state_7859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___8036,res,vec__7854,v,p,job,jobs,results))
})();
var state__7488__auto__ = (function (){var statearr_7868 = f__7487__auto__.call(null);
(statearr_7868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___8036);

return statearr_7868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___8036,res,vec__7854,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7869){
var vec__7870 = p__7869;
var v = cljs.core.nth.call(null,vec__7870,(0),null);
var p = cljs.core.nth.call(null,vec__7870,(1),null);
var job = vec__7870;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5891__auto___8039 = n;
var __8040 = (0);
while(true){
if((__8040 < n__5891__auto___8039)){
var G__7871_8041 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__7871_8041) {
case "compute":
var c__7486__auto___8043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8040,c__7486__auto___8043,G__7871_8041,n__5891__auto___8039,jobs,results,process,async){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (__8040,c__7486__auto___8043,G__7871_8041,n__5891__auto___8039,jobs,results,process,async){
return (function (state_7884){
var state_val_7885 = (state_7884[(1)]);
if((state_val_7885 === (1))){
var state_7884__$1 = state_7884;
var statearr_7886_8044 = state_7884__$1;
(statearr_7886_8044[(2)] = null);

(statearr_7886_8044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7885 === (2))){
var state_7884__$1 = state_7884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7884__$1,(4),jobs);
} else {
if((state_val_7885 === (3))){
var inst_7882 = (state_7884[(2)]);
var state_7884__$1 = state_7884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7884__$1,inst_7882);
} else {
if((state_val_7885 === (4))){
var inst_7874 = (state_7884[(2)]);
var inst_7875 = process.call(null,inst_7874);
var state_7884__$1 = state_7884;
if(cljs.core.truth_(inst_7875)){
var statearr_7887_8045 = state_7884__$1;
(statearr_7887_8045[(1)] = (5));

} else {
var statearr_7888_8046 = state_7884__$1;
(statearr_7888_8046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7885 === (5))){
var state_7884__$1 = state_7884;
var statearr_7889_8047 = state_7884__$1;
(statearr_7889_8047[(2)] = null);

(statearr_7889_8047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7885 === (6))){
var state_7884__$1 = state_7884;
var statearr_7890_8048 = state_7884__$1;
(statearr_7890_8048[(2)] = null);

(statearr_7890_8048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7885 === (7))){
var inst_7880 = (state_7884[(2)]);
var state_7884__$1 = state_7884;
var statearr_7891_8049 = state_7884__$1;
(statearr_7891_8049[(2)] = inst_7880);

(statearr_7891_8049[(1)] = (3));


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
});})(__8040,c__7486__auto___8043,G__7871_8041,n__5891__auto___8039,jobs,results,process,async))
;
return ((function (__8040,switch__7374__auto__,c__7486__auto___8043,G__7871_8041,n__5891__auto___8039,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0 = (function (){
var statearr_7895 = [null,null,null,null,null,null,null];
(statearr_7895[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__);

(statearr_7895[(1)] = (1));

return statearr_7895;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1 = (function (state_7884){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_7884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e7896){if((e7896 instanceof Object)){
var ex__7378__auto__ = e7896;
var statearr_7897_8050 = state_7884;
(statearr_7897_8050[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8051 = state_7884;
state_7884 = G__8051;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__ = function(state_7884){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1.call(this,state_7884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__;
})()
;})(__8040,switch__7374__auto__,c__7486__auto___8043,G__7871_8041,n__5891__auto___8039,jobs,results,process,async))
})();
var state__7488__auto__ = (function (){var statearr_7898 = f__7487__auto__.call(null);
(statearr_7898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___8043);

return statearr_7898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(__8040,c__7486__auto___8043,G__7871_8041,n__5891__auto___8039,jobs,results,process,async))
);


break;
case "async":
var c__7486__auto___8052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8040,c__7486__auto___8052,G__7871_8041,n__5891__auto___8039,jobs,results,process,async){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (__8040,c__7486__auto___8052,G__7871_8041,n__5891__auto___8039,jobs,results,process,async){
return (function (state_7911){
var state_val_7912 = (state_7911[(1)]);
if((state_val_7912 === (1))){
var state_7911__$1 = state_7911;
var statearr_7913_8053 = state_7911__$1;
(statearr_7913_8053[(2)] = null);

(statearr_7913_8053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7912 === (2))){
var state_7911__$1 = state_7911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7911__$1,(4),jobs);
} else {
if((state_val_7912 === (3))){
var inst_7909 = (state_7911[(2)]);
var state_7911__$1 = state_7911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7911__$1,inst_7909);
} else {
if((state_val_7912 === (4))){
var inst_7901 = (state_7911[(2)]);
var inst_7902 = async.call(null,inst_7901);
var state_7911__$1 = state_7911;
if(cljs.core.truth_(inst_7902)){
var statearr_7914_8054 = state_7911__$1;
(statearr_7914_8054[(1)] = (5));

} else {
var statearr_7915_8055 = state_7911__$1;
(statearr_7915_8055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7912 === (5))){
var state_7911__$1 = state_7911;
var statearr_7916_8056 = state_7911__$1;
(statearr_7916_8056[(2)] = null);

(statearr_7916_8056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7912 === (6))){
var state_7911__$1 = state_7911;
var statearr_7917_8057 = state_7911__$1;
(statearr_7917_8057[(2)] = null);

(statearr_7917_8057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7912 === (7))){
var inst_7907 = (state_7911[(2)]);
var state_7911__$1 = state_7911;
var statearr_7918_8058 = state_7911__$1;
(statearr_7918_8058[(2)] = inst_7907);

(statearr_7918_8058[(1)] = (3));


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
});})(__8040,c__7486__auto___8052,G__7871_8041,n__5891__auto___8039,jobs,results,process,async))
;
return ((function (__8040,switch__7374__auto__,c__7486__auto___8052,G__7871_8041,n__5891__auto___8039,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0 = (function (){
var statearr_7922 = [null,null,null,null,null,null,null];
(statearr_7922[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__);

(statearr_7922[(1)] = (1));

return statearr_7922;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1 = (function (state_7911){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_7911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e7923){if((e7923 instanceof Object)){
var ex__7378__auto__ = e7923;
var statearr_7924_8059 = state_7911;
(statearr_7924_8059[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8060 = state_7911;
state_7911 = G__8060;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__ = function(state_7911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1.call(this,state_7911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__;
})()
;})(__8040,switch__7374__auto__,c__7486__auto___8052,G__7871_8041,n__5891__auto___8039,jobs,results,process,async))
})();
var state__7488__auto__ = (function (){var statearr_7925 = f__7487__auto__.call(null);
(statearr_7925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___8052);

return statearr_7925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(__8040,c__7486__auto___8052,G__7871_8041,n__5891__auto___8039,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__8061 = (__8040 + (1));
__8040 = G__8061;
continue;
} else {
}
break;
}

var c__7486__auto___8062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___8062,jobs,results,process,async){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___8062,jobs,results,process,async){
return (function (state_7947){
var state_val_7948 = (state_7947[(1)]);
if((state_val_7948 === (1))){
var state_7947__$1 = state_7947;
var statearr_7949_8063 = state_7947__$1;
(statearr_7949_8063[(2)] = null);

(statearr_7949_8063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7948 === (2))){
var state_7947__$1 = state_7947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7947__$1,(4),from);
} else {
if((state_val_7948 === (3))){
var inst_7945 = (state_7947[(2)]);
var state_7947__$1 = state_7947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7947__$1,inst_7945);
} else {
if((state_val_7948 === (4))){
var inst_7928 = (state_7947[(7)]);
var inst_7928__$1 = (state_7947[(2)]);
var inst_7929 = (inst_7928__$1 == null);
var state_7947__$1 = (function (){var statearr_7950 = state_7947;
(statearr_7950[(7)] = inst_7928__$1);

return statearr_7950;
})();
if(cljs.core.truth_(inst_7929)){
var statearr_7951_8064 = state_7947__$1;
(statearr_7951_8064[(1)] = (5));

} else {
var statearr_7952_8065 = state_7947__$1;
(statearr_7952_8065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7948 === (5))){
var inst_7931 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7947__$1 = state_7947;
var statearr_7953_8066 = state_7947__$1;
(statearr_7953_8066[(2)] = inst_7931);

(statearr_7953_8066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7948 === (6))){
var inst_7933 = (state_7947[(8)]);
var inst_7928 = (state_7947[(7)]);
var inst_7933__$1 = cljs.core.async.chan.call(null,(1));
var inst_7934 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7935 = [inst_7928,inst_7933__$1];
var inst_7936 = (new cljs.core.PersistentVector(null,2,(5),inst_7934,inst_7935,null));
var state_7947__$1 = (function (){var statearr_7954 = state_7947;
(statearr_7954[(8)] = inst_7933__$1);

return statearr_7954;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7947__$1,(8),jobs,inst_7936);
} else {
if((state_val_7948 === (7))){
var inst_7943 = (state_7947[(2)]);
var state_7947__$1 = state_7947;
var statearr_7955_8067 = state_7947__$1;
(statearr_7955_8067[(2)] = inst_7943);

(statearr_7955_8067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7948 === (8))){
var inst_7933 = (state_7947[(8)]);
var inst_7938 = (state_7947[(2)]);
var state_7947__$1 = (function (){var statearr_7956 = state_7947;
(statearr_7956[(9)] = inst_7938);

return statearr_7956;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7947__$1,(9),results,inst_7933);
} else {
if((state_val_7948 === (9))){
var inst_7940 = (state_7947[(2)]);
var state_7947__$1 = (function (){var statearr_7957 = state_7947;
(statearr_7957[(10)] = inst_7940);

return statearr_7957;
})();
var statearr_7958_8068 = state_7947__$1;
(statearr_7958_8068[(2)] = null);

(statearr_7958_8068[(1)] = (2));


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
});})(c__7486__auto___8062,jobs,results,process,async))
;
return ((function (switch__7374__auto__,c__7486__auto___8062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0 = (function (){
var statearr_7962 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__);

(statearr_7962[(1)] = (1));

return statearr_7962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1 = (function (state_7947){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_7947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e7963){if((e7963 instanceof Object)){
var ex__7378__auto__ = e7963;
var statearr_7964_8069 = state_7947;
(statearr_7964_8069[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8070 = state_7947;
state_7947 = G__8070;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__ = function(state_7947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1.call(this,state_7947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___8062,jobs,results,process,async))
})();
var state__7488__auto__ = (function (){var statearr_7965 = f__7487__auto__.call(null);
(statearr_7965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___8062);

return statearr_7965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___8062,jobs,results,process,async))
);


var c__7486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto__,jobs,results,process,async){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto__,jobs,results,process,async){
return (function (state_8003){
var state_val_8004 = (state_8003[(1)]);
if((state_val_8004 === (7))){
var inst_7999 = (state_8003[(2)]);
var state_8003__$1 = state_8003;
var statearr_8005_8071 = state_8003__$1;
(statearr_8005_8071[(2)] = inst_7999);

(statearr_8005_8071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (20))){
var state_8003__$1 = state_8003;
var statearr_8006_8072 = state_8003__$1;
(statearr_8006_8072[(2)] = null);

(statearr_8006_8072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (1))){
var state_8003__$1 = state_8003;
var statearr_8007_8073 = state_8003__$1;
(statearr_8007_8073[(2)] = null);

(statearr_8007_8073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (4))){
var inst_7968 = (state_8003[(7)]);
var inst_7968__$1 = (state_8003[(2)]);
var inst_7969 = (inst_7968__$1 == null);
var state_8003__$1 = (function (){var statearr_8008 = state_8003;
(statearr_8008[(7)] = inst_7968__$1);

return statearr_8008;
})();
if(cljs.core.truth_(inst_7969)){
var statearr_8009_8074 = state_8003__$1;
(statearr_8009_8074[(1)] = (5));

} else {
var statearr_8010_8075 = state_8003__$1;
(statearr_8010_8075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (15))){
var inst_7981 = (state_8003[(8)]);
var state_8003__$1 = state_8003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8003__$1,(18),to,inst_7981);
} else {
if((state_val_8004 === (21))){
var inst_7994 = (state_8003[(2)]);
var state_8003__$1 = state_8003;
var statearr_8011_8076 = state_8003__$1;
(statearr_8011_8076[(2)] = inst_7994);

(statearr_8011_8076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (13))){
var inst_7996 = (state_8003[(2)]);
var state_8003__$1 = (function (){var statearr_8012 = state_8003;
(statearr_8012[(9)] = inst_7996);

return statearr_8012;
})();
var statearr_8013_8077 = state_8003__$1;
(statearr_8013_8077[(2)] = null);

(statearr_8013_8077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (6))){
var inst_7968 = (state_8003[(7)]);
var state_8003__$1 = state_8003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8003__$1,(11),inst_7968);
} else {
if((state_val_8004 === (17))){
var inst_7989 = (state_8003[(2)]);
var state_8003__$1 = state_8003;
if(cljs.core.truth_(inst_7989)){
var statearr_8014_8078 = state_8003__$1;
(statearr_8014_8078[(1)] = (19));

} else {
var statearr_8015_8079 = state_8003__$1;
(statearr_8015_8079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (3))){
var inst_8001 = (state_8003[(2)]);
var state_8003__$1 = state_8003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8003__$1,inst_8001);
} else {
if((state_val_8004 === (12))){
var inst_7978 = (state_8003[(10)]);
var state_8003__$1 = state_8003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8003__$1,(14),inst_7978);
} else {
if((state_val_8004 === (2))){
var state_8003__$1 = state_8003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8003__$1,(4),results);
} else {
if((state_val_8004 === (19))){
var state_8003__$1 = state_8003;
var statearr_8016_8080 = state_8003__$1;
(statearr_8016_8080[(2)] = null);

(statearr_8016_8080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (11))){
var inst_7978 = (state_8003[(2)]);
var state_8003__$1 = (function (){var statearr_8017 = state_8003;
(statearr_8017[(10)] = inst_7978);

return statearr_8017;
})();
var statearr_8018_8081 = state_8003__$1;
(statearr_8018_8081[(2)] = null);

(statearr_8018_8081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (9))){
var state_8003__$1 = state_8003;
var statearr_8019_8082 = state_8003__$1;
(statearr_8019_8082[(2)] = null);

(statearr_8019_8082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (5))){
var state_8003__$1 = state_8003;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8020_8083 = state_8003__$1;
(statearr_8020_8083[(1)] = (8));

} else {
var statearr_8021_8084 = state_8003__$1;
(statearr_8021_8084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (14))){
var inst_7981 = (state_8003[(8)]);
var inst_7983 = (state_8003[(11)]);
var inst_7981__$1 = (state_8003[(2)]);
var inst_7982 = (inst_7981__$1 == null);
var inst_7983__$1 = cljs.core.not.call(null,inst_7982);
var state_8003__$1 = (function (){var statearr_8022 = state_8003;
(statearr_8022[(8)] = inst_7981__$1);

(statearr_8022[(11)] = inst_7983__$1);

return statearr_8022;
})();
if(inst_7983__$1){
var statearr_8023_8085 = state_8003__$1;
(statearr_8023_8085[(1)] = (15));

} else {
var statearr_8024_8086 = state_8003__$1;
(statearr_8024_8086[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (16))){
var inst_7983 = (state_8003[(11)]);
var state_8003__$1 = state_8003;
var statearr_8025_8087 = state_8003__$1;
(statearr_8025_8087[(2)] = inst_7983);

(statearr_8025_8087[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (10))){
var inst_7975 = (state_8003[(2)]);
var state_8003__$1 = state_8003;
var statearr_8026_8088 = state_8003__$1;
(statearr_8026_8088[(2)] = inst_7975);

(statearr_8026_8088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (18))){
var inst_7986 = (state_8003[(2)]);
var state_8003__$1 = state_8003;
var statearr_8027_8089 = state_8003__$1;
(statearr_8027_8089[(2)] = inst_7986);

(statearr_8027_8089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8004 === (8))){
var inst_7972 = cljs.core.async.close_BANG_.call(null,to);
var state_8003__$1 = state_8003;
var statearr_8028_8090 = state_8003__$1;
(statearr_8028_8090[(2)] = inst_7972);

(statearr_8028_8090[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__7486__auto__,jobs,results,process,async))
;
return ((function (switch__7374__auto__,c__7486__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0 = (function (){
var statearr_8032 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8032[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__);

(statearr_8032[(1)] = (1));

return statearr_8032;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1 = (function (state_8003){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_8003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e8033){if((e8033 instanceof Object)){
var ex__7378__auto__ = e8033;
var statearr_8034_8091 = state_8003;
(statearr_8034_8091[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8092 = state_8003;
state_8003 = G__8092;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__ = function(state_8003){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1.call(this,state_8003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7375__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto__,jobs,results,process,async))
})();
var state__7488__auto__ = (function (){var statearr_8035 = f__7487__auto__.call(null);
(statearr_8035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto__);

return statearr_8035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto__,jobs,results,process,async))
);

return c__7486__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args8093 = [];
var len__6046__auto___8096 = arguments.length;
var i__6047__auto___8097 = (0);
while(true){
if((i__6047__auto___8097 < len__6046__auto___8096)){
args8093.push((arguments[i__6047__auto___8097]));

var G__8098 = (i__6047__auto___8097 + (1));
i__6047__auto___8097 = G__8098;
continue;
} else {
}
break;
}

var G__8095 = args8093.length;
switch (G__8095) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8093.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args8100 = [];
var len__6046__auto___8103 = arguments.length;
var i__6047__auto___8104 = (0);
while(true){
if((i__6047__auto___8104 < len__6046__auto___8103)){
args8100.push((arguments[i__6047__auto___8104]));

var G__8105 = (i__6047__auto___8104 + (1));
i__6047__auto___8104 = G__8105;
continue;
} else {
}
break;
}

var G__8102 = args8100.length;
switch (G__8102) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8100.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args8107 = [];
var len__6046__auto___8160 = arguments.length;
var i__6047__auto___8161 = (0);
while(true){
if((i__6047__auto___8161 < len__6046__auto___8160)){
args8107.push((arguments[i__6047__auto___8161]));

var G__8162 = (i__6047__auto___8161 + (1));
i__6047__auto___8161 = G__8162;
continue;
} else {
}
break;
}

var G__8109 = args8107.length;
switch (G__8109) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8107.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7486__auto___8164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___8164,tc,fc){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___8164,tc,fc){
return (function (state_8135){
var state_val_8136 = (state_8135[(1)]);
if((state_val_8136 === (7))){
var inst_8131 = (state_8135[(2)]);
var state_8135__$1 = state_8135;
var statearr_8137_8165 = state_8135__$1;
(statearr_8137_8165[(2)] = inst_8131);

(statearr_8137_8165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8136 === (1))){
var state_8135__$1 = state_8135;
var statearr_8138_8166 = state_8135__$1;
(statearr_8138_8166[(2)] = null);

(statearr_8138_8166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8136 === (4))){
var inst_8112 = (state_8135[(7)]);
var inst_8112__$1 = (state_8135[(2)]);
var inst_8113 = (inst_8112__$1 == null);
var state_8135__$1 = (function (){var statearr_8139 = state_8135;
(statearr_8139[(7)] = inst_8112__$1);

return statearr_8139;
})();
if(cljs.core.truth_(inst_8113)){
var statearr_8140_8167 = state_8135__$1;
(statearr_8140_8167[(1)] = (5));

} else {
var statearr_8141_8168 = state_8135__$1;
(statearr_8141_8168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8136 === (13))){
var state_8135__$1 = state_8135;
var statearr_8142_8169 = state_8135__$1;
(statearr_8142_8169[(2)] = null);

(statearr_8142_8169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8136 === (6))){
var inst_8112 = (state_8135[(7)]);
var inst_8118 = p.call(null,inst_8112);
var state_8135__$1 = state_8135;
if(cljs.core.truth_(inst_8118)){
var statearr_8143_8170 = state_8135__$1;
(statearr_8143_8170[(1)] = (9));

} else {
var statearr_8144_8171 = state_8135__$1;
(statearr_8144_8171[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8136 === (3))){
var inst_8133 = (state_8135[(2)]);
var state_8135__$1 = state_8135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8135__$1,inst_8133);
} else {
if((state_val_8136 === (12))){
var state_8135__$1 = state_8135;
var statearr_8145_8172 = state_8135__$1;
(statearr_8145_8172[(2)] = null);

(statearr_8145_8172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8136 === (2))){
var state_8135__$1 = state_8135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8135__$1,(4),ch);
} else {
if((state_val_8136 === (11))){
var inst_8112 = (state_8135[(7)]);
var inst_8122 = (state_8135[(2)]);
var state_8135__$1 = state_8135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8135__$1,(8),inst_8122,inst_8112);
} else {
if((state_val_8136 === (9))){
var state_8135__$1 = state_8135;
var statearr_8146_8173 = state_8135__$1;
(statearr_8146_8173[(2)] = tc);

(statearr_8146_8173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8136 === (5))){
var inst_8115 = cljs.core.async.close_BANG_.call(null,tc);
var inst_8116 = cljs.core.async.close_BANG_.call(null,fc);
var state_8135__$1 = (function (){var statearr_8147 = state_8135;
(statearr_8147[(8)] = inst_8115);

return statearr_8147;
})();
var statearr_8148_8174 = state_8135__$1;
(statearr_8148_8174[(2)] = inst_8116);

(statearr_8148_8174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8136 === (14))){
var inst_8129 = (state_8135[(2)]);
var state_8135__$1 = state_8135;
var statearr_8149_8175 = state_8135__$1;
(statearr_8149_8175[(2)] = inst_8129);

(statearr_8149_8175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8136 === (10))){
var state_8135__$1 = state_8135;
var statearr_8150_8176 = state_8135__$1;
(statearr_8150_8176[(2)] = fc);

(statearr_8150_8176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8136 === (8))){
var inst_8124 = (state_8135[(2)]);
var state_8135__$1 = state_8135;
if(cljs.core.truth_(inst_8124)){
var statearr_8151_8177 = state_8135__$1;
(statearr_8151_8177[(1)] = (12));

} else {
var statearr_8152_8178 = state_8135__$1;
(statearr_8152_8178[(1)] = (13));

}

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
}
});})(c__7486__auto___8164,tc,fc))
;
return ((function (switch__7374__auto__,c__7486__auto___8164,tc,fc){
return (function() {
var cljs$core$async$state_machine__7375__auto__ = null;
var cljs$core$async$state_machine__7375__auto____0 = (function (){
var statearr_8156 = [null,null,null,null,null,null,null,null,null];
(statearr_8156[(0)] = cljs$core$async$state_machine__7375__auto__);

(statearr_8156[(1)] = (1));

return statearr_8156;
});
var cljs$core$async$state_machine__7375__auto____1 = (function (state_8135){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_8135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e8157){if((e8157 instanceof Object)){
var ex__7378__auto__ = e8157;
var statearr_8158_8179 = state_8135;
(statearr_8158_8179[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8180 = state_8135;
state_8135 = G__8180;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$state_machine__7375__auto__ = function(state_8135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7375__auto____1.call(this,state_8135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7375__auto____0;
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7375__auto____1;
return cljs$core$async$state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___8164,tc,fc))
})();
var state__7488__auto__ = (function (){var statearr_8159 = f__7487__auto__.call(null);
(statearr_8159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___8164);

return statearr_8159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___8164,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto__){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto__){
return (function (state_8244){
var state_val_8245 = (state_8244[(1)]);
if((state_val_8245 === (7))){
var inst_8240 = (state_8244[(2)]);
var state_8244__$1 = state_8244;
var statearr_8246_8267 = state_8244__$1;
(statearr_8246_8267[(2)] = inst_8240);

(statearr_8246_8267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8245 === (1))){
var inst_8224 = init;
var state_8244__$1 = (function (){var statearr_8247 = state_8244;
(statearr_8247[(7)] = inst_8224);

return statearr_8247;
})();
var statearr_8248_8268 = state_8244__$1;
(statearr_8248_8268[(2)] = null);

(statearr_8248_8268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8245 === (4))){
var inst_8227 = (state_8244[(8)]);
var inst_8227__$1 = (state_8244[(2)]);
var inst_8228 = (inst_8227__$1 == null);
var state_8244__$1 = (function (){var statearr_8249 = state_8244;
(statearr_8249[(8)] = inst_8227__$1);

return statearr_8249;
})();
if(cljs.core.truth_(inst_8228)){
var statearr_8250_8269 = state_8244__$1;
(statearr_8250_8269[(1)] = (5));

} else {
var statearr_8251_8270 = state_8244__$1;
(statearr_8251_8270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8245 === (6))){
var inst_8231 = (state_8244[(9)]);
var inst_8227 = (state_8244[(8)]);
var inst_8224 = (state_8244[(7)]);
var inst_8231__$1 = f.call(null,inst_8224,inst_8227);
var inst_8232 = cljs.core.reduced_QMARK_.call(null,inst_8231__$1);
var state_8244__$1 = (function (){var statearr_8252 = state_8244;
(statearr_8252[(9)] = inst_8231__$1);

return statearr_8252;
})();
if(inst_8232){
var statearr_8253_8271 = state_8244__$1;
(statearr_8253_8271[(1)] = (8));

} else {
var statearr_8254_8272 = state_8244__$1;
(statearr_8254_8272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8245 === (3))){
var inst_8242 = (state_8244[(2)]);
var state_8244__$1 = state_8244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8244__$1,inst_8242);
} else {
if((state_val_8245 === (2))){
var state_8244__$1 = state_8244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8244__$1,(4),ch);
} else {
if((state_val_8245 === (9))){
var inst_8231 = (state_8244[(9)]);
var inst_8224 = inst_8231;
var state_8244__$1 = (function (){var statearr_8255 = state_8244;
(statearr_8255[(7)] = inst_8224);

return statearr_8255;
})();
var statearr_8256_8273 = state_8244__$1;
(statearr_8256_8273[(2)] = null);

(statearr_8256_8273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8245 === (5))){
var inst_8224 = (state_8244[(7)]);
var state_8244__$1 = state_8244;
var statearr_8257_8274 = state_8244__$1;
(statearr_8257_8274[(2)] = inst_8224);

(statearr_8257_8274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8245 === (10))){
var inst_8238 = (state_8244[(2)]);
var state_8244__$1 = state_8244;
var statearr_8258_8275 = state_8244__$1;
(statearr_8258_8275[(2)] = inst_8238);

(statearr_8258_8275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8245 === (8))){
var inst_8231 = (state_8244[(9)]);
var inst_8234 = cljs.core.deref.call(null,inst_8231);
var state_8244__$1 = state_8244;
var statearr_8259_8276 = state_8244__$1;
(statearr_8259_8276[(2)] = inst_8234);

(statearr_8259_8276[(1)] = (10));


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
});})(c__7486__auto__))
;
return ((function (switch__7374__auto__,c__7486__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7375__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7375__auto____0 = (function (){
var statearr_8263 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8263[(0)] = cljs$core$async$reduce_$_state_machine__7375__auto__);

(statearr_8263[(1)] = (1));

return statearr_8263;
});
var cljs$core$async$reduce_$_state_machine__7375__auto____1 = (function (state_8244){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_8244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e8264){if((e8264 instanceof Object)){
var ex__7378__auto__ = e8264;
var statearr_8265_8277 = state_8244;
(statearr_8265_8277[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8278 = state_8244;
state_8244 = G__8278;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7375__auto__ = function(state_8244){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7375__auto____1.call(this,state_8244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7375__auto____0;
cljs$core$async$reduce_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7375__auto____1;
return cljs$core$async$reduce_$_state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto__))
})();
var state__7488__auto__ = (function (){var statearr_8266 = f__7487__auto__.call(null);
(statearr_8266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto__);

return statearr_8266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto__))
);

return c__7486__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args8279 = [];
var len__6046__auto___8331 = arguments.length;
var i__6047__auto___8332 = (0);
while(true){
if((i__6047__auto___8332 < len__6046__auto___8331)){
args8279.push((arguments[i__6047__auto___8332]));

var G__8333 = (i__6047__auto___8332 + (1));
i__6047__auto___8332 = G__8333;
continue;
} else {
}
break;
}

var G__8281 = args8279.length;
switch (G__8281) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8279.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto__){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto__){
return (function (state_8306){
var state_val_8307 = (state_8306[(1)]);
if((state_val_8307 === (7))){
var inst_8288 = (state_8306[(2)]);
var state_8306__$1 = state_8306;
var statearr_8308_8335 = state_8306__$1;
(statearr_8308_8335[(2)] = inst_8288);

(statearr_8308_8335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (1))){
var inst_8282 = cljs.core.seq.call(null,coll);
var inst_8283 = inst_8282;
var state_8306__$1 = (function (){var statearr_8309 = state_8306;
(statearr_8309[(7)] = inst_8283);

return statearr_8309;
})();
var statearr_8310_8336 = state_8306__$1;
(statearr_8310_8336[(2)] = null);

(statearr_8310_8336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (4))){
var inst_8283 = (state_8306[(7)]);
var inst_8286 = cljs.core.first.call(null,inst_8283);
var state_8306__$1 = state_8306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8306__$1,(7),ch,inst_8286);
} else {
if((state_val_8307 === (13))){
var inst_8300 = (state_8306[(2)]);
var state_8306__$1 = state_8306;
var statearr_8311_8337 = state_8306__$1;
(statearr_8311_8337[(2)] = inst_8300);

(statearr_8311_8337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (6))){
var inst_8291 = (state_8306[(2)]);
var state_8306__$1 = state_8306;
if(cljs.core.truth_(inst_8291)){
var statearr_8312_8338 = state_8306__$1;
(statearr_8312_8338[(1)] = (8));

} else {
var statearr_8313_8339 = state_8306__$1;
(statearr_8313_8339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (3))){
var inst_8304 = (state_8306[(2)]);
var state_8306__$1 = state_8306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8306__$1,inst_8304);
} else {
if((state_val_8307 === (12))){
var state_8306__$1 = state_8306;
var statearr_8314_8340 = state_8306__$1;
(statearr_8314_8340[(2)] = null);

(statearr_8314_8340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (2))){
var inst_8283 = (state_8306[(7)]);
var state_8306__$1 = state_8306;
if(cljs.core.truth_(inst_8283)){
var statearr_8315_8341 = state_8306__$1;
(statearr_8315_8341[(1)] = (4));

} else {
var statearr_8316_8342 = state_8306__$1;
(statearr_8316_8342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (11))){
var inst_8297 = cljs.core.async.close_BANG_.call(null,ch);
var state_8306__$1 = state_8306;
var statearr_8317_8343 = state_8306__$1;
(statearr_8317_8343[(2)] = inst_8297);

(statearr_8317_8343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (9))){
var state_8306__$1 = state_8306;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8318_8344 = state_8306__$1;
(statearr_8318_8344[(1)] = (11));

} else {
var statearr_8319_8345 = state_8306__$1;
(statearr_8319_8345[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (5))){
var inst_8283 = (state_8306[(7)]);
var state_8306__$1 = state_8306;
var statearr_8320_8346 = state_8306__$1;
(statearr_8320_8346[(2)] = inst_8283);

(statearr_8320_8346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (10))){
var inst_8302 = (state_8306[(2)]);
var state_8306__$1 = state_8306;
var statearr_8321_8347 = state_8306__$1;
(statearr_8321_8347[(2)] = inst_8302);

(statearr_8321_8347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (8))){
var inst_8283 = (state_8306[(7)]);
var inst_8293 = cljs.core.next.call(null,inst_8283);
var inst_8283__$1 = inst_8293;
var state_8306__$1 = (function (){var statearr_8322 = state_8306;
(statearr_8322[(7)] = inst_8283__$1);

return statearr_8322;
})();
var statearr_8323_8348 = state_8306__$1;
(statearr_8323_8348[(2)] = null);

(statearr_8323_8348[(1)] = (2));


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
});})(c__7486__auto__))
;
return ((function (switch__7374__auto__,c__7486__auto__){
return (function() {
var cljs$core$async$state_machine__7375__auto__ = null;
var cljs$core$async$state_machine__7375__auto____0 = (function (){
var statearr_8327 = [null,null,null,null,null,null,null,null];
(statearr_8327[(0)] = cljs$core$async$state_machine__7375__auto__);

(statearr_8327[(1)] = (1));

return statearr_8327;
});
var cljs$core$async$state_machine__7375__auto____1 = (function (state_8306){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_8306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e8328){if((e8328 instanceof Object)){
var ex__7378__auto__ = e8328;
var statearr_8329_8349 = state_8306;
(statearr_8329_8349[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8350 = state_8306;
state_8306 = G__8350;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$state_machine__7375__auto__ = function(state_8306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7375__auto____1.call(this,state_8306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7375__auto____0;
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7375__auto____1;
return cljs$core$async$state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto__))
})();
var state__7488__auto__ = (function (){var statearr_8330 = f__7487__auto__.call(null);
(statearr_8330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto__);

return statearr_8330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto__))
);

return c__7486__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5643__auto__ = (((_ == null))?null:_);
var m__5644__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,_);
} else {
var m__5644__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5644__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m,ch);
} else {
var m__5644__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m);
} else {
var m__5644__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8572 = (function (mult,ch,cs,meta8573){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8573 = meta8573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8574,meta8573__$1){
var self__ = this;
var _8574__$1 = this;
return (new cljs.core.async.t_cljs$core$async8572(self__.mult,self__.ch,self__.cs,meta8573__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8574){
var self__ = this;
var _8574__$1 = this;
return self__.meta8573;
});})(cs))
;

cljs.core.async.t_cljs$core$async8572.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8572.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8572.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8572.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8572.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8572.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8573","meta8573",1693345252,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8572";

cljs.core.async.t_cljs$core$async8572.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async8572");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8572 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8572(mult__$1,ch__$1,cs__$1,meta8573){
return (new cljs.core.async.t_cljs$core$async8572(mult__$1,ch__$1,cs__$1,meta8573));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8572(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7486__auto___8793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___8793,cs,m,dchan,dctr,done){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___8793,cs,m,dchan,dctr,done){
return (function (state_8705){
var state_val_8706 = (state_8705[(1)]);
if((state_val_8706 === (7))){
var inst_8701 = (state_8705[(2)]);
var state_8705__$1 = state_8705;
var statearr_8707_8794 = state_8705__$1;
(statearr_8707_8794[(2)] = inst_8701);

(statearr_8707_8794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (20))){
var inst_8606 = (state_8705[(7)]);
var inst_8616 = cljs.core.first.call(null,inst_8606);
var inst_8617 = cljs.core.nth.call(null,inst_8616,(0),null);
var inst_8618 = cljs.core.nth.call(null,inst_8616,(1),null);
var state_8705__$1 = (function (){var statearr_8708 = state_8705;
(statearr_8708[(8)] = inst_8617);

return statearr_8708;
})();
if(cljs.core.truth_(inst_8618)){
var statearr_8709_8795 = state_8705__$1;
(statearr_8709_8795[(1)] = (22));

} else {
var statearr_8710_8796 = state_8705__$1;
(statearr_8710_8796[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (27))){
var inst_8653 = (state_8705[(9)]);
var inst_8577 = (state_8705[(10)]);
var inst_8648 = (state_8705[(11)]);
var inst_8646 = (state_8705[(12)]);
var inst_8653__$1 = cljs.core._nth.call(null,inst_8646,inst_8648);
var inst_8654 = cljs.core.async.put_BANG_.call(null,inst_8653__$1,inst_8577,done);
var state_8705__$1 = (function (){var statearr_8711 = state_8705;
(statearr_8711[(9)] = inst_8653__$1);

return statearr_8711;
})();
if(cljs.core.truth_(inst_8654)){
var statearr_8712_8797 = state_8705__$1;
(statearr_8712_8797[(1)] = (30));

} else {
var statearr_8713_8798 = state_8705__$1;
(statearr_8713_8798[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (1))){
var state_8705__$1 = state_8705;
var statearr_8714_8799 = state_8705__$1;
(statearr_8714_8799[(2)] = null);

(statearr_8714_8799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (24))){
var inst_8606 = (state_8705[(7)]);
var inst_8623 = (state_8705[(2)]);
var inst_8624 = cljs.core.next.call(null,inst_8606);
var inst_8586 = inst_8624;
var inst_8587 = null;
var inst_8588 = (0);
var inst_8589 = (0);
var state_8705__$1 = (function (){var statearr_8715 = state_8705;
(statearr_8715[(13)] = inst_8623);

(statearr_8715[(14)] = inst_8589);

(statearr_8715[(15)] = inst_8586);

(statearr_8715[(16)] = inst_8588);

(statearr_8715[(17)] = inst_8587);

return statearr_8715;
})();
var statearr_8716_8800 = state_8705__$1;
(statearr_8716_8800[(2)] = null);

(statearr_8716_8800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (39))){
var state_8705__$1 = state_8705;
var statearr_8720_8801 = state_8705__$1;
(statearr_8720_8801[(2)] = null);

(statearr_8720_8801[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (4))){
var inst_8577 = (state_8705[(10)]);
var inst_8577__$1 = (state_8705[(2)]);
var inst_8578 = (inst_8577__$1 == null);
var state_8705__$1 = (function (){var statearr_8721 = state_8705;
(statearr_8721[(10)] = inst_8577__$1);

return statearr_8721;
})();
if(cljs.core.truth_(inst_8578)){
var statearr_8722_8802 = state_8705__$1;
(statearr_8722_8802[(1)] = (5));

} else {
var statearr_8723_8803 = state_8705__$1;
(statearr_8723_8803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (15))){
var inst_8589 = (state_8705[(14)]);
var inst_8586 = (state_8705[(15)]);
var inst_8588 = (state_8705[(16)]);
var inst_8587 = (state_8705[(17)]);
var inst_8602 = (state_8705[(2)]);
var inst_8603 = (inst_8589 + (1));
var tmp8717 = inst_8586;
var tmp8718 = inst_8588;
var tmp8719 = inst_8587;
var inst_8586__$1 = tmp8717;
var inst_8587__$1 = tmp8719;
var inst_8588__$1 = tmp8718;
var inst_8589__$1 = inst_8603;
var state_8705__$1 = (function (){var statearr_8724 = state_8705;
(statearr_8724[(18)] = inst_8602);

(statearr_8724[(14)] = inst_8589__$1);

(statearr_8724[(15)] = inst_8586__$1);

(statearr_8724[(16)] = inst_8588__$1);

(statearr_8724[(17)] = inst_8587__$1);

return statearr_8724;
})();
var statearr_8725_8804 = state_8705__$1;
(statearr_8725_8804[(2)] = null);

(statearr_8725_8804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (21))){
var inst_8627 = (state_8705[(2)]);
var state_8705__$1 = state_8705;
var statearr_8729_8805 = state_8705__$1;
(statearr_8729_8805[(2)] = inst_8627);

(statearr_8729_8805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (31))){
var inst_8653 = (state_8705[(9)]);
var inst_8657 = done.call(null,null);
var inst_8658 = cljs.core.async.untap_STAR_.call(null,m,inst_8653);
var state_8705__$1 = (function (){var statearr_8730 = state_8705;
(statearr_8730[(19)] = inst_8657);

return statearr_8730;
})();
var statearr_8731_8806 = state_8705__$1;
(statearr_8731_8806[(2)] = inst_8658);

(statearr_8731_8806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (32))){
var inst_8648 = (state_8705[(11)]);
var inst_8645 = (state_8705[(20)]);
var inst_8647 = (state_8705[(21)]);
var inst_8646 = (state_8705[(12)]);
var inst_8660 = (state_8705[(2)]);
var inst_8661 = (inst_8648 + (1));
var tmp8726 = inst_8645;
var tmp8727 = inst_8647;
var tmp8728 = inst_8646;
var inst_8645__$1 = tmp8726;
var inst_8646__$1 = tmp8728;
var inst_8647__$1 = tmp8727;
var inst_8648__$1 = inst_8661;
var state_8705__$1 = (function (){var statearr_8732 = state_8705;
(statearr_8732[(22)] = inst_8660);

(statearr_8732[(11)] = inst_8648__$1);

(statearr_8732[(20)] = inst_8645__$1);

(statearr_8732[(21)] = inst_8647__$1);

(statearr_8732[(12)] = inst_8646__$1);

return statearr_8732;
})();
var statearr_8733_8807 = state_8705__$1;
(statearr_8733_8807[(2)] = null);

(statearr_8733_8807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (40))){
var inst_8673 = (state_8705[(23)]);
var inst_8677 = done.call(null,null);
var inst_8678 = cljs.core.async.untap_STAR_.call(null,m,inst_8673);
var state_8705__$1 = (function (){var statearr_8734 = state_8705;
(statearr_8734[(24)] = inst_8677);

return statearr_8734;
})();
var statearr_8735_8808 = state_8705__$1;
(statearr_8735_8808[(2)] = inst_8678);

(statearr_8735_8808[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (33))){
var inst_8664 = (state_8705[(25)]);
var inst_8666 = cljs.core.chunked_seq_QMARK_.call(null,inst_8664);
var state_8705__$1 = state_8705;
if(inst_8666){
var statearr_8736_8809 = state_8705__$1;
(statearr_8736_8809[(1)] = (36));

} else {
var statearr_8737_8810 = state_8705__$1;
(statearr_8737_8810[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (13))){
var inst_8596 = (state_8705[(26)]);
var inst_8599 = cljs.core.async.close_BANG_.call(null,inst_8596);
var state_8705__$1 = state_8705;
var statearr_8738_8811 = state_8705__$1;
(statearr_8738_8811[(2)] = inst_8599);

(statearr_8738_8811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (22))){
var inst_8617 = (state_8705[(8)]);
var inst_8620 = cljs.core.async.close_BANG_.call(null,inst_8617);
var state_8705__$1 = state_8705;
var statearr_8739_8812 = state_8705__$1;
(statearr_8739_8812[(2)] = inst_8620);

(statearr_8739_8812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (36))){
var inst_8664 = (state_8705[(25)]);
var inst_8668 = cljs.core.chunk_first.call(null,inst_8664);
var inst_8669 = cljs.core.chunk_rest.call(null,inst_8664);
var inst_8670 = cljs.core.count.call(null,inst_8668);
var inst_8645 = inst_8669;
var inst_8646 = inst_8668;
var inst_8647 = inst_8670;
var inst_8648 = (0);
var state_8705__$1 = (function (){var statearr_8740 = state_8705;
(statearr_8740[(11)] = inst_8648);

(statearr_8740[(20)] = inst_8645);

(statearr_8740[(21)] = inst_8647);

(statearr_8740[(12)] = inst_8646);

return statearr_8740;
})();
var statearr_8741_8813 = state_8705__$1;
(statearr_8741_8813[(2)] = null);

(statearr_8741_8813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (41))){
var inst_8664 = (state_8705[(25)]);
var inst_8680 = (state_8705[(2)]);
var inst_8681 = cljs.core.next.call(null,inst_8664);
var inst_8645 = inst_8681;
var inst_8646 = null;
var inst_8647 = (0);
var inst_8648 = (0);
var state_8705__$1 = (function (){var statearr_8742 = state_8705;
(statearr_8742[(27)] = inst_8680);

(statearr_8742[(11)] = inst_8648);

(statearr_8742[(20)] = inst_8645);

(statearr_8742[(21)] = inst_8647);

(statearr_8742[(12)] = inst_8646);

return statearr_8742;
})();
var statearr_8743_8814 = state_8705__$1;
(statearr_8743_8814[(2)] = null);

(statearr_8743_8814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (43))){
var state_8705__$1 = state_8705;
var statearr_8744_8815 = state_8705__$1;
(statearr_8744_8815[(2)] = null);

(statearr_8744_8815[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (29))){
var inst_8689 = (state_8705[(2)]);
var state_8705__$1 = state_8705;
var statearr_8745_8816 = state_8705__$1;
(statearr_8745_8816[(2)] = inst_8689);

(statearr_8745_8816[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (44))){
var inst_8698 = (state_8705[(2)]);
var state_8705__$1 = (function (){var statearr_8746 = state_8705;
(statearr_8746[(28)] = inst_8698);

return statearr_8746;
})();
var statearr_8747_8817 = state_8705__$1;
(statearr_8747_8817[(2)] = null);

(statearr_8747_8817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (6))){
var inst_8637 = (state_8705[(29)]);
var inst_8636 = cljs.core.deref.call(null,cs);
var inst_8637__$1 = cljs.core.keys.call(null,inst_8636);
var inst_8638 = cljs.core.count.call(null,inst_8637__$1);
var inst_8639 = cljs.core.reset_BANG_.call(null,dctr,inst_8638);
var inst_8644 = cljs.core.seq.call(null,inst_8637__$1);
var inst_8645 = inst_8644;
var inst_8646 = null;
var inst_8647 = (0);
var inst_8648 = (0);
var state_8705__$1 = (function (){var statearr_8748 = state_8705;
(statearr_8748[(29)] = inst_8637__$1);

(statearr_8748[(11)] = inst_8648);

(statearr_8748[(20)] = inst_8645);

(statearr_8748[(21)] = inst_8647);

(statearr_8748[(12)] = inst_8646);

(statearr_8748[(30)] = inst_8639);

return statearr_8748;
})();
var statearr_8749_8818 = state_8705__$1;
(statearr_8749_8818[(2)] = null);

(statearr_8749_8818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (28))){
var inst_8664 = (state_8705[(25)]);
var inst_8645 = (state_8705[(20)]);
var inst_8664__$1 = cljs.core.seq.call(null,inst_8645);
var state_8705__$1 = (function (){var statearr_8750 = state_8705;
(statearr_8750[(25)] = inst_8664__$1);

return statearr_8750;
})();
if(inst_8664__$1){
var statearr_8751_8819 = state_8705__$1;
(statearr_8751_8819[(1)] = (33));

} else {
var statearr_8752_8820 = state_8705__$1;
(statearr_8752_8820[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (25))){
var inst_8648 = (state_8705[(11)]);
var inst_8647 = (state_8705[(21)]);
var inst_8650 = (inst_8648 < inst_8647);
var inst_8651 = inst_8650;
var state_8705__$1 = state_8705;
if(cljs.core.truth_(inst_8651)){
var statearr_8753_8821 = state_8705__$1;
(statearr_8753_8821[(1)] = (27));

} else {
var statearr_8754_8822 = state_8705__$1;
(statearr_8754_8822[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (34))){
var state_8705__$1 = state_8705;
var statearr_8755_8823 = state_8705__$1;
(statearr_8755_8823[(2)] = null);

(statearr_8755_8823[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (17))){
var state_8705__$1 = state_8705;
var statearr_8756_8824 = state_8705__$1;
(statearr_8756_8824[(2)] = null);

(statearr_8756_8824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (3))){
var inst_8703 = (state_8705[(2)]);
var state_8705__$1 = state_8705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8705__$1,inst_8703);
} else {
if((state_val_8706 === (12))){
var inst_8632 = (state_8705[(2)]);
var state_8705__$1 = state_8705;
var statearr_8757_8825 = state_8705__$1;
(statearr_8757_8825[(2)] = inst_8632);

(statearr_8757_8825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (2))){
var state_8705__$1 = state_8705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8705__$1,(4),ch);
} else {
if((state_val_8706 === (23))){
var state_8705__$1 = state_8705;
var statearr_8758_8826 = state_8705__$1;
(statearr_8758_8826[(2)] = null);

(statearr_8758_8826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (35))){
var inst_8687 = (state_8705[(2)]);
var state_8705__$1 = state_8705;
var statearr_8759_8827 = state_8705__$1;
(statearr_8759_8827[(2)] = inst_8687);

(statearr_8759_8827[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (19))){
var inst_8606 = (state_8705[(7)]);
var inst_8610 = cljs.core.chunk_first.call(null,inst_8606);
var inst_8611 = cljs.core.chunk_rest.call(null,inst_8606);
var inst_8612 = cljs.core.count.call(null,inst_8610);
var inst_8586 = inst_8611;
var inst_8587 = inst_8610;
var inst_8588 = inst_8612;
var inst_8589 = (0);
var state_8705__$1 = (function (){var statearr_8760 = state_8705;
(statearr_8760[(14)] = inst_8589);

(statearr_8760[(15)] = inst_8586);

(statearr_8760[(16)] = inst_8588);

(statearr_8760[(17)] = inst_8587);

return statearr_8760;
})();
var statearr_8761_8828 = state_8705__$1;
(statearr_8761_8828[(2)] = null);

(statearr_8761_8828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (11))){
var inst_8586 = (state_8705[(15)]);
var inst_8606 = (state_8705[(7)]);
var inst_8606__$1 = cljs.core.seq.call(null,inst_8586);
var state_8705__$1 = (function (){var statearr_8762 = state_8705;
(statearr_8762[(7)] = inst_8606__$1);

return statearr_8762;
})();
if(inst_8606__$1){
var statearr_8763_8829 = state_8705__$1;
(statearr_8763_8829[(1)] = (16));

} else {
var statearr_8764_8830 = state_8705__$1;
(statearr_8764_8830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (9))){
var inst_8634 = (state_8705[(2)]);
var state_8705__$1 = state_8705;
var statearr_8765_8831 = state_8705__$1;
(statearr_8765_8831[(2)] = inst_8634);

(statearr_8765_8831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (5))){
var inst_8584 = cljs.core.deref.call(null,cs);
var inst_8585 = cljs.core.seq.call(null,inst_8584);
var inst_8586 = inst_8585;
var inst_8587 = null;
var inst_8588 = (0);
var inst_8589 = (0);
var state_8705__$1 = (function (){var statearr_8766 = state_8705;
(statearr_8766[(14)] = inst_8589);

(statearr_8766[(15)] = inst_8586);

(statearr_8766[(16)] = inst_8588);

(statearr_8766[(17)] = inst_8587);

return statearr_8766;
})();
var statearr_8767_8832 = state_8705__$1;
(statearr_8767_8832[(2)] = null);

(statearr_8767_8832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (14))){
var state_8705__$1 = state_8705;
var statearr_8768_8833 = state_8705__$1;
(statearr_8768_8833[(2)] = null);

(statearr_8768_8833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (45))){
var inst_8695 = (state_8705[(2)]);
var state_8705__$1 = state_8705;
var statearr_8769_8834 = state_8705__$1;
(statearr_8769_8834[(2)] = inst_8695);

(statearr_8769_8834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (26))){
var inst_8637 = (state_8705[(29)]);
var inst_8691 = (state_8705[(2)]);
var inst_8692 = cljs.core.seq.call(null,inst_8637);
var state_8705__$1 = (function (){var statearr_8770 = state_8705;
(statearr_8770[(31)] = inst_8691);

return statearr_8770;
})();
if(inst_8692){
var statearr_8771_8835 = state_8705__$1;
(statearr_8771_8835[(1)] = (42));

} else {
var statearr_8772_8836 = state_8705__$1;
(statearr_8772_8836[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (16))){
var inst_8606 = (state_8705[(7)]);
var inst_8608 = cljs.core.chunked_seq_QMARK_.call(null,inst_8606);
var state_8705__$1 = state_8705;
if(inst_8608){
var statearr_8773_8837 = state_8705__$1;
(statearr_8773_8837[(1)] = (19));

} else {
var statearr_8774_8838 = state_8705__$1;
(statearr_8774_8838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (38))){
var inst_8684 = (state_8705[(2)]);
var state_8705__$1 = state_8705;
var statearr_8775_8839 = state_8705__$1;
(statearr_8775_8839[(2)] = inst_8684);

(statearr_8775_8839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (30))){
var state_8705__$1 = state_8705;
var statearr_8776_8840 = state_8705__$1;
(statearr_8776_8840[(2)] = null);

(statearr_8776_8840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (10))){
var inst_8589 = (state_8705[(14)]);
var inst_8587 = (state_8705[(17)]);
var inst_8595 = cljs.core._nth.call(null,inst_8587,inst_8589);
var inst_8596 = cljs.core.nth.call(null,inst_8595,(0),null);
var inst_8597 = cljs.core.nth.call(null,inst_8595,(1),null);
var state_8705__$1 = (function (){var statearr_8777 = state_8705;
(statearr_8777[(26)] = inst_8596);

return statearr_8777;
})();
if(cljs.core.truth_(inst_8597)){
var statearr_8778_8841 = state_8705__$1;
(statearr_8778_8841[(1)] = (13));

} else {
var statearr_8779_8842 = state_8705__$1;
(statearr_8779_8842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (18))){
var inst_8630 = (state_8705[(2)]);
var state_8705__$1 = state_8705;
var statearr_8780_8843 = state_8705__$1;
(statearr_8780_8843[(2)] = inst_8630);

(statearr_8780_8843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (42))){
var state_8705__$1 = state_8705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8705__$1,(45),dchan);
} else {
if((state_val_8706 === (37))){
var inst_8673 = (state_8705[(23)]);
var inst_8577 = (state_8705[(10)]);
var inst_8664 = (state_8705[(25)]);
var inst_8673__$1 = cljs.core.first.call(null,inst_8664);
var inst_8674 = cljs.core.async.put_BANG_.call(null,inst_8673__$1,inst_8577,done);
var state_8705__$1 = (function (){var statearr_8781 = state_8705;
(statearr_8781[(23)] = inst_8673__$1);

return statearr_8781;
})();
if(cljs.core.truth_(inst_8674)){
var statearr_8782_8844 = state_8705__$1;
(statearr_8782_8844[(1)] = (39));

} else {
var statearr_8783_8845 = state_8705__$1;
(statearr_8783_8845[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8706 === (8))){
var inst_8589 = (state_8705[(14)]);
var inst_8588 = (state_8705[(16)]);
var inst_8591 = (inst_8589 < inst_8588);
var inst_8592 = inst_8591;
var state_8705__$1 = state_8705;
if(cljs.core.truth_(inst_8592)){
var statearr_8784_8846 = state_8705__$1;
(statearr_8784_8846[(1)] = (10));

} else {
var statearr_8785_8847 = state_8705__$1;
(statearr_8785_8847[(1)] = (11));

}

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
}
}
}
}
}
}
});})(c__7486__auto___8793,cs,m,dchan,dctr,done))
;
return ((function (switch__7374__auto__,c__7486__auto___8793,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7375__auto__ = null;
var cljs$core$async$mult_$_state_machine__7375__auto____0 = (function (){
var statearr_8789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8789[(0)] = cljs$core$async$mult_$_state_machine__7375__auto__);

(statearr_8789[(1)] = (1));

return statearr_8789;
});
var cljs$core$async$mult_$_state_machine__7375__auto____1 = (function (state_8705){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_8705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e8790){if((e8790 instanceof Object)){
var ex__7378__auto__ = e8790;
var statearr_8791_8848 = state_8705;
(statearr_8791_8848[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8849 = state_8705;
state_8705 = G__8849;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7375__auto__ = function(state_8705){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7375__auto____1.call(this,state_8705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7375__auto____0;
cljs$core$async$mult_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7375__auto____1;
return cljs$core$async$mult_$_state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___8793,cs,m,dchan,dctr,done))
})();
var state__7488__auto__ = (function (){var statearr_8792 = f__7487__auto__.call(null);
(statearr_8792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___8793);

return statearr_8792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___8793,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args8850 = [];
var len__6046__auto___8853 = arguments.length;
var i__6047__auto___8854 = (0);
while(true){
if((i__6047__auto___8854 < len__6046__auto___8853)){
args8850.push((arguments[i__6047__auto___8854]));

var G__8855 = (i__6047__auto___8854 + (1));
i__6047__auto___8854 = G__8855;
continue;
} else {
}
break;
}

var G__8852 = args8850.length;
switch (G__8852) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8850.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m,ch);
} else {
var m__5644__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m,ch);
} else {
var m__5644__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m);
} else {
var m__5644__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m,state_map);
} else {
var m__5644__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m,mode);
} else {
var m__5644__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6053__auto__ = [];
var len__6046__auto___8867 = arguments.length;
var i__6047__auto___8868 = (0);
while(true){
if((i__6047__auto___8868 < len__6046__auto___8867)){
args__6053__auto__.push((arguments[i__6047__auto___8868]));

var G__8869 = (i__6047__auto___8868 + (1));
i__6047__auto___8868 = G__8869;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((3) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6054__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8861){
var map__8862 = p__8861;
var map__8862__$1 = ((((!((map__8862 == null)))?((((map__8862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8862):map__8862);
var opts = map__8862__$1;
var statearr_8864_8870 = state;
(statearr_8864_8870[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__8862,map__8862__$1,opts){
return (function (val){
var statearr_8865_8871 = state;
(statearr_8865_8871[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__8862,map__8862__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_8866_8872 = state;
(statearr_8866_8872[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8857){
var G__8858 = cljs.core.first.call(null,seq8857);
var seq8857__$1 = cljs.core.next.call(null,seq8857);
var G__8859 = cljs.core.first.call(null,seq8857__$1);
var seq8857__$2 = cljs.core.next.call(null,seq8857__$1);
var G__8860 = cljs.core.first.call(null,seq8857__$2);
var seq8857__$3 = cljs.core.next.call(null,seq8857__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8858,G__8859,G__8860,seq8857__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async9036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9036 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta9037){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta9037 = meta9037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9038,meta9037__$1){
var self__ = this;
var _9038__$1 = this;
return (new cljs.core.async.t_cljs$core$async9036(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta9037__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9038){
var self__ = this;
var _9038__$1 = this;
return self__.meta9037;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9036.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9036.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async9036.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9036.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9036.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9036.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9036.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9036.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta9037","meta9037",732528634,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9036";

cljs.core.async.t_cljs$core$async9036.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async9036");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async9036 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async9036(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9037){
return (new cljs.core.async.t_cljs$core$async9036(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9037));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async9036(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7486__auto___9199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___9199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___9199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9136){
var state_val_9137 = (state_9136[(1)]);
if((state_val_9137 === (7))){
var inst_9054 = (state_9136[(2)]);
var state_9136__$1 = state_9136;
var statearr_9138_9200 = state_9136__$1;
(statearr_9138_9200[(2)] = inst_9054);

(statearr_9138_9200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (20))){
var inst_9066 = (state_9136[(7)]);
var state_9136__$1 = state_9136;
var statearr_9139_9201 = state_9136__$1;
(statearr_9139_9201[(2)] = inst_9066);

(statearr_9139_9201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (27))){
var state_9136__$1 = state_9136;
var statearr_9140_9202 = state_9136__$1;
(statearr_9140_9202[(2)] = null);

(statearr_9140_9202[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (1))){
var inst_9042 = (state_9136[(8)]);
var inst_9042__$1 = calc_state.call(null);
var inst_9044 = (inst_9042__$1 == null);
var inst_9045 = cljs.core.not.call(null,inst_9044);
var state_9136__$1 = (function (){var statearr_9141 = state_9136;
(statearr_9141[(8)] = inst_9042__$1);

return statearr_9141;
})();
if(inst_9045){
var statearr_9142_9203 = state_9136__$1;
(statearr_9142_9203[(1)] = (2));

} else {
var statearr_9143_9204 = state_9136__$1;
(statearr_9143_9204[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (24))){
var inst_9096 = (state_9136[(9)]);
var inst_9089 = (state_9136[(10)]);
var inst_9110 = (state_9136[(11)]);
var inst_9110__$1 = inst_9089.call(null,inst_9096);
var state_9136__$1 = (function (){var statearr_9144 = state_9136;
(statearr_9144[(11)] = inst_9110__$1);

return statearr_9144;
})();
if(cljs.core.truth_(inst_9110__$1)){
var statearr_9145_9205 = state_9136__$1;
(statearr_9145_9205[(1)] = (29));

} else {
var statearr_9146_9206 = state_9136__$1;
(statearr_9146_9206[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (4))){
var inst_9057 = (state_9136[(2)]);
var state_9136__$1 = state_9136;
if(cljs.core.truth_(inst_9057)){
var statearr_9147_9207 = state_9136__$1;
(statearr_9147_9207[(1)] = (8));

} else {
var statearr_9148_9208 = state_9136__$1;
(statearr_9148_9208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (15))){
var inst_9083 = (state_9136[(2)]);
var state_9136__$1 = state_9136;
if(cljs.core.truth_(inst_9083)){
var statearr_9149_9209 = state_9136__$1;
(statearr_9149_9209[(1)] = (19));

} else {
var statearr_9150_9210 = state_9136__$1;
(statearr_9150_9210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (21))){
var inst_9088 = (state_9136[(12)]);
var inst_9088__$1 = (state_9136[(2)]);
var inst_9089 = cljs.core.get.call(null,inst_9088__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9090 = cljs.core.get.call(null,inst_9088__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9091 = cljs.core.get.call(null,inst_9088__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9136__$1 = (function (){var statearr_9151 = state_9136;
(statearr_9151[(12)] = inst_9088__$1);

(statearr_9151[(13)] = inst_9090);

(statearr_9151[(10)] = inst_9089);

return statearr_9151;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9136__$1,(22),inst_9091);
} else {
if((state_val_9137 === (31))){
var inst_9118 = (state_9136[(2)]);
var state_9136__$1 = state_9136;
if(cljs.core.truth_(inst_9118)){
var statearr_9152_9211 = state_9136__$1;
(statearr_9152_9211[(1)] = (32));

} else {
var statearr_9153_9212 = state_9136__$1;
(statearr_9153_9212[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (32))){
var inst_9095 = (state_9136[(14)]);
var state_9136__$1 = state_9136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9136__$1,(35),out,inst_9095);
} else {
if((state_val_9137 === (33))){
var inst_9088 = (state_9136[(12)]);
var inst_9066 = inst_9088;
var state_9136__$1 = (function (){var statearr_9154 = state_9136;
(statearr_9154[(7)] = inst_9066);

return statearr_9154;
})();
var statearr_9155_9213 = state_9136__$1;
(statearr_9155_9213[(2)] = null);

(statearr_9155_9213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (13))){
var inst_9066 = (state_9136[(7)]);
var inst_9073 = inst_9066.cljs$lang$protocol_mask$partition0$;
var inst_9074 = (inst_9073 & (64));
var inst_9075 = inst_9066.cljs$core$ISeq$;
var inst_9076 = (inst_9074) || (inst_9075);
var state_9136__$1 = state_9136;
if(cljs.core.truth_(inst_9076)){
var statearr_9156_9214 = state_9136__$1;
(statearr_9156_9214[(1)] = (16));

} else {
var statearr_9157_9215 = state_9136__$1;
(statearr_9157_9215[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (22))){
var inst_9096 = (state_9136[(9)]);
var inst_9095 = (state_9136[(14)]);
var inst_9094 = (state_9136[(2)]);
var inst_9095__$1 = cljs.core.nth.call(null,inst_9094,(0),null);
var inst_9096__$1 = cljs.core.nth.call(null,inst_9094,(1),null);
var inst_9097 = (inst_9095__$1 == null);
var inst_9098 = cljs.core._EQ_.call(null,inst_9096__$1,change);
var inst_9099 = (inst_9097) || (inst_9098);
var state_9136__$1 = (function (){var statearr_9158 = state_9136;
(statearr_9158[(9)] = inst_9096__$1);

(statearr_9158[(14)] = inst_9095__$1);

return statearr_9158;
})();
if(cljs.core.truth_(inst_9099)){
var statearr_9159_9216 = state_9136__$1;
(statearr_9159_9216[(1)] = (23));

} else {
var statearr_9160_9217 = state_9136__$1;
(statearr_9160_9217[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (36))){
var inst_9088 = (state_9136[(12)]);
var inst_9066 = inst_9088;
var state_9136__$1 = (function (){var statearr_9161 = state_9136;
(statearr_9161[(7)] = inst_9066);

return statearr_9161;
})();
var statearr_9162_9218 = state_9136__$1;
(statearr_9162_9218[(2)] = null);

(statearr_9162_9218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (29))){
var inst_9110 = (state_9136[(11)]);
var state_9136__$1 = state_9136;
var statearr_9163_9219 = state_9136__$1;
(statearr_9163_9219[(2)] = inst_9110);

(statearr_9163_9219[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (6))){
var state_9136__$1 = state_9136;
var statearr_9164_9220 = state_9136__$1;
(statearr_9164_9220[(2)] = false);

(statearr_9164_9220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (28))){
var inst_9106 = (state_9136[(2)]);
var inst_9107 = calc_state.call(null);
var inst_9066 = inst_9107;
var state_9136__$1 = (function (){var statearr_9165 = state_9136;
(statearr_9165[(15)] = inst_9106);

(statearr_9165[(7)] = inst_9066);

return statearr_9165;
})();
var statearr_9166_9221 = state_9136__$1;
(statearr_9166_9221[(2)] = null);

(statearr_9166_9221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (25))){
var inst_9132 = (state_9136[(2)]);
var state_9136__$1 = state_9136;
var statearr_9167_9222 = state_9136__$1;
(statearr_9167_9222[(2)] = inst_9132);

(statearr_9167_9222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (34))){
var inst_9130 = (state_9136[(2)]);
var state_9136__$1 = state_9136;
var statearr_9168_9223 = state_9136__$1;
(statearr_9168_9223[(2)] = inst_9130);

(statearr_9168_9223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (17))){
var state_9136__$1 = state_9136;
var statearr_9169_9224 = state_9136__$1;
(statearr_9169_9224[(2)] = false);

(statearr_9169_9224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (3))){
var state_9136__$1 = state_9136;
var statearr_9170_9225 = state_9136__$1;
(statearr_9170_9225[(2)] = false);

(statearr_9170_9225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (12))){
var inst_9134 = (state_9136[(2)]);
var state_9136__$1 = state_9136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9136__$1,inst_9134);
} else {
if((state_val_9137 === (2))){
var inst_9042 = (state_9136[(8)]);
var inst_9047 = inst_9042.cljs$lang$protocol_mask$partition0$;
var inst_9048 = (inst_9047 & (64));
var inst_9049 = inst_9042.cljs$core$ISeq$;
var inst_9050 = (inst_9048) || (inst_9049);
var state_9136__$1 = state_9136;
if(cljs.core.truth_(inst_9050)){
var statearr_9171_9226 = state_9136__$1;
(statearr_9171_9226[(1)] = (5));

} else {
var statearr_9172_9227 = state_9136__$1;
(statearr_9172_9227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (23))){
var inst_9095 = (state_9136[(14)]);
var inst_9101 = (inst_9095 == null);
var state_9136__$1 = state_9136;
if(cljs.core.truth_(inst_9101)){
var statearr_9173_9228 = state_9136__$1;
(statearr_9173_9228[(1)] = (26));

} else {
var statearr_9174_9229 = state_9136__$1;
(statearr_9174_9229[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (35))){
var inst_9121 = (state_9136[(2)]);
var state_9136__$1 = state_9136;
if(cljs.core.truth_(inst_9121)){
var statearr_9175_9230 = state_9136__$1;
(statearr_9175_9230[(1)] = (36));

} else {
var statearr_9176_9231 = state_9136__$1;
(statearr_9176_9231[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (19))){
var inst_9066 = (state_9136[(7)]);
var inst_9085 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9066);
var state_9136__$1 = state_9136;
var statearr_9177_9232 = state_9136__$1;
(statearr_9177_9232[(2)] = inst_9085);

(statearr_9177_9232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (11))){
var inst_9066 = (state_9136[(7)]);
var inst_9070 = (inst_9066 == null);
var inst_9071 = cljs.core.not.call(null,inst_9070);
var state_9136__$1 = state_9136;
if(inst_9071){
var statearr_9178_9233 = state_9136__$1;
(statearr_9178_9233[(1)] = (13));

} else {
var statearr_9179_9234 = state_9136__$1;
(statearr_9179_9234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (9))){
var inst_9042 = (state_9136[(8)]);
var state_9136__$1 = state_9136;
var statearr_9180_9235 = state_9136__$1;
(statearr_9180_9235[(2)] = inst_9042);

(statearr_9180_9235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (5))){
var state_9136__$1 = state_9136;
var statearr_9181_9236 = state_9136__$1;
(statearr_9181_9236[(2)] = true);

(statearr_9181_9236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (14))){
var state_9136__$1 = state_9136;
var statearr_9182_9237 = state_9136__$1;
(statearr_9182_9237[(2)] = false);

(statearr_9182_9237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (26))){
var inst_9096 = (state_9136[(9)]);
var inst_9103 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9096);
var state_9136__$1 = state_9136;
var statearr_9183_9238 = state_9136__$1;
(statearr_9183_9238[(2)] = inst_9103);

(statearr_9183_9238[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (16))){
var state_9136__$1 = state_9136;
var statearr_9184_9239 = state_9136__$1;
(statearr_9184_9239[(2)] = true);

(statearr_9184_9239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (38))){
var inst_9126 = (state_9136[(2)]);
var state_9136__$1 = state_9136;
var statearr_9185_9240 = state_9136__$1;
(statearr_9185_9240[(2)] = inst_9126);

(statearr_9185_9240[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (30))){
var inst_9090 = (state_9136[(13)]);
var inst_9096 = (state_9136[(9)]);
var inst_9089 = (state_9136[(10)]);
var inst_9113 = cljs.core.empty_QMARK_.call(null,inst_9089);
var inst_9114 = inst_9090.call(null,inst_9096);
var inst_9115 = cljs.core.not.call(null,inst_9114);
var inst_9116 = (inst_9113) && (inst_9115);
var state_9136__$1 = state_9136;
var statearr_9186_9241 = state_9136__$1;
(statearr_9186_9241[(2)] = inst_9116);

(statearr_9186_9241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (10))){
var inst_9042 = (state_9136[(8)]);
var inst_9062 = (state_9136[(2)]);
var inst_9063 = cljs.core.get.call(null,inst_9062,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9064 = cljs.core.get.call(null,inst_9062,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9065 = cljs.core.get.call(null,inst_9062,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_9066 = inst_9042;
var state_9136__$1 = (function (){var statearr_9187 = state_9136;
(statearr_9187[(16)] = inst_9065);

(statearr_9187[(17)] = inst_9063);

(statearr_9187[(7)] = inst_9066);

(statearr_9187[(18)] = inst_9064);

return statearr_9187;
})();
var statearr_9188_9242 = state_9136__$1;
(statearr_9188_9242[(2)] = null);

(statearr_9188_9242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (18))){
var inst_9080 = (state_9136[(2)]);
var state_9136__$1 = state_9136;
var statearr_9189_9243 = state_9136__$1;
(statearr_9189_9243[(2)] = inst_9080);

(statearr_9189_9243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (37))){
var state_9136__$1 = state_9136;
var statearr_9190_9244 = state_9136__$1;
(statearr_9190_9244[(2)] = null);

(statearr_9190_9244[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9137 === (8))){
var inst_9042 = (state_9136[(8)]);
var inst_9059 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9042);
var state_9136__$1 = state_9136;
var statearr_9191_9245 = state_9136__$1;
(statearr_9191_9245[(2)] = inst_9059);

(statearr_9191_9245[(1)] = (10));


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
});})(c__7486__auto___9199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7374__auto__,c__7486__auto___9199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7375__auto__ = null;
var cljs$core$async$mix_$_state_machine__7375__auto____0 = (function (){
var statearr_9195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9195[(0)] = cljs$core$async$mix_$_state_machine__7375__auto__);

(statearr_9195[(1)] = (1));

return statearr_9195;
});
var cljs$core$async$mix_$_state_machine__7375__auto____1 = (function (state_9136){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_9136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e9196){if((e9196 instanceof Object)){
var ex__7378__auto__ = e9196;
var statearr_9197_9246 = state_9136;
(statearr_9197_9246[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9247 = state_9136;
state_9136 = G__9247;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7375__auto__ = function(state_9136){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7375__auto____1.call(this,state_9136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7375__auto____0;
cljs$core$async$mix_$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7375__auto____1;
return cljs$core$async$mix_$_state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___9199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7488__auto__ = (function (){var statearr_9198 = f__7487__auto__.call(null);
(statearr_9198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___9199);

return statearr_9198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___9199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5643__auto__ = (((p == null))?null:p);
var m__5644__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5644__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5643__auto__ = (((p == null))?null:p);
var m__5644__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,p,v,ch);
} else {
var m__5644__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args9248 = [];
var len__6046__auto___9251 = arguments.length;
var i__6047__auto___9252 = (0);
while(true){
if((i__6047__auto___9252 < len__6046__auto___9251)){
args9248.push((arguments[i__6047__auto___9252]));

var G__9253 = (i__6047__auto___9252 + (1));
i__6047__auto___9252 = G__9253;
continue;
} else {
}
break;
}

var G__9250 = args9248.length;
switch (G__9250) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9248.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5643__auto__ = (((p == null))?null:p);
var m__5644__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,p);
} else {
var m__5644__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5643__auto__ = (((p == null))?null:p);
var m__5644__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,p,v);
} else {
var m__5644__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args9256 = [];
var len__6046__auto___9381 = arguments.length;
var i__6047__auto___9382 = (0);
while(true){
if((i__6047__auto___9382 < len__6046__auto___9381)){
args9256.push((arguments[i__6047__auto___9382]));

var G__9383 = (i__6047__auto___9382 + (1));
i__6047__auto___9382 = G__9383;
continue;
} else {
}
break;
}

var G__9258 = args9256.length;
switch (G__9258) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9256.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4988__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4988__auto__,mults){
return (function (p1__9255_SHARP_){
if(cljs.core.truth_(p1__9255_SHARP_.call(null,topic))){
return p1__9255_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__9255_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4988__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async9259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9259 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9260){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9260 = meta9260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9261,meta9260__$1){
var self__ = this;
var _9261__$1 = this;
return (new cljs.core.async.t_cljs$core$async9259(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9260__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9261){
var self__ = this;
var _9261__$1 = this;
return self__.meta9260;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9259.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9259.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async9259.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9259.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9259.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9259.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9259.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta9260","meta9260",950157360,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9259";

cljs.core.async.t_cljs$core$async9259.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async9259");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async9259 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9259(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9260){
return (new cljs.core.async.t_cljs$core$async9259(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9260));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9259(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7486__auto___9385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___9385,mults,ensure_mult,p){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___9385,mults,ensure_mult,p){
return (function (state_9333){
var state_val_9334 = (state_9333[(1)]);
if((state_val_9334 === (7))){
var inst_9329 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
var statearr_9335_9386 = state_9333__$1;
(statearr_9335_9386[(2)] = inst_9329);

(statearr_9335_9386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (20))){
var state_9333__$1 = state_9333;
var statearr_9336_9387 = state_9333__$1;
(statearr_9336_9387[(2)] = null);

(statearr_9336_9387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (1))){
var state_9333__$1 = state_9333;
var statearr_9337_9388 = state_9333__$1;
(statearr_9337_9388[(2)] = null);

(statearr_9337_9388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (24))){
var inst_9312 = (state_9333[(7)]);
var inst_9321 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9312);
var state_9333__$1 = state_9333;
var statearr_9338_9389 = state_9333__$1;
(statearr_9338_9389[(2)] = inst_9321);

(statearr_9338_9389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (4))){
var inst_9264 = (state_9333[(8)]);
var inst_9264__$1 = (state_9333[(2)]);
var inst_9265 = (inst_9264__$1 == null);
var state_9333__$1 = (function (){var statearr_9339 = state_9333;
(statearr_9339[(8)] = inst_9264__$1);

return statearr_9339;
})();
if(cljs.core.truth_(inst_9265)){
var statearr_9340_9390 = state_9333__$1;
(statearr_9340_9390[(1)] = (5));

} else {
var statearr_9341_9391 = state_9333__$1;
(statearr_9341_9391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (15))){
var inst_9306 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
var statearr_9342_9392 = state_9333__$1;
(statearr_9342_9392[(2)] = inst_9306);

(statearr_9342_9392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (21))){
var inst_9326 = (state_9333[(2)]);
var state_9333__$1 = (function (){var statearr_9343 = state_9333;
(statearr_9343[(9)] = inst_9326);

return statearr_9343;
})();
var statearr_9344_9393 = state_9333__$1;
(statearr_9344_9393[(2)] = null);

(statearr_9344_9393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (13))){
var inst_9288 = (state_9333[(10)]);
var inst_9290 = cljs.core.chunked_seq_QMARK_.call(null,inst_9288);
var state_9333__$1 = state_9333;
if(inst_9290){
var statearr_9345_9394 = state_9333__$1;
(statearr_9345_9394[(1)] = (16));

} else {
var statearr_9346_9395 = state_9333__$1;
(statearr_9346_9395[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (22))){
var inst_9318 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
if(cljs.core.truth_(inst_9318)){
var statearr_9347_9396 = state_9333__$1;
(statearr_9347_9396[(1)] = (23));

} else {
var statearr_9348_9397 = state_9333__$1;
(statearr_9348_9397[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (6))){
var inst_9314 = (state_9333[(11)]);
var inst_9312 = (state_9333[(7)]);
var inst_9264 = (state_9333[(8)]);
var inst_9312__$1 = topic_fn.call(null,inst_9264);
var inst_9313 = cljs.core.deref.call(null,mults);
var inst_9314__$1 = cljs.core.get.call(null,inst_9313,inst_9312__$1);
var state_9333__$1 = (function (){var statearr_9349 = state_9333;
(statearr_9349[(11)] = inst_9314__$1);

(statearr_9349[(7)] = inst_9312__$1);

return statearr_9349;
})();
if(cljs.core.truth_(inst_9314__$1)){
var statearr_9350_9398 = state_9333__$1;
(statearr_9350_9398[(1)] = (19));

} else {
var statearr_9351_9399 = state_9333__$1;
(statearr_9351_9399[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (25))){
var inst_9323 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
var statearr_9352_9400 = state_9333__$1;
(statearr_9352_9400[(2)] = inst_9323);

(statearr_9352_9400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (17))){
var inst_9288 = (state_9333[(10)]);
var inst_9297 = cljs.core.first.call(null,inst_9288);
var inst_9298 = cljs.core.async.muxch_STAR_.call(null,inst_9297);
var inst_9299 = cljs.core.async.close_BANG_.call(null,inst_9298);
var inst_9300 = cljs.core.next.call(null,inst_9288);
var inst_9274 = inst_9300;
var inst_9275 = null;
var inst_9276 = (0);
var inst_9277 = (0);
var state_9333__$1 = (function (){var statearr_9353 = state_9333;
(statearr_9353[(12)] = inst_9299);

(statearr_9353[(13)] = inst_9275);

(statearr_9353[(14)] = inst_9274);

(statearr_9353[(15)] = inst_9277);

(statearr_9353[(16)] = inst_9276);

return statearr_9353;
})();
var statearr_9354_9401 = state_9333__$1;
(statearr_9354_9401[(2)] = null);

(statearr_9354_9401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (3))){
var inst_9331 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9333__$1,inst_9331);
} else {
if((state_val_9334 === (12))){
var inst_9308 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
var statearr_9355_9402 = state_9333__$1;
(statearr_9355_9402[(2)] = inst_9308);

(statearr_9355_9402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (2))){
var state_9333__$1 = state_9333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9333__$1,(4),ch);
} else {
if((state_val_9334 === (23))){
var state_9333__$1 = state_9333;
var statearr_9356_9403 = state_9333__$1;
(statearr_9356_9403[(2)] = null);

(statearr_9356_9403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (19))){
var inst_9314 = (state_9333[(11)]);
var inst_9264 = (state_9333[(8)]);
var inst_9316 = cljs.core.async.muxch_STAR_.call(null,inst_9314);
var state_9333__$1 = state_9333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9333__$1,(22),inst_9316,inst_9264);
} else {
if((state_val_9334 === (11))){
var inst_9288 = (state_9333[(10)]);
var inst_9274 = (state_9333[(14)]);
var inst_9288__$1 = cljs.core.seq.call(null,inst_9274);
var state_9333__$1 = (function (){var statearr_9357 = state_9333;
(statearr_9357[(10)] = inst_9288__$1);

return statearr_9357;
})();
if(inst_9288__$1){
var statearr_9358_9404 = state_9333__$1;
(statearr_9358_9404[(1)] = (13));

} else {
var statearr_9359_9405 = state_9333__$1;
(statearr_9359_9405[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (9))){
var inst_9310 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
var statearr_9360_9406 = state_9333__$1;
(statearr_9360_9406[(2)] = inst_9310);

(statearr_9360_9406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (5))){
var inst_9271 = cljs.core.deref.call(null,mults);
var inst_9272 = cljs.core.vals.call(null,inst_9271);
var inst_9273 = cljs.core.seq.call(null,inst_9272);
var inst_9274 = inst_9273;
var inst_9275 = null;
var inst_9276 = (0);
var inst_9277 = (0);
var state_9333__$1 = (function (){var statearr_9361 = state_9333;
(statearr_9361[(13)] = inst_9275);

(statearr_9361[(14)] = inst_9274);

(statearr_9361[(15)] = inst_9277);

(statearr_9361[(16)] = inst_9276);

return statearr_9361;
})();
var statearr_9362_9407 = state_9333__$1;
(statearr_9362_9407[(2)] = null);

(statearr_9362_9407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (14))){
var state_9333__$1 = state_9333;
var statearr_9366_9408 = state_9333__$1;
(statearr_9366_9408[(2)] = null);

(statearr_9366_9408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (16))){
var inst_9288 = (state_9333[(10)]);
var inst_9292 = cljs.core.chunk_first.call(null,inst_9288);
var inst_9293 = cljs.core.chunk_rest.call(null,inst_9288);
var inst_9294 = cljs.core.count.call(null,inst_9292);
var inst_9274 = inst_9293;
var inst_9275 = inst_9292;
var inst_9276 = inst_9294;
var inst_9277 = (0);
var state_9333__$1 = (function (){var statearr_9367 = state_9333;
(statearr_9367[(13)] = inst_9275);

(statearr_9367[(14)] = inst_9274);

(statearr_9367[(15)] = inst_9277);

(statearr_9367[(16)] = inst_9276);

return statearr_9367;
})();
var statearr_9368_9409 = state_9333__$1;
(statearr_9368_9409[(2)] = null);

(statearr_9368_9409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (10))){
var inst_9275 = (state_9333[(13)]);
var inst_9274 = (state_9333[(14)]);
var inst_9277 = (state_9333[(15)]);
var inst_9276 = (state_9333[(16)]);
var inst_9282 = cljs.core._nth.call(null,inst_9275,inst_9277);
var inst_9283 = cljs.core.async.muxch_STAR_.call(null,inst_9282);
var inst_9284 = cljs.core.async.close_BANG_.call(null,inst_9283);
var inst_9285 = (inst_9277 + (1));
var tmp9363 = inst_9275;
var tmp9364 = inst_9274;
var tmp9365 = inst_9276;
var inst_9274__$1 = tmp9364;
var inst_9275__$1 = tmp9363;
var inst_9276__$1 = tmp9365;
var inst_9277__$1 = inst_9285;
var state_9333__$1 = (function (){var statearr_9369 = state_9333;
(statearr_9369[(13)] = inst_9275__$1);

(statearr_9369[(14)] = inst_9274__$1);

(statearr_9369[(17)] = inst_9284);

(statearr_9369[(15)] = inst_9277__$1);

(statearr_9369[(16)] = inst_9276__$1);

return statearr_9369;
})();
var statearr_9370_9410 = state_9333__$1;
(statearr_9370_9410[(2)] = null);

(statearr_9370_9410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (18))){
var inst_9303 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
var statearr_9371_9411 = state_9333__$1;
(statearr_9371_9411[(2)] = inst_9303);

(statearr_9371_9411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (8))){
var inst_9277 = (state_9333[(15)]);
var inst_9276 = (state_9333[(16)]);
var inst_9279 = (inst_9277 < inst_9276);
var inst_9280 = inst_9279;
var state_9333__$1 = state_9333;
if(cljs.core.truth_(inst_9280)){
var statearr_9372_9412 = state_9333__$1;
(statearr_9372_9412[(1)] = (10));

} else {
var statearr_9373_9413 = state_9333__$1;
(statearr_9373_9413[(1)] = (11));

}

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
});})(c__7486__auto___9385,mults,ensure_mult,p))
;
return ((function (switch__7374__auto__,c__7486__auto___9385,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7375__auto__ = null;
var cljs$core$async$state_machine__7375__auto____0 = (function (){
var statearr_9377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9377[(0)] = cljs$core$async$state_machine__7375__auto__);

(statearr_9377[(1)] = (1));

return statearr_9377;
});
var cljs$core$async$state_machine__7375__auto____1 = (function (state_9333){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_9333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e9378){if((e9378 instanceof Object)){
var ex__7378__auto__ = e9378;
var statearr_9379_9414 = state_9333;
(statearr_9379_9414[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9415 = state_9333;
state_9333 = G__9415;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$state_machine__7375__auto__ = function(state_9333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7375__auto____1.call(this,state_9333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7375__auto____0;
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7375__auto____1;
return cljs$core$async$state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___9385,mults,ensure_mult,p))
})();
var state__7488__auto__ = (function (){var statearr_9380 = f__7487__auto__.call(null);
(statearr_9380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___9385);

return statearr_9380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___9385,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args9416 = [];
var len__6046__auto___9419 = arguments.length;
var i__6047__auto___9420 = (0);
while(true){
if((i__6047__auto___9420 < len__6046__auto___9419)){
args9416.push((arguments[i__6047__auto___9420]));

var G__9421 = (i__6047__auto___9420 + (1));
i__6047__auto___9420 = G__9421;
continue;
} else {
}
break;
}

var G__9418 = args9416.length;
switch (G__9418) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9416.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args9423 = [];
var len__6046__auto___9426 = arguments.length;
var i__6047__auto___9427 = (0);
while(true){
if((i__6047__auto___9427 < len__6046__auto___9426)){
args9423.push((arguments[i__6047__auto___9427]));

var G__9428 = (i__6047__auto___9427 + (1));
i__6047__auto___9427 = G__9428;
continue;
} else {
}
break;
}

var G__9425 = args9423.length;
switch (G__9425) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9423.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args9430 = [];
var len__6046__auto___9501 = arguments.length;
var i__6047__auto___9502 = (0);
while(true){
if((i__6047__auto___9502 < len__6046__auto___9501)){
args9430.push((arguments[i__6047__auto___9502]));

var G__9503 = (i__6047__auto___9502 + (1));
i__6047__auto___9502 = G__9503;
continue;
} else {
}
break;
}

var G__9432 = args9430.length;
switch (G__9432) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9430.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7486__auto___9505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___9505,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___9505,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9471){
var state_val_9472 = (state_9471[(1)]);
if((state_val_9472 === (7))){
var state_9471__$1 = state_9471;
var statearr_9473_9506 = state_9471__$1;
(statearr_9473_9506[(2)] = null);

(statearr_9473_9506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9472 === (1))){
var state_9471__$1 = state_9471;
var statearr_9474_9507 = state_9471__$1;
(statearr_9474_9507[(2)] = null);

(statearr_9474_9507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9472 === (4))){
var inst_9435 = (state_9471[(7)]);
var inst_9437 = (inst_9435 < cnt);
var state_9471__$1 = state_9471;
if(cljs.core.truth_(inst_9437)){
var statearr_9475_9508 = state_9471__$1;
(statearr_9475_9508[(1)] = (6));

} else {
var statearr_9476_9509 = state_9471__$1;
(statearr_9476_9509[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9472 === (15))){
var inst_9467 = (state_9471[(2)]);
var state_9471__$1 = state_9471;
var statearr_9477_9510 = state_9471__$1;
(statearr_9477_9510[(2)] = inst_9467);

(statearr_9477_9510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9472 === (13))){
var inst_9460 = cljs.core.async.close_BANG_.call(null,out);
var state_9471__$1 = state_9471;
var statearr_9478_9511 = state_9471__$1;
(statearr_9478_9511[(2)] = inst_9460);

(statearr_9478_9511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9472 === (6))){
var state_9471__$1 = state_9471;
var statearr_9479_9512 = state_9471__$1;
(statearr_9479_9512[(2)] = null);

(statearr_9479_9512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9472 === (3))){
var inst_9469 = (state_9471[(2)]);
var state_9471__$1 = state_9471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9471__$1,inst_9469);
} else {
if((state_val_9472 === (12))){
var inst_9457 = (state_9471[(8)]);
var inst_9457__$1 = (state_9471[(2)]);
var inst_9458 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9457__$1);
var state_9471__$1 = (function (){var statearr_9480 = state_9471;
(statearr_9480[(8)] = inst_9457__$1);

return statearr_9480;
})();
if(cljs.core.truth_(inst_9458)){
var statearr_9481_9513 = state_9471__$1;
(statearr_9481_9513[(1)] = (13));

} else {
var statearr_9482_9514 = state_9471__$1;
(statearr_9482_9514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9472 === (2))){
var inst_9434 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9435 = (0);
var state_9471__$1 = (function (){var statearr_9483 = state_9471;
(statearr_9483[(9)] = inst_9434);

(statearr_9483[(7)] = inst_9435);

return statearr_9483;
})();
var statearr_9484_9515 = state_9471__$1;
(statearr_9484_9515[(2)] = null);

(statearr_9484_9515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9472 === (11))){
var inst_9435 = (state_9471[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9471,(10),Object,null,(9));
var inst_9444 = chs__$1.call(null,inst_9435);
var inst_9445 = done.call(null,inst_9435);
var inst_9446 = cljs.core.async.take_BANG_.call(null,inst_9444,inst_9445);
var state_9471__$1 = state_9471;
var statearr_9485_9516 = state_9471__$1;
(statearr_9485_9516[(2)] = inst_9446);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9471__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9472 === (9))){
var inst_9435 = (state_9471[(7)]);
var inst_9448 = (state_9471[(2)]);
var inst_9449 = (inst_9435 + (1));
var inst_9435__$1 = inst_9449;
var state_9471__$1 = (function (){var statearr_9486 = state_9471;
(statearr_9486[(10)] = inst_9448);

(statearr_9486[(7)] = inst_9435__$1);

return statearr_9486;
})();
var statearr_9487_9517 = state_9471__$1;
(statearr_9487_9517[(2)] = null);

(statearr_9487_9517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9472 === (5))){
var inst_9455 = (state_9471[(2)]);
var state_9471__$1 = (function (){var statearr_9488 = state_9471;
(statearr_9488[(11)] = inst_9455);

return statearr_9488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9471__$1,(12),dchan);
} else {
if((state_val_9472 === (14))){
var inst_9457 = (state_9471[(8)]);
var inst_9462 = cljs.core.apply.call(null,f,inst_9457);
var state_9471__$1 = state_9471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9471__$1,(16),out,inst_9462);
} else {
if((state_val_9472 === (16))){
var inst_9464 = (state_9471[(2)]);
var state_9471__$1 = (function (){var statearr_9489 = state_9471;
(statearr_9489[(12)] = inst_9464);

return statearr_9489;
})();
var statearr_9490_9518 = state_9471__$1;
(statearr_9490_9518[(2)] = null);

(statearr_9490_9518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9472 === (10))){
var inst_9439 = (state_9471[(2)]);
var inst_9440 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9471__$1 = (function (){var statearr_9491 = state_9471;
(statearr_9491[(13)] = inst_9439);

return statearr_9491;
})();
var statearr_9492_9519 = state_9471__$1;
(statearr_9492_9519[(2)] = inst_9440);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9471__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9472 === (8))){
var inst_9453 = (state_9471[(2)]);
var state_9471__$1 = state_9471;
var statearr_9493_9520 = state_9471__$1;
(statearr_9493_9520[(2)] = inst_9453);

(statearr_9493_9520[(1)] = (5));


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
}
}
}
});})(c__7486__auto___9505,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7374__auto__,c__7486__auto___9505,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7375__auto__ = null;
var cljs$core$async$state_machine__7375__auto____0 = (function (){
var statearr_9497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9497[(0)] = cljs$core$async$state_machine__7375__auto__);

(statearr_9497[(1)] = (1));

return statearr_9497;
});
var cljs$core$async$state_machine__7375__auto____1 = (function (state_9471){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_9471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e9498){if((e9498 instanceof Object)){
var ex__7378__auto__ = e9498;
var statearr_9499_9521 = state_9471;
(statearr_9499_9521[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9522 = state_9471;
state_9471 = G__9522;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$state_machine__7375__auto__ = function(state_9471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7375__auto____1.call(this,state_9471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7375__auto____0;
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7375__auto____1;
return cljs$core$async$state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___9505,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7488__auto__ = (function (){var statearr_9500 = f__7487__auto__.call(null);
(statearr_9500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___9505);

return statearr_9500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___9505,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args9524 = [];
var len__6046__auto___9580 = arguments.length;
var i__6047__auto___9581 = (0);
while(true){
if((i__6047__auto___9581 < len__6046__auto___9580)){
args9524.push((arguments[i__6047__auto___9581]));

var G__9582 = (i__6047__auto___9581 + (1));
i__6047__auto___9581 = G__9582;
continue;
} else {
}
break;
}

var G__9526 = args9524.length;
switch (G__9526) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9524.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7486__auto___9584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___9584,out){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___9584,out){
return (function (state_9556){
var state_val_9557 = (state_9556[(1)]);
if((state_val_9557 === (7))){
var inst_9535 = (state_9556[(7)]);
var inst_9536 = (state_9556[(8)]);
var inst_9535__$1 = (state_9556[(2)]);
var inst_9536__$1 = cljs.core.nth.call(null,inst_9535__$1,(0),null);
var inst_9537 = cljs.core.nth.call(null,inst_9535__$1,(1),null);
var inst_9538 = (inst_9536__$1 == null);
var state_9556__$1 = (function (){var statearr_9558 = state_9556;
(statearr_9558[(7)] = inst_9535__$1);

(statearr_9558[(8)] = inst_9536__$1);

(statearr_9558[(9)] = inst_9537);

return statearr_9558;
})();
if(cljs.core.truth_(inst_9538)){
var statearr_9559_9585 = state_9556__$1;
(statearr_9559_9585[(1)] = (8));

} else {
var statearr_9560_9586 = state_9556__$1;
(statearr_9560_9586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9557 === (1))){
var inst_9527 = cljs.core.vec.call(null,chs);
var inst_9528 = inst_9527;
var state_9556__$1 = (function (){var statearr_9561 = state_9556;
(statearr_9561[(10)] = inst_9528);

return statearr_9561;
})();
var statearr_9562_9587 = state_9556__$1;
(statearr_9562_9587[(2)] = null);

(statearr_9562_9587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9557 === (4))){
var inst_9528 = (state_9556[(10)]);
var state_9556__$1 = state_9556;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9556__$1,(7),inst_9528);
} else {
if((state_val_9557 === (6))){
var inst_9552 = (state_9556[(2)]);
var state_9556__$1 = state_9556;
var statearr_9563_9588 = state_9556__$1;
(statearr_9563_9588[(2)] = inst_9552);

(statearr_9563_9588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9557 === (3))){
var inst_9554 = (state_9556[(2)]);
var state_9556__$1 = state_9556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9556__$1,inst_9554);
} else {
if((state_val_9557 === (2))){
var inst_9528 = (state_9556[(10)]);
var inst_9530 = cljs.core.count.call(null,inst_9528);
var inst_9531 = (inst_9530 > (0));
var state_9556__$1 = state_9556;
if(cljs.core.truth_(inst_9531)){
var statearr_9565_9589 = state_9556__$1;
(statearr_9565_9589[(1)] = (4));

} else {
var statearr_9566_9590 = state_9556__$1;
(statearr_9566_9590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9557 === (11))){
var inst_9528 = (state_9556[(10)]);
var inst_9545 = (state_9556[(2)]);
var tmp9564 = inst_9528;
var inst_9528__$1 = tmp9564;
var state_9556__$1 = (function (){var statearr_9567 = state_9556;
(statearr_9567[(10)] = inst_9528__$1);

(statearr_9567[(11)] = inst_9545);

return statearr_9567;
})();
var statearr_9568_9591 = state_9556__$1;
(statearr_9568_9591[(2)] = null);

(statearr_9568_9591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9557 === (9))){
var inst_9536 = (state_9556[(8)]);
var state_9556__$1 = state_9556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9556__$1,(11),out,inst_9536);
} else {
if((state_val_9557 === (5))){
var inst_9550 = cljs.core.async.close_BANG_.call(null,out);
var state_9556__$1 = state_9556;
var statearr_9569_9592 = state_9556__$1;
(statearr_9569_9592[(2)] = inst_9550);

(statearr_9569_9592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9557 === (10))){
var inst_9548 = (state_9556[(2)]);
var state_9556__$1 = state_9556;
var statearr_9570_9593 = state_9556__$1;
(statearr_9570_9593[(2)] = inst_9548);

(statearr_9570_9593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9557 === (8))){
var inst_9528 = (state_9556[(10)]);
var inst_9535 = (state_9556[(7)]);
var inst_9536 = (state_9556[(8)]);
var inst_9537 = (state_9556[(9)]);
var inst_9540 = (function (){var cs = inst_9528;
var vec__9533 = inst_9535;
var v = inst_9536;
var c = inst_9537;
return ((function (cs,vec__9533,v,c,inst_9528,inst_9535,inst_9536,inst_9537,state_val_9557,c__7486__auto___9584,out){
return (function (p1__9523_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9523_SHARP_);
});
;})(cs,vec__9533,v,c,inst_9528,inst_9535,inst_9536,inst_9537,state_val_9557,c__7486__auto___9584,out))
})();
var inst_9541 = cljs.core.filterv.call(null,inst_9540,inst_9528);
var inst_9528__$1 = inst_9541;
var state_9556__$1 = (function (){var statearr_9571 = state_9556;
(statearr_9571[(10)] = inst_9528__$1);

return statearr_9571;
})();
var statearr_9572_9594 = state_9556__$1;
(statearr_9572_9594[(2)] = null);

(statearr_9572_9594[(1)] = (2));


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
});})(c__7486__auto___9584,out))
;
return ((function (switch__7374__auto__,c__7486__auto___9584,out){
return (function() {
var cljs$core$async$state_machine__7375__auto__ = null;
var cljs$core$async$state_machine__7375__auto____0 = (function (){
var statearr_9576 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9576[(0)] = cljs$core$async$state_machine__7375__auto__);

(statearr_9576[(1)] = (1));

return statearr_9576;
});
var cljs$core$async$state_machine__7375__auto____1 = (function (state_9556){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_9556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e9577){if((e9577 instanceof Object)){
var ex__7378__auto__ = e9577;
var statearr_9578_9595 = state_9556;
(statearr_9578_9595[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9596 = state_9556;
state_9556 = G__9596;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$state_machine__7375__auto__ = function(state_9556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7375__auto____1.call(this,state_9556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7375__auto____0;
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7375__auto____1;
return cljs$core$async$state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___9584,out))
})();
var state__7488__auto__ = (function (){var statearr_9579 = f__7487__auto__.call(null);
(statearr_9579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___9584);

return statearr_9579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___9584,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args9597 = [];
var len__6046__auto___9646 = arguments.length;
var i__6047__auto___9647 = (0);
while(true){
if((i__6047__auto___9647 < len__6046__auto___9646)){
args9597.push((arguments[i__6047__auto___9647]));

var G__9648 = (i__6047__auto___9647 + (1));
i__6047__auto___9647 = G__9648;
continue;
} else {
}
break;
}

var G__9599 = args9597.length;
switch (G__9599) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9597.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7486__auto___9650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___9650,out){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___9650,out){
return (function (state_9623){
var state_val_9624 = (state_9623[(1)]);
if((state_val_9624 === (7))){
var inst_9605 = (state_9623[(7)]);
var inst_9605__$1 = (state_9623[(2)]);
var inst_9606 = (inst_9605__$1 == null);
var inst_9607 = cljs.core.not.call(null,inst_9606);
var state_9623__$1 = (function (){var statearr_9625 = state_9623;
(statearr_9625[(7)] = inst_9605__$1);

return statearr_9625;
})();
if(inst_9607){
var statearr_9626_9651 = state_9623__$1;
(statearr_9626_9651[(1)] = (8));

} else {
var statearr_9627_9652 = state_9623__$1;
(statearr_9627_9652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (1))){
var inst_9600 = (0);
var state_9623__$1 = (function (){var statearr_9628 = state_9623;
(statearr_9628[(8)] = inst_9600);

return statearr_9628;
})();
var statearr_9629_9653 = state_9623__$1;
(statearr_9629_9653[(2)] = null);

(statearr_9629_9653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (4))){
var state_9623__$1 = state_9623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9623__$1,(7),ch);
} else {
if((state_val_9624 === (6))){
var inst_9618 = (state_9623[(2)]);
var state_9623__$1 = state_9623;
var statearr_9630_9654 = state_9623__$1;
(statearr_9630_9654[(2)] = inst_9618);

(statearr_9630_9654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (3))){
var inst_9620 = (state_9623[(2)]);
var inst_9621 = cljs.core.async.close_BANG_.call(null,out);
var state_9623__$1 = (function (){var statearr_9631 = state_9623;
(statearr_9631[(9)] = inst_9620);

return statearr_9631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9623__$1,inst_9621);
} else {
if((state_val_9624 === (2))){
var inst_9600 = (state_9623[(8)]);
var inst_9602 = (inst_9600 < n);
var state_9623__$1 = state_9623;
if(cljs.core.truth_(inst_9602)){
var statearr_9632_9655 = state_9623__$1;
(statearr_9632_9655[(1)] = (4));

} else {
var statearr_9633_9656 = state_9623__$1;
(statearr_9633_9656[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (11))){
var inst_9600 = (state_9623[(8)]);
var inst_9610 = (state_9623[(2)]);
var inst_9611 = (inst_9600 + (1));
var inst_9600__$1 = inst_9611;
var state_9623__$1 = (function (){var statearr_9634 = state_9623;
(statearr_9634[(8)] = inst_9600__$1);

(statearr_9634[(10)] = inst_9610);

return statearr_9634;
})();
var statearr_9635_9657 = state_9623__$1;
(statearr_9635_9657[(2)] = null);

(statearr_9635_9657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (9))){
var state_9623__$1 = state_9623;
var statearr_9636_9658 = state_9623__$1;
(statearr_9636_9658[(2)] = null);

(statearr_9636_9658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (5))){
var state_9623__$1 = state_9623;
var statearr_9637_9659 = state_9623__$1;
(statearr_9637_9659[(2)] = null);

(statearr_9637_9659[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (10))){
var inst_9615 = (state_9623[(2)]);
var state_9623__$1 = state_9623;
var statearr_9638_9660 = state_9623__$1;
(statearr_9638_9660[(2)] = inst_9615);

(statearr_9638_9660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (8))){
var inst_9605 = (state_9623[(7)]);
var state_9623__$1 = state_9623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9623__$1,(11),out,inst_9605);
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
});})(c__7486__auto___9650,out))
;
return ((function (switch__7374__auto__,c__7486__auto___9650,out){
return (function() {
var cljs$core$async$state_machine__7375__auto__ = null;
var cljs$core$async$state_machine__7375__auto____0 = (function (){
var statearr_9642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9642[(0)] = cljs$core$async$state_machine__7375__auto__);

(statearr_9642[(1)] = (1));

return statearr_9642;
});
var cljs$core$async$state_machine__7375__auto____1 = (function (state_9623){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_9623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e9643){if((e9643 instanceof Object)){
var ex__7378__auto__ = e9643;
var statearr_9644_9661 = state_9623;
(statearr_9644_9661[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9662 = state_9623;
state_9623 = G__9662;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$state_machine__7375__auto__ = function(state_9623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7375__auto____1.call(this,state_9623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7375__auto____0;
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7375__auto____1;
return cljs$core$async$state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___9650,out))
})();
var state__7488__auto__ = (function (){var statearr_9645 = f__7487__auto__.call(null);
(statearr_9645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___9650);

return statearr_9645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___9650,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9670 = (function (map_LT_,f,ch,meta9671){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9671 = meta9671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9672,meta9671__$1){
var self__ = this;
var _9672__$1 = this;
return (new cljs.core.async.t_cljs$core$async9670(self__.map_LT_,self__.f,self__.ch,meta9671__$1));
});

cljs.core.async.t_cljs$core$async9670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9672){
var self__ = this;
var _9672__$1 = this;
return self__.meta9671;
});

cljs.core.async.t_cljs$core$async9670.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9670.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9670.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9673 = (function (map_LT_,f,ch,meta9671,_,fn1,meta9674){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9671 = meta9671;
this._ = _;
this.fn1 = fn1;
this.meta9674 = meta9674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9675,meta9674__$1){
var self__ = this;
var _9675__$1 = this;
return (new cljs.core.async.t_cljs$core$async9673(self__.map_LT_,self__.f,self__.ch,self__.meta9671,self__._,self__.fn1,meta9674__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9675){
var self__ = this;
var _9675__$1 = this;
return self__.meta9674;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9673.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9673.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9663_SHARP_){
return f1.call(null,(((p1__9663_SHARP_ == null))?null:self__.f.call(null,p1__9663_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9673.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9671","meta9671",-1473651046,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9670","cljs.core.async/t_cljs$core$async9670",-791896729,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9674","meta9674",-766361572,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9673";

cljs.core.async.t_cljs$core$async9673.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async9673");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async9673 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9673(map_LT___$1,f__$1,ch__$1,meta9671__$1,___$2,fn1__$1,meta9674){
return (new cljs.core.async.t_cljs$core$async9673(map_LT___$1,f__$1,ch__$1,meta9671__$1,___$2,fn1__$1,meta9674));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9673(self__.map_LT_,self__.f,self__.ch,self__.meta9671,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4976__auto__ = ret;
if(cljs.core.truth_(and__4976__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4976__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9670.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9671","meta9671",-1473651046,null)], null);
});

cljs.core.async.t_cljs$core$async9670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9670";

cljs.core.async.t_cljs$core$async9670.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async9670");
});

cljs.core.async.__GT_t_cljs$core$async9670 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9670(map_LT___$1,f__$1,ch__$1,meta9671){
return (new cljs.core.async.t_cljs$core$async9670(map_LT___$1,f__$1,ch__$1,meta9671));
});

}

return (new cljs.core.async.t_cljs$core$async9670(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9679 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9679 = (function (map_GT_,f,ch,meta9680){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta9680 = meta9680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9681,meta9680__$1){
var self__ = this;
var _9681__$1 = this;
return (new cljs.core.async.t_cljs$core$async9679(self__.map_GT_,self__.f,self__.ch,meta9680__$1));
});

cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9681){
var self__ = this;
var _9681__$1 = this;
return self__.meta9680;
});

cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9680","meta9680",-1777083522,null)], null);
});

cljs.core.async.t_cljs$core$async9679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9679";

cljs.core.async.t_cljs$core$async9679.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async9679");
});

cljs.core.async.__GT_t_cljs$core$async9679 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9679(map_GT___$1,f__$1,ch__$1,meta9680){
return (new cljs.core.async.t_cljs$core$async9679(map_GT___$1,f__$1,ch__$1,meta9680));
});

}

return (new cljs.core.async.t_cljs$core$async9679(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9685 = (function (filter_GT_,p,ch,meta9686){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta9686 = meta9686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9687,meta9686__$1){
var self__ = this;
var _9687__$1 = this;
return (new cljs.core.async.t_cljs$core$async9685(self__.filter_GT_,self__.p,self__.ch,meta9686__$1));
});

cljs.core.async.t_cljs$core$async9685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9687){
var self__ = this;
var _9687__$1 = this;
return self__.meta9686;
});

cljs.core.async.t_cljs$core$async9685.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9685.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9685.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9685.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9685.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9685.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9685.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9686","meta9686",662130721,null)], null);
});

cljs.core.async.t_cljs$core$async9685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9685";

cljs.core.async.t_cljs$core$async9685.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async9685");
});

cljs.core.async.__GT_t_cljs$core$async9685 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9685(filter_GT___$1,p__$1,ch__$1,meta9686){
return (new cljs.core.async.t_cljs$core$async9685(filter_GT___$1,p__$1,ch__$1,meta9686));
});

}

return (new cljs.core.async.t_cljs$core$async9685(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args9688 = [];
var len__6046__auto___9732 = arguments.length;
var i__6047__auto___9733 = (0);
while(true){
if((i__6047__auto___9733 < len__6046__auto___9732)){
args9688.push((arguments[i__6047__auto___9733]));

var G__9734 = (i__6047__auto___9733 + (1));
i__6047__auto___9733 = G__9734;
continue;
} else {
}
break;
}

var G__9690 = args9688.length;
switch (G__9690) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9688.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7486__auto___9736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___9736,out){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___9736,out){
return (function (state_9711){
var state_val_9712 = (state_9711[(1)]);
if((state_val_9712 === (7))){
var inst_9707 = (state_9711[(2)]);
var state_9711__$1 = state_9711;
var statearr_9713_9737 = state_9711__$1;
(statearr_9713_9737[(2)] = inst_9707);

(statearr_9713_9737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (1))){
var state_9711__$1 = state_9711;
var statearr_9714_9738 = state_9711__$1;
(statearr_9714_9738[(2)] = null);

(statearr_9714_9738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (4))){
var inst_9693 = (state_9711[(7)]);
var inst_9693__$1 = (state_9711[(2)]);
var inst_9694 = (inst_9693__$1 == null);
var state_9711__$1 = (function (){var statearr_9715 = state_9711;
(statearr_9715[(7)] = inst_9693__$1);

return statearr_9715;
})();
if(cljs.core.truth_(inst_9694)){
var statearr_9716_9739 = state_9711__$1;
(statearr_9716_9739[(1)] = (5));

} else {
var statearr_9717_9740 = state_9711__$1;
(statearr_9717_9740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (6))){
var inst_9693 = (state_9711[(7)]);
var inst_9698 = p.call(null,inst_9693);
var state_9711__$1 = state_9711;
if(cljs.core.truth_(inst_9698)){
var statearr_9718_9741 = state_9711__$1;
(statearr_9718_9741[(1)] = (8));

} else {
var statearr_9719_9742 = state_9711__$1;
(statearr_9719_9742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (3))){
var inst_9709 = (state_9711[(2)]);
var state_9711__$1 = state_9711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9711__$1,inst_9709);
} else {
if((state_val_9712 === (2))){
var state_9711__$1 = state_9711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9711__$1,(4),ch);
} else {
if((state_val_9712 === (11))){
var inst_9701 = (state_9711[(2)]);
var state_9711__$1 = state_9711;
var statearr_9720_9743 = state_9711__$1;
(statearr_9720_9743[(2)] = inst_9701);

(statearr_9720_9743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (9))){
var state_9711__$1 = state_9711;
var statearr_9721_9744 = state_9711__$1;
(statearr_9721_9744[(2)] = null);

(statearr_9721_9744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (5))){
var inst_9696 = cljs.core.async.close_BANG_.call(null,out);
var state_9711__$1 = state_9711;
var statearr_9722_9745 = state_9711__$1;
(statearr_9722_9745[(2)] = inst_9696);

(statearr_9722_9745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (10))){
var inst_9704 = (state_9711[(2)]);
var state_9711__$1 = (function (){var statearr_9723 = state_9711;
(statearr_9723[(8)] = inst_9704);

return statearr_9723;
})();
var statearr_9724_9746 = state_9711__$1;
(statearr_9724_9746[(2)] = null);

(statearr_9724_9746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (8))){
var inst_9693 = (state_9711[(7)]);
var state_9711__$1 = state_9711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9711__$1,(11),out,inst_9693);
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
});})(c__7486__auto___9736,out))
;
return ((function (switch__7374__auto__,c__7486__auto___9736,out){
return (function() {
var cljs$core$async$state_machine__7375__auto__ = null;
var cljs$core$async$state_machine__7375__auto____0 = (function (){
var statearr_9728 = [null,null,null,null,null,null,null,null,null];
(statearr_9728[(0)] = cljs$core$async$state_machine__7375__auto__);

(statearr_9728[(1)] = (1));

return statearr_9728;
});
var cljs$core$async$state_machine__7375__auto____1 = (function (state_9711){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_9711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e9729){if((e9729 instanceof Object)){
var ex__7378__auto__ = e9729;
var statearr_9730_9747 = state_9711;
(statearr_9730_9747[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9748 = state_9711;
state_9711 = G__9748;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$state_machine__7375__auto__ = function(state_9711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7375__auto____1.call(this,state_9711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7375__auto____0;
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7375__auto____1;
return cljs$core$async$state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___9736,out))
})();
var state__7488__auto__ = (function (){var statearr_9731 = f__7487__auto__.call(null);
(statearr_9731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___9736);

return statearr_9731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___9736,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args9749 = [];
var len__6046__auto___9752 = arguments.length;
var i__6047__auto___9753 = (0);
while(true){
if((i__6047__auto___9753 < len__6046__auto___9752)){
args9749.push((arguments[i__6047__auto___9753]));

var G__9754 = (i__6047__auto___9753 + (1));
i__6047__auto___9753 = G__9754;
continue;
} else {
}
break;
}

var G__9751 = args9749.length;
switch (G__9751) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9749.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto__){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto__){
return (function (state_9921){
var state_val_9922 = (state_9921[(1)]);
if((state_val_9922 === (7))){
var inst_9917 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
var statearr_9923_9964 = state_9921__$1;
(statearr_9923_9964[(2)] = inst_9917);

(statearr_9923_9964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (20))){
var inst_9887 = (state_9921[(7)]);
var inst_9898 = (state_9921[(2)]);
var inst_9899 = cljs.core.next.call(null,inst_9887);
var inst_9873 = inst_9899;
var inst_9874 = null;
var inst_9875 = (0);
var inst_9876 = (0);
var state_9921__$1 = (function (){var statearr_9924 = state_9921;
(statearr_9924[(8)] = inst_9876);

(statearr_9924[(9)] = inst_9875);

(statearr_9924[(10)] = inst_9873);

(statearr_9924[(11)] = inst_9898);

(statearr_9924[(12)] = inst_9874);

return statearr_9924;
})();
var statearr_9925_9965 = state_9921__$1;
(statearr_9925_9965[(2)] = null);

(statearr_9925_9965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (1))){
var state_9921__$1 = state_9921;
var statearr_9926_9966 = state_9921__$1;
(statearr_9926_9966[(2)] = null);

(statearr_9926_9966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (4))){
var inst_9862 = (state_9921[(13)]);
var inst_9862__$1 = (state_9921[(2)]);
var inst_9863 = (inst_9862__$1 == null);
var state_9921__$1 = (function (){var statearr_9927 = state_9921;
(statearr_9927[(13)] = inst_9862__$1);

return statearr_9927;
})();
if(cljs.core.truth_(inst_9863)){
var statearr_9928_9967 = state_9921__$1;
(statearr_9928_9967[(1)] = (5));

} else {
var statearr_9929_9968 = state_9921__$1;
(statearr_9929_9968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (15))){
var state_9921__$1 = state_9921;
var statearr_9933_9969 = state_9921__$1;
(statearr_9933_9969[(2)] = null);

(statearr_9933_9969[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (21))){
var state_9921__$1 = state_9921;
var statearr_9934_9970 = state_9921__$1;
(statearr_9934_9970[(2)] = null);

(statearr_9934_9970[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (13))){
var inst_9876 = (state_9921[(8)]);
var inst_9875 = (state_9921[(9)]);
var inst_9873 = (state_9921[(10)]);
var inst_9874 = (state_9921[(12)]);
var inst_9883 = (state_9921[(2)]);
var inst_9884 = (inst_9876 + (1));
var tmp9930 = inst_9875;
var tmp9931 = inst_9873;
var tmp9932 = inst_9874;
var inst_9873__$1 = tmp9931;
var inst_9874__$1 = tmp9932;
var inst_9875__$1 = tmp9930;
var inst_9876__$1 = inst_9884;
var state_9921__$1 = (function (){var statearr_9935 = state_9921;
(statearr_9935[(8)] = inst_9876__$1);

(statearr_9935[(9)] = inst_9875__$1);

(statearr_9935[(10)] = inst_9873__$1);

(statearr_9935[(14)] = inst_9883);

(statearr_9935[(12)] = inst_9874__$1);

return statearr_9935;
})();
var statearr_9936_9971 = state_9921__$1;
(statearr_9936_9971[(2)] = null);

(statearr_9936_9971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (22))){
var state_9921__$1 = state_9921;
var statearr_9937_9972 = state_9921__$1;
(statearr_9937_9972[(2)] = null);

(statearr_9937_9972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (6))){
var inst_9862 = (state_9921[(13)]);
var inst_9871 = f.call(null,inst_9862);
var inst_9872 = cljs.core.seq.call(null,inst_9871);
var inst_9873 = inst_9872;
var inst_9874 = null;
var inst_9875 = (0);
var inst_9876 = (0);
var state_9921__$1 = (function (){var statearr_9938 = state_9921;
(statearr_9938[(8)] = inst_9876);

(statearr_9938[(9)] = inst_9875);

(statearr_9938[(10)] = inst_9873);

(statearr_9938[(12)] = inst_9874);

return statearr_9938;
})();
var statearr_9939_9973 = state_9921__$1;
(statearr_9939_9973[(2)] = null);

(statearr_9939_9973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (17))){
var inst_9887 = (state_9921[(7)]);
var inst_9891 = cljs.core.chunk_first.call(null,inst_9887);
var inst_9892 = cljs.core.chunk_rest.call(null,inst_9887);
var inst_9893 = cljs.core.count.call(null,inst_9891);
var inst_9873 = inst_9892;
var inst_9874 = inst_9891;
var inst_9875 = inst_9893;
var inst_9876 = (0);
var state_9921__$1 = (function (){var statearr_9940 = state_9921;
(statearr_9940[(8)] = inst_9876);

(statearr_9940[(9)] = inst_9875);

(statearr_9940[(10)] = inst_9873);

(statearr_9940[(12)] = inst_9874);

return statearr_9940;
})();
var statearr_9941_9974 = state_9921__$1;
(statearr_9941_9974[(2)] = null);

(statearr_9941_9974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (3))){
var inst_9919 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9921__$1,inst_9919);
} else {
if((state_val_9922 === (12))){
var inst_9907 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
var statearr_9942_9975 = state_9921__$1;
(statearr_9942_9975[(2)] = inst_9907);

(statearr_9942_9975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (2))){
var state_9921__$1 = state_9921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9921__$1,(4),in$);
} else {
if((state_val_9922 === (23))){
var inst_9915 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
var statearr_9943_9976 = state_9921__$1;
(statearr_9943_9976[(2)] = inst_9915);

(statearr_9943_9976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (19))){
var inst_9902 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
var statearr_9944_9977 = state_9921__$1;
(statearr_9944_9977[(2)] = inst_9902);

(statearr_9944_9977[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (11))){
var inst_9873 = (state_9921[(10)]);
var inst_9887 = (state_9921[(7)]);
var inst_9887__$1 = cljs.core.seq.call(null,inst_9873);
var state_9921__$1 = (function (){var statearr_9945 = state_9921;
(statearr_9945[(7)] = inst_9887__$1);

return statearr_9945;
})();
if(inst_9887__$1){
var statearr_9946_9978 = state_9921__$1;
(statearr_9946_9978[(1)] = (14));

} else {
var statearr_9947_9979 = state_9921__$1;
(statearr_9947_9979[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (9))){
var inst_9909 = (state_9921[(2)]);
var inst_9910 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_9921__$1 = (function (){var statearr_9948 = state_9921;
(statearr_9948[(15)] = inst_9909);

return statearr_9948;
})();
if(cljs.core.truth_(inst_9910)){
var statearr_9949_9980 = state_9921__$1;
(statearr_9949_9980[(1)] = (21));

} else {
var statearr_9950_9981 = state_9921__$1;
(statearr_9950_9981[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (5))){
var inst_9865 = cljs.core.async.close_BANG_.call(null,out);
var state_9921__$1 = state_9921;
var statearr_9951_9982 = state_9921__$1;
(statearr_9951_9982[(2)] = inst_9865);

(statearr_9951_9982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (14))){
var inst_9887 = (state_9921[(7)]);
var inst_9889 = cljs.core.chunked_seq_QMARK_.call(null,inst_9887);
var state_9921__$1 = state_9921;
if(inst_9889){
var statearr_9952_9983 = state_9921__$1;
(statearr_9952_9983[(1)] = (17));

} else {
var statearr_9953_9984 = state_9921__$1;
(statearr_9953_9984[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (16))){
var inst_9905 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
var statearr_9954_9985 = state_9921__$1;
(statearr_9954_9985[(2)] = inst_9905);

(statearr_9954_9985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (10))){
var inst_9876 = (state_9921[(8)]);
var inst_9874 = (state_9921[(12)]);
var inst_9881 = cljs.core._nth.call(null,inst_9874,inst_9876);
var state_9921__$1 = state_9921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9921__$1,(13),out,inst_9881);
} else {
if((state_val_9922 === (18))){
var inst_9887 = (state_9921[(7)]);
var inst_9896 = cljs.core.first.call(null,inst_9887);
var state_9921__$1 = state_9921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9921__$1,(20),out,inst_9896);
} else {
if((state_val_9922 === (8))){
var inst_9876 = (state_9921[(8)]);
var inst_9875 = (state_9921[(9)]);
var inst_9878 = (inst_9876 < inst_9875);
var inst_9879 = inst_9878;
var state_9921__$1 = state_9921;
if(cljs.core.truth_(inst_9879)){
var statearr_9955_9986 = state_9921__$1;
(statearr_9955_9986[(1)] = (10));

} else {
var statearr_9956_9987 = state_9921__$1;
(statearr_9956_9987[(1)] = (11));

}

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
});})(c__7486__auto__))
;
return ((function (switch__7374__auto__,c__7486__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7375__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7375__auto____0 = (function (){
var statearr_9960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9960[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7375__auto__);

(statearr_9960[(1)] = (1));

return statearr_9960;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7375__auto____1 = (function (state_9921){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_9921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e9961){if((e9961 instanceof Object)){
var ex__7378__auto__ = e9961;
var statearr_9962_9988 = state_9921;
(statearr_9962_9988[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9989 = state_9921;
state_9921 = G__9989;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7375__auto__ = function(state_9921){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7375__auto____1.call(this,state_9921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7375__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7375__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto__))
})();
var state__7488__auto__ = (function (){var statearr_9963 = f__7487__auto__.call(null);
(statearr_9963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto__);

return statearr_9963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto__))
);

return c__7486__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args9990 = [];
var len__6046__auto___9993 = arguments.length;
var i__6047__auto___9994 = (0);
while(true){
if((i__6047__auto___9994 < len__6046__auto___9993)){
args9990.push((arguments[i__6047__auto___9994]));

var G__9995 = (i__6047__auto___9994 + (1));
i__6047__auto___9994 = G__9995;
continue;
} else {
}
break;
}

var G__9992 = args9990.length;
switch (G__9992) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9990.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args9997 = [];
var len__6046__auto___10000 = arguments.length;
var i__6047__auto___10001 = (0);
while(true){
if((i__6047__auto___10001 < len__6046__auto___10000)){
args9997.push((arguments[i__6047__auto___10001]));

var G__10002 = (i__6047__auto___10001 + (1));
i__6047__auto___10001 = G__10002;
continue;
} else {
}
break;
}

var G__9999 = args9997.length;
switch (G__9999) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9997.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args10004 = [];
var len__6046__auto___10055 = arguments.length;
var i__6047__auto___10056 = (0);
while(true){
if((i__6047__auto___10056 < len__6046__auto___10055)){
args10004.push((arguments[i__6047__auto___10056]));

var G__10057 = (i__6047__auto___10056 + (1));
i__6047__auto___10056 = G__10057;
continue;
} else {
}
break;
}

var G__10006 = args10004.length;
switch (G__10006) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10004.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7486__auto___10059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___10059,out){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___10059,out){
return (function (state_10030){
var state_val_10031 = (state_10030[(1)]);
if((state_val_10031 === (7))){
var inst_10025 = (state_10030[(2)]);
var state_10030__$1 = state_10030;
var statearr_10032_10060 = state_10030__$1;
(statearr_10032_10060[(2)] = inst_10025);

(statearr_10032_10060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (1))){
var inst_10007 = null;
var state_10030__$1 = (function (){var statearr_10033 = state_10030;
(statearr_10033[(7)] = inst_10007);

return statearr_10033;
})();
var statearr_10034_10061 = state_10030__$1;
(statearr_10034_10061[(2)] = null);

(statearr_10034_10061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (4))){
var inst_10010 = (state_10030[(8)]);
var inst_10010__$1 = (state_10030[(2)]);
var inst_10011 = (inst_10010__$1 == null);
var inst_10012 = cljs.core.not.call(null,inst_10011);
var state_10030__$1 = (function (){var statearr_10035 = state_10030;
(statearr_10035[(8)] = inst_10010__$1);

return statearr_10035;
})();
if(inst_10012){
var statearr_10036_10062 = state_10030__$1;
(statearr_10036_10062[(1)] = (5));

} else {
var statearr_10037_10063 = state_10030__$1;
(statearr_10037_10063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (6))){
var state_10030__$1 = state_10030;
var statearr_10038_10064 = state_10030__$1;
(statearr_10038_10064[(2)] = null);

(statearr_10038_10064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (3))){
var inst_10027 = (state_10030[(2)]);
var inst_10028 = cljs.core.async.close_BANG_.call(null,out);
var state_10030__$1 = (function (){var statearr_10039 = state_10030;
(statearr_10039[(9)] = inst_10027);

return statearr_10039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10030__$1,inst_10028);
} else {
if((state_val_10031 === (2))){
var state_10030__$1 = state_10030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10030__$1,(4),ch);
} else {
if((state_val_10031 === (11))){
var inst_10010 = (state_10030[(8)]);
var inst_10019 = (state_10030[(2)]);
var inst_10007 = inst_10010;
var state_10030__$1 = (function (){var statearr_10040 = state_10030;
(statearr_10040[(10)] = inst_10019);

(statearr_10040[(7)] = inst_10007);

return statearr_10040;
})();
var statearr_10041_10065 = state_10030__$1;
(statearr_10041_10065[(2)] = null);

(statearr_10041_10065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (9))){
var inst_10010 = (state_10030[(8)]);
var state_10030__$1 = state_10030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10030__$1,(11),out,inst_10010);
} else {
if((state_val_10031 === (5))){
var inst_10010 = (state_10030[(8)]);
var inst_10007 = (state_10030[(7)]);
var inst_10014 = cljs.core._EQ_.call(null,inst_10010,inst_10007);
var state_10030__$1 = state_10030;
if(inst_10014){
var statearr_10043_10066 = state_10030__$1;
(statearr_10043_10066[(1)] = (8));

} else {
var statearr_10044_10067 = state_10030__$1;
(statearr_10044_10067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (10))){
var inst_10022 = (state_10030[(2)]);
var state_10030__$1 = state_10030;
var statearr_10045_10068 = state_10030__$1;
(statearr_10045_10068[(2)] = inst_10022);

(statearr_10045_10068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (8))){
var inst_10007 = (state_10030[(7)]);
var tmp10042 = inst_10007;
var inst_10007__$1 = tmp10042;
var state_10030__$1 = (function (){var statearr_10046 = state_10030;
(statearr_10046[(7)] = inst_10007__$1);

return statearr_10046;
})();
var statearr_10047_10069 = state_10030__$1;
(statearr_10047_10069[(2)] = null);

(statearr_10047_10069[(1)] = (2));


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
});})(c__7486__auto___10059,out))
;
return ((function (switch__7374__auto__,c__7486__auto___10059,out){
return (function() {
var cljs$core$async$state_machine__7375__auto__ = null;
var cljs$core$async$state_machine__7375__auto____0 = (function (){
var statearr_10051 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10051[(0)] = cljs$core$async$state_machine__7375__auto__);

(statearr_10051[(1)] = (1));

return statearr_10051;
});
var cljs$core$async$state_machine__7375__auto____1 = (function (state_10030){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_10030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e10052){if((e10052 instanceof Object)){
var ex__7378__auto__ = e10052;
var statearr_10053_10070 = state_10030;
(statearr_10053_10070[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10071 = state_10030;
state_10030 = G__10071;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$state_machine__7375__auto__ = function(state_10030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7375__auto____1.call(this,state_10030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7375__auto____0;
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7375__auto____1;
return cljs$core$async$state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___10059,out))
})();
var state__7488__auto__ = (function (){var statearr_10054 = f__7487__auto__.call(null);
(statearr_10054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___10059);

return statearr_10054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___10059,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args10072 = [];
var len__6046__auto___10142 = arguments.length;
var i__6047__auto___10143 = (0);
while(true){
if((i__6047__auto___10143 < len__6046__auto___10142)){
args10072.push((arguments[i__6047__auto___10143]));

var G__10144 = (i__6047__auto___10143 + (1));
i__6047__auto___10143 = G__10144;
continue;
} else {
}
break;
}

var G__10074 = args10072.length;
switch (G__10074) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10072.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7486__auto___10146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___10146,out){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___10146,out){
return (function (state_10112){
var state_val_10113 = (state_10112[(1)]);
if((state_val_10113 === (7))){
var inst_10108 = (state_10112[(2)]);
var state_10112__$1 = state_10112;
var statearr_10114_10147 = state_10112__$1;
(statearr_10114_10147[(2)] = inst_10108);

(statearr_10114_10147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (1))){
var inst_10075 = (new Array(n));
var inst_10076 = inst_10075;
var inst_10077 = (0);
var state_10112__$1 = (function (){var statearr_10115 = state_10112;
(statearr_10115[(7)] = inst_10077);

(statearr_10115[(8)] = inst_10076);

return statearr_10115;
})();
var statearr_10116_10148 = state_10112__$1;
(statearr_10116_10148[(2)] = null);

(statearr_10116_10148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (4))){
var inst_10080 = (state_10112[(9)]);
var inst_10080__$1 = (state_10112[(2)]);
var inst_10081 = (inst_10080__$1 == null);
var inst_10082 = cljs.core.not.call(null,inst_10081);
var state_10112__$1 = (function (){var statearr_10117 = state_10112;
(statearr_10117[(9)] = inst_10080__$1);

return statearr_10117;
})();
if(inst_10082){
var statearr_10118_10149 = state_10112__$1;
(statearr_10118_10149[(1)] = (5));

} else {
var statearr_10119_10150 = state_10112__$1;
(statearr_10119_10150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (15))){
var inst_10102 = (state_10112[(2)]);
var state_10112__$1 = state_10112;
var statearr_10120_10151 = state_10112__$1;
(statearr_10120_10151[(2)] = inst_10102);

(statearr_10120_10151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (13))){
var state_10112__$1 = state_10112;
var statearr_10121_10152 = state_10112__$1;
(statearr_10121_10152[(2)] = null);

(statearr_10121_10152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (6))){
var inst_10077 = (state_10112[(7)]);
var inst_10098 = (inst_10077 > (0));
var state_10112__$1 = state_10112;
if(cljs.core.truth_(inst_10098)){
var statearr_10122_10153 = state_10112__$1;
(statearr_10122_10153[(1)] = (12));

} else {
var statearr_10123_10154 = state_10112__$1;
(statearr_10123_10154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (3))){
var inst_10110 = (state_10112[(2)]);
var state_10112__$1 = state_10112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10112__$1,inst_10110);
} else {
if((state_val_10113 === (12))){
var inst_10076 = (state_10112[(8)]);
var inst_10100 = cljs.core.vec.call(null,inst_10076);
var state_10112__$1 = state_10112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10112__$1,(15),out,inst_10100);
} else {
if((state_val_10113 === (2))){
var state_10112__$1 = state_10112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10112__$1,(4),ch);
} else {
if((state_val_10113 === (11))){
var inst_10092 = (state_10112[(2)]);
var inst_10093 = (new Array(n));
var inst_10076 = inst_10093;
var inst_10077 = (0);
var state_10112__$1 = (function (){var statearr_10124 = state_10112;
(statearr_10124[(10)] = inst_10092);

(statearr_10124[(7)] = inst_10077);

(statearr_10124[(8)] = inst_10076);

return statearr_10124;
})();
var statearr_10125_10155 = state_10112__$1;
(statearr_10125_10155[(2)] = null);

(statearr_10125_10155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (9))){
var inst_10076 = (state_10112[(8)]);
var inst_10090 = cljs.core.vec.call(null,inst_10076);
var state_10112__$1 = state_10112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10112__$1,(11),out,inst_10090);
} else {
if((state_val_10113 === (5))){
var inst_10085 = (state_10112[(11)]);
var inst_10077 = (state_10112[(7)]);
var inst_10076 = (state_10112[(8)]);
var inst_10080 = (state_10112[(9)]);
var inst_10084 = (inst_10076[inst_10077] = inst_10080);
var inst_10085__$1 = (inst_10077 + (1));
var inst_10086 = (inst_10085__$1 < n);
var state_10112__$1 = (function (){var statearr_10126 = state_10112;
(statearr_10126[(12)] = inst_10084);

(statearr_10126[(11)] = inst_10085__$1);

return statearr_10126;
})();
if(cljs.core.truth_(inst_10086)){
var statearr_10127_10156 = state_10112__$1;
(statearr_10127_10156[(1)] = (8));

} else {
var statearr_10128_10157 = state_10112__$1;
(statearr_10128_10157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (14))){
var inst_10105 = (state_10112[(2)]);
var inst_10106 = cljs.core.async.close_BANG_.call(null,out);
var state_10112__$1 = (function (){var statearr_10130 = state_10112;
(statearr_10130[(13)] = inst_10105);

return statearr_10130;
})();
var statearr_10131_10158 = state_10112__$1;
(statearr_10131_10158[(2)] = inst_10106);

(statearr_10131_10158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (10))){
var inst_10096 = (state_10112[(2)]);
var state_10112__$1 = state_10112;
var statearr_10132_10159 = state_10112__$1;
(statearr_10132_10159[(2)] = inst_10096);

(statearr_10132_10159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (8))){
var inst_10085 = (state_10112[(11)]);
var inst_10076 = (state_10112[(8)]);
var tmp10129 = inst_10076;
var inst_10076__$1 = tmp10129;
var inst_10077 = inst_10085;
var state_10112__$1 = (function (){var statearr_10133 = state_10112;
(statearr_10133[(7)] = inst_10077);

(statearr_10133[(8)] = inst_10076__$1);

return statearr_10133;
})();
var statearr_10134_10160 = state_10112__$1;
(statearr_10134_10160[(2)] = null);

(statearr_10134_10160[(1)] = (2));


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
}
}
});})(c__7486__auto___10146,out))
;
return ((function (switch__7374__auto__,c__7486__auto___10146,out){
return (function() {
var cljs$core$async$state_machine__7375__auto__ = null;
var cljs$core$async$state_machine__7375__auto____0 = (function (){
var statearr_10138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10138[(0)] = cljs$core$async$state_machine__7375__auto__);

(statearr_10138[(1)] = (1));

return statearr_10138;
});
var cljs$core$async$state_machine__7375__auto____1 = (function (state_10112){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_10112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e10139){if((e10139 instanceof Object)){
var ex__7378__auto__ = e10139;
var statearr_10140_10161 = state_10112;
(statearr_10140_10161[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10162 = state_10112;
state_10112 = G__10162;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$state_machine__7375__auto__ = function(state_10112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7375__auto____1.call(this,state_10112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7375__auto____0;
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7375__auto____1;
return cljs$core$async$state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___10146,out))
})();
var state__7488__auto__ = (function (){var statearr_10141 = f__7487__auto__.call(null);
(statearr_10141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___10146);

return statearr_10141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___10146,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args10163 = [];
var len__6046__auto___10237 = arguments.length;
var i__6047__auto___10238 = (0);
while(true){
if((i__6047__auto___10238 < len__6046__auto___10237)){
args10163.push((arguments[i__6047__auto___10238]));

var G__10239 = (i__6047__auto___10238 + (1));
i__6047__auto___10238 = G__10239;
continue;
} else {
}
break;
}

var G__10165 = args10163.length;
switch (G__10165) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10163.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7486__auto___10241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7486__auto___10241,out){
return (function (){
var f__7487__auto__ = (function (){var switch__7374__auto__ = ((function (c__7486__auto___10241,out){
return (function (state_10207){
var state_val_10208 = (state_10207[(1)]);
if((state_val_10208 === (7))){
var inst_10203 = (state_10207[(2)]);
var state_10207__$1 = state_10207;
var statearr_10209_10242 = state_10207__$1;
(statearr_10209_10242[(2)] = inst_10203);

(statearr_10209_10242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (1))){
var inst_10166 = [];
var inst_10167 = inst_10166;
var inst_10168 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10207__$1 = (function (){var statearr_10210 = state_10207;
(statearr_10210[(7)] = inst_10168);

(statearr_10210[(8)] = inst_10167);

return statearr_10210;
})();
var statearr_10211_10243 = state_10207__$1;
(statearr_10211_10243[(2)] = null);

(statearr_10211_10243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (4))){
var inst_10171 = (state_10207[(9)]);
var inst_10171__$1 = (state_10207[(2)]);
var inst_10172 = (inst_10171__$1 == null);
var inst_10173 = cljs.core.not.call(null,inst_10172);
var state_10207__$1 = (function (){var statearr_10212 = state_10207;
(statearr_10212[(9)] = inst_10171__$1);

return statearr_10212;
})();
if(inst_10173){
var statearr_10213_10244 = state_10207__$1;
(statearr_10213_10244[(1)] = (5));

} else {
var statearr_10214_10245 = state_10207__$1;
(statearr_10214_10245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (15))){
var inst_10197 = (state_10207[(2)]);
var state_10207__$1 = state_10207;
var statearr_10215_10246 = state_10207__$1;
(statearr_10215_10246[(2)] = inst_10197);

(statearr_10215_10246[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (13))){
var state_10207__$1 = state_10207;
var statearr_10216_10247 = state_10207__$1;
(statearr_10216_10247[(2)] = null);

(statearr_10216_10247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (6))){
var inst_10167 = (state_10207[(8)]);
var inst_10192 = inst_10167.length;
var inst_10193 = (inst_10192 > (0));
var state_10207__$1 = state_10207;
if(cljs.core.truth_(inst_10193)){
var statearr_10217_10248 = state_10207__$1;
(statearr_10217_10248[(1)] = (12));

} else {
var statearr_10218_10249 = state_10207__$1;
(statearr_10218_10249[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (3))){
var inst_10205 = (state_10207[(2)]);
var state_10207__$1 = state_10207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10207__$1,inst_10205);
} else {
if((state_val_10208 === (12))){
var inst_10167 = (state_10207[(8)]);
var inst_10195 = cljs.core.vec.call(null,inst_10167);
var state_10207__$1 = state_10207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10207__$1,(15),out,inst_10195);
} else {
if((state_val_10208 === (2))){
var state_10207__$1 = state_10207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10207__$1,(4),ch);
} else {
if((state_val_10208 === (11))){
var inst_10171 = (state_10207[(9)]);
var inst_10175 = (state_10207[(10)]);
var inst_10185 = (state_10207[(2)]);
var inst_10186 = [];
var inst_10187 = inst_10186.push(inst_10171);
var inst_10167 = inst_10186;
var inst_10168 = inst_10175;
var state_10207__$1 = (function (){var statearr_10219 = state_10207;
(statearr_10219[(11)] = inst_10185);

(statearr_10219[(7)] = inst_10168);

(statearr_10219[(12)] = inst_10187);

(statearr_10219[(8)] = inst_10167);

return statearr_10219;
})();
var statearr_10220_10250 = state_10207__$1;
(statearr_10220_10250[(2)] = null);

(statearr_10220_10250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (9))){
var inst_10167 = (state_10207[(8)]);
var inst_10183 = cljs.core.vec.call(null,inst_10167);
var state_10207__$1 = state_10207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10207__$1,(11),out,inst_10183);
} else {
if((state_val_10208 === (5))){
var inst_10171 = (state_10207[(9)]);
var inst_10168 = (state_10207[(7)]);
var inst_10175 = (state_10207[(10)]);
var inst_10175__$1 = f.call(null,inst_10171);
var inst_10176 = cljs.core._EQ_.call(null,inst_10175__$1,inst_10168);
var inst_10177 = cljs.core.keyword_identical_QMARK_.call(null,inst_10168,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_10178 = (inst_10176) || (inst_10177);
var state_10207__$1 = (function (){var statearr_10221 = state_10207;
(statearr_10221[(10)] = inst_10175__$1);

return statearr_10221;
})();
if(cljs.core.truth_(inst_10178)){
var statearr_10222_10251 = state_10207__$1;
(statearr_10222_10251[(1)] = (8));

} else {
var statearr_10223_10252 = state_10207__$1;
(statearr_10223_10252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (14))){
var inst_10200 = (state_10207[(2)]);
var inst_10201 = cljs.core.async.close_BANG_.call(null,out);
var state_10207__$1 = (function (){var statearr_10225 = state_10207;
(statearr_10225[(13)] = inst_10200);

return statearr_10225;
})();
var statearr_10226_10253 = state_10207__$1;
(statearr_10226_10253[(2)] = inst_10201);

(statearr_10226_10253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (10))){
var inst_10190 = (state_10207[(2)]);
var state_10207__$1 = state_10207;
var statearr_10227_10254 = state_10207__$1;
(statearr_10227_10254[(2)] = inst_10190);

(statearr_10227_10254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (8))){
var inst_10171 = (state_10207[(9)]);
var inst_10175 = (state_10207[(10)]);
var inst_10167 = (state_10207[(8)]);
var inst_10180 = inst_10167.push(inst_10171);
var tmp10224 = inst_10167;
var inst_10167__$1 = tmp10224;
var inst_10168 = inst_10175;
var state_10207__$1 = (function (){var statearr_10228 = state_10207;
(statearr_10228[(7)] = inst_10168);

(statearr_10228[(14)] = inst_10180);

(statearr_10228[(8)] = inst_10167__$1);

return statearr_10228;
})();
var statearr_10229_10255 = state_10207__$1;
(statearr_10229_10255[(2)] = null);

(statearr_10229_10255[(1)] = (2));


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
}
}
});})(c__7486__auto___10241,out))
;
return ((function (switch__7374__auto__,c__7486__auto___10241,out){
return (function() {
var cljs$core$async$state_machine__7375__auto__ = null;
var cljs$core$async$state_machine__7375__auto____0 = (function (){
var statearr_10233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10233[(0)] = cljs$core$async$state_machine__7375__auto__);

(statearr_10233[(1)] = (1));

return statearr_10233;
});
var cljs$core$async$state_machine__7375__auto____1 = (function (state_10207){
while(true){
var ret_value__7376__auto__ = (function (){try{while(true){
var result__7377__auto__ = switch__7374__auto__.call(null,state_10207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7377__auto__;
}
break;
}
}catch (e10234){if((e10234 instanceof Object)){
var ex__7378__auto__ = e10234;
var statearr_10235_10256 = state_10207;
(statearr_10235_10256[(5)] = ex__7378__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10257 = state_10207;
state_10207 = G__10257;
continue;
} else {
return ret_value__7376__auto__;
}
break;
}
});
cljs$core$async$state_machine__7375__auto__ = function(state_10207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7375__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7375__auto____1.call(this,state_10207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7375__auto____0;
cljs$core$async$state_machine__7375__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7375__auto____1;
return cljs$core$async$state_machine__7375__auto__;
})()
;})(switch__7374__auto__,c__7486__auto___10241,out))
})();
var state__7488__auto__ = (function (){var statearr_10236 = f__7487__auto__.call(null);
(statearr_10236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7486__auto___10241);

return statearr_10236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7488__auto__);
});})(c__7486__auto___10241,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
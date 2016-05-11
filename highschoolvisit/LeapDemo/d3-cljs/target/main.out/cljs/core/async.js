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
var args7537 = [];
var len__6046__auto___7543 = arguments.length;
var i__6047__auto___7544 = (0);
while(true){
if((i__6047__auto___7544 < len__6046__auto___7543)){
args7537.push((arguments[i__6047__auto___7544]));

var G__7545 = (i__6047__auto___7544 + (1));
i__6047__auto___7544 = G__7545;
continue;
} else {
}
break;
}

var G__7539 = args7537.length;
switch (G__7539) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7537.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async7540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7540 = (function (f,blockable,meta7541){
this.f = f;
this.blockable = blockable;
this.meta7541 = meta7541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7542,meta7541__$1){
var self__ = this;
var _7542__$1 = this;
return (new cljs.core.async.t_cljs$core$async7540(self__.f,self__.blockable,meta7541__$1));
});

cljs.core.async.t_cljs$core$async7540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7542){
var self__ = this;
var _7542__$1 = this;
return self__.meta7541;
});

cljs.core.async.t_cljs$core$async7540.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7540.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta7541","meta7541",180466082,null)], null);
});

cljs.core.async.t_cljs$core$async7540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7540";

cljs.core.async.t_cljs$core$async7540.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async7540");
});

cljs.core.async.__GT_t_cljs$core$async7540 = (function cljs$core$async$__GT_t_cljs$core$async7540(f__$1,blockable__$1,meta7541){
return (new cljs.core.async.t_cljs$core$async7540(f__$1,blockable__$1,meta7541));
});

}

return (new cljs.core.async.t_cljs$core$async7540(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args7549 = [];
var len__6046__auto___7552 = arguments.length;
var i__6047__auto___7553 = (0);
while(true){
if((i__6047__auto___7553 < len__6046__auto___7552)){
args7549.push((arguments[i__6047__auto___7553]));

var G__7554 = (i__6047__auto___7553 + (1));
i__6047__auto___7553 = G__7554;
continue;
} else {
}
break;
}

var G__7551 = args7549.length;
switch (G__7551) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7549.length)].join('')));

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
var args7556 = [];
var len__6046__auto___7559 = arguments.length;
var i__6047__auto___7560 = (0);
while(true){
if((i__6047__auto___7560 < len__6046__auto___7559)){
args7556.push((arguments[i__6047__auto___7560]));

var G__7561 = (i__6047__auto___7560 + (1));
i__6047__auto___7560 = G__7561;
continue;
} else {
}
break;
}

var G__7558 = args7556.length;
switch (G__7558) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7556.length)].join('')));

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
var args7563 = [];
var len__6046__auto___7566 = arguments.length;
var i__6047__auto___7567 = (0);
while(true){
if((i__6047__auto___7567 < len__6046__auto___7566)){
args7563.push((arguments[i__6047__auto___7567]));

var G__7568 = (i__6047__auto___7567 + (1));
i__6047__auto___7567 = G__7568;
continue;
} else {
}
break;
}

var G__7565 = args7563.length;
switch (G__7565) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7563.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7570 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7570);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7570,ret){
return (function (){
return fn1.call(null,val_7570);
});})(val_7570,ret))
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
var args7571 = [];
var len__6046__auto___7574 = arguments.length;
var i__6047__auto___7575 = (0);
while(true){
if((i__6047__auto___7575 < len__6046__auto___7574)){
args7571.push((arguments[i__6047__auto___7575]));

var G__7576 = (i__6047__auto___7575 + (1));
i__6047__auto___7575 = G__7576;
continue;
} else {
}
break;
}

var G__7573 = args7571.length;
switch (G__7573) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7571.length)].join('')));

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
var n__5891__auto___7578 = n;
var x_7579 = (0);
while(true){
if((x_7579 < n__5891__auto___7578)){
(a[x_7579] = (0));

var G__7580 = (x_7579 + (1));
x_7579 = G__7580;
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

var G__7581 = (i + (1));
i = G__7581;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7585 = (function (alt_flag,flag,meta7586){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7586 = meta7586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7587,meta7586__$1){
var self__ = this;
var _7587__$1 = this;
return (new cljs.core.async.t_cljs$core$async7585(self__.alt_flag,self__.flag,meta7586__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7587){
var self__ = this;
var _7587__$1 = this;
return self__.meta7586;
});})(flag))
;

cljs.core.async.t_cljs$core$async7585.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7585.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7585.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7586","meta7586",-461155906,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7585";

cljs.core.async.t_cljs$core$async7585.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async7585");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7585 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7585(alt_flag__$1,flag__$1,meta7586){
return (new cljs.core.async.t_cljs$core$async7585(alt_flag__$1,flag__$1,meta7586));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7585(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7591 = (function (alt_handler,flag,cb,meta7592){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7592 = meta7592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7593,meta7592__$1){
var self__ = this;
var _7593__$1 = this;
return (new cljs.core.async.t_cljs$core$async7591(self__.alt_handler,self__.flag,self__.cb,meta7592__$1));
});

cljs.core.async.t_cljs$core$async7591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7593){
var self__ = this;
var _7593__$1 = this;
return self__.meta7592;
});

cljs.core.async.t_cljs$core$async7591.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7592","meta7592",1365292894,null)], null);
});

cljs.core.async.t_cljs$core$async7591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7591";

cljs.core.async.t_cljs$core$async7591.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async7591");
});

cljs.core.async.__GT_t_cljs$core$async7591 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7591(alt_handler__$1,flag__$1,cb__$1,meta7592){
return (new cljs.core.async.t_cljs$core$async7591(alt_handler__$1,flag__$1,cb__$1,meta7592));
});

}

return (new cljs.core.async.t_cljs$core$async7591(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__7594_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7594_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7595_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7595_SHARP_,port], null));
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
var G__7596 = (i + (1));
i = G__7596;
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
var len__6046__auto___7602 = arguments.length;
var i__6047__auto___7603 = (0);
while(true){
if((i__6047__auto___7603 < len__6046__auto___7602)){
args__6053__auto__.push((arguments[i__6047__auto___7603]));

var G__7604 = (i__6047__auto___7603 + (1));
i__6047__auto___7603 = G__7604;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7599){
var map__7600 = p__7599;
var map__7600__$1 = ((((!((map__7600 == null)))?((((map__7600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7600):map__7600);
var opts = map__7600__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7597){
var G__7598 = cljs.core.first.call(null,seq7597);
var seq7597__$1 = cljs.core.next.call(null,seq7597);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7598,seq7597__$1);
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
var args7605 = [];
var len__6046__auto___7655 = arguments.length;
var i__6047__auto___7656 = (0);
while(true){
if((i__6047__auto___7656 < len__6046__auto___7655)){
args7605.push((arguments[i__6047__auto___7656]));

var G__7657 = (i__6047__auto___7656 + (1));
i__6047__auto___7656 = G__7657;
continue;
} else {
}
break;
}

var G__7607 = args7605.length;
switch (G__7607) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7605.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7492__auto___7659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___7659){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___7659){
return (function (state_7631){
var state_val_7632 = (state_7631[(1)]);
if((state_val_7632 === (7))){
var inst_7627 = (state_7631[(2)]);
var state_7631__$1 = state_7631;
var statearr_7633_7660 = state_7631__$1;
(statearr_7633_7660[(2)] = inst_7627);

(statearr_7633_7660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7632 === (1))){
var state_7631__$1 = state_7631;
var statearr_7634_7661 = state_7631__$1;
(statearr_7634_7661[(2)] = null);

(statearr_7634_7661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7632 === (4))){
var inst_7610 = (state_7631[(7)]);
var inst_7610__$1 = (state_7631[(2)]);
var inst_7611 = (inst_7610__$1 == null);
var state_7631__$1 = (function (){var statearr_7635 = state_7631;
(statearr_7635[(7)] = inst_7610__$1);

return statearr_7635;
})();
if(cljs.core.truth_(inst_7611)){
var statearr_7636_7662 = state_7631__$1;
(statearr_7636_7662[(1)] = (5));

} else {
var statearr_7637_7663 = state_7631__$1;
(statearr_7637_7663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7632 === (13))){
var state_7631__$1 = state_7631;
var statearr_7638_7664 = state_7631__$1;
(statearr_7638_7664[(2)] = null);

(statearr_7638_7664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7632 === (6))){
var inst_7610 = (state_7631[(7)]);
var state_7631__$1 = state_7631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7631__$1,(11),to,inst_7610);
} else {
if((state_val_7632 === (3))){
var inst_7629 = (state_7631[(2)]);
var state_7631__$1 = state_7631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7631__$1,inst_7629);
} else {
if((state_val_7632 === (12))){
var state_7631__$1 = state_7631;
var statearr_7639_7665 = state_7631__$1;
(statearr_7639_7665[(2)] = null);

(statearr_7639_7665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7632 === (2))){
var state_7631__$1 = state_7631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7631__$1,(4),from);
} else {
if((state_val_7632 === (11))){
var inst_7620 = (state_7631[(2)]);
var state_7631__$1 = state_7631;
if(cljs.core.truth_(inst_7620)){
var statearr_7640_7666 = state_7631__$1;
(statearr_7640_7666[(1)] = (12));

} else {
var statearr_7641_7667 = state_7631__$1;
(statearr_7641_7667[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7632 === (9))){
var state_7631__$1 = state_7631;
var statearr_7642_7668 = state_7631__$1;
(statearr_7642_7668[(2)] = null);

(statearr_7642_7668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7632 === (5))){
var state_7631__$1 = state_7631;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7643_7669 = state_7631__$1;
(statearr_7643_7669[(1)] = (8));

} else {
var statearr_7644_7670 = state_7631__$1;
(statearr_7644_7670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7632 === (14))){
var inst_7625 = (state_7631[(2)]);
var state_7631__$1 = state_7631;
var statearr_7645_7671 = state_7631__$1;
(statearr_7645_7671[(2)] = inst_7625);

(statearr_7645_7671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7632 === (10))){
var inst_7617 = (state_7631[(2)]);
var state_7631__$1 = state_7631;
var statearr_7646_7672 = state_7631__$1;
(statearr_7646_7672[(2)] = inst_7617);

(statearr_7646_7672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7632 === (8))){
var inst_7614 = cljs.core.async.close_BANG_.call(null,to);
var state_7631__$1 = state_7631;
var statearr_7647_7673 = state_7631__$1;
(statearr_7647_7673[(2)] = inst_7614);

(statearr_7647_7673[(1)] = (10));


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
});})(c__7492__auto___7659))
;
return ((function (switch__7380__auto__,c__7492__auto___7659){
return (function() {
var cljs$core$async$state_machine__7381__auto__ = null;
var cljs$core$async$state_machine__7381__auto____0 = (function (){
var statearr_7651 = [null,null,null,null,null,null,null,null];
(statearr_7651[(0)] = cljs$core$async$state_machine__7381__auto__);

(statearr_7651[(1)] = (1));

return statearr_7651;
});
var cljs$core$async$state_machine__7381__auto____1 = (function (state_7631){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_7631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e7652){if((e7652 instanceof Object)){
var ex__7384__auto__ = e7652;
var statearr_7653_7674 = state_7631;
(statearr_7653_7674[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7675 = state_7631;
state_7631 = G__7675;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$state_machine__7381__auto__ = function(state_7631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7381__auto____1.call(this,state_7631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7381__auto____0;
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7381__auto____1;
return cljs$core$async$state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___7659))
})();
var state__7494__auto__ = (function (){var statearr_7654 = f__7493__auto__.call(null);
(statearr_7654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___7659);

return statearr_7654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___7659))
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
return (function (p__7859){
var vec__7860 = p__7859;
var v = cljs.core.nth.call(null,vec__7860,(0),null);
var p = cljs.core.nth.call(null,vec__7860,(1),null);
var job = vec__7860;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7492__auto___8042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___8042,res,vec__7860,v,p,job,jobs,results){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___8042,res,vec__7860,v,p,job,jobs,results){
return (function (state_7865){
var state_val_7866 = (state_7865[(1)]);
if((state_val_7866 === (1))){
var state_7865__$1 = state_7865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7865__$1,(2),res,v);
} else {
if((state_val_7866 === (2))){
var inst_7862 = (state_7865[(2)]);
var inst_7863 = cljs.core.async.close_BANG_.call(null,res);
var state_7865__$1 = (function (){var statearr_7867 = state_7865;
(statearr_7867[(7)] = inst_7862);

return statearr_7867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7865__$1,inst_7863);
} else {
return null;
}
}
});})(c__7492__auto___8042,res,vec__7860,v,p,job,jobs,results))
;
return ((function (switch__7380__auto__,c__7492__auto___8042,res,vec__7860,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0 = (function (){
var statearr_7871 = [null,null,null,null,null,null,null,null];
(statearr_7871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__);

(statearr_7871[(1)] = (1));

return statearr_7871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1 = (function (state_7865){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_7865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e7872){if((e7872 instanceof Object)){
var ex__7384__auto__ = e7872;
var statearr_7873_8043 = state_7865;
(statearr_7873_8043[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8044 = state_7865;
state_7865 = G__8044;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__ = function(state_7865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1.call(this,state_7865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___8042,res,vec__7860,v,p,job,jobs,results))
})();
var state__7494__auto__ = (function (){var statearr_7874 = f__7493__auto__.call(null);
(statearr_7874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___8042);

return statearr_7874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___8042,res,vec__7860,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7875){
var vec__7876 = p__7875;
var v = cljs.core.nth.call(null,vec__7876,(0),null);
var p = cljs.core.nth.call(null,vec__7876,(1),null);
var job = vec__7876;
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
var n__5891__auto___8045 = n;
var __8046 = (0);
while(true){
if((__8046 < n__5891__auto___8045)){
var G__7877_8047 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__7877_8047) {
case "compute":
var c__7492__auto___8049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8046,c__7492__auto___8049,G__7877_8047,n__5891__auto___8045,jobs,results,process,async){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (__8046,c__7492__auto___8049,G__7877_8047,n__5891__auto___8045,jobs,results,process,async){
return (function (state_7890){
var state_val_7891 = (state_7890[(1)]);
if((state_val_7891 === (1))){
var state_7890__$1 = state_7890;
var statearr_7892_8050 = state_7890__$1;
(statearr_7892_8050[(2)] = null);

(statearr_7892_8050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7891 === (2))){
var state_7890__$1 = state_7890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7890__$1,(4),jobs);
} else {
if((state_val_7891 === (3))){
var inst_7888 = (state_7890[(2)]);
var state_7890__$1 = state_7890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7890__$1,inst_7888);
} else {
if((state_val_7891 === (4))){
var inst_7880 = (state_7890[(2)]);
var inst_7881 = process.call(null,inst_7880);
var state_7890__$1 = state_7890;
if(cljs.core.truth_(inst_7881)){
var statearr_7893_8051 = state_7890__$1;
(statearr_7893_8051[(1)] = (5));

} else {
var statearr_7894_8052 = state_7890__$1;
(statearr_7894_8052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7891 === (5))){
var state_7890__$1 = state_7890;
var statearr_7895_8053 = state_7890__$1;
(statearr_7895_8053[(2)] = null);

(statearr_7895_8053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7891 === (6))){
var state_7890__$1 = state_7890;
var statearr_7896_8054 = state_7890__$1;
(statearr_7896_8054[(2)] = null);

(statearr_7896_8054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7891 === (7))){
var inst_7886 = (state_7890[(2)]);
var state_7890__$1 = state_7890;
var statearr_7897_8055 = state_7890__$1;
(statearr_7897_8055[(2)] = inst_7886);

(statearr_7897_8055[(1)] = (3));


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
});})(__8046,c__7492__auto___8049,G__7877_8047,n__5891__auto___8045,jobs,results,process,async))
;
return ((function (__8046,switch__7380__auto__,c__7492__auto___8049,G__7877_8047,n__5891__auto___8045,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0 = (function (){
var statearr_7901 = [null,null,null,null,null,null,null];
(statearr_7901[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__);

(statearr_7901[(1)] = (1));

return statearr_7901;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1 = (function (state_7890){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_7890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e7902){if((e7902 instanceof Object)){
var ex__7384__auto__ = e7902;
var statearr_7903_8056 = state_7890;
(statearr_7903_8056[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8057 = state_7890;
state_7890 = G__8057;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__ = function(state_7890){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1.call(this,state_7890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__;
})()
;})(__8046,switch__7380__auto__,c__7492__auto___8049,G__7877_8047,n__5891__auto___8045,jobs,results,process,async))
})();
var state__7494__auto__ = (function (){var statearr_7904 = f__7493__auto__.call(null);
(statearr_7904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___8049);

return statearr_7904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(__8046,c__7492__auto___8049,G__7877_8047,n__5891__auto___8045,jobs,results,process,async))
);


break;
case "async":
var c__7492__auto___8058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8046,c__7492__auto___8058,G__7877_8047,n__5891__auto___8045,jobs,results,process,async){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (__8046,c__7492__auto___8058,G__7877_8047,n__5891__auto___8045,jobs,results,process,async){
return (function (state_7917){
var state_val_7918 = (state_7917[(1)]);
if((state_val_7918 === (1))){
var state_7917__$1 = state_7917;
var statearr_7919_8059 = state_7917__$1;
(statearr_7919_8059[(2)] = null);

(statearr_7919_8059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7918 === (2))){
var state_7917__$1 = state_7917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7917__$1,(4),jobs);
} else {
if((state_val_7918 === (3))){
var inst_7915 = (state_7917[(2)]);
var state_7917__$1 = state_7917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7917__$1,inst_7915);
} else {
if((state_val_7918 === (4))){
var inst_7907 = (state_7917[(2)]);
var inst_7908 = async.call(null,inst_7907);
var state_7917__$1 = state_7917;
if(cljs.core.truth_(inst_7908)){
var statearr_7920_8060 = state_7917__$1;
(statearr_7920_8060[(1)] = (5));

} else {
var statearr_7921_8061 = state_7917__$1;
(statearr_7921_8061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7918 === (5))){
var state_7917__$1 = state_7917;
var statearr_7922_8062 = state_7917__$1;
(statearr_7922_8062[(2)] = null);

(statearr_7922_8062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7918 === (6))){
var state_7917__$1 = state_7917;
var statearr_7923_8063 = state_7917__$1;
(statearr_7923_8063[(2)] = null);

(statearr_7923_8063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7918 === (7))){
var inst_7913 = (state_7917[(2)]);
var state_7917__$1 = state_7917;
var statearr_7924_8064 = state_7917__$1;
(statearr_7924_8064[(2)] = inst_7913);

(statearr_7924_8064[(1)] = (3));


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
});})(__8046,c__7492__auto___8058,G__7877_8047,n__5891__auto___8045,jobs,results,process,async))
;
return ((function (__8046,switch__7380__auto__,c__7492__auto___8058,G__7877_8047,n__5891__auto___8045,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0 = (function (){
var statearr_7928 = [null,null,null,null,null,null,null];
(statearr_7928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__);

(statearr_7928[(1)] = (1));

return statearr_7928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1 = (function (state_7917){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_7917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e7929){if((e7929 instanceof Object)){
var ex__7384__auto__ = e7929;
var statearr_7930_8065 = state_7917;
(statearr_7930_8065[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8066 = state_7917;
state_7917 = G__8066;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__ = function(state_7917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1.call(this,state_7917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__;
})()
;})(__8046,switch__7380__auto__,c__7492__auto___8058,G__7877_8047,n__5891__auto___8045,jobs,results,process,async))
})();
var state__7494__auto__ = (function (){var statearr_7931 = f__7493__auto__.call(null);
(statearr_7931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___8058);

return statearr_7931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(__8046,c__7492__auto___8058,G__7877_8047,n__5891__auto___8045,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__8067 = (__8046 + (1));
__8046 = G__8067;
continue;
} else {
}
break;
}

var c__7492__auto___8068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___8068,jobs,results,process,async){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___8068,jobs,results,process,async){
return (function (state_7953){
var state_val_7954 = (state_7953[(1)]);
if((state_val_7954 === (1))){
var state_7953__$1 = state_7953;
var statearr_7955_8069 = state_7953__$1;
(statearr_7955_8069[(2)] = null);

(statearr_7955_8069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7954 === (2))){
var state_7953__$1 = state_7953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7953__$1,(4),from);
} else {
if((state_val_7954 === (3))){
var inst_7951 = (state_7953[(2)]);
var state_7953__$1 = state_7953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7953__$1,inst_7951);
} else {
if((state_val_7954 === (4))){
var inst_7934 = (state_7953[(7)]);
var inst_7934__$1 = (state_7953[(2)]);
var inst_7935 = (inst_7934__$1 == null);
var state_7953__$1 = (function (){var statearr_7956 = state_7953;
(statearr_7956[(7)] = inst_7934__$1);

return statearr_7956;
})();
if(cljs.core.truth_(inst_7935)){
var statearr_7957_8070 = state_7953__$1;
(statearr_7957_8070[(1)] = (5));

} else {
var statearr_7958_8071 = state_7953__$1;
(statearr_7958_8071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7954 === (5))){
var inst_7937 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7953__$1 = state_7953;
var statearr_7959_8072 = state_7953__$1;
(statearr_7959_8072[(2)] = inst_7937);

(statearr_7959_8072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7954 === (6))){
var inst_7939 = (state_7953[(8)]);
var inst_7934 = (state_7953[(7)]);
var inst_7939__$1 = cljs.core.async.chan.call(null,(1));
var inst_7940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7941 = [inst_7934,inst_7939__$1];
var inst_7942 = (new cljs.core.PersistentVector(null,2,(5),inst_7940,inst_7941,null));
var state_7953__$1 = (function (){var statearr_7960 = state_7953;
(statearr_7960[(8)] = inst_7939__$1);

return statearr_7960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7953__$1,(8),jobs,inst_7942);
} else {
if((state_val_7954 === (7))){
var inst_7949 = (state_7953[(2)]);
var state_7953__$1 = state_7953;
var statearr_7961_8073 = state_7953__$1;
(statearr_7961_8073[(2)] = inst_7949);

(statearr_7961_8073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7954 === (8))){
var inst_7939 = (state_7953[(8)]);
var inst_7944 = (state_7953[(2)]);
var state_7953__$1 = (function (){var statearr_7962 = state_7953;
(statearr_7962[(9)] = inst_7944);

return statearr_7962;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7953__$1,(9),results,inst_7939);
} else {
if((state_val_7954 === (9))){
var inst_7946 = (state_7953[(2)]);
var state_7953__$1 = (function (){var statearr_7963 = state_7953;
(statearr_7963[(10)] = inst_7946);

return statearr_7963;
})();
var statearr_7964_8074 = state_7953__$1;
(statearr_7964_8074[(2)] = null);

(statearr_7964_8074[(1)] = (2));


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
});})(c__7492__auto___8068,jobs,results,process,async))
;
return ((function (switch__7380__auto__,c__7492__auto___8068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0 = (function (){
var statearr_7968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__);

(statearr_7968[(1)] = (1));

return statearr_7968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1 = (function (state_7953){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_7953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e7969){if((e7969 instanceof Object)){
var ex__7384__auto__ = e7969;
var statearr_7970_8075 = state_7953;
(statearr_7970_8075[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8076 = state_7953;
state_7953 = G__8076;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__ = function(state_7953){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1.call(this,state_7953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___8068,jobs,results,process,async))
})();
var state__7494__auto__ = (function (){var statearr_7971 = f__7493__auto__.call(null);
(statearr_7971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___8068);

return statearr_7971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___8068,jobs,results,process,async))
);


var c__7492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto__,jobs,results,process,async){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto__,jobs,results,process,async){
return (function (state_8009){
var state_val_8010 = (state_8009[(1)]);
if((state_val_8010 === (7))){
var inst_8005 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
var statearr_8011_8077 = state_8009__$1;
(statearr_8011_8077[(2)] = inst_8005);

(statearr_8011_8077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (20))){
var state_8009__$1 = state_8009;
var statearr_8012_8078 = state_8009__$1;
(statearr_8012_8078[(2)] = null);

(statearr_8012_8078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (1))){
var state_8009__$1 = state_8009;
var statearr_8013_8079 = state_8009__$1;
(statearr_8013_8079[(2)] = null);

(statearr_8013_8079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (4))){
var inst_7974 = (state_8009[(7)]);
var inst_7974__$1 = (state_8009[(2)]);
var inst_7975 = (inst_7974__$1 == null);
var state_8009__$1 = (function (){var statearr_8014 = state_8009;
(statearr_8014[(7)] = inst_7974__$1);

return statearr_8014;
})();
if(cljs.core.truth_(inst_7975)){
var statearr_8015_8080 = state_8009__$1;
(statearr_8015_8080[(1)] = (5));

} else {
var statearr_8016_8081 = state_8009__$1;
(statearr_8016_8081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (15))){
var inst_7987 = (state_8009[(8)]);
var state_8009__$1 = state_8009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8009__$1,(18),to,inst_7987);
} else {
if((state_val_8010 === (21))){
var inst_8000 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
var statearr_8017_8082 = state_8009__$1;
(statearr_8017_8082[(2)] = inst_8000);

(statearr_8017_8082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (13))){
var inst_8002 = (state_8009[(2)]);
var state_8009__$1 = (function (){var statearr_8018 = state_8009;
(statearr_8018[(9)] = inst_8002);

return statearr_8018;
})();
var statearr_8019_8083 = state_8009__$1;
(statearr_8019_8083[(2)] = null);

(statearr_8019_8083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (6))){
var inst_7974 = (state_8009[(7)]);
var state_8009__$1 = state_8009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8009__$1,(11),inst_7974);
} else {
if((state_val_8010 === (17))){
var inst_7995 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
if(cljs.core.truth_(inst_7995)){
var statearr_8020_8084 = state_8009__$1;
(statearr_8020_8084[(1)] = (19));

} else {
var statearr_8021_8085 = state_8009__$1;
(statearr_8021_8085[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (3))){
var inst_8007 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8009__$1,inst_8007);
} else {
if((state_val_8010 === (12))){
var inst_7984 = (state_8009[(10)]);
var state_8009__$1 = state_8009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8009__$1,(14),inst_7984);
} else {
if((state_val_8010 === (2))){
var state_8009__$1 = state_8009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8009__$1,(4),results);
} else {
if((state_val_8010 === (19))){
var state_8009__$1 = state_8009;
var statearr_8022_8086 = state_8009__$1;
(statearr_8022_8086[(2)] = null);

(statearr_8022_8086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (11))){
var inst_7984 = (state_8009[(2)]);
var state_8009__$1 = (function (){var statearr_8023 = state_8009;
(statearr_8023[(10)] = inst_7984);

return statearr_8023;
})();
var statearr_8024_8087 = state_8009__$1;
(statearr_8024_8087[(2)] = null);

(statearr_8024_8087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (9))){
var state_8009__$1 = state_8009;
var statearr_8025_8088 = state_8009__$1;
(statearr_8025_8088[(2)] = null);

(statearr_8025_8088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (5))){
var state_8009__$1 = state_8009;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8026_8089 = state_8009__$1;
(statearr_8026_8089[(1)] = (8));

} else {
var statearr_8027_8090 = state_8009__$1;
(statearr_8027_8090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (14))){
var inst_7987 = (state_8009[(8)]);
var inst_7989 = (state_8009[(11)]);
var inst_7987__$1 = (state_8009[(2)]);
var inst_7988 = (inst_7987__$1 == null);
var inst_7989__$1 = cljs.core.not.call(null,inst_7988);
var state_8009__$1 = (function (){var statearr_8028 = state_8009;
(statearr_8028[(8)] = inst_7987__$1);

(statearr_8028[(11)] = inst_7989__$1);

return statearr_8028;
})();
if(inst_7989__$1){
var statearr_8029_8091 = state_8009__$1;
(statearr_8029_8091[(1)] = (15));

} else {
var statearr_8030_8092 = state_8009__$1;
(statearr_8030_8092[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (16))){
var inst_7989 = (state_8009[(11)]);
var state_8009__$1 = state_8009;
var statearr_8031_8093 = state_8009__$1;
(statearr_8031_8093[(2)] = inst_7989);

(statearr_8031_8093[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (10))){
var inst_7981 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
var statearr_8032_8094 = state_8009__$1;
(statearr_8032_8094[(2)] = inst_7981);

(statearr_8032_8094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (18))){
var inst_7992 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
var statearr_8033_8095 = state_8009__$1;
(statearr_8033_8095[(2)] = inst_7992);

(statearr_8033_8095[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (8))){
var inst_7978 = cljs.core.async.close_BANG_.call(null,to);
var state_8009__$1 = state_8009;
var statearr_8034_8096 = state_8009__$1;
(statearr_8034_8096[(2)] = inst_7978);

(statearr_8034_8096[(1)] = (10));


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
});})(c__7492__auto__,jobs,results,process,async))
;
return ((function (switch__7380__auto__,c__7492__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0 = (function (){
var statearr_8038 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__);

(statearr_8038[(1)] = (1));

return statearr_8038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1 = (function (state_8009){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_8009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e8039){if((e8039 instanceof Object)){
var ex__7384__auto__ = e8039;
var statearr_8040_8097 = state_8009;
(statearr_8040_8097[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8098 = state_8009;
state_8009 = G__8098;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__ = function(state_8009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1.call(this,state_8009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7381__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto__,jobs,results,process,async))
})();
var state__7494__auto__ = (function (){var statearr_8041 = f__7493__auto__.call(null);
(statearr_8041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto__);

return statearr_8041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto__,jobs,results,process,async))
);

return c__7492__auto__;
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
var args8099 = [];
var len__6046__auto___8102 = arguments.length;
var i__6047__auto___8103 = (0);
while(true){
if((i__6047__auto___8103 < len__6046__auto___8102)){
args8099.push((arguments[i__6047__auto___8103]));

var G__8104 = (i__6047__auto___8103 + (1));
i__6047__auto___8103 = G__8104;
continue;
} else {
}
break;
}

var G__8101 = args8099.length;
switch (G__8101) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8099.length)].join('')));

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
var args8106 = [];
var len__6046__auto___8109 = arguments.length;
var i__6047__auto___8110 = (0);
while(true){
if((i__6047__auto___8110 < len__6046__auto___8109)){
args8106.push((arguments[i__6047__auto___8110]));

var G__8111 = (i__6047__auto___8110 + (1));
i__6047__auto___8110 = G__8111;
continue;
} else {
}
break;
}

var G__8108 = args8106.length;
switch (G__8108) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8106.length)].join('')));

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
var args8113 = [];
var len__6046__auto___8166 = arguments.length;
var i__6047__auto___8167 = (0);
while(true){
if((i__6047__auto___8167 < len__6046__auto___8166)){
args8113.push((arguments[i__6047__auto___8167]));

var G__8168 = (i__6047__auto___8167 + (1));
i__6047__auto___8167 = G__8168;
continue;
} else {
}
break;
}

var G__8115 = args8113.length;
switch (G__8115) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8113.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7492__auto___8170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___8170,tc,fc){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___8170,tc,fc){
return (function (state_8141){
var state_val_8142 = (state_8141[(1)]);
if((state_val_8142 === (7))){
var inst_8137 = (state_8141[(2)]);
var state_8141__$1 = state_8141;
var statearr_8143_8171 = state_8141__$1;
(statearr_8143_8171[(2)] = inst_8137);

(statearr_8143_8171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8142 === (1))){
var state_8141__$1 = state_8141;
var statearr_8144_8172 = state_8141__$1;
(statearr_8144_8172[(2)] = null);

(statearr_8144_8172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8142 === (4))){
var inst_8118 = (state_8141[(7)]);
var inst_8118__$1 = (state_8141[(2)]);
var inst_8119 = (inst_8118__$1 == null);
var state_8141__$1 = (function (){var statearr_8145 = state_8141;
(statearr_8145[(7)] = inst_8118__$1);

return statearr_8145;
})();
if(cljs.core.truth_(inst_8119)){
var statearr_8146_8173 = state_8141__$1;
(statearr_8146_8173[(1)] = (5));

} else {
var statearr_8147_8174 = state_8141__$1;
(statearr_8147_8174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8142 === (13))){
var state_8141__$1 = state_8141;
var statearr_8148_8175 = state_8141__$1;
(statearr_8148_8175[(2)] = null);

(statearr_8148_8175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8142 === (6))){
var inst_8118 = (state_8141[(7)]);
var inst_8124 = p.call(null,inst_8118);
var state_8141__$1 = state_8141;
if(cljs.core.truth_(inst_8124)){
var statearr_8149_8176 = state_8141__$1;
(statearr_8149_8176[(1)] = (9));

} else {
var statearr_8150_8177 = state_8141__$1;
(statearr_8150_8177[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8142 === (3))){
var inst_8139 = (state_8141[(2)]);
var state_8141__$1 = state_8141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8141__$1,inst_8139);
} else {
if((state_val_8142 === (12))){
var state_8141__$1 = state_8141;
var statearr_8151_8178 = state_8141__$1;
(statearr_8151_8178[(2)] = null);

(statearr_8151_8178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8142 === (2))){
var state_8141__$1 = state_8141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8141__$1,(4),ch);
} else {
if((state_val_8142 === (11))){
var inst_8118 = (state_8141[(7)]);
var inst_8128 = (state_8141[(2)]);
var state_8141__$1 = state_8141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8141__$1,(8),inst_8128,inst_8118);
} else {
if((state_val_8142 === (9))){
var state_8141__$1 = state_8141;
var statearr_8152_8179 = state_8141__$1;
(statearr_8152_8179[(2)] = tc);

(statearr_8152_8179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8142 === (5))){
var inst_8121 = cljs.core.async.close_BANG_.call(null,tc);
var inst_8122 = cljs.core.async.close_BANG_.call(null,fc);
var state_8141__$1 = (function (){var statearr_8153 = state_8141;
(statearr_8153[(8)] = inst_8121);

return statearr_8153;
})();
var statearr_8154_8180 = state_8141__$1;
(statearr_8154_8180[(2)] = inst_8122);

(statearr_8154_8180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8142 === (14))){
var inst_8135 = (state_8141[(2)]);
var state_8141__$1 = state_8141;
var statearr_8155_8181 = state_8141__$1;
(statearr_8155_8181[(2)] = inst_8135);

(statearr_8155_8181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8142 === (10))){
var state_8141__$1 = state_8141;
var statearr_8156_8182 = state_8141__$1;
(statearr_8156_8182[(2)] = fc);

(statearr_8156_8182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8142 === (8))){
var inst_8130 = (state_8141[(2)]);
var state_8141__$1 = state_8141;
if(cljs.core.truth_(inst_8130)){
var statearr_8157_8183 = state_8141__$1;
(statearr_8157_8183[(1)] = (12));

} else {
var statearr_8158_8184 = state_8141__$1;
(statearr_8158_8184[(1)] = (13));

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
});})(c__7492__auto___8170,tc,fc))
;
return ((function (switch__7380__auto__,c__7492__auto___8170,tc,fc){
return (function() {
var cljs$core$async$state_machine__7381__auto__ = null;
var cljs$core$async$state_machine__7381__auto____0 = (function (){
var statearr_8162 = [null,null,null,null,null,null,null,null,null];
(statearr_8162[(0)] = cljs$core$async$state_machine__7381__auto__);

(statearr_8162[(1)] = (1));

return statearr_8162;
});
var cljs$core$async$state_machine__7381__auto____1 = (function (state_8141){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_8141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e8163){if((e8163 instanceof Object)){
var ex__7384__auto__ = e8163;
var statearr_8164_8185 = state_8141;
(statearr_8164_8185[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8186 = state_8141;
state_8141 = G__8186;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$state_machine__7381__auto__ = function(state_8141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7381__auto____1.call(this,state_8141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7381__auto____0;
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7381__auto____1;
return cljs$core$async$state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___8170,tc,fc))
})();
var state__7494__auto__ = (function (){var statearr_8165 = f__7493__auto__.call(null);
(statearr_8165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___8170);

return statearr_8165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___8170,tc,fc))
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
var c__7492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto__){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto__){
return (function (state_8250){
var state_val_8251 = (state_8250[(1)]);
if((state_val_8251 === (7))){
var inst_8246 = (state_8250[(2)]);
var state_8250__$1 = state_8250;
var statearr_8252_8273 = state_8250__$1;
(statearr_8252_8273[(2)] = inst_8246);

(statearr_8252_8273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8251 === (1))){
var inst_8230 = init;
var state_8250__$1 = (function (){var statearr_8253 = state_8250;
(statearr_8253[(7)] = inst_8230);

return statearr_8253;
})();
var statearr_8254_8274 = state_8250__$1;
(statearr_8254_8274[(2)] = null);

(statearr_8254_8274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8251 === (4))){
var inst_8233 = (state_8250[(8)]);
var inst_8233__$1 = (state_8250[(2)]);
var inst_8234 = (inst_8233__$1 == null);
var state_8250__$1 = (function (){var statearr_8255 = state_8250;
(statearr_8255[(8)] = inst_8233__$1);

return statearr_8255;
})();
if(cljs.core.truth_(inst_8234)){
var statearr_8256_8275 = state_8250__$1;
(statearr_8256_8275[(1)] = (5));

} else {
var statearr_8257_8276 = state_8250__$1;
(statearr_8257_8276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8251 === (6))){
var inst_8233 = (state_8250[(8)]);
var inst_8237 = (state_8250[(9)]);
var inst_8230 = (state_8250[(7)]);
var inst_8237__$1 = f.call(null,inst_8230,inst_8233);
var inst_8238 = cljs.core.reduced_QMARK_.call(null,inst_8237__$1);
var state_8250__$1 = (function (){var statearr_8258 = state_8250;
(statearr_8258[(9)] = inst_8237__$1);

return statearr_8258;
})();
if(inst_8238){
var statearr_8259_8277 = state_8250__$1;
(statearr_8259_8277[(1)] = (8));

} else {
var statearr_8260_8278 = state_8250__$1;
(statearr_8260_8278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8251 === (3))){
var inst_8248 = (state_8250[(2)]);
var state_8250__$1 = state_8250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8250__$1,inst_8248);
} else {
if((state_val_8251 === (2))){
var state_8250__$1 = state_8250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8250__$1,(4),ch);
} else {
if((state_val_8251 === (9))){
var inst_8237 = (state_8250[(9)]);
var inst_8230 = inst_8237;
var state_8250__$1 = (function (){var statearr_8261 = state_8250;
(statearr_8261[(7)] = inst_8230);

return statearr_8261;
})();
var statearr_8262_8279 = state_8250__$1;
(statearr_8262_8279[(2)] = null);

(statearr_8262_8279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8251 === (5))){
var inst_8230 = (state_8250[(7)]);
var state_8250__$1 = state_8250;
var statearr_8263_8280 = state_8250__$1;
(statearr_8263_8280[(2)] = inst_8230);

(statearr_8263_8280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8251 === (10))){
var inst_8244 = (state_8250[(2)]);
var state_8250__$1 = state_8250;
var statearr_8264_8281 = state_8250__$1;
(statearr_8264_8281[(2)] = inst_8244);

(statearr_8264_8281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8251 === (8))){
var inst_8237 = (state_8250[(9)]);
var inst_8240 = cljs.core.deref.call(null,inst_8237);
var state_8250__$1 = state_8250;
var statearr_8265_8282 = state_8250__$1;
(statearr_8265_8282[(2)] = inst_8240);

(statearr_8265_8282[(1)] = (10));


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
});})(c__7492__auto__))
;
return ((function (switch__7380__auto__,c__7492__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7381__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7381__auto____0 = (function (){
var statearr_8269 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8269[(0)] = cljs$core$async$reduce_$_state_machine__7381__auto__);

(statearr_8269[(1)] = (1));

return statearr_8269;
});
var cljs$core$async$reduce_$_state_machine__7381__auto____1 = (function (state_8250){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_8250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e8270){if((e8270 instanceof Object)){
var ex__7384__auto__ = e8270;
var statearr_8271_8283 = state_8250;
(statearr_8271_8283[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8284 = state_8250;
state_8250 = G__8284;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7381__auto__ = function(state_8250){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7381__auto____1.call(this,state_8250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7381__auto____0;
cljs$core$async$reduce_$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7381__auto____1;
return cljs$core$async$reduce_$_state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto__))
})();
var state__7494__auto__ = (function (){var statearr_8272 = f__7493__auto__.call(null);
(statearr_8272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto__);

return statearr_8272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto__))
);

return c__7492__auto__;
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
var args8285 = [];
var len__6046__auto___8337 = arguments.length;
var i__6047__auto___8338 = (0);
while(true){
if((i__6047__auto___8338 < len__6046__auto___8337)){
args8285.push((arguments[i__6047__auto___8338]));

var G__8339 = (i__6047__auto___8338 + (1));
i__6047__auto___8338 = G__8339;
continue;
} else {
}
break;
}

var G__8287 = args8285.length;
switch (G__8287) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8285.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto__){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto__){
return (function (state_8312){
var state_val_8313 = (state_8312[(1)]);
if((state_val_8313 === (7))){
var inst_8294 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
var statearr_8314_8341 = state_8312__$1;
(statearr_8314_8341[(2)] = inst_8294);

(statearr_8314_8341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8313 === (1))){
var inst_8288 = cljs.core.seq.call(null,coll);
var inst_8289 = inst_8288;
var state_8312__$1 = (function (){var statearr_8315 = state_8312;
(statearr_8315[(7)] = inst_8289);

return statearr_8315;
})();
var statearr_8316_8342 = state_8312__$1;
(statearr_8316_8342[(2)] = null);

(statearr_8316_8342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8313 === (4))){
var inst_8289 = (state_8312[(7)]);
var inst_8292 = cljs.core.first.call(null,inst_8289);
var state_8312__$1 = state_8312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8312__$1,(7),ch,inst_8292);
} else {
if((state_val_8313 === (13))){
var inst_8306 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
var statearr_8317_8343 = state_8312__$1;
(statearr_8317_8343[(2)] = inst_8306);

(statearr_8317_8343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8313 === (6))){
var inst_8297 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
if(cljs.core.truth_(inst_8297)){
var statearr_8318_8344 = state_8312__$1;
(statearr_8318_8344[(1)] = (8));

} else {
var statearr_8319_8345 = state_8312__$1;
(statearr_8319_8345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8313 === (3))){
var inst_8310 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8312__$1,inst_8310);
} else {
if((state_val_8313 === (12))){
var state_8312__$1 = state_8312;
var statearr_8320_8346 = state_8312__$1;
(statearr_8320_8346[(2)] = null);

(statearr_8320_8346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8313 === (2))){
var inst_8289 = (state_8312[(7)]);
var state_8312__$1 = state_8312;
if(cljs.core.truth_(inst_8289)){
var statearr_8321_8347 = state_8312__$1;
(statearr_8321_8347[(1)] = (4));

} else {
var statearr_8322_8348 = state_8312__$1;
(statearr_8322_8348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8313 === (11))){
var inst_8303 = cljs.core.async.close_BANG_.call(null,ch);
var state_8312__$1 = state_8312;
var statearr_8323_8349 = state_8312__$1;
(statearr_8323_8349[(2)] = inst_8303);

(statearr_8323_8349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8313 === (9))){
var state_8312__$1 = state_8312;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8324_8350 = state_8312__$1;
(statearr_8324_8350[(1)] = (11));

} else {
var statearr_8325_8351 = state_8312__$1;
(statearr_8325_8351[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8313 === (5))){
var inst_8289 = (state_8312[(7)]);
var state_8312__$1 = state_8312;
var statearr_8326_8352 = state_8312__$1;
(statearr_8326_8352[(2)] = inst_8289);

(statearr_8326_8352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8313 === (10))){
var inst_8308 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
var statearr_8327_8353 = state_8312__$1;
(statearr_8327_8353[(2)] = inst_8308);

(statearr_8327_8353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8313 === (8))){
var inst_8289 = (state_8312[(7)]);
var inst_8299 = cljs.core.next.call(null,inst_8289);
var inst_8289__$1 = inst_8299;
var state_8312__$1 = (function (){var statearr_8328 = state_8312;
(statearr_8328[(7)] = inst_8289__$1);

return statearr_8328;
})();
var statearr_8329_8354 = state_8312__$1;
(statearr_8329_8354[(2)] = null);

(statearr_8329_8354[(1)] = (2));


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
});})(c__7492__auto__))
;
return ((function (switch__7380__auto__,c__7492__auto__){
return (function() {
var cljs$core$async$state_machine__7381__auto__ = null;
var cljs$core$async$state_machine__7381__auto____0 = (function (){
var statearr_8333 = [null,null,null,null,null,null,null,null];
(statearr_8333[(0)] = cljs$core$async$state_machine__7381__auto__);

(statearr_8333[(1)] = (1));

return statearr_8333;
});
var cljs$core$async$state_machine__7381__auto____1 = (function (state_8312){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_8312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e8334){if((e8334 instanceof Object)){
var ex__7384__auto__ = e8334;
var statearr_8335_8355 = state_8312;
(statearr_8335_8355[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8356 = state_8312;
state_8312 = G__8356;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$state_machine__7381__auto__ = function(state_8312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7381__auto____1.call(this,state_8312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7381__auto____0;
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7381__auto____1;
return cljs$core$async$state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto__))
})();
var state__7494__auto__ = (function (){var statearr_8336 = f__7493__auto__.call(null);
(statearr_8336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto__);

return statearr_8336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto__))
);

return c__7492__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async8578 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8578 = (function (mult,ch,cs,meta8579){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8579 = meta8579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8580,meta8579__$1){
var self__ = this;
var _8580__$1 = this;
return (new cljs.core.async.t_cljs$core$async8578(self__.mult,self__.ch,self__.cs,meta8579__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8580){
var self__ = this;
var _8580__$1 = this;
return self__.meta8579;
});})(cs))
;

cljs.core.async.t_cljs$core$async8578.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8578.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8578.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8578.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8578.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8578.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8578.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8579","meta8579",-453117919,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8578.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8578";

cljs.core.async.t_cljs$core$async8578.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async8578");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8578 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8578(mult__$1,ch__$1,cs__$1,meta8579){
return (new cljs.core.async.t_cljs$core$async8578(mult__$1,ch__$1,cs__$1,meta8579));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8578(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7492__auto___8799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___8799,cs,m,dchan,dctr,done){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___8799,cs,m,dchan,dctr,done){
return (function (state_8711){
var state_val_8712 = (state_8711[(1)]);
if((state_val_8712 === (7))){
var inst_8707 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8713_8800 = state_8711__$1;
(statearr_8713_8800[(2)] = inst_8707);

(statearr_8713_8800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (20))){
var inst_8612 = (state_8711[(7)]);
var inst_8622 = cljs.core.first.call(null,inst_8612);
var inst_8623 = cljs.core.nth.call(null,inst_8622,(0),null);
var inst_8624 = cljs.core.nth.call(null,inst_8622,(1),null);
var state_8711__$1 = (function (){var statearr_8714 = state_8711;
(statearr_8714[(8)] = inst_8623);

return statearr_8714;
})();
if(cljs.core.truth_(inst_8624)){
var statearr_8715_8801 = state_8711__$1;
(statearr_8715_8801[(1)] = (22));

} else {
var statearr_8716_8802 = state_8711__$1;
(statearr_8716_8802[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (27))){
var inst_8659 = (state_8711[(9)]);
var inst_8583 = (state_8711[(10)]);
var inst_8652 = (state_8711[(11)]);
var inst_8654 = (state_8711[(12)]);
var inst_8659__$1 = cljs.core._nth.call(null,inst_8652,inst_8654);
var inst_8660 = cljs.core.async.put_BANG_.call(null,inst_8659__$1,inst_8583,done);
var state_8711__$1 = (function (){var statearr_8717 = state_8711;
(statearr_8717[(9)] = inst_8659__$1);

return statearr_8717;
})();
if(cljs.core.truth_(inst_8660)){
var statearr_8718_8803 = state_8711__$1;
(statearr_8718_8803[(1)] = (30));

} else {
var statearr_8719_8804 = state_8711__$1;
(statearr_8719_8804[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (1))){
var state_8711__$1 = state_8711;
var statearr_8720_8805 = state_8711__$1;
(statearr_8720_8805[(2)] = null);

(statearr_8720_8805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (24))){
var inst_8612 = (state_8711[(7)]);
var inst_8629 = (state_8711[(2)]);
var inst_8630 = cljs.core.next.call(null,inst_8612);
var inst_8592 = inst_8630;
var inst_8593 = null;
var inst_8594 = (0);
var inst_8595 = (0);
var state_8711__$1 = (function (){var statearr_8721 = state_8711;
(statearr_8721[(13)] = inst_8595);

(statearr_8721[(14)] = inst_8593);

(statearr_8721[(15)] = inst_8629);

(statearr_8721[(16)] = inst_8592);

(statearr_8721[(17)] = inst_8594);

return statearr_8721;
})();
var statearr_8722_8806 = state_8711__$1;
(statearr_8722_8806[(2)] = null);

(statearr_8722_8806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (39))){
var state_8711__$1 = state_8711;
var statearr_8726_8807 = state_8711__$1;
(statearr_8726_8807[(2)] = null);

(statearr_8726_8807[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (4))){
var inst_8583 = (state_8711[(10)]);
var inst_8583__$1 = (state_8711[(2)]);
var inst_8584 = (inst_8583__$1 == null);
var state_8711__$1 = (function (){var statearr_8727 = state_8711;
(statearr_8727[(10)] = inst_8583__$1);

return statearr_8727;
})();
if(cljs.core.truth_(inst_8584)){
var statearr_8728_8808 = state_8711__$1;
(statearr_8728_8808[(1)] = (5));

} else {
var statearr_8729_8809 = state_8711__$1;
(statearr_8729_8809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (15))){
var inst_8595 = (state_8711[(13)]);
var inst_8593 = (state_8711[(14)]);
var inst_8592 = (state_8711[(16)]);
var inst_8594 = (state_8711[(17)]);
var inst_8608 = (state_8711[(2)]);
var inst_8609 = (inst_8595 + (1));
var tmp8723 = inst_8593;
var tmp8724 = inst_8592;
var tmp8725 = inst_8594;
var inst_8592__$1 = tmp8724;
var inst_8593__$1 = tmp8723;
var inst_8594__$1 = tmp8725;
var inst_8595__$1 = inst_8609;
var state_8711__$1 = (function (){var statearr_8730 = state_8711;
(statearr_8730[(13)] = inst_8595__$1);

(statearr_8730[(18)] = inst_8608);

(statearr_8730[(14)] = inst_8593__$1);

(statearr_8730[(16)] = inst_8592__$1);

(statearr_8730[(17)] = inst_8594__$1);

return statearr_8730;
})();
var statearr_8731_8810 = state_8711__$1;
(statearr_8731_8810[(2)] = null);

(statearr_8731_8810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (21))){
var inst_8633 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8735_8811 = state_8711__$1;
(statearr_8735_8811[(2)] = inst_8633);

(statearr_8735_8811[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (31))){
var inst_8659 = (state_8711[(9)]);
var inst_8663 = done.call(null,null);
var inst_8664 = cljs.core.async.untap_STAR_.call(null,m,inst_8659);
var state_8711__$1 = (function (){var statearr_8736 = state_8711;
(statearr_8736[(19)] = inst_8663);

return statearr_8736;
})();
var statearr_8737_8812 = state_8711__$1;
(statearr_8737_8812[(2)] = inst_8664);

(statearr_8737_8812[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (32))){
var inst_8653 = (state_8711[(20)]);
var inst_8652 = (state_8711[(11)]);
var inst_8651 = (state_8711[(21)]);
var inst_8654 = (state_8711[(12)]);
var inst_8666 = (state_8711[(2)]);
var inst_8667 = (inst_8654 + (1));
var tmp8732 = inst_8653;
var tmp8733 = inst_8652;
var tmp8734 = inst_8651;
var inst_8651__$1 = tmp8734;
var inst_8652__$1 = tmp8733;
var inst_8653__$1 = tmp8732;
var inst_8654__$1 = inst_8667;
var state_8711__$1 = (function (){var statearr_8738 = state_8711;
(statearr_8738[(22)] = inst_8666);

(statearr_8738[(20)] = inst_8653__$1);

(statearr_8738[(11)] = inst_8652__$1);

(statearr_8738[(21)] = inst_8651__$1);

(statearr_8738[(12)] = inst_8654__$1);

return statearr_8738;
})();
var statearr_8739_8813 = state_8711__$1;
(statearr_8739_8813[(2)] = null);

(statearr_8739_8813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (40))){
var inst_8679 = (state_8711[(23)]);
var inst_8683 = done.call(null,null);
var inst_8684 = cljs.core.async.untap_STAR_.call(null,m,inst_8679);
var state_8711__$1 = (function (){var statearr_8740 = state_8711;
(statearr_8740[(24)] = inst_8683);

return statearr_8740;
})();
var statearr_8741_8814 = state_8711__$1;
(statearr_8741_8814[(2)] = inst_8684);

(statearr_8741_8814[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (33))){
var inst_8670 = (state_8711[(25)]);
var inst_8672 = cljs.core.chunked_seq_QMARK_.call(null,inst_8670);
var state_8711__$1 = state_8711;
if(inst_8672){
var statearr_8742_8815 = state_8711__$1;
(statearr_8742_8815[(1)] = (36));

} else {
var statearr_8743_8816 = state_8711__$1;
(statearr_8743_8816[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (13))){
var inst_8602 = (state_8711[(26)]);
var inst_8605 = cljs.core.async.close_BANG_.call(null,inst_8602);
var state_8711__$1 = state_8711;
var statearr_8744_8817 = state_8711__$1;
(statearr_8744_8817[(2)] = inst_8605);

(statearr_8744_8817[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (22))){
var inst_8623 = (state_8711[(8)]);
var inst_8626 = cljs.core.async.close_BANG_.call(null,inst_8623);
var state_8711__$1 = state_8711;
var statearr_8745_8818 = state_8711__$1;
(statearr_8745_8818[(2)] = inst_8626);

(statearr_8745_8818[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (36))){
var inst_8670 = (state_8711[(25)]);
var inst_8674 = cljs.core.chunk_first.call(null,inst_8670);
var inst_8675 = cljs.core.chunk_rest.call(null,inst_8670);
var inst_8676 = cljs.core.count.call(null,inst_8674);
var inst_8651 = inst_8675;
var inst_8652 = inst_8674;
var inst_8653 = inst_8676;
var inst_8654 = (0);
var state_8711__$1 = (function (){var statearr_8746 = state_8711;
(statearr_8746[(20)] = inst_8653);

(statearr_8746[(11)] = inst_8652);

(statearr_8746[(21)] = inst_8651);

(statearr_8746[(12)] = inst_8654);

return statearr_8746;
})();
var statearr_8747_8819 = state_8711__$1;
(statearr_8747_8819[(2)] = null);

(statearr_8747_8819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (41))){
var inst_8670 = (state_8711[(25)]);
var inst_8686 = (state_8711[(2)]);
var inst_8687 = cljs.core.next.call(null,inst_8670);
var inst_8651 = inst_8687;
var inst_8652 = null;
var inst_8653 = (0);
var inst_8654 = (0);
var state_8711__$1 = (function (){var statearr_8748 = state_8711;
(statearr_8748[(20)] = inst_8653);

(statearr_8748[(27)] = inst_8686);

(statearr_8748[(11)] = inst_8652);

(statearr_8748[(21)] = inst_8651);

(statearr_8748[(12)] = inst_8654);

return statearr_8748;
})();
var statearr_8749_8820 = state_8711__$1;
(statearr_8749_8820[(2)] = null);

(statearr_8749_8820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (43))){
var state_8711__$1 = state_8711;
var statearr_8750_8821 = state_8711__$1;
(statearr_8750_8821[(2)] = null);

(statearr_8750_8821[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (29))){
var inst_8695 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8751_8822 = state_8711__$1;
(statearr_8751_8822[(2)] = inst_8695);

(statearr_8751_8822[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (44))){
var inst_8704 = (state_8711[(2)]);
var state_8711__$1 = (function (){var statearr_8752 = state_8711;
(statearr_8752[(28)] = inst_8704);

return statearr_8752;
})();
var statearr_8753_8823 = state_8711__$1;
(statearr_8753_8823[(2)] = null);

(statearr_8753_8823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (6))){
var inst_8643 = (state_8711[(29)]);
var inst_8642 = cljs.core.deref.call(null,cs);
var inst_8643__$1 = cljs.core.keys.call(null,inst_8642);
var inst_8644 = cljs.core.count.call(null,inst_8643__$1);
var inst_8645 = cljs.core.reset_BANG_.call(null,dctr,inst_8644);
var inst_8650 = cljs.core.seq.call(null,inst_8643__$1);
var inst_8651 = inst_8650;
var inst_8652 = null;
var inst_8653 = (0);
var inst_8654 = (0);
var state_8711__$1 = (function (){var statearr_8754 = state_8711;
(statearr_8754[(29)] = inst_8643__$1);

(statearr_8754[(20)] = inst_8653);

(statearr_8754[(30)] = inst_8645);

(statearr_8754[(11)] = inst_8652);

(statearr_8754[(21)] = inst_8651);

(statearr_8754[(12)] = inst_8654);

return statearr_8754;
})();
var statearr_8755_8824 = state_8711__$1;
(statearr_8755_8824[(2)] = null);

(statearr_8755_8824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (28))){
var inst_8670 = (state_8711[(25)]);
var inst_8651 = (state_8711[(21)]);
var inst_8670__$1 = cljs.core.seq.call(null,inst_8651);
var state_8711__$1 = (function (){var statearr_8756 = state_8711;
(statearr_8756[(25)] = inst_8670__$1);

return statearr_8756;
})();
if(inst_8670__$1){
var statearr_8757_8825 = state_8711__$1;
(statearr_8757_8825[(1)] = (33));

} else {
var statearr_8758_8826 = state_8711__$1;
(statearr_8758_8826[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (25))){
var inst_8653 = (state_8711[(20)]);
var inst_8654 = (state_8711[(12)]);
var inst_8656 = (inst_8654 < inst_8653);
var inst_8657 = inst_8656;
var state_8711__$1 = state_8711;
if(cljs.core.truth_(inst_8657)){
var statearr_8759_8827 = state_8711__$1;
(statearr_8759_8827[(1)] = (27));

} else {
var statearr_8760_8828 = state_8711__$1;
(statearr_8760_8828[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (34))){
var state_8711__$1 = state_8711;
var statearr_8761_8829 = state_8711__$1;
(statearr_8761_8829[(2)] = null);

(statearr_8761_8829[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (17))){
var state_8711__$1 = state_8711;
var statearr_8762_8830 = state_8711__$1;
(statearr_8762_8830[(2)] = null);

(statearr_8762_8830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (3))){
var inst_8709 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8711__$1,inst_8709);
} else {
if((state_val_8712 === (12))){
var inst_8638 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8763_8831 = state_8711__$1;
(statearr_8763_8831[(2)] = inst_8638);

(statearr_8763_8831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (2))){
var state_8711__$1 = state_8711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8711__$1,(4),ch);
} else {
if((state_val_8712 === (23))){
var state_8711__$1 = state_8711;
var statearr_8764_8832 = state_8711__$1;
(statearr_8764_8832[(2)] = null);

(statearr_8764_8832[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (35))){
var inst_8693 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8765_8833 = state_8711__$1;
(statearr_8765_8833[(2)] = inst_8693);

(statearr_8765_8833[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (19))){
var inst_8612 = (state_8711[(7)]);
var inst_8616 = cljs.core.chunk_first.call(null,inst_8612);
var inst_8617 = cljs.core.chunk_rest.call(null,inst_8612);
var inst_8618 = cljs.core.count.call(null,inst_8616);
var inst_8592 = inst_8617;
var inst_8593 = inst_8616;
var inst_8594 = inst_8618;
var inst_8595 = (0);
var state_8711__$1 = (function (){var statearr_8766 = state_8711;
(statearr_8766[(13)] = inst_8595);

(statearr_8766[(14)] = inst_8593);

(statearr_8766[(16)] = inst_8592);

(statearr_8766[(17)] = inst_8594);

return statearr_8766;
})();
var statearr_8767_8834 = state_8711__$1;
(statearr_8767_8834[(2)] = null);

(statearr_8767_8834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (11))){
var inst_8612 = (state_8711[(7)]);
var inst_8592 = (state_8711[(16)]);
var inst_8612__$1 = cljs.core.seq.call(null,inst_8592);
var state_8711__$1 = (function (){var statearr_8768 = state_8711;
(statearr_8768[(7)] = inst_8612__$1);

return statearr_8768;
})();
if(inst_8612__$1){
var statearr_8769_8835 = state_8711__$1;
(statearr_8769_8835[(1)] = (16));

} else {
var statearr_8770_8836 = state_8711__$1;
(statearr_8770_8836[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (9))){
var inst_8640 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8771_8837 = state_8711__$1;
(statearr_8771_8837[(2)] = inst_8640);

(statearr_8771_8837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (5))){
var inst_8590 = cljs.core.deref.call(null,cs);
var inst_8591 = cljs.core.seq.call(null,inst_8590);
var inst_8592 = inst_8591;
var inst_8593 = null;
var inst_8594 = (0);
var inst_8595 = (0);
var state_8711__$1 = (function (){var statearr_8772 = state_8711;
(statearr_8772[(13)] = inst_8595);

(statearr_8772[(14)] = inst_8593);

(statearr_8772[(16)] = inst_8592);

(statearr_8772[(17)] = inst_8594);

return statearr_8772;
})();
var statearr_8773_8838 = state_8711__$1;
(statearr_8773_8838[(2)] = null);

(statearr_8773_8838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (14))){
var state_8711__$1 = state_8711;
var statearr_8774_8839 = state_8711__$1;
(statearr_8774_8839[(2)] = null);

(statearr_8774_8839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (45))){
var inst_8701 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8775_8840 = state_8711__$1;
(statearr_8775_8840[(2)] = inst_8701);

(statearr_8775_8840[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (26))){
var inst_8643 = (state_8711[(29)]);
var inst_8697 = (state_8711[(2)]);
var inst_8698 = cljs.core.seq.call(null,inst_8643);
var state_8711__$1 = (function (){var statearr_8776 = state_8711;
(statearr_8776[(31)] = inst_8697);

return statearr_8776;
})();
if(inst_8698){
var statearr_8777_8841 = state_8711__$1;
(statearr_8777_8841[(1)] = (42));

} else {
var statearr_8778_8842 = state_8711__$1;
(statearr_8778_8842[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (16))){
var inst_8612 = (state_8711[(7)]);
var inst_8614 = cljs.core.chunked_seq_QMARK_.call(null,inst_8612);
var state_8711__$1 = state_8711;
if(inst_8614){
var statearr_8779_8843 = state_8711__$1;
(statearr_8779_8843[(1)] = (19));

} else {
var statearr_8780_8844 = state_8711__$1;
(statearr_8780_8844[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (38))){
var inst_8690 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8781_8845 = state_8711__$1;
(statearr_8781_8845[(2)] = inst_8690);

(statearr_8781_8845[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (30))){
var state_8711__$1 = state_8711;
var statearr_8782_8846 = state_8711__$1;
(statearr_8782_8846[(2)] = null);

(statearr_8782_8846[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (10))){
var inst_8595 = (state_8711[(13)]);
var inst_8593 = (state_8711[(14)]);
var inst_8601 = cljs.core._nth.call(null,inst_8593,inst_8595);
var inst_8602 = cljs.core.nth.call(null,inst_8601,(0),null);
var inst_8603 = cljs.core.nth.call(null,inst_8601,(1),null);
var state_8711__$1 = (function (){var statearr_8783 = state_8711;
(statearr_8783[(26)] = inst_8602);

return statearr_8783;
})();
if(cljs.core.truth_(inst_8603)){
var statearr_8784_8847 = state_8711__$1;
(statearr_8784_8847[(1)] = (13));

} else {
var statearr_8785_8848 = state_8711__$1;
(statearr_8785_8848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (18))){
var inst_8636 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8786_8849 = state_8711__$1;
(statearr_8786_8849[(2)] = inst_8636);

(statearr_8786_8849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (42))){
var state_8711__$1 = state_8711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8711__$1,(45),dchan);
} else {
if((state_val_8712 === (37))){
var inst_8670 = (state_8711[(25)]);
var inst_8679 = (state_8711[(23)]);
var inst_8583 = (state_8711[(10)]);
var inst_8679__$1 = cljs.core.first.call(null,inst_8670);
var inst_8680 = cljs.core.async.put_BANG_.call(null,inst_8679__$1,inst_8583,done);
var state_8711__$1 = (function (){var statearr_8787 = state_8711;
(statearr_8787[(23)] = inst_8679__$1);

return statearr_8787;
})();
if(cljs.core.truth_(inst_8680)){
var statearr_8788_8850 = state_8711__$1;
(statearr_8788_8850[(1)] = (39));

} else {
var statearr_8789_8851 = state_8711__$1;
(statearr_8789_8851[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8712 === (8))){
var inst_8595 = (state_8711[(13)]);
var inst_8594 = (state_8711[(17)]);
var inst_8597 = (inst_8595 < inst_8594);
var inst_8598 = inst_8597;
var state_8711__$1 = state_8711;
if(cljs.core.truth_(inst_8598)){
var statearr_8790_8852 = state_8711__$1;
(statearr_8790_8852[(1)] = (10));

} else {
var statearr_8791_8853 = state_8711__$1;
(statearr_8791_8853[(1)] = (11));

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
});})(c__7492__auto___8799,cs,m,dchan,dctr,done))
;
return ((function (switch__7380__auto__,c__7492__auto___8799,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7381__auto__ = null;
var cljs$core$async$mult_$_state_machine__7381__auto____0 = (function (){
var statearr_8795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8795[(0)] = cljs$core$async$mult_$_state_machine__7381__auto__);

(statearr_8795[(1)] = (1));

return statearr_8795;
});
var cljs$core$async$mult_$_state_machine__7381__auto____1 = (function (state_8711){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_8711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e8796){if((e8796 instanceof Object)){
var ex__7384__auto__ = e8796;
var statearr_8797_8854 = state_8711;
(statearr_8797_8854[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8855 = state_8711;
state_8711 = G__8855;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7381__auto__ = function(state_8711){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7381__auto____1.call(this,state_8711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7381__auto____0;
cljs$core$async$mult_$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7381__auto____1;
return cljs$core$async$mult_$_state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___8799,cs,m,dchan,dctr,done))
})();
var state__7494__auto__ = (function (){var statearr_8798 = f__7493__auto__.call(null);
(statearr_8798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___8799);

return statearr_8798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___8799,cs,m,dchan,dctr,done))
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
var args8856 = [];
var len__6046__auto___8859 = arguments.length;
var i__6047__auto___8860 = (0);
while(true){
if((i__6047__auto___8860 < len__6046__auto___8859)){
args8856.push((arguments[i__6047__auto___8860]));

var G__8861 = (i__6047__auto___8860 + (1));
i__6047__auto___8860 = G__8861;
continue;
} else {
}
break;
}

var G__8858 = args8856.length;
switch (G__8858) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8856.length)].join('')));

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
var len__6046__auto___8873 = arguments.length;
var i__6047__auto___8874 = (0);
while(true){
if((i__6047__auto___8874 < len__6046__auto___8873)){
args__6053__auto__.push((arguments[i__6047__auto___8874]));

var G__8875 = (i__6047__auto___8874 + (1));
i__6047__auto___8874 = G__8875;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((3) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6054__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8867){
var map__8868 = p__8867;
var map__8868__$1 = ((((!((map__8868 == null)))?((((map__8868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8868):map__8868);
var opts = map__8868__$1;
var statearr_8870_8876 = state;
(statearr_8870_8876[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__8868,map__8868__$1,opts){
return (function (val){
var statearr_8871_8877 = state;
(statearr_8871_8877[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__8868,map__8868__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_8872_8878 = state;
(statearr_8872_8878[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8863){
var G__8864 = cljs.core.first.call(null,seq8863);
var seq8863__$1 = cljs.core.next.call(null,seq8863);
var G__8865 = cljs.core.first.call(null,seq8863__$1);
var seq8863__$2 = cljs.core.next.call(null,seq8863__$1);
var G__8866 = cljs.core.first.call(null,seq8863__$2);
var seq8863__$3 = cljs.core.next.call(null,seq8863__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8864,G__8865,G__8866,seq8863__$3);
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
if(typeof cljs.core.async.t_cljs$core$async9042 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9042 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta9043){
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
this.meta9043 = meta9043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9044,meta9043__$1){
var self__ = this;
var _9044__$1 = this;
return (new cljs.core.async.t_cljs$core$async9042(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta9043__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9044){
var self__ = this;
var _9044__$1 = this;
return self__.meta9043;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9042.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9042.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9042.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async9042.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9042.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9042.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9042.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9042.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async9042.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta9043","meta9043",979320687,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9042";

cljs.core.async.t_cljs$core$async9042.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async9042");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async9042 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async9042(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9043){
return (new cljs.core.async.t_cljs$core$async9042(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9043));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async9042(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7492__auto___9205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___9205,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___9205,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9142){
var state_val_9143 = (state_9142[(1)]);
if((state_val_9143 === (7))){
var inst_9060 = (state_9142[(2)]);
var state_9142__$1 = state_9142;
var statearr_9144_9206 = state_9142__$1;
(statearr_9144_9206[(2)] = inst_9060);

(statearr_9144_9206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (20))){
var inst_9072 = (state_9142[(7)]);
var state_9142__$1 = state_9142;
var statearr_9145_9207 = state_9142__$1;
(statearr_9145_9207[(2)] = inst_9072);

(statearr_9145_9207[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (27))){
var state_9142__$1 = state_9142;
var statearr_9146_9208 = state_9142__$1;
(statearr_9146_9208[(2)] = null);

(statearr_9146_9208[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (1))){
var inst_9048 = (state_9142[(8)]);
var inst_9048__$1 = calc_state.call(null);
var inst_9050 = (inst_9048__$1 == null);
var inst_9051 = cljs.core.not.call(null,inst_9050);
var state_9142__$1 = (function (){var statearr_9147 = state_9142;
(statearr_9147[(8)] = inst_9048__$1);

return statearr_9147;
})();
if(inst_9051){
var statearr_9148_9209 = state_9142__$1;
(statearr_9148_9209[(1)] = (2));

} else {
var statearr_9149_9210 = state_9142__$1;
(statearr_9149_9210[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (24))){
var inst_9116 = (state_9142[(9)]);
var inst_9095 = (state_9142[(10)]);
var inst_9102 = (state_9142[(11)]);
var inst_9116__$1 = inst_9095.call(null,inst_9102);
var state_9142__$1 = (function (){var statearr_9150 = state_9142;
(statearr_9150[(9)] = inst_9116__$1);

return statearr_9150;
})();
if(cljs.core.truth_(inst_9116__$1)){
var statearr_9151_9211 = state_9142__$1;
(statearr_9151_9211[(1)] = (29));

} else {
var statearr_9152_9212 = state_9142__$1;
(statearr_9152_9212[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (4))){
var inst_9063 = (state_9142[(2)]);
var state_9142__$1 = state_9142;
if(cljs.core.truth_(inst_9063)){
var statearr_9153_9213 = state_9142__$1;
(statearr_9153_9213[(1)] = (8));

} else {
var statearr_9154_9214 = state_9142__$1;
(statearr_9154_9214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (15))){
var inst_9089 = (state_9142[(2)]);
var state_9142__$1 = state_9142;
if(cljs.core.truth_(inst_9089)){
var statearr_9155_9215 = state_9142__$1;
(statearr_9155_9215[(1)] = (19));

} else {
var statearr_9156_9216 = state_9142__$1;
(statearr_9156_9216[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (21))){
var inst_9094 = (state_9142[(12)]);
var inst_9094__$1 = (state_9142[(2)]);
var inst_9095 = cljs.core.get.call(null,inst_9094__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9096 = cljs.core.get.call(null,inst_9094__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9097 = cljs.core.get.call(null,inst_9094__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9142__$1 = (function (){var statearr_9157 = state_9142;
(statearr_9157[(12)] = inst_9094__$1);

(statearr_9157[(13)] = inst_9096);

(statearr_9157[(10)] = inst_9095);

return statearr_9157;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9142__$1,(22),inst_9097);
} else {
if((state_val_9143 === (31))){
var inst_9124 = (state_9142[(2)]);
var state_9142__$1 = state_9142;
if(cljs.core.truth_(inst_9124)){
var statearr_9158_9217 = state_9142__$1;
(statearr_9158_9217[(1)] = (32));

} else {
var statearr_9159_9218 = state_9142__$1;
(statearr_9159_9218[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (32))){
var inst_9101 = (state_9142[(14)]);
var state_9142__$1 = state_9142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9142__$1,(35),out,inst_9101);
} else {
if((state_val_9143 === (33))){
var inst_9094 = (state_9142[(12)]);
var inst_9072 = inst_9094;
var state_9142__$1 = (function (){var statearr_9160 = state_9142;
(statearr_9160[(7)] = inst_9072);

return statearr_9160;
})();
var statearr_9161_9219 = state_9142__$1;
(statearr_9161_9219[(2)] = null);

(statearr_9161_9219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (13))){
var inst_9072 = (state_9142[(7)]);
var inst_9079 = inst_9072.cljs$lang$protocol_mask$partition0$;
var inst_9080 = (inst_9079 & (64));
var inst_9081 = inst_9072.cljs$core$ISeq$;
var inst_9082 = (inst_9080) || (inst_9081);
var state_9142__$1 = state_9142;
if(cljs.core.truth_(inst_9082)){
var statearr_9162_9220 = state_9142__$1;
(statearr_9162_9220[(1)] = (16));

} else {
var statearr_9163_9221 = state_9142__$1;
(statearr_9163_9221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (22))){
var inst_9101 = (state_9142[(14)]);
var inst_9102 = (state_9142[(11)]);
var inst_9100 = (state_9142[(2)]);
var inst_9101__$1 = cljs.core.nth.call(null,inst_9100,(0),null);
var inst_9102__$1 = cljs.core.nth.call(null,inst_9100,(1),null);
var inst_9103 = (inst_9101__$1 == null);
var inst_9104 = cljs.core._EQ_.call(null,inst_9102__$1,change);
var inst_9105 = (inst_9103) || (inst_9104);
var state_9142__$1 = (function (){var statearr_9164 = state_9142;
(statearr_9164[(14)] = inst_9101__$1);

(statearr_9164[(11)] = inst_9102__$1);

return statearr_9164;
})();
if(cljs.core.truth_(inst_9105)){
var statearr_9165_9222 = state_9142__$1;
(statearr_9165_9222[(1)] = (23));

} else {
var statearr_9166_9223 = state_9142__$1;
(statearr_9166_9223[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (36))){
var inst_9094 = (state_9142[(12)]);
var inst_9072 = inst_9094;
var state_9142__$1 = (function (){var statearr_9167 = state_9142;
(statearr_9167[(7)] = inst_9072);

return statearr_9167;
})();
var statearr_9168_9224 = state_9142__$1;
(statearr_9168_9224[(2)] = null);

(statearr_9168_9224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (29))){
var inst_9116 = (state_9142[(9)]);
var state_9142__$1 = state_9142;
var statearr_9169_9225 = state_9142__$1;
(statearr_9169_9225[(2)] = inst_9116);

(statearr_9169_9225[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (6))){
var state_9142__$1 = state_9142;
var statearr_9170_9226 = state_9142__$1;
(statearr_9170_9226[(2)] = false);

(statearr_9170_9226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (28))){
var inst_9112 = (state_9142[(2)]);
var inst_9113 = calc_state.call(null);
var inst_9072 = inst_9113;
var state_9142__$1 = (function (){var statearr_9171 = state_9142;
(statearr_9171[(15)] = inst_9112);

(statearr_9171[(7)] = inst_9072);

return statearr_9171;
})();
var statearr_9172_9227 = state_9142__$1;
(statearr_9172_9227[(2)] = null);

(statearr_9172_9227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (25))){
var inst_9138 = (state_9142[(2)]);
var state_9142__$1 = state_9142;
var statearr_9173_9228 = state_9142__$1;
(statearr_9173_9228[(2)] = inst_9138);

(statearr_9173_9228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (34))){
var inst_9136 = (state_9142[(2)]);
var state_9142__$1 = state_9142;
var statearr_9174_9229 = state_9142__$1;
(statearr_9174_9229[(2)] = inst_9136);

(statearr_9174_9229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (17))){
var state_9142__$1 = state_9142;
var statearr_9175_9230 = state_9142__$1;
(statearr_9175_9230[(2)] = false);

(statearr_9175_9230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (3))){
var state_9142__$1 = state_9142;
var statearr_9176_9231 = state_9142__$1;
(statearr_9176_9231[(2)] = false);

(statearr_9176_9231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (12))){
var inst_9140 = (state_9142[(2)]);
var state_9142__$1 = state_9142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9142__$1,inst_9140);
} else {
if((state_val_9143 === (2))){
var inst_9048 = (state_9142[(8)]);
var inst_9053 = inst_9048.cljs$lang$protocol_mask$partition0$;
var inst_9054 = (inst_9053 & (64));
var inst_9055 = inst_9048.cljs$core$ISeq$;
var inst_9056 = (inst_9054) || (inst_9055);
var state_9142__$1 = state_9142;
if(cljs.core.truth_(inst_9056)){
var statearr_9177_9232 = state_9142__$1;
(statearr_9177_9232[(1)] = (5));

} else {
var statearr_9178_9233 = state_9142__$1;
(statearr_9178_9233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (23))){
var inst_9101 = (state_9142[(14)]);
var inst_9107 = (inst_9101 == null);
var state_9142__$1 = state_9142;
if(cljs.core.truth_(inst_9107)){
var statearr_9179_9234 = state_9142__$1;
(statearr_9179_9234[(1)] = (26));

} else {
var statearr_9180_9235 = state_9142__$1;
(statearr_9180_9235[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (35))){
var inst_9127 = (state_9142[(2)]);
var state_9142__$1 = state_9142;
if(cljs.core.truth_(inst_9127)){
var statearr_9181_9236 = state_9142__$1;
(statearr_9181_9236[(1)] = (36));

} else {
var statearr_9182_9237 = state_9142__$1;
(statearr_9182_9237[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (19))){
var inst_9072 = (state_9142[(7)]);
var inst_9091 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9072);
var state_9142__$1 = state_9142;
var statearr_9183_9238 = state_9142__$1;
(statearr_9183_9238[(2)] = inst_9091);

(statearr_9183_9238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (11))){
var inst_9072 = (state_9142[(7)]);
var inst_9076 = (inst_9072 == null);
var inst_9077 = cljs.core.not.call(null,inst_9076);
var state_9142__$1 = state_9142;
if(inst_9077){
var statearr_9184_9239 = state_9142__$1;
(statearr_9184_9239[(1)] = (13));

} else {
var statearr_9185_9240 = state_9142__$1;
(statearr_9185_9240[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (9))){
var inst_9048 = (state_9142[(8)]);
var state_9142__$1 = state_9142;
var statearr_9186_9241 = state_9142__$1;
(statearr_9186_9241[(2)] = inst_9048);

(statearr_9186_9241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (5))){
var state_9142__$1 = state_9142;
var statearr_9187_9242 = state_9142__$1;
(statearr_9187_9242[(2)] = true);

(statearr_9187_9242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (14))){
var state_9142__$1 = state_9142;
var statearr_9188_9243 = state_9142__$1;
(statearr_9188_9243[(2)] = false);

(statearr_9188_9243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (26))){
var inst_9102 = (state_9142[(11)]);
var inst_9109 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9102);
var state_9142__$1 = state_9142;
var statearr_9189_9244 = state_9142__$1;
(statearr_9189_9244[(2)] = inst_9109);

(statearr_9189_9244[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (16))){
var state_9142__$1 = state_9142;
var statearr_9190_9245 = state_9142__$1;
(statearr_9190_9245[(2)] = true);

(statearr_9190_9245[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (38))){
var inst_9132 = (state_9142[(2)]);
var state_9142__$1 = state_9142;
var statearr_9191_9246 = state_9142__$1;
(statearr_9191_9246[(2)] = inst_9132);

(statearr_9191_9246[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (30))){
var inst_9096 = (state_9142[(13)]);
var inst_9095 = (state_9142[(10)]);
var inst_9102 = (state_9142[(11)]);
var inst_9119 = cljs.core.empty_QMARK_.call(null,inst_9095);
var inst_9120 = inst_9096.call(null,inst_9102);
var inst_9121 = cljs.core.not.call(null,inst_9120);
var inst_9122 = (inst_9119) && (inst_9121);
var state_9142__$1 = state_9142;
var statearr_9192_9247 = state_9142__$1;
(statearr_9192_9247[(2)] = inst_9122);

(statearr_9192_9247[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (10))){
var inst_9048 = (state_9142[(8)]);
var inst_9068 = (state_9142[(2)]);
var inst_9069 = cljs.core.get.call(null,inst_9068,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9070 = cljs.core.get.call(null,inst_9068,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9071 = cljs.core.get.call(null,inst_9068,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_9072 = inst_9048;
var state_9142__$1 = (function (){var statearr_9193 = state_9142;
(statearr_9193[(16)] = inst_9070);

(statearr_9193[(17)] = inst_9071);

(statearr_9193[(18)] = inst_9069);

(statearr_9193[(7)] = inst_9072);

return statearr_9193;
})();
var statearr_9194_9248 = state_9142__$1;
(statearr_9194_9248[(2)] = null);

(statearr_9194_9248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (18))){
var inst_9086 = (state_9142[(2)]);
var state_9142__$1 = state_9142;
var statearr_9195_9249 = state_9142__$1;
(statearr_9195_9249[(2)] = inst_9086);

(statearr_9195_9249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (37))){
var state_9142__$1 = state_9142;
var statearr_9196_9250 = state_9142__$1;
(statearr_9196_9250[(2)] = null);

(statearr_9196_9250[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9143 === (8))){
var inst_9048 = (state_9142[(8)]);
var inst_9065 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9048);
var state_9142__$1 = state_9142;
var statearr_9197_9251 = state_9142__$1;
(statearr_9197_9251[(2)] = inst_9065);

(statearr_9197_9251[(1)] = (10));


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
});})(c__7492__auto___9205,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7380__auto__,c__7492__auto___9205,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7381__auto__ = null;
var cljs$core$async$mix_$_state_machine__7381__auto____0 = (function (){
var statearr_9201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9201[(0)] = cljs$core$async$mix_$_state_machine__7381__auto__);

(statearr_9201[(1)] = (1));

return statearr_9201;
});
var cljs$core$async$mix_$_state_machine__7381__auto____1 = (function (state_9142){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_9142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e9202){if((e9202 instanceof Object)){
var ex__7384__auto__ = e9202;
var statearr_9203_9252 = state_9142;
(statearr_9203_9252[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9253 = state_9142;
state_9142 = G__9253;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7381__auto__ = function(state_9142){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7381__auto____1.call(this,state_9142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7381__auto____0;
cljs$core$async$mix_$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7381__auto____1;
return cljs$core$async$mix_$_state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___9205,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7494__auto__ = (function (){var statearr_9204 = f__7493__auto__.call(null);
(statearr_9204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___9205);

return statearr_9204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___9205,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args9254 = [];
var len__6046__auto___9257 = arguments.length;
var i__6047__auto___9258 = (0);
while(true){
if((i__6047__auto___9258 < len__6046__auto___9257)){
args9254.push((arguments[i__6047__auto___9258]));

var G__9259 = (i__6047__auto___9258 + (1));
i__6047__auto___9258 = G__9259;
continue;
} else {
}
break;
}

var G__9256 = args9254.length;
switch (G__9256) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9254.length)].join('')));

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
var args9262 = [];
var len__6046__auto___9387 = arguments.length;
var i__6047__auto___9388 = (0);
while(true){
if((i__6047__auto___9388 < len__6046__auto___9387)){
args9262.push((arguments[i__6047__auto___9388]));

var G__9389 = (i__6047__auto___9388 + (1));
i__6047__auto___9388 = G__9389;
continue;
} else {
}
break;
}

var G__9264 = args9262.length;
switch (G__9264) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9262.length)].join('')));

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
return (function (p1__9261_SHARP_){
if(cljs.core.truth_(p1__9261_SHARP_.call(null,topic))){
return p1__9261_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__9261_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4988__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async9265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9265 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9266){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9266 = meta9266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9267,meta9266__$1){
var self__ = this;
var _9267__$1 = this;
return (new cljs.core.async.t_cljs$core$async9265(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9266__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9267){
var self__ = this;
var _9267__$1 = this;
return self__.meta9266;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9265.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9265.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9265.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async9265.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9265.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async9265.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9265.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9265.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta9266","meta9266",1771959295,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9265";

cljs.core.async.t_cljs$core$async9265.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async9265");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async9265 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9265(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9266){
return (new cljs.core.async.t_cljs$core$async9265(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9266));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9265(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7492__auto___9391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___9391,mults,ensure_mult,p){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___9391,mults,ensure_mult,p){
return (function (state_9339){
var state_val_9340 = (state_9339[(1)]);
if((state_val_9340 === (7))){
var inst_9335 = (state_9339[(2)]);
var state_9339__$1 = state_9339;
var statearr_9341_9392 = state_9339__$1;
(statearr_9341_9392[(2)] = inst_9335);

(statearr_9341_9392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (20))){
var state_9339__$1 = state_9339;
var statearr_9342_9393 = state_9339__$1;
(statearr_9342_9393[(2)] = null);

(statearr_9342_9393[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (1))){
var state_9339__$1 = state_9339;
var statearr_9343_9394 = state_9339__$1;
(statearr_9343_9394[(2)] = null);

(statearr_9343_9394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (24))){
var inst_9318 = (state_9339[(7)]);
var inst_9327 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9318);
var state_9339__$1 = state_9339;
var statearr_9344_9395 = state_9339__$1;
(statearr_9344_9395[(2)] = inst_9327);

(statearr_9344_9395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (4))){
var inst_9270 = (state_9339[(8)]);
var inst_9270__$1 = (state_9339[(2)]);
var inst_9271 = (inst_9270__$1 == null);
var state_9339__$1 = (function (){var statearr_9345 = state_9339;
(statearr_9345[(8)] = inst_9270__$1);

return statearr_9345;
})();
if(cljs.core.truth_(inst_9271)){
var statearr_9346_9396 = state_9339__$1;
(statearr_9346_9396[(1)] = (5));

} else {
var statearr_9347_9397 = state_9339__$1;
(statearr_9347_9397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (15))){
var inst_9312 = (state_9339[(2)]);
var state_9339__$1 = state_9339;
var statearr_9348_9398 = state_9339__$1;
(statearr_9348_9398[(2)] = inst_9312);

(statearr_9348_9398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (21))){
var inst_9332 = (state_9339[(2)]);
var state_9339__$1 = (function (){var statearr_9349 = state_9339;
(statearr_9349[(9)] = inst_9332);

return statearr_9349;
})();
var statearr_9350_9399 = state_9339__$1;
(statearr_9350_9399[(2)] = null);

(statearr_9350_9399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (13))){
var inst_9294 = (state_9339[(10)]);
var inst_9296 = cljs.core.chunked_seq_QMARK_.call(null,inst_9294);
var state_9339__$1 = state_9339;
if(inst_9296){
var statearr_9351_9400 = state_9339__$1;
(statearr_9351_9400[(1)] = (16));

} else {
var statearr_9352_9401 = state_9339__$1;
(statearr_9352_9401[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (22))){
var inst_9324 = (state_9339[(2)]);
var state_9339__$1 = state_9339;
if(cljs.core.truth_(inst_9324)){
var statearr_9353_9402 = state_9339__$1;
(statearr_9353_9402[(1)] = (23));

} else {
var statearr_9354_9403 = state_9339__$1;
(statearr_9354_9403[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (6))){
var inst_9320 = (state_9339[(11)]);
var inst_9318 = (state_9339[(7)]);
var inst_9270 = (state_9339[(8)]);
var inst_9318__$1 = topic_fn.call(null,inst_9270);
var inst_9319 = cljs.core.deref.call(null,mults);
var inst_9320__$1 = cljs.core.get.call(null,inst_9319,inst_9318__$1);
var state_9339__$1 = (function (){var statearr_9355 = state_9339;
(statearr_9355[(11)] = inst_9320__$1);

(statearr_9355[(7)] = inst_9318__$1);

return statearr_9355;
})();
if(cljs.core.truth_(inst_9320__$1)){
var statearr_9356_9404 = state_9339__$1;
(statearr_9356_9404[(1)] = (19));

} else {
var statearr_9357_9405 = state_9339__$1;
(statearr_9357_9405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (25))){
var inst_9329 = (state_9339[(2)]);
var state_9339__$1 = state_9339;
var statearr_9358_9406 = state_9339__$1;
(statearr_9358_9406[(2)] = inst_9329);

(statearr_9358_9406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (17))){
var inst_9294 = (state_9339[(10)]);
var inst_9303 = cljs.core.first.call(null,inst_9294);
var inst_9304 = cljs.core.async.muxch_STAR_.call(null,inst_9303);
var inst_9305 = cljs.core.async.close_BANG_.call(null,inst_9304);
var inst_9306 = cljs.core.next.call(null,inst_9294);
var inst_9280 = inst_9306;
var inst_9281 = null;
var inst_9282 = (0);
var inst_9283 = (0);
var state_9339__$1 = (function (){var statearr_9359 = state_9339;
(statearr_9359[(12)] = inst_9283);

(statearr_9359[(13)] = inst_9305);

(statearr_9359[(14)] = inst_9281);

(statearr_9359[(15)] = inst_9280);

(statearr_9359[(16)] = inst_9282);

return statearr_9359;
})();
var statearr_9360_9407 = state_9339__$1;
(statearr_9360_9407[(2)] = null);

(statearr_9360_9407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (3))){
var inst_9337 = (state_9339[(2)]);
var state_9339__$1 = state_9339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9339__$1,inst_9337);
} else {
if((state_val_9340 === (12))){
var inst_9314 = (state_9339[(2)]);
var state_9339__$1 = state_9339;
var statearr_9361_9408 = state_9339__$1;
(statearr_9361_9408[(2)] = inst_9314);

(statearr_9361_9408[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (2))){
var state_9339__$1 = state_9339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9339__$1,(4),ch);
} else {
if((state_val_9340 === (23))){
var state_9339__$1 = state_9339;
var statearr_9362_9409 = state_9339__$1;
(statearr_9362_9409[(2)] = null);

(statearr_9362_9409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (19))){
var inst_9320 = (state_9339[(11)]);
var inst_9270 = (state_9339[(8)]);
var inst_9322 = cljs.core.async.muxch_STAR_.call(null,inst_9320);
var state_9339__$1 = state_9339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9339__$1,(22),inst_9322,inst_9270);
} else {
if((state_val_9340 === (11))){
var inst_9280 = (state_9339[(15)]);
var inst_9294 = (state_9339[(10)]);
var inst_9294__$1 = cljs.core.seq.call(null,inst_9280);
var state_9339__$1 = (function (){var statearr_9363 = state_9339;
(statearr_9363[(10)] = inst_9294__$1);

return statearr_9363;
})();
if(inst_9294__$1){
var statearr_9364_9410 = state_9339__$1;
(statearr_9364_9410[(1)] = (13));

} else {
var statearr_9365_9411 = state_9339__$1;
(statearr_9365_9411[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (9))){
var inst_9316 = (state_9339[(2)]);
var state_9339__$1 = state_9339;
var statearr_9366_9412 = state_9339__$1;
(statearr_9366_9412[(2)] = inst_9316);

(statearr_9366_9412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (5))){
var inst_9277 = cljs.core.deref.call(null,mults);
var inst_9278 = cljs.core.vals.call(null,inst_9277);
var inst_9279 = cljs.core.seq.call(null,inst_9278);
var inst_9280 = inst_9279;
var inst_9281 = null;
var inst_9282 = (0);
var inst_9283 = (0);
var state_9339__$1 = (function (){var statearr_9367 = state_9339;
(statearr_9367[(12)] = inst_9283);

(statearr_9367[(14)] = inst_9281);

(statearr_9367[(15)] = inst_9280);

(statearr_9367[(16)] = inst_9282);

return statearr_9367;
})();
var statearr_9368_9413 = state_9339__$1;
(statearr_9368_9413[(2)] = null);

(statearr_9368_9413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (14))){
var state_9339__$1 = state_9339;
var statearr_9372_9414 = state_9339__$1;
(statearr_9372_9414[(2)] = null);

(statearr_9372_9414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (16))){
var inst_9294 = (state_9339[(10)]);
var inst_9298 = cljs.core.chunk_first.call(null,inst_9294);
var inst_9299 = cljs.core.chunk_rest.call(null,inst_9294);
var inst_9300 = cljs.core.count.call(null,inst_9298);
var inst_9280 = inst_9299;
var inst_9281 = inst_9298;
var inst_9282 = inst_9300;
var inst_9283 = (0);
var state_9339__$1 = (function (){var statearr_9373 = state_9339;
(statearr_9373[(12)] = inst_9283);

(statearr_9373[(14)] = inst_9281);

(statearr_9373[(15)] = inst_9280);

(statearr_9373[(16)] = inst_9282);

return statearr_9373;
})();
var statearr_9374_9415 = state_9339__$1;
(statearr_9374_9415[(2)] = null);

(statearr_9374_9415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (10))){
var inst_9283 = (state_9339[(12)]);
var inst_9281 = (state_9339[(14)]);
var inst_9280 = (state_9339[(15)]);
var inst_9282 = (state_9339[(16)]);
var inst_9288 = cljs.core._nth.call(null,inst_9281,inst_9283);
var inst_9289 = cljs.core.async.muxch_STAR_.call(null,inst_9288);
var inst_9290 = cljs.core.async.close_BANG_.call(null,inst_9289);
var inst_9291 = (inst_9283 + (1));
var tmp9369 = inst_9281;
var tmp9370 = inst_9280;
var tmp9371 = inst_9282;
var inst_9280__$1 = tmp9370;
var inst_9281__$1 = tmp9369;
var inst_9282__$1 = tmp9371;
var inst_9283__$1 = inst_9291;
var state_9339__$1 = (function (){var statearr_9375 = state_9339;
(statearr_9375[(12)] = inst_9283__$1);

(statearr_9375[(14)] = inst_9281__$1);

(statearr_9375[(15)] = inst_9280__$1);

(statearr_9375[(16)] = inst_9282__$1);

(statearr_9375[(17)] = inst_9290);

return statearr_9375;
})();
var statearr_9376_9416 = state_9339__$1;
(statearr_9376_9416[(2)] = null);

(statearr_9376_9416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (18))){
var inst_9309 = (state_9339[(2)]);
var state_9339__$1 = state_9339;
var statearr_9377_9417 = state_9339__$1;
(statearr_9377_9417[(2)] = inst_9309);

(statearr_9377_9417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9340 === (8))){
var inst_9283 = (state_9339[(12)]);
var inst_9282 = (state_9339[(16)]);
var inst_9285 = (inst_9283 < inst_9282);
var inst_9286 = inst_9285;
var state_9339__$1 = state_9339;
if(cljs.core.truth_(inst_9286)){
var statearr_9378_9418 = state_9339__$1;
(statearr_9378_9418[(1)] = (10));

} else {
var statearr_9379_9419 = state_9339__$1;
(statearr_9379_9419[(1)] = (11));

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
});})(c__7492__auto___9391,mults,ensure_mult,p))
;
return ((function (switch__7380__auto__,c__7492__auto___9391,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7381__auto__ = null;
var cljs$core$async$state_machine__7381__auto____0 = (function (){
var statearr_9383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9383[(0)] = cljs$core$async$state_machine__7381__auto__);

(statearr_9383[(1)] = (1));

return statearr_9383;
});
var cljs$core$async$state_machine__7381__auto____1 = (function (state_9339){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_9339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e9384){if((e9384 instanceof Object)){
var ex__7384__auto__ = e9384;
var statearr_9385_9420 = state_9339;
(statearr_9385_9420[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9421 = state_9339;
state_9339 = G__9421;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$state_machine__7381__auto__ = function(state_9339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7381__auto____1.call(this,state_9339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7381__auto____0;
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7381__auto____1;
return cljs$core$async$state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___9391,mults,ensure_mult,p))
})();
var state__7494__auto__ = (function (){var statearr_9386 = f__7493__auto__.call(null);
(statearr_9386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___9391);

return statearr_9386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___9391,mults,ensure_mult,p))
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
var args9422 = [];
var len__6046__auto___9425 = arguments.length;
var i__6047__auto___9426 = (0);
while(true){
if((i__6047__auto___9426 < len__6046__auto___9425)){
args9422.push((arguments[i__6047__auto___9426]));

var G__9427 = (i__6047__auto___9426 + (1));
i__6047__auto___9426 = G__9427;
continue;
} else {
}
break;
}

var G__9424 = args9422.length;
switch (G__9424) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9422.length)].join('')));

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
var args9429 = [];
var len__6046__auto___9432 = arguments.length;
var i__6047__auto___9433 = (0);
while(true){
if((i__6047__auto___9433 < len__6046__auto___9432)){
args9429.push((arguments[i__6047__auto___9433]));

var G__9434 = (i__6047__auto___9433 + (1));
i__6047__auto___9433 = G__9434;
continue;
} else {
}
break;
}

var G__9431 = args9429.length;
switch (G__9431) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9429.length)].join('')));

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
var args9436 = [];
var len__6046__auto___9507 = arguments.length;
var i__6047__auto___9508 = (0);
while(true){
if((i__6047__auto___9508 < len__6046__auto___9507)){
args9436.push((arguments[i__6047__auto___9508]));

var G__9509 = (i__6047__auto___9508 + (1));
i__6047__auto___9508 = G__9509;
continue;
} else {
}
break;
}

var G__9438 = args9436.length;
switch (G__9438) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9436.length)].join('')));

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
var c__7492__auto___9511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___9511,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___9511,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9477){
var state_val_9478 = (state_9477[(1)]);
if((state_val_9478 === (7))){
var state_9477__$1 = state_9477;
var statearr_9479_9512 = state_9477__$1;
(statearr_9479_9512[(2)] = null);

(statearr_9479_9512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9478 === (1))){
var state_9477__$1 = state_9477;
var statearr_9480_9513 = state_9477__$1;
(statearr_9480_9513[(2)] = null);

(statearr_9480_9513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9478 === (4))){
var inst_9441 = (state_9477[(7)]);
var inst_9443 = (inst_9441 < cnt);
var state_9477__$1 = state_9477;
if(cljs.core.truth_(inst_9443)){
var statearr_9481_9514 = state_9477__$1;
(statearr_9481_9514[(1)] = (6));

} else {
var statearr_9482_9515 = state_9477__$1;
(statearr_9482_9515[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9478 === (15))){
var inst_9473 = (state_9477[(2)]);
var state_9477__$1 = state_9477;
var statearr_9483_9516 = state_9477__$1;
(statearr_9483_9516[(2)] = inst_9473);

(statearr_9483_9516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9478 === (13))){
var inst_9466 = cljs.core.async.close_BANG_.call(null,out);
var state_9477__$1 = state_9477;
var statearr_9484_9517 = state_9477__$1;
(statearr_9484_9517[(2)] = inst_9466);

(statearr_9484_9517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9478 === (6))){
var state_9477__$1 = state_9477;
var statearr_9485_9518 = state_9477__$1;
(statearr_9485_9518[(2)] = null);

(statearr_9485_9518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9478 === (3))){
var inst_9475 = (state_9477[(2)]);
var state_9477__$1 = state_9477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9477__$1,inst_9475);
} else {
if((state_val_9478 === (12))){
var inst_9463 = (state_9477[(8)]);
var inst_9463__$1 = (state_9477[(2)]);
var inst_9464 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9463__$1);
var state_9477__$1 = (function (){var statearr_9486 = state_9477;
(statearr_9486[(8)] = inst_9463__$1);

return statearr_9486;
})();
if(cljs.core.truth_(inst_9464)){
var statearr_9487_9519 = state_9477__$1;
(statearr_9487_9519[(1)] = (13));

} else {
var statearr_9488_9520 = state_9477__$1;
(statearr_9488_9520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9478 === (2))){
var inst_9440 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9441 = (0);
var state_9477__$1 = (function (){var statearr_9489 = state_9477;
(statearr_9489[(9)] = inst_9440);

(statearr_9489[(7)] = inst_9441);

return statearr_9489;
})();
var statearr_9490_9521 = state_9477__$1;
(statearr_9490_9521[(2)] = null);

(statearr_9490_9521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9478 === (11))){
var inst_9441 = (state_9477[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9477,(10),Object,null,(9));
var inst_9450 = chs__$1.call(null,inst_9441);
var inst_9451 = done.call(null,inst_9441);
var inst_9452 = cljs.core.async.take_BANG_.call(null,inst_9450,inst_9451);
var state_9477__$1 = state_9477;
var statearr_9491_9522 = state_9477__$1;
(statearr_9491_9522[(2)] = inst_9452);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9477__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9478 === (9))){
var inst_9441 = (state_9477[(7)]);
var inst_9454 = (state_9477[(2)]);
var inst_9455 = (inst_9441 + (1));
var inst_9441__$1 = inst_9455;
var state_9477__$1 = (function (){var statearr_9492 = state_9477;
(statearr_9492[(7)] = inst_9441__$1);

(statearr_9492[(10)] = inst_9454);

return statearr_9492;
})();
var statearr_9493_9523 = state_9477__$1;
(statearr_9493_9523[(2)] = null);

(statearr_9493_9523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9478 === (5))){
var inst_9461 = (state_9477[(2)]);
var state_9477__$1 = (function (){var statearr_9494 = state_9477;
(statearr_9494[(11)] = inst_9461);

return statearr_9494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9477__$1,(12),dchan);
} else {
if((state_val_9478 === (14))){
var inst_9463 = (state_9477[(8)]);
var inst_9468 = cljs.core.apply.call(null,f,inst_9463);
var state_9477__$1 = state_9477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9477__$1,(16),out,inst_9468);
} else {
if((state_val_9478 === (16))){
var inst_9470 = (state_9477[(2)]);
var state_9477__$1 = (function (){var statearr_9495 = state_9477;
(statearr_9495[(12)] = inst_9470);

return statearr_9495;
})();
var statearr_9496_9524 = state_9477__$1;
(statearr_9496_9524[(2)] = null);

(statearr_9496_9524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9478 === (10))){
var inst_9445 = (state_9477[(2)]);
var inst_9446 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9477__$1 = (function (){var statearr_9497 = state_9477;
(statearr_9497[(13)] = inst_9445);

return statearr_9497;
})();
var statearr_9498_9525 = state_9477__$1;
(statearr_9498_9525[(2)] = inst_9446);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9477__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9478 === (8))){
var inst_9459 = (state_9477[(2)]);
var state_9477__$1 = state_9477;
var statearr_9499_9526 = state_9477__$1;
(statearr_9499_9526[(2)] = inst_9459);

(statearr_9499_9526[(1)] = (5));


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
});})(c__7492__auto___9511,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7380__auto__,c__7492__auto___9511,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7381__auto__ = null;
var cljs$core$async$state_machine__7381__auto____0 = (function (){
var statearr_9503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9503[(0)] = cljs$core$async$state_machine__7381__auto__);

(statearr_9503[(1)] = (1));

return statearr_9503;
});
var cljs$core$async$state_machine__7381__auto____1 = (function (state_9477){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_9477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e9504){if((e9504 instanceof Object)){
var ex__7384__auto__ = e9504;
var statearr_9505_9527 = state_9477;
(statearr_9505_9527[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9528 = state_9477;
state_9477 = G__9528;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$state_machine__7381__auto__ = function(state_9477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7381__auto____1.call(this,state_9477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7381__auto____0;
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7381__auto____1;
return cljs$core$async$state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___9511,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7494__auto__ = (function (){var statearr_9506 = f__7493__auto__.call(null);
(statearr_9506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___9511);

return statearr_9506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___9511,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args9530 = [];
var len__6046__auto___9586 = arguments.length;
var i__6047__auto___9587 = (0);
while(true){
if((i__6047__auto___9587 < len__6046__auto___9586)){
args9530.push((arguments[i__6047__auto___9587]));

var G__9588 = (i__6047__auto___9587 + (1));
i__6047__auto___9587 = G__9588;
continue;
} else {
}
break;
}

var G__9532 = args9530.length;
switch (G__9532) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9530.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7492__auto___9590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___9590,out){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___9590,out){
return (function (state_9562){
var state_val_9563 = (state_9562[(1)]);
if((state_val_9563 === (7))){
var inst_9542 = (state_9562[(7)]);
var inst_9541 = (state_9562[(8)]);
var inst_9541__$1 = (state_9562[(2)]);
var inst_9542__$1 = cljs.core.nth.call(null,inst_9541__$1,(0),null);
var inst_9543 = cljs.core.nth.call(null,inst_9541__$1,(1),null);
var inst_9544 = (inst_9542__$1 == null);
var state_9562__$1 = (function (){var statearr_9564 = state_9562;
(statearr_9564[(7)] = inst_9542__$1);

(statearr_9564[(8)] = inst_9541__$1);

(statearr_9564[(9)] = inst_9543);

return statearr_9564;
})();
if(cljs.core.truth_(inst_9544)){
var statearr_9565_9591 = state_9562__$1;
(statearr_9565_9591[(1)] = (8));

} else {
var statearr_9566_9592 = state_9562__$1;
(statearr_9566_9592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (1))){
var inst_9533 = cljs.core.vec.call(null,chs);
var inst_9534 = inst_9533;
var state_9562__$1 = (function (){var statearr_9567 = state_9562;
(statearr_9567[(10)] = inst_9534);

return statearr_9567;
})();
var statearr_9568_9593 = state_9562__$1;
(statearr_9568_9593[(2)] = null);

(statearr_9568_9593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (4))){
var inst_9534 = (state_9562[(10)]);
var state_9562__$1 = state_9562;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9562__$1,(7),inst_9534);
} else {
if((state_val_9563 === (6))){
var inst_9558 = (state_9562[(2)]);
var state_9562__$1 = state_9562;
var statearr_9569_9594 = state_9562__$1;
(statearr_9569_9594[(2)] = inst_9558);

(statearr_9569_9594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (3))){
var inst_9560 = (state_9562[(2)]);
var state_9562__$1 = state_9562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9562__$1,inst_9560);
} else {
if((state_val_9563 === (2))){
var inst_9534 = (state_9562[(10)]);
var inst_9536 = cljs.core.count.call(null,inst_9534);
var inst_9537 = (inst_9536 > (0));
var state_9562__$1 = state_9562;
if(cljs.core.truth_(inst_9537)){
var statearr_9571_9595 = state_9562__$1;
(statearr_9571_9595[(1)] = (4));

} else {
var statearr_9572_9596 = state_9562__$1;
(statearr_9572_9596[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (11))){
var inst_9534 = (state_9562[(10)]);
var inst_9551 = (state_9562[(2)]);
var tmp9570 = inst_9534;
var inst_9534__$1 = tmp9570;
var state_9562__$1 = (function (){var statearr_9573 = state_9562;
(statearr_9573[(10)] = inst_9534__$1);

(statearr_9573[(11)] = inst_9551);

return statearr_9573;
})();
var statearr_9574_9597 = state_9562__$1;
(statearr_9574_9597[(2)] = null);

(statearr_9574_9597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (9))){
var inst_9542 = (state_9562[(7)]);
var state_9562__$1 = state_9562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9562__$1,(11),out,inst_9542);
} else {
if((state_val_9563 === (5))){
var inst_9556 = cljs.core.async.close_BANG_.call(null,out);
var state_9562__$1 = state_9562;
var statearr_9575_9598 = state_9562__$1;
(statearr_9575_9598[(2)] = inst_9556);

(statearr_9575_9598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (10))){
var inst_9554 = (state_9562[(2)]);
var state_9562__$1 = state_9562;
var statearr_9576_9599 = state_9562__$1;
(statearr_9576_9599[(2)] = inst_9554);

(statearr_9576_9599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (8))){
var inst_9534 = (state_9562[(10)]);
var inst_9542 = (state_9562[(7)]);
var inst_9541 = (state_9562[(8)]);
var inst_9543 = (state_9562[(9)]);
var inst_9546 = (function (){var cs = inst_9534;
var vec__9539 = inst_9541;
var v = inst_9542;
var c = inst_9543;
return ((function (cs,vec__9539,v,c,inst_9534,inst_9542,inst_9541,inst_9543,state_val_9563,c__7492__auto___9590,out){
return (function (p1__9529_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9529_SHARP_);
});
;})(cs,vec__9539,v,c,inst_9534,inst_9542,inst_9541,inst_9543,state_val_9563,c__7492__auto___9590,out))
})();
var inst_9547 = cljs.core.filterv.call(null,inst_9546,inst_9534);
var inst_9534__$1 = inst_9547;
var state_9562__$1 = (function (){var statearr_9577 = state_9562;
(statearr_9577[(10)] = inst_9534__$1);

return statearr_9577;
})();
var statearr_9578_9600 = state_9562__$1;
(statearr_9578_9600[(2)] = null);

(statearr_9578_9600[(1)] = (2));


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
});})(c__7492__auto___9590,out))
;
return ((function (switch__7380__auto__,c__7492__auto___9590,out){
return (function() {
var cljs$core$async$state_machine__7381__auto__ = null;
var cljs$core$async$state_machine__7381__auto____0 = (function (){
var statearr_9582 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9582[(0)] = cljs$core$async$state_machine__7381__auto__);

(statearr_9582[(1)] = (1));

return statearr_9582;
});
var cljs$core$async$state_machine__7381__auto____1 = (function (state_9562){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_9562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e9583){if((e9583 instanceof Object)){
var ex__7384__auto__ = e9583;
var statearr_9584_9601 = state_9562;
(statearr_9584_9601[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9602 = state_9562;
state_9562 = G__9602;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$state_machine__7381__auto__ = function(state_9562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7381__auto____1.call(this,state_9562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7381__auto____0;
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7381__auto____1;
return cljs$core$async$state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___9590,out))
})();
var state__7494__auto__ = (function (){var statearr_9585 = f__7493__auto__.call(null);
(statearr_9585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___9590);

return statearr_9585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___9590,out))
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
var args9603 = [];
var len__6046__auto___9652 = arguments.length;
var i__6047__auto___9653 = (0);
while(true){
if((i__6047__auto___9653 < len__6046__auto___9652)){
args9603.push((arguments[i__6047__auto___9653]));

var G__9654 = (i__6047__auto___9653 + (1));
i__6047__auto___9653 = G__9654;
continue;
} else {
}
break;
}

var G__9605 = args9603.length;
switch (G__9605) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9603.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7492__auto___9656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___9656,out){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___9656,out){
return (function (state_9629){
var state_val_9630 = (state_9629[(1)]);
if((state_val_9630 === (7))){
var inst_9611 = (state_9629[(7)]);
var inst_9611__$1 = (state_9629[(2)]);
var inst_9612 = (inst_9611__$1 == null);
var inst_9613 = cljs.core.not.call(null,inst_9612);
var state_9629__$1 = (function (){var statearr_9631 = state_9629;
(statearr_9631[(7)] = inst_9611__$1);

return statearr_9631;
})();
if(inst_9613){
var statearr_9632_9657 = state_9629__$1;
(statearr_9632_9657[(1)] = (8));

} else {
var statearr_9633_9658 = state_9629__$1;
(statearr_9633_9658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (1))){
var inst_9606 = (0);
var state_9629__$1 = (function (){var statearr_9634 = state_9629;
(statearr_9634[(8)] = inst_9606);

return statearr_9634;
})();
var statearr_9635_9659 = state_9629__$1;
(statearr_9635_9659[(2)] = null);

(statearr_9635_9659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (4))){
var state_9629__$1 = state_9629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9629__$1,(7),ch);
} else {
if((state_val_9630 === (6))){
var inst_9624 = (state_9629[(2)]);
var state_9629__$1 = state_9629;
var statearr_9636_9660 = state_9629__$1;
(statearr_9636_9660[(2)] = inst_9624);

(statearr_9636_9660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (3))){
var inst_9626 = (state_9629[(2)]);
var inst_9627 = cljs.core.async.close_BANG_.call(null,out);
var state_9629__$1 = (function (){var statearr_9637 = state_9629;
(statearr_9637[(9)] = inst_9626);

return statearr_9637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9629__$1,inst_9627);
} else {
if((state_val_9630 === (2))){
var inst_9606 = (state_9629[(8)]);
var inst_9608 = (inst_9606 < n);
var state_9629__$1 = state_9629;
if(cljs.core.truth_(inst_9608)){
var statearr_9638_9661 = state_9629__$1;
(statearr_9638_9661[(1)] = (4));

} else {
var statearr_9639_9662 = state_9629__$1;
(statearr_9639_9662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (11))){
var inst_9606 = (state_9629[(8)]);
var inst_9616 = (state_9629[(2)]);
var inst_9617 = (inst_9606 + (1));
var inst_9606__$1 = inst_9617;
var state_9629__$1 = (function (){var statearr_9640 = state_9629;
(statearr_9640[(10)] = inst_9616);

(statearr_9640[(8)] = inst_9606__$1);

return statearr_9640;
})();
var statearr_9641_9663 = state_9629__$1;
(statearr_9641_9663[(2)] = null);

(statearr_9641_9663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (9))){
var state_9629__$1 = state_9629;
var statearr_9642_9664 = state_9629__$1;
(statearr_9642_9664[(2)] = null);

(statearr_9642_9664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (5))){
var state_9629__$1 = state_9629;
var statearr_9643_9665 = state_9629__$1;
(statearr_9643_9665[(2)] = null);

(statearr_9643_9665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (10))){
var inst_9621 = (state_9629[(2)]);
var state_9629__$1 = state_9629;
var statearr_9644_9666 = state_9629__$1;
(statearr_9644_9666[(2)] = inst_9621);

(statearr_9644_9666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (8))){
var inst_9611 = (state_9629[(7)]);
var state_9629__$1 = state_9629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9629__$1,(11),out,inst_9611);
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
});})(c__7492__auto___9656,out))
;
return ((function (switch__7380__auto__,c__7492__auto___9656,out){
return (function() {
var cljs$core$async$state_machine__7381__auto__ = null;
var cljs$core$async$state_machine__7381__auto____0 = (function (){
var statearr_9648 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9648[(0)] = cljs$core$async$state_machine__7381__auto__);

(statearr_9648[(1)] = (1));

return statearr_9648;
});
var cljs$core$async$state_machine__7381__auto____1 = (function (state_9629){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_9629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e9649){if((e9649 instanceof Object)){
var ex__7384__auto__ = e9649;
var statearr_9650_9667 = state_9629;
(statearr_9650_9667[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9668 = state_9629;
state_9629 = G__9668;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$state_machine__7381__auto__ = function(state_9629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7381__auto____1.call(this,state_9629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7381__auto____0;
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7381__auto____1;
return cljs$core$async$state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___9656,out))
})();
var state__7494__auto__ = (function (){var statearr_9651 = f__7493__auto__.call(null);
(statearr_9651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___9656);

return statearr_9651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___9656,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9676 = (function (map_LT_,f,ch,meta9677){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9677 = meta9677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9678,meta9677__$1){
var self__ = this;
var _9678__$1 = this;
return (new cljs.core.async.t_cljs$core$async9676(self__.map_LT_,self__.f,self__.ch,meta9677__$1));
});

cljs.core.async.t_cljs$core$async9676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9678){
var self__ = this;
var _9678__$1 = this;
return self__.meta9677;
});

cljs.core.async.t_cljs$core$async9676.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9676.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9676.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9679 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9679 = (function (map_LT_,f,ch,meta9677,_,fn1,meta9680){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9677 = meta9677;
this._ = _;
this.fn1 = fn1;
this.meta9680 = meta9680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9681,meta9680__$1){
var self__ = this;
var _9681__$1 = this;
return (new cljs.core.async.t_cljs$core$async9679(self__.map_LT_,self__.f,self__.ch,self__.meta9677,self__._,self__.fn1,meta9680__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9681){
var self__ = this;
var _9681__$1 = this;
return self__.meta9680;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9669_SHARP_){
return f1.call(null,(((p1__9669_SHARP_ == null))?null:self__.f.call(null,p1__9669_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9679.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9677","meta9677",-883342900,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9676","cljs.core.async/t_cljs$core$async9676",2127346015,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9680","meta9680",-1777083522,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9679";

cljs.core.async.t_cljs$core$async9679.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async9679");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async9679 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9679(map_LT___$1,f__$1,ch__$1,meta9677__$1,___$2,fn1__$1,meta9680){
return (new cljs.core.async.t_cljs$core$async9679(map_LT___$1,f__$1,ch__$1,meta9677__$1,___$2,fn1__$1,meta9680));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9679(self__.map_LT_,self__.f,self__.ch,self__.meta9677,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async9676.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9677","meta9677",-883342900,null)], null);
});

cljs.core.async.t_cljs$core$async9676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9676";

cljs.core.async.t_cljs$core$async9676.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async9676");
});

cljs.core.async.__GT_t_cljs$core$async9676 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9676(map_LT___$1,f__$1,ch__$1,meta9677){
return (new cljs.core.async.t_cljs$core$async9676(map_LT___$1,f__$1,ch__$1,meta9677));
});

}

return (new cljs.core.async.t_cljs$core$async9676(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
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
cljs.core.async.t_cljs$core$async9685 = (function (map_GT_,f,ch,meta9686){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta9686 = meta9686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9687,meta9686__$1){
var self__ = this;
var _9687__$1 = this;
return (new cljs.core.async.t_cljs$core$async9685(self__.map_GT_,self__.f,self__.ch,meta9686__$1));
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
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9686","meta9686",662130721,null)], null);
});

cljs.core.async.t_cljs$core$async9685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9685";

cljs.core.async.t_cljs$core$async9685.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async9685");
});

cljs.core.async.__GT_t_cljs$core$async9685 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9685(map_GT___$1,f__$1,ch__$1,meta9686){
return (new cljs.core.async.t_cljs$core$async9685(map_GT___$1,f__$1,ch__$1,meta9686));
});

}

return (new cljs.core.async.t_cljs$core$async9685(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9691 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9691 = (function (filter_GT_,p,ch,meta9692){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta9692 = meta9692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9693,meta9692__$1){
var self__ = this;
var _9693__$1 = this;
return (new cljs.core.async.t_cljs$core$async9691(self__.filter_GT_,self__.p,self__.ch,meta9692__$1));
});

cljs.core.async.t_cljs$core$async9691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9693){
var self__ = this;
var _9693__$1 = this;
return self__.meta9692;
});

cljs.core.async.t_cljs$core$async9691.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9691.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9691.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9691.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9691.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9691.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9691.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9692","meta9692",-1321720468,null)], null);
});

cljs.core.async.t_cljs$core$async9691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9691";

cljs.core.async.t_cljs$core$async9691.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async9691");
});

cljs.core.async.__GT_t_cljs$core$async9691 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9691(filter_GT___$1,p__$1,ch__$1,meta9692){
return (new cljs.core.async.t_cljs$core$async9691(filter_GT___$1,p__$1,ch__$1,meta9692));
});

}

return (new cljs.core.async.t_cljs$core$async9691(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args9694 = [];
var len__6046__auto___9738 = arguments.length;
var i__6047__auto___9739 = (0);
while(true){
if((i__6047__auto___9739 < len__6046__auto___9738)){
args9694.push((arguments[i__6047__auto___9739]));

var G__9740 = (i__6047__auto___9739 + (1));
i__6047__auto___9739 = G__9740;
continue;
} else {
}
break;
}

var G__9696 = args9694.length;
switch (G__9696) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9694.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7492__auto___9742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___9742,out){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___9742,out){
return (function (state_9717){
var state_val_9718 = (state_9717[(1)]);
if((state_val_9718 === (7))){
var inst_9713 = (state_9717[(2)]);
var state_9717__$1 = state_9717;
var statearr_9719_9743 = state_9717__$1;
(statearr_9719_9743[(2)] = inst_9713);

(statearr_9719_9743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9718 === (1))){
var state_9717__$1 = state_9717;
var statearr_9720_9744 = state_9717__$1;
(statearr_9720_9744[(2)] = null);

(statearr_9720_9744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9718 === (4))){
var inst_9699 = (state_9717[(7)]);
var inst_9699__$1 = (state_9717[(2)]);
var inst_9700 = (inst_9699__$1 == null);
var state_9717__$1 = (function (){var statearr_9721 = state_9717;
(statearr_9721[(7)] = inst_9699__$1);

return statearr_9721;
})();
if(cljs.core.truth_(inst_9700)){
var statearr_9722_9745 = state_9717__$1;
(statearr_9722_9745[(1)] = (5));

} else {
var statearr_9723_9746 = state_9717__$1;
(statearr_9723_9746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9718 === (6))){
var inst_9699 = (state_9717[(7)]);
var inst_9704 = p.call(null,inst_9699);
var state_9717__$1 = state_9717;
if(cljs.core.truth_(inst_9704)){
var statearr_9724_9747 = state_9717__$1;
(statearr_9724_9747[(1)] = (8));

} else {
var statearr_9725_9748 = state_9717__$1;
(statearr_9725_9748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9718 === (3))){
var inst_9715 = (state_9717[(2)]);
var state_9717__$1 = state_9717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9717__$1,inst_9715);
} else {
if((state_val_9718 === (2))){
var state_9717__$1 = state_9717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9717__$1,(4),ch);
} else {
if((state_val_9718 === (11))){
var inst_9707 = (state_9717[(2)]);
var state_9717__$1 = state_9717;
var statearr_9726_9749 = state_9717__$1;
(statearr_9726_9749[(2)] = inst_9707);

(statearr_9726_9749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9718 === (9))){
var state_9717__$1 = state_9717;
var statearr_9727_9750 = state_9717__$1;
(statearr_9727_9750[(2)] = null);

(statearr_9727_9750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9718 === (5))){
var inst_9702 = cljs.core.async.close_BANG_.call(null,out);
var state_9717__$1 = state_9717;
var statearr_9728_9751 = state_9717__$1;
(statearr_9728_9751[(2)] = inst_9702);

(statearr_9728_9751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9718 === (10))){
var inst_9710 = (state_9717[(2)]);
var state_9717__$1 = (function (){var statearr_9729 = state_9717;
(statearr_9729[(8)] = inst_9710);

return statearr_9729;
})();
var statearr_9730_9752 = state_9717__$1;
(statearr_9730_9752[(2)] = null);

(statearr_9730_9752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9718 === (8))){
var inst_9699 = (state_9717[(7)]);
var state_9717__$1 = state_9717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9717__$1,(11),out,inst_9699);
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
});})(c__7492__auto___9742,out))
;
return ((function (switch__7380__auto__,c__7492__auto___9742,out){
return (function() {
var cljs$core$async$state_machine__7381__auto__ = null;
var cljs$core$async$state_machine__7381__auto____0 = (function (){
var statearr_9734 = [null,null,null,null,null,null,null,null,null];
(statearr_9734[(0)] = cljs$core$async$state_machine__7381__auto__);

(statearr_9734[(1)] = (1));

return statearr_9734;
});
var cljs$core$async$state_machine__7381__auto____1 = (function (state_9717){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_9717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e9735){if((e9735 instanceof Object)){
var ex__7384__auto__ = e9735;
var statearr_9736_9753 = state_9717;
(statearr_9736_9753[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9754 = state_9717;
state_9717 = G__9754;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$state_machine__7381__auto__ = function(state_9717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7381__auto____1.call(this,state_9717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7381__auto____0;
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7381__auto____1;
return cljs$core$async$state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___9742,out))
})();
var state__7494__auto__ = (function (){var statearr_9737 = f__7493__auto__.call(null);
(statearr_9737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___9742);

return statearr_9737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___9742,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args9755 = [];
var len__6046__auto___9758 = arguments.length;
var i__6047__auto___9759 = (0);
while(true){
if((i__6047__auto___9759 < len__6046__auto___9758)){
args9755.push((arguments[i__6047__auto___9759]));

var G__9760 = (i__6047__auto___9759 + (1));
i__6047__auto___9759 = G__9760;
continue;
} else {
}
break;
}

var G__9757 = args9755.length;
switch (G__9757) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9755.length)].join('')));

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
var c__7492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto__){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto__){
return (function (state_9927){
var state_val_9928 = (state_9927[(1)]);
if((state_val_9928 === (7))){
var inst_9923 = (state_9927[(2)]);
var state_9927__$1 = state_9927;
var statearr_9929_9970 = state_9927__$1;
(statearr_9929_9970[(2)] = inst_9923);

(statearr_9929_9970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (20))){
var inst_9893 = (state_9927[(7)]);
var inst_9904 = (state_9927[(2)]);
var inst_9905 = cljs.core.next.call(null,inst_9893);
var inst_9879 = inst_9905;
var inst_9880 = null;
var inst_9881 = (0);
var inst_9882 = (0);
var state_9927__$1 = (function (){var statearr_9930 = state_9927;
(statearr_9930[(8)] = inst_9881);

(statearr_9930[(9)] = inst_9879);

(statearr_9930[(10)] = inst_9904);

(statearr_9930[(11)] = inst_9880);

(statearr_9930[(12)] = inst_9882);

return statearr_9930;
})();
var statearr_9931_9971 = state_9927__$1;
(statearr_9931_9971[(2)] = null);

(statearr_9931_9971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (1))){
var state_9927__$1 = state_9927;
var statearr_9932_9972 = state_9927__$1;
(statearr_9932_9972[(2)] = null);

(statearr_9932_9972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (4))){
var inst_9868 = (state_9927[(13)]);
var inst_9868__$1 = (state_9927[(2)]);
var inst_9869 = (inst_9868__$1 == null);
var state_9927__$1 = (function (){var statearr_9933 = state_9927;
(statearr_9933[(13)] = inst_9868__$1);

return statearr_9933;
})();
if(cljs.core.truth_(inst_9869)){
var statearr_9934_9973 = state_9927__$1;
(statearr_9934_9973[(1)] = (5));

} else {
var statearr_9935_9974 = state_9927__$1;
(statearr_9935_9974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (15))){
var state_9927__$1 = state_9927;
var statearr_9939_9975 = state_9927__$1;
(statearr_9939_9975[(2)] = null);

(statearr_9939_9975[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (21))){
var state_9927__$1 = state_9927;
var statearr_9940_9976 = state_9927__$1;
(statearr_9940_9976[(2)] = null);

(statearr_9940_9976[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (13))){
var inst_9881 = (state_9927[(8)]);
var inst_9879 = (state_9927[(9)]);
var inst_9880 = (state_9927[(11)]);
var inst_9882 = (state_9927[(12)]);
var inst_9889 = (state_9927[(2)]);
var inst_9890 = (inst_9882 + (1));
var tmp9936 = inst_9881;
var tmp9937 = inst_9879;
var tmp9938 = inst_9880;
var inst_9879__$1 = tmp9937;
var inst_9880__$1 = tmp9938;
var inst_9881__$1 = tmp9936;
var inst_9882__$1 = inst_9890;
var state_9927__$1 = (function (){var statearr_9941 = state_9927;
(statearr_9941[(8)] = inst_9881__$1);

(statearr_9941[(9)] = inst_9879__$1);

(statearr_9941[(14)] = inst_9889);

(statearr_9941[(11)] = inst_9880__$1);

(statearr_9941[(12)] = inst_9882__$1);

return statearr_9941;
})();
var statearr_9942_9977 = state_9927__$1;
(statearr_9942_9977[(2)] = null);

(statearr_9942_9977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (22))){
var state_9927__$1 = state_9927;
var statearr_9943_9978 = state_9927__$1;
(statearr_9943_9978[(2)] = null);

(statearr_9943_9978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (6))){
var inst_9868 = (state_9927[(13)]);
var inst_9877 = f.call(null,inst_9868);
var inst_9878 = cljs.core.seq.call(null,inst_9877);
var inst_9879 = inst_9878;
var inst_9880 = null;
var inst_9881 = (0);
var inst_9882 = (0);
var state_9927__$1 = (function (){var statearr_9944 = state_9927;
(statearr_9944[(8)] = inst_9881);

(statearr_9944[(9)] = inst_9879);

(statearr_9944[(11)] = inst_9880);

(statearr_9944[(12)] = inst_9882);

return statearr_9944;
})();
var statearr_9945_9979 = state_9927__$1;
(statearr_9945_9979[(2)] = null);

(statearr_9945_9979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (17))){
var inst_9893 = (state_9927[(7)]);
var inst_9897 = cljs.core.chunk_first.call(null,inst_9893);
var inst_9898 = cljs.core.chunk_rest.call(null,inst_9893);
var inst_9899 = cljs.core.count.call(null,inst_9897);
var inst_9879 = inst_9898;
var inst_9880 = inst_9897;
var inst_9881 = inst_9899;
var inst_9882 = (0);
var state_9927__$1 = (function (){var statearr_9946 = state_9927;
(statearr_9946[(8)] = inst_9881);

(statearr_9946[(9)] = inst_9879);

(statearr_9946[(11)] = inst_9880);

(statearr_9946[(12)] = inst_9882);

return statearr_9946;
})();
var statearr_9947_9980 = state_9927__$1;
(statearr_9947_9980[(2)] = null);

(statearr_9947_9980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (3))){
var inst_9925 = (state_9927[(2)]);
var state_9927__$1 = state_9927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9927__$1,inst_9925);
} else {
if((state_val_9928 === (12))){
var inst_9913 = (state_9927[(2)]);
var state_9927__$1 = state_9927;
var statearr_9948_9981 = state_9927__$1;
(statearr_9948_9981[(2)] = inst_9913);

(statearr_9948_9981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (2))){
var state_9927__$1 = state_9927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9927__$1,(4),in$);
} else {
if((state_val_9928 === (23))){
var inst_9921 = (state_9927[(2)]);
var state_9927__$1 = state_9927;
var statearr_9949_9982 = state_9927__$1;
(statearr_9949_9982[(2)] = inst_9921);

(statearr_9949_9982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (19))){
var inst_9908 = (state_9927[(2)]);
var state_9927__$1 = state_9927;
var statearr_9950_9983 = state_9927__$1;
(statearr_9950_9983[(2)] = inst_9908);

(statearr_9950_9983[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (11))){
var inst_9879 = (state_9927[(9)]);
var inst_9893 = (state_9927[(7)]);
var inst_9893__$1 = cljs.core.seq.call(null,inst_9879);
var state_9927__$1 = (function (){var statearr_9951 = state_9927;
(statearr_9951[(7)] = inst_9893__$1);

return statearr_9951;
})();
if(inst_9893__$1){
var statearr_9952_9984 = state_9927__$1;
(statearr_9952_9984[(1)] = (14));

} else {
var statearr_9953_9985 = state_9927__$1;
(statearr_9953_9985[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (9))){
var inst_9915 = (state_9927[(2)]);
var inst_9916 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_9927__$1 = (function (){var statearr_9954 = state_9927;
(statearr_9954[(15)] = inst_9915);

return statearr_9954;
})();
if(cljs.core.truth_(inst_9916)){
var statearr_9955_9986 = state_9927__$1;
(statearr_9955_9986[(1)] = (21));

} else {
var statearr_9956_9987 = state_9927__$1;
(statearr_9956_9987[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (5))){
var inst_9871 = cljs.core.async.close_BANG_.call(null,out);
var state_9927__$1 = state_9927;
var statearr_9957_9988 = state_9927__$1;
(statearr_9957_9988[(2)] = inst_9871);

(statearr_9957_9988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (14))){
var inst_9893 = (state_9927[(7)]);
var inst_9895 = cljs.core.chunked_seq_QMARK_.call(null,inst_9893);
var state_9927__$1 = state_9927;
if(inst_9895){
var statearr_9958_9989 = state_9927__$1;
(statearr_9958_9989[(1)] = (17));

} else {
var statearr_9959_9990 = state_9927__$1;
(statearr_9959_9990[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (16))){
var inst_9911 = (state_9927[(2)]);
var state_9927__$1 = state_9927;
var statearr_9960_9991 = state_9927__$1;
(statearr_9960_9991[(2)] = inst_9911);

(statearr_9960_9991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9928 === (10))){
var inst_9880 = (state_9927[(11)]);
var inst_9882 = (state_9927[(12)]);
var inst_9887 = cljs.core._nth.call(null,inst_9880,inst_9882);
var state_9927__$1 = state_9927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9927__$1,(13),out,inst_9887);
} else {
if((state_val_9928 === (18))){
var inst_9893 = (state_9927[(7)]);
var inst_9902 = cljs.core.first.call(null,inst_9893);
var state_9927__$1 = state_9927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9927__$1,(20),out,inst_9902);
} else {
if((state_val_9928 === (8))){
var inst_9881 = (state_9927[(8)]);
var inst_9882 = (state_9927[(12)]);
var inst_9884 = (inst_9882 < inst_9881);
var inst_9885 = inst_9884;
var state_9927__$1 = state_9927;
if(cljs.core.truth_(inst_9885)){
var statearr_9961_9992 = state_9927__$1;
(statearr_9961_9992[(1)] = (10));

} else {
var statearr_9962_9993 = state_9927__$1;
(statearr_9962_9993[(1)] = (11));

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
});})(c__7492__auto__))
;
return ((function (switch__7380__auto__,c__7492__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7381__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7381__auto____0 = (function (){
var statearr_9966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9966[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7381__auto__);

(statearr_9966[(1)] = (1));

return statearr_9966;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7381__auto____1 = (function (state_9927){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_9927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e9967){if((e9967 instanceof Object)){
var ex__7384__auto__ = e9967;
var statearr_9968_9994 = state_9927;
(statearr_9968_9994[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9995 = state_9927;
state_9927 = G__9995;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7381__auto__ = function(state_9927){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7381__auto____1.call(this,state_9927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7381__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7381__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto__))
})();
var state__7494__auto__ = (function (){var statearr_9969 = f__7493__auto__.call(null);
(statearr_9969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto__);

return statearr_9969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto__))
);

return c__7492__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args9996 = [];
var len__6046__auto___9999 = arguments.length;
var i__6047__auto___10000 = (0);
while(true){
if((i__6047__auto___10000 < len__6046__auto___9999)){
args9996.push((arguments[i__6047__auto___10000]));

var G__10001 = (i__6047__auto___10000 + (1));
i__6047__auto___10000 = G__10001;
continue;
} else {
}
break;
}

var G__9998 = args9996.length;
switch (G__9998) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9996.length)].join('')));

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
var args10003 = [];
var len__6046__auto___10006 = arguments.length;
var i__6047__auto___10007 = (0);
while(true){
if((i__6047__auto___10007 < len__6046__auto___10006)){
args10003.push((arguments[i__6047__auto___10007]));

var G__10008 = (i__6047__auto___10007 + (1));
i__6047__auto___10007 = G__10008;
continue;
} else {
}
break;
}

var G__10005 = args10003.length;
switch (G__10005) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10003.length)].join('')));

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
var args10010 = [];
var len__6046__auto___10061 = arguments.length;
var i__6047__auto___10062 = (0);
while(true){
if((i__6047__auto___10062 < len__6046__auto___10061)){
args10010.push((arguments[i__6047__auto___10062]));

var G__10063 = (i__6047__auto___10062 + (1));
i__6047__auto___10062 = G__10063;
continue;
} else {
}
break;
}

var G__10012 = args10010.length;
switch (G__10012) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10010.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7492__auto___10065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___10065,out){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___10065,out){
return (function (state_10036){
var state_val_10037 = (state_10036[(1)]);
if((state_val_10037 === (7))){
var inst_10031 = (state_10036[(2)]);
var state_10036__$1 = state_10036;
var statearr_10038_10066 = state_10036__$1;
(statearr_10038_10066[(2)] = inst_10031);

(statearr_10038_10066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10037 === (1))){
var inst_10013 = null;
var state_10036__$1 = (function (){var statearr_10039 = state_10036;
(statearr_10039[(7)] = inst_10013);

return statearr_10039;
})();
var statearr_10040_10067 = state_10036__$1;
(statearr_10040_10067[(2)] = null);

(statearr_10040_10067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10037 === (4))){
var inst_10016 = (state_10036[(8)]);
var inst_10016__$1 = (state_10036[(2)]);
var inst_10017 = (inst_10016__$1 == null);
var inst_10018 = cljs.core.not.call(null,inst_10017);
var state_10036__$1 = (function (){var statearr_10041 = state_10036;
(statearr_10041[(8)] = inst_10016__$1);

return statearr_10041;
})();
if(inst_10018){
var statearr_10042_10068 = state_10036__$1;
(statearr_10042_10068[(1)] = (5));

} else {
var statearr_10043_10069 = state_10036__$1;
(statearr_10043_10069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10037 === (6))){
var state_10036__$1 = state_10036;
var statearr_10044_10070 = state_10036__$1;
(statearr_10044_10070[(2)] = null);

(statearr_10044_10070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10037 === (3))){
var inst_10033 = (state_10036[(2)]);
var inst_10034 = cljs.core.async.close_BANG_.call(null,out);
var state_10036__$1 = (function (){var statearr_10045 = state_10036;
(statearr_10045[(9)] = inst_10033);

return statearr_10045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10036__$1,inst_10034);
} else {
if((state_val_10037 === (2))){
var state_10036__$1 = state_10036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10036__$1,(4),ch);
} else {
if((state_val_10037 === (11))){
var inst_10016 = (state_10036[(8)]);
var inst_10025 = (state_10036[(2)]);
var inst_10013 = inst_10016;
var state_10036__$1 = (function (){var statearr_10046 = state_10036;
(statearr_10046[(7)] = inst_10013);

(statearr_10046[(10)] = inst_10025);

return statearr_10046;
})();
var statearr_10047_10071 = state_10036__$1;
(statearr_10047_10071[(2)] = null);

(statearr_10047_10071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10037 === (9))){
var inst_10016 = (state_10036[(8)]);
var state_10036__$1 = state_10036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10036__$1,(11),out,inst_10016);
} else {
if((state_val_10037 === (5))){
var inst_10013 = (state_10036[(7)]);
var inst_10016 = (state_10036[(8)]);
var inst_10020 = cljs.core._EQ_.call(null,inst_10016,inst_10013);
var state_10036__$1 = state_10036;
if(inst_10020){
var statearr_10049_10072 = state_10036__$1;
(statearr_10049_10072[(1)] = (8));

} else {
var statearr_10050_10073 = state_10036__$1;
(statearr_10050_10073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10037 === (10))){
var inst_10028 = (state_10036[(2)]);
var state_10036__$1 = state_10036;
var statearr_10051_10074 = state_10036__$1;
(statearr_10051_10074[(2)] = inst_10028);

(statearr_10051_10074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10037 === (8))){
var inst_10013 = (state_10036[(7)]);
var tmp10048 = inst_10013;
var inst_10013__$1 = tmp10048;
var state_10036__$1 = (function (){var statearr_10052 = state_10036;
(statearr_10052[(7)] = inst_10013__$1);

return statearr_10052;
})();
var statearr_10053_10075 = state_10036__$1;
(statearr_10053_10075[(2)] = null);

(statearr_10053_10075[(1)] = (2));


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
});})(c__7492__auto___10065,out))
;
return ((function (switch__7380__auto__,c__7492__auto___10065,out){
return (function() {
var cljs$core$async$state_machine__7381__auto__ = null;
var cljs$core$async$state_machine__7381__auto____0 = (function (){
var statearr_10057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10057[(0)] = cljs$core$async$state_machine__7381__auto__);

(statearr_10057[(1)] = (1));

return statearr_10057;
});
var cljs$core$async$state_machine__7381__auto____1 = (function (state_10036){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_10036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e10058){if((e10058 instanceof Object)){
var ex__7384__auto__ = e10058;
var statearr_10059_10076 = state_10036;
(statearr_10059_10076[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10077 = state_10036;
state_10036 = G__10077;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$state_machine__7381__auto__ = function(state_10036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7381__auto____1.call(this,state_10036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7381__auto____0;
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7381__auto____1;
return cljs$core$async$state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___10065,out))
})();
var state__7494__auto__ = (function (){var statearr_10060 = f__7493__auto__.call(null);
(statearr_10060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___10065);

return statearr_10060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___10065,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args10078 = [];
var len__6046__auto___10148 = arguments.length;
var i__6047__auto___10149 = (0);
while(true){
if((i__6047__auto___10149 < len__6046__auto___10148)){
args10078.push((arguments[i__6047__auto___10149]));

var G__10150 = (i__6047__auto___10149 + (1));
i__6047__auto___10149 = G__10150;
continue;
} else {
}
break;
}

var G__10080 = args10078.length;
switch (G__10080) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10078.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7492__auto___10152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___10152,out){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___10152,out){
return (function (state_10118){
var state_val_10119 = (state_10118[(1)]);
if((state_val_10119 === (7))){
var inst_10114 = (state_10118[(2)]);
var state_10118__$1 = state_10118;
var statearr_10120_10153 = state_10118__$1;
(statearr_10120_10153[(2)] = inst_10114);

(statearr_10120_10153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10119 === (1))){
var inst_10081 = (new Array(n));
var inst_10082 = inst_10081;
var inst_10083 = (0);
var state_10118__$1 = (function (){var statearr_10121 = state_10118;
(statearr_10121[(7)] = inst_10083);

(statearr_10121[(8)] = inst_10082);

return statearr_10121;
})();
var statearr_10122_10154 = state_10118__$1;
(statearr_10122_10154[(2)] = null);

(statearr_10122_10154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10119 === (4))){
var inst_10086 = (state_10118[(9)]);
var inst_10086__$1 = (state_10118[(2)]);
var inst_10087 = (inst_10086__$1 == null);
var inst_10088 = cljs.core.not.call(null,inst_10087);
var state_10118__$1 = (function (){var statearr_10123 = state_10118;
(statearr_10123[(9)] = inst_10086__$1);

return statearr_10123;
})();
if(inst_10088){
var statearr_10124_10155 = state_10118__$1;
(statearr_10124_10155[(1)] = (5));

} else {
var statearr_10125_10156 = state_10118__$1;
(statearr_10125_10156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10119 === (15))){
var inst_10108 = (state_10118[(2)]);
var state_10118__$1 = state_10118;
var statearr_10126_10157 = state_10118__$1;
(statearr_10126_10157[(2)] = inst_10108);

(statearr_10126_10157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10119 === (13))){
var state_10118__$1 = state_10118;
var statearr_10127_10158 = state_10118__$1;
(statearr_10127_10158[(2)] = null);

(statearr_10127_10158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10119 === (6))){
var inst_10083 = (state_10118[(7)]);
var inst_10104 = (inst_10083 > (0));
var state_10118__$1 = state_10118;
if(cljs.core.truth_(inst_10104)){
var statearr_10128_10159 = state_10118__$1;
(statearr_10128_10159[(1)] = (12));

} else {
var statearr_10129_10160 = state_10118__$1;
(statearr_10129_10160[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10119 === (3))){
var inst_10116 = (state_10118[(2)]);
var state_10118__$1 = state_10118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10118__$1,inst_10116);
} else {
if((state_val_10119 === (12))){
var inst_10082 = (state_10118[(8)]);
var inst_10106 = cljs.core.vec.call(null,inst_10082);
var state_10118__$1 = state_10118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10118__$1,(15),out,inst_10106);
} else {
if((state_val_10119 === (2))){
var state_10118__$1 = state_10118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10118__$1,(4),ch);
} else {
if((state_val_10119 === (11))){
var inst_10098 = (state_10118[(2)]);
var inst_10099 = (new Array(n));
var inst_10082 = inst_10099;
var inst_10083 = (0);
var state_10118__$1 = (function (){var statearr_10130 = state_10118;
(statearr_10130[(7)] = inst_10083);

(statearr_10130[(8)] = inst_10082);

(statearr_10130[(10)] = inst_10098);

return statearr_10130;
})();
var statearr_10131_10161 = state_10118__$1;
(statearr_10131_10161[(2)] = null);

(statearr_10131_10161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10119 === (9))){
var inst_10082 = (state_10118[(8)]);
var inst_10096 = cljs.core.vec.call(null,inst_10082);
var state_10118__$1 = state_10118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10118__$1,(11),out,inst_10096);
} else {
if((state_val_10119 === (5))){
var inst_10083 = (state_10118[(7)]);
var inst_10091 = (state_10118[(11)]);
var inst_10082 = (state_10118[(8)]);
var inst_10086 = (state_10118[(9)]);
var inst_10090 = (inst_10082[inst_10083] = inst_10086);
var inst_10091__$1 = (inst_10083 + (1));
var inst_10092 = (inst_10091__$1 < n);
var state_10118__$1 = (function (){var statearr_10132 = state_10118;
(statearr_10132[(11)] = inst_10091__$1);

(statearr_10132[(12)] = inst_10090);

return statearr_10132;
})();
if(cljs.core.truth_(inst_10092)){
var statearr_10133_10162 = state_10118__$1;
(statearr_10133_10162[(1)] = (8));

} else {
var statearr_10134_10163 = state_10118__$1;
(statearr_10134_10163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10119 === (14))){
var inst_10111 = (state_10118[(2)]);
var inst_10112 = cljs.core.async.close_BANG_.call(null,out);
var state_10118__$1 = (function (){var statearr_10136 = state_10118;
(statearr_10136[(13)] = inst_10111);

return statearr_10136;
})();
var statearr_10137_10164 = state_10118__$1;
(statearr_10137_10164[(2)] = inst_10112);

(statearr_10137_10164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10119 === (10))){
var inst_10102 = (state_10118[(2)]);
var state_10118__$1 = state_10118;
var statearr_10138_10165 = state_10118__$1;
(statearr_10138_10165[(2)] = inst_10102);

(statearr_10138_10165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10119 === (8))){
var inst_10091 = (state_10118[(11)]);
var inst_10082 = (state_10118[(8)]);
var tmp10135 = inst_10082;
var inst_10082__$1 = tmp10135;
var inst_10083 = inst_10091;
var state_10118__$1 = (function (){var statearr_10139 = state_10118;
(statearr_10139[(7)] = inst_10083);

(statearr_10139[(8)] = inst_10082__$1);

return statearr_10139;
})();
var statearr_10140_10166 = state_10118__$1;
(statearr_10140_10166[(2)] = null);

(statearr_10140_10166[(1)] = (2));


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
});})(c__7492__auto___10152,out))
;
return ((function (switch__7380__auto__,c__7492__auto___10152,out){
return (function() {
var cljs$core$async$state_machine__7381__auto__ = null;
var cljs$core$async$state_machine__7381__auto____0 = (function (){
var statearr_10144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10144[(0)] = cljs$core$async$state_machine__7381__auto__);

(statearr_10144[(1)] = (1));

return statearr_10144;
});
var cljs$core$async$state_machine__7381__auto____1 = (function (state_10118){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_10118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e10145){if((e10145 instanceof Object)){
var ex__7384__auto__ = e10145;
var statearr_10146_10167 = state_10118;
(statearr_10146_10167[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10168 = state_10118;
state_10118 = G__10168;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$state_machine__7381__auto__ = function(state_10118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7381__auto____1.call(this,state_10118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7381__auto____0;
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7381__auto____1;
return cljs$core$async$state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___10152,out))
})();
var state__7494__auto__ = (function (){var statearr_10147 = f__7493__auto__.call(null);
(statearr_10147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___10152);

return statearr_10147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___10152,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args10169 = [];
var len__6046__auto___10243 = arguments.length;
var i__6047__auto___10244 = (0);
while(true){
if((i__6047__auto___10244 < len__6046__auto___10243)){
args10169.push((arguments[i__6047__auto___10244]));

var G__10245 = (i__6047__auto___10244 + (1));
i__6047__auto___10244 = G__10245;
continue;
} else {
}
break;
}

var G__10171 = args10169.length;
switch (G__10171) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10169.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7492__auto___10247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7492__auto___10247,out){
return (function (){
var f__7493__auto__ = (function (){var switch__7380__auto__ = ((function (c__7492__auto___10247,out){
return (function (state_10213){
var state_val_10214 = (state_10213[(1)]);
if((state_val_10214 === (7))){
var inst_10209 = (state_10213[(2)]);
var state_10213__$1 = state_10213;
var statearr_10215_10248 = state_10213__$1;
(statearr_10215_10248[(2)] = inst_10209);

(statearr_10215_10248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (1))){
var inst_10172 = [];
var inst_10173 = inst_10172;
var inst_10174 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10213__$1 = (function (){var statearr_10216 = state_10213;
(statearr_10216[(7)] = inst_10173);

(statearr_10216[(8)] = inst_10174);

return statearr_10216;
})();
var statearr_10217_10249 = state_10213__$1;
(statearr_10217_10249[(2)] = null);

(statearr_10217_10249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (4))){
var inst_10177 = (state_10213[(9)]);
var inst_10177__$1 = (state_10213[(2)]);
var inst_10178 = (inst_10177__$1 == null);
var inst_10179 = cljs.core.not.call(null,inst_10178);
var state_10213__$1 = (function (){var statearr_10218 = state_10213;
(statearr_10218[(9)] = inst_10177__$1);

return statearr_10218;
})();
if(inst_10179){
var statearr_10219_10250 = state_10213__$1;
(statearr_10219_10250[(1)] = (5));

} else {
var statearr_10220_10251 = state_10213__$1;
(statearr_10220_10251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (15))){
var inst_10203 = (state_10213[(2)]);
var state_10213__$1 = state_10213;
var statearr_10221_10252 = state_10213__$1;
(statearr_10221_10252[(2)] = inst_10203);

(statearr_10221_10252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (13))){
var state_10213__$1 = state_10213;
var statearr_10222_10253 = state_10213__$1;
(statearr_10222_10253[(2)] = null);

(statearr_10222_10253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (6))){
var inst_10173 = (state_10213[(7)]);
var inst_10198 = inst_10173.length;
var inst_10199 = (inst_10198 > (0));
var state_10213__$1 = state_10213;
if(cljs.core.truth_(inst_10199)){
var statearr_10223_10254 = state_10213__$1;
(statearr_10223_10254[(1)] = (12));

} else {
var statearr_10224_10255 = state_10213__$1;
(statearr_10224_10255[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (3))){
var inst_10211 = (state_10213[(2)]);
var state_10213__$1 = state_10213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10213__$1,inst_10211);
} else {
if((state_val_10214 === (12))){
var inst_10173 = (state_10213[(7)]);
var inst_10201 = cljs.core.vec.call(null,inst_10173);
var state_10213__$1 = state_10213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10213__$1,(15),out,inst_10201);
} else {
if((state_val_10214 === (2))){
var state_10213__$1 = state_10213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10213__$1,(4),ch);
} else {
if((state_val_10214 === (11))){
var inst_10177 = (state_10213[(9)]);
var inst_10181 = (state_10213[(10)]);
var inst_10191 = (state_10213[(2)]);
var inst_10192 = [];
var inst_10193 = inst_10192.push(inst_10177);
var inst_10173 = inst_10192;
var inst_10174 = inst_10181;
var state_10213__$1 = (function (){var statearr_10225 = state_10213;
(statearr_10225[(7)] = inst_10173);

(statearr_10225[(11)] = inst_10193);

(statearr_10225[(12)] = inst_10191);

(statearr_10225[(8)] = inst_10174);

return statearr_10225;
})();
var statearr_10226_10256 = state_10213__$1;
(statearr_10226_10256[(2)] = null);

(statearr_10226_10256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (9))){
var inst_10173 = (state_10213[(7)]);
var inst_10189 = cljs.core.vec.call(null,inst_10173);
var state_10213__$1 = state_10213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10213__$1,(11),out,inst_10189);
} else {
if((state_val_10214 === (5))){
var inst_10177 = (state_10213[(9)]);
var inst_10174 = (state_10213[(8)]);
var inst_10181 = (state_10213[(10)]);
var inst_10181__$1 = f.call(null,inst_10177);
var inst_10182 = cljs.core._EQ_.call(null,inst_10181__$1,inst_10174);
var inst_10183 = cljs.core.keyword_identical_QMARK_.call(null,inst_10174,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_10184 = (inst_10182) || (inst_10183);
var state_10213__$1 = (function (){var statearr_10227 = state_10213;
(statearr_10227[(10)] = inst_10181__$1);

return statearr_10227;
})();
if(cljs.core.truth_(inst_10184)){
var statearr_10228_10257 = state_10213__$1;
(statearr_10228_10257[(1)] = (8));

} else {
var statearr_10229_10258 = state_10213__$1;
(statearr_10229_10258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (14))){
var inst_10206 = (state_10213[(2)]);
var inst_10207 = cljs.core.async.close_BANG_.call(null,out);
var state_10213__$1 = (function (){var statearr_10231 = state_10213;
(statearr_10231[(13)] = inst_10206);

return statearr_10231;
})();
var statearr_10232_10259 = state_10213__$1;
(statearr_10232_10259[(2)] = inst_10207);

(statearr_10232_10259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (10))){
var inst_10196 = (state_10213[(2)]);
var state_10213__$1 = state_10213;
var statearr_10233_10260 = state_10213__$1;
(statearr_10233_10260[(2)] = inst_10196);

(statearr_10233_10260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (8))){
var inst_10173 = (state_10213[(7)]);
var inst_10177 = (state_10213[(9)]);
var inst_10181 = (state_10213[(10)]);
var inst_10186 = inst_10173.push(inst_10177);
var tmp10230 = inst_10173;
var inst_10173__$1 = tmp10230;
var inst_10174 = inst_10181;
var state_10213__$1 = (function (){var statearr_10234 = state_10213;
(statearr_10234[(14)] = inst_10186);

(statearr_10234[(7)] = inst_10173__$1);

(statearr_10234[(8)] = inst_10174);

return statearr_10234;
})();
var statearr_10235_10261 = state_10213__$1;
(statearr_10235_10261[(2)] = null);

(statearr_10235_10261[(1)] = (2));


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
});})(c__7492__auto___10247,out))
;
return ((function (switch__7380__auto__,c__7492__auto___10247,out){
return (function() {
var cljs$core$async$state_machine__7381__auto__ = null;
var cljs$core$async$state_machine__7381__auto____0 = (function (){
var statearr_10239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10239[(0)] = cljs$core$async$state_machine__7381__auto__);

(statearr_10239[(1)] = (1));

return statearr_10239;
});
var cljs$core$async$state_machine__7381__auto____1 = (function (state_10213){
while(true){
var ret_value__7382__auto__ = (function (){try{while(true){
var result__7383__auto__ = switch__7380__auto__.call(null,state_10213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7383__auto__;
}
break;
}
}catch (e10240){if((e10240 instanceof Object)){
var ex__7384__auto__ = e10240;
var statearr_10241_10262 = state_10213;
(statearr_10241_10262[(5)] = ex__7384__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10263 = state_10213;
state_10213 = G__10263;
continue;
} else {
return ret_value__7382__auto__;
}
break;
}
});
cljs$core$async$state_machine__7381__auto__ = function(state_10213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7381__auto____1.call(this,state_10213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7381__auto____0;
cljs$core$async$state_machine__7381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7381__auto____1;
return cljs$core$async$state_machine__7381__auto__;
})()
;})(switch__7380__auto__,c__7492__auto___10247,out))
})();
var state__7494__auto__ = (function (){var statearr_10242 = f__7493__auto__.call(null);
(statearr_10242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7492__auto___10247);

return statearr_10242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7494__auto__);
});})(c__7492__auto___10247,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
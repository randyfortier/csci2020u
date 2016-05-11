// Compiled by ClojureScript 1.7.170 {}
goog.provide('d3_cljs.fractal_tree');
goog.require('cljs.core');
d3_cljs.fractal_tree.seed = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"x","x",2099068185),(420),new cljs.core.Keyword(null,"y","y",-1757859776),(600),new cljs.core.Keyword(null,"a","a",-2123407586),(0),new cljs.core.Keyword(null,"l","l",1395893423),(130),new cljs.core.Keyword(null,"d","d",1972142424),(1)], null);
d3_cljs.fractal_tree.conf = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"da","da",-742035943),0.5,new cljs.core.Keyword(null,"dl","dl",-2140151713),0.8,new cljs.core.Keyword(null,"ar","ar",-2093907980),0.2,new cljs.core.Keyword(null,"rotation-bias","rotation-bias",959640627),0.5,new cljs.core.Keyword(null,"max-depth","max-depth",127060793),(10)], null));
d3_cljs.fractal_tree.id_counter = cljs.core.atom.call(null,(0));
d3_cljs.fractal_tree.get_id = (function d3_cljs$fractal_tree$get_id(){
return cljs.core.swap_BANG_.call(null,d3_cljs.fractal_tree.id_counter,cljs.core.inc);
});
d3_cljs.fractal_tree.end_point = (function d3_cljs$fractal_tree$end_point(p){
var x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p) + (Math.sin(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p)) * new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(p)));
var y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p) - (Math.cos(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p)) * new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(p)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
d3_cljs.fractal_tree.make_child = (function d3_cljs$fractal_tree$make_child(p,angle){
var map__6151 = cljs.core.deref.call(null,d3_cljs.fractal_tree.conf);
var map__6151__$1 = ((((!((map__6151 == null)))?((((map__6151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6151):map__6151);
var da = cljs.core.get.call(null,map__6151__$1,new cljs.core.Keyword(null,"da","da",-742035943));
var dl = cljs.core.get.call(null,map__6151__$1,new cljs.core.Keyword(null,"dl","dl",-2140151713));
var end = d3_cljs.fractal_tree.end_point.call(null,p);
var depth = (new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(p) + (1));
return cljs.core.merge.call(null,end,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"i","i",-1386841315),d3_cljs.fractal_tree.get_id.call(null),new cljs.core.Keyword(null,"a","a",-2123407586),angle,new cljs.core.Keyword(null,"l","l",1395893423),(new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(p) * dl),new cljs.core.Keyword(null,"d","d",1972142424),depth,new cljs.core.Keyword(null,"level","level",1290497552),(new cljs.core.Keyword(null,"max-depth","max-depth",127060793).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d3_cljs.fractal_tree.conf)) - depth),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(p)], null));
});
d3_cljs.fractal_tree.random_rotation = (function d3_cljs$fractal_tree$random_rotation(){
var rand = (new cljs.core.Keyword(null,"rotation-bias","rotation-bias",959640627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d3_cljs.fractal_tree.conf)) - Math.random());
return (new cljs.core.Keyword(null,"ar","ar",-2093907980).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d3_cljs.fractal_tree.conf)) * rand);
});
d3_cljs.fractal_tree.make_left = (function d3_cljs$fractal_tree$make_left(p){
return d3_cljs.fractal_tree.make_child.call(null,p,(d3_cljs.fractal_tree.random_rotation.call(null) + (new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p) - new cljs.core.Keyword(null,"da","da",-742035943).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d3_cljs.fractal_tree.conf)))));
});
d3_cljs.fractal_tree.make_right = (function d3_cljs$fractal_tree$make_right(p){
return d3_cljs.fractal_tree.make_child.call(null,p,(d3_cljs.fractal_tree.random_rotation.call(null) + (new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p) + new cljs.core.Keyword(null,"da","da",-742035943).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d3_cljs.fractal_tree.conf)))));
});
d3_cljs.fractal_tree.grow = (function d3_cljs$fractal_tree$grow(p){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"max-depth","max-depth",127060793).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d3_cljs.fractal_tree.conf)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),d3_cljs$fractal_tree$grow.call(null,d3_cljs.fractal_tree.make_left.call(null,p)),d3_cljs$fractal_tree$grow.call(null,d3_cljs.fractal_tree.make_right.call(null,p)));
}
});
d3_cljs.fractal_tree.tree = (function d3_cljs$fractal_tree$tree(){
cljs.core.reset_BANG_.call(null,d3_cljs.fractal_tree.id_counter,(0));

return d3_cljs.fractal_tree.grow.call(null,cljs.core.assoc.call(null,d3_cljs.fractal_tree.seed,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"max-depth","max-depth",127060793).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d3_cljs.fractal_tree.conf))));
});
d3_cljs.fractal_tree.update_conf = (function d3_cljs$fractal_tree$update_conf(dx,dy){

var da = dy;
var bias = (0.5 + (0.5 * dx));
return cljs.core.swap_BANG_.call(null,d3_cljs.fractal_tree.conf,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"da","da",-742035943),da,new cljs.core.Keyword(null,"rotation-bias","rotation-bias",959640627),bias], null));
});

//# sourceMappingURL=fractal_tree.js.map
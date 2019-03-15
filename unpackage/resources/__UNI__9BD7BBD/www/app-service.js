var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'64996382'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'722abd76'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'722abd76-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'64996382'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'722abd76'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7f01058a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7f01058a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a7aa9354'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'a7aa9354'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'613c9cd4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'613c9cd4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','/component/uni-load-more.vue.wxml','./component/uni-load-more.vue.wxml','./pages/list/list.vue.wxml','./pages/list/list.wxml','./list.vue.wxml','./pages/login/login.vue.wxml','./pages/login/login.wxml','./login.vue.wxml','./pages/main/main.vue.wxml','./pages/main/main.wxml','./main.vue.wxml','./pages/user/user.vue.wxml','./pages/user/user.wxml','./user.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
d_[x[2]]["64996382"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':64996382'
r.wxVkey=b
gg.f=$gdc(f_["./component/uni-load-more.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
d_[x[3]]["722abd76"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[3]+':722abd76'
r.wxVkey=b
gg.f=$gdc(f_["./pages/list/list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/list/list.vue.wxml:template:1:1703")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[3],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[3],1,1774)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=e_[x[3]].i
_ai(fE,x[1],e_,x[3],1,1)
fE.pop()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[4]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var hG=e_[x[4]].i
_ai(hG,x[5],e_,x[4],1,1)
var oH=_v()
_(r,oH)
cs.push("./pages/list/list.wxml:template:2:6")
var cI=_oz(z,1,e,s,gg)
var oJ=_gd(x[4],cI,e_,d_)
if(oJ){
var lK=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[4],2,18)
cs.pop()
hG.pop()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[6]]={}
d_[x[6]]["7f01058a"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[6]+':7f01058a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[6]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var eN=e_[x[7]].i
_ai(eN,x[8],e_,x[7],1,1)
var bO=_v()
_(r,bO)
cs.push("./pages/login/login.wxml:template:2:6")
var oP=_oz(z,1,e,s,gg)
var xQ=_gd(x[7],oP,e_,d_)
if(xQ){
var oR=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[7],2,18)
cs.pop()
eN.pop()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[9]]={}
d_[x[9]]["a7aa9354"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[9]+':a7aa9354'
r.wxVkey=b
gg.f=$gdc(f_["./pages/main/main.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[9]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var hU=e_[x[10]].i
_ai(hU,x[11],e_,x[10],1,1)
var oV=_v()
_(r,oV)
cs.push("./pages/main/main.wxml:template:2:6")
var cW=_oz(z,1,e,s,gg)
var oX=_gd(x[10],cW,e_,d_)
if(oX){
var lY=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oV.wxXCkey=3
oX(lY,lY,oV,gg)
gg.f=cur_globalf
}
else _w(cW,x[10],2,18)
cs.pop()
hU.pop()
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[x[11]],ic:[]}
d_[x[12]]={}
d_[x[12]]["613c9cd4"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[12]+':613c9cd4'
r.wxVkey=b
gg.f=$gdc(f_["./pages/user/user.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[12]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var e2=e_[x[13]].i
_ai(e2,x[14],e_,x[13],1,1)
var b3=_v()
_(r,b3)
cs.push("./pages/user/user.wxml:template:2:6")
var o4=_oz(z,1,e,s,gg)
var x5=_gd(x[13],o4,e_,d_)
if(x5){
var o6=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[13],2,18)
cs.pop()
e2.pop()
return r
}
e_[x[13]]={f:m9,j:[],i:[],ti:[x[14]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/login/login","pages/main/main","pages/list/list","pages/user/user"],"subPackages":[],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"usingComponents":{},"tabBar":{"color":"#7a7e83","selectedColor":"#24aa42","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","text":"精选","iconPath":"static/tabbarImg/jingxuan_hui.png","selectedIconPath":"static/tabbarImg/jingxuan_liang.png"},{"pagePath":"pages/list/list","text":"榜单","iconPath":"static/tabbarImg/bangdan_hui.png","selectedIconPath":"static/tabbarImg/bangdan_liang.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/tabbarImg/wode_hui.png","selectedIconPath":"static/tabbarImg/wode_liang.png"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"gamePlatApp"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"], { "4f0d": function f0d(n, e, t) {}, "67ed": function ed(n, e, t) {"use strict";var o = t("4f0d"),r = t.n(o);r.a;}, "8b10": function b10(n, e, t) {"use strict";Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;var o = { onLaunch: function onLaunch() {console.log("App Launch"), plus.screen.lockOrientation("portrait-primary");}, onShow: function onShow() {console.log("App Show");}, onHide: function onHide() {console.log("App Hide");} };e.default = o;}, bd72: function bd72(n, e, t) {"use strict";t.r(e);var o = t("f662");for (var r in o) {"default" !== r && function (n) {t.d(e, n, function () {return o[n];});}(r);}t("67ed");var u,c,f = t("2877"),a = Object(f["a"])(o["default"], u, c, !1, null, null, null);e["default"] = a.exports;}, e3e0: function e3e0(n, e, t) {"use strict";t("bdf4");var o = u(t("f3d3")),r = u(t("bd72"));function u(n) {return n && n.__esModule ? n : { default: n };}function c(n) {for (var e = 1; e < arguments.length; e++) {var t = null != arguments[e] ? arguments[e] : {},o = Object.keys(t);"function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function (n) {return Object.getOwnPropertyDescriptor(t, n).enumerable;}))), o.forEach(function (e) {f(n, e, t[e]);});}return n;}function f(n, e, t) {return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;}o.default.config.productionTip = !1, r.default.mpType = "app";var a = new o.default(c({}, r.default));a.$mount();}, f662: function f662(n, e, t) {"use strict";t.r(e);var o = t("8b10"),r = t.n(o);for (var u in o) {"default" !== u && function (n) {t.d(e, n, function () {return o[n];});}(u);}e["default"] = r.a;} }, [["e3e0", "common/runtime", "common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(function (e) {function r(r) {for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;}for (n in a) {Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);}c && c(r);while (s.length) {s.shift()();}return u.push.apply(u, f || []), t();}function t() {for (var e, r = 0; r < u.length; r++) {for (var t = u[r], n = !0, i = 1; i < t.length; i++) {var a = t[i];0 !== o[a] && (n = !1);}n && (u.splice(r--, 1), e = l(l.s = t[0]));}return e;}var n = {},o = { "common/runtime": 0 },u = [];function l(r) {if (n[r]) return n[r].exports;var t = n[r] = { i: r, l: !1, exports: {} };return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;}l.m = e, l.c = n, l.d = function (e, r, t) {l.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });}, l.r = function (e) {"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });}, l.t = function (e, r) {if (1 & r && (e = l(e)), 8 & r) return e;if (4 & r && "object" === typeof e && e && e.__esModule) return e;var t = Object.create(null);if (l.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) {l.d(t, n, function (r) {return e[r];}.bind(null, n));}return t;}, l.n = function (e) {var r = e && e.__esModule ? function () {return e["default"];} : function () {return e;};return l.d(r, "a", r), r;}, l.o = function (e, r) {return Object.prototype.hasOwnProperty.call(e, r);}, l.p = "/";var i = global["webpackJsonp"] = global["webpackJsonp"] || [],a = i.push.bind(i);i.push = r, i = i.slice();for (var f = 0; f < i.length; f++) {r(i[f]);}var c = a;t();})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var p=u.render;u.render=function(t,e){return c.call(e),p(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),o=n.n(r);function i(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),"function"===typeof o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)r=o[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new o.a(t);this.$vm=n;var r=n.$root;r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var i=r.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);i(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);i(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);i(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},bdf4:function(t,e,n){},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!==typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"===typeof r&&"object"===typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var p=s[i];t(e,n+"."+p,r[p],o[p])}}}else r!==o&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],p=1,f=c.length;p<f&&void 0!==u;++p)u=u[c[p]];t(o,s,e[s],u)}return o}function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var p=Object.prototype.toString;function f(t){return"[object Object]"===p.call(t)}function l(t){return"[object RegExp]"===p.call(t)}function d(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var _=y("key,ref,slot,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function $(t,e){return m.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,A=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),O=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),x=/([^-])([A-Z])/g,k=b(function(t){return t.replace(x,"$1-$2").replace(x,"$1-$2").toLowerCase()});function C(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function j(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function S(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&S(e,t[n]);return e}function T(t,e,n){}var I=function(t,e,n){return!1},D=function(t){return t};function E(t,e){var r=u(t),o=u(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function N(t,e){for(var n=0;n<t.length;n++)if(E(t[n],e))return n;return-1}function R(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var M="data-server-rendered",B=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],L={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:T,parsePlatformTagName:D,mustUseProp:I,_lifecycleHooks:V},U=Object.freeze({});function F(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var W=/[^\w.$]/;function z(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J=T;function q(t,e,n){if(L.errorHandler)L.errorHandler.call(null,t,e,n);else{if(!G||"undefined"===typeof console)throw t;console.error(t)}}var K,X="__proto__"in{},G="undefined"!==typeof window,Z=["mpvue-runtime"].join(),Q=(Z&&/msie|trident/.test(Z),Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),Y=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)),tt=(Z&&/chrome\/\d+/.test(Z),{}.watch);if(G)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===K&&(K=!G&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),K},rt=G&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function o(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ot(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(o).catch(a),Y&&setTimeout(T)}}else t=function(){setTimeout(o,0)};return function(o,i){var a;if(e.push(function(){if(o)try{o.call(i)}catch(n){q(n,i,"nextTick")}else a&&a(i)}),r||(r=!0,t()),!o&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){g(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var pt=[];function ft(t){ut.target&&pt.push(ut.target),ut.target=t}function lt(){ut.target=pt.pop()}var dt=Array.prototype,ht=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];H(ht,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(ht),yt={shouldConvert:!0},_t=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)){var e=X?gt:mt;e(t,ht,vt),this.observeArray(t)}else this.walk(t)};function gt(t,e,n){t.__proto__=e}function mt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function $t(t,e){var n;if(u(t))return $(t,"__ob__")&&t.__ob__ instanceof _t?n=t.__ob__:yt.shouldConvert&&!nt()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new _t(t)),e&&n&&n.vmCount++,n}function bt(t,e,n,r,o){var i=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&$t(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&Ot(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!o&&$t(e),i.notify())}})}}function wt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if($(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(bt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function At(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||$(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ot(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ot(e)}_t.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)bt(t,e[n],t[e[n]])},_t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)$t(t[e])};var xt=L.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],r=t[n],o=e[n],$(t,n)?f(r)&&f(o)&&kt(r,o):wt(t,n,o);return t}function Ct(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,o="function"===typeof t?t.call(n):void 0;return r?kt(r,o):o}:void 0:e?t?function(){return kt("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function jt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function St(t,e){var n=Object.create(t||null);return e?S(n,e):n}xt.data=function(t,e,n){return n?Ct(t,e,n):e&&"function"!==typeof e?t:Ct.call(this,t,e)},V.forEach(function(t){xt[t]=jt}),B.forEach(function(t){xt[t+"s"]=St}),xt.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in S(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},xt.props=xt.methods=xt.inject=xt.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return S(n,t),S(n,e),n},xt.provide=Ct;var Pt=function(t,e){return void 0===e?t:e};function Tt(t){var e=t.props;if(e){var n,r,o,i={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(o=A(r),i[o]={type:null})}else if(f(e))for(var a in e)r=e[a],o=A(a),i[o]=f(r)?r:{type:r};t.props=i}}function It(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function Dt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Et(t,e,n){"function"===typeof e&&(e=e.options),Tt(e),It(e),Dt(e);var r=e.extends;if(r&&(t=Et(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Et(t,e.mixins[o],n);var a,s={};for(a in t)c(a);for(a in e)$(t,a)||c(a);function c(r){var o=xt[r]||Pt;s[r]=o(t[r],e[r],n,r)}return s}function Nt(t,e,n,r){if("string"===typeof n){var o=t[e];if($(o,n))return o[n];var i=A(n);if($(o,i))return o[i];var a=O(i);if($(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Rt(t,e,n,r){var o=e[t],i=!$(n,t),a=n[t];if(Vt(Boolean,o.type)&&(i&&!$(o,"default")?a=!1:Vt(String,o.type)||""!==a&&a!==k(t)||(a=!0)),void 0===a){a=Mt(r,o,t);var s=yt.shouldConvert;yt.shouldConvert=!0,$t(a),yt.shouldConvert=s}return a}function Mt(t,e,n){if($(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Bt(e.type)?r.call(t):r}}function Bt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Vt(t,e){if(!Array.isArray(e))return Bt(e)===Bt(t);for(var n=0,r=e.length;n<r;n++)if(Bt(e[n])===Bt(t))return!0;return!1}var Lt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Ut={child:{}};Ut.child.get=function(){return this.componentInstance},Object.defineProperties(Lt.prototype,Ut);var Ft=function(t){void 0===t&&(t="");var e=new Lt;return e.text=t,e.isComment=!0,e};function Ht(t){return new Lt(void 0,void 0,void 0,String(t))}function Wt(t){var e=new Lt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function zt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Wt(t[r]);return n}var Jt,qt=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Kt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Xt(t,e,n,r,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=qt(a),o(s)||(o(c)?(o(s.fns)&&(s=t[a]=Kt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)o(t[a])&&(u=qt(a),r(u.name,e[a],u.capture))}function Gt(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in r){var p=k(u);Zt(a,c,u,p,!0)||Zt(a,s,u,p,!1)}return a}}function Zt(t,e,n,r,o){if(i(e)){if($(e,n))return t[n]=e[n],o||delete e[n],!0;if($(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Qt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Yt(t){return c(t)?[Ht(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,u=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=u[u.length-1],Array.isArray(r)?u.push.apply(u,ee(r,(e||"")+"_"+n)):c(r)?te(s)?s.text+=String(r):""!==r&&u.push(Ht(r)):te(r)&&te(s)?u[u.length-1]=Ht(s.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),u.push(r)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function re(t,e,n,r,o){var i=Ft();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function oe(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},p=R(function(n){t.resolved=ne(n,e),s||c()}),f=R(function(e){i(t.errorComp)&&(t.error=!0,c())}),l=t(p,f);return u(l)&&("function"===typeof l.then?o(t.resolved)&&l.then(p,f):i(l.component)&&"function"===typeof l.component.then&&(l.component.then(p,f),i(l.error)&&(t.errorComp=ne(l.error,e)),i(l.loading)&&(t.loadingComp=ne(l.loading,e),0===l.delay?t.loading=!0:setTimeout(function(){o(t.resolved)&&o(t.error)&&(t.loading=!0,c())},l.delay||200)),i(l.timeout)&&setTimeout(function(){o(t.resolved)&&f(null)},l.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?Jt.$once(t,e):Jt.$on(t,e)}function ce(t,e){Jt.$off(t,e)}function ue(t,e,n){Jt=t,Xt(e,n||{},se,ce,t)}function pe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?j(r):r;for(var o=j(arguments,1),i=0,a=r.length;i<a;i++)try{r[i].apply(e,o)}catch(n){q(n,e,'event handler for "'+t+'"')}}return e}}function fe(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(le)||(n.default=r),n}function le(t){return t.isComment||" "===t.text}function de(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?de(t[n],e):e[t[n].key]=t[n].fn;return e}var he=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ye(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&we(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=he;he=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),he=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){we(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),we(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function _e(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Ft),we(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new Re(t,r,T),n=!1,null==t.$vnode&&(t._isMounted=!0,we(t,"mounted")),t}function ge(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==U);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){yt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Rt(u,t.$options.props,e,t)}yt.shouldConvert=!0,t.$options.propsData=e}if(n){var p=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,p)}i&&(t.$slots=fe(o,r.context),t.$forceUpdate())}function me(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function $e(t,e){if(e){if(t._directInactive=!1,me(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)$e(t.$children[n]);we(t,"activated")}}function be(t,e){if((!e||(t._directInactive=!0,!me(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);we(t,"deactivated")}}function we(t,e){var r=t.$options[e];if(r)for(var o=0,i=r.length;o<i;o++)try{r[o].call(t)}catch(n){q(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var Ae=[],Oe=[],xe={},ke=!1,Ce=!1,je=0;function Se(){je=Ae.length=Oe.length=0,xe={},ke=Ce=!1}function Pe(){var t,e;for(Ce=!0,Ae.sort(function(t,e){return t.id-e.id}),je=0;je<Ae.length;je++)t=Ae[je],e=t.id,xe[e]=null,t.run();var n=Oe.slice(),r=Ae.slice();Se(),De(n),Te(r),rt&&L.devtools&&rt.emit("flush")}function Te(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&we(r,"updated")}}function Ie(t){t._inactive=!1,Oe.push(t)}function De(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,$e(t[e],!0)}function Ee(t){var e=t.id;if(null==xe[e]){if(xe[e]=!0,Ce){var n=Ae.length-1;while(n>je&&Ae[n].id>t.id)n--;Ae.splice(n+1,0,t)}else Ae.push(t);ke||(ke=!0,st(Pe))}}var Ne=0,Re=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ne,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Re.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;q(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Be(t),lt(),this.cleanupDeps()}return t},Re.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Re.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Re.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ee(this)},Re.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){q(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Re.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Re.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},Re.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Me=new it;function Be(t){Me.clear(),Ve(t,Me)}function Ve(t,e){var n,r,o=Array.isArray(t);if((o||u(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)Ve(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Ve(t[r[n]],e)}}}var Le={enumerable:!0,configurable:!0,get:T,set:T};function Ue(t,e,n){Le.get=function(){return this[e][n]},Le.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Le)}function Fe(t){t._watchers=[];var e=t.$options;e.props&&He(t,e.props),e.methods&&Ge(t,e.methods),e.data?We(t):$t(t._data={},!0),e.computed&&qe(t,e.computed),e.watch&&e.watch!==tt&&Ze(t,e.watch)}function He(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;yt.shouldConvert=i;var a=function(i){o.push(i);var a=Rt(i,e,n,t);bt(r,i,a),i in t||Ue(t,"_props",i)};for(var s in e)a(s);yt.shouldConvert=!0}function We(t){var e=t.$options.data;e=t._data="function"===typeof e?ze(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];r&&$(r,i)||F(i)||Ue(t,"_data",i)}$t(e,!0)}function ze(t,e){try{return t.call(e)}catch(n){return q(n,e,"data()"),{}}}var Je={lazy:!0};function qe(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"===typeof o?o:o.get;n[r]=new Re(t,i,T,Je),r in t||Ke(t,r,o)}}function Ke(t,e,n){"function"===typeof n?(Le.get=Xe(e),Le.set=T):(Le.get=n.get?!1!==n.cache?Xe(e):n.get:T,Le.set=n.set?n.set:T),Object.defineProperty(t,e,Le)}function Xe(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Ge(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?T:C(e[n],t)}function Ze(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Qe(t,n,r[o]);else Qe(t,n,r)}}function Qe(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Ye(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=wt,t.prototype.$delete=At,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return Qe(r,t,e,n);n=n||{},n.user=!0;var o=new Re(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(yt.shouldConvert=!1,Object.keys(e).forEach(function(n){bt(t,n,e[n])}),yt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=Rt(c,s,e||{});else i(n.attrs)&&on(a,n.attrs),i(n.props)&&on(a,n.props);var u=Object.create(r),p=function(t,e,n,r){return vn(u,t,e,n,r,!0)},f=t.options.render.call(null,p,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return fe(o,r)}});return f instanceof Lt&&(f.functionalContext=r,f.functionalOptions=t.options,n.slot&&((f.data||(f.data={})).slot=n.slot)),f}function on(t,e){for(var n in e)t[A(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var o=t.componentInstance=un(t,he,n,r);o.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;ge(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,we(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ie(n):$e(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?be(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,r,s){if(!o(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var p;if(o(t.cid)&&(p=t,t=oe(p,c,n),void 0===t))return re(p,e,n,r,s);e=e||{},Dn(t),i(e.model)&&ln(t.options,e);var f=Gt(e,t,s);if(a(t.options.functional))return rn(t,f,e,n,r);var l=e.on;if(a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}pn(e);var h=t.options.name||s,v=new Lt("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:l,tag:s,children:r},p);return v}}}function un(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function pn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],o=an[n];t.hook[n]=r?fn(o,r):o}}function fn(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}var dn=1,hn=2;function vn(t,e,n,r,o,i){return(Array.isArray(n)||c(n))&&(o=r,r=n,n=void 0),a(i)&&(o=hn),yn(t,e,n,r,o)}function yn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Ft();if(i(n)&&i(n.is)&&(e=n.is),!e)return Ft();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===hn?r=Yt(r):o===dn&&(r=Qt(r)),"string"===typeof e)?(s=L.getTagNamespace(e),a=L.isReservedTag(e)?new Lt(L.parsePlatformTagName(e),n,r,void 0,void 0,t):i(c=Nt(t.$options,"components",e))?cn(c,n,t,r,e):new Lt(e,n,r,void 0,void 0,t)):a=cn(e,n,t,r);return i(a)?(s&&_n(a,s),a):Ft()}function _n(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];i(a.tag)&&o(a.ns)&&_n(a,e)}}function gn(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)&&(n._isVList=!0),n}function mn(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=S(S({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function $n(t){return Nt(this.$options,"filters",t,!0)||D}function bn(t,e,n){var r=L.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function wn(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=P(n));var a=function(a){if("class"===a||"style"===a||_(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||L.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],o)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function An(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?zt(n):Wt(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),xn(n,"__static__"+t,!1),n)}function On(t,e,n){return xn(t,"__once__"+e+(n?"_"+n:""),!0),t}function xn(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&kn(t[r],e+"_"+r,n);else kn(t,e,n)}function kn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Cn(t,e){if(e)if(f(e)){var n=t.on=t.on?S({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function jn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=fe(t.$options._renderChildren,n),t.$scopedSlots=U,t._c=function(e,n,r,o){return vn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vn(t,e,n,r,o,!0)};var r=e&&e.data;bt(t,"$attrs",r&&r.attrs,null,!0),bt(t,"$listeners",r&&r.on,null,!0)}function Sn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=zt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||U,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){q(n,e,"render function"),t=e._vnode}return t instanceof Lt||(t=Ft()),t.parent=a,t},t.prototype._o=On,t.prototype._n=v,t.prototype._s=h,t.prototype._l=gn,t.prototype._t=mn,t.prototype._q=E,t.prototype._i=N,t.prototype._m=An,t.prototype._f=$n,t.prototype._k=bn,t.prototype._b=wn,t.prototype._v=Ht,t.prototype._e=Ft,t.prototype._u=de,t.prototype._g=Cn}var Pn=0;function Tn(t){t.prototype._init=function(t){var e=this;e._uid=Pn++,e._isVue=!0,t&&t._isComponent?In(e,t):e.$options=Et(Dn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),jn(e),we(e,"beforeCreate"),en(e),Fe(e),tn(e),we(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function In(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Dn(t){var e=t.options;if(t.super){var n=Dn(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=En(t);o&&S(t.extendOptions,o),e=t.options=Et(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function En(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Nn(n[i],r[i],o[i]));return e}function Nn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Rn(t){this._init(t)}function Mn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=j(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Bn(t){t.mixin=function(t){return this.options=Et(this.options,t),this}}function Vn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Et(n.options,t),a["super"]=n,a.options.props&&Ln(a),a.options.computed&&Un(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=S({},a.options),o[r]=a,a}}function Ln(t){var e=t.options.props;for(var n in e)Ue(t.prototype,"_props",n)}function Un(t){var e=t.options.computed;for(var n in e)Ke(t.prototype,n,e[n])}function Fn(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}Tn(Rn),Ye(Rn),pe(Rn),ye(Rn),Sn(Rn);var Hn=[String,RegExp,Array];function Wn(t){return t&&(t.Ctor.options.name||t.tag)}function zn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Jn(t,e,n){for(var r in t){var o=t[r];if(o){var i=Wn(o.componentOptions);i&&!n(i)&&(o!==e&&qn(o),t[r]=null)}}}function qn(t){t&&t.componentInstance.$destroy()}var Kn={name:"keep-alive",abstract:!0,props:{include:Hn,exclude:Hn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)qn(t.cache[e])},watch:{include:function(t){Jn(this.cache,this._vnode,function(e){return zn(t,e)})},exclude:function(t){Jn(this.cache,this._vnode,function(e){return!zn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Wn(e);if(n&&(this.include&&!zn(this.include,n)||this.exclude&&zn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Xn={KeepAlive:Kn};function Gn(t){var e={get:function(){return L}};Object.defineProperty(t,"config",e),t.util={warn:J,extend:S,mergeOptions:Et,defineReactive:bt},t.set=wt,t.delete=At,t.nextTick=st,t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,S(t.options.components,Xn),Mn(t),Bn(t),Vn(t),Fn(t)}Gn(Rn),Object.defineProperty(Rn.prototype,"$isServer",{get:nt}),Object.defineProperty(Rn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Rn.version="2.4.1",Rn.mpvueVersion="1.0.12";var Zn=y("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Qn=y("style,class");y("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),y("embed,img,image,input,link,meta",!0);function Yn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},or={};function ir(t,e){return or}function ar(t,e){return or}function sr(t){return or}function cr(t){return or}function ur(t,e,n){}function pr(t,e){}function fr(t,e){}function lr(t){return or}function dr(t){return or}function hr(t){return"div"}function vr(t,e){return or}function yr(t,e,n){return or}var _r=Object.freeze({createElement:ir,createElementNS:ar,createTextNode:sr,createComment:cr,insertBefore:ur,removeChild:pr,appendChild:fr,parentNode:lr,nextSibling:dr,tagName:hr,setTextContent:vr,setAttribute:yr}),gr={create:function(t,e){mr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(mr(t,!0),mr(e))},destroy:function(t){mr(t,!0)}};function mr(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?g(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var $r=new Lt("",{},[]),br=["create","activate","update","remove","destroy"];function wr(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&Ar(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&o(e.asyncFactory.error))}function Ar(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}function Or(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function xr(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<br.length;++e)for(r[br[e]]=[],n=0;n<s.length;++n)i(s[n][br[e]])&&r[br[e]].push(s[n][br[e]]);function p(t){return new Lt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&l(t)}return n.listeners=e,n}function l(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function d(t,e,n,r,o){if(t.isRootInsert=!o,!h(t,e,n,r)){var s=t.data,c=t.children,p=t.tag;i(p)?(t.elm=t.ns?u.createElementNS(t.ns,p):u.createElement(p,t),w(t),m(t,c,e),i(s)&&b(t,e),g(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),g(n,t.elm,r)):(t.elm=u.createTextNode(t.text),g(n,t.elm,r))}}function h(t,e,n,r){var o=t.data;if(i(o)){var s=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1,n,r),i(t.componentInstance))return v(t,e),a(s)&&_(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,$(t)?(b(t,e),w(t)):(mr(t),e.push(t))}function _(t,e,n,o){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a]($r,s);e.push(s);break}g(n,t.elm,o)}function g(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function m(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function $(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function b(t,n){for(var o=0;o<r.create.length;++o)r.create[o]($r,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create($r,t),i(e.insert)&&n.push(t))}function w(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=he)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function A(t,e,n,r,o,i){for(;r<=o;++r)d(n[r],i,t,e)}function O(t){var e,n,o=t.data;if(i(o))for(i(e=o.hook)&&i(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)O(t.children[n])}function x(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(k(o),O(o)):l(o.elm))}}function k(t,e){if(i(e)||i(t.data)){var n,o=r.remove.length+1;for(i(e)?e.listeners+=o:e=f(t.elm,o),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&k(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else l(t.elm)}function C(t,e,n,r,a){var s,c,p,f,l=0,h=0,v=e.length-1,y=e[0],_=e[v],g=n.length-1,m=n[0],$=n[g],b=!a;while(l<=v&&h<=g)o(y)?y=e[++l]:o(_)?_=e[--v]:wr(y,m)?(j(y,m,r),y=e[++l],m=n[++h]):wr(_,$)?(j(_,$,r),_=e[--v],$=n[--g]):wr(y,$)?(j(y,$,r),b&&u.insertBefore(t,y.elm,u.nextSibling(_.elm)),y=e[++l],$=n[--g]):wr(_,m)?(j(_,m,r),b&&u.insertBefore(t,_.elm,y.elm),_=e[--v],m=n[++h]):(o(s)&&(s=Or(e,l,v)),c=i(m.key)?s[m.key]:null,o(c)?(d(m,r,t,y.elm),m=n[++h]):(p=e[c],wr(p,m)?(j(p,m,r),e[c]=void 0,b&&u.insertBefore(t,p.elm,y.elm),m=n[++h]):(d(m,r,t,y.elm),m=n[++h])));l>v?(f=o(n[g+1])?null:n[g+1].elm,A(t,f,n,h,g,r)):h>g&&x(t,e,l,v)}function j(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?T(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var p,f=e.data;i(f)&&i(p=f.hook)&&i(p=p.prepatch)&&p(t,e);var l=t.children,d=e.children;if(i(f)&&$(e)){for(p=0;p<r.update.length;++p)r.update[p](t,e);i(p=f.hook)&&i(p=p.update)&&p(t,e)}o(e.text)?i(l)&&i(d)?l!==d&&C(c,l,d,n,s):i(d)?(i(t.text)&&u.setTextContent(c,""),A(c,null,d,0,d.length-1,n)):i(l)?x(c,l,0,l.length-1):i(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),i(f)&&i(p=f.hook)&&i(p=p.postpatch)&&p(t,e)}}}function S(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var P=y("attrs,style,class,staticClass,staticStyle,key");function T(t,n,r){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var o=n.tag,s=n.data,c=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,r),!0;if(i(o)){if(i(c))if(t.hasChildNodes()){for(var u=!0,p=t.firstChild,f=0;f<c.length;f++){if(!p||!T(p,c[f],r)){u=!1;break}p=p.nextSibling}if(!u||p)return!1}else m(n,c,r);if(i(s))for(var l in s)if(!P(l)){b(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,f){if(!o(e)){var l=!1,h=[];if(o(t))l=!0,d(e,h,c,f);else{var v=i(t.nodeType);if(!v&&wr(t,e))j(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(M)&&(t.removeAttribute(M),n=!0),a(n)&&T(t,e,h))return S(e,h,!0),t;t=p(t)}var y=t.elm,_=u.parentNode(y);if(d(e,h,y._leaveCb?null:_,u.nextSibling(y)),i(e.parent)){var g=e.parent;while(g)g.elm=e.elm,g=g.parent;if($(e))for(var m=0;m<r.create.length;++m)r.create[m]($r,e.parent)}i(_)?x(_,[t],0,0):i(t.tag)&&O(t)}}return S(e,h,l),e.elm}i(t)&&O(t)}}var kr=[gr],Cr=xr({nodeOps:_r,modules:kr});function jr(){Cr.apply(this,arguments),this.$updateDataToMP()}function Sr(t,e,r){var o,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{o=i[a].call(t,r)}catch(n){q(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return Sr(t,e,r)}),o}function Pr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Tr(t,e,n){if(t){var r,o,i;if(Array.isArray(t)){r=t.length;while(r--)o=t[r],"string"===typeof o&&(i=A(o),e[i]={type:null})}else if(f(t))for(var a in t)o=t[a],i=A(a),e[i]=f(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[i]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Ir(t){var e=t.$options.properties,n=t.$options.props,r={};return Tr(e,r,t),Tr(n,r,t),r}function Dr(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(Ue(t,"_mpProps",n),e[n]=void 0)}),$t(e,!0)}function Er(t,n){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?Sr(this,"onLaunch",o.appOptions):Sr(this,"onLoad",o.query),n();if(o.mpType=t,o.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,Sr(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,Sr(r,"onShow",t)},onHide:function(){o.status="hide",Sr(r,"onHide")},onError:function(t){Sr(r,"onError",t)},onUniNViewMessage:function(t){Sr(r,"onUniNViewMessage",t)}});else if("component"===t)Dr(r),e.Component({properties:Ir(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",Sr(r,"attached")},ready:function(){o.status="ready",Sr(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){Sr(r,"moved")},detached:function(){o.status="detached",Sr(r,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,o.page=this,o.query=t,o.status="load",Pr(i,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),Sr(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,o.page=this,o.status="show",Sr(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",Sr(r,"onReady"),n()},onHide:function(){o.status="hide",Sr(r,"onHide")},onUnload:function(){o.status="unload",Sr(r,"onUnload"),o.page=null},onPullDownRefresh:function(){Sr(r,"onPullDownRefresh")},onReachBottom:function(){Sr(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return Sr(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){Sr(r,"onPageScroll",t)},onTabItemTap:function(t){Sr(r,"onTabItemTap",t)}})}}function Nr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Rr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Rr(r,e):e):e}function Mr(t){var e=Rr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Nr(t),{$k:n,$kk:n+",",$p:e}),o="$root."+n,i={};return i[o]=r,i}function Br(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Br(t,e)}),Object.assign(e,Mr(t))}function Vr(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,p){var f=Date.now();s||!1!==n.leading||(s=f);var l=e-(f-s);return r=this,o=o?[u,Object.assign(o[1],p)]:[u,p],l<=0||l>e?(clearTimeout(a),a=null,s=f,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,l)),i}}var Lr=Vr(function(t,e){t(e)},50);function Ur(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var o=n.page;if("app"!==r&&o&&"function"===typeof o.setData)return o}function Fr(){var t=Ur(this);if(t){var e=JSON.parse(JSON.stringify(Mr(this)));Lr(t.setData.bind(t),r(e,t.data))}}function Hr(){var t=Ur(this);if(t){var e=Br(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Wr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r],i=nr(o);if(i===e)return t=o,t}return t},t):t}function zr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t],i=Array.isArray(o)?o:[o];i.forEach(function(t){r=r.concat(zr(t,e,n))})}):a.forEach(function(t){r=r.concat(zr(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function Jr(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=o.x,c=o.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:T,preventDefault:T};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}function qr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=t.currentTarget,i=o||r,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=Wr(e,s.split(","));if(u){var p=rr[n]||[n],f=zr(u._vnode,c,p);if(f.length){var l=Jr(t);if(1===f.length){var d=f[0](l);return d}f.forEach(function(t){return t(l)})}}}return Rn.config.mustUseProp=Yn,Rn.config.isReservedTag=Zn,Rn.config.isReservedAttr=Qn,Rn.config.getTagNamespace=tr,Rn.config.isUnknownElement=er,Rn.prototype.__patch__=jr,Rn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return _e(n,void 0,void 0)})}return _e(this,void 0,void 0)},Rn.prototype._initMP=Er,Rn.prototype.$updateDataToMP=Fr,Rn.prototype._initDataToMP=Hr,Rn.prototype.$handleProxyWithVue=qr,Rn})}).call(this,n("c8ba"))}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0233":function(t,e,n){"use strict";n("bdf4");var a=c(n("b0ce")),i=c(n("4743"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},1774:function(t,e,n){t.exports=n.p+"static/img/loginbg.8293ae12.png"},4743:function(t,e,n){"use strict";n.r(e);var a=n("a83c"),i=n("c524");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("88cb");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"2704f0bc",null);e["default"]=s.exports},"88cb":function(t,e,n){"use strict";var a=n("ed5e"),i=n.n(a);i.a},a83c:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"loginbg",style:{backgroundImage:"url("+t.img+")"}},[t._m(0),t._m(1),n("view",{staticClass:"registe"},[t._v("注册")]),n("view",{staticClass:"loginBtn"},[n("button",[t._v("登录")])],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"logo"},[n("image",{attrs:{src:"../../static/img/log/loginIcon.png",mode:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"inp"},[n("view",{staticClass:"inputCon"},[n("image",{attrs:{src:"../../static/img/log/tel.png",mode:""}}),n("input",{attrs:{type:"text",placeholder:"请输入您的手机号码"}})]),n("view",{staticClass:"inputCon"},[n("image",{attrs:{src:"../../static/img/log/lock.png",mode:""}}),n("input",{attrs:{type:"text",placeholder:"请输入您的密码"}})])])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},c524:function(t,e,n){"use strict";n.r(e);var a=n("dff2"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},dff2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{bg:n("1774")}}};e.default=a},ed5e:function(t,e,n){}},[["0233","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/main/main';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/main.js';

define('pages/main/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"0924":function(i,a,n){"use strict";n("bdf4");var e=m(n("b0ce")),t=m(n("0ed0"));function m(i){return i&&i.__esModule?i:{default:i}}Page((0,e.default)(t.default))},"0ed0":function(i,a,n){"use strict";n.r(a);var e=n("8f1a"),t=n("7268");for(var m in t)"default"!==m&&function(i){n.d(a,i,function(){return t[i]})}(m);n("c9ed");var o=n("2877"),c=Object(o["a"])(t["default"],e["a"],e["b"],!1,null,"1c8bae75",null);a["default"]=c.exports},2093:function(i,a,n){},"2d24":function(i,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n("c99a"),t={data:function(){return{searchVal:"",title:"uni-load-more",list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(){console.log(e.data.length),this.list=e.data},components:{}};a.default=t},7268:function(i,a,n){"use strict";n.r(a);var e=n("2d24"),t=n.n(e);for(var m in e)"default"!==m&&function(i){n.d(a,i,function(){return e[i]})}(m);a["default"]=t.a},"8f1a":function(i,a,n){"use strict";var e=function(){var i=this,a=i.$createElement,n=i._self._c||a;return n("view",[i._m(0),n("view",{staticClass:"title_bar"},[i._m(1),n("view",{staticClass:"search_input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:i.searchVal,expression:"searchVal"}],attrs:{type:"search",placeholder:"查找游戏",eventid:"a7aa9354-0"},domProps:{value:i.searchVal},on:{input:function(a){a.target.composing||(i.searchVal=a.target.value)}}})]),n("view",{staticClass:"search_icon"},[n("icon",{attrs:{type:"search",size:"20",color:"#333"}})],1)]),n("view",[n("scroll-view",{staticClass:"list_view"},i._l(i.list,function(a,e){return n("view",{key:e,staticClass:"list_item clearfix"},[n("text",{staticClass:"item_content"},[i._v(i._s(a.descrip))]),n("view",{staticClass:"item_bg"},[n("image",{attrs:{"lazy-load":"",src:a.img_url,mode:""}}),n("view",{staticClass:"item_intro"},[n("view",{staticClass:"item_icon posabs"},[n("image",{attrs:{"lazy-load":"",src:a.icon,mode:""}})]),n("view",{staticClass:"item_name posabs"},[n("view",{staticClass:"name"},[n("text",[i._v(i._s(a.name))])]),n("view",i._l(a.type,function(a,e){return n("text",{key:e,staticClass:"type"},[i._v(i._s(a)),n("text",[i._v("|")])])}))]),n("view",{staticClass:"item_place posabs"},[n("view",{staticClass:"place_icon"},[n("image",{attrs:{"lazy-load":"",src:"../../static/img/place.png",mode:""}})]),n("view",{staticClass:"place_tp"},[i._v("游戏中心")])])])])])}))],1)])},t=[function(){var i=this,a=i.$createElement,n=i._self._c||a;return n("view",{staticClass:"status_bar"},[n("view",{staticClass:"top_view"})])},function(){var i=this,a=i.$createElement,n=i._self._c||a;return n("view",{staticClass:"title_logo"},[n("image",{attrs:{src:"../../static/tabbarImg/logo.png",mode:""}})])}];n.d(a,"a",function(){return e}),n.d(a,"b",function(){return t})},c99a:function(i){i.exports={data:[{gameid:"112",img_url:"/static/img/main/caolizi.png",icon:"/static/img/main/caoliziicon.jpg",name:"炒栗栗子",type:["经营"],download_number:2e7,descrip:"继承了前作无与伦比的正直与纯洁，在弘扬传统文化的同时，用脑洞给各位带来一场深刻的哲♂学大餐！准备好了吗？"},{gameid:"112",img_url:"/static/img/main/juhuabaoweizhan.png",icon:"/static/img/main/juhuabaoweizhanicon.png",name:"菊花保卫战",type:["塔防","晋级"],download_number:2e7,descrip:"小怪兽疯狂来袭，勇士全力出击。"},{gameid:"112",img_url:"/static/img/main/fennvdexiaoniao.png",icon:"/static/img/main/fennvdexiaoniaoicon.jpg",name:"愤怒的小鸟",type:["愤怒的小鸟","消除"],download_number:2e7,descrip:"《愤怒的小鸟》是一款十分受欢迎的射击游戏，最早在苹果iPhone和iPad上占据过销售排行榜首位，目前被移植到Android平台上。"},{gameid:"112",img_url:"/static/img/main/maokualan.png",icon:"/static/img/main/maokualanicon.jpg",name:"猫跨栏",type:["跑酷","反应力"],download_number:2e7,descrip:"飞越跳过各种不同的跨栏吧喵！ 跨栏越高兴致越高涨喵！"},{gameid:"112",img_url:"/static/img/main/youxicangqilai.png",icon:"/static/img/main/youxicangqilaiicon.png",name:"母亲隐藏我的游戏",type:["塔防","晋级"],download_number:2e7,descrip:"不在这！不在这！也不在这！我的游戏机不见了！ "},{gameid:"112",img_url:"/static/img/main/meishimiaomiao.png",icon:"/static/img/main/miaomiaoaixiaoicon.jpg",name:"美食喵喵喵",type:["消除","猫"],download_number:2e7,descrip:"可爱无敌又憨态可掬的小花喵来了。"},{gameid:"112",img_url:"/static/img/main/baozubaruanmei.png",icon:"/static/img/main/baozoubaruanmeiicon.png",name:"暴走吧软妹军团",type:["反应力","智力"],download_number:2e7,descrip:"《暴走吧软妹军团》是一款以青春校园为背景的超人气RPG手游，融合了人物养成与横版战斗元素。"},{gameid:"112",img_url:"/static/img/main/duidiesanguo.png",icon:"/static/img/main/duidiesanguoicon.png",name:"堆叠三国",type:["三国","智力"],download_number:2e7,descrip:"《堆叠三国》非常独特，是一款慢节奏，微策略，英雄养成，战队配合的智力游戏。请赶快堆叠你的瓷砖，一口气粉碎掉，攻击三国中的大坏蛋！"},{gameid:"112",img_url:"/static/img/main/guaishoulianmeng.png",icon:"/static/img/main/guaishoulianmengicon.jpg",name:"怪兽连萌",type:["连连看","晋级"],download_number:2e7,descrip:"超好玩的消除类休闲益智游戏！有道具辅助、无收费项目，和我一起来消灭怪兽吧，还有让你得高分的开心消消乐攻略哦！"},{gameid:"112",img_url:"/static/img/main/haidixiaoxiao.png",icon:"/static/img/main/haidixiaoxiaoicon.png",name:"海底消消乐",type:["消消乐","晋级"],download_number:2e7,descrip:"突破主流卡牌游戏以回合制站桩输出的传统玩法的全新体验，配合华丽的合体大招享受碰撞攻破敌人的快感；"},{gameid:"112",img_url:"/static/img/main/honglandazuozhan.png",icon:"/static/img/main/honglandazuozhanicon.jpg",name:"红蓝大作战",type:["比赛","战斗"],download_number:2e7,descrip:"火爆双人对战游戏［红蓝大作战1］续作。"},{gameid:"112",img_url:"/static/img/main/huangyuan.png",icon:"/static/img/main/huangyuanicon.png",name:"荒原",type:["求生","智力"],download_number:2e7,descrip:"【超高画质，带您体验不一样的求生之路】"},{gameid:"112",img_url:"/static/img/main/mota2.png",icon:"/static/img/main/motaicon.jpg",name:"魔塔2",type:["打怪","晋级","反应力"],download_number:2e7,descrip:"游戏主要通过打死小怪或者挖取宝箱来获取装备等，进入更高的塔荣誉更高哦。"},{gameid:"112",img_url:"/static/img/main/sanguotafang.png",icon:"/static/img/main/sanguotafangicon.jpg",name:"三国塔防",type:["塔防","三国"],download_number:2e7,descrip:"大规模的关卡地图中，拥有不同特色的敌军会不断的出现，一切都依靠玩家的智慧和策略！"},{gameid:"112",img_url:"/static/img/main/shiguangzhiren.png",icon:"/static/img/main/shiguangzhirenicon.png",name:"时光之刃",type:["智力","操控力"],download_number:2e7,descrip:"联动正式开启，多个联动角色限时上线； "},{gameid:"112",img_url:"/static/img/main/shucailianmeng.png",icon:"/static/img/main/shucailianmengicon.png",name:"蔬菜联萌",type:["消消乐","晋级"],download_number:2e7,descrip:"经典的三消游戏。以连线同款蔬菜方式消除，游戏剧情搞笑，画面清新，色彩饱满，关卡新颖，道具丰富，技能多样，指尖轻触，根本停不下来。"},{gameid:"112",img_url:"/static/img/main/weijishiming.png",icon:"/static/img/main/weijishimingicon.png",name:"危机使命",type:["枪战","反应力","操控力"],download_number:2e7,descrip:"独创指尖微操战斗模式，让你玩转危机使命！ "},{gameid:"112",img_url:"/static/img/main/xiaoqiankuaipao.png",icon:"/static/img/main/xiaoqiankuaipaoicon.jpg",name:"小倩快跑",type:["跑酷","反应力"],download_number:2e7,descrip:"跑酷题材的游戏，一直都是运动类游戏中热门的类型。有些是追求真实的风格，有些则是追求简单却又有趣刺激的体验"},{gameid:"112",img_url:"/static/img/main/xiaoxiaodamaoxian.png",icon:"/static/img/main/xiaoxiaodamaoxianicon.png",name:"小小大冒险",type:["跑酷","反应力"],download_number:2e7,descrip:"一款华丽刺激的探险跑酷《小小大冒险》横空出世啦！由精品团队倾力制作的绝佳游戏，受到玩家的一致好评，没有更好，只有最棒！"},{gameid:"112",img_url:"/static/img/main/3dzhuawawa.png",icon:"/static/img/main/3dzhuawawaicon.jpg",name:"3d抓娃娃",type:["3D"],download_number:2e7,descrip:"一款可以天天在家抓娃娃的线上真实全景手机夹娃娃机app，大家都在玩哦：足不出户，想抓就抓"}],type:1,session_id:"122322",datetime:"2019-02-11 12:00:00"}},c9ed:function(i,a,n){"use strict";var e=n("2093"),t=n.n(e);t.a}},[["0924","common/runtime","common/vendor"]]]);
});
require('pages/main/main.js');
__wxRoute = 'pages/list/list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/list/list.js';

define('pages/list/list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list/list"],{"0473":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(t("c32a"));function o(e){return e&&e.__esModule?e:{default:e}}var r=t("1ba5"),i={data:function(){return{searchVal:"",title:"uni-load-more",list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(){this.list=this.dealDownNum(r.data)},onReady:function(){},onReachBottom:function(){var e=this;if(0===this.loadingType){this.loadingType=1;for(var a=[],t=this.list[this.list.length-1],n=t+6,o=t+1;o<n;o++)a.push(o);setTimeout(function(){n>26?e.loadingType=2:(e.list=e.list.concat(a),e.loadingType=0)},800)}},components:{uniLoadMore:n.default},methods:{dealDownNum:function(e){var a=this;return e.map(function(e){e.download_number1=a.dealNum(e.download_number)}),e},dealNum:function(e){return String(e).length>8?parseFloat((e/1e8).toFixed(2))+"亿":String(e).length>4?parseFloat((e/1e4).toFixed(2))+"万":e}}};a.default=i},"0efc":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("view",[e._m(0),t("view",{staticClass:"title_bar"},[e._m(1),t("view",{staticClass:"search_input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchVal,expression:"searchVal"}],attrs:{type:"search",placeholder:"查找游戏",eventid:"722abd76-0"},domProps:{value:e.searchVal},on:{input:function(a){a.target.composing||(e.searchVal=a.target.value)}}})]),t("view",{staticClass:"search_icon"},[t("icon",{attrs:{type:"search",size:"20",color:"#333"}})],1)]),t("view",[t("view",{staticClass:"list_view"},e._l(e.list,function(a,n){return t("view",{key:n,staticClass:"list_item posrela clearfix"},[t("view",{staticClass:"index posabs"},[e._v(e._s(n+1))]),t("view",{staticClass:"icon posabs"},[t("image",{attrs:{"lazy-load":"",src:a.img_url,mode:""}})]),t("view",{staticClass:"intro"},[t("view",{staticClass:"title mb5"},[e._v(e._s(a.name))]),t("view",{staticClass:"content mb5"},[e._v("总下载 "+e._s(a.download_number1))]),t("view",{staticClass:"content uni-ellipsis"},[e._v("菊花保卫战菊花保卫战菊花保卫战菊花保卫战")])]),e._m(2,!0)])})),t("uni-load-more",{attrs:{loadingType:e.loadingType,contentText:e.contentText,mpcomid:"722abd76-0"}})],1)])},o=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("view",{staticClass:"status_bar"},[t("view",{staticClass:"top_view"})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("view",{staticClass:"title_logo"},[t("image",{attrs:{src:"../../static/tabbarImg/logo.png",mode:""}})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("view",{staticClass:"buy posabs",attrs:{"hover-class":"btnhover"}},[t("text",{staticClass:"btn"},[e._v("购买")])])}];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return o})},"105d":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};a.default=n},1764:function(e,a,t){"use strict";var n=t("f679"),o=t.n(n);o.a},"1ba5":function(e){e.exports={data:[{gameid:"112",img_url:"https://android-artworks.25pp.com/fs08/2018/11/22/3/109_9f742880b7d2aa8ea100a394a679390f_con_130x130.png",name:"王者荣耀",download_number:2e7,apk_size:13250,descrip:"开启建设家园的竞速之旅",order:1},{gameid:"112",img_url:"https://android-artworks.25pp.com/fs08/2019/02/17/1/109_7bed43db0404f920a98a8186b89e535c_con_130x130.png",name:"绝地求生：刺激战场",download_number:15e7,apk_size:13250,descrip:"开启建设家园的竞速之旅",order:1},{gameid:"85314",img_url:"https://android-artworks.25pp.com/fs08/2019/02/28/5/109_dc266575d58e3d1045e3813835450e3e_con_130x130.png",name:"开心消消乐",apk_size:13250,descrip:"开启建设家园的竞速之旅",download_number:3e7,order:1},{gameid:"1581",img_url:"https://android-artworks.25pp.com/fs08/2018/11/22/3/109_9f742880b7d2aa8ea100a394a679390f_con_130x130.png",apk_size:13250,descrip:"开启建设家园的竞速之旅",name:"王者荣耀",download_number:2e7,order:1},{gameid:"4732",img_url:"https://android-artworks.25pp.com/fs08/2019/02/17/1/109_7bed43db0404f920a98a8186b89e535c_con_130x130.png",name:"绝地求生：刺激战场",apk_size:13250,descrip:"开启建设家园的竞速之旅",download_number:15e7,order:1},{gameid:"59612",img_url:"https://android-artworks.25pp.com/fs08/2019/02/28/5/109_dc266575d58e3d1045e3813835450e3e_con_130x130.png",name:"开心消消乐",apk_size:13250,descrip:"开启建设家园的竞速之旅",download_number:3e7,order:1},{gameid:"79412",img_url:"https://android-artworks.25pp.com/fs08/2018/11/22/3/109_9f742880b7d2aa8ea100a394a679390f_con_130x130.png",name:"王者荣耀",apk_size:13250,descrip:"开启建设家园的竞速之旅",download_number:2e7,order:1},{gameid:"48161",img_url:"https://android-artworks.25pp.com/fs08/2019/02/17/1/109_7bed43db0404f920a98a8186b89e535c_con_130x130.png",name:"绝地求生：刺激战场",apk_size:13250,descrip:"开启建设家园的竞速之旅",download_number:15e7,order:1},{gameid:"6590",img_url:"https://android-artworks.25pp.com/fs08/2019/02/28/5/109_dc266575d58e3d1045e3813835450e3e_con_130x130.png",apk_size:13250,descrip:"开启建设家园的竞速之旅",name:"开心消消乐",download_number:3e7,order:1},{gameid:"9242",img_url:"https://android-artworks.25pp.com/fs08/2018/11/22/3/109_9f742880b7d2aa8ea100a394a679390f_con_130x130.png",apk_size:13250,descrip:"开启建设家园的竞速之旅",name:"王者荣耀",download_number:2e7,order:1},{gameid:"7641",img_url:"https://android-artworks.25pp.com/fs08/2019/02/17/1/109_7bed43db0404f920a98a8186b89e535c_con_130x130.png",apk_size:13250,descrip:"开启建设家园的竞速之旅",name:"绝地求生：刺激战场",download_number:15e7,order:1},{gameid:"34171",img_url:"https://android-artworks.25pp.com/fs08/2019/02/28/5/109_dc266575d58e3d1045e3813835450e3e_con_130x130.png",apk_size:13250,descrip:"开启建设家园的竞速之旅",name:"开心消消乐",download_number:3e7,order:1},{gameid:"4262",img_url:"https://android-artworks.25pp.com/fs08/2018/11/22/3/109_9f742880b7d2aa8ea100a394a679390f_con_130x130.png",name:"王者荣耀",apk_size:13250,descrip:"开启建设家园的竞速之旅",download_number:2e7,order:1},{gameid:"67681",img_url:"https://android-artworks.25pp.com/fs08/2019/02/17/1/109_7bed43db0404f920a98a8186b89e535c_con_130x130.png",name:"绝地求生：刺激战场",apk_size:13250,descrip:"开启建设家园的竞速之旅",download_number:15e7,order:1},{gameid:"8991",img_url:"https://android-artworks.25pp.com/fs08/2019/02/28/5/109_dc266575d58e3d1045e3813835450e3e_con_130x130.png",name:"开心消消乐",apk_size:13250,descrip:"开启建设家园的竞速之旅",download_number:3e7,order:1},{gameid:"12190",img_url:"https://android-artworks.25pp.com/fs08/2018/11/22/3/109_9f742880b7d2aa8ea100a394a679390f_con_130x130.png",name:"王者荣耀",apk_size:13250,descrip:"开启建设家园的竞速之旅",download_number:2e7,order:1},{gameid:"23111",img_url:"https://android-artworks.25pp.com/fs08/2019/02/17/1/109_7bed43db0404f920a98a8186b89e535c_con_130x130.png",apk_size:13250,descrip:"开启建设家园的竞速之旅",name:"绝地求生：刺激战场",download_number:15e7,order:1},{gameid:"2322",img_url:"https://android-artworks.25pp.com/fs08/2019/02/28/5/109_dc266575d58e3d1045e3813835450e3e_con_130x130.png",name:"开心消消乐",apk_size:13250,descrip:"开启建设家园的竞速之旅",download_number:3e7,order:1}],type:1,session_id:"122322",datetime:"2019-02-11 12:00:00"}},"3c0f":function(e,a,t){"use strict";t("bdf4");var n=r(t("b0ce")),o=r(t("5136"));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(o.default))},"47e6":function(e,a,t){},"4d9e":function(e,a,t){"use strict";t.r(a);var n=t("0473"),o=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(a,e,function(){return n[e]})}(r);a["default"]=o.a},5136:function(e,a,t){"use strict";t.r(a);var n=t("0efc"),o=t("4d9e");for(var r in o)"default"!==r&&function(e){t.d(a,e,function(){return o[e]})}(r);t("1764");var i=t("2877"),s=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,"e91d02f2",null);a["default"]=s.exports},"53c9":function(e,a,t){"use strict";var n=t("47e6"),o=t.n(n);o.a},"5a26":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("view",{staticClass:"load-more"},[t("view",{directives:[{name:"show",rawName:"v-show",value:1===e.loadingType&&e.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[t("view",{staticClass:"load1"},[t("view",{style:{background:e.color}}),t("view",{style:{background:e.color}}),t("view",{style:{background:e.color}}),t("view",{style:{background:e.color}})]),t("view",{staticClass:"load2"},[t("view",{style:{background:e.color}}),t("view",{style:{background:e.color}}),t("view",{style:{background:e.color}}),t("view",{style:{background:e.color}})]),t("view",{staticClass:"load3"},[t("view",{style:{background:e.color}}),t("view",{style:{background:e.color}}),t("view",{style:{background:e.color}}),t("view",{style:{background:e.color}})])]),t("text",{staticClass:"loading-text",style:{color:e.color}},[e._v(e._s(0===e.loadingType?e.contentText.contentdown:1===e.loadingType?e.contentText.contentrefresh:e.contentText.contentnomore))])])},o=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return o})},"83df":function(e,a,t){"use strict";t.r(a);var n=t("105d"),o=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(a,e,function(){return n[e]})}(r);a["default"]=o.a},c32a:function(e,a,t){"use strict";t.r(a);var n=t("5a26"),o=t("83df");for(var r in o)"default"!==r&&function(e){t.d(a,e,function(){return o[e]})}(r);t("53c9");var i=t("2877"),s=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=s.exports},f679:function(e,a,t){}},[["3c0f","common/runtime","common/vendor"]]]);
});
require('pages/list/list.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"18ab":function(t,n,e){"use strict";var i=e("5081"),o=e.n(i);o.a},"32b4":function(t,n,e){"use strict";e("bdf4");var i=a(e("b0ce")),o=a(e("6cb9"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(o.default))},5081:function(t,n,e){},"649d":function(t,n,e){"use strict";e.r(n);var i=function(t){return"function"===typeof t},o=function(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})},a=/^on|^create|Sync$|Manager$|^pause/,r=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],c=function(t){return(!a.test(t)||"createBLEConnection"===t)&&!~r.indexOf(t)},u=function(t){return function(){for(var n=arguments.length,e=Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(r.success)||i(r.fail)||i(r.complete)?t.apply(void 0,[r].concat(e)):o(new Promise(function(n,i){t.apply(void 0,[Object.assign({},r,{success:n,fail:i})].concat(e)),Promise.prototype.finally=function(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})})}}))}},s=1e-4,l=750,f=!1,g=0,d=0;function v(){var t=wx.getSystemInfoSync(),n=t.platform,e=t.pixelRatio,i=t.windowWidth;g=i,d=e,f="ios"===n}function p(t,n){if(0===g&&v(),0===t)return 0;var e=t/l*(n||g);return e<0&&(e=-e),e=Math.floor(e+s),0===e?1!==d&&f?.5:1:t<0?-e:e}function m(t){return __requireNativePlugin__(t)}var w={},h={os:{plus:!0}};"undefined"!==typeof Proxy?w=new Proxy({},{get:function(t,n){return h.hasOwnProperty(n)?h[n]:"upx2px"===n?p:"requireNativePlugin"===n?m:wx.hasOwnProperty(n)?c(n)?u(wx[n]):wx[n]:void 0}}):(w.upx2px=p,w.requireNativePlugin=m,Object.keys(h).forEach(function(t){w[t]=h[t]}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(c(t)?w[t]=u(wx[t]):w[t]=wx[t])}));var x=w;n["default"]=x},"6cb9":function(t,n,e){"use strict";e.r(n);var i=e("ec94"),o=e("7f62");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("18ab");var r=e("2877"),c=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"7653da13",null);n["default"]=c.exports},"7f62":function(t,n,e){"use strict";e.r(n);var i=e("a1ce"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},a1ce:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{listCells:[{img:"/static/img/my/wodeyouxi.png",text:"我的游戏",url:""},{img:"/static/img/my/xiaoxitongzhi.png",text:"消息通知",url:""},{img:"/static/img/my/qinglihuancun.png",text:"清理缓存",url:""},{img:"/static/img/my/banbengengxin.png",text:"版本更新",url:""},{img:"/static/img/my/guanyuwomen.png",text:"关于我们",url:""}]}},methods:{editPortrait:function(){t.showToast({title:"换头像",icon:"success",duration:2e3})},login:function(){t.navigateTo({url:"/pages/login/login",success:function(t){},fail:function(){},complete:function(){}})},logout:function(){t.showToast({title:"登出",icon:"success",duration:2e3})}}};n.default=e}).call(this,e("649d")["default"])},ec94:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",[t._m(0),e("view",{staticClass:"userinfo"},[e("view",{staticClass:"alignRight",attrs:{eventid:"613c9cd4-0"},on:{click:t.editPortrait}},[t._v("更换头像")]),e("view",{staticClass:"portrait",attrs:{eventid:"613c9cd4-1"},on:{click:t.login}},[e("img",{attrs:{src:"/static/img/my/portraitDefault.png",alt:""}}),e("view",{staticClass:"col333"},[t._v("点击登录")])])]),e("view",{staticClass:"mb40"},t._l(t.listCells,function(n,i){return e("view",{key:i,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[e("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[e("img",{attrs:{src:n.img,alt:n.text}}),e("text",[t._v(t._s(n.text))])])])})),e("view",[e("button",{staticClass:"logout",attrs:{eventid:"613c9cd4-2"},on:{click:t.logout}},[t._v("退出登录")])],1)])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"status_bar"},[e("view",{staticClass:"top_view"})])}];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})}},[["32b4","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');


(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"0924":function(i,a,n){"use strict";n("bdf4");var e=m(n("b0ce")),t=m(n("0ed0"));function m(i){return i&&i.__esModule?i:{default:i}}Page((0,e.default)(t.default))},"0ed0":function(i,a,n){"use strict";n.r(a);var e=n("55f1"),t=n("7268");for(var m in t)"default"!==m&&function(i){n.d(a,i,function(){return t[i]})}(m);n("7191");var o=n("2877"),c=Object(o["a"])(t["default"],e["a"],e["b"],!1,null,"68288c74",null);a["default"]=c.exports},"2d24":function(i,a,n){"use strict";(function(i){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n("c99a"),t={data:function(){return{searchVal:"",title:"uni-load-more",list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(){this.list=e.data},methods:{jump_detail:function(a){console.log(a),i.navigateTo({url:"/pages/detail/detail?id="+a.gameid})},jump_search:function(){i.navigateTo({url:"/pages/search/search"})}},components:{}};a.default=t}).call(this,n("649d")["default"])},"55f1":function(i,a,n){"use strict";var e=function(){var i=this,a=i.$createElement,n=i._self._c||a;return n("view",[i._m(0),n("view",{staticClass:"title_bar"},[i._m(1),n("view",{staticClass:"search_input",attrs:{eventid:"a7aa9354-0"},on:{click:function(a){i.jump_search()}}},[n("input",{attrs:{type:"search",disabled:"",placeholder:"查找游戏"}})]),n("view",{staticClass:"search_icon",attrs:{eventid:"a7aa9354-1"},on:{click:function(a){i.jump_search()}}},[n("icon",{attrs:{type:"search",size:"20",color:"#333"}})],1)]),n("view",[n("scroll-view",{staticClass:"list_view"},i._l(i.list,function(a,e){return n("view",{key:e,staticClass:"list_item clearfix",attrs:{eventid:"a7aa9354-2-"+e},on:{click:function(n){i.jump_detail(a)}}},[n("text",{staticClass:"item_content"},[i._v(i._s(a.descrip))]),n("view",{staticClass:"item_bg"},[n("image",{attrs:{"lazy-load":"",src:a.img_url,mode:""}}),n("view",{staticClass:"item_intro"},[n("view",{staticClass:"item_icon posabs"},[n("image",{attrs:{"lazy-load":"",src:a.icon,mode:""}})]),n("view",{staticClass:"item_name posabs"},[n("view",{staticClass:"name"},[n("text",[i._v(i._s(a.name))])]),n("view",i._l(a.type,function(a,e){return n("text",{key:e,staticClass:"type"},[i._v(i._s(a)),n("text",[i._v("|")])])}))]),n("view",{staticClass:"item_place posabs"},[n("view",{staticClass:"place_icon"},[n("image",{attrs:{"lazy-load":"",src:"../../static/img/main/place.png",mode:""}})]),n("view",{staticClass:"place_tp"},[i._v("游戏中心")])])])])])}))],1)])},t=[function(){var i=this,a=i.$createElement,n=i._self._c||a;return n("view",{staticClass:"status_bar"},[n("view",{staticClass:"top_view"})])},function(){var i=this,a=i.$createElement,n=i._self._c||a;return n("view",{staticClass:"title_logo"},[n("image",{attrs:{src:"../../static/tabbarImg/logo.png",mode:""}})])}];n.d(a,"a",function(){return e}),n.d(a,"b",function(){return t})},7191:function(i,a,n){"use strict";var e=n("88fc"),t=n.n(e);t.a},7268:function(i,a,n){"use strict";n.r(a);var e=n("2d24"),t=n.n(e);for(var m in e)"default"!==m&&function(i){n.d(a,i,function(){return e[i]})}(m);a["default"]=t.a},"88fc":function(i,a,n){},c99a:function(i){i.exports={data:[{gameid:"112",img_url:"/static/img/main/caolizi.png",icon:"/static/img/main/caoliziicon.jpg",name:"炒栗栗子",type:["经营"],download_number:2e7,descrip:"继承了前作无与伦比的正直与纯洁，在弘扬传统文化的同时，用脑洞给各位带来一场深刻的哲♂学大餐！准备好了吗？"},{gameid:"112",img_url:"/static/img/main/juhuabaoweizhan.png",icon:"/static/img/main/juhuabaoweizhanicon.png",name:"菊花保卫战",type:["塔防","晋级"],download_number:2e7,descrip:"小怪兽疯狂来袭，勇士全力出击。"},{gameid:"112",img_url:"/static/img/main/fennvdexiaoniao.png",icon:"/static/img/main/fennvdexiaoniaoicon.jpg",name:"愤怒的小鸟",type:["愤怒的小鸟","消除"],download_number:2e7,descrip:"《愤怒的小鸟》是一款十分受欢迎的射击游戏，最早在苹果iPhone和iPad上占据过销售排行榜首位，目前被移植到Android平台上。"},{gameid:"112",img_url:"/static/img/main/maokualan.png",icon:"/static/img/main/maokualanicon.jpg",name:"猫跨栏",type:["跑酷","反应力"],download_number:2e7,descrip:"飞越跳过各种不同的跨栏吧喵！ 跨栏越高兴致越高涨喵！"},{gameid:"112",img_url:"/static/img/main/youxicangqilai.png",icon:"/static/img/main/youxicangqilaiicon.png",name:"母亲隐藏我的游戏",type:["塔防","晋级"],download_number:2e7,descrip:"不在这！不在这！也不在这！我的游戏机不见了！ "},{gameid:"112",img_url:"/static/img/main/meishimiaomiao.png",icon:"/static/img/main/miaomiaoaixiaoicon.jpg",name:"美食喵喵喵",type:["消除","猫"],download_number:2e7,descrip:"可爱无敌又憨态可掬的小花喵来了。"},{gameid:"112",img_url:"/static/img/main/baozubaruanmei.png",icon:"/static/img/main/baozoubaruanmeiicon.png",name:"暴走吧软妹军团",type:["反应力","智力"],download_number:2e7,descrip:"《暴走吧软妹军团》是一款以青春校园为背景的超人气RPG手游，融合了人物养成与横版战斗元素。"},{gameid:"112",img_url:"/static/img/main/duidiesanguo.png",icon:"/static/img/main/duidiesanguoicon.png",name:"堆叠三国",type:["三国","智力"],download_number:2e7,descrip:"《堆叠三国》非常独特，是一款慢节奏，微策略，英雄养成，战队配合的智力游戏。请赶快堆叠你的瓷砖，一口气粉碎掉，攻击三国中的大坏蛋！"},{gameid:"112",img_url:"/static/img/main/guaishoulianmeng.png",icon:"/static/img/main/guaishoulianmengicon.jpg",name:"怪兽连萌",type:["连连看","晋级"],download_number:2e7,descrip:"超好玩的消除类休闲益智游戏！有道具辅助、无收费项目，和我一起来消灭怪兽吧，还有让你得高分的开心消消乐攻略哦！"},{gameid:"112",img_url:"/static/img/main/haidixiaoxiao.png",icon:"/static/img/main/haidixiaoxiaoicon.png",name:"海底消消乐",type:["消消乐","晋级"],download_number:2e7,descrip:"突破主流卡牌游戏以回合制站桩输出的传统玩法的全新体验，配合华丽的合体大招享受碰撞攻破敌人的快感；"},{gameid:"112",img_url:"/static/img/main/honglandazuozhan.png",icon:"/static/img/main/honglandazuozhanicon.jpg",name:"红蓝大作战",type:["比赛","战斗"],download_number:2e7,descrip:"火爆双人对战游戏［红蓝大作战1］续作。"},{gameid:"112",img_url:"/static/img/main/huangyuan.png",icon:"/static/img/main/huangyuanicon.png",name:"荒原",type:["求生","智力"],download_number:2e7,descrip:"【超高画质，带您体验不一样的求生之路】"},{gameid:"112",img_url:"/static/img/main/mota2.png",icon:"/static/img/main/motaicon.jpg",name:"魔塔2",type:["打怪","晋级","反应力"],download_number:2e7,descrip:"游戏主要通过打死小怪或者挖取宝箱来获取装备等，进入更高的塔荣誉更高哦。"},{gameid:"112",img_url:"/static/img/main/sanguotafang.png",icon:"/static/img/main/sanguotafangicon.jpg",name:"三国塔防",type:["塔防","三国"],download_number:2e7,descrip:"大规模的关卡地图中，拥有不同特色的敌军会不断的出现，一切都依靠玩家的智慧和策略！"},{gameid:"112",img_url:"/static/img/main/shiguangzhiren.png",icon:"/static/img/main/shiguangzhirenicon.png",name:"时光之刃",type:["智力","操控力"],download_number:2e7,descrip:"联动正式开启，多个联动角色限时上线； "},{gameid:"112",img_url:"/static/img/main/shucailianmeng.png",icon:"/static/img/main/shucailianmengicon.png",name:"蔬菜联萌",type:["消消乐","晋级"],download_number:2e7,descrip:"经典的三消游戏。以连线同款蔬菜方式消除，游戏剧情搞笑，画面清新，色彩饱满，关卡新颖，道具丰富，技能多样，指尖轻触，根本停不下来。"},{gameid:"112",img_url:"/static/img/main/weijishiming.png",icon:"/static/img/main/weijishimingicon.png",name:"危机使命",type:["枪战","反应力","操控力"],download_number:2e7,descrip:"独创指尖微操战斗模式，让你玩转危机使命！ "},{gameid:"112",img_url:"/static/img/main/xiaoqiankuaipao.png",icon:"/static/img/main/xiaoqiankuaipaoicon.jpg",name:"小倩快跑",type:["跑酷","反应力"],download_number:2e7,descrip:"跑酷题材的游戏，一直都是运动类游戏中热门的类型。有些是追求真实的风格，有些则是追求简单却又有趣刺激的体验"},{gameid:"112",img_url:"/static/img/main/xiaoxiaodamaoxian.png",icon:"/static/img/main/xiaoxiaodamaoxianicon.png",name:"小小大冒险",type:["跑酷","反应力"],download_number:2e7,descrip:"一款华丽刺激的探险跑酷《小小大冒险》横空出世啦！由精品团队倾力制作的绝佳游戏，受到玩家的一致好评，没有更好，只有最棒！"},{gameid:"112",img_url:"/static/img/main/3dzhuawawa.png",icon:"/static/img/main/3dzhuawawaicon.jpg",name:"3d抓娃娃",type:["3D"],download_number:2e7,descrip:"一款可以天天在家抓娃娃的线上真实全景手机夹娃娃机app，大家都在玩哦：足不出户，想抓就抓"}],type:1,session_id:"122322",datetime:"2019-02-11 12:00:00"}}},[["0924","common/runtime","common/vendor"]]]);
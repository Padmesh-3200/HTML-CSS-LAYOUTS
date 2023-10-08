(function(g){var window=this;'use strict';var ypb=function(a,b){g.T.call(this,{I:"button",Oa:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Y:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},X:[{I:"svg",Y:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},X:[{I:"g",Y:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},X:[{I:"g",Y:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
X:[{I:"path",Y:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.J=a;this.Ua("click",this.onClick,this);this.updateValue("title",g.OU(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.ub(this,g.IU(b.Gc(),this.element))},zpb=function(a){g.T.call(this,{I:"div",
T:"ytp-miniplayer-ui"});this.rg=!1;this.player=a;this.V(a,"minimized",this.Fh);this.V(a,"onStateChange",this.uR)},Apb=function(a){g.zV.call(this,a);
this.B=new g.aL(this);this.j=new zpb(this.player);this.j.hide();g.sU(this.player,this.j.element,4);a.wg()&&(this.load(),g.ru(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(ypb,g.T);ypb.prototype.onClick=function(){this.J.Ta("onExpandMiniplayer")};g.w(zpb,g.T);g.k=zpb.prototype;
g.k.hO=function(){this.tooltip=new g.YX(this.player,this);g.L(this,this.tooltip);g.sU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.kd=new g.fW(this.player);g.L(this,this.kd);this.vk=new g.T({I:"div",T:"ytp-miniplayer-scrim"});g.L(this,this.vk);this.vk.Ga(this.element);this.V(this.vk.element,"click",this.iJ);var a=new g.T({I:"button",Oa:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.CG()]});g.L(this,a);a.Ga(this.vk.element);this.V(a.element,"click",this.Hp);
a=new ypb(this.player,this);g.L(this,a);a.Ga(this.vk.element);this.tv=new g.T({I:"div",T:"ytp-miniplayer-controls"});g.L(this,this.tv);this.tv.Ga(this.vk.element);this.V(this.tv.element,"click",this.iJ);var b=new g.T({I:"div",T:"ytp-miniplayer-button-container"});g.L(this,b);b.Ga(this.tv.element);a=new g.T({I:"div",T:"ytp-miniplayer-play-button-container"});g.L(this,a);a.Ga(this.tv.element);var c=new g.T({I:"div",T:"ytp-miniplayer-button-container"});g.L(this,c);c.Ga(this.tv.element);this.bZ=new g.kX(this.player,
this,!1);g.L(this,this.bZ);this.bZ.Ga(b.element);b=new g.jX(this.player,this);g.L(this,b);b.Ga(a.element);this.nextButton=new g.kX(this.player,this,!0);g.L(this,this.nextButton);this.nextButton.Ga(c.element);this.Ij=new g.RX(this.player,this);g.L(this,this.Ij);this.Ij.Ga(this.vk.element);this.Uc=new g.pX(this.player,this);g.L(this,this.Uc);g.sU(this.player,this.Uc.element,4);this.QI=new g.T({I:"div",T:"ytp-miniplayer-buttons"});g.L(this,this.QI);g.sU(this.player,this.QI.element,4);a=new g.T({I:"button",
Oa:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.CG()]});g.L(this,a);a.Ga(this.QI.element);this.V(a.element,"click",this.Hp);a=new g.T({I:"button",Oa:["ytp-miniplayer-replay-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.Uua()]});g.L(this,a);a.Ga(this.QI.element);this.V(a.element,"click",this.Q8);this.V(this.player,"presentingplayerstatechange",this.Zd);this.V(this.player,"appresize",this.Nb);this.V(this.player,"fullscreentoggled",this.Nb);this.Nb()};
g.k.show=function(){this.Af=new g.du(this.yw,null,this);this.Af.start();this.rg||(this.hO(),this.rg=!0);0!==this.player.getPlayerState()&&g.T.prototype.show.call(this);this.Uc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Af&&(this.Af.dispose(),this.Af=void 0);g.T.prototype.hide.call(this);this.player.wg()||(this.rg&&this.Uc.hide(),this.player.loadModule("annotations_module"))};
g.k.Ba=function(){this.Af&&(this.Af.dispose(),this.Af=void 0);g.T.prototype.Ba.call(this)};
g.k.Hp=function(){this.player.stopVideo();this.player.Ta("onCloseMiniplayer")};
g.k.Q8=function(){this.player.playVideo()};
g.k.iJ=function(a){if(a.target===this.vk.element||a.target===this.tv.element)g.YL(this.player.Vb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Fh=function(){g.ru(this.player.getRootNode(),"ytp-player-minimized",this.player.wg())};
g.k.cf=function(){this.Uc.Kc();this.Ij.Kc()};
g.k.yw=function(){this.cf();this.Af&&this.Af.start()};
g.k.Zd=function(a){g.cH(a.state,32)&&this.tooltip.hide()};
g.k.Nb=function(){g.BX(this.Uc,0,this.player.tb().getPlayerSize().width,!1);g.qX(this.Uc)};
g.k.uR=function(a){this.player.wg()&&(0===a?this.hide():this.show())};
g.k.Gc=function(){return this.tooltip};
g.k.Ng=function(){return!1};
g.k.yg=function(){return!1};
g.k.tm=function(){return!1};
g.k.fK=function(){};
g.k.tq=function(){};
g.k.bz=function(){};
g.k.un=function(){return null};
g.k.xH=function(){return null};
g.k.yN=function(){return new g.ue(0,0)};
g.k.Rk=function(){return new g.Br(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Jw=function(a,b,c,d,e){var f=0,h=d=0,l=g.Pr(a);if(b){c=g.mu(b,"ytp-prev-button")||g.mu(b,"ytp-next-button");var m=g.mu(b,"ytp-play-button"),n=g.mu(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Nr(b,this.element),h=b.x,f=b.y-12):n&&(h=g.mu(b,"ytp-miniplayer-button-top-left"),f=g.Nr(b,this.element),b=g.Pr(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.tb().getPlayerSize().width;e=f+(e||0);l=g.le(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Yp=function(){};
g.k.jm=function(){return!1};
g.k.vF=function(){};
g.k.cB=function(){};
g.k.Hr=function(){};
g.k.Gr=function(){};
g.k.Pu=function(){};
g.k.Os=function(){};
g.k.dF=function(){};g.w(Apb,g.zV);g.k=Apb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.ru(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.zV.prototype.create.call(this);this.B.V(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.wl=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.yV("miniplayer",Apb);})(_yt_player);

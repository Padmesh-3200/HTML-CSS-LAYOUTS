(function(g){var window=this;'use strict';var ppb=function(a){g.T.call(this,{I:"div",T:"ytp-inline-preview-ui"});this.rg=!1;this.player=a;this.V(a,"onStateChange",this.uR);this.V(a,"videodatachange",this.nx);this.V(a,"onInlinePreviewModeChange",this.g6);this.Af=new g.du(this.yw,null,this);g.L(this,this.Af)},I6=function(a){g.zV.call(this,a);
this.j=new ppb(this.player);g.L(this,this.j);this.j.hide();g.sU(this.player,this.j.element,4);a.isInline()&&(this.load(),a=a.getRootNode(),g.ou(a,["ytp-inline-preview-mode","ytp-no-contextmenu"]))};
g.w(ppb,g.T);g.k=ppb.prototype;
g.k.hO=function(){this.tooltip=new g.YX(this.player,this);g.L(this,this.tooltip);g.sU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.kd=new g.fW(this.player);g.L(this,this.kd);this.vk=new g.T({I:"div",Oa:["ytp-inline-preview-scrim"]});g.L(this,this.vk);this.vk.Ga(this.element);this.V(this.vk.element,"click",this.iJ);this.Ij=new g.RX(this.player,this,300);g.L(this,this.Ij);this.Ij.Ga(this.vk.element);this.controls=new g.T({I:"div",T:"ytp-inline-preview-controls"});g.L(this,this.controls);
this.controls.Ga(this.element);var a=new g.iX(this.player,this,!1);g.L(this,a);a.Ga(this.controls.element);a=new g.PX(this.player,this);g.L(this,a);a.Ga(this.controls.element);this.Uc=new g.pX(this.player,this);g.L(this,this.Uc);g.sU(this.player,this.Uc.element,4);this.V(this.player,"appresize",this.Nb);this.V(this.player,"fullscreentoggled",this.Nb);this.Nb()};
g.k.show=function(){g.eu(this.Af);this.rg||(this.hO(),this.rg=!0);0!==this.player.getPlayerState()&&g.T.prototype.show.call(this);this.Uc.show();this.player.Ta("onInlinePreviewUiReady")};
g.k.hide=function(){this.Af.stop();g.T.prototype.hide.call(this);this.player.isInline()||this.rg&&this.Uc.hide()};
g.k.Ba=function(){g.T.prototype.Ba.call(this)};
g.k.iJ=function(a){a.target===this.vk.element&&this.player.Ta("onExpandInlinePreview",a)};
g.k.g6=function(){g.ru(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.cf=function(){this.Uc.Kc();this.Ij.Kc()};
g.k.yw=function(){this.cf();g.eu(this.Af)};
g.k.Nb=function(){g.BX(this.Uc,0,this.player.tb().getPlayerSize().width,!1);g.qX(this.Uc)};
g.k.uR=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.nx=function(a,b){if(this.player.isInline()){g.ru(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.fC);var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.ru(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
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
g.k.Jw=function(a,b,c,d,e){var f=d=0,h=0,l=g.Pr(a);if(b){c=g.mu(b,"ytp-mute-button");var m=g.mu(b,"ytp-subtitles-button"),n=g.Nr(b,this.element);b=g.Pr(b);d=n.y+40;if(m||c)h=n.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.tb().getPlayerSize().width;h=g.le(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};
g.k.showControls=function(){};
g.k.Yp=function(){};
g.k.jm=function(){return!1};
g.k.vF=function(){};
g.k.cB=function(){};
g.k.Hr=function(){};
g.k.Gr=function(){};
g.k.Pu=function(){};
g.k.Os=function(){};
g.k.dF=function(){};g.w(I6,g.zV);I6.prototype.wl=function(){return!1};
I6.prototype.load=function(){this.player.hideControls();this.j.show()};
I6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.yV("inline_preview",I6);})(_yt_player);

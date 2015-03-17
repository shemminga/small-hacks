/**********************************************************
Roundcube
**********************************************************/
var name="Roundcube";
var ver="2012-11-01";
var needServer=true;

function init(){
  this.initStage=ST_PRE;
  if(this.server){
    if(this.server.indexOf("http")!=0)this.server="http://"+this.server;
    if(this.server.charAt(this.server.length-1)!="/")this.server+="/";
  }
  this.loginData=[this.server,"_user", "_pass","_task=mail&_action=login"];
  this.dataURL=this.server+"?_task=mail&_action=getunread&&_remote=1&_unlock=0&_=";
  this.viewURL=this.server;
}
function getIconPageURL(){
  return this.viewURL;
}
function getCount(aData) {
  var fnd=aData.match(/"action":"getunread"/);
  if(fnd) {
    if(aData.match(/_task=login/))return -1;
    fnd=aData.match(/\\"INBOX\\",(\d+),/);
    return fnd?fnd[1]:0;
  }
  return -1;
}
function process(aData,aHttp){
  switch(this.stage){
  case ST_PRE:
    this.getHtml(this.viewURL);
    return false;
  case ST_PRE_RES:
    var fnd=aData.match(/"_token"\s+value="(\S+?)"/);
    if(fnd){
      this.stage=ST_LOGIN;
      this.getHtml(this.loginData[LOGIN_URL],this.loginData[LOGIN_POST]+"&_token="+fnd[1]);
      return false;
    }
    break;
  case ST_LOGIN_RES:
    var fnd=aData.match(/"request_token":"(\S+?)"/);
    if(fnd){
      this.stage=ST_DATA;
      this.token=fnd[1];
    }else break;
  case ST_DATA:
    this.getHtml(this.dataURL+(new Date().getTime()),null,{"X-Requested-With":"XMLHttpRequest","X-Roundcube-Request":this.token});
    return false;
  }
  return this.baseProcess(aData,aHttp);
}

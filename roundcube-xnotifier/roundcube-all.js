/**********************************************************
Roundcube
**********************************************************/
var name="Roundcube (all mailboxes)";
var ver="2015-03-17";
var needServer=true;

function init(){
  this.initStage=ST_PRE;
  if(this.server){
    if(this.server.indexOf("http")!=0)this.server="http://"+this.server;
    if(this.server.charAt(this.server.length-1)!="/")this.server+="/";
  }
  this.loginData=[this.server,"_user", "_pass","_task=mail&_action=login"];
  this.dataURL=this.server+"?_task=mail&_action=getunread&&_remote=1&_unlock=0&_=";
  this.updateURL=this.server+"?_task=mail&_action=check-recent&_mbox=INBOX&_refresh=1&_remote=1&_unlock=0&_=";
  this.viewURL=this.server;
}
function getCount(aData) {
  var fnd=aData.match(/"action":"getunread"/);
  if(fnd) {
    var cnt = 0;
    var mailboxes = aData.match(/this\.set_unread_count\(\\"[^\\"]+\\",\d+/g);
    if (mailboxes != null) {
      for(var i = 0; i < mailboxes.length; i++) {
        var mboxCnt = mailboxes[i].match(/this\.set_unread_count\(\\"[^\\"]+\\",(\d+)/);
        if(mboxCnt != null) {
          cnt += parseInt(mboxCnt[1], 10);
        }
      }
    }
    return cnt;
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
    this.getHtml(this.updateURL+(new Date().getTime()),null,{"X-Requested-With":"XMLHttpRequest","X-Roundcube-Request":this.token});
    this.stage=ST_DATA+2;
    return true;
  case (ST_DATA+2):
    var fnd=aData.match(/_task=login&_err=session/);
    if(fnd){
      this.reset(false);
      return this.process("",aHttp);
    }
    this.getHtml(this.dataURL+(new Date().getTime()),null,{"X-Requested-With":"XMLHttpRequest","X-Roundcube-Request":this.token});
    this.stage=ST_DATA;
    return false;
  }
  return this.baseProcess(aData,aHttp);
}

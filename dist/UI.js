const ui1={"widgetList":[{"type":"m-tab","category":"container","icon":"tab","tabs":[{"type":"m-tab-pane","category":"container","icon":"tab-pane","internal":true,"widgetList":[],"options":{"name":"m-tab-pane-39080","label":"功能","hidden":false,"active":false,"disabled":false,"customClass":""},"id":"m-tab-pane-39080"},{"type":"m-tab-pane","category":"container","icon":"tab-pane","internal":true,"widgetList":[{"type":"m-radio","icon":"radio-field","formItemFlag":true,"options":{"name":"pkg","label":"启动浏览器:","labelAlign":"left","defaultValue":"sogou.mobile.explorer","iconSize":20,"direction":"horizontal","labelWidth":"84","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"dsEnabled":false,"dsName":"","labelKey":"label","valueKey":"value","optionItems":[{"label":"搜狗","value":"sogou.mobile.explorer"},{"label":"QQ","value":"com.tencent.mtt"}],"required":false,"requiredHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mradio92662"},{"type":"m-radio","icon":"radio-field","formItemFlag":true,"options":{"name":"一键合成","label":"","labelAlign":"","defaultValue":2,"iconSize":20,"direction":"horizontal","labelWidth":null,"labelHidden":true,"readonly":false,"disabled":false,"hidden":false,"dsEnabled":false,"dsName":"","labelKey":"label","valueKey":"value","optionItems":[{"label":"一键合成","value":1},{"value":2,"label":"普通合成"},{"value":3,"label":"日常优先"}],"required":false,"requiredHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"var 合兽跳级 = this.getWidgetRef('合兽跳级')\nvar 彩石 = this.getWidgetRef('彩石')\nvar 加速 = this.getWidgetRef('加速')\nvar 采补 = this.getWidgetRef('采补')\nif(value==1){\n  合兽跳级.setValue(\"[47]\")\n}else if(value==2){\n  合兽跳级.setValue(\"[42,43,47]\")\n}else if(value==3){\n  加速.setValue(true)\n  采补.setValue(true)\n}","onValidate":""},"id":"mradio109128"},{"type":"m-grid","category":"container","icon":"grid","cols":[{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-stepper","icon":"stepper-field","formItemFlag":true,"options":{"name":"彩石","label":"彩石","labelAlign":"left","readonly":false,"defaultValue":"1","placeholder":"","stepButtonSize":20,"labelWidth":"30","labelHidden":false,"disabled":false,"hidden":false,"validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"min":0,"max":1000,"precision":0,"step":1,"onCreated":"","onMounted":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"mstepper86680"}],"options":{"name":"mGridCol38149","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-38149"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-stepper","icon":"stepper-field","formItemFlag":true,"options":{"name":"凝丹","label":"凝丹","labelAlign":"","readonly":false,"defaultValue":"3","placeholder":"","stepButtonSize":20,"labelWidth":"30","labelHidden":false,"disabled":false,"hidden":false,"validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":"","min":1,"max":5,"precision":0,"step":1,"onCreated":"","onMounted":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"mstepper54529"}],"options":{"name":"mGridCol56013","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-56013"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-input","icon":"text-field","formItemFlag":true,"options":{"name":"合兽跳级","label":"跳级","labelAlign":"","type":"text","defaultValue":"[42,43,47]","placeholder":"","size":"","labelWidth":"30","labelHidden":false,"inputAlign":"left","readonly":false,"disabled":false,"hidden":false,"clearable":true,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"maxLength":null,"showWordLimit":false,"leftIcon":"","rightIcon":"","appendButton":false,"appendButtonType":"primary","appendButtonLabel":"","appendButtonIcon":"search","appendButtonDisabled":false,"onCreated":"","onMounted":"","onInput":"","onFocus":"","onBlur":"","onAppendButtonClick":"","onValidate":""},"id":"minput37067"}],"options":{"name":"mGridCol80675","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-80675"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"灵气换蛋","label":"灵气换蛋","labelAlign":"","defaultValue":true,"labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#F40000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch69376"}],"options":{"name":"mGridCol60672","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-60672"}],"options":{"name":"mgrid79162","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"mgrid79162"},{"type":"m-grid","category":"container","icon":"grid","cols":[{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"铲","label":"铲","labelAlign":"","defaultValue":true,"labelWidth":"15","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch66698"}],"options":{"name":"mGridCol64819","hidden":false,"span":8,"offset":0,"customClass":""},"id":"m-grid-col-64819"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"刷","label":"刷","labelAlign":"","defaultValue":true,"labelWidth":"15","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch112554"}],"options":{"name":"mGridCol114857","hidden":false,"span":8,"offset":0,"customClass":""},"id":"m-grid-col-114857"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"补","label":"补","labelAlign":"","defaultValue":false,"labelWidth":"15","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch62412"}],"options":{"name":"mGridCol94184","hidden":false,"span":8,"offset":0,"customClass":""},"id":"m-grid-col-94184"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"探索","label":"探","labelAlign":"","defaultValue":false,"labelWidth":"15","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FE0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"let 探索条件=this.getWidgetRef(\"探索条件\")\nlet 箱=this.getWidgetRef(\"箱\")\nif (value) {\n  探索条件.setHidden(false)\n  箱.setValue(true)\n}else{\n  箱.setValue(false)\n  探索条件.setHidden(true)\n}","onValidate":""},"id":"mswitch66067"}],"options":{"name":"mGridCol53965","hidden":false,"span":8,"offset":0,"customClass":""},"id":"m-grid-col-53965"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"箱","label":"箱","labelAlign":"","defaultValue":false,"labelWidth":"15","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"let 开箱条件=this.getWidgetRef(\"开箱条件\")\nif (value) {\n  开箱条件.setHidden(false)\n}else{\n  开箱条件.setHidden(true)\n}","onValidate":""},"id":"mswitch51579"}],"options":{"name":"mGridCol94981","hidden":false,"span":8,"offset":0,"customClass":""},"id":"m-grid-col-94981"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"偷","label":"偷","labelAlign":"","defaultValue":false,"labelWidth":"15","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch42449"}],"options":{"name":"mGridCol59964","hidden":false,"span":8,"offset":0,"customClass":""},"id":"m-grid-col-59964"}],"options":{"name":"mgrid37735","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"mgrid37735"},{"type":"m-grid","category":"container","icon":"grid","cols":[{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"发光","label":"发光资源单独采集","labelAlign":"","defaultValue":false,"labelWidth":"150","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch74566"}],"options":{"name":"mGridCol43214","hidden":false,"span":24,"offset":0,"customClass":""},"id":"m-grid-col-43214"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-radio","icon":"radio-field","formItemFlag":true,"options":{"name":"首次卡广告","label":"","labelAlign":"","defaultValue":1,"iconSize":15,"direction":"horizontal","labelWidth":"","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"dsEnabled":false,"dsName":"","labelKey":"label","valueKey":"value","optionItems":[{"label":"AD1","value":1},{"label":"AD2","value":2},{"label":"NO","value":3}],"required":false,"requiredHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mradio76974"}],"options":{"name":"mGridCol46351","hidden":false,"span":18,"offset":0,"customClass":[]},"id":"m-grid-col-46351"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-button","icon":"button","formItemFlag":false,"options":{"name":"清空探索开箱","label":"重选探索开箱","size":"small","displayStyle":"block","disabled":false,"hidden":false,"type":"primary","plain":false,"round":false,"icon":null,"customClass":"","onCreated":"","onMounted":"","onClick":"let 探=this.getWidgetRef(\"探索\")\nlet 箱=this.getWidgetRef(\"箱\")\nlet 探索条件=this.getWidgetRef(\"探索条件\")\nlet 开箱条件=this.getWidgetRef(\"开箱条件\")\n探.setValue(true)\n箱.setValue(true)\n探索条件.setHidden(false)\n开箱条件.setHidden(false)\n探索条件.setValue([])\n开箱条件.setValue([])"},"id":"mbutton8879"}],"options":{"name":"mGridCol37892","hidden":false,"span":6,"offset":0,"customClass":""},"id":"m-grid-col-37892"}],"options":{"name":"mgrid13162","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"mgrid13162"},{"type":"m-checkbox","icon":"checkbox-field","formItemFlag":true,"options":{"name":"探索条件","label":"探索条件","labelAlign":"","defaultValue":[],"iconSize":15,"direction":"horizontal","labelWidth":"0","labelHidden":true,"readonly":false,"disabled":false,"hidden":true,"dsEnabled":false,"dsName":"","labelKey":"label","valueKey":"value","optionItems":[{"value":"壹左","label":"1左"},{"value":"贰左","label":"2左"},{"value":"叁左","label":"3左"},{"value":"肆左","label":"4左"},{"value":"伍左","label":"5左"},{"value":"壹紫","label":"1紫"},{"value":"贰紫","label":"2紫"},{"value":"叁紫","label":"3紫"},{"value":"肆紫","label":"4紫"},{"value":"伍紫","label":"5紫"},{"value":"壹宝","label":"1宝"},{"value":"贰宝","label":"2宝"},{"value":"叁宝","label":"3宝"},{"value":"肆宝","label":"4宝"},{"value":"伍宝","label":"5宝"}],"required":false,"requiredHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"front","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mcheckbox102567"},{"type":"m-checkbox","icon":"checkbox-field","formItemFlag":true,"options":{"name":"开箱条件","label":"开箱条件","labelAlign":"","defaultValue":[],"iconSize":15,"direction":"horizontal","labelWidth":null,"labelHidden":true,"readonly":false,"disabled":false,"hidden":true,"dsEnabled":false,"dsName":"","labelKey":"label","valueKey":"value","optionItems":[{"value":"壹木","label":"1木"},{"value":"贰木","label":"2木"},{"value":"叁木","label":"3木"},{"value":"肆木","label":"4木"},{"value":"伍木","label":"5木"},{"value":"壹铁","label":"1铁"},{"value":"贰铁","label":"2铁"},{"value":"叁铁","label":"3铁"},{"value":"肆铁","label":"4铁"},{"value":"伍铁","label":"5铁"},{"value":"壹花","label":"1花"},{"value":"贰花","label":"2花"},{"value":"叁花","label":"3花"},{"value":"肆花","label":"4花"},{"value":"伍花","label":"5花"}],"required":false,"requiredHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mcheckbox63707"},{"type":"m-grid","category":"container","icon":"grid","cols":[{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-button","icon":"button","formItemFlag":false,"options":{"name":"一键开启","label":"一键开启","size":"small","displayStyle":"inline","disabled":false,"hidden":false,"type":"danger","plain":false,"round":true,"icon":null,"customClass":"","onCreated":"","onMounted":"","onClick":"let 加速=this.getWidgetRef(\"加速\")\nlet 采补=this.getWidgetRef(\"采补\")\nlet 福袋=this.getWidgetRef(\"福袋\")\nlet 四捐=this.getWidgetRef(\"四捐\")\nlet 道侣赠送=this.getWidgetRef(\"道侣赠送\")\nlet 领刷新卡=this.getWidgetRef(\"领刷新卡\")\n加速.setValue(true)\n采补.setValue(true)\n福袋.setValue(true)\n四捐.setValue(true)\n道侣赠送.setValue(true)\n领刷新卡.setValue(true)"},"id":"mbutton58494"}],"options":{"name":"mGridCol108459","hidden":false,"span":5,"offset":0,"customClass":""},"id":"m-grid-col-108459"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"alert","icon":"alert","formItemFlag":false,"options":{"name":"alert37266","title":"只对五福_四捐_加速_采补_领刷新_道侣生效","type":"info","closable":false,"showIcon":false,"effect":"dark","hidden":false,"onClose":"","customClass":"","label":"alert"},"id":"alert37266"}],"options":{"name":"mGridCol88923","hidden":false,"span":14,"offset":0,"customClass":""},"id":"m-grid-col-88923"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-button","icon":"button","formItemFlag":false,"options":{"name":"一键关闭","label":"一键关闭","size":"small","displayStyle":"inline","disabled":false,"hidden":false,"type":"","plain":false,"round":true,"icon":null,"customClass":"","onCreated":"","onMounted":"","onClick":"let 加速=this.getWidgetRef(\"加速\")\nlet 采补=this.getWidgetRef(\"采补\")\nlet 福袋=this.getWidgetRef(\"福袋\")\nlet 四捐=this.getWidgetRef(\"四捐\")\nlet 道侣赠送=this.getWidgetRef(\"道侣赠送\")\nlet 领刷新卡=this.getWidgetRef(\"领刷新卡\")\n加速.setValue(false)\n采补.setValue(false)\n福袋.setValue(false)\n四捐.setValue(false)\n道侣赠送.setValue(false)\n领刷新卡.setValue(false)"},"id":"mbutton76127"}],"options":{"name":"mGridCol95529","hidden":false,"span":5,"offset":0,"customClass":""},"id":"m-grid-col-95529"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"领刷新卡","label":"领刷新卡","labelAlign":"","defaultValue":true,"labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch68075"}],"options":{"name":"mGridCol59589","hidden":false,"span":12,"offset":0,"customClass":[]},"id":"m-grid-col-59589"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"道侣赠送","label":"道侣赠送","labelAlign":"","defaultValue":true,"labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch54894"}],"options":{"name":"mGridCol34016","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-34016"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"加速","label":"日常加速","labelAlign":"","defaultValue":false,"labelWidth":"","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch79616"}],"options":{"name":"mGridCol21785","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-21785"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"采补","label":"日常采补","labelAlign":"","defaultValue":false,"labelWidth":"","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch77690"}],"options":{"name":"mGridCol53673","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-53673"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"四捐","label":"四捐","labelAlign":"left","defaultValue":false,"labelWidth":"80","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":"#FFFFFF","onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch18578"}],"options":{"name":"mGridCol63054","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-63054"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"福袋","label":"五福","labelAlign":"","defaultValue":false,"labelWidth":"80","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":"#FFFFFF","onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch80322"}],"options":{"name":"mGridCol31418","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-31418"}],"options":{"name":"mgrid86257","hidden":false,"gutter":0,"colHeight":null,"customClass":""},"id":"mgrid86257"}],"options":{"name":"m-tab-pane-53437","label":"配置","hidden":false,"active":false,"disabled":false,"customClass":""},"id":"m-tab-pane-53437"},{"type":"m-tab-pane","category":"container","icon":"tab-pane","internal":true,"widgetList":[{"type":"m-static-text","icon":"static-text","formItemFlag":false,"options":{"name":"mstatictext76220","hidden":false,"textContent":"铲:铲便便","fontSize":"12px","customClass":[],"onCreated":"","onMounted":"","label":"m-static-text"},"id":"mstatictext76220"},{"type":"m-static-text","icon":"static-text","formItemFlag":false,"options":{"name":"mstatictext111470","hidden":false,"textContent":"刷:家园免费刷新","fontSize":"12px","customClass":[],"onCreated":"","onMounted":"","label":"m-static-text"},"id":"mstatictext111470"},{"type":"m-static-text","icon":"static-text","formItemFlag":false,"options":{"name":"mstatictext67740","hidden":false,"textContent":"补:(采集情况下)家园可上阵兽不为0时,搜索离家里最近的资源,补满上阵兽","fontSize":"13px","customClass":[],"onCreated":"","onMounted":"","label":"m-static-text"},"id":"mstatictext67740"},{"type":"m-static-text","icon":"static-text","formItemFlag":false,"options":{"name":"mstatictext67670","hidden":false,"textContent":"探:勾选的探索,未勾选的不探索","fontSize":"13px","customClass":[],"onCreated":"","onMounted":"","label":"m-static-text"},"id":"mstatictext67670"},{"type":"m-static-text","icon":"static-text","formItemFlag":false,"options":{"name":"mstatictext51431","hidden":false,"textContent":"箱:探索后勾选的开箱,未勾选的销毁","fontSize":"13px","customClass":"","onCreated":"","onMounted":"","label":"m-static-text"},"id":"mstatictext51431"},{"type":"m-static-text","icon":"static-text","formItemFlag":false,"options":{"name":"mstatictext42196","hidden":false,"textContent":"偷:采集临时列表(红蓝时无效)","fontSize":"13px","customClass":"","onCreated":"","onMounted":"","label":"m-static-text"},"id":"mstatictext42196"},{"type":"m-static-text","icon":"static-text","formItemFlag":false,"options":{"name":"mstatictext110375","hidden":false,"textContent":"发光资源单独采集:勾选时建议10以上的资源,精卫上阵数量设置为0,可防止丢便便偷资源(参加了红蓝或异常时请取消勾选),不勾时默认精卫采集","fontSize":"13px","customClass":[],"onCreated":"","onMounted":"","label":"m-static-text"},"id":"mstatictext110375"},{"type":"m-static-text","icon":"static-text","formItemFlag":false,"options":{"name":"mstatictext82193","hidden":false,"textContent":"运行前卡广告:更多福利离有<一刀传世>游戏时可勾选,若没有需取消勾选,手动卡广告","fontSize":"13px","customClass":[],"onCreated":"","onMounted":"","label":"m-static-text"},"id":"mstatictext82193"}],"options":{"name":"m-tab-pane-28725","label":"说明","hidden":false,"active":false,"disabled":false,"customClass":""},"id":"m-tab-pane-28725"}],"options":{"name":"标签页","active":"m-tab-pane-53437","hidden":false,"displayType":"border-card","customClass":[],"colorStyle":"#EF0909","textEllipsis":false},"id":"mtab63267"},{"type":"m-divider","icon":"divider","formItemFlag":false,"options":{"name":"mdivider43083","label":"账号配置","dashed":false,"contentPosition":"center","hidden":false,"customClass":"","onCreated":"","onMounted":""},"id":"mdivider43083"},{"type":"m-input","icon":"text-field","formItemFlag":true,"options":{"name":"卡密","label":"卡密:","labelAlign":"","type":"password","defaultValue":"","placeholder":"","size":"","labelWidth":null,"labelHidden":false,"inputAlign":"left","readonly":false,"disabled":false,"hidden":false,"clearable":true,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"maxLength":null,"showWordLimit":false,"leftIcon":"","rightIcon":"","appendButton":false,"appendButtonType":"primary","appendButtonLabel":"登录","appendButtonIcon":"","appendButtonDisabled":false,"onCreated":"","onMounted":"","onInput":"","onFocus":"","onBlur":"","onAppendButtonClick":"","onValidate":""},"id":"minput35828"},{"type":"m-grid","category":"container","icon":"grid","cols":[{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-textarea","icon":"textarea-field","formItemFlag":true,"options":{"name":"爆点范围","label":"爆点范围","labelAlign":"","rows":15,"defaultValue":"","placeholder":"","size":"large","labelWidth":null,"labelHidden":true,"inputAlign":"left","readonly":false,"disabled":false,"hidden":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"maxLength":null,"showWordLimit":false,"onCreated":"","onMounted":"","onInput":"","onFocus":"","onBlur":"","onValidate":""},"id":"mtextarea70812"}],"options":{"name":"mGridCol41076","hidden":false,"span":8,"offset":0,"customClass":[]},"id":"m-grid-col-41076"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-textarea","icon":"textarea-field","formItemFlag":true,"options":{"name":"合兽列表","label":"合兽列表","labelAlign":"","rows":15,"defaultValue":"","placeholder":"","size":"large","labelWidth":null,"labelHidden":true,"inputAlign":"left","readonly":false,"disabled":false,"hidden":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"maxLength":null,"showWordLimit":false,"onCreated":"var 爆点范围 = this.getWidgetRef('爆点范围')\nvar 合兽列表 = this.getWidgetRef('合兽列表')\nlet data=axios.get(\"https://www.fastmock.site/mock/4f4d29a74b1abbc17d628578e8290fbb/ui1/setBoom\")\n.then(res=>{\n  if (res.status==200) {\n    爆点范围.setValue(res.data.爆点范围)\n    合兽列表.setValue(res.data.合兽列表)\n  }\n})","onMounted":"","onInput":"","onFocus":"","onBlur":"","onValidate":""},"id":"mtextarea47128"}],"options":{"name":"mGridCol98581","hidden":false,"span":16,"offset":0,"customClass":""},"id":"m-grid-col-98581"}],"options":{"name":"mgrid115238","hidden":true,"gutter":12,"colHeight":null,"customClass":""},"id":"mgrid115238"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelAlign":"label-left-align","colon":false,"inputAlign":"left","cssCode":"red1 {\n  color:red;\n}","customClass":"","functions":"","layoutType":"H5","jsonVersion":-2,"dataSources":[],"onFormCreated":"","onFormMounted":"","onFormDataChange":"","labelPosition":"left","size":""}}

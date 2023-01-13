const ui1={"widgetList":[{"type":"m-tab","category":"container","icon":"tab","tabs":[{"type":"m-tab-pane","category":"container","icon":"tab-pane","internal":true,"widgetList":[{"type":"m-input","icon":"text-field","formItemFlag":true,"options":{"name":"卡密","label":"卡密:","labelAlign":"","type":"text","defaultValue":"","placeholder":"","size":"","labelWidth":null,"labelHidden":false,"inputAlign":"left","readonly":false,"disabled":false,"hidden":false,"clearable":true,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"maxLength":null,"showWordLimit":false,"leftIcon":"","rightIcon":"","appendButton":false,"appendButtonType":"primary","appendButtonLabel":"登录","appendButtonIcon":"","appendButtonDisabled":false,"onCreated":"","onMounted":"","onInput":"","onFocus":"","onBlur":"","onAppendButtonClick":"","onValidate":""},"id":"minput35828"},{"type":"m-input","icon":"text-field","formItemFlag":true,"options":{"name":"jituuser","label":"极图账号","labelAlign":"","type":"text","defaultValue":"","placeholder":"","size":"","labelWidth":null,"labelHidden":false,"inputAlign":"left","readonly":false,"disabled":false,"hidden":false,"clearable":true,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"maxLength":null,"showWordLimit":false,"leftIcon":"","rightIcon":"","appendButton":false,"appendButtonType":"primary","appendButtonLabel":"","appendButtonIcon":"search","appendButtonDisabled":false,"onCreated":"","onMounted":"","onInput":"","onFocus":"","onBlur":"","onAppendButtonClick":"","onValidate":""},"id":"minput75796"},{"type":"m-input","icon":"text-field","formItemFlag":true,"options":{"name":"jitupwd","label":"极图密码","labelAlign":"","type":"password","defaultValue":"","placeholder":"","size":"","labelWidth":null,"labelHidden":false,"inputAlign":"left","readonly":false,"disabled":false,"hidden":false,"clearable":true,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"maxLength":null,"showWordLimit":false,"leftIcon":"","rightIcon":"","appendButton":false,"appendButtonType":"primary","appendButtonLabel":"","appendButtonIcon":"search","appendButtonDisabled":false,"onCreated":"","onMounted":"","onInput":"","onFocus":"","onBlur":"","onAppendButtonClick":"","onValidate":""},"id":"minput32386"}],"options":{"name":"tab1","label":"验证","hidden":false,"active":false,"disabled":false,"customClass":""},"id":"m-tab-pane-100068"},{"type":"m-tab-pane","category":"container","icon":"tab-pane","internal":true,"widgetList":[{"type":"m-button","icon":"button","formItemFlag":false,"options":{"name":"mbutton43035","label":"识别蛋","size":"small","displayStyle":"block","disabled":false,"hidden":false,"type":"primary","plain":false,"round":false,"icon":null,"customClass":[],"onCreated":"","onMounted":"","onClick":"let a=`fn.js_jitu([531,691,620,719])`\n window.bridge.callLua(a);"},"id":"mbutton43035"}],"options":{"name":"m-tab-pane-39080","label":"功能","hidden":false,"active":false,"disabled":false,"customClass":""},"id":"m-tab-pane-39080"},{"type":"m-tab-pane","category":"container","icon":"tab-pane","internal":true,"widgetList":[{"type":"m-radio","icon":"radio-field","formItemFlag":true,"options":{"name":"pkg","label":"启动浏览器:","labelAlign":"left","defaultValue":"sogou.mobile.explorer","iconSize":20,"direction":"horizontal","labelWidth":"84","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"dsEnabled":false,"dsName":"","labelKey":"label","valueKey":"value","optionItems":[{"label":"搜狗","value":"sogou.mobile.explorer"},{"label":"QQ","value":"com.tencent.mtt"}],"required":false,"requiredHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mradio92662"},{"type":"m-radio","icon":"radio-field","formItemFlag":true,"options":{"name":"一键合成","label":"","labelAlign":"","defaultValue":2,"iconSize":20,"direction":"horizontal","labelWidth":null,"labelHidden":true,"readonly":false,"disabled":false,"hidden":false,"dsEnabled":false,"dsName":"","labelKey":"label","valueKey":"value","optionItems":[{"label":"一键合成","value":1},{"value":2,"label":"普通合成"},{"value":3,"label":"日常优先"}],"required":false,"requiredHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"var 合兽跳级 = this.getWidgetRef('合兽跳级')\nvar 彩石 = this.getWidgetRef('彩石')\nvar 加速 = this.getWidgetRef('加速')\nvar 采补 = this.getWidgetRef('采补')\nif(value==1){\n  合兽跳级.setValue(\"[47]\")\n}else if(value==2){\n  合兽跳级.setValue(\"[42,43,47]\")\n}else if(value==3){\n  加速.setValue(true)\n  采补.setValue(true)\n}","onValidate":""},"id":"mradio109128"},{"type":"alert","icon":"alert","formItemFlag":false,"options":{"name":"alert97141","title":"日常优先时先手动清理下异兽,数量过多导致采补异常","type":"warning","closable":true,"showIcon":true,"effect":"dark","hidden":false,"onClose":"","customClass":"","label":"alert"},"id":"alert97141"},{"type":"m-grid","category":"container","icon":"grid","cols":[{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"加速","label":"日常加速","labelAlign":"","defaultValue":true,"labelWidth":"","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch79616"},{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"福袋","label":"福袋","labelAlign":"","defaultValue":true,"labelWidth":"80","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":"#FFFFFF","onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch80322"}],"options":{"name":"mGridCol108459","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-108459"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"采补","label":"日常采补","labelAlign":"","defaultValue":true,"labelWidth":"","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch77690"},{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"四捐","label":"四捐","labelAlign":"left","defaultValue":true,"labelWidth":"80","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":"#FFFFFF","onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch18578"}],"options":{"name":"mGridCol88923","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-88923"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"领刷新卡","label":"领刷新卡","labelAlign":"","defaultValue":false,"labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch68075"}],"options":{"name":"mGridCol64909","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-64909"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-switch","icon":"switch-field","formItemFlag":true,"options":{"name":"道侣赠送","label":"道侣赠送","labelAlign":"","defaultValue":false,"labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchSize":15,"activeValue":true,"inactiveValue":false,"activeLabel":"","inactiveLabel":"","activeColor":"#FF0000","inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"mswitch54894"}],"options":{"name":"mGridCol87500","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-87500"}],"options":{"name":"mgrid86257","hidden":false,"gutter":0,"colHeight":null,"customClass":""},"id":"mgrid86257"},{"type":"m-input","icon":"text-field","formItemFlag":true,"options":{"name":"合兽跳级","label":"跳级","labelAlign":"","type":"text","defaultValue":"[42,43,47]","placeholder":"","size":"","labelWidth":null,"labelHidden":false,"inputAlign":"left","readonly":false,"disabled":false,"hidden":false,"clearable":true,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"maxLength":null,"showWordLimit":false,"leftIcon":"","rightIcon":"","appendButton":false,"appendButtonType":"primary","appendButtonLabel":"","appendButtonIcon":"search","appendButtonDisabled":false,"onCreated":"","onMounted":"","onInput":"","onFocus":"","onBlur":"","onAppendButtonClick":"","onValidate":""},"id":"minput37067"},{"type":"m-number","icon":"number-field","formItemFlag":true,"options":{"name":"彩石","label":"彩石","labelAlign":"","defaultValue":"1","placeholder":"","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onInput":"","onFocus":"","onBlur":"","onValidate":""},"id":"mnumber19052"}],"options":{"name":"m-tab-pane-53437","label":"配置","hidden":false,"active":false,"disabled":false,"customClass":""},"id":"m-tab-pane-53437"},{"type":"m-tab-pane","category":"container","icon":"tab-pane","internal":true,"widgetList":[{"type":"m-html-text","icon":"html-text","formItemFlag":false,"options":{"name":"mhtmltext35883","hidden":false,"htmlContent":"<h4>一键合成条件:</h4>\n<p>46级异兽小于6只只锁定46,执行一键合成</p>\n<p>46级异兽大于15只只解锁46,执行普通合成</p>\n<p>46级异兽大于15只只解锁46,执行普通合成</p>\n<h4>彩石设置:</h4>\n<p>彩石设置为0时只守家,默认为1</p>\n<h4>跳级设置:</h4>\n<p>只跳47:[47]</p>\n<p>跳42,43,47:[42,43,47]</p>\n<p>格式:用中括号包裹,逗号分割(统一用英文符号)</p>","customClass":[],"onCreated":"","onMounted":"","label":"m-html-text"},"id":"mhtmltext35883"}],"options":{"name":"m-tab-pane-28725","label":"说明","hidden":false,"active":false,"disabled":false,"customClass":""},"id":"m-tab-pane-28725"}],"options":{"name":"标签页","active":"m-tab-pane-39080","hidden":false,"displayType":"border-card","customClass":[],"colorStyle":"#EF0909","textEllipsis":false},"id":"mtab63267"},{"type":"m-grid","category":"container","icon":"grid","cols":[{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-textarea","icon":"textarea-field","formItemFlag":true,"options":{"name":"爆点范围","label":"爆点范围","labelAlign":"","rows":15,"defaultValue":"","placeholder":"","size":"large","labelWidth":null,"labelHidden":true,"inputAlign":"left","readonly":false,"disabled":false,"hidden":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"maxLength":null,"showWordLimit":false,"onCreated":"","onMounted":"","onInput":"","onFocus":"","onBlur":"","onValidate":""},"id":"mtextarea70812"}],"options":{"name":"mGridCol41076","hidden":false,"span":8,"offset":0,"customClass":[]},"id":"m-grid-col-41076"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-textarea","icon":"textarea-field","formItemFlag":true,"options":{"name":"合兽列表","label":"合兽列表","labelAlign":"","rows":15,"defaultValue":"","placeholder":"","size":"large","labelWidth":null,"labelHidden":true,"inputAlign":"left","readonly":false,"disabled":false,"hidden":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"maxLength":null,"showWordLimit":false,"onCreated":"var 爆点范围 = this.getWidgetRef('爆点范围')\nvar 合兽列表 = this.getWidgetRef('合兽列表')\nlet data=axios.get(\"https://www.fastmock.site/mock/4f4d29a74b1abbc17d628578e8290fbb/ui1/setBoom\")\n.then(res=>{\n  if (res.status==200) {\n    爆点范围.setValue(res.data.爆点范围)\n    合兽列表.setValue(res.data.合兽列表)\n  }\n})","onMounted":"","onInput":"","onFocus":"","onBlur":"","onValidate":""},"id":"mtextarea47128"}],"options":{"name":"mGridCol98581","hidden":false,"span":16,"offset":0,"customClass":""},"id":"m-grid-col-98581"}],"options":{"name":"mgrid115238","hidden":true,"gutter":12,"colHeight":null,"customClass":""},"id":"mgrid115238"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelAlign":"label-left-align","colon":false,"inputAlign":"left","cssCode":"","customClass":"","functions":"","layoutType":"H5","jsonVersion":-2,"dataSources":[],"onFormCreated":"","onFormMounted":"","onFormDataChange":""}}

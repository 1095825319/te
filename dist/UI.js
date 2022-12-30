const ui1={"widgetList":[{"type":"m-tab","category":"container","icon":"tab","tabs":[{"type":"m-tab-pane","category":"container","icon":"tab-pane","internal":true,"widgetList":[],"options":{"name":"tab1","label":"验证","hidden":false,"active":false,"disabled":false,"customClass":""},"id":"m-tab-pane-100068"},{"type":"m-tab-pane","category":"container","icon":"tab-pane","internal":true,"widgetList":[{"type":"m-grid","category":"container","icon":"grid","cols":[{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-button","icon":"button","formItemFlag":false,"options":{"name":"showboom","label":"显示爆点和等级","size":"large","displayStyle":"block","disabled":false,"hidden":false,"type":"warning","plain":false,"round":true,"icon":null,"customClass":[],"onCreated":"","onMounted":"","onClick":"\nlet a = `js_showboomandlv()`\nwindow.bridge.callLua(a);"},"id":"mbutton73652"}],"options":{"name":"mGridCol109606","hidden":false,"span":12,"offset":0,"customClass":""},"id":"m-grid-col-109606"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-button","icon":"button","formItemFlag":false,"options":{"name":"设置爆点范围","label":"设置爆点范围","size":"large","displayStyle":"block","disabled":false,"hidden":false,"type":"primary","plain":false,"round":false,"icon":null,"customClass":[],"onCreated":"","onMounted":"","onClick":"var 爆点范围 = this.getWidgetRef('爆点范围')\nlet data=axios.get(\"https://www.fastmock.site/mock/4f4d29a74b1abbc17d628578e8290fbb/ui1/setBoom\")\n.then(res=>{\n  if (res.status==200) {\n    console.log(res.data.data)\n    爆点范围.setValue(res.data.data)\n  }\n})\n"},"id":"mbutton16864"}],"options":{"name":"mGridCol39025","hidden":false,"span":12,"offset":0,"customClass":[]},"id":"m-grid-col-39025"}],"options":{"name":"mgrid99084","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"mgrid99084"}],"options":{"name":"m-tab-pane-39080","label":"功能","hidden":false,"active":false,"disabled":false,"customClass":""},"id":"m-tab-pane-39080"},{"type":"m-tab-pane","category":"container","icon":"tab-pane","internal":true,"widgetList":[{"type":"collapse","category":"container","icon":"card","widgetList":[{"type":"collapse-item","category":"container","icon":"card","internal":true,"widgetList":[{"type":"m-grid","category":"container","icon":"grid","cols":[{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-textarea","icon":"textarea-field","formItemFlag":true,"options":{"name":"爆点范围","label":"爆点范围","labelAlign":"","rows":15,"defaultValue":"","placeholder":"","size":"large","labelWidth":null,"labelHidden":true,"inputAlign":"left","readonly":false,"disabled":false,"hidden":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"maxLength":null,"showWordLimit":false,"onCreated":"","onMounted":"","onInput":"","onFocus":"","onBlur":"","onValidate":""},"id":"mtextarea70812"}],"options":{"name":"mGridCol41076","hidden":false,"span":8,"offset":0,"customClass":""},"id":"m-grid-col-41076"},{"type":"m-grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"m-textarea","icon":"textarea-field","formItemFlag":true,"options":{"name":"合兽列表","label":"合兽列表","labelAlign":"","rows":15,"defaultValue":"","placeholder":"","size":"large","labelWidth":null,"labelHidden":true,"inputAlign":"left","readonly":false,"disabled":false,"hidden":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","maxLength":null,"showWordLimit":false,"onCreated":"","onMounted":"","onInput":"","onFocus":"","onBlur":"","onValidate":""},"id":"mtextarea47128"}],"options":{"name":"mGridCol98581","hidden":false,"span":16,"offset":0,"customClass":""},"id":"m-grid-col-98581"}],"options":{"name":"mgrid115238","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"mgrid115238"}],"id":"collapse-item-107387","options":{"title":"爆点合成列表","value":"","label":"collapse-item-1","border":true,"expand":true,"icon":"","is-link":true,"disabled":false,"readonly":false,"lazy-render":false,"size":"","title-class":"","value-class":"","label-class":"","name":"collapse-item-107387"}},{"type":"collapse-item","category":"container","icon":"card","internal":true,"widgetList":[{"type":"m-input","icon":"text-field","formItemFlag":true,"options":{"name":"合兽跳级","label":"m-input","labelAlign":"","type":"text","defaultValue":"[42,43,47]","placeholder":"","size":"","labelWidth":null,"labelHidden":true,"inputAlign":"left","readonly":false,"disabled":false,"hidden":false,"clearable":true,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"maxLength":null,"showWordLimit":false,"leftIcon":"","rightIcon":"","appendButton":false,"appendButtonType":"primary","appendButtonLabel":"","appendButtonIcon":"search","appendButtonDisabled":false,"onCreated":"","onMounted":"","onInput":"","onFocus":"","onBlur":"","onAppendButtonClick":"","onValidate":""},"id":"minput37067"}],"options":{"title":"合兽跳级列表","value":"","label":"collapse-item-2","border":true,"expand":true,"icon":"","is-link":true,"disabled":false,"readonly":false,"lazy-render":false,"size":"","title-class":"","value-class":"","label-class":"","name":"collapse-item-89859"},"id":"collapse-item-89859"}],"options":{"name":"配置","label":"配置:","defaultValue":"","expandName":"collapse-item-107387","hidden":false,"border":true,"accordion":true,"customClass":[]},"id":"collapse53219"}],"options":{"name":"m-tab-pane-53437","label":"配置","hidden":false,"active":false,"disabled":false,"customClass":""},"id":"m-tab-pane-53437"},{"type":"m-tab-pane","category":"container","icon":"tab-pane","internal":true,"widgetList":[],"options":{"name":"m-tab-pane-28725","label":"说明","hidden":false,"active":false,"disabled":false,"customClass":""},"id":"m-tab-pane-28725"}],"options":{"name":"标签页","active":"m-tab-pane-39080","hidden":false,"displayType":"border-card","customClass":[],"colorStyle":"#EF0909","textEllipsis":true},"id":"mtab63267"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelAlign":"label-left-align","colon":false,"inputAlign":"left","cssCode":"","customClass":"","functions":"","layoutType":"H5","jsonVersion":-2,"dataSources":[],"onFormCreated":"","onFormMounted":"","onFormDataChange":""}}

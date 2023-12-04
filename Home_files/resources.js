typeof Aura === "undefined" && (Aura = {});

(function() { 
	 function initAccessResources() {
			 $A.componentService.addModule('markup://force:customPerms', 'force/customPerms', ['exports'], null, {}); 
			 $A.componentService.addModule('markup://force:userPerms', 'force/userPerms', ['exports'], null, {ChatterEditOwnRecordPost: true,EnableNotifications: true,EmailSingle: true,EditTask: true,ActivitiesAccess: true,EditEvent: true,ShareFilesWithNetworks: true,RunFlow: true,ChatterEditOwnPost: true,ApiEnabled: true,SelectFilesFromSalesforce: true,EnableCommunityAppLauncher: true,}); 
	 };
	 if(Aura.frameworkJsReady)initAccessResources();else{Aura.beforeFrameworkInit=Aura.beforeFrameworkInit||[],Aura.beforeFrameworkInit.push(initAccessResources)}
})(); 
Aura.StaticResourceMap = {"OpenCase":{"":1654021513000},"TH_Time_Helper_Behavior":{"MPM4_BASE":1688735602000},"secureFilters":{"et4ae5":1681002618000},"PT_TimePicker_JS":{"rh2":1675370584000},"Milestone2_jsgantt":{"MPM4_BASE":1688735602000},"Milestone2_Gantt_Behavior":{"MPM4_BASE":1688735602000},"Milestone2_gantt_chart_page":{"MPM4_BASE":1688735602000},"MPMProjTemplateTest":{"MPM4_BASE":1688735602000},"jQueryUI":{"et4ae5":1681002510000},"HS_Jquery":{"rh2":1684548028000},"RequiredField":{"et4ae5":1670363009000},"Milestone2_Project_Planner_Behavior":{"MPM4_BASE":1688735602000},"MPM_Admin_Guide":{"MPM4_BASE":1688735602000},"AverageDealSize":{"rh2":1684548028000},"NoAccess2_svg":{"et4ae5":1670363009000},"PMT_StyleUtility":{"inov8":1653660266000},"FullCalendar":{"MPM4_BASE":1688735602000},"PMT_Status_logos":{"inov8":1653660266000},"PT_JSZip":{"rh2":1684548028000},"MSProjTemplateTest":{"MPM4_BASE":1688735602000},"Jasmine_v2":{"MPM4_BASE":1688735602000},"SNA_goWMU1_sf_edge_UBUeF":{"":1700064869000},"componentStyles":{"et4ae5":1670363009000},"Milestone1_Resource_Bundle":{"MPM4_BASE":1688735602000},"jszip":{"dlrs":1640035534000},"SalImages":{"sfal":1686504256000},"PT_Resources_v1":{"MPM4_BASE":1688735602000,"rh2":1684548029000},"Milestone1_JSZip":{"MPM4_BASE":1688735602000},"Milestone2_Project_Planner":{"MPM4_BASE":1688735602000},"Tooltips":{"et4ae5":1670363009000},"svg4everybody":{"rh2":1675370584000},"uxds":{"et4ae5":1681002510000},"Milestone1_Charts":{"MPM4_BASE":1688735602000},"FavIconCircleW":{"":1656600362000},"JB_Icon":{"et4ae5":1670363009000},"bootstrap":{"et4ae5":1681002508000},"ExactTargetStyles":{"et4ae5":1670363009000},"PMT_Status_Images":{"inov8":1653660266000},"cfg_PopulatePreChatInformation":{"":1677528975000},"TubularPayload":{"sfal":1686504256000},"RequiredFieldG":{"et4ae5":1670363009000},"ganttMaster":{"MPM4_BASE":1688735602000},"Typeahead":{"et4ae5":1681002508000},"SiteSamples":{"":1645732722000},"TH_Time_Helper_js":{"MPM4_BASE":1688735602000},"ExactTargetImages":{"et4ae5":1681002507000},"jQueryUISlider":{"et4ae5":1681002510000},"SV":{"svmessaging":1684602590000},"MciLogin":{"et4ae5":1670363009000},"ImportExportTest":{"rh2":1675370584000},"Milestone2_gantt_drag":{"MPM4_BASE":1688735602000},"Milestone2_Complete_Action":{"MPM4_BASE":1688735602000},"SalIconLogEvent":{"sfal":1677509670000},"modStyle":{"et4ae5":1670363009000},"jQuery":{"et4ae5":1670363009000},"MSProjTemplateTest2":{"MPM4_BASE":1688735602000},"SLDS100":{"et4ae5":1681002508000},"MSProjTemplateTest3":{"MPM4_BASE":1688735602000},"fuelUX":{"et4ae5":1681002509000},"WMURoundLogo":{"":1677528975000},"PT_TimePicker_CSS":{"rh2":1675370584000},"desert_svg":{"et4ae5":1670363009000},"LightningMarketingCloudStyles":{"et4ae5":1670363009000}};

(function() {
function initResourceGVP() {
if (!$A.getContext() || !$A.get('$Resource')) {
$A.addValueProvider('$Resource',
{
merge : function() {},
isStorable : function() { return false; },
get : function(resource) {
var modStamp, rel, abs, name, ns;
var nsDelim = resource.indexOf('__');
if (nsDelim >= 0) { ns = resource.substring(0, nsDelim); name = resource.substring(nsDelim + 2); } else { name = resource; }
var srMap = Aura.StaticResourceMap[name];
modStamp = srMap && srMap[ns = ns || Object.keys(srMap)[0]];
if (!modStamp) { return; }
rel = $A.get('$SfdcSite.pathPrefix');
abs = $A.get('$Absolute.url');
return [(abs || rel || ''), '/resource/', modStamp, '/', ns === '' ? name : ns + '__' + name].join('');
}
});
}
}
if(Aura.frameworkJsReady)initResourceGVP();else{Aura.beforeFrameworkInit=Aura.beforeFrameworkInit||[],Aura.beforeFrameworkInit.push(initResourceGVP)}
})();
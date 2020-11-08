launch("com.veepoo.hband");
sleep(2500);
id("fragment_home_lay_ecg").findOne().click()
sleep(300);
id("ecg_detect").findOne().click()
sleep(300);
id("ecg_detect_but").findOne().click()


//sleep(2000);

//com.veepoo.hband.activity.connected.detect.EcgDetectActivity
app.startActivity({
  action: "View",
  packageName:"com.veepoo.hband",
  className:"com.veepoo.hband.activity.connected.setting.PersonWatchSettingActivity"});



id("textview").className("android.widget.TextView").text("我的").findOne().parent().click();


id("fragment_setting_list").findOne().children().forEach(child => {
var target = child.findOne(id("setting_list_content_0"));
target.click();
});


id("bleconnect_success_list").findOne().children().forEach(child => {
var target = child.findOne(id("setting_list_content"));
target.click();
});

bounds = (846,1174,1039,1279)
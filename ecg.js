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

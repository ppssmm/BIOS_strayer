auto();


home();

sleep(1000);
var widget = id("icon_icon").className("android.widget.ImageView").desc("健康码").findOne();
click(widget.bounds().centerX(), widget.bounds().centerY());

sleep(4000);
className("android.view.View").text("立即查看").findOne().click();
sleep(12000);

picget();
sleep(800);
click(1000,10);
sleep(3000);
click(844,570);
sleep(3000);
click(898,851);
sleep(5000);
picget();

function picget(){

//表示从位置(500, 10)滑动到位置(500, 1000), 持续两秒
swipe(500, 10, 500, 1000, 500);
sleep(1000);
swipe(500, 400, 500, 1000, 500);
sleep(1000);
click(400,700);
sleep(1800);
click(500,10);
}
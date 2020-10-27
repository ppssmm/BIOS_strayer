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
sleep(1000);
home();
sleep(1000);
var widget = id("icon_icon").className("android.widget.ImageView").desc("浦东二中心智慧校园").findOne();
click(widget.bounds().centerX(), widget.bounds().centerY());
sleep(4000);
//点击上报
click(400,700);
sleep(1000);
//点击上传PYL图片
click(450,1700);
sleep(1000);
//选图片
click(400,370);
sleep(1000);
click(933,165);
sleep(1000);
//下拉到底
swipe(1500, 5000, 200, 500, 500);
swipe(1500, 5000, 200, 500, 500);
sleep(1000);
//点击上传PSM图片
//点击上传PSM图片
click(450,1350);
sleep(1000);
//选图片
click(680,370);
sleep(1000);
click(933,165);
sleep(1000);
//点击上报
//TBD
click(450,1350);
sleep(1000);
//点击确定两次
click(800,1624);
sleep(1000);
click(800,1624);
sleep(1000);

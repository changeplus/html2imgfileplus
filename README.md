# html2imgfileplus

#### 介绍
用来将网页元素截屏成图片的Nb工具
gitee:[https://gitee.com/zhaiyuhan/html2imgfileplus](https://gitee.com/zhaiyuhan/html2imgfileplus)


#### 软件架构
没啥架构，就是好使


#### 安装教程
npm i html2imgfileplus -S

#### 使用说明

```
import html2imgfileplus from "html2imgfileplus";

//这个是vue的
//第一个参数，想截图的html元素实例
//第二个参数，一个返回了  图片流  和 图片地址的 obj
  methods: {
    screenShotDo(){
      html2imgfileplus.doSm(this.$refs.imageTofile, obj=>{
        console.log(obj)
      });
    }
  }
```

![输入图片说明](https://gitee.com/zhaiyuhan/html2imgfileplus/raw/master/image.png)



#### 参与贡献
就我一个人写的





# THE COOL CLUB（G330）

### 项目成员

牟虹颖 2020212205200 组长

陈钇弘 2020212205184

### 项目描述

实现一个纸牌网络商店（包含移动端），提供纸牌牌面预览、价格查询，以及加入、修改购物车内商品数量和购买的功能。

### 界面设计

![364f3f8c1005c16bbaec6928d2330bd](C:\Users\32536\Desktop\Final\readme_img\364f3f8c1005c16bbaec6928d2330bd.png)主页面

![446b466c7663c69e3927401109f740a](C:\Users\32536\Desktop\Final\readme_img\446b466c7663c69e3927401109f740a.png)商品详情页面

![1c97ad81356b231dd746b600b3c1e64](C:\Users\32536\Desktop\Final\readme_img\1c97ad81356b231dd746b600b3c1e64.png)购物车页面

![fb7b4e3ea140303e8a9a120b0852b9d](C:\Users\32536\Desktop\Final\readme_img\fb7b4e3ea140303e8a9a120b0852b9d.png)简介界面

### 本地存储

| 密钥         | 值                 | 类型   |
| ------------ | ------------------ | ------ |
| buy_num      | 用户购买数量       | string |
| buy_price    | 用户购买商品总价格 | string |
| buy_card     | 需要添加的html结构 | string |
| isCard_frame | 是否需要相框       | string |
| isBuy        | 用户是否购买新商品 | string |
| class_name   | 商品类名           | string |
| card_name    | 商品名称           | string |
| detail_src   | 图片路径           | string |
| detail_bk    | 图片背景颜色       | string |
| card_price   | 商品单价           | string |

### 功能模块

###### 浏览纸牌

1.在主页面通过鼠标点击事件，获取当前鼠标点击纸牌的图片路径detail_src、是否需要相框isCard_frame、图片背景detail_bk、纸牌所属类名class_name、纸牌名称card_name、纸牌价格card_price，并将获得到的数据上传到session storage中![1](C:\Users\32536\Desktop\Final\readme_img\1.png)
2.在商品详情页面，从session storage中获取数据并进行处理，根据是否需要相框isCard_frame的值判断是否需要添加类名card-frame![2](C:\Users\32536\Desktop\Final\readme_img\2.png)

###### 添加购物车

1.在商品详情界面有”Add to bug”的按钮，通过鼠标点击事件，获取当前纸牌的数量和价格，并将buy_num、buy_price、是否购买新的商品isBuy上传到session storage中，方便后续读取 ![3](C:\Users\32536\Desktop\Final\readme_img\3.png)
2.在购物车界面，从session storage中获取数据，判断用户是否购买了新的商品isBuy，以及纸牌是否需要相框isCard_frame，将需要添加的html结构通过append添加到’.buy-card’中 ![4](C:\Users\32536\Desktop\Final\readme_img\4.png)

![5](C:\Users\32536\Desktop\Final\readme_img\5.png)

######  计算价格 

在商品详情页面和购物车中都包含这个功能，主要判断点击按钮的是"+"还是"-"来控制数量和价格的改变，在商品详情页面，需要控制商品数量不为0，在购物车界面，当数量变为0时，需要将该纸牌从购物车中删除，并且每次更新数量和价格的时候都需要修改session storage中储存的buy_card（即html结构） ![6](C:\Users\32536\Desktop\Final\readme_img\6.png)

######  调节视口 

 通过媒体查询调节在不同视口下的css样式 ![7](C:\Users\32536\Desktop\Final\readme_img\7.png)
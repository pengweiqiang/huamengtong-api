define({  "name": "华蒙通APP API",  "version": "1.0.0",  "description": "一、必传传入参数：userName：用户名；macAddress：mac地址；optUserSid：用户id；appVersionName：app版本号 token：用户校验（登陆接口除外）\n\n二、统一返回参数格式 {code: 'SUCCESS',codeInfo: '操作成功!',data: { }}\n1）code：1.SUCCESS 代表接口访问正常 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.FAIL 代表接口访问有错 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.EXCEPTION 代表接口访问异常   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  4.INVALID_TOKEN 无效token，跳入登陆界面，重新登陆\n2）codeInfo：接口的访问信息\n3）data：具体返回信息",  "title": "华蒙通api",  "url": "http://192.168.1.214:9220/hmt-padmw",  "order": [    "User",    "login",    "Address",    "Home",    "getHotProducts",    "getExcellentBusiness",    "Cart",    "addCarts",    "getCarts",    "Product",    "getCategory",    "getProperties",    "createProductSpu",    "createProductSku",    "Price",    "Stock",    "Search",    "Order",    "createOrder",    "getOrders",    "getOrderDetailByOrderNo",    "saveBarginMoney",    "Pay",    "Supplier"  ],  "sampleUrl": false,  "defaultVersion": "0.0.0",  "apidoc": "0.3.0",  "generator": {    "name": "apidoc",    "time": "2017-06-21T02:13:43.981Z",    "url": "http://apidocjs.com",    "version": "0.17.5"  }});

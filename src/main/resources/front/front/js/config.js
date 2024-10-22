
var projectName = '高校学科竞赛平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '竞赛信息',
	url: './pages/jingsaixinxi/list.html'
}, 

{
	name: '竞赛资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot46869/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"领队教师","menuJump":"列表","tableName":"lingduijiaoshi"}],"menu":"领队教师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"竞赛类型","menuJump":"列表","tableName":"jingsaileixing"}],"menu":"竞赛类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"竞赛信息","menuJump":"列表","tableName":"jingsaixinxi"}],"menu":"竞赛信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学院","menuJump":"列表","tableName":"xueyuan"}],"menu":"学院管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"专业","menuJump":"列表","tableName":"zhuanye"}],"menu":"专业管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"获奖情况","menuJump":"列表","tableName":"huojiangqingkuang"}],"menu":"获奖情况管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"竞赛资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"竞赛信息列表","menuJump":"列表","tableName":"jingsaixinxi"}],"menu":"竞赛信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"题目类型","menuJump":"列表","tableName":"timuleixing"}],"menu":"题目类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"竞赛题库","menuJump":"列表","tableName":"jingsaitiku"}],"menu":"竞赛题库管理"},{"child":[{"buttons":["查看"],"menu":"竞赛类型","menuJump":"列表","tableName":"jingsaileixing"}],"menu":"竞赛类型管理"},{"child":[{"buttons":["查看"],"menu":"竞赛信息","menuJump":"列表","tableName":"jingsaixinxi"}],"menu":"竞赛信息管理"},{"child":[{"buttons":["查看","审核"],"menu":"参赛申请","menuJump":"列表","tableName":"cansaishenqing"}],"menu":"参赛申请管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"竞赛评分","menuJump":"列表","tableName":"jingsaipingfen"}],"menu":"竞赛评分管理"},{"child":[{"buttons":["审核","晋级","查看"],"menu":"参赛名单","menuJump":"列表","tableName":"cansaimingdan"}],"menu":"参赛名单管理"},{"child":[{"buttons":["查看","获奖"],"menu":"晋级名单","menuJump":"列表","tableName":"jinjimingdan"}],"menu":"晋级名单管理"},{"child":[{"buttons":["查看"],"menu":"获奖名单","menuJump":"列表","tableName":"huojiangmingdan"}],"menu":"获奖名单管理"},{"child":[{"buttons":["查看"],"menu":"竞赛总结","menuJump":"列表","tableName":"jingsaizongjie"}],"menu":"竞赛总结管理"},{"child":[{"buttons":["查看"],"menu":"报销清单","menuJump":"列表","tableName":"baoxiaoqingdan"}],"menu":"报销清单管理"},{"child":[{"buttons":["查看"],"menu":"成绩申诉","menuJump":"列表","tableName":"chengjishensu"}],"menu":"成绩申诉管理"},{"child":[{"buttons":["查看"],"menu":"参赛信息","menuJump":"列表","tableName":"cansaixinxi"}],"menu":"参赛信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"往年成绩","menuJump":"列表","tableName":"wangnianchengji"}],"menu":"往年成绩管理"},{"child":[{"buttons":["查看"],"menu":"获奖情况","menuJump":"列表","tableName":"huojiangqingkuang"}],"menu":"获奖情况管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"竞赛信息列表","menuJump":"列表","tableName":"jingsaixinxi"}],"menu":"竞赛信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"教师","tableName":"jiaoshi"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"竞赛题库","menuJump":"列表","tableName":"jingsaitiku"}],"menu":"竞赛题库管理"},{"child":[{"buttons":["查看"],"menu":"竞赛类型","menuJump":"列表","tableName":"jingsaileixing"}],"menu":"竞赛类型管理"},{"child":[{"buttons":["报名","查看"],"menu":"竞赛信息","menuJump":"列表","tableName":"jingsaixinxi"}],"menu":"竞赛信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"报名信息","menuJump":"列表","tableName":"baomingxinxi"}],"menu":"报名信息管理"},{"child":[{"buttons":["成绩申诉","查看"],"menu":"竞赛评分","menuJump":"列表","tableName":"jingsaipingfen"}],"menu":"竞赛评分管理"},{"child":[{"buttons":["查看"],"menu":"参赛名单","menuJump":"列表","tableName":"cansaimingdan"}],"menu":"参赛名单管理"},{"child":[{"buttons":["查看"],"menu":"晋级名单","menuJump":"列表","tableName":"jinjimingdan"}],"menu":"晋级名单管理"},{"child":[{"buttons":["查看"],"menu":"获奖名单","menuJump":"列表","tableName":"huojiangmingdan"}],"menu":"获奖名单管理"},{"child":[{"buttons":["查看"],"menu":"竞赛总结","menuJump":"列表","tableName":"jingsaizongjie"}],"menu":"竞赛总结管理"},{"child":[{"buttons":["查看"],"menu":"报销清单","menuJump":"列表","tableName":"baoxiaoqingdan"}],"menu":"报销清单管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"成绩申诉","menuJump":"列表","tableName":"chengjishensu"}],"menu":"成绩申诉管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"参赛信息","menuJump":"列表","tableName":"cansaixinxi"}],"menu":"参赛信息管理"},{"child":[{"buttons":["查看","报表"],"menu":"往年成绩","menuJump":"列表","tableName":"wangnianchengji"}],"menu":"往年成绩管理"},{"child":[{"buttons":["查看"],"menu":"获奖情况","menuJump":"列表","tableName":"huojiangqingkuang"}],"menu":"获奖情况管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"竞赛信息列表","menuJump":"列表","tableName":"jingsaixinxi"}],"menu":"竞赛信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"题目类型","menuJump":"列表","tableName":"timuleixing"}],"menu":"题目类型管理"},{"child":[{"buttons":["查看"],"menu":"竞赛题库","menuJump":"列表","tableName":"jingsaitiku"}],"menu":"竞赛题库管理"},{"child":[{"buttons":["查看"],"menu":"竞赛类型","menuJump":"列表","tableName":"jingsaileixing"}],"menu":"竞赛类型管理"},{"child":[{"buttons":["查看","参赛申请"],"menu":"竞赛信息","menuJump":"列表","tableName":"jingsaixinxi"}],"menu":"竞赛信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","参赛"],"menu":"参赛申请","menuJump":"列表","tableName":"cansaishenqing"}],"menu":"参赛申请管理"},{"child":[{"buttons":["查看","审核"],"menu":"报名信息","menuJump":"列表","tableName":"baomingxinxi"}],"menu":"报名信息管理"},{"child":[{"buttons":["查看"],"menu":"竞赛评分","menuJump":"列表","tableName":"jingsaipingfen"}],"menu":"竞赛评分管理"},{"child":[{"buttons":["查看"],"menu":"参赛名单","menuJump":"列表","tableName":"cansaimingdan"}],"menu":"参赛名单管理"},{"child":[{"buttons":["查看"],"menu":"晋级名单","menuJump":"列表","tableName":"jinjimingdan"}],"menu":"晋级名单管理"},{"child":[{"buttons":["查看"],"menu":"获奖名单","menuJump":"列表","tableName":"huojiangmingdan"}],"menu":"获奖名单管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"竞赛总结","menuJump":"列表","tableName":"jingsaizongjie"}],"menu":"竞赛总结管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"报销清单","menuJump":"列表","tableName":"baoxiaoqingdan"}],"menu":"报销清单管理"},{"child":[{"buttons":["查看"],"menu":"成绩申诉","menuJump":"列表","tableName":"chengjishensu"}],"menu":"成绩申诉管理"},{"child":[{"buttons":["查看"],"menu":"参赛信息","menuJump":"列表","tableName":"cansaixinxi"}],"menu":"参赛信息管理"},{"child":[{"buttons":["查看","报表"],"menu":"往年成绩","menuJump":"列表","tableName":"wangnianchengji"}],"menu":"往年成绩管理"},{"child":[{"buttons":["查看"],"menu":"获奖情况","menuJump":"列表","tableName":"huojiangqingkuang"}],"menu":"获奖情况管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"竞赛信息列表","menuJump":"列表","tableName":"jingsaixinxi"}],"menu":"竞赛信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"领队教师","tableName":"lingduijiaoshi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

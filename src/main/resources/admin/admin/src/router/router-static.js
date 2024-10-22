import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import jingsaitiku from '@/views/modules/jingsaitiku/list'
    import jinjimingdan from '@/views/modules/jinjimingdan/list'
    import jingsaizongjie from '@/views/modules/jingsaizongjie/list'
    import chengjishensu from '@/views/modules/chengjishensu/list'
    import jingsaipingfen from '@/views/modules/jingsaipingfen/list'
    import lingduijiaoshi from '@/views/modules/lingduijiaoshi/list'
    import jingsaixinxi from '@/views/modules/jingsaixinxi/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import cansaimingdan from '@/views/modules/cansaimingdan/list'
    import wangnianchengji from '@/views/modules/wangnianchengji/list'
    import cansaixinxi from '@/views/modules/cansaixinxi/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import xueyuan from '@/views/modules/xueyuan/list'
    import zhuanye from '@/views/modules/zhuanye/list'
    import huojiangmingdan from '@/views/modules/huojiangmingdan/list'
    import baoxiaoqingdan from '@/views/modules/baoxiaoqingdan/list'
    import baomingxinxi from '@/views/modules/baomingxinxi/list'
    import cansaishenqing from '@/views/modules/cansaishenqing/list'
    import huojiangqingkuang from '@/views/modules/huojiangqingkuang/list'
    import jingsaileixing from '@/views/modules/jingsaileixing/list'
    import timuleixing from '@/views/modules/timuleixing/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '竞赛资讯',
        component: news
      }
      ,{
	path: '/jingsaitiku',
        name: '竞赛题库',
        component: jingsaitiku
      }
      ,{
	path: '/jinjimingdan',
        name: '晋级名单',
        component: jinjimingdan
      }
      ,{
	path: '/jingsaizongjie',
        name: '竞赛总结',
        component: jingsaizongjie
      }
      ,{
	path: '/chengjishensu',
        name: '成绩申诉',
        component: chengjishensu
      }
      ,{
	path: '/jingsaipingfen',
        name: '竞赛评分',
        component: jingsaipingfen
      }
      ,{
	path: '/lingduijiaoshi',
        name: '领队教师',
        component: lingduijiaoshi
      }
      ,{
	path: '/jingsaixinxi',
        name: '竞赛信息',
        component: jingsaixinxi
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/cansaimingdan',
        name: '参赛名单',
        component: cansaimingdan
      }
      ,{
	path: '/wangnianchengji',
        name: '往年成绩',
        component: wangnianchengji
      }
      ,{
	path: '/cansaixinxi',
        name: '参赛信息',
        component: cansaixinxi
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/xueyuan',
        name: '学院',
        component: xueyuan
      }
      ,{
	path: '/zhuanye',
        name: '专业',
        component: zhuanye
      }
      ,{
	path: '/huojiangmingdan',
        name: '获奖名单',
        component: huojiangmingdan
      }
      ,{
	path: '/baoxiaoqingdan',
        name: '报销清单',
        component: baoxiaoqingdan
      }
      ,{
	path: '/baomingxinxi',
        name: '报名信息',
        component: baomingxinxi
      }
      ,{
	path: '/cansaishenqing',
        name: '参赛申请',
        component: cansaishenqing
      }
      ,{
	path: '/huojiangqingkuang',
        name: '获奖情况',
        component: huojiangqingkuang
      }
      ,{
	path: '/jingsaileixing',
        name: '竞赛类型',
        component: jingsaileixing
      }
      ,{
	path: '/timuleixing',
        name: '题目类型',
        component: timuleixing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

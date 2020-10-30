//定义两种请求方式
const API = {
    Method: {
        Get: 'get',
        Post: 'post'
    },
    //定义请求地址
    Path: {
        LOGIN: '/api/app/login',
        // 课程导航
        HMWFL: '/api/app/courseClassify',
        // 课程列表
        HMWLIST: '/api/app/courseBasis?page=1&limit=10&',
        // 课程详情数据
        HMWXQ: '/api/app/courseInfo/basis_id=189',
        //首页列表
        List: '/api/app/recommend/appIndex',
        //个人信息
        XUE: '/api/app/userInfo',
        //特色课
        TE:"/api/app/courseBasis?page=1&limit=10&",
        //我的关注
        GUAN:"/api/app/collect",
        KE:"/api/app/courseInfo/basis_id=189",
        //学习
        Xue:"/api/app/myStudy/2",
        //首页推荐老师列表
        HomeLIST:'/api/app/teacher/info/id',
        // 获取验证码
        HMWYZM:'/api/app/smsCode'
    }
}

export default API

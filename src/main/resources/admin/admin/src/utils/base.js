const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot46869/",
            name: "springboot46869",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot46869/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校学科竞赛平台"
        } 
    }
}
export default base

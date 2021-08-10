const USER_KEY='user'
const TOKEN_KEY='token'

class Auth{
    static instance=null;

    static getInstance(){
        if(!Auth.instance){
            Auth.instance=new Auth();
        }
        return Auth.instance;
    }

    constructor() {
        // 会在 new Auth() 的时候自动调用
        // 缓存存在 就读取 无则初始化为null
        this.user=localStorage.getItem(USER_KEY)?JSON.parse(localStorage.getItem(USER_KEY)):null;
        this.token=localStorage.getItem(TOKEN_KEY)?localStorage.getItem(TOKEN_KEY):null;

        // console.log('缓存用户',this.user);

    }

    setToken(user){
        // 类方法 不需要functin关键字
        this.user=user;  // user对象
        this.token=user.token;

        localStorage.setItem(USER_KEY,JSON.stringify(user));
        localStorage.setItem(TOKEN_KEY,user.token);

        console.log('登录用户:',user);

    }

    clearToken(){
        this.user=null;
        this.token=null;

        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(TOKEN_KEY);

        console.log('退出登录');

    }
}


export default Auth.getInstance() ;

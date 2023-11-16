class Snake {
    //获取表示蛇头的元素
    head: HTMLElement;
    bodys: HTMLCollection;
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector("#snake>div")!;
        // this.head = document.querySelector("#snake>div") as HTMLElement;//断言
        // document.querySelectorAll("#snake>div")
        //蛇的身体
        this.bodys = this.element.getElementsByTagName('div');
    }

    //获取蛇头的桌标
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    //设置坐标
    set X(val) {
        if (this.X === val) return

        //X合法范围检测
        if (val < 0 || val > 290) {
            throw  new Error("蛇撞墙了,游戏结束！")
        }
        //console.log("hello");

        if(this.bodys[1]&&(this.bodys[1] as HTMLElement).offsetLeft ===val){
            //console.log("水平方向掉头了")
            //向反方向继续移动
            if(val>this.X){//说明向右
                val = this.X-10;
            }else {
                val = this.X+10;
            }
        }

        //移动身体
        this.moveBody();

        this.head.style.left = val + 'px'



    }

    set Y(val) {
        if (this.Y === val) return

        //Y合法范围检测
        if (val < 0 || val > 290) {
            throw  new Error("蛇撞墙了,游戏结束！")
            return
        }


        if(this.bodys[1]&&(this.bodys[1] as HTMLElement).offsetTop ===val){
            //console.log("竖直方向掉头了")
            //向反方向继续移动
            if(val>this.Y){//说明向下
                val = this.Y-10;
            }else {
                val = this.Y+10;
            }
        }
        //移动身体
        this.moveBody();

        this.head.style.top = val + 'px'

    }

    //增加蛇的身体
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    //身体移动的方法
    moveBody(){
        //后面的蛇的位置等于前面的蛇的位置
        //遍历获取所有的身体
        for(let i=this.bodys.length-1;i>0;i--){
            let body = this.bodys[i-1] as HTMLElement;
            let X = body.offsetLeft ;
            let Y = body.offsetTop;

            (this.bodys[i] as HTMLElement).style.left = X+'px';
            (this.bodys[i] as HTMLElement).style.top = Y+'px';

        }
    }

    //检查身体是否相撞
    checkHeadBody(){
        for (let i = 1; i <this.bodys.length ; i++) {
            let bd = this.bodys[i] as HTMLElement
            if(this.X===bd.offsetLeft){
                
            }
        }
    }


}

export default Snake
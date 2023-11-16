class Food{
    //定义一个属性表示食物对应的元素
    element:HTMLElement;

    constructor() {
        this.element = document.getElementById("food")!;
    }

    //获取食物的x轴坐标
    get X(){
        return this.element.offsetLeft;
    }
    //获取食物的Y轴坐标
    get Y(){
        return this.element.offsetTop;
    }

    changeXY(){

        //水平方向0-290,每次移动一格，大小是10，必须整10
        let top = Math.round(Math.random() * 29)*10;
        let left = Math.round(Math.random() * 29)*10;
        //竖直方向
        this.element.style.left=left+'px';
        this.element.style.top=top+'px';
    }

}

export default Food

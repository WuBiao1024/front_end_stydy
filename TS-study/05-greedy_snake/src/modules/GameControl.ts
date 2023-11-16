//游戏控制器，控制其它所有类
//@ts-ignore
import Snake from "./Snake.ts"
//@ts-ignore
import Food from "./Food.ts";
// @ts-ignore
import ScorePanel from "./ScorePanel.ts";


class GameControl {
    //定义三个属性
    //蛇
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    //蛇的移动方向
    direction: string = "";

    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init()

    }

    //游戏初始化
    init() {
        //绑定按键按下的事件,谁调用，this就是谁
        document.addEventListener('keydown', this.keydownHandeler.bind(this));
        //使蛇移动
        this.run();
    }

    //创建键盘按下的响应函数
    /*
      * ArrowUp Up
      * ArrowDown Down
      * ArrowRight Right
      * ArrowLeft Left
      * */
    keydownHandeler(event: KeyboardEvent) {
        //console.log(this);
        //检查方向是否合法

        this.direction = event.key;
        //this.run();
        //console.log(this.direction);
    }

    //创建蛇移动的方法
    run() {
        /*
        * 根据(this.direction)来判断蛇移动的方向
        * 向上top 减小
        * 向下 top 增加
        * 向左 left 减小
        * 向右 left 增加
        *
        * */

        //获取蛇头现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
        }

        //蛇吃到食物
        this.checkEat(X, Y)

        //修改蛇的桌标
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            // @ts-ignore
            alert(e.message);
            this.isLive = false;

        }

        //开启定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    checkEat(X: number, Y: number) {
        //吃到食物
        if( X === this.food.X && Y === this.food.Y){
            //改变食物位置
            this.food.changeXY();
            //分数增加
            this.scorePanel.addScore();
            //蛇增加一节
            this.snake.addBody();
        }

    }
}

export default GameControl



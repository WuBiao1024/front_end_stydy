class ScorePanel{
    score:number=0;
    level:number=1;
    maxLevel:number = 10;
    //多少分升级
    upScore:number=10;

    scopeEle:HTMLElement;
    levelEle:HTMLElement;
    constructor(maxLevel:number=10,upScore:number=10) {
        this.upScore=upScore
        this.maxLevel = maxLevel;
        this.scopeEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
    }

    //设置一个加分的方法
    addScore(){
        this.scopeEle.innerHTML=++this.score+'';
        //每十分升一级
        if(this.score%this.upScore ===0)
            this.upLevel();
    }
    upLevel(){
        if(this.level<this.maxLevel)
            this.levelEle.innerHTML=++this.level+"";
    }
}

export default ScorePanel
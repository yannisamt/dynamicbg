# dynamicbg
Personnalisation : 
       *whenGreenFlagClicked() {
         while (true) {
           this.createClone();
           this.goto(this.random(-240, 240), this.random(-180, 180));
           yield* this.wait(0.01);
           yield;
         }
       }
     
       *startAsClone() {
         this.vars.rid = this.random(-15, 15);
         this.direction = this.random(-360, 360);
         for (let i = 0; i < 4; i++) {
           for (let i = 0; i < 100; i++) {
             this.move(5);
             yield;
           }
           for (let i = 0; i < 30; i++) {
             this.direction += this.toNumber(this.vars.rid);
             this.move(5);
             yield;
           }
           yield;
         }
         this.deleteThisClone();
       }
     
       *whenIReceiveClic() {
         if (
           this.compare(
             Math.hypot(this.mouse.x - this.x, this.mouse.y - this.y),
             300
           ) < 0
         ) {
           this.direction = this.radToScratch(
             Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
           );
           for (let i = 0; i < 10; i++) {
             this.move(-12);
             yield;
           }
         }
       }

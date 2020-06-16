 
<!doctype html>
<html>
  <head>
    <title>javascript 观察者模式 by 司徒正美</title>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
  </head>
  <body>
    <script type="text/javascript">
      var dom = {
        each : function(obj,fn,score){
          for(var key in obj){
            if(obj.hasOwnProperty(key))
              fn.call(score,obj[key],key,obj)
          }
        }
      };
      dom.each({
        indexOf: function (el, index) {
          var n = this.length,
          i = index == null ? 0 : index < 0 ? Math.max(0, n + index) : index;
          for (; i < n; i++)
            if (i in this && this[i] === el) return i;
          return -1;
        },
        //移除 Array 对象中指定位置的元素。
        removeAt: function (index) {
          return this.splice(index, 1)
        },
        //移除 Array 对象中某个元素的第一个匹配项。
        remove: function (item) {
          var index = this.indexOf(item);
          if (index !== -1) this.removeAt(index);
          return item;
        }
      },function(method,name){
        if(!Array.prototype[name])
          Array.prototype[name] = method;
      });

      /* 订阅者接口 */
      var Observer = function() {
        //观察者要实现的方法
        this.update = function() {throw "此方法必须被实现！"}
      }
      /* 发布者接口 */
      var Subject = function() {
        this.observers = [];
      }
      Subject.prototype = {
        //如果状态发生改变，通知所有观察者调用其update方法
        notifyObservers : function(context) {
          for(var i = 0, n = this.observers.length; i < n; i++) {
            this.observers[i].update(context);
          }
        },
        // 添加订阅者
        attach : function(observer){
          if(!observer.update) throw 'Wrong observer';
          this.observers.push(observer);
        },
        /* 移除订阅者 */
        detach : function(observer) {
          if(!observer.update) { throw 'Wrong observer'; }
          this.observers.remove(observer);
        }
      }
      //实现接口
      var implement = function(Concrete,Interface){
        for(var prop in  Interface) {
          Concrete[prop] = Interface[prop];
        }
      }


      /***************** 发布者的实现类 ***********************/
      var mainCheck = document.createElement("input");
      mainCheck.type = 'checkbox';
      mainCheck.id = 'MainCheck';
      mainCheck.style.cssText = 'border:1px solid red';
      implement( mainCheck,new Subject());
      /* 当点击按钮的时候 给相关的观察者发送通知. 观察者接收到通知的时候 改变状态 */
      mainCheck['onclick'] = function(){
        this.notifyObservers(this.checked)
      }

      document.body.appendChild(mainCheck);

      /********************* 订阅者的实现类 *****************************/
      var obsCheck1 = document.createElement('input');
      var obsCheck2 = document.createElement('input');
      obsCheck1.type = 'checkbox';
      obsCheck1.id = 'Obs1';
      document.body.appendChild(obsCheck1);

      obsCheck2.type = 'checkbox';
      obsCheck2.id = 'Obs2';
      document.body.appendChild(obsCheck2);
      implement( obsCheck1,new Observer());
      implement( obsCheck2,new Observer());

      /* 必须实现它们的具体update方法 */
      obsCheck1.update = function(value) {
        this.checked = value;
      }

      obsCheck2.update = function(value) {
        this.checked = value;
      }

      // 将发布者和订阅者(观察者)关联
      mainCheck.attach(obsCheck1);
      mainCheck.attach(obsCheck2);

    </script>
  </body>
</html>

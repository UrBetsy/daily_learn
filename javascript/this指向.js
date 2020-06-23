var a = 10;
		var obj = {
		  a: 20
		}
		function fn () {
			this = obj; // 这句话试图修改this，运行后会报错
			console.log(this.a);
		}
		var a = 20;
		function fn() {
		    function foo() {
		        console.log(this.a);
		    }
		    foo();
		}
		fn();
		var a = 20;
		var obj = {
		    a: 10,
		    c: this.a + 20,
		    fn: function () {
		        return this.a;
		    }
		}

		console.log(obj.c);
		console.log(obj.fn());
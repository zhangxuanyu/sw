<template>
    <header id="navbar-spy" class="header header-1">
		<!-- .top-bar end -->
		<nav id="primary-menu" class="navbar navbar-fixed-top" style="background-color:#fff;">
			<div class="container">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-navbar-collapse-1" aria-expanded="false" id="showmenu">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					</button>
					<a class="logo phlogo" href="javascript:;" @click="gotoindex">
					<img src="static/logo.png"  style="width:142px;height:30px;">
					</a>
				</div>
				
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse pull-left" id="header-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-left">
						<li class="active">
							<a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle size" :style="selectnum==1?aa:''" @click="selectm(1)">show</a>
							<!-- <ul class="dropdown-menu">
								<li>
									<a href="home-1.html">home 1</a>
								</li>
								<li>
									<a href="home-2.html">home 1</a>
								</li>
								<li>
									<a href="home-3.html">home 1</a>
								</li>
							</ul> -->
						</li>
						<!-- li end -->
						
						<!-- li end -->
						<li class="">
							<a href="javascript:;" class="size"  :style="selectnum==2?aa:''"  @click="selectm(2)">商场</a>
						</li>
						<li class="">
							<a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle size"  :style="selectnum==3?aa:''"  @click="selectm(3)">二手市场</a>
						</li>
                        <li class="">
							<a href="javascript:;" class="size last" :style="selectnum==4?aa:''"  @click="selectm(4)">我的</a>
						</li>
						<!-- li end -->
						<!-- li end -->
					</ul>
					
					<!-- Mod-->
					<!-- <div class="module module-search pull-left">
						<div class="search-icon">
							<i class="fa fa-search"></i>
							<span class="title">search</span>
						</div>
						<div class="search-box">
							<form class="search-form">
								<div class="input-group">
									<input type="text" class="form-control" placeholder="Type Your Search Words">
									<span class="input-group-btn">
									<button class="btn" type="button"><i class="fa fa-search"></i></button>
									</span>
								</div>
								
							</form>
						</div>
					</div> -->
					<!-- .module-search-->
					<!-- .module-cart -->
					<!-- <div class="module module-cart pull-left">
						<div class="cart-icon">
							<i class="fa fa-shopping-cart"></i>
							<span class="title">shop cart</span>
							<span class="cart-label">2</span>
						</div>
						<div class="cart-box">
							<div class="cart-overview">
								<ul class="list-unstyled">
									<li>
										<img class="img-responsive" src="assets/images/shop/thumb/1.jpg" alt="product"/>
										<div class="product-meta">
											<h5 class="product-title">Belt Car Engine</h5>
											<p class="product-price">Price: $68.00 </p>
											<p class="product-quantity">Quantity: 2</p>
										</div>
										<a class="cancel" href="#">cancel</a>
									</li>
									<li>
										<img class="img-responsive" src="assets/images/shop/thumb/2.jpg" alt="product"/>
										<div class="product-meta">
											<h5 class="product-title">OIL FILTER</h5>
											<p class="product-price">Price: $180.00 </p>
											<p class="product-quantity">Quantity: 1</p>
										</div>
										<a class="cancel" href="#">cancel</a>
									</li>
								</ul>
							</div>
							<div class="cart-total">
								<div class="total-desc">
									<h5>CART SUBTOTAL :</h5>
								</div>
								<div class="total-price">
									<h5>$316.00</h5>
								</div>
							</div>
							<div class="clearfix">
							</div>
							<div class="cart-control">
								<a class="btn btn-primary btn-block" href="#">view cart</a>
								<a class="btn btn-secondary btn-block" href="#">check out</a>
							</div>
						</div>
					</div> -->
					<!-- .module-cart end -->
					
				</div>
				<!-- /.navbar-collapse -->
				<!-- 钱包 -->
				<span class="wallt">{{count}}</span>
			</div>
			<!-- /.container-fluid -->
		</nav>
	</header>
</template>

<script>
export default {
    data(){
        return{
            selectnum:1,
            aa:{
                color:'#9047BF'
			},
			count:''
        }
	},
	watch:{
	$route(to,from){
			if(to.path == '/'){
				this.selectnum = 1
			}else if(to.path == '/market'){
				this.selectnum = 2
			}else if(to.path == '/old'){
				this.selectnum = 3
			}else if(to.path == '/my'){
				this.selectnum = 4
			}
		}
	},
    methods:{
        selectm(b){
			// var elt = document.getElementById
			$('#header-navbar-collapse-1').hide()
            this.selectnum = b
            if(b == 1){
                this.$router.push({
                    path: '/',
                    component: 'show',
                })
            }else if(b == 2){
                this.$router.push({
                    path: '/market',
                    component: 'market',
                })
            }else if(b == 3){
                this.$router.push({
                    path: '/old',
                    component: 'old',
                })
            }else{
                this.$router.push({
                    path: '/my',
                    component: 'my',
                })
            }
            
		},
		gotoindex(){
			this.$router.push({
                    path: '/',
                    component: 'show',
                })
		}
    },
	created(){
		console.log(this.$route.path)
		if(this.$route.path == '/'){
			this.selectnum = 1
		}else if(this.$route.path == '/market'){
			this.selectnum = 2
		}else if(this.$route.path == '/old'){
			this.selectnum = 3
		}else if(this.$route.path == '/my'){
			this.selectnum = 4
		}
	},
	mounted(){
		$('#showmenu').click(function(){
			$('#header-navbar-collapse-1').toggle()
		})
		var that = this
		getWallectInfo()
		function getWallectInfo() {
                    window.postMessage({
                        "target": "contentscript",
                        "data": {},
                        "method": "getAccount",
                    }, "*");
                        window.addEventListener('message',  (e)=> {
                            if (e.data && e.data.data) {
                                if (e.data.data.account) {//这就是当前钱包中的地址
                                    that.count = e.data.data.account
                                    console.log(e.data.data.account)
                                    console.log(that.count)
                                    // app.address = e.data.data.account
                                    // app.updateUserInfo() //小提示：获取钱包地址后，就可以调用对应的方法查询用户信息啦
                                }
                            }
                        });
                }
	}
	
}
</script>

<style scoped>
.size{
    font-size: 16px;
}
.has-dropdown a:hover{
    color: #9047BF;
}
#header-navbar-collapse-1{
	margin-left: 150px;
}
.container{
	position: relative;
}
.wallt{
	position: absolute;
	top: 39px;
	right: 0px;
}
@media (max-width: 1200px) {
#header-navbar-collapse-1{
	margin-left: 100px;
}
}
@media (max-width: 520px) {
	.phlogo{
		float: left;
	}
	.wallt{
		position: absolute;
		top: 75px;
		left: -50px;
	}
}
</style>

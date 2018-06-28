<template>
    <section id="shopgrid" class="shop shop-grid">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-3 sidebar">
					<!-- Categories
============================================= -->
					<game-list></game-list>
					<!-- .widget-categories end -->
					
					<!-- Recent Products
============================================= -->
					<!-- .widget-recent-product end -->
					
					<!-- Filter
============================================= -->
					<!-- <div class="widget widget-filter">
						<div class="widget-title">
							<h5>Filter By Price</h5>
						</div>
						<div class="widget-content">
							<div id="slider-range"></div>
							<p>
								<label for="amount">Price: </label>
								<input type="text" id="amount" readonly>
							</p>
							<a class="btn btn-secondary" href="#">filter</a>
						</div>
					</div> -->
					<!-- .widget-filter end -->
					
					<!-- Select Brand
============================================= -->
					<!-- .widget-brand end -->
					
					<!-- Recent Products
============================================= -->
					<!-- .widget-recent-product end -->
					
					<!-- Tag Clouds
============================================= -->
					<!-- .widget-tags end -->
				</div>
				<!-- .col-md-3 end -->
				<div class="col-xs-12 col-sm-12 col-md-9 topblank">
					<div class="row">
						<!-- <div class="col-xs-12  col-sm-12  col-md-12">
							<div class="shop-options">
								<div class="product-options2 pull-left pull-none-xs">
									<ul class="list-inline">
										<li>
											<div class="product-sort mb-15-xs">
												<span>sort by:</span>
												<i class="fa fa-angle-down"></i>
												<select>
													<option selected="" value="Default">Product Name</option>
													<option value="Larger">Newest Items</option>
													<option value="Larger">oldest Items</option>
													<option value="Larger">Hot Items</option>
													<option value="Small">Highest Price</option>
													<option value="Medium">Lowest Price</option>
												</select>
											</div>
										</li>
										<li>
											<div class="product-sort">
												<span>Show:</span>
												<i class="fa fa-angle-down"></i>
												<select>
													<option selected="" value="10">10 items / page</option>
													<option value="25">25 items / page</option>
													<option value="50">50 items / page</option>
													<option value="100">100 items / page</option>
												</select>
											</div>
										</li>
									</ul>
								</div>
								
								<div class="product-view-mode text-right pull-none-xs">
									<span>view as:</span>
									<a class="active" href="#"><i class="fa fa-th-large"></i></a>
									<a href="#"><i class="fa fa-th-list"></i></a>
								</div>
								
							</div>
							
                            
						</div> -->






						<!-- .col-md-12 end -->
					</div>
					<!-- .row end -->
					<div class="row" style="height: 700px;">
                        <div class="type">
                            <p class="type1"><span :style="firstflag == 0?'color:#9234BF;':''" @click="changefirst(0)">全部</span><span :style="firstflag == 1?'color:#9234BF;':''"  @click="changefirst(1)">背景</span><span :style="firstflag == 2?'color:#9234BF;':''"  @click="changefirst(2)">相框</span><span :style="firstflag == 3?'color:#9234BF;':''"  @click="changefirst(3)">帽子</span><span :style="firstflag == 4?'color:#9234BF;':''"  @click="changefirst(4)">尾部</span><span :style="firstflag == 5?'color:#9234BF;':''"  @click="changefirst(5)">表情</span><span :style="firstflag == 6?'color:#9234BF;':''"  @click="changefirst(6)">饰品</span></p>
                            <!-- <p class="type2"><span>饰品：</span><span :style="secflag == 0?'color:#9234BF;':''" @click="changesec(0)">全部</span><span :style="secflag == 1?'color:#9234BF;':''" @click="changesec(1)">帽子</span><span :style="secflag == 2?'color:#9234BF;':''" @click="changesec(2)">眼镜</span><span :style="secflag == 3?'color:#9234BF;':''" @click="changesec(3)">翅膀</span><span :style="secflag == 4?'color:#9234BF;':''" @click="changesec(4)">武器</span></p> -->
							<span class="outset">
								<select v-model="rank" @change="rankmd" class="topselect">
									<option value="1">新品优先</option>
									<option value="2">价格从低到高</option>
									<option value="3">价格从高到低</option>
								</select>
								<span class="seltfont">排序：</span>
							</span>
								
							
						</div>
						<!-- Product #1 -->
						<div class="col-xs-6 col-sm-4 col-md-3 product" v-for="(item,index) in arr" v-if="index >=($store.state.page - 1)*20 && index<$store.state.page*20">
							<div class="product-img tips"   style="backgroundColor:#eee;">
								<img  :src="item.imgUrl" alt="Product"/>
                                
								<div class="product-hover" v-if="item.cntRemain>0">
									<div class="product-action" @click="changemode">
										<a href="javascript:;" class="hbox" @click="changebuy(item.propsId,item.imgUrl,item.propsName,item.price,item.category,item.position,item.overview)">预览</a>
									</div>
								</div>
								<!-- .product-overlay end -->
							</div>
							<!-- .product-img end -->
							<div class="product-bio picbottom">
								<p class="showname">{{item.propsName}}</p>
                                <p class="showaccount"><span style="color: #9047BF;">{{item.price}}</span>NAS&nbsp;&nbsp;&nbsp;&nbsp; 剩余<span style="color: #D0021B;">{{item.cntRemain}}</span></p>
								<!-- .product-title end -->
								<div class="product-price payfee" @click="buytool(item.propsId,item.price)" v-if="item.cntRemain>0">
									购买
								</div>
								<div class="product-price payfee" v-if="item.cntRemain==0" style="background-color:#ccc;">
									售完
								</div>
								<!-- .product-price end -->
								
							</div>
							<!-- .product-bio end -->
						</div>		
					</div>
					<!-- .row end -->
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12">
							<pc-paging></pc-paging>
						</div>
						<!-- .col-md-12 end -->
					</div>
				</div>
				<!-- .col-md-9 end -->
			</div>
			<!-- .row end -->
		</div>
		<!-- .container end -->

        <!-- 购买弹窗 -->
        <div style="position:fixed;top:0;left:0;width:100%;height:100%;backgroundColor:rgba(0,0,0,0.7);z-index:1031;"  v-if="buyflag">
            <div class="imgout">
				
					<div class="showpic">
						<img :src="'../../static/'+reseed+'.png'" alt="" class="second">
						<img :src="'../../static/'+tl+'.png'" alt="" class="first" :style="{zIndex:psion}" v-if="!reseed">
						<img :src="'../../static/'+tl+'.jpg'" alt="" class="first" :style="{zIndex:psion}" v-if="buytype=='bg'">
						<img :src="'../../static/'+tl+'.png'" alt="" class="first" :style="{zIndex:psion}" v-else-if="buytype=='fg'">
						<img :src="'../../static/'+tl+'-'+reseed+'.png'" alt="" class="first" :style="{zIndex:psion}" v-else>
						<img :src="'../../static/'+'2-0-3-'+reseed+'.png'" alt="" class="first" style="z-index:19;">
						<img src="../../static/close.png" alt="" class="last" @click="close">
					</div>
					<div class="showbuy ">
						<p style="font-size: 28px;color: #2D2D2D;text-align:left;">{{buyname}}</p>
						<p style="font-size: 28px;color: #9F5DC6;margin-top:20px;text-align:left;">{{buyprice}}NAS</p>
						<p style="font-size: 16px;color: #303030;margin-top:20px;text-align:left;">选择你要预览的龙：
							<select v-model="reseed" @change="seld" style="border-radius: 0px;height: 30px;line-height: 30px;">
								<option value="Allosaurus">Allosaurus</option>
								<option value="Apatosaurus">Apatosaurus</option>
								<option value="Brachiosaurus">Brachiosaurus</option>
								<option value="Compsognathus">Compsognathus</option>
								<option value="Corythosaurus">Corythosaurus</option>
								<option value="Dilophosaurus">Dilophosaurus</option>
								<option value="Euoplocephalus">Euoplocephalus</option>
								<option value="Gigantspinosaurus">Gigantspinosaurus</option>
								<option value="Lambeosaurus">Lambeosaurus</option>
								<option value="Monolophosaurus">Monolophosaurus</option>
								<option value="Ouranosaurus">Ouranosaurus</option>
								<option value="Parasaurolophus">Parasaurolophus</option>
								<option value="Plesiosaurus">Plesiosaurus</option>
								<option value="Saurolophus">Saurolophus</option>
								<option value="Stegosaurus">Stegosaurus</option>
								<option value="Styracosaurus">Styracosaurus</option>
								<option value="Suchomimus">Suchomimus</option>
								<option value="Triceratops">Triceratops</option>
								<option value="Tyrannosaurus Rex">Tyrannosaurus Rex</option>
								<option value="Velociraptor">Velociraptor</option>
							</select>
						</p>
						<div style="width:140px;height:52px;backgroundColor:#9234BF;line-height:52px;text-align:center;color:#fff;font-size: 16px;margin-top:50px;cursor: pointer;" @click="buytool(buyid,buyprice)">购买</div>
					</div>
				

			</div>
       	</div>
	</section>
</template> 

<script>
import pcPaging from '../components/paging'
import gameList from '../components/gamelist'
export default {
    components:{
         pcPaging,gameList
    },
    data(){
        return{
            num:1,
			arr:[],
			staticarr:[],
            firstflag:0,
            secflag:0,
            modeflag:false,
			reseed:'',
			buyflag:false,
			//场景筛选
			typearr:[true,'bg','fg','hat','tail','face','dec'],
			//饰品筛选
			typearr2:[true,'hat','glass','fly','attack'],
			str:'',
			// 购买id
			buyid:'',
			buyname:'',
			buyprice:'',
			buyimg:'',
			buytype:'',
			// 排序方式
			rank:'1',
			//位置层级
			psion:'',
			//匹配不同的道具
			tl:''
        }
	},
	created(){
		var callArgs = JSON.stringify([this.$store.state.gamenum])
			onSimulateCallClick(contractAddress,'getPropsList',callArgs,(res)=>{
				var data =JSON.parse(res.result)
				console.log(data)
				for(let i=0;i<data.data.length;i++){
					this.arr.unshift(data.data[i])
				}
				// this.arr = this.arr
				this.staticarr = this.arr
				this.$store.commit('getallpage',Math.ceil(this.arr.length/20))
				console.log(this.arr)
				this.rankmd()
			})
	},
	computed:{
				   theindex() {  
                		return this.$store.state.newflag;  
            		}  
			   },
	watch:{
		theindex(n,o){
			alert(n)
		}
	},
	mounted(){
		window.scrollTo(0,0)
	},
    methods:{
        changefirst(a){
			console.log(a)
			this.firstflag = a
			this.secflag = 0
			var tharr = []
			if(a == 0){
				this.arr = this.staticarr
			}else{
				this.arr = this.staticarr
				this.arr.forEach(e => {
					if(e.category == this.typearr[a]){
						tharr.push(e)
					}				
				});
				this.arr = tharr
			
			}
				this.$store.commit('runpages',1)
				this.$store.commit('getallpage',Math.ceil(this.arr.length/20))
			
        },
        changesec(a){
			this.secflag = a
			this.firstflag = 0
			var tharr = []
			if(a == 0){
				this.arr = this.staticarr
			}else{
				this.arr = this.staticarr
				this.arr.forEach(e => {
					if(e.category == this.typearr2[a]){
						tharr.push(e)
					}				
				});
				this.arr = tharr
			}
        },
        changemode(){
            this.modeflag = true
        },
		seld(){
			console.log(this.reseed)
		},
		changebuy(a,b,c,d,e,f,g){
			this.buyflag = true
			this.buyid = a
			this.buyimg = b
			this.buyname = c
			this.buyprice = d
			this.buytype = e
			this.psion = f
			this.tl = g
		},
		close(){
			this.buyflag = false
		},
		// 购买道具
		buytool(a,bb){
			var that = this
			var sdd = JSON.stringify([a])
			newTransaction(contractAddress,'buyProps',bb,sdd,(res)=>{
				console.log(res)
				console.log(res.txhash)
				if(res == 'Error: Transaction rejected by user'){
                    alert('你已取消购买。')
                }else{
					this.$router.push({
						path: '/my',
						component: 'my',
                	})
					var check = setInterval(()=>{
						neb.api.getTransactionReceipt({hash: res.txhash}).then(function(resp) {
							console.log(resp.status)
							if (resp.status == 1) {
								clearInterval(check)
								that.$store.commit("changenew")
							}
						});
					},3000)
                }  
			})
		},
		rankmd(){
			if(this.rank==1){
				this.arr.sort(function(a,b){
				
	                return  b.opTime-a.opTime
                })
			}else if(this.rank==2){
				this.arr.sort(function(a,b){
	                return  a.price-b.price
                })
			}else if(this.rank ==3){
				this.arr.sort(function(a,b){
	                return  b.price-a.price
                })
			}
		}
    }
}
</script>

<style scoped>
p{
    margin-bottom: 0px;
}
.left_box{
    width: 219px;
    height: 90px;
    text-align: left;
    margin-top: 43px;
    border-bottom:1px solid #E6E6E6;
    font-size: 24px;
    color: #2D2D2D;
    cursor: pointer;
}
/* .sborder{
    height: 400px;
    border-right: 1px solid #E6E6E6;
} */
.picbottom{
    padding: 10px 5px;
}
.showname{
    font-size: 14px;
    color: #000000;
}
.showaccount{
    font-size: 12px;
    color: #999999;
    overflow: hidden;
    color: #000000;
}
.payfee{
    width: 78px;
    height: 32px;
    color: #fff;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    background-color: #9234BF;
    margin: 0 auto;
    margin-top: 11px;
    cursor: pointer;
    transition: all 0.5s;
}
.payfee:hover{
    background-color: #000;
}
.tips{
    position: relative;
}
.tip{
    height: 24px;
    line-height: 24px;
    text-align: left;
    background: rgba(0,0,0,0.3);
    color: #fff;
    position: absolute;
    top: 0px;
    width: 100%;
}
.topblank{
    padding-top: 43px;
}
.type{
    height: 60px;
    border-bottom: 1px solid #E6E6E6;
    line-height: 45px;
    margin-bottom: 50px;
	margin-left: 20px;
	margin-right: 20px;
}
.type1{
    /* height: 45px; */
    text-align: left;
    line-height: 45px;
    font-size: 14px;
    color: #2D2D2D;
    /* padding-left: 20px; */
}
.type2{
    height: 45px;
    text-align: left;
    line-height: 45px;
    font-size: 14px;
    color: #2D2D2D;
    padding-left: 20px;
}
.type1 span{
    border-right: 1px solid #DDDDDD;
    padding: 0px 20px;
    cursor: pointer;
    float: left;
    height: 22px;
    line-height: 22px;
}
.type1 span:nth-last-of-type(1){
    border: none;
}
.type1 span:nth-of-type(1){
    border: none;
}
.type2 span{
    border-right: 1px solid #DDDDDD;
    padding: 0px 20px;
    cursor: pointer;
    float: left;
    height: 22px;
    line-height: 22px;
}
.type2 span:nth-last-of-type(1){
    border: none;
}
.type2 span:nth-of-type(1){
    border: none;
}
.showpic{
	width: 520px;
	height: 360px;
	float: left;
	position: relative;
	border-right: 1px solid #eee;
}

.showpic img:nth-of-type(1){
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}
.showpic img:nth-of-type(2){
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}
.imgout{
	position: fixed;
	top: 220px;
	background-color: #fff;
	left: 50%;
	width: 1100px;
	height: 480px;
	transform: translateX(-50%);
	padding: 50px 60px 70px 60px;
}
.first,.second,.three{
	width: 520px;
	
}
.first{
	position: absolute;
	left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
.second{
	z-index: 20;
}
.showbuy{
	float: right;
	width: 400px;
}
.last{
	position: absolute!important;
	width: 14px;
	top: -40px;
	right: -512px;
	cursor: pointer;
}
.topselect{
	float: right;
	border-radius: 0px;
	height: 30px;
	line-height: 30px;
}
.seltfont{
	float:right;
	line-height:30px;
}
@media (max-width: 991px) {
	.imgout{
		width: 600px;
		padding: 40px 40px;
		height: 700px;
		top: 100px;
	}
	.showbuy{
		width: 520px;
		text-align: center;
		margin-top: 50px;
	}
	.last{
		top: -32px;
		right: -32px;
	}
}
@media (max-width: 520px) {
	.imgout{
		width: 100%;
		padding: 20px 20px;
		height: 700px;
		top: 100px;
	}
	.showpic{
		width: 100%;
		height: 300px;
		float: left;
		position: relative;
		border: none;
	}
	.showbuy{
		width: 100%;
		text-align: center;
		margin-top: 50px;
	}
	.first,.second{
		width: 100%;
	}
	.last{
		top: -13px;
		right: -13px;
	}
	.topselect{
		
		
	}
	.type1{
		height: 45px;
		margin-left: -20px;
	}
	.type{
		height: 100px;
	}
	.outset{
		float: left;
		margin-top: 15px;
	}
	
}
</style>



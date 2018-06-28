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
						<!-- Product #1 -->
						<div class="col-xs-12 col-sm-6 col-md-4 product" v-for="(item,index) in arr"  v-if="index >=($store.state.page - 1)*20 && index<$store.state.page*20">
							<div class="product-img tips">
								<img  :src="'https://s3-ap-southeast-1.amazonaws.com/mobotoolpush/mu/game/dinosaur_park/'+item.assetId+'.300.png'" alt="Product" style="z-index:20;position: absolute;width:81.475%;left:50%;transform:translate(-50%);bottom:0px;"/>
                                <img :src="it.imgUrl" alt="" class="impic" v-for="(it,idx) in item.propsGroup" :style="{zIndex:it.position}" v-if="it.category == 'bg'">
								<img :src="it.imgUrl" alt="" class="impic" v-for="(it,idx) in item.propsGroup" :style="{zIndex:it.position}" v-if="it.category == 'fg'">
								<img :src="'../../static/'+it.overview+'-'+arrname[item.assetId].name+'.png'" alt="" class="impic" v-for="(it,idx) in item.propsGroup" :style="{zIndex:it.position}"   v-if="it.category !== 'bg'  && it.category !== 'fg'">
								<img :src="'../../static/'+'2-0-3-'+arrname[item.assetId].name+'.png'" alt="" class="impic" style="z-index:19;">
								<!-- <img :src="ittm.imgUrl" alt="" v-for="(ittm,innd) in item.propsGroup" class="impic" :style="{zIndex:item.position}">
								<img :src="'https://s3-ap-southeast-1.amazonaws.com/mobotoolpush/mu/game/dinosaur_park/'+item.assetId+'.300.png'" alt="Product"/> -->
                                <p class="tip" style="z-index:299;">已被打赏{{item.income?item.income.toFixed(5):item.income}}NAS</p>
								<!-- <div class="product-hover">
									<div class="product-action">
										<a href="#" class="hbox">Add To Cart</a>
									</div>
								</div> -->
								<!-- .product-overlay end -->
							</div>
							<!-- .product-img end -->
							<div class="product-bio picbottom">
								<p class="showname">{{arrname[item.assetId].name}}</p>
                                <p class="showaccount">{{item.owner}}</p>
								<!-- .product-title end -->
								<div class="product-price payfee" @click="givemy(item.assetId)">
									打赏
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
			//恐龙id名称
			arrname:[]
        }
    },
	  mounted(){
		window.scrollTo(0,0)
          setTimeout(()=>{
            if (typeof(webExtensionWallet) === "undefined") {
               
               alert('请安装星云钱包插件')
            } else {
                if (window.navigator.userAgent.indexOf("Chrome") !== -1) {
                    }else{
                            alert('请使用谷歌浏览器')
                        }
                    }
            },10)
	},
	created(){
		var callArgs = JSON.stringify([this.$store.state.gamenum,"",1])
			onSimulateCallClick(contractAddress,'getAssetList',callArgs,(res)=>{
				this.arr = JSON.parse(res.result).data
				
				console.log(this.arr)
				this.$store.commit('getallpage',Math.ceil(this.arr.length/20))
				var sdd = []
				for(let i=0;i<this.arr.length;i++){
					sdd.push(this.arr[i].assetId)
				}
				console.log(sdd)
				var sdds = JSON.stringify([sdd])
				
					onSimulateCallClick('n1qQhDzswApj5SmRrNQBNd6nSjqaaqmmmZi',"getDragonIdList", sdds, (data)=> {
						var arrm = JSON.parse(data.result).data
						this.arrname = arrm
						console.log(JSON.parse(data.result))
					})

					this.rank()

			})	
	},
	methods:{
		givemy(aa){
			var bbc = JSON.stringify([this.$store.state.gamenum,aa])
			newTransaction(contractAddress,'rewardShow','0.01',bbc,(res)=>{
					console.log(res.txhash)
				if(res == 'Error: Transaction rejected by user'){
                    alert('你已取消打赏。')
                }else{
					var check = setInterval(()=>{
						neb.api.getTransactionReceipt({hash: res.txhash}).then(function(resp) {
							console.log(resp.status)
							if (resp.status == 1) {
								clearInterval(check)
								alert('打赏成功，多谢土豪！')
							}
						});
					},3000)
                }  
				
			})
			
		},
		rank(){
			this.arr.sort(function(a,b){
	            return  b.income-a.income
            })
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
	background-color: #f7f7f7;
	width: 262px;
	height:180px;
	margin: 0 auto;
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
.hbox{

}
.product .product-img .impic{
	position: absolute;
	top: 0;
	bottom:0;
}
</style>


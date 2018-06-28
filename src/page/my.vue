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
					<div class="row" style="height:700px;">
                        <div class="type">
							
								<div class="mypd" :style="mytype==0?'color:#9047BF;borderBottom:2px solid #9047BF;':''" @click="changetype(0)">我的道具</div>
								<div class="mystyle" :style="mytype==1?'color:#9047BF;borderBottom:2px solid #9047BF;':''" @click="changetype(1)">我的装扮</div>
							
                            
							<p v-if="mytype==0" class="myseltype"><span :style="rankmy == 0?'color:#9234BF;':''" @click="selec(0)" class="mysel">全部</span><span :style="rankmy == 1?'color:#9234BF;':''" @click="selec(1)" class="mysel">已装备</span><span :style="rankmy == 2?'color:#9234BF;':''" @click="selec(2)" class="mysel mylast">未装备</span></p>
                        </div>
						<!-- Product #1 -->
						<!-- 我的道具 -->
						<div class="col-xs-6 col-sm-4 col-md-3 product" v-for="(item,index) in arr"  v-if="mytype==0&&arr.length >= 1&&index >=($store.state.page - 1)*20 && index<$store.state.page*20">
							<div class="product-img" style="background-color:#f7f7f7;">
								<img  :src="item.imgUrl" alt="Product"/>
								<!-- 类别 -->
                                <span style="position:absolute;top:0;left:0;backgroundColor:#999;color:#fff;display:block;width:50px;height:20px;line-height:20px;text-align:center;font-size:12px;">{{item.category=='bg'?'背景':item.category=='fg'?'相框':item.category=='hat'?'帽子':item.category=='tail'?'尾部':item.category=='face'?'表情':'饰品'}}</span>
								<div class="product-hover"  v-if="!item.assetId&&item.sale == 0">
									<div class="product-action" @click="changemode">
										<a href="javascript:;" class="hbox" @click="changebuy(item.propsName,item.imgUrl,item.category,item.userPId,item.position,item.overview)">预览</a>
									</div>
								</div>
								<!-- .product-overlay end -->
							</div>
							<!-- .product-img end -->
							<div class="product-bio picbottom">
								<p class="showname">{{item.propsName}}</p>
                                <p class="showaccount" v-if="item.assetId" style="overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;">装备在{{assertid_name[item.assetId.split('_')[1]]}}{{item.assetId.split('_')[1]}}上</p>
								<p class="showaccount" v-else style="overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							height:19px;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;">&nbsp;</p>
								<!-- .product-title end -->
								<div class="product-price">
									<div class="payfee" @click="changebuy(item.propsName,item.imgUrl,item.category,item.userPId,item.position,item.overview)" v-if="item.sale == 0&&!item.assetId">装备</div>
									<div class="payfee yellowbg" v-else-if="item.sale == 0&&item.assetId" @click="offwear(item.userPId)">卸下</div>
									<div class="payfee" v-else>装备</div>
									<div class="sell" @click="sellpd(item.userPId,item.imgUrl,item.propsName,item.priceProps)" v-if="!item.assetId&&item.sale == 0">出售</div>
									<div class="sell" v-else-if="item.assetId&&item.sale == 0" style="border: 1px solid #ccc;color: #ccc;">出售</div>
									<div class="sell yellowcl" v-else  @click="backsell(item.userPId)">取消出售</div>
								</div>
								<!-- .product-price end -->
								
							</div>
							<!-- .product-bio end -->
						</div>
						<!-- 我的装扮		 -->
						<div class="col-xs-6 col-sm-4 col-md-4 product" v-for="(item,index) in arr"  v-if="mytype==1&&arr.length >= 1&&index >=($store.state.page - 1)*20 && index<$store.state.page*20">
							<div class="product-img tips" id="zbsty"  :style="height=hinsty+'px'">
								
								<img  :src="'https://s3-ap-southeast-1.amazonaws.com/mobotoolpush/mu/game/dinosaur_park/'+item.assetId+'.500.png'" alt="Product" class="long" style="z-index:20;left: 50%;transform: translateX(-50%);"/>
                                <img :src="it.imgUrl" alt="" class="bgfirst" v-for="(it,idx) in item.propsGroup" :style="{zIndex:it.position}" v-if="it.category == 'bg'">
								<img :src="it.imgUrl" alt="" class="fgsecond" v-for="(it,idx) in item.propsGroup" :style="{zIndex:it.position}" v-if="it.category == 'fg'">
								<img :src="'../../static/'+it.overview+'-'+assertid_name[item.assetId]+'.png'" alt="" class="fgsecond" v-for="(it,idx) in item.propsGroup" :style="{zIndex:it.position}"   v-if="it.category !== 'bg'  && it.category !== 'fg'">
								<img :src="'../../static/'+'2-0-3-'+assertid_name[item.assetId]+'.png'" alt="" class="bgfirst" style="z-index:19;">
								<div class="product-hover"  style="z-index:201;">
									<div class="product-action" @click="changemode">
										<a href="javascript:;" class="hbox" @click="dec(item.propsGroup)">装扮列表</a>
									</div>
								</div>
								<!-- .product-overlay end -->
							</div>
							<!-- .product-img end -->
							<div class="product-bio picbottom">
								<p class="showname">{{item.propsName}}</p>
                                <p class="showaccount">已获得打赏{{item.income?item.income.toFixed(3):item.income}}NAS  <a href="javascript:;" style="float:right;color:#707070;font-size:10px;text-decoration:underline;" @click="changegive(item.assetId)">打赏详情</a></p>
								<!-- .product-title end -->
								<div class="product-price">
									<div class="payfee btleft" @click="showme(item.assetId)" v-if="item.show==0">SHOW</div>
									<div class="sell btright" @click="dec(item.propsGroup)" v-if="item.show==0">装扮列表</div>
									<div class="sell" @click="dec(item.propsGroup)" v-if="item.show==1" style="float:none;">装扮列表</div>
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

        <!-- 装扮弹窗 -->
		<div style="position:fixed;top:0;left:0;width:100%;height:100%;backgroundColor:rgba(0,0,0,0.7);z-index:1031;"  v-if="buyflag">
          <div class="imgout">
				
					<div class="showpic">
						
						<img :src="reseed[0]" alt="" class="second">
						<img :src="'../../static/'+tl+'.png'" alt="" class="first" :style="{zIndex:pision}" v-if="!reseed[0]">
						<img :src="'../../static/'+tl+'.jpg'" alt="" class="first" :style="{zIndex:pision}" v-if="type=='bg'">
						<img :src="'../../static/'+tl+'.png'" alt="" class="first" :style="{zIndex:pision}" v-else-if="type=='fg'">
						<img :src="'../../static/'+tl+'-'+assetname[reseed[1]]+'.png'" alt="" class="first" :style="{zIndex:pision}" v-else>
						<img :src="'../../static/'+'2-0-3-'+assetname[reseed[1]]+'.png'" alt="" class="first" style="z-index:19;">
						<img src="../../static/close.png" alt="" class="last" @click="close">
					</div>
					<div class="showbuy ">
						<p style="font-size: 28px;color: #2D2D2D;text-align:left;">{{name}} <span style="color:#999;font-size:14px;">{{type=='bg'?'背景':type=='fg'?'相框':type=='hat'?'帽子':type=='tail'?'尾部':type=='face'?'表情':'饰品'}}</span></p>
						<p style="font-size: 16px;color: #303030;margin-top:20px;text-align:left;">选择你要预览的龙：
							<select v-model="reseed" @change="seld">
								<option v-for="(item,index) in assert" :value="[item,index]">{{assetname[index]}}{{assidarr[index]}}</option>
							</select>
						</p>
						<div style="width:140px;height:52px;backgroundColor:#9234BF;line-height:52px;text-align:center;color:#fff;font-size: 16px;margin-top:50px;cursor: pointer;" @click="savesty">保存装扮</div>
					</div>
				

			</div>
		</div>
		<!-- 装扮弹窗 -->
		<div style="position:fixed;top:0;left:0;width:100%;height:100%;backgroundColor:rgba(0,0,0,0.7);z-index:1031;" v-if="descr">
		  <div class="imgoutshow">
				
					<div class="showtitle">
						已装扮的道具
						<img src="../../static/close.png" alt="" class="lastshow" @click="close">
					</div>
					<div class="showcont">
						<div  v-for="(item,index) in zblist" class="wearout">
							<img :src="item.imgUrl" alt="" class="wear">
							<p class="wearknow">{{item.propsName}}</p>
							<div class="offwel" @click="offwear(item.userPId)">卸下</div>
						</div>
					</div>
				

			</div>
		</div>
		<!-- 打赏详情弹窗 -->
		<div style="position:fixed;top:0;left:0;width:100%;height:100%;backgroundColor:rgba(0,0,0,0.7);z-index:1031;" v-if="giveflag">
		<div class="imgoutshow lw" >
			<div class="showtitle nobd">
						打赏详情
				<img src="../../static/close.png" alt="" class="lastshow" @click="close">
			</div>
			<div class="tabtop"><div class="time">打赏时间</div><div class="user">用户</div><div class="mnynum">打赏金额</div></div>
			<div class="showcont lower">
				<div class="tabtop nobg" v-for="item in givearr"><div class="time bk">{{item.time}}</div><div class="user bk" style="overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							height:39px;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;">{{item.owner}}</div><div class="mnynum bk">{{item.value}}NAS</div></div>
				</div>
			
			</div>
		</div>
		<!-- 出售弹窗 -->
		<div style="position:fixed;top:0;left:0;width:100%;height:100%;backgroundColor:rgba(0,0,0,0.7);z-index:1031;"  v-if="sellflag">
		<div class="imgout">
				
					<div class="showpic">
						<img :src="pic" alt="" class="second">
						<img src="../../static/close.png" alt="" class="last" @click="close">
					</div>
					<div class="showbuy ">
						<p style="font-size: 28px;color: #2D2D2D;text-align:left;">{{name}}</p>
						<p style="text-align:left;margin-top:20px;">原价：{{pri}}NAS</p>
						<p style="font-size: 16px;color: #303030;margin-top:20px;text-align:left;">设置价格：<input type="number" v-model="setprice">NAS
						</p>
						<div style="width:140px;height:52px;backgroundColor:#9234BF;line-height:52px;text-align:center;color:#fff;font-size: 16px;margin-top:50px;cursor: pointer;" @click="sellmytool(toolid,setprice)">出售</div>
						
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
            firstflag:0,
            secflag:0,
            modeflag:false,
			reseed:'',
			buyflag:false,
			mytype:0,
			descr:false,
			giveflag:false,
			// 盒子高度
			hinsty:'',
			// 装扮名称
			name:'',
			// 装扮图片
			pic:'',
			// 装扮类型
			type:'',
			//装备id
			toolid:'',
			// 钱包账户
			count:'',
			// 个人恐龙
			assert:[],
			assetname:[],
			//资产id数组
			assidarr:[],
			//装扮列表
			zblist:[],
			sellflag:false,
			//出售弹窗价格
			pri:'',
			//出售设置道具价格
			setprice:'',
			assertid_name:{},
			//打赏数组
			givearr:[],
			//装扮头
			tl:'',
			//装扮位置
			pision:'',
			rankmy:0,
			//记录数组
			temparr:[],
			//弹窗类别
			altcat:''


        }
	},
	computed:{
				   theindex() {  
                		return this.$store.state.newflag;  
            		}  
			   },
	watch:{
		theindex(n,o){
			if(n == true){
				alert('操作成功')
				this.fornew('getUserPropsList')
				this.$store.commit("changenew")
			}
		}
	},
    methods:{
        changefirst(a){
            this.firstflag = a
        },
        changesec(a){
            this.secflag = a
        },
        changemode(){
            this.modeflag = true
		},
		// 装备选择事件
		seld(){
			// console.log(e.srcElement.)
			console.log(this.reseed)
		},
		changebuy(a,b,c,d,e,f){
			this.buyflag = true
			this.name = a
			this.pic = b
			this.type = c
			this.toolid = d
			this.pision = e
			this.tl = f
		},
		close(){
			this.buyflag = false
			this.descr = false
			this.giveflag = false
			this.sellflag = false
		},
		sellpd(id,url,name,pric){
			this.sellflag = true
			this.toolid = id
			this.pic = url
			this.name = name
			this.pri = pric
		},
		changetype(a){
			this.mytype = a
			this.arr = []
			if(a==0){
				this.fornew('getUserPropsList')
			}else{
				this.fornew('getAssetList')
			}
			
		},
		//show作品
		showme(a){
			var that = this
			var bbc = JSON.stringify([this.$store.state.gamenum,a,1])
			newTransaction(contractAddress,'setShowOnOff','0',bbc,(res)=>{
					console.log(res)
					if(res == 'Error: Transaction rejected by user'){
						alert('已取消show。')
					}else{
						var check = setInterval(()=>{
							neb.api.getTransactionReceipt({hash: res.txhash}).then(function(resp) {
								console.log(resp.status)
								if (resp.status == 1) {
									clearInterval(check)
									alert('已成功show出你的装扮！')
									that.changetype(that.mytype)
								}
							});
						},3000)
					}  
			})
		},
		dec(aa){
			this.descr = true
			this.zblist = aa
		},
		//卸下装扮
		offwear(aa){
			var that = this
			var bbc = JSON.stringify([aa])
			newTransaction(contractAddress,'takeOffProps','0',bbc,(res)=>{
					console.log(res)
					if(res == 'Error: Transaction rejected by user'){
						alert('已取消卸下装备。')
					}else{
						var check = setInterval(()=>{
							neb.api.getTransactionReceipt({hash: res.txhash}).then(function(resp) {
								console.log(resp.status)
								if (resp.status == 1) {
									clearInterval(check)
									alert('已成功卸下，可装扮到其他！')
									that.changetype(that.mytype)
								}
							});
						},3000)
					}  
			})
		},
		//打赏详情
		changegive(a){
			this.giveflag = true
			this.givearr = []
			var bbc = JSON.stringify([this.$store.state.gamenum,a])
			onSimulateCallClick(contractAddress,'getShowRewards',bbc,(res)=>{
					JSON.parse(res.result).data.forEach(e => {
						var aa = new Date(e.time*1000)
						console.log(e.time)
						console.log(aa)
						console.log(aa.getMonth())
						var M = aa.getMonth()+1
						if(M>=10){
							M = M
						}else{
							M= '0' + M
						}
						var D = aa.getDate()
						if(D>=10){
							D = D
						}else{
							D= '0' + D
						}
						e.time = aa.getFullYear() + '-'+ M+ '-'+ D
						console.log(e.time)
						this.givearr.push(e)
					});
					
					console.log(this.givearr)
			})
		},
		fornew(func){
			
			var callArgs = JSON.stringify([this.$store.state.gamenum,this.count])
			onSimulateCallClick(contractAddress,func,callArgs,(res)=>{
				this.arr = JSON.parse(res.result).data
				console.log(this.arr)
				this.$store.commit('getallpage',Math.ceil(this.arr.length/20))
			})
		},
		//保存装扮
		savesty(){
			console.log(this.$store.state.gamenum)
			
			if(this.reseed){
				var that = this
				var bbc = JSON.stringify([this.$store.state.gamenum,this.assidarr[this.reseed[1]],this.toolid])
				console.log(bbc)
				newTransaction(contractAddress,'putOnProps','0',bbc,(res)=>{
					console.log(res)
					if(res == 'Error: Transaction rejected by user'){
						alert('你已取消装备。')
					}else{
						that.buyflag = false
						var check = setInterval(()=>{
							neb.api.getTransactionReceipt({hash: res.txhash}).then(function(resp) {
								console.log(resp.status)
								if (resp.status == 1) {
									clearInterval(check)
									alert('装备成功！')
									that.changetype(that.mytype)
								}
							});
						},3000)
					}  
					})
			}else{
				alert('请选择装扮的龙')
			}
			
		},
		//出售装扮
		sellmytool(id,pric){
			console.log(pric)
			var that = this
			var ids = id.toString()
			if(pric){
				var aab = JSON.stringify([ids,pric])
				newTransaction(contractAddress,'setPropsSaleOn','0',aab,(res)=>{
						console.log(res)
						if(res == 'Error: Transaction rejected by user'){
							alert('你已取消出售。')
						}else{
							that.sellflag = false
							var check = setInterval(()=>{
								neb.api.getTransactionReceipt({hash: res.txhash}).then(function(resp) {
									console.log(resp.status)
									if (resp.status == 1) {
										clearInterval(check)
										alert('出售成功！')
										that.changetype(that.mytype)
									}
								});
							},3000)
						}  
				})
			}else{
				alert('价格请输入数')
			}
			
		},

		//收回出售物品
		backsell(id){
			var that = this
			var aab = JSON.stringify([id])
				newTransaction(contractAddress,'setPropsSaleOff','0',aab,(res)=>{
						console.log(res)
						if(res == 'Error: Transaction rejected by user'){
							alert('你已取消操作。')
						}else{
							var check = setInterval(()=>{
								neb.api.getTransactionReceipt({hash: res.txhash}).then(function(resp) {
									console.log(resp.status)
									if (resp.status == 1) {
										clearInterval(check)
										alert('取消出售成功！')
										that.changetype(that.mytype)
									}
								});
							},3000)
						} 
				})
		},
		//筛选
		selec(a){
			this.rankmy = a
			if(a==0){
				this.arr = this.temparr
			}else if(a==1){
				this.arr = []
				this.temparr.forEach(e => {
					if(e.assetId){
						this.arr.push(e)
					}
				});
			}else{
				this.arr = []
				this.temparr.forEach(e => {
					if(!e.assetId){
						this.arr.push(e)
					}
				});
			}
			this.$store.commit('getallpage',Math.ceil(this.arr.length/20))

		}
		

	},
	created(){
		
		
	},
	mounted(){
		window.scrollTo(0,0)
		//个人恐龙
		var that = this
		getWallectInfo(function(){
			var sdd = JSON.stringify([that.count])
			console.log(sdd)
				onSimulateCallClick('n1qQhDzswApj5SmRrNQBNd6nSjqaaqmmmZi','getSelfDragon',sdd,(res)=>{
					console.log(res)
					var listid = JSON.parse(res.result)
					var rankid = []
					var request = []
					for(var key in listid){
						if(key != 'user_free'){
							rankid.push('https://s3-ap-southeast-1.amazonaws.com/mobotoolpush/mu/game/dinosaur_park/'+key+'.500.png')
							request.push(key)
						}
					}
					console.log(rankid)
					that.assert = rankid
					that.assidarr = request
					console.log(request)
					var sdds = JSON.stringify([request])
					onSimulateCallClick('n1qQhDzswApj5SmRrNQBNd6nSjqaaqmmmZi',"getDragonIdList", sdds, function(data) {
						var arr = JSON.parse(data.result).data
						console.log(arr)
						var tmp = []
						var tmpid_name = {}
						for(var kk in arr){
							tmp.push(arr[kk].name)
							arr[kk].id = kk
							console.log(arr[kk].name)
							tmpid_name[arr[kk].id] = arr[kk].name
						}
						console.log(tmpid_name)
						that.assetname = tmp
						that.assertid_name = tmpid_name

						console.log(that.assertid_name)

						// 道具信息
						var callArgs = JSON.stringify([that.$store.state.gamenum,that.count])
							onSimulateCallClick(contractAddress,'getUserPropsList',callArgs,(res)=>{
								that.arr = JSON.parse(res.result).data
								that.temparr =  JSON.parse(res.result).data
								console.log(that.arr)
								that.$store.commit('getallpage',Math.ceil(that.arr.length/20))
								// console.log(this.arr.g)

						})

						//查询被绑定道具的资产是否需要解绑
						onSimulateCallClick(contractAddress,'getAssetList',callArgs,(res)=>{
							console.log(JSON.parse(res.result).data)
							JSON.parse(res.result).data.forEach(ell => {
								console.log(11111111111111111111111111111111)
								console.log(ell.assetId)
								if(that.assertid_name[ell.assetId]){

								}else{
									var alas = JSON.stringify([that.$store.state.gamenum,[ell.assetId]])
									newTransaction(contractAddress,'unbindAsset','0',alas,(res)=>{
										// console.log(this.arr.g)
									})
								}
							});
							
							
						})
						
						
					})
			})
		})
		

		function getWallectInfo(callback) {
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
									callback()
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
p{
    margin-bottom: 0px;
}
::-webkit-scrollbar {display:none}
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
    color:#2D2D2D;
    overflow: hidden;
}
.payfee,.sell{
    width: 78px;
    height: 32px;
    color: #fff;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    background-color: #9234BF;
    margin: 0 auto;
    margin-top: 11px;
	float: left;
    cursor: pointer;
    transition: all 0.5s;
}
.btleft{
	margin-left: 30px;
}
.btright{
	margin-right: 30px;
}
.mysel{
	padding:0px 20px;
	border-right:1px solid #DDDDDD;
	cursor: pointer;
}
.mylast{
	border: none;
	padding: 0px 0px 0px 20px;
}
.sell{
	float: right;
	background-color: #fff;
	border: 1px solid #9234BF;
	color: #9234BF;
}
.sell:hover{
	border: 1px solid #ccc;
	color: #ccc;
}
.payfee:hover{
    background-color: #000;
}
.tips{
    position: relative;
	height: 183px;
	width: 262px;
	background-color: #f7f7f7;
}
.tips .long{
	position: absolute;
	z-index: 2;
	
	
}
.long{
	z-index:20;
	bottom: 0px;
	width: 81.475%!important;
}

.tips .bgfirst{
	position: absolute;
	z-index: 0;
	bottom: 0px;
	left:0;
}
.tips .fgsecond{
	position: absolute;
	z-index: 4;
	bottom: 0px;
	left:0;
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
    height: 45px;
    text-align: left;
    line-height: 45px;
    font-size: 14px;
    color: #2D2D2D;
    padding-left: 20px;
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

.first{
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}
.second{
	position: absolute;
	left: 50%;
	z-index: 20;
	transform: translateX(-50%);
}
.imgout,.imgoutshow{
	position: fixed;
	top: 220px;
	background-color: #fff;
	left: 50%;
	width: 1100px;
	height: 480px;
	transform: translateX(-50%);
	padding: 50px 60px 70px 60px;
}
.imgoutshow{
	height: 700px;
	padding: 0px 50px;
	z-index: 50;
}
.lw{
	height: 600px;
}
.first,.second{
	width: 520px;
	bottom: 0px;
}
.second{
	width: 81.475%;
}
.showbuy{
	float: right;
	width: 400px;
}
.last{
	position: absolute;
	width: 14px;
	top: -40px;
	right: -512px;
	cursor: pointer;
}
.lastshow{
	position: absolute;
    width: 14px;
    top: 48px;
    right: -30px;
    cursor: pointer;
}
.mystyle,.mypd{
	width: 120px;
	height: 40px;
	text-align: center;
	font-size: 16px;
	color: #2D2D2D;
	float: left;
	cursor: pointer;
}
.showtitle{
	position: relative;
	width: 100%;
	height: 120px;
	font-size: 28px;
	color: #2D2D2D;
	text-align: center;
	line-height: 120px;
	border-bottom: 1px solid #e6e6e6;
}
.showcont{
	width: 100%;
	height: 578px;
	overflow-x: hidden;
	overflow-y: scroll;
}
.lower{
	height: 400px;
}
.wearout{
	width: 188px;
	float: left;
	margin: 50px 31px 0px 31px;
}
.wear{
	width: 188px;
}
.wearknow{
	font-size: 14px;
	color: #707070;
	text-align: center;
	margin-top: 10px;
}
.offwel{
	width: 78px;
	height: 32px;
	line-height: 32px;
	text-align: center;
	font-size: 14px;
	color: #FFFFFF;
	background: #9234BF;
	margin: 0 auto;
	cursor: pointer;
	margin-top: 11px;
}
.nobd{
	border: none;
}
.tabtop{
	width: 100%;
	height: 44px;
	text-align: left;
	background: #9234BF;
	
}
.time,.user,.mnynum{
	float: left;
	height: 44px;
	font-size: 14px;
	line-height: 44px;
	color: #FFFFFF;
	padding-left: 10px;
	box-sizing: border-box;
}
.time{
	width: 30%;
}
.user{
	width:50%;
}
.mnynum{
	width:20%;
}
.nobg{
	background: #fff;
}
.bk{
	font-size: 16px;
	color: #555555;
}
.yellowcl{
	border: 1px solid #F5A623;
	color: #F5A623;
}
.yellowbg{
	background-color: #F5A623;
}
.myseltype{
		float:right;
		font-size: 14px;
		color: #2D2D2D;
}
@media (max-width: 1200px) {
	.payfee,.sell{
		width: 60px;
	}
	.tips{
		height: 147px;
	}
	
}
@media (max-width: 991px) {
	.tips{
		height: 155px;
	}
	.imgout,.imgoutshow{
		width: 600px;
		padding: 40px 40px;
		height: 700px;
		top: 100px;
	}
	.imgoutshow{
		padding: 0px 50px;
	}
	.lw{
		height: 600px;
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
	.lastshow{
		top: 45px;
    	right: -32px;
	}
}
@media (max-width: 520px) {
	.tips{
		height: 124px;
		width: auto;
	}
	.imgout,.imgoutshow{
		width: 100%;
		padding: 20px 20px;
		height: 700px;
		top: 100px;
	}
	.imgoutshow{
		padding: 0px 30px;
	}
	.lw{
		height: 600px;
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
	.first{
		width: 100%;
	}
	.second{
		width: 81.475%;
	}
	.last{
		top: -13px;
		right: -13px;
	}
	.lastshow{
		top: 45px;
    	right: -28px;
	}
	.wearout{
		/* float:none;
		margin: 0 auto;
		margin-top: 50px; */
		width: 100%;
		margin: 50px 0px 0px 0px;
	}
	.wear{
		width: 100%;
	}
	.time,.user,.mnynum{
		font-size: 12px;
		padding-left: 5px;
	}
	.user{
		padding-right: 5px;
	}
	.bk{
		font-size: 14px;
		color: #555555;
	}
	.btleft{
		margin-left: 15px;
	}
	.btright{
		margin-right: 15px;
	}
	.myseltype{
		float:left;
		font-size: 14px;
		color: #2D2D2D;
		margin-top: 20px;
}
	.type{
		height: 94px;
	}
}
</style>



<template>
    <div class="widget widget-categories sborder ">
						<!-- <div class="widget-title">
							<h5>categories</h5>
						</div> -->
						<!-- <div class="widget-content">
							<ul class="list-unstyled">
								<li>
									<a href="#"><i class="fa fa-angle-double-right"></i>opel<span>(5)</span></a>
								</li>
								<li>
									<a href="#"><i class="fa fa-angle-double-right"></i>Subaru<span>(77)</span></a>
								</li>
								<li>
									<a href="#"><i class="fa fa-angle-double-right"></i>BMW<span>(6)</span></a>
								</li>
								<li>
									<a href="#"><i class="fa fa-angle-double-right"></i>Toyota<span>(11)</span></a>
								</li>
								<li>
									<a href="#"><i class="fa fa-angle-double-right"></i>Audi<span>(54)</span></a>
								</li>
								<li>
									<a href="#"><i class="fa fa-angle-double-right"></i>Chevrolet<span>(22)</span></a>
								</li>
							</ul>
						</div> -->
			<div v-for="(item,index) in arr" class="left_box" @click="$store.commit('changegame',item.gameId)" :style="$store.state.gamenum == item.gameId?'color:#9234BF':''">{{item.gameName}}</div>	
			<div class="left_box" v-if="arr.length>=1" style="color: #999999;">
				<p class="pcfont">Monster Tamer秀</p>
				<p class="pcfont1">即将上线 . . .</p>
			</div>		
			<div class="left_box" v-if="arr.length>=1" style="color: #999999;">
				<p class="pcfont">Monster Block秀</p>
				<p class="pcfont1">即将上线 . . .</p>
			</div>
			<div class="left_box" v-if="arr.length>=1" style="color: #999999;">
				<p class="pcfont">恐 龙 星 球 秀</p>
				<p class="pcfont1">即将上线 . . .</p>
			</div>
            <!-- <div class="left_box" @click="$store.commit('changegame',1)" :style="$store.state.gamenum == 1?'color:#9234BF':''">Dinosaur Park秀</div>
            <div class="left_box" @click="$store.commit('changegame',2)" :style="$store.state.gamenum == 2?'color:#9234BF':''">怪物猎人秀</div> -->
		</div>
</template>

<script>
export default {
    data(){
        return{
            arr:[]
        }

    },
	created(){
		this.arr = []
		 var callArgs = JSON.stringify([])
			onSimulateCallClick(contractAddress,'getGameList',callArgs,(res)=>{
				var data =JSON.parse(res.result)
				console.log(data)
				for(let i=0;i<data.data.length;i++){
					this.arr.unshift(data.data[i])
					
				}
				// this.arr = this.arr
				console.log(this.arr)
			})
	}
}
</script>

<style scoped>
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
.sborder{
    height: 400px;
    border-right: 1px solid #E6E6E6;
}
.pcfont{
	font-size: 24px;
}
.pcfont1{
	font-size: 14px;
}
@media (max-width: 520px) {
	.sborder{
		height:auto;
		border: none;
		padding: 28px 28px 28px 0px;
	}
	.left_box{
		height: auto;
		border: none;
		width: 100%;
		margin-top: 23px;
		font-size: 22px;
	}
	.pcfont{
		font-size: 22px;
		display: inline-block;
		float: left;
		margin-bottom: 30px;
	}
	.pcfont1{
		font-size: 12px;
		display: inline-block;
		float: right;
		margin-bottom: 30px;
	}
}
</style>

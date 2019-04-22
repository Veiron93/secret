<template>
	<div 
		id="switchTheme" 
		@click="switchTheme"
		v-bind:class="theme"
	>

		<div class="round" data-theme="day" v-bind:class="[theme == 'day' ? 'active' : '']"></div>
		<div class="round" data-theme="night" v-bind:class="[theme == 'night' ? 'active' : '']"></div>
	</div>		
</template>

<script>
	export default {
		name: 'SwitchTheme',

		data: function(){
			return{
				theme: 'day',
			} 
		},
		
		methods:{	
		
			switchTheme: function(){
	
				if(document.body.getAttribute('class') == 'day'){

					document.body.classList.remove("day");
					document.body.classList.add("night");

					this.theme = "night"

				}else{
					document.body.classList.remove("night");
					document.body.classList.add("day");

					this.theme = "day"
				}
			}
		}
	}
</script>


<style lang="scss">
	#switchTheme{
		border: 2px solid;
		height: 30px;
		width: 54px;
		margin-left: 15px;
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0px 2px;
		overflow: hidden;

		cursor: pointer;
		transition: all .3s;

		&.day{
			background: #fff;
			border-color: #efa30d;
		}

		&.night{
			background: #3B5590 url('../assets/img/icons/stars.png') no-repeat;
			border-color: #5973AE;
		}

		.round{	
			height: 22px;
			width: 22px;
			border-radius: 50%;
			transition: margin-top .3s;
			margin-top: -50px;

			&.active{
				margin-top: 0;
			}

			&[data-theme="day"]{
				background: #efa30d url('../assets/img/icons/sun.svg');
			}

			&[data-theme="night"]{
				background: #7089c1 url('../assets/img/icons/moon.svg');
			}

			&[data-theme="day"], &[data-theme="night"]{
				background-size: 14px;
				background-position: center;
				background-repeat: no-repeat;
			}
		}
	}
</style>

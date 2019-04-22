<template>
  <header class="header">
	  <div class="container">
		<div class="row">
		  <div class="col-lg-4">
			<div class="logo">
				<router-link to="/">
					<img src="../assets/img/logo.svg" alt="">
					<p>Название компании</p>
				</router-link>
			</div>
		  </div>

		  <div class="col">
			<div class="nav">

			  <div class="notification-indicator">
				<span>3</span>
				<i class="far fa-bell"></i>
				<!--animated infinite swing-->
			  </div>

			  <div class="envelope-message btn">
				<a href="">
				  <i class="fas fa-plus"></i>
				  <span>Создать</span>
				</a>
			  </div>

			  <div class="navigation">
				<router-link to="/contacts" title="Контакты">
					<i class="far fa-address-book"></i>
				</router-link>

				<router-link to="/companies" title="Компании">
					<i class="far fa-building"></i>
				</router-link>

				<router-link to="" title="Личный кабинет">
					<i class="far fa-user"></i>
				</router-link>
			  </div>

			<!---->
			  <SwitchTheme></SwitchTheme>
			</div>
		  </div>
		</div>
	  </div>  
	</header>
</template>

<script>
	export default {
	  name: 'Header',

	  components: {
	  	SwitchTheme: () => import('@/components/SwitchTheme.vue'),
	  }
	}
</script>


<style lang="scss">
	header{
		height: 60px;
		background: #fff;
		box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.2);

		.logo{
			height: 60px;
			display: flex;
			align-items: center;
			
			a{
				display: flex;
				align-items: center;

				img{
					height: 30px;
				}

				p{
					font-size: 16px;
					font-weight: bold;
					color: #000;
					display: flex;
					align-items: center;
					
					&:before{
						content: '';
						display: block;
						width: 1px;
						background: #e2e2e2;
						height: 24px;
						margin-right: 10px;
						margin-left: 10px;
					}
				}
			}
		}

		.nav{
			display: flex;
			align-items: center;
			justify-content: flex-end;
			height: 60px;

			.notification-indicator{
				height: 36px;
				border-radius: 20px;
				padding: 0px 10px 0px 3px;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: 15px;
				background: #339ecc;
				cursor: pointer;
				
				span{
					height: 30px;
					min-width: 30px;
					border: 1px solid;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 20px;
					margin-right: 6px;
					padding: 2px 4px;
					font-size: 12px;
					background: #fff;
					color: #339ecc;
				}

				i{
					font-size: 18px;
					color: #fff;
				}
			}

			.envelope-message{
				background: $accent;
				margin-right: 15px;

				&:hover{
					background: #513cd2;
				}

				a{
					color: #fff;
					font-size: 13px;
					letter-spacing: 1px;
					i{

					}
				}
			}

			.navigation{
				margin-left: 20px;
				display: flex;

				a{
					height: 40px;
					width: 42px;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #777777;

					&:hover{
						color: #4c4b4b;
					}
					
					i{
						font-size: 20px;
					}
				}
			}
		}
	}
</style>

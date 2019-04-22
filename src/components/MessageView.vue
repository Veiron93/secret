<template>
	<div id="view-message" class="zoom-anim-dialog mfp-hide">
		<div class="title">
			<h1>Dialog example</h1>
		</div>

		<div class="information">
			<div class="sender">
				<p><span>от:</span> Администрация | Груша Анастасия Викторовна</p>
			</div>

			<div class="date">
				<p>20.01.19</p>
				<p>14:23:54</p>
			</div>
		</div>

		<div class="description">
			<p>This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.</p>
		</div>


		<div class="btn btn-open-chat">
			<i class="fas fa-comments"></i>
			<p>Открыть чат</p>
		</div>


	</div>
</template>

<script>
	export default {
		name: 'MessageView',
	}
</script>

<style lang="scss">
	#view-message {
		background: #fff;
		padding: 20px 30px;
		text-align: left;
		max-width: 760px;
		margin: 40px auto;
		position: relative;
		border-radius: 4px;
		box-shadow: 0px 0px 21.6px 2.4px rgba(37, 83, 190, 0.3);



		.title{
			margin-bottom: 8px;
			h1{
				font-size: 18px;
			}
		}

		.information{
			margin-bottom: 15px;
			.sender, .date{
				p{
					color: #555;
					font-size: 13px;
				}
			}
				
			.sender{
				margin-bottom: 3px;
				p{
						
				}
			}

			.date{
				p{
					display: inline-block;
					margin-right: 8px;

					&:last-child{
						margin-right: 0;
					}
				}
			}
		}

		.description{
			margin-bottom: 20px;
			p{
				color: #000;
			}
		}

		.btn-open-chat{
			background: $accent;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 140px;


			&:hover{
				background: #513cd2;
			}
			
			i, p{
				color: #fff;
			}

			i{
				margin-right: 5px;
			}

			p{

			}
		}
	}
</style>

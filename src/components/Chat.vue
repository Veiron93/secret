<template>
	<div class="chat">
		<div class="section-dialog">

			<div class="date-dialog">
				<p>Сегодня</p>
			</div>

			<div class="item incoming">
				<div class="message">
					<div class="text">
						<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p>
					</div>

					<div class="info">
						<span class="time">11:34</span>
					</div>
				</div>
			</div>

			<div class="date-dialog">
				<p>22.10.2019</p>
			</div>

			<div class="item outgoing">
				<div class="message">
					<div class="text">
						<p>Давно выяснено, что при оценке дизайна.</p>
					</div>

					<div class="info">
						<span class="time">11:34</span>
						<span class="status">
							<i class="fas fa-check-double"></i>
						</span>
					</div>
				</div>
			</div>	
		</div>

		<div class="section-send-message">
			<textarea name="" id="" placeholder="Введите сообщение"></textarea>
			<div class="btn-send">
				<i class="fas fa-paper-plane"></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Chat',
	}
</script>

<style lang="scss">
	.chat{
		border-top: 1px solid #f0f0f0;
		padding-top: 20px;
		margin: 20px -30px -20px;

		.section-dialog{
			height: 340px;
			padding: 0 30px 20px;

			.date-dialog{
				margin-top: 5px;
				margin-bottom: 15px;
				text-align: center;

			}

			.item{
				margin-bottom: 18px;
				display: flex;

				.message{
					max-width: 80%;
					border-radius: 4px;
					padding: 4px 8px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.3);

					.text{
						margin-right: 20px;
						p{
							color: #000;
						}
					}

					.info{
						span{
							font-size: 13px;
						}

						.time{
							
						}

						.status{
							margin-left: 5px;
							i{
								color: $accent;
							}
						}
					}
				}

				&.incoming{
					.message{
						background: #f8f8f8;
					}
				}

				&.outgoing{
					justify-content: flex-end;

					.message{
						background: #d7f5ce;
					}
				}
			}	
		}


		.section-send-message{
			background: $accent;
			border-radius: 0 0 4px 4px;
			display: flex;
			align-items: center;
			padding: 10px 0px 10px 10px;

			textarea{
				width: 100%;
				border-radius: 4px;
				resize: vertical;
				min-height: 60px;
				padding: 5px;
				font-size: 15px;
				outline: none;
				border: none;
			}

			.btn-send{
				height: 50px;
				width: 70px;
				flex: none;
				display: flex;
				align-items: center;
				justify-content: center;
				i{
					color: #fff;
					font-size: 24px;
					cursor: pointer;
				}
			}

		}
	}
</style>

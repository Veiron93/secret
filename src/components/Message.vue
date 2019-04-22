<template>
	<div class="item-message" data-type="incoming">
		<a href="#view-message" class="popup-with-zoom-anim">
			<div class="header">
				<div class="title">
					<h2>This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text.</h2>
				</div>

				<div class="indicators">
					<div class="massage active" title="Не прочитано"></div>
				</div>
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
		</a>
	</div>
</template>

<script>
	export default {
		name: 'Message',
	}
</script>

<style lang="scss">
	.item-message{
		width: 620px;
		border: 1px solid #d6d6d6;
		margin: 0 auto 20px;
		background: #fff;
		border-radius: 4px;
		transition: box-shadow 0.3s ease-in-out;
		cursor: pointer;

		&:hover{
			box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
		}

		a{
			display: block;
			height: 100%;
			padding: 8px;

			.header{
				display: flex;
				justify-content: space-between;
				margin-bottom: 10px;

				.title{
					h2{
						font-size: 16px;
						margin: 0;
						line-height: 1.5em;
					}
				}

				.indicators{
					flex: none;
					margin-left: 20px;
					
					.massage{
						height: 10px;
						width: 10px;
						border-radius: 50%;
						display: none;

						&.active{
							display: block;
							background: #339ecc;
						}
					}
				}
			}

			.information{
				display: flex;
				align-items: center;
				justify-content: space-between;

				.sender, .date{
					p{
						color: #888;
						font-size: 13px;
						margin: 0;
					}
				}
				
				.sender{
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
		}
	}
</style>

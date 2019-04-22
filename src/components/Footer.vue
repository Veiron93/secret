<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-3">
					<div class="copyright">
						<p><i class="far fa-copyright"></i> Секретный проект</p>
					</div>
				</div>

				<div class="col">
					<div class="links">
						<a href="">Рейтинг</a>
						<a href="">Стоимость</a>
						<a href="">О проекте</a>
					</div>
				</div>
			</div>
		</div>
	</footer> 
</template>

<script>
	export default {
		name: 'Footer',

	}
</script>

<style lang="scss">
	footer{
		flex: 0 0 auto;
		padding: 15px 0;

		.copyright{
			p{
				font-size: 13px;
				font-weight: bold;
			}
		}

		.links{
			a{
				font-size: 13px;
				margin-right: 15px;
				&:last-child{
					margin-right: 0;
				}
			}
		}
	}
</style>

<template>
	<div class="item">
		<div class="main-information">
			<div class="row">
				<div class="col-xl-5">
					<div class="name">
						<a href="company-view">ООО Ринамика</a>
					</div>
				</div>

				<div class="col-xl-2">
					<div class="phone">
						<a href="tel:89621112114">89621112114</a>
					</div>
				</div>

				<div class="col-xl-2">
					<div class="email">
						<a href="mailto:">yudin9302@gmail.com</a>
					</div>
				</div>

				<div class="col">
					<div class="btns">
						<div class="button" data-type="add">
							<i class="fas fa-plus"></i>
							<span>Добавить</span>
						</div>

						<div class="button" data-type="cancel">
							<i class="fas fa-ban"></i>
							<span>Отменить</span>
						</div>
					</div>
				</div>
			</div>	
		</div>

		<div class="description">
			<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CompanyCard',
	}
</script>
<template>
	<div class="container companies">
		<div class="row">
			<div class="col-xl-3">
				<div class="filter-companies">
					<form action="">
						<div class="section-filter">
							<h4>Категория</h4>
							<label>
								<input type="checkbox" value="">
								<span class="name">Государственные</span>
								<span class="count">(12)</span>
							</label>

							<label>
								<input type="checkbox">
								<span class="name">Государственные</span>
								<span class="count">(122)</span>
							</label>

							<label>
								<input type="checkbox">
								<span class="name">Государственные</span>
								<span class="count">(3)</span>
							</label>
						</div>
					</form>
				</div>
			</div>

			<div class="col">
				<SortingCompanies/>
				
				<div class="list-companies">
					<CompanyCard/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  components: {
	  	SortingCompanies: () => import('@/components/SortingCompanies.vue'),
	  	CompanyCard: () => import('@/components/CompanyCard.vue'),
	  }
	}
</script>
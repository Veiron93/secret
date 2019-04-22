<template>
	<div class="sorting-companies">
		<div class="count-componies">
			<p>Компаний: <span>350</span></p>
		</div>

		<div class="search-compony">
			<input type="text" placeholder="Поиск">
		</div>

		<div class="sorting-componies">
			<p>Сортировать:</p>
			<select >
				<option v-for="option in options" v-bind:value="option.value">
					{{ option.text }}
				</option>
			</select>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SortingCompanies',

		data: function(){
			return {
				options: [
					{ text: ' ', value: 'alphabet' },
					{ text: 'Новые', value: 'new' },
					{ text: 'Старые', value: 'old' }
			    ]
			}
		   
		}
	}
</script>

<style lang="scss">
	.sorting-companies{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 25px;

		background: #24a6ea;
		padding: 5px 10px;
		border-radius: 4px;

		box-shadow: 0px 5px 25px -2px rgba(36,166,234,0.5);

		.count-componies{
			p{
				font-size: 14px;
				color: #fff;
				margin: 0;
			}
		}

		.search-compony, .sorting-componies{
			input, select{
				border-radius: 4px;
				background: #fff;
				font-size: 14px;
				height: 32px;
				
				border: none;
				color: #3e3e3e;

				&::-webkit-input-placeholder{
					color: #ADADAD;
				}
					
				&::-moz-placeholder{
					color: #ADADAD;
				}
				&:-moz-placeholder{
					color: #ADADAD;
				}
				&:-ms-input-placeholder{
					color: #ADADAD;
				}
			}
		}

		.search-compony{
			input{
				width: 300px;
				padding: 0px 10px;
			}
		}

		.sorting-componies{
			display: flex;
			align-items: center;

			p{
				margin: 0;
				margin-right: 10px;
				font-size: 14px;
				color: #fff;

			}

			select{
				padding: 0px 22px 0 10px;
				background: #fff url('/resources/img/icons/sort-arrows.svg');
				background-repeat: no-repeat;
				background-size: 18px 10px;
				background-position: right center;
			}
		}
	}
</style>
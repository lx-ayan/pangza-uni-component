<template>
	<button :class="[componentNamecomponentName, ccb.m('size', $props.size)]">
		123123
	</button>
</template>

<script>
import {createComponentBem} from '../../hooks';
const ccb = createComponentBem('button');
export default {
	name: ccb.nameSpace,
	props: {
		size: {
			type: String,
			default: 'medium'
		}
	},
	mounted: () => {
	},
	data() {
		return {
			ccb
		}
	},
}
</script>

<style lang="scss">
	@import '../../css/var.scss';
	
	.pa-button {
		background-color: $pangza-main-color;
		color: $pangza-main-white;
		font-size: 15px;
		line-height: 0;
		
		&--size_small {
			padding: $pangza-main-sm-padding
		}
		
		&--size_medium {
			padding: $pangza-main-padding;
		}
		
		&--size_large {
			padding: $pangza-main-sm-padding
		}
	}

</style>

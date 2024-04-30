<script setup lang="ts">
import { navigationMenu } from '~/resources/utils/navigation'
const menu = navigationMenu()
</script>
<template>
	<div>
		<div>
			<nav>
				<ul>
					<li v-for="item in menu" :key="item.name">
						<router-link :class="[item.active ? 'bg-red-500' : 'bg-blue-500']">
							{{ item.name }}
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
		<slot />
	</div>
</template>

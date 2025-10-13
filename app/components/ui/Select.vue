<script setup lang="ts">
defineProps<{
	items: { label: string; value: string }[];
}>();

const item = ref();
</script>

<template>
	<SelectRoot v-model="item">
		<SelectTrigger class="SelectItem">
			<SelectValue />
			<SelectIcon />
		</SelectTrigger>

		<SelectPortal>
			<SelectContent class="SelectContent">
				<SelectScrollUpButton />
				<SelectViewport>
					<SelectItem v-for="({ label, value }, index) in items" :key="index" :value="value" class="SelectItem">
						<SelectItemIndicator>
							<Icon icon="radix-icons:check" />
						</SelectItemIndicator>
						<SelectItemText>
							{{ label }}
						</SelectItemText>
					</SelectItem>
					<SelectGroup>
						<SelectLabel />
						<SelectItem v-for="({ label, value }, index) in items" :key="index" :value="value" class="SelectItem">
							<SelectItemIndicator>
								<Icon icon="radix-icons:check" />
							</SelectItemIndicator>
							<SelectItemText>
								{{ label }}
							</SelectItemText>
						</SelectItem>
					</SelectGroup>
					<SelectSeparator />
				</SelectViewport>
				<SelectScrollDownButton />
				<SelectArrow />
			</SelectContent>
		</SelectPortal>
	</SelectRoot>
</template>

<style lang="scss" scoped>
.SelectContent {
	background-color: transparent;
}
.SelectItem {
	padding: 1rem;
	background-color: var(--white);
}
</style>

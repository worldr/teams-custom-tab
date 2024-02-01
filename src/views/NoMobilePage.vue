<template>
	<div data-testid="nomobile-page" class="root flexColumn box">
		<div class="container">
			<div class="notAvailableText">
				<span class="title">
					{{ PlaceholderTexts.Header }}
				</span>
				<span class="subtitle">
					{{ PlaceholderTexts.Subtitle }}
				</span>
			</div>
		</div>
		<CorporateFooter />
	</div>
</template>

<script setup lang="ts">
enum PlaceholderTexts {
	Header = "Valarian Messenger is not available on mobile devices at this time.",
	Subtitle = "Please use a supported web browser or the Microsoft Teams desktop application to use this feature.",
}
</script>

<style lang="scss" scoped>
.container {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

export default defineNuxtRouteMiddleware(() => {
    const user = useSanctumUser<Record<string, unknown>>()

    const hasKnownStatus = user.value && (
        Object.prototype.hasOwnProperty.call(user.value, 'two_factor_confirmed_at')
        || Object.prototype.hasOwnProperty.call(user.value, 'two_factor_enabled')
    )

    const isEnabled = Boolean(
        user.value?.two_factor_confirmed_at
        || user.value?.two_factor_enabled,
    )

    if (hasKnownStatus && isEnabled) {
        return navigateTo('/dashboard/profile?two-factor=already-enabled', { replace: true })
    }
})

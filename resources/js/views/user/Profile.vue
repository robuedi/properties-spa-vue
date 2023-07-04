<template>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item  v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" name="settings" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Test A</q-item-label>
            </q-item-section>
          </q-item>
          <q-item  v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" name="settings" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Test B</q-item-label>
            </q-item-section>
          </q-item>
          <q-item  v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" name="settings" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Test C</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
        <q-page padding>
            <p>Hello {{useAuthStore().authUser.name}}!</p>
        </q-page>
    </q-page-container>
</template>

<script setup>
import { useAuthStore } from "@/store/auth.store";
</script>

<style lang="sass">
.GPL

  &__toolbar
    height: 64px

  &__toolbar-input
    width: 35%

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368

    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px

  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500

  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>
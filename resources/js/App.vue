<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon name="home"  size="32px" />
          </q-avatar>
          Properties
        </q-toolbar-title>

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn v-if="$q.screen.gt.xs" dense flat round size="sm" icon="notifications" />
          <q-btn v-if="$q.screen.gt.xs" dense flat>
            <div class="row items-center no-wrap">
              Rent/Sell Property
              <q-icon name="arrow_drop_down" size="16px" style="margin-left: -2px" />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Rent new property</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Sell new property</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn dense flat no-wrap>
            <q-avatar rounded size="20px">
              <img src="https://cdn.quasar.dev/img/avatar3.jpg">
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div>Signed in as <strong>Mary</strong></div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your profile</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>

      <q-tabs       
        dense
        align="justify"
        class="text-white"
        :breakpoint="0"
        >
        <q-route-tab to="/rent" label="Rent" />
        <q-route-tab to="/buy" label="Buy" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">

</script>


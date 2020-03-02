<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-layout view="lHh Lpr lFf">3959A2
    <q-header elevated>
      <q-toolbar style="background: #6981B8;
background: linear-gradient(90deg, #6981B8 0%, #3959A2 100%)">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        ></q-btn>

        <q-toolbar-title>
          Sirius
        </q-toolbar-title>
        <q-btn icon="work_outline" outline  label="Add a Business" color="white" class="" @click="createBusi = true"></q-btn>
        <q-btn flat round icon="notifications" >
          <q-badge color="orange" floating>3</q-badge>
          <q-menu>
            <q-list separator style="max-width: 450px;.q-item{padding-bottom: 10px}" >
              <q-item class=" q-ma-sm">
                <q-item-section avatar>
                  <q-icon color="primary" name="error" />
                </q-item-section>
                <q-item-section>
                  <q-item-section>Create a Website for business</q-item-section>
                  <q-item-label caption>Business website is very important for attracting user and providing information.</q-item-label>
                </q-item-section>
              </q-item>
              <q-item class=" q-ma-sm">
                <q-item-section avatar>
                  <q-icon color="primary" name="info" />
                </q-item-section>
                <q-item-section>
                  <q-item-section>You do not have unpayed loan.</q-item-section>
                  <q-item-label caption>Your credit score is well.</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-btn icon="money_off" color="primary"  flat round/>
                </q-item-section>
              </q-item>
              <q-item class=" q-ma-sm">
                <q-item-section avatar>
                  <q-icon color="primary" name="warning" />
                </q-item-section>
                <q-item-section>
                  <q-item-section>Create a LinkedIn page </q-item-section>
                  <q-item-label caption>LinkedIn page is very important for finding and connecting to businesses and employees.</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-btn icon="add" color="primary" to="/settings" flat round/>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn-dropdown color="white" label="Nihad Hamid" flat no-caps >
          <q-list>
            <q-item clickable v-close-popup to="/profile">
              <q-item-section side >
                <q-icon name="person"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>Profile</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section side >
                <q-icon name="keyboard_backspace"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>Sign out</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Dashboard
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-dialog v-model="createBusi">
      <q-card style="min-width: 450px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-center">Add your business</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-input outlined v-model="buss.name" label="Name" class="q-pb-sm" type="text">
            <template v-slot:prepend>
              <q-icon name="perm_identity" />
            </template>
          </q-input>
          <q-input outlined v-model="buss.desc" label="Description" class="q-pb-sm" type="text">
            <template v-slot:prepend>
              <q-icon name="text_fields" />
            </template>
          </q-input>
          <q-input outlined v-model="buss.branch" label="Branch" class="q-pb-sm" type="text">
            <template v-slot:prepend>
              <q-icon :name="laCodeBranchSolid" />
            </template>
          </q-input>
          <q-input outlined v-model="buss.voen" label="VOEN" class="q-pb-sm" type="number">
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
          </q-input><q-input outlined v-model="buss.turnover" label="Turnover" class="q-pb-sm" type="number">
            <template v-slot:prepend>
              <q-icon name="attach_money" />
            </template>
          </q-input><q-input outlined v-model="buss.howlong" label="How long" class="q-pb-sm" type="number">
            <template v-slot:prepend>
              <q-icon name="date_range" />
            </template>
          </q-input>
          <q-file outlined v-model="buss.pic" label="Icon" >
            <template v-slot:prepend>
              <q-icon name="photo_camera" />
            </template>
          </q-file>
          <q-btn class="full-width q-mt-sm" label="Add" icon="add" color="primary"></q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import { laCodeBranchSolid, laHandHoldingUsdSolid } from '@quasar/extras/line-awesome'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      laCodeBranchSolid: laCodeBranchSolid,
      laHandHoldingUsdSolid: laHandHoldingUsdSolid,
      buss: {
        name: '',
        desc: '',
        turnover: '',
        pic: null,
        voen: '',
        howlong: '',
        branch: ''

      },
      createBusi: false,
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Personal Analytics',
          caption: 'Personal SME Analytics',
          icon: 'graphic_eq',
          link: '/'
        },
        // {
        //   title: 'Differential Analytics',
        //   caption: 'Analytical comparision between SME branches.',
        //   icon: 'leak_remove',
        //   link: '/diffan'
        // },
        {
          title: 'Opportunities',
          caption: 'Catch the best deals and opportunities from SMEs',
          icon: laHandHoldingUsdSolid,
          link: '/opportunity'
        },
        {
          title: 'Settings',
          caption: 'Personal settings of SME',
          icon: 'settings',
          link: '/settings'
        }
      ]
    }
  },
  methods: {
    mNotif: function () {
      this.$q.notify({
        message: 'Jim just pinged you.',
        color: 'primary',
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        actions: [
          { label: 'Reply', color: 'yellow', handler: () => { /* ... */ } },
          { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    }
  }
}
</script>

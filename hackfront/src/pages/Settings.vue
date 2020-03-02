<template>
  <q-page padding>
    <q-card class="my-card">
        <div class="text-center text-h4 text-weight-regular q-pt-sm">
            Settings
        </div>
      <q-card-section>
        <div class="q-pa-md" style="">
          <q-list padding>
            <q-item-label header>User Controls</q-item-label>
            <q-item clickable v-ripple>
              <q-item-section side >
                <q-icon name="lock"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>Password</q-item-label>
                <q-item-label caption>
                  Change Password for main user.
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator spaced />
            <q-item-label header>Notifications</q-item-label>

            <q-item tag="label" v-ripple>
              <q-item-section side>
                <q-icon name="notifications"></q-icon>
              </q-item-section>

              <q-item-section side top>
                <q-checkbox v-model="check1" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Ads and Insights Notifications</q-item-label>
                <q-item-label caption>
                  Notify me about updates to general data or customised ads.
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced />
            <q-item-label header>Social Pages of SME</q-item-label>
            <q-input outlined v-model="smesocials.website" label="Website" class="q-pb-sm" type="url">
              <template v-slot:prepend>
                <q-icon name="link" />
              </template>
            </q-input>
            <q-input outlined v-model="smesocials.fb" label="Facebook" class="q-pb-sm" type="url">
              <template v-slot:prepend>
                <q-icon :name="laFacebook" />
              </template>
              <template v-slot:hint>
                email@email.com
              </template>
            </q-input>
            <q-input outlined v-model="smesocials.twit" label="Twitter" class="q-pb-sm" type="url">
              <template v-slot:prepend>
                <q-icon :name="laTwitter" />
              </template>
            </q-input><q-input outlined v-model="smesocials.link" label="LinkedIn" class="q-pb-sm" type="url">
              <template v-slot:prepend>
                <q-icon :name="laLinkedin" />
              </template>
            </q-input>
            <q-input outlined v-model="smesocials.insta" label="Instagram" class="q-pb-sm" type="url">
              <template v-slot:prepend>
                <q-icon :name="laInstagram" />
              </template>
            </q-input>
            <q-btn class="full-width" label="Save" icon="save" color="primary"></q-btn>
          </q-list>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { laFacebook, laTwitter, laInstagram, laLinkedin } from '@quasar/extras/line-awesome'
export default {
  // name: 'PageName',
  data () {
    return {
      check1: true,
      laFacebook: laFacebook,
      laTwitter: laTwitter,
      laInstagram: laInstagram,
      laLinkedin: laLinkedin,
      smesocials: {
        fb: 'https://www.facebook.com/evdexidmet',
        link: '',
        twit: 'https://www.twitter.com/evdexidmet',
        insta: 'https://www.instagram.com/evdexidmet',
        website: ''
      }
    }
  }
}
</script>

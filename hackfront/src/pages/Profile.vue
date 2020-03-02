<template>
  <q-page padding>
    <!-- content -->
    <q-card>
      <div class="row">
        <div class="col q-pa-md">
          <div class="text-weight-medium text-h4 text-center">
            Nihad Kerim
          </div>
          <div>
            <q-list >
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar  icon="place" />
                </q-item-section>

                <q-item-section>Baku Expo Center</q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar icon="filter_1" />
                </q-item-section>

                <q-item-section>Business count</q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar rounded icon="work_outline" />
                </q-item-section>

                <q-item-section>Portfolio</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar rounded icon="date_range" />
                </q-item-section>

                <q-item-section>23 yers old</q-item-section>
              </q-item>
              <q-item clickable v-ripple class="text-positive">
                <q-item-section avatar>
                  <q-avatar rounded icon="score" />
                </q-item-section>

                <q-item-section>Credit Score</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
        <div class="col q-pa-md flex flex-center">
          <q-avatar size="300px">
            <img src="https://picsum.photos/500/500">
          </q-avatar>
          <!--<q-img src="https://picsum.photos/500/500" class="avatar"></q-img></div>-->
        </div>
      </div>
    </q-card>
    <q-card class="q-mt-sm">
      <q-card-section class="text-center text-weight-medium text-h5">
        Businesses
      </q-card-section>
      <q-card-section>
        <q-list separator>
          <q-item>
            <q-item-section side >
                <img src="https://www.evdexidmet.az/statics/icons/favicon-32x32.png">
            </q-item-section>
            <q-item-section>
              <q-item-label>EvdəXidmət</q-item-label>
              <q-item-label caption lines="2">EvdəXidmət sizə müxtəlif xidmətləri bir başa evinizə gəlməsini asandlaşdırır.</q-item-label>
              <q-item-label caption lines="2">Internet Services</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>5 month in work</q-item-label>
              <q-item-section>
                <q-badge color="teal"  ><span class="text-weight-medium">5k</span>&nbsp; turnover</q-badge>
              </q-item-section>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

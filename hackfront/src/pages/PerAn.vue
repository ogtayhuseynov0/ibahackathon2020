<template>
  <q-page class="q-pa-lg">
    <!-- content -->
    <!--<div class="small" style="max-height: 500px">-->
      <!--<line-chart :chart-data="datacollection" :options="opp"></line-chart>-->
    <!--</div>-->
    <!--<div>-->
      <!--<pie-chart :chart-data="pdata" :options="opp"/>-->
    <!--</div>-->
    <div class="row">
      <div class="col q-pa-sm" id="first">
        <q-card bordered class="my-card text-white" style="background: rgb(254, 148, 103);
background: linear-gradient(90deg, rgb(254, 148, 103) 0%, rgb(254, 181, 149) 100%)">
          <q-card-section>
            <div class="text-h6">$33,000</div>
            <div class="text-subtitle2">All Earnings  <q-icon name="bar_chart" class="float-right" size="33px"></q-icon></div>
          </q-card-section>

          <q-separator style="min-height: 1px" color="white" />

          <q-card-section>
            <q-icon name="access_time"></q-icon> &nbsp;update : 2:15 am
          </q-card-section>
        </q-card>
      </div><div class="col q-pa-sm">
        <q-card dark bordered class=" my-card"  style="background: rgb(10, 198, 133);
background: linear-gradient(90deg, rgb(10, 198, 133) 0%, rgb(13, 242, 162) 100%)">
          <q-card-section>
            <div class="text-h6">250+</div>
            <div class="text-subtitle2">total social visitors <q-icon name="remove_red_eye" class="float-right" size="33px"></q-icon></div>
          </q-card-section>

          <q-separator style="min-height: 1px" color="white" />

          <q-card-section>

            <q-icon name="access_time"></q-icon> &nbsp;update : 2:15 am

          </q-card-section>
        </q-card>
      </div><div class="col q-pa-sm">
      <q-card dark bordered class=" my-card"  style="background: rgb(254, 98, 116);
background: linear-gradient(90deg, rgb(254, 98, 116) 0%, rgb(254, 144, 157) 100%)">
          <q-card-section>
            <div class="text-h6">188</div>
            <div class="text-subtitle2">new customers <q-icon name="person_add" class="float-right" size="33px"></q-icon></div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>

            <q-icon name="access_time"></q-icon> &nbsp;update : 2:15 am

          </q-card-section>
        </q-card>
      </div><div class="col q-pa-sm">
      <q-card dark bordered class=" my-card"  style="background: rgb(1, 175, 178);
background: linear-gradient(90deg, rgb(1, 175, 178) 0%, #01DADE 100%)">
          <q-card-section>
            <div class="text-h6">0 $</div>
            <div class="text-subtitle2">loan debt <q-icon name="money" class="float-right" size="33px"></q-icon></div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>

            <q-icon name="access_time"></q-icon> &nbsp;update : 2:15 am

          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col q-pa-sm">
        <q-card>
          <q-card-section class="text-center text-h5">
              Social Page Chekup
          </q-card-section>
          <q-card-section>
            <q-list separator>
              <q-item class=" q-mb-sm">
                <q-item-section avatar>
                  <q-icon color="primary" name="link" />
                </q-item-section>
                <q-item-section>Website</q-item-section>
                <q-item-section avatar>
                  <q-icon color="primary" name="close" />
                </q-item-section>
                <q-item-section avatar>
                  <q-btn icon="add" color="primary" to="/settings" flat round/>
                </q-item-section>
              </q-item>
              <q-item class=" q-mb-sm">
                <q-item-section avatar>
                  <q-icon color="primary" :name="laFacebook" />
                </q-item-section>
                <q-item-section>Facebook</q-item-section>
                <q-item-section avatar>
                  <q-icon color="primary" name="done" />
                </q-item-section>
              </q-item>
              <q-item class=" q-mb-sm">
                <q-item-section avatar>
                  <q-icon color="primary" :name="laLinkedin" />
                </q-item-section>
                <q-item-section>LinkedIn</q-item-section>
                <q-item-section avatar>
                  <q-icon color="primary" name="close" />
                </q-item-section>
                <q-item-section avatar>
                  <q-btn icon="add" color="primary" to="/settings" flat round/>
                </q-item-section>
              </q-item>
              <q-item class=" q-mb-sm">
                <q-item-section avatar>
                  <q-icon color="primary" :name="laTwitter" />
                </q-item-section>
                <q-item-section>Twitter</q-item-section>
                <q-item-section avatar>
                  <q-icon color="primary" name="done" />
                </q-item-section>
              </q-item>
              <q-item class=" q-mb-sm">
                <q-item-section avatar>
                  <q-icon color="primary" :name="laInstagram" />
                </q-item-section>
                <q-item-section>Instagram</q-item-section>
                <q-item-section avatar>
                  <q-icon color="primary" name="done" />
                </q-item-section>
              </q-item>
              <q-item class="">
                <q-item-section avatar>
                  <q-icon color="primary" name="score" />
                </q-item-section>
                <q-item-section>Social Accessibility</q-item-section>
                <q-item-section side>
                  <q-badge color="teal" label="50/100" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col q-pa-sm">
        <q-card>
          <q-card-section class="text-center text-h5">
            Basic Recommendations
          </q-card-section>
          <q-card-section>
            <q-list separator>
              <q-item class="">
                <q-item-section avatar>
                  <q-icon color="red" name="error" />
                </q-item-section>
                <q-item-section>
                  <q-item-section>Create a Website for business</q-item-section>
                  <q-item-label caption>Business website is very important for attracting user and providing information.</q-item-label>
                </q-item-section>
              </q-item>
              <q-item class="">
                <q-item-section avatar>
                  <q-icon color="green" name="info" />
                </q-item-section>
                <q-item-section>
                  <q-item-section>You do not have unpayed loan.</q-item-section>
                  <q-item-label caption>Your credit score is well.</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-btn icon="money_off" color="primary"  flat round/>
                </q-item-section>
              </q-item>
              <q-item class="">
                <q-item-section avatar>
                  <q-icon color="orange" name="warning" />
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
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col q-pa-sm">
        <q-card>
          <q-card-section class="text-center">
            Social Page Activity Distribution
          </q-card-section>
          <q-card-section>
          <!--<pie-chart :chart-data="pdata" :options="opp"></pie-chart>-->
          <doughnut :chart-data="pdata" :options="opp"></doughnut>
          </q-card-section>
        </q-card>
      </div>
      <div class="col q-pa-sm">
        <q-card>
          <line-chart :chart-data="datacollection" :options="{fill: false, showLine:false}"></line-chart>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
/* eslint-disable no-unused-vars */

import LineChart from '../components/LineChart.js'
// import PieChart from '../components/PieChart.js'
import Doughnut from '../components/Doughnut.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { laFacebook, laTwitter, laInstagram, laLinkedin } from '@quasar/extras/line-awesome'
export default {
  components: {
    LineChart,
    // PieChart,
    Doughnut
  },
  data () {
    return {
      laFacebook: laFacebook,
      laTwitter: laTwitter,
      laInstagram: laInstagram,
      laLinkedin: laLinkedin,
      pdata: {
        datasets: [{
          data: [7, 4, 0, 1.2, 1],
          backgroundColor: ['#0CE398', '#4F6BAC', '#01CCCF', '#FE9569', '#ff0000']
        }],

        labels: [
          'Facebook',
          'Instagram',
          'Linkedin',
          'Twitter',
          'Youtube'
        ],
        plugins: {
          datalabels: {
            color: 'blue',
            labels: {
              title: {
                font: {
                  weight: 'bold'
                }
              },
              value: {
                color: 'green'
              }
            }
          }
        }
      },
      datacollection: null,
      opp: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          // Change options for ALL labels of THIS CHART
          datalabels: {
            formatter: function (value, context) {
              return ''
            },
            color: 'black',
            title: {
              font: {
                weight: 'bold'
              }
            }
          }
        }
      }
    }
  },
  mounted () {
    this.fillData()
    // Chart.defaults.global.plugins.labels = {
    //
    // }
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ['01/20', '02/20', '03/20', '05/20', '06/20, 07/20'],
        datasets: [
          {
            label: 'Monthly income',
            data: [22000, 23000, 20000, 17000, 18000, 20000],
            backgroundColor: '#00D68B'
          },
          {
            label: 'Monthly avg',
            data: [22000, 22500, 21250, 18225, 18100, 19000],
            backgroundColor: '#0DF2A2'

          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (10 - 1 + 1)) + 1
    }
  }
}
</script>

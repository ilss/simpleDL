/*
 * @Author: aFei
 * @Date: 2018-12-26 15:38:25
 */
/*
* @LastEditors: aFei
* @LastEditTime: 2019-08-13 17:31:41
*/
<template>
  <div class="views-cluster-monitoring-namespaces-detail">
    <div class="item">
      <p class="tit">{{$t("views.clusterMonitoring.workloadStatus")}}</p>
      <div class="content">
        <div class="chart-item">
          <sedu-echarts domId="a"
                        :cname="cname"
                        :option=duplicate.option />
          <span v-show="!duplicate.loading">{{duplicate.data}}%</span>
          <p>{{$t("views.clusterMonitoring.replicaSet")}}</p>
        </div>
        <div class="chart-item">
          <sedu-echarts domId="b"
                        :cname="cname"
                        :option=deployment.option />
          <span v-show="!deployment.loading">{{deployment.data}}%</span>
          <p>{{$t("views.clusterMonitoring.deploy")}}</p>
        </div>
        <div class="chart-item">
          <sedu-echarts domId="c"
                        :cname="cname"
                        :option=task.option />
          <span v-show="!task.loading">{{task.data}}%</span>
          <p>{{$t("views.clusterMonitoring.task")}}</p>
        </div>
        <div class="chart-item">
          <sedu-echarts domId="d"
                        :cname="cname"
                        :option=services.option />
          <span v-show="!services.loading">{{services.data}}%</span>
          <p>{{$t("views.clusterMonitoring.service")}}</p>
        </div>
        <div class="chart-item">
          <sedu-echarts domId="e"
                        :cname="cname"
                        :option=docker_list.option />
          <span v-show="!docker_list.loading">{{docker_list.data}}%</span>
          <p>{{$t("views.clusterMonitoring.containerGroup")}}</p>
        </div>

      </div>
    </div>
    <div class="item">
      <p class="tit">{{$t("views.clusterMonitoring.replicaSet")}}</p>
      <el-table class="tab-content"
                :data="tableData1.msg"
                v-loading="tableData1.loading"
                border>
        <el-table-column prop="name"
                         :label='$t("views.clusterMonitoring.name")'></el-table-column>
        <!-- <el-table-column :label='$t("views.clusterMonitoring.label")'
                         width="175">
          <template slot-scope="item">
            <span class="tag"
                  :key="index"
                  v-for="(one,index) in item.row.tag">{{one}}</span>
          </template>
        </el-table-column> -->
        <el-table-column prop="container_group"
                         :label='$t("views.clusterMonitoring.containerGroup")'></el-table-column>
        <el-table-column prop="created"
                         :label='$t("views.clusterMonitoring.created")'></el-table-column>
        <el-table-column prop="images"
                         :label='$t("views.clusterMonitoring.mirror")'></el-table-column>
        <!--暂无数据情况-->
        <div slot="empty">
          <div class="views-empty">
            <span class="views-empty-table"></span>
            <p class="views-empty-text">{{$t('views.table.noData')}}</p>
          </div>
        </div>
      </el-table>
    </div>
    <div class="item">
      <p class="tit">{{$t("views.clusterMonitoring.deploy")}}</p>
      <el-table class="tab-content"
                :data="tableData2.msg"
                v-loading="tableData2.loading"
                border>
        <el-table-column prop="name"
                         show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.name")'></el-table-column>
        <!-- <el-table-column :label='$t("views.clusterMonitoring.label")'
                         width="175">
          <template slot-scope="item">
            <span class="tag"
                  :key="index"
                  v-for="(one,index) in item.row.tag">{{one}}</span>
          </template>
        </el-table-column> -->
        <el-table-column prop="container_group"
                         show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.containerGroup")'></el-table-column>
        <el-table-column prop="created"
                         show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.created")'></el-table-column>
        <el-table-column prop="images"
                         show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.mirror")'></el-table-column>
        <!--暂无数据情况-->
        <div slot="empty">
          <div class="views-empty">
            <span class="views-empty-table"></span>
            <p class="views-empty-text">{{$t('views.table.noData')}}</p>
          </div>
        </div>
      </el-table>
    </div>
    <div class="item">
      <p class="tit">{{$t("views.clusterMonitoring.task")}}</p>
      <el-table class="tab-content"
                :data="tableData3.msg"
                v-loading="tableData3.loading"
                border>
        <el-table-column prop="name"
                         show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.name")'></el-table-column>
        <!-- <el-table-column :label='$t("views.clusterMonitoring.label")'
                         width="175">
          <template slot-scope="item">
            <span class="tag"
                  :key="index"
                  v-for="(one,index) in item.row.tag">{{one}}</span>
          </template>
        </el-table-column> -->
        <el-table-column prop="container_group"
                         show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.containerGroup")'></el-table-column>
        <el-table-column prop="created"
                         show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.created")'></el-table-column>
        <el-table-column prop="images"
                         show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.mirror")'></el-table-column>
        <!--暂无数据情况-->
        <div slot="empty">
          <div class="views-empty">
            <span class="views-empty-table"></span>
            <p class="views-empty-text">{{$t('views.table.noData')}}</p>
          </div>
        </div>
      </el-table>
    </div>
    <div class="item">
      <p class="tit">{{$t("views.clusterMonitoring.service")}}</p>
      <el-table class="tab-content"
                :default-sort="{prop: 'service_data_time', order: 'descending'}"
                :data="tableData4.msg"
                v-loading="tableData4.loading"
                border>
        <el-table-column prop="name"
                         :label='$t("views.clusterMonitoring.name")'></el-table-column>
        <!-- <el-table-column :label='$t("views.clusterMonitoring.label")'
                         width="175">
          <template slot-scope="item">
            <span class="tag"
                  :key="index"
                  v-for="(one,index) in item.row.tag">{{one}}</span>
          </template>
        </el-table-column> -->
        <el-table-column prop="cluster_ip"
                         show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.clusterIP")'></el-table-column>
        <el-table-column prop="internalEndpoint"
                         show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.internalEndpoint")'>
          <template slot-scope="item">
            <span v-for="(item1, index) in item.row.ports"
                  :key="index">
              {{item.row.name}}.{{item.row.namespace}}:{{item1.port}} {{item1.protocol}} <br/> {{item.row.name}}.{{item.row.namespace}}:{{item1.node_port}} {{item1.protocol}} <br/>
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="externalEndpoint"
                         show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.externalEndpoint")'>
          <template slot-scope="item">
            --
          </template>
        </el-table-column>
        <el-table-column prop="service_data_time"
                         width="180"
                         align="center"
                         :label='$t("views.clusterMonitoring.created")'>
          <template slot-scope="item">
            {{item.row.creation_timestamp }}
          </template>
        </el-table-column>
        <!--暂无数据情况-->
        <div slot="empty">
          <div class="views-empty">
            <span class="views-empty-table"></span>
            <p class="views-empty-text">{{$t('views.table.noData')}}</p>
          </div>
        </div>
      </el-table>
    </div>
    <div class="item">
      <p class="tit">{{$t("views.clusterMonitoring.containerGroup")}}</p>
      <el-table class="tab-content"
                :default-sort="{prop: 'pod_data_time', order: 'descending'}"
                :data="tableData5.msg"
                v-loading="tableData5.loading"
                border>
        <el-table-column prop="name"
                         show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.name")'></el-table-column>
        <el-table-column prop="host_ip"
                         show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.node")'></el-table-column>
        <el-table-column show-overflow-tooltip
                         :label='$t("views.clusterMonitoring.status")'>
          <template slot-scope="item">
            {{item.row.ready ? item.row.phase : item.row.state }}
          </template>
        </el-table-column>
        <el-table-column prop="restart_count"
                         width="100"
                         align="center"
                         :label='$t("views.clusterMonitoring.restarted")'>
        </el-table-column>
        <el-table-column prop="pod_data_time"
                         width="180"
                         align="center"
                         :label='$t("views.clusterMonitoring.created")'>
          <template slot-scope="item">
            {{item.row.creation_timestamp }}
          </template>
        </el-table-column>
        <!--暂无数据情况-->
        <div slot="empty">
          <div class="views-empty">
            <span class="views-empty-table"></span>
            <p class="views-empty-text">{{$t('views.table.noData')}}</p>
          </div>
        </div>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'namespacesDetail',
  data () {
    return {
      tableData1: {// 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        loading: true
      },
      tableData2: {// 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        loading: true
      },
      tableData3: {// 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        loading: true
      },
      tableData4: {// 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        loading: true
      },
      tableData5: {// 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        loading: true
      },
      duplicate: {
        option: {},
        loading: true,
        data: ''
      },
      deployment: {
        option: {},
        loading: true,
        data: ''
      },
      task: {
        option: {},
        loading: true,
        data: ''
      },
      services: {
        option: {},
        loading: true,
        data: ''
      },
      docker_list: {
        option: {},
        loading: true,
        data: ''
      },
      cname: 'charts'
    }
  },
  methods: {
    addHour (date) {
      let timeStamp = Date.parse(new Date(date))
      console.log(timeStamp)
      timeStamp += 8 * 3600 * 1000
      return this.timestampToTime(timeStamp)
    }
  },
  created () {
    this.$get('/cluster/namespacedetail', {name: this.$route.query.name}).then(data => {
      data.data.work_states = {
        'task': 0,
        'deployment': 0,
        'docker_list': 0,
        'duplicate': 0,
        'services': 0
      }
      data.data.work_states.docker_list = data.data.data.pods_used
      data.data.work_states.services = data.data.data.server_used
      data.data.work_states.task = data.data.data.task_used
      data.data.work_states.deployment = data.data.data.deploy_used
      data.data.work_states.duplicate = data.data.data.copy_used
      this.duplicate.data = data.data.work_states.duplicate
      this.duplicate.loading = false
      this.duplicate.option = {
        legend: {
          show: false
        },
        tooltip: {
          show: false
        },
        color: ['#f7a923', '#f2e0c2'],
        series: [
          {
            type: 'pie',
            radius: ['70%', '90%'],
            label: {
              show: false
            },
            data: [this.duplicate.data, 100 - this.duplicate.data]
          }
        ]
      }
      this.deployment.data = data.data.work_states.deployment
      this.deployment.loading = false
      this.deployment.option = {
        legend: {
          show: false
        },
        tooltip: {
          show: false
        },
        color: ['#f7a923', '#f2e0c2'],
        series: [
          {
            type: 'pie',
            radius: ['70%', '90%'],
            label: {
              show: false
            },
            data: [this.deployment.data, 100 - this.deployment.data]
          }
        ]
      }
      this.task.data = data.data.work_states.task
      this.task.loading = false
      this.task.option = {
        legend: {
          show: false
        },
        tooltip: {
          show: false
        },
        color: ['#f7a923', '#f2e0c2'],
        series: [
          {
            type: 'pie',
            radius: ['70%', '90%'],
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [this.task.data, 100 - this.task.data]
          }
        ]
      }
      this.services.data = data.data.work_states.services
      this.services.loading = false
      this.services.option = {
        legend: {
          show: false
        },
        tooltip: {
          show: false
        },
        color: ['#f7a923', '#f2e0c2'],
        series: [
          {
            type: 'pie',
            radius: ['70%', '90%'],
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [this.services.data, 100 - this.services.data]
          }
        ]
      }
      this.docker_list.data = data.data.work_states.docker_list
      this.docker_list.loading = false
      this.docker_list.option = {
        legend: {
          show: false
        },
        tooltip: {
          show: false
        },
        color: ['#f7a923', '#f2e0c2'],
        series: [
          {
            type: 'pie',
            radius: ['70%', '90%'],
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [this.docker_list.data, 100 - this.docker_list.data]
          }
        ]
      }
      this.tableData1.msg = []
      this.tableData1.loading = false
      this.tableData2.msg = []
      this.tableData2.loading = false
      this.tableData3.msg = []
      this.tableData3.loading = false
      this.tableData4.msg = data.data.data.services
      this.tableData4.loading = false
      this.tableData5.msg = data.data.data.pods
      console.log(this.tableData5.msg)
      this.tableData5.loading = false
    })
  }
}
</script>

/*
 * @Author: 少侠
 * @Date: 2019-01-03 15:29:04
 * @LastEditors: 少侠
 * @LastEditTime: 2019-08-07 17:54:15
 * @Description: 应用详情
 */

<template>
  <div class="case-detail">
    <el-row>
      <el-col :span="12">
        <div class="content-v">
          <span>应用名称：</span>
          <span>{{data.name}}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="content-v">
          <span>状态：</span>
          <span>{{data.type==1?'可用':'创建中'}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="content-v">
          <span>创建时间：</span>
          <span>{{data.created_at}}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="content-v">
          <span>应用分类：</span>
          <span>{{data.caseCategory ? data.caseCategory.name : ''}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="content-v">
          <span>关联镜像：</span>
          <span>{{data.imageRel ? data.imageRel.name : ''}}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="content-v">
          <span>数据和代码：</span>
          <span>{{data.code_data}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="content-v">
          <span>应用文档：</span>
          <span>{{data.document_link}}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="content-v"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="content-v">
          <span>文档密码：</span>
          <span>{{data.document_password}}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="content-v"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="content-v">
          <span>应用描述：</span>
          <pre>{{data.describe}}</pre>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="content-v"></div>
      </el-col>
    </el-row>
    <div style="padding-top:20px;"
         class="text-center">
      <el-button class="view-btn-big"
                 @click="mixinGoBack()">返回</el-button>
      <!-- <el-button class="view-btn-big">应用展示</el-button> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'caseDetail',
  data () {
    return {
      data: {case_type: ''}
    }
  },
  created () {
    this.$get('/casecenter/show', {case_center_id: this.$route.query.caseId}).then(res => {
      this.data = {...res.data}
    })
  }
}
</script>

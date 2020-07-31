<template>
    <el-container>
        <el-header class="header">
             <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="我的组件" name="first"></el-tab-pane>
                    <el-tab-pane label="全部组件" name="second">
                        <div class="zjfu clear">
                            <div class="zjname clear">
                                <span>组件名称</span>
                                <el-input v-model="input" placeholder="请输入组件名称:" clearable class="inpmc"></el-input>
                            </div>
                            <div class="zjid clear">
                                <span>组件id</span>
                                <el-input v-model="inputid" placeholder="请输入组件id" clearable class="inpmz"></el-input>
                            </div>
                            <div class="zjlx clear">
                                <span>组件类型</span>
                                <el-select v-model="value" placeholder="请选择组件类型" class="inpxz"> </el-select>
                            </div>
                        </div>
                   
                        <div class="anniu">
                            <el-button>查询</el-button>
                            <el-button>重置</el-button>
                        </div>
                        
                    <div class="biaoge">
                        <el-table
                        :data="tableData"
                        style="width: 100%"
                        >
                        <el-table-column
                           type="index"
                            label="组件id"
                            width="80"
                            height="30"
                            align="center">
                             <template slot-scope="scope">{{ scope.row.id }}</template>
                        </el-table-column>
                        <el-table-column
                       
                            label="组件名称"
                            width="150"
                             height="30"
                             align="center">
                             <template slot-scope="scope">{{ scope.row.name }}</template>
                        </el-table-column>
                        <el-table-column
                            label="缩略图" 
                            width="180"
                             height="30"
                             align="center">
                            <template slot-scope="scope">
                                <div class="box">
                                    
                                    <el-tooltip class="item" effect="light" placement="bottom">
                                         <div slot="content">
                                             <img :src="scope.row.img" alt="" class="pic2"></div>
                                        <el-button> 
                                            <img :src="scope.row.img" alt="" class="pic">
                                        </el-button>
                                    </el-tooltip>
                                </div>
                               
                            </template>
                            
                        </el-table-column>
                         <el-table-column 
                           
                            label="组件版本"
                             height="30"
                             width="150"
                             align="center">
                              <template slot-scope="scope">{{ scope.row.edition }}</template>
                        </el-table-column>
                         <el-table-column
                            
                            label="组件类型"
                             height="30"
                             width="150"
                             align="center">
                            <template slot-scope="scope">{{ scope.row.type }}</template>
                        </el-table-column>
                         <el-table-column
                        
                            label="状态"
                            width="150"
                             height="30"
                             align="center">
                            <template slot-scope="scope">{{ scope.row.status }}</template>
                        </el-table-column>
                         <el-table-column
                          
                            label="更新时间"
                            width="150"
                             height="30"
                             align="center">
                            <template slot-scope="scope">{{ scope.row.updateTime }}</template>
                        </el-table-column>
                         <el-table-column
                          
                            label="创建人"
                             height="30"
                             width="150"
                             align="center">
                            <template slot-scope="scope">{{ scope.row.author }}</template>
                        </el-table-column>
                        <el-table-column label="操作"
                        width="300"
                         height="30"
                         align="center">
                            <template slot-scope="scope">
                                <el-button
                                size="mini"
                                style="background:none;border:none;color:blue"
                                @click="handleEdit(scope.$index, scope.row)">查看
                                    <slot></slot>
                                </el-button>
                                <el-button
                                size="mini"
                                type="danger"
                                style="background:none;border:none;color:blue"
                                @click="handleDelete(scope.$index, scope.row)">上线</el-button>
                                <el-button
                                size="mini"
                                type="danger"
                                style="background:none;border:none;color:blue"
                                @click="handleDelete(scope.$index, scope.row)">下线</el-button>
                            </template>
                        </el-table-column>
                        </el-table>
                    </div>
                        
                    </el-tab-pane>
                 
            </el-tabs>
        </el-header>
        <el-main></el-main>
    </el-container>
</template>
<style scoped>

.clear ::after{content: "";display: block;height: 0;clear:both;visibility: hidden;}
.zjfu{margin-top: 30px;}
.zjname{float: left;width:450px;text-align: left;}
.zjname span{line-height: 40px;float: left;margin-right: 30px;}
.zjname .inpmc{width: 350px;float: left}
.zjid{float: left;width: 450px;text-align: left;margin-left: 50px;}
.zjid span{line-height: 40px;float: left;margin-right: 30px;}
.zjid .inpmz{width: 350px;float:left;}
.zjlx{float: left;width: 450px;text-align: left;margin-left: 50px;}
.zjlx span{line-height: 40px;float: left;margin-right: 30px;}
.zjlx .inpxz{width:350px;float: left;;}
.anniu{width: 300px;padding-top: 30px;float: right;}
.biaoge{padding-top: 120px;}
.pic{width: 60px;height: 50px;position: absolute;top: 0px;left: 0;}
.pic2{width: 150px;height: 120px;}
.item{width: 60px;height: 50px;position: relative;}
.zjbb{text-align: center;}
</style>
<script>
import details from './details'
export default {
    components:{details},
    data() {
      return {
        activeName: 'second',
        input:'',
        inputid:'',
        value:'',
        tableData:[
        {
            id:'1',
            name:'热点政策',
            img:require('../assets/img/1.jpg'),
            edition:'5',
            type:'平台组件',
            status:'已上线',
            updateTime:'17:00',
            author:'c端管理员',
            

        },
          {
            id:'2',
            name:'单行导航',
            img:require('../assets/img/2.jpg'),
            edition:'27',
            type:'平台组件',
            status:'已上线',
            updateTime:'17:00',
            author:'c端管理员',
            },
            {
            id:'3',
            name:'多列图片',
            img:require('../assets/img/3.jpg'),
            edition:'25',
            type:'平台组件',
            status:'已上线',
            updateTime:'17:00',
            author:'c端管理员',
            },{
            id:'4',
            name:'文字列表',
            img:require('../assets/img/4.jpg'),
            edition:'25',
            type:'平台组件',
            status:'已上线',
            updateTime:'17:00',
            author:'c端管理员',
            },{
            id:'5',
            name:'站点切换',
            img:require('../assets/img/5.jpg'),
            edition:'11',
            type:'平台组件',
            status:'已上线',
            updateTime:'17:00',
            author:'c端管理员',
            },{
            id:'6',
            name:'卡片',
            img:require('../assets/img/6.jpg'),
            edition:'26',
            type:'平台组件',
            status:'已上线',
            updateTime:'17:00',
            author:'c端管理员',
            },{
            id:'7',
            name:'页脚',
            img:require('../assets/img/7.jpg'),
            edition:'11',
            type:'平台组件',
            status:'已上线',
            updateTime:'17:00',
            author:'c端管理员',
            },{
            id:'8',
            name:'办事网点',
            img:require('../assets/img/8.jpg'),
            edition:'19',
            type:'平台组件',
            status:'已上线',
            updateTime:'17:00',
            author:'c端管理员',
            },{
            id:'9',
            name:'页头',
            img:require('../assets/img/9.jpg'),
            edition:'27',
            type:'平台组件',
            status:'已上线',
            updateTime:'17:00',
            author:'c端管理员',
            },{
            id:'10',
            name:'页头(高度自适应)',
            img:require('../assets/img/10.jpg'),
            edition:'3',
            type:'平台组件',
            status:'已上线',
            updateTime:'17:00',
            author:'c端管理员',
            }
        ]
      }
    },
     methods: {
      handleClick(tab, event) {
     
      },
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
     
    },
    
}
</script>
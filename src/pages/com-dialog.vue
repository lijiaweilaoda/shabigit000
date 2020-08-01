<template>
     <el-dialog
    title="内容"
    :visible.sync="dialogVisible"
    width="50%"
    height="50%"
    :before-close="handleClose">
        <el-form>
            <el-form-item label="组件名称">
                <el-input v-model="dialogInfo.name">
                                             
                </el-input>
            </el-form-item>
             <el-form-item label="组件版本">
                 <el-input v-model="dialogInfo.edition">
                       
                 </el-input>
             </el-form-item>
            <el-form-item label="组件类型">
                <el-input v-model="dialogInfo.type">
                     
                </el-input>
            </el-form-item>
            <el-form-item label="更新时间">
                <el-input v-model="dialogInfo.updateTime">
                     
                </el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="handleClose">确 定</el-button>
        </span>
    </el-dialog>

</template>
<script>
export default {
    props:{
        dialogVisible: {
            type: Boolean,
            default: false
        },
        dialogInfo:{
            type:Object,
            default:{}
        }
        
    },
    name: "componentDialog",
    watch: {

    dialogVisible: function(newVal, oldVal) {
      if (newVal) {

      }
    }
  },
    methods:{
        handleClose() {
            this.$emit("update:dialogVisible", false);
        },

    }
}

</script>
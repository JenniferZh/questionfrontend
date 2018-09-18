<template>
    <el-form :model="addForm" :rules="rules" ref="addForm" label-width="200px">
        <el-form-item label="本领域" prop="scope_name_1">
            <el-select v-model="addForm.scope_name_1" disabled></el-select>
        </el-form-item>
        <el-form-item label="本领域对象名称" prop="element_name_1">
            <el-input v-model="addForm.element_name_1"></el-input>
        </el-form-item>
        <el-form-item label="关联领域" prop="scope_name_2">
            <el-select v-model="addForm.scope_name_2">
                <el-option v-for="item in scopesExcept" :label="item.name" :value="item.name" :key="item.name"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="关联领域对象名称" prop="element_name_2">
            <el-input v-model="addForm.element_name_2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('addForm')">提交</el-button>
          <el-button @click="resetForm('addForm')">重置</el-button>
        </el-form-item>
    </el-form>

</template>

<script>
export default {
    name: "LinkForm",
    props: {
        scopes: Array,
        addForm: Object,
    },
    data() {
        return {
            rules: {
                scope_name_2: [{ required: true, message: '请填写领域名', trigger: 'change' }],
                element_name_1: [{ required: true, message: '请填写构件名称', trigger: 'blur' }],
                element_name_2: [{ required: true, message: '请填写构件名称', trigger: 'blur' }],
            },
        }
    },
    computed: {
        scopesExcept: function() {
            return this.scopes.filter(scope => scope.name !== this.addForm.scope_name_1);
        }
    },
    methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$emit("linkCreated", this.addForm);
            } else {
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
    }
}
</script>

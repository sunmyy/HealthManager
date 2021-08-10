<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 基础表格
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button
                        type="primary"
                        icon="el-icon-delete"
                        class="handle-del mr10"
                        @click="delAllSelection"
                >批量删除</el-button>
                <el-input v-model="query.studentID" placeholder="学号" class="handle-select mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>

            <el-table
                    :data="tableData"
                    border
                    class="table"
                    ref="multipleTable"
                    header-cell-class-name="table-header"
                    @selection-change="handleSelectionChange"
            >
<!--                /*-->
<!--                * 序号	学号	姓名	班级名称	名族代码	性别	出生日期	家庭地址	备注信息-->
<!--                * */-->
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="id" label="学号" width="100" align="center"></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="class" label="班级"></el-table-column>
                <el-table-column prop="nationality" label="民族"></el-table-column>
                <el-table-column prop="sex" label="性别"></el-table-column>

                <el-table-column label="操作" width="180" align="center">
                    <template #default="scope">
                        <el-button
                                type="text"
                                icon="el-icon-edit"
                                @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                        <el-button
                                type="text"
                                icon="el-icon-delete"
                                class="red"
                                @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                        background
                        layout="total, prev, pager, next"
                        :current-page="query.pageIndex"
                        :page-size="query.pageSize"
                        :total="pageTotal"
                        @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" v-model="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="editVisible = false">取 消</el-button>
                    <el-button type="primary" @click="saveEdit">确 定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
    // import {fetchData} from "../../api";

    export default {
        name: "students-abnormity",
        data() {
            return {
                query: {
                    studentID: "",
                    name: "",
                    pageIndex: 1,
                    pageSize: 10
                },
                tableData: [
                    /*
                    * 序号	学号	姓名	班级名称	名族代码	性别	出生日期	家庭地址	备注信息
                    * */
                    {
                        id: '121212',
                        name: '巴拉啦',
                        class: '青铜',
                        nationality: '汉',
                        sex: '男',
                        borth: '1234-5-6',
                        address: 'sjokhjiuh',
                        comment: '没的说'
                    },

                    {
                        id: '121212',
                        name: '哭唧唧',
                        class: '白银',
                        nationality: '汉',
                        sex: '男',
                        borth: '1234-5-6',
                        address: 'sjokhjiuh',
                        comment: '上去就是一脚'
                    },

                    {
                        id: '121212',
                        name: '黄澄澄',
                        class: '黄巾',
                        nationality: '汉',
                        sex: '男',
                        borth: '1234-5-6',
                        address: 'sjokhjiuh',
                        comment: '没的说'
                    },
                ],
                multipleSelection: [],
                delList: [],
                editVisible: false,
                pageTotal: 0,
                form: {},
                idx: -1,
                id: -1
            };
        },
        created() {
            this.getData();
        },
        methods: {
            // 获取 easy-mock 的模拟数据
            getData() {

                this.pageTotal=this.tableData.length;
                // fetchData(this.query).then(res => {
                //     console.log(res);
                //     this.tableData = res.list;
                //     this.pageTotal = res.pageTotal || 50;
                // });
            },
            // 触发搜索按钮
            handleSearch() {
                this.$set(this.query, "pageIndex", 1);
                // this.getData();
            },
            // 删除操作
            handleDelete(index) {
                // 二次确认删除
                this.$confirm("确定要删除吗？", "提示", {
                    type: "warning"
                })
                    .then(() => {
                        this.$message.success("删除成功");
                        this.tableData.splice(index, 1);
                    })
                    .catch(() => {});
            },
            // 多选操作
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            delAllSelection() {
                const length = this.multipleSelection.length;
                let str = "";
                this.delList = this.delList.concat(this.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += this.multipleSelection[i].name + " ";
                }
                this.$message.error(`删除了${str}`);
                this.multipleSelection = [];
            },
            // 编辑操作
            handleEdit(index, row) {
                // index 是行编号 row 是 行数据
                console.log('编辑操作',index,row);
                this.idx = index;
                this.form = JSON.parse(JSON.stringify(row));  // 行数据 传递副本
                this.editVisible = true;
            },
            // 保存编辑
            saveEdit() {
                this.editVisible = false;
                this.$message.success(`修改第 ${this.idx + 1} 行成功`);
                // console.log(this);
                this.tableData[this.idx]=this.form;
                // this.$set(this.tableData, this.idx, this.form); // 直接修改数据
            },
            // 分页导航
            handlePageChange(val) {
                this.$set(this.query, "pageIndex", val);
                this.getData();
            }
        }
    }
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .table {
        width: 100%;
        font-size: 14px;
    }
    .red {
        color: #ff0000;
    }
    .mr10 {
        margin-right: 10px;
    }
    .table-td-thumb {
        display: block;
        margin: auto;
        width: 40px;
        height: 40px;
    }
</style>

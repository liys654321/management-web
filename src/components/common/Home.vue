<template>

    <div class="main">


        <el-container>
            <el-header>系统管理</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-row class="tac">
                        <el-col :span="12">
                            <h5>默认颜色</h5>
                            <el-menu
                                    default-active="2"
                                    class="el-menu-vertical-demo"
                                    @open="handleOpen"
                                    @close="handleClose">
                                <el-submenu index="1">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>导航一</span>
                                    </template>
                                    <el-menu-item-group>
                                        <template slot="title">分组一</template>
                                        <el-menu-item index="1-1">选项1</el-menu-item>
                                        <el-menu-item index="1-2">选项2</el-menu-item>
                                    </el-menu-item-group>
                                    <el-menu-item-group title="分组2">
                                        <el-menu-item index="1-3">选项3</el-menu-item>
                                    </el-menu-item-group>
                                    <el-submenu index="1-4">
                                        <template slot="title">选项4</template>
                                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                                    </el-submenu>
                                </el-submenu>
                            </el-menu>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-container>
                    <el-main></el-main>
                </el-container>
            </el-container>
            <el-footer></el-footer>
        </el-container>

    </div>

</template>
<script>

		export default {
				data() {

				},
                methods: {
                        handleOpen(key, keyPath) {
                                console.log(key, keyPath);
                        },
                        handleClose(key, keyPath) {
                                console.log(key, keyPath);
                        }
                }
		};
</script>
<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
       /* background-color: #D3DCE6;
        color: #333;*/
        text-align: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        height: 100%;
    }
    .main {
        width: 100%;
        height: 100%;
    }

    .el-container {
        height: 100%;
    }



</style>

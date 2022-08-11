<template>

    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
        <H2 style="font-weight: bold;margin-bottom: 20px;">信息月报</H2>
        <div>
            <a-tabs type="card" default-active-key="1">
                <a-tab-pane key="1" tab="基本信息">
                    <a-form :form="form" class="AppForm">
                        <a-row>
                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }">
                                <a-form-item
                                        label="流水号"
                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                        :wrapperCol="{lg:{span: 20},sm:{span: 16}}"
                                >
                                    <span>GG202200001</span>
                                </a-form-item>
                            </a-col>
                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                <a-form-item
                                        label="报送日期"
                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                        :wrapperCol="{lg:{span: 20},sm:{span: 16}}"
                                >
                                    <span>2022-08-10</span>
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row>
                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                <a-form-item
                                        label="填录用户"
                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                        :wrapperCol="{lg:{span: 20},sm:{span: 16}}"
                                >
                                    <span>电科院</span>
                                </a-form-item>
                            </a-col>
                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                <a-form-item
                                        label="填录日期"
                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                        :wrapperCol="{lg:{span: 20},sm:{span: 16}}"
                                >
                                    <span>2022-08-10</span>

                                </a-form-item>
                            </a-col>
                        </a-row>

                        <a-row >
                            <a-col :sm="{ span: 24 }" :lg="{ span: 16 }" >
                                <a-form-item
                                        label="填报单位"
                                        :labelCol= "{lg:{span: 2},sm:{span: 8}}"
                                        :wrapperCol="{lg:{span: 22},sm:{span: 16}}"
                                >
                                    <span>浙江能源六横发电有限公司（六横厂）</span>
                                </a-form-item>
                            </a-col>
                        </a-row>

                        <a-row>
                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                <a-form-item
                                        label="报告年月"
                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                        :wrapperCol="{lg:{span: 20},sm:{span: 16}}"
                                >
                                    <a-month-picker v-decorator="['month-picker', config]" />
                                </a-form-item>
                            </a-col>
                        </a-row>


                        <a-row>
                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                <a-form-item
                                        label="月报类别"
                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                        :wrapperCol="{lg:{span: 20},sm:{span: 16}}"
                                >
                                    <a-select>
                                        <a-select-option value="4">技术监督月报</a-select-option>
                                        <a-select-option value="5">安全隐患排查月报</a-select-option>
                                    </a-select>
                                </a-form-item>
                            </a-col>
                        </a-row>

                        <a-row>
                            <a-col :sm="{ span: 24 }" :lg="{ span: 16 }" >
                                <a-form-item
                                        label="备注"
                                        :labelCol= "{lg:{span: 2},sm:{span: 8}}"
                                        :wrapperCol="{lg:{span: 16},sm:{span: 16}}"
                                >
                                    <a-textarea rows="2" />
                                </a-form-item>
                            </a-col>
                        </a-row>

                        <a-row>
                            <a-col :sm="{ span: 24 }" :lg="{ span: 16 }" >
                                <a-form-item extra="longgggggggggggggggggggggggggggggggggg"
                                             label="附件管理"
                                             :labelCol= "{lg:{span: 2},sm:{span: 8}}"
                                             :wrapperCol="{lg:{span: 16},sm:{span: 16}}"
                                >
                                    <a-upload
                                            v-decorator="[
                                                                  'upload',
                                                                  {
                                                                    valuePropName: 'fileList',
                                                                    getValueFromEvent: normFile,
                                                                  },
                                                                ]"
                                            name="logo"
                                            action="/upload.do"
                                            list-type=""
                                    >
                                        <a-button> <a-icon type="upload" /> 点击上传 </a-button>
                                    </a-upload>
                                </a-form-item>
                            </a-col>
                        </a-row>


                    </a-form>
                </a-tab-pane>
                <a-tab-pane key="2" tab="所有意见" force-render>
                    Content of Tab Pane 2
                </a-tab-pane>
                <a-tab-pane key="3" tab="流程跟踪">
                    Content of Tab Pane 3
                </a-tab-pane>
            </a-tabs>
        </div>




        <footer-tool-bar>
            <a-space class="operator" >
                <a-dropdown>
                    <a-menu @click="handleMenuClick" slot="overlay">
                        <a-menu-item key="delete">删除</a-menu-item>
                        <a-menu-item key="audit">审批</a-menu-item>
                    </a-menu>
                    <a-button>管理员<a-icon type="left" /></a-button>
                </a-dropdown>
                <a-button @click="submit" type="primary"><a-icon type="right-circle"  style="margin-right: -6px;" />提交</a-button>
                <a-button @click="delDoc" type="primary"><a-icon type="save"  style="margin-right: -6px;" />保存</a-button>
                <a-button @click="addNew" type="danger"><a-icon type="logout" style="margin-right: -6px;" />退出</a-button>
            </a-space>
        </footer-tool-bar>

    </a-card>




</template>

<script>
    import FooterToolBar from '@/components/tool/FooterToolBar'
    export default {
        name: "ReportMonth",
        components: {FooterToolBar}
    }
</script>

<style>

    .ant-form-item{
        margin-bottom: 12px;
    }

</style>

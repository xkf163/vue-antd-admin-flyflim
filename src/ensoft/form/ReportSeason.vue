<template>

    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">

                <H2 style="font-weight: bold;margin-bottom: 20px;">信息季报</H2>
                <div>
                    <a-tabs type="card" default-active-key="1">
                        <a-tab-pane key="1" tab="基本信息">
                            <a-row :gutter="24">
                                <a-col :span="16">
                                    <a-form :form="form" class="AppForm">
                                        <a-row>
                                            <a-col :span="12">
                                                <a-form-item
                                                        label="流水号"
                                                        :labelCol="{span: 4}"
                                                        :wrapperCol="{span: 20}"
                                                >
                                                    <span>GG202200001</span>
                                                </a-form-item>
                                            </a-col>
                                        </a-row>
                                        <a-row>
                                            <a-col :span="12" >
                                                    <a-form-item
                                                            label="填录单位"
                                                            :labelCol="{span: 4}"
                                                            :wrapperCol="{span: 20}"
                                                    >
                                                        <span>电科院</span>
                                                    </a-form-item>
                                            </a-col>
                                            <a-col :span="12" >
                                                <a-form-item
                                                        label="填录日期"
                                                        :labelCol="{span: 4}"
                                                        :wrapperCol="{span: 20}"
                                                >
                                                    <span>2022-08-10</span>

                                                </a-form-item>
                                            </a-col>
                                        </a-row>
                                        <a-row >
                                            <a-col :span="24" >
                                                <a-form-item
                                                        label="整改单位"
                                                        :labelCol="{span: 2}"
                                                        :wrapperCol="{span: 21}"
                                                >
                                                    <span>浙江能源六横发电有限公司（六横厂）</span>
                                                </a-form-item>
                                            </a-col>
                                        </a-row>
                                        <a-row>
                                            <a-col :span="12" >
                                                <a-form-item
                                                        label="检查类型"
                                                        :labelCol="{span: 4}"
                                                        :wrapperCol="{span: 12}"
                                                >
                                                    <a-select>
                                                        <a-select-option value="4">技术监督</a-select-option>
                                                        <a-select-option value="5">监管机构检查</a-select-option>
                                                    </a-select>
                                                </a-form-item>
                                            </a-col>
                                            <a-col :span="12" >
                                                <a-form-item
                                                        label="来源类别"
                                                        :labelCol="{span: 4}"
                                                        :wrapperCol="{span: 12}"
                                                >
                                                    <a-select>
                                                        <a-select-option value="4">现场检查</a-select-option>
                                                        <a-select-option value="5">企业自查</a-select-option>
                                                    </a-select>

                                                </a-form-item>
                                            </a-col>
                                        </a-row>
                                        <a-row>
                                            <a-col :span="24" >
                                                <a-form-item
                                                        label="问题描述"
                                                        :labelCol="{span: 2}"
                                                        :wrapperCol="{span: 20}"
                                                >
                                                    <a-textarea rows="4" :placeholder="$t('describeInput')"/>
                                                </a-form-item>
                                            </a-col>
                                        </a-row>
                                    </a-form>
                                </a-col>
                                <a-col :span="8"></a-col>
                            </a-row>
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
        name: "ReportSeason",
        components: {FooterToolBar}
    }
</script>

<style lang="less" scoped>
    :global{
        .ant-form-item{
            margin-bottom: 12px;
        }
    }
</style>

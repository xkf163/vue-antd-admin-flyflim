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
                    <a-row>
                        <a-transfer
                                class="tree-transfer"
                                :data-source="dataSource"
                                :target-keys="targetKeys"
                                :render="item => item.title"
                                :show-select-all="true"
                                @change="onChange"
                                @selectChange = "onSelectChange"
                                :showSearch="true"
                                :titles="['A','B']"
                        >
                            <template
                                    slot="children"
                                    slot-scope="{ props: { direction, selectedKeys }, on: { itemSelect } }"
                            >
                                <a-tree
                                        v-if="direction === 'left'"
                                        blockNode
                                        checkable
                                        checkStrictly
                                        defaultExpandAll
                                        :checkedKeys="[...selectedKeys, ...targetKeys]"
                                        :treeData="treeData"
                                        @check="
                                                    (_, props) => {
                                                      onChecked(_, props, [...selectedKeys, ...targetKeys], itemSelect);
                                                    }
                                             "
                                        @select="
                                                (_, props) => {
                                                  onChecked(_, props, [...selectedKeys, ...targetKeys], itemSelect);
                                                }
                                             "
                                />
                            </template>
                        </a-transfer>

                    </a-row>
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


    const treeData = [
        {
            key: '000000',
            title: '国家能源局浙江监管办公室',
            children: [
                { key: 'zhejiangban', title: '浙江办' },
                {
                    key: '010000',
                    title: '浙江省能源集团有限公司',
                    children: [
                        { key: '010100', title: '浙江浙能北仑发电有限公司', children: [{ key: 'beilunchang', title: '北仑厂' }] },
                        { key: '010300', title: '浙江浙能嘉兴发电有限公司', children: [{ key: 'jiaxingchang', title: '嘉兴厂' }]  },
                        { key: '010500', title: '浙江浙能兰溪发电有限责任公司', children: [{ key: 'lanxichang', title: '兰溪厂' }]  },
                        { key: '010700', title: '浙江浙能乐清发电有限责任公司', children: [{ key: 'yueqingchang', title: '乐清厂' }]  },
                    ],
                },
                {
                    key: '990000',
                    title: '浙江省电力有限公司电力科学研究院',
                    children: [
                        { key: 'jdyrg', title: '电科院监督员（热工）' },
                        { key: 'jdygl', title: '电科院监督员（锅炉）' }
                    ],
                },
            ],
        }
    ];

    const transferDataSource = [];
    function flatten(list = []) {
        list.forEach(item => {
            transferDataSource.push(item);
            flatten(item.children);
        });
    }
    flatten(JSON.parse(JSON.stringify(treeData)));

    function isChecked(selectedKeys, eventKey) {
        return selectedKeys.indexOf(eventKey) !== -1;
    }

    function handleTreeData(data, targetKeys = []) {
        data.forEach(item => {
            item['disabled'] = targetKeys.includes(item.key);
            if (item.children) {
                handleTreeData(item.children, targetKeys);
            }
        });
        return data;
    }

    export default {
        name: "ReportMonth",
        components: {FooterToolBar},
        data() {
            return {
                targetKeys: [],
                dataSource: transferDataSource,
            };
        },
        computed: {
            treeData() {
                return handleTreeData(treeData, this.targetKeys);
            },
        },
        methods: {
            onChange(targetKeys, direction, moveKeys) {
                console.log('Target Keys:', targetKeys);
                console.log('direction:', direction);
                console.log('moveKeys:', moveKeys);
                this.targetKeys = targetKeys;
            },
            onChecked(_, e, checkedKeys, itemSelect) {
                console.log("onChecked")
                const { eventKey } = e.node;
                itemSelect(eventKey, !isChecked(checkedKeys, eventKey));
            },
            onSelectChange(sourceSelectedKeys, targetSelectedKeys){
                console.log(sourceSelectedKeys)
                console.log(targetSelectedKeys)
            }
        },
    }
</script>

<style>

    .ant-form-item{
        margin-bottom: 12px;
    }
    .tree-transfer .ant-transfer-list:first-child {
        width: 50%;
        flex: none;
    }

</style>

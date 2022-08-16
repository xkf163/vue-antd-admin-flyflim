<template>
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
                <H2 style="font-weight: bold;margin-bottom: 20px;">问题整改</H2>
                <div>
                    <a-tabs type="card" default-active-key="1">
                        <a-tab-pane key="1" tab="基本信息">
                            <a-form class="AppForm">
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
                                                        label="整改单位"
                                                        :labelCol= "{lg:{span: 2},sm:{span: 8}}"
                                                        :wrapperCol="{lg:{span: 16},sm:{span: 16}}"
                                                >
                                                    <span>浙江能源六横发电有限公司（六横厂）</span>
                                                </a-form-item>
                                            </a-col>
                                        </a-row>

                                        <a-row>
                                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                                <a-form-item
                                                        label="检查类型"
                                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                                        :wrapperCol="{lg:{span: 8},sm:{span: 16}}"
                                                >
                                                    <a-select>
                                                        <a-select-option value="4">技术监督</a-select-option>
                                                        <a-select-option value="5">监管机构检查</a-select-option>
                                                    </a-select>
                                                </a-form-item>
                                            </a-col>
                                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                                <a-form-item
                                                        label="来源类别"
                                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                                        :wrapperCol="{lg:{span: 8},sm:{span: 16}}"
                                                >
                                                    <a-select>
                                                        <a-select-option value="4">现场检查</a-select-option>
                                                        <a-select-option value="5">企业自查</a-select-option>
                                                    </a-select>

                                                </a-form-item>
                                            </a-col>
                                        </a-row>
                                        <a-row>
                                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                                <a-form-item
                                                        label="检查名称"
                                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                                        :wrapperCol="{lg:{span: 20},sm:{span: 16}}"
                                                >
                                                    <a-input></a-input>
                                                </a-form-item>
                                            </a-col>
                                        </a-row>
                                        <a-row>
                                            <a-col :sm="{ span: 24 }" :lg="{ span: 16 }" >
                                                <a-form-item
                                                        label="问题描述"
                                                        :labelCol= "{lg:{span: 2},sm:{span: 8}}"
                                                        :wrapperCol="{lg:{span: 16},sm:{span: 16}}"
                                                >
                                                    <a-textarea rows="2" />
                                                </a-form-item>
                                            </a-col>
                                        </a-row>

                                        <a-row>
                                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                                <a-form-item
                                                        label="问题类型"
                                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                                        :wrapperCol="{lg:{span: 8},sm:{span: 16}}"
                                                >
                                                    <a-select>
                                                        <a-select-option value="4">安全管理</a-select-option>
                                                        <a-select-option value="5">人身安全</a-select-option>
                                                        <a-select-option value="6">设备安全</a-select-option>
                                                    </a-select>
                                                </a-form-item>
                                            </a-col>
                                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                                <a-form-item
                                                        label="专业"
                                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                                        :wrapperCol="{lg:{span: 8},sm:{span: 16}}"
                                                >
                                                    <a-select>
                                                        <a-select-option value="4">热工</a-select-option>
                                                        <a-select-option value="5">水机</a-select-option>
                                                    </a-select>

                                                </a-form-item>
                                            </a-col>
                                        </a-row>

                                        <a-row>
                                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                                <a-form-item
                                                        label="发现时间"
                                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                                        :wrapperCol="{lg:{span: 12},sm:{span: 16}}"
                                                >
                                                    <a-date-picker />
                                                </a-form-item>
                                            </a-col>
                                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                                <a-form-item
                                                        label="整改期限"
                                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                                        :wrapperCol="{lg:{span: 12},sm:{span: 16}}"
                                                >
                                                    <a-date-picker />
                                                </a-form-item>
                                            </a-col>
                                        </a-row>

                                        <a-row>
                                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                                <a-form-item
                                                        label="责任人"
                                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                                        :wrapperCol="{lg:{span: 12},sm:{span: 16}}"
                                                >
                                                    <a-input placeholder="input placeholder" />
                                                </a-form-item>
                                            </a-col>
                                            <a-col :sm="{ span: 12 }" :lg="{ span: 8 }" >
                                                <a-form-item
                                                        label="是否涉网问题"
                                                        :labelCol= "{lg:{span: 4},sm:{span: 8}}"
                                                        :wrapperCol="{lg:{span: 12},sm:{span: 16}}"
                                                >
                                                    <a-radio-group v-decorator="['radio-group']">
                                                        <a-radio value="a">
                                                            是
                                                        </a-radio>
                                                        <a-radio value="b">
                                                            否
                                                        </a-radio>
                                                    </a-radio-group>
                                                </a-form-item>
                                            </a-col>
                                        </a-row>
                                        <a-row>
                                            <a-col :sm="{ span: 24 }" :lg="{ span: 16 }" >
                                                <a-form-item
                                                        label="整改措施"
                                                        :labelCol= "{lg:{span: 2},sm:{span: 8}}"
                                                        :wrapperCol="{lg:{span: 16},sm:{span: 16}}"
                                                >
                                                    <a-textarea rows="2" />
                                                </a-form-item>
                                            </a-col>
                                        </a-row>




                            </a-form>
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="所有意见" force-render>

                            <div class="tree-contanier">
                                <div class="left-content">
                                    <a-tree
                                            v-model="checkedKeys"
                                            checkable
                                            :auto-expand-parent="autoExpandParent"
                                            :selected-keys="selectedKeys"
                                            :tree-data="treeData"
                                            @expand="onExpand"
                                            @check="onCheck"
                                            showLine
                                            defaultExpandAll
                                    />
                                </div>
                                <div class="right-content">
                                    <span>已选择</span>
                                    <ul>
                                        <li v-for="(item,index) in selectedKeys" :key="item.key" >
                                            {{index}}：{{item.key}}
                                            <span class="remove" title="删除" @click="removeNode(item.key,index)"><a-icon type="rest" /></span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="right-content">
                                    <span>已选</span>
                                    <ul>
                                        <li v-for="(item,index) in checkedKeys" :key="item.key" >
                                            {{index}}：{{item}}
                                            <span class="remove" title="删除" @click="removeNode({index})"><a-icon type="rest" /></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

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
                <a-button @click="submiter" type="primary"><a-icon type="right-circle"  style="margin-right: -6px;" />提交</a-button>
                <a-button @click="saver" type="primary"><a-icon type="save"  style="margin-right: -6px;" />保存</a-button>
                <a-button @click="exiter" type="danger"><a-icon type="logout" style="margin-right: -6px;" />退出</a-button>
            </a-space>
        </footer-tool-bar>
    </a-card>
</template>

<script>
    import FooterToolBar from '@/components/tool/FooterToolBar'
    const treeData = [
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
    ];

    export default {
        name: "ReportSeason",
        components: {FooterToolBar},
        data() {
            return {
                autoExpandParent: true,
                checkedKeys: [],
                selectedKeys: [],
                expandedKeys:['010000'],
                treeData,
                tags: [], //
            };
        },
        watch: {
            // checkedKeys(val) {
            //     console.log('onCheck', val);
            // },
        },
        mounted() {
            // 初始化获取选中数据的title
            this.getTagsData(this.treeData, this.tags)
        },
        methods: {
            submiter(){},
            exiter(){},
            saver(){},
            handleMenuClick(){},
            // 菜单删除事件
            handleClose(key, index) {
                this.tags.splice(index, 1)
                let result=[]
                this.getParentId(key,this.treeData,result)
                // 删除子级需获取父级id一同删除 否则父级选中状态依旧存在
                result.map(item=>{
                    this.checkedKeys=this.checkedKeys.filter(its=>its!=item)
                })
            },
            // 初始化数据处理 通过key 获取title
            getTagsData(data, tags) {
                data.map((item) => {
                    this.checkedKeys.map((its) => {
                        if (item.key === its) {
                            tags.push({
                                key: item.key,
                                title: item.title,
                                isShow: item.children && item.children.length > 0 ? false : true,
                            })
                        }
                    })
                    if (item.children) {
                        this.getTagsData(item.children, tags)
                    }
                })
            },

            onExpand(expandedKeys) {
                console.log('onExpand', expandedKeys);
                // if not set autoExpandParent to false, if children expanded, parent can not collapse.
                // or, you can remove all expanded children keys.
                this.expandedKeys = expandedKeys;
                this.autoExpandParent = false;
            },
            // 复选框事件
            onCheck(checkedKeys, e) {
                console.log(e && e.checkedNodes && e.checkedNodes.length)
                if (e && e.checkedNodes && e.checkedNodes.length) {
                    // console.log(1, val, data)
                    this.checkedKeys  = checkedKeys
                    this.selectedKeys = []
                    e.checkedNodes.map((item) => {
                        this.selectedKeys.push({
                            key: item.key
                        })
                    })
                } else {
                    this.selectedKeys = []
                    this.checkedKeys = []
                }

                console.log("checkedKeys   :"+this.checkedKeys)
                console.log("selectedKeys   :"+this.selectedKeys[0])
                console.log(this.selectedKeys)
            },

            // 删除节点
            removeNode(key,i){
                console.log(key +" - "+ i)
                this.selectedKeys.splice(i, 1)
                this.checkedKeys= this.selectedKeys.join(",")
            },

            // 获取父级id
            getParentId(id, list = [], result = []) {
                for (let i = 0; i < list.length; i += 1) {
                    const item = list[i]
                    if (item.key === id) {
                        result.push(item.key)
                        if (result.length === 1) return result
                        return true
                    }
                    // 如果存在下级节点，则继续遍历
                    if (item.children) {
                        // 预设本次是需要的节点并加入到最终结果result中
                        result.push(item.key)
                        const find = this.getParentId(id, item.children, result)
                        // 如果不是false则表示找到了，直接return，结束递归
                        if (find) {
                            return result
                        }
                        // 到这里，意味着本次并不是需要的节点，则在result中移除
                        result.pop()
                    }
                }
                // 如果都走到这儿了，也就是本轮遍历children没找到，将此次标记为false
                return false
            },
            onSelect(selectedKeys, info) {
                console.log('onSelect', info);
                this.selectedKeys = selectedKeys;
            },
        },
    }
</script>

<style scoped lang="less">
        .ant-form-item{
            margin-bottom: 12px;
        }
        .tree-contanier {
            display: flex;
            .site-tree-search-value {
                color: #f50;
            }
            .left-content {
                flex: 1;
                padding-right: 40px;
            }
            .right-content {
                flex: 1;
                padding-left: 40px;
                .select-item {
                    padding: 10px 0;
                    .remove {
                        margin-left: 30px;
                        &:hover {
                            color: #1890ff;
                        }
                        cursor: pointer;
                    }
                }
            }
        }
</style>

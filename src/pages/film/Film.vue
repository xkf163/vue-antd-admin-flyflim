<template>
    <a-row type="flex">
        <a-col :span="24" v-if="advanced" style="background: white;padding:30px 16px 16px 16px; border-bottom: 1px solid #d9d9d9">
            <film-searcher @advSearch="onSearch" @advReset="onReset"/>
        </a-col>
        <a-col :span="24" >
            <div class="table">
                <advance-table
                        :columns="columns"
                        :data-source="dataSource"
                        :loading="loading"
                        rowKey="id"
                        @search="onSearch"
                        @refresh="onRefresh"
                        @clear="onClear"
                        :format-conditions="true"
                        @reset="onReset"
                        @dblclick="dblclick"
                        :pagination="{
                            current: page,
                            pageSize: pageSize,
                            total: total,
                            showSizeChanger: true,
                            showLessItems: true,
                            showQuickJumper: true,
                            showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条，总计 ${total} 条`,
                            onChange: onPageChange,
                            onShowSizeChange: onSizeChange,
                         }"
                        @selectedRowChange="onSelectChange"
                        :selectedRows.sync="selectedRows"
                >
                    <template slot="title">
                        <a-space class="operator" >
                            <a-button @click="addNew" type="primary"><a-icon type="plus" style="margin-right: -6px;" />新建</a-button>
                            <a-button @click="delDoc" type="danger"><a-icon type="minus"  style="margin-right: -6px;" />删除</a-button>
                            <a-button @click="searcher"><a-icon :type="advanced ? 'up' : 'down'" style="margin-right: -6px;" />自定义查询</a-button>
                            <a-dropdown>
                                <a-menu @click="handleMenuClick" slot="overlay">
                                    <a-menu-item key="delete">删除</a-menu-item>
                                    <a-menu-item key="audit">审批</a-menu-item>
                                </a-menu>
                                <a-button>其他<a-icon type="left" /></a-button>
                            </a-dropdown>
                        </a-space>
                    </template>

                    <template slot="statusTitle">
                        状态<a-icon style="margin: 0 4px" type="info-circle" />
                    </template>
                    <template slot="status" slot-scope="{text}">
                        {{text | statusStr}}
                    </template>
                </advance-table>
            </div>
        </a-col>
    </a-row>
</template>

<script>
    import AdvanceTable from '@/components/table/advance/AdvanceTable'
    import {dataSource as ds} from '@/services'
    import FilmSearcher from '../../ensoft/search/ReportMonthSearch';

    export default {
        name: 'Table',
        components: {FilmSearcher, AdvanceTable},
        filters: {
            statusStr(val) {
                switch (val) {
                    case 1: return '已下单'
                    case 2: return '已付款'
                    case 3: return '已审核'
                    case 4: return '已发货'
                }
            }
        },
        data() {
            return {
                advanced: false,
                loading: false,
                page: 1,
                pageSize: 10,
                total: 0,
                columns: [
                    {
                        title: '序',
                        dataIndex: 'id'
                    },
                    {
                        searchAble: true,
                        dataIndex: 'logo',
                        dataType: 'select',
                        slots: {title: 'statusTitle'},
                        scopedSlots: {customRender: 'status'},
                        search: {
                            selectOptions: [
                                {title: '已下单', value: 1},
                                {title: '已付款', value: 2},
                                {title: '已审核', value: 3},
                                //{title: '已发货', value: 4}
                            ]
                        }
                    },
                    {
                        title: '详情',
                        dataIndex: 'name',
                        searchAble: true
                    },
                    {
                        title: '保存时间',
                        dataIndex: 'auditTime',
                        dataType: 'time',
                    }
                ],
                dataSource: [],
                conditions: {},
                selectedRows: [],
            }
        },
        created() {
            this.getFilmList()
            this.getFilmColumns()
        },
        methods: {
            dblclick(){
                this.$message.info('dblclick')
                this.$router.push("/report/month")
            },
            addNew(){console.log("addNew()")},
            delDoc(){console.log("delDoc()")},
            searcher(){
                this.advanced = !this.advanced
                //this.onReset()
            },
            handleMenuClick(){},
            getFilmList() {
                this.loading = true
                const {page, pageSize, conditions} = this
                ds.filmList({page, pageSize, ...conditions}).then(result => {
                    const {list, page, pageSize, total} = result.data.data
                    this.dataSource = list
                    this.page = page
                    this.total = total
                    this.pageSize = pageSize
                    this.loading = false
                })
            },
            getFilmColumns() {
                ds.filmColumns().then(res => {
                    console.log(res.data)
                    this.columns = res.data
                })
            },
            onSearch(conditions, searchOptions) {
                console.log(searchOptions)
                this.page = 1
                this.conditions = conditions
                this.getFilmList()
            },
            onSizeChange(current, size) {
                this.page = 1
                this.pageSize = size
                this.getFilmList()
            },
            onRefresh(conditions) {
                this.conditions = conditions
                this.getFilmList()
            },
            onReset(conditions) {
                this.conditions = conditions
                this.getFilmList()
            },
            onPageChange(page, pageSize) {
                this.page = page
                this.pageSize = pageSize
                this.getFilmList()
            },
            onSelectChange() {
                this.$message.info('选中行改变了')
            },
            onClear() {
                this.$message.info('您清空了勾选的所有行')
            },
        }
    }
</script>

<style scoped lang="less">
    .table{
        background-color: @base-bg-color;
        padding: 24px;
    }
    .title > button > span{
        margin-left: 0px !important;
    }
    .ant-form-item{
        margin-bottom: 6px !important;
    }

</style>

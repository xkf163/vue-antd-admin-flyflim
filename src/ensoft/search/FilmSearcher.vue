<template>
    <a-form layout="horizontal">
        <div>
            <a-row >
                <a-col :md="6" :sm="24" >
                    <a-form-item
                            label="规则编号"
                            :labelCol="{span: 5}"
                            :wrapperCol="{span: 18, offset: 1}"
                    >
                        <a-input placeholder="请输入" />
                    </a-form-item>
                </a-col>
                <a-col :md="6" :sm="24" >
                    <a-form-item
                            label="使用状态"
                            :labelCol="{span: 5}"
                            :wrapperCol="{span: 18, offset: 1}"
                    >
                        <a-select placeholder="请选择">
                            <a-select-option value="1">关闭</a-select-option>
                            <a-select-option value="2">运行中</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :md="6" :sm="24" >
                    <a-form-item
                            label="调用次数"
                            :labelCol="{span: 5}"
                            :wrapperCol="{span: 18, offset: 1}"
                    >
                        <a-input-number style="width: 100%" placeholder="请输入" />
                    </a-form-item>
                </a-col>
                <a-col :md="6" :sm="24" >
                    <a-form-item
                            label="更新日期"
                            :labelCol="{span: 5}"
                            :wrapperCol="{span: 18, offset: 1}"
                    >
                        <a-date-picker style="width: 100%" placeholder="请输入更新日期" />
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row>
                <a-col :md="6" :sm="24" >
                    <a-form-item
                            label="使用状态"
                            :labelCol="{span: 5}"
                            :wrapperCol="{span: 18, offset: 1}"
                    >
                        <a-select placeholder="请选择">
                            <a-select-option value="1">关闭</a-select-option>
                            <a-select-option value="2">运行中</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :md="6" :sm="24" >
                    <a-form-item
                            label="描述"
                            :labelCol="{span: 5}"
                            :wrapperCol="{span: 18, offset: 1}"
                    >
                        <a-input placeholder="请输入" />
                    </a-form-item>
                </a-col>
                <a-col :md="6" :sm="24" >
                        <span style="float: right; ">
                            <a-button @click="onSearch" type="primary"><a-icon type="search" style="margin-right: -6px;" />查询</a-button>
                            <a-button @click="onReset" style="margin-left: 8px"><a-icon type="undo" style="margin-right: -6px;" />重置</a-button>
                        </span>
                </a-col>
            </a-row>
        </div>

    </a-form>
</template>

<script>
    export default {
        name: "FilmSearcher",
        methods: {
            onSearch() {
                console.log("Searcher search")
                this.$emit('advSearch')
            },
            onReset(){
                console.log("Searcher reset")
                this.$emit('advReset')
            }
        }
    }
</script>

<style scoped>

</style>

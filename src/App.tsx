/****************************************************
 * Audit Information Platform FrontEnd Project
 * 展示部分
 * 2022-06
 * Sunny
 ****************************************************/

//----- Global ------
import * as React from 'react';
import { PureComponent } from 'react';

import { Select, Icon, Modal, Button } from 'tinper-bee';

import 'tinper-bee/assets/tinper-bee.css';
import 'bee-modal/build/Modal.css';

import { QueryModel } from 'aip-modelview';

import { modelService, compoentService, modelLRService, modelUDService, modelGraphiService } from './api/service';

import './style/App.css';
import { StringAnyMap } from 'aip-module/types';
import { Message } from 'aip-module';

const Option = Select.Option;

export interface IAppProps {
    icon?: string;
}

/**
 * 模板主类
 *
 * @class App
 *
 * @extends { PureComponent }
 *
 * @description A8前端模板主类
 */
class App extends PureComponent<IAppProps, any> {
    state = {
        modelService: modelService,
        layout: '全表',
        key: 'modelview',
    }

    onClick = () => {
        Modal.success({
            title: '提示',
            content: '确认要删除这条数据吗？',
            onOk: () => {
                console.log('OK');
            }
        });
    }

    /**
     * doSearch hook function
     * 
     * the method must be synchronous function, and must be return a boolean value.
     */

    doSearch = (params: StringAnyMap, ignoreGetTotalSize?: boolean): boolean => {
        console.log('will be search');
        console.log(params as any);
        return true;
    }

    // 隐藏toolbar，测试阶段可以调整此参数来控制是否显示toolbar
    hideToolbar: boolean = false;
    // 是否隐藏参照，如果隐藏，会触发自动(无条件)查询，测试阶段可以调整此参数来控制是否显示参照部分
    hideSearchbar: boolean = false;
    queryModelRef: QueryModel | null = null;

    componentDidMount() {
        let stopLoading = (window as any).stopLoading;
        stopLoading && stopLoading();
        // 根据设置的参数来确定自动检索是否生效
        if (this.hideSearchbar) {
            setTimeout(() => {
                if (this.queryModelRef !== null) {
                    this.queryModelRef.doSearchWithNone();
                }
            }, 1000);
        }
    }

    layoutChange = (value: string) => {
        if (this.state.layout === value || value === '') {
            return;
        }
        let service = modelService;
        if (value === '上图下表') {
            service = modelUDService;
        } else if (value === '左图右表') {
            service = modelLRService;
        } else if (value === '全图') {
            service = modelGraphiService;
        }
        this.setState({
            modelService: service,
            layout: value,
            key: 'modelview' + Math.random()
        }, () => {
            // immediate flush
        });
    }

    genToolbar(): React.ReactNode[] {
        return [
            <Button colors="info" onClick={()=>{
                Message.showMessage('新增操作');
            }}>新增</Button>,
            <Button onClick={()=>{
                Message.showMessage('获取选择记录');
                let ref = this.queryModelRef;
                if (ref) {
                    alert(JSON.stringify(ref.getSelectedList()));
                }
            }}>获取选择记录</Button>,
            <Button colors="danger" onClick={()=>{
                Message.showMessage('测试，并不会做删除操作');
            }}>删除</Button>
        ];
    }

    render() {
        return (
            <div className='container'>
                <div className='main-toolbar'>
                    <div className='toolbar-left'>选择布局</div>
                    <div>
                        <Select
                            placeholder="请选择"
                            defaultValue="全表"
                            style={{ width: 200, marginRight: 6 }}
                            onChange={this.layoutChange}
                            showSearch={true}
                            allowClear={true}
                        >
                            <Option value="全表">全表</Option>
                            <Option value="上图下表">上图下表</Option>
                            <Option value="左图右表">左图右表</Option>
                            <Option value="全图">全图</Option>
                        </Select>
                    </div>
                </div>
                <div className='main-div'>
                    {this.hideSearchbar ? (<QueryModel
                        id='qm'
                        hideToolbar={this.hideToolbar}
                        key={this.state.key}
                        refid='querymodelref'
                        modelId='querymodel'
                        ref={(r) => this.queryModelRef = r}
                        modelService={this.state.modelService}
                        descriptionTitle='说明'
                        doSearch={this.doSearch}
                    ></QueryModel>) : (
                        <QueryModel
                            id='qm'
                            hideToolbar={this.hideToolbar}
                            toolbar={this.genToolbar()}
                            key={this.state.key}
                            ref={(r) => this.queryModelRef = r}
                            refid='querymodelref'
                            modelId='querymodel'
                            modelService={this.state.modelService}
                            componentService={compoentService}
                            descriptionTitle='说明'
                            doSearch={this.doSearch}
                        ></QueryModel>
                    )}
                </div>
            </div>
        );
    }
}

export default App;

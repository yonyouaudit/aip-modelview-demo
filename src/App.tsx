/****************************************************
 * Audit Information Platform FrontEnd Project
 * 展示部分
 * 2020-08
 * Sunny <tufpsj@yonyou.com>
 ****************************************************/

//----- Global ------
import * as React from 'react';
import { PureComponent } from 'react';

import { Button, Icon, Modal } from 'tinper-bee';

import 'tinper-bee/assets/tinper-bee.css';
import 'bee-modal/build/Modal.css';

import QueryModel from 'aip-modelview';

import './style/App.css';
// import QueryModel from './querymodel/QueryModel';
import modelService, { compoentService } from './api/service';

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

    componentDidMount() {
        let stopLoading = (window as any).stopLoading;
        stopLoading && stopLoading();
    }

    render() {
        return (
            <div className='main-div'>
                <QueryModel
                    id='qm'
                    key='qm'
                    refid='querymodelref'
                    modelId='querymodel'
                    modelService={modelService}
                    componentService={compoentService}
                    descriptionTitle='说明'
                ></QueryModel>

                {/* <Button colors="primary" onClick={this.onClick}>
                    <Icon type={this.props.icon || "uf-add-c-o"} />
                    确定
                </Button> */}
            </div>
        );
    }
}

export default App;

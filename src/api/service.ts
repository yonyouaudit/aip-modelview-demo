/****************************************************
 * Audit Information Platform Service
 * 数据请求服务
 * 2020-08
 * Sunny <tufpsj@yonyou.com>
 ****************************************************/

import { ModelDefinition, ModelService } from "aip-modelview/mvtypes";
import { AIPResponse, ComponentService, ModelRef, StringAnyMap } from "aip-module/types";
// 引入mock数据
import { demoResponseData, modelRefJson, modelResponse, referenceData, tableGraphi_GraphiData, tableGraphi_Griphi_Model, tableGraphi_LR_Model, tableGraphi_Model, tableGraphi_TableData } from "./testdata";

const compoentService: ComponentService = {
    loadRefrence: function (refId: string): Promise<AIPResponse<ModelRef>> {
        console.log(`load reference id: ${refId}`);
        return new Promise((resolve, reject) => {
            resolve(
                (modelRefJson as any) as AIPResponse<ModelRef>
            );
        });
    },

    loadRefrenceData: function (refId: string, index: number, params?: StringAnyMap): Promise<AIPResponse<any>> {
        console.log(`refid: ${refId}, index: ${index}`);
        console.log(params);
        return new Promise((resolve, reject) => {
            if (index >= 0 && index < referenceData.length) {
                resolve(
                    referenceData[index] as AIPResponse<any>
                );
            } else {
                reject('data not found');
            }
        });
    }
}

const modelService: ModelService = {
    modelInfo: function (modelId: string): Promise<AIPResponse<ModelDefinition>> {
        return new Promise((resolve, reject) => {
            resolve((modelResponse as any) as AIPResponse<ModelDefinition>); // 单一表格测试模型数据
        });
    },

    queryModelDataCount: function (modelId: string, params?: StringAnyMap | undefined): Promise<any> {
        throw new Error("Function not implemented.");
    },

    queryModelData: function (modelId: string, params?: StringAnyMap | undefined): Promise<AIPResponse<any>> {
        console.log(JSON.stringify(params));
        return new Promise((resolve, reject) => {
            resolve(demoResponseData); // 单一表格测试数据
        });
    },

    queryGraphicData: function (modelId: string, params?: StringAnyMap | undefined): Promise<AIPResponse<any>> {
        return new Promise((resolve, reject) => {
            resolve(tableGraphi_GraphiData as AIPResponse);
        });
    },

    getAllMapArea: function (): Promise<AIPResponse<any>> {
        throw new Error("Function not implemented.");
    },

    getMapInfo: function (treeValue: any): Promise<AIPResponse<any>> {
        throw new Error("Function not implemented.");
    },

    getStateContent: function (searchParams: StringAnyMap, deleteAfterGet: boolean): Promise<AIPResponse<any>> {
        throw new Error("Function not implemented.");
    }
};

// 上图下表模型测试数据
const modelUDService: ModelService = {
    modelInfo: function (modelId: string): Promise<AIPResponse<ModelDefinition>> {
        return new Promise((resolve, reject) => {
            resolve((tableGraphi_Model as any) as AIPResponse<ModelDefinition>); // 上图下表模型测试数据
        });
    },

    queryModelDataCount: function (modelId: string, params?: StringAnyMap | undefined): Promise<any> {
        throw new Error("Function not implemented.");
    },

    queryModelData: function (modelId: string, params?: StringAnyMap | undefined): Promise<AIPResponse<any>> {
        return new Promise((resolve, reject) => {
            resolve(tableGraphi_TableData as AIPResponse); // 图表测试数据
        });
    },

    queryGraphicData: function (modelId: string, params?: StringAnyMap | undefined): Promise<AIPResponse<any>> {
        return new Promise((resolve, reject) => {
            resolve(tableGraphi_GraphiData as AIPResponse);
        });
    },

    getAllMapArea: function (): Promise<AIPResponse<any>> {
        throw new Error("Function not implemented.");
    },

    getMapInfo: function (treeValue: any): Promise<AIPResponse<any>> {
        throw new Error("Function not implemented.");
    },

    getStateContent: function (searchParams: StringAnyMap, deleteAfterGet: boolean): Promise<AIPResponse<any>> {
        throw new Error("Function not implemented.");
    }
};

// 左图右表模型测试数据
const modelLRService: ModelService = {
    modelInfo: function (modelId: string): Promise<AIPResponse<ModelDefinition>> {
        return new Promise((resolve, reject) => {
            resolve((tableGraphi_LR_Model as any) as AIPResponse<ModelDefinition>); // 左图右表模型测试数据
        });
    },

    queryModelDataCount: function (modelId: string, params?: StringAnyMap | undefined): Promise<any> {
        throw new Error("Function not implemented.");
    },

    queryModelData: function (modelId: string, params?: StringAnyMap | undefined): Promise<AIPResponse<any>> {
        return new Promise((resolve, reject) => {
            resolve(tableGraphi_TableData as AIPResponse); // 图表测试数据
        });
    },

    queryGraphicData: function (modelId: string, params?: StringAnyMap | undefined): Promise<AIPResponse<any>> {
        return new Promise((resolve, reject) => {
            resolve(tableGraphi_GraphiData as AIPResponse);
        });
    },

    getAllMapArea: function (): Promise<AIPResponse<any>> {
        throw new Error("Function not implemented.");
    },

    getMapInfo: function (treeValue: any): Promise<AIPResponse<any>> {
        throw new Error("Function not implemented.");
    },

    getStateContent: function (searchParams: StringAnyMap, deleteAfterGet: boolean): Promise<AIPResponse<any>> {
        throw new Error("Function not implemented.");
    }
};

// 全图模型测试数据
const modelGraphiService: ModelService = {
    modelInfo: function (modelId: string): Promise<AIPResponse<ModelDefinition>> {
        return new Promise((resolve, reject) => {
            resolve((tableGraphi_Griphi_Model as any) as AIPResponse<ModelDefinition>); // 左图右表模型测试数据
        });
    },

    queryModelDataCount: function (modelId: string, params?: StringAnyMap | undefined): Promise<any> {
        throw new Error("Function not implemented.");
    },

    queryModelData: function (modelId: string, params?: StringAnyMap | undefined): Promise<AIPResponse<any>> {
        return new Promise((resolve, reject) => {
            resolve(tableGraphi_TableData as AIPResponse); // 图表测试数据
        });
    },

    queryGraphicData: function (modelId: string, params?: StringAnyMap | undefined): Promise<AIPResponse<any>> {
        return new Promise((resolve, reject) => {
            resolve(tableGraphi_GraphiData as AIPResponse);
        });
    },

    getAllMapArea: function (): Promise<AIPResponse<any>> {
        throw new Error("Function not implemented.");
    },

    getMapInfo: function (treeValue: any): Promise<AIPResponse<any>> {
        throw new Error("Function not implemented.");
    },

    getStateContent: function (searchParams: StringAnyMap, deleteAfterGet: boolean): Promise<AIPResponse<any>> {
        throw new Error("Function not implemented.");
    }
};

export { compoentService, modelService, modelUDService, modelLRService, modelGraphiService };

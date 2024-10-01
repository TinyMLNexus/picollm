import { PvWebGPUShaderLoad } from "../pv_types";
export declare const attentionShaders: PvWebGPUShaderLoad;
export declare const getPicollmAttentionWebGpuFunctions: (memory: WebAssembly.Memory) => {
    pv_picollm_attention_precompute_encoding_webgpu_wasm: (objAddress: number, encodingAddress: number, encodingOffset: number, dimension: number, steps: number, theta: number, statusAddress: number) => void;
    pv_picollm_attention_encode_webgpu_wasm: (objAddress: number, isRopeInterleaved: boolean, xAddress: number, xOffset: number, n: number, numHeads: number, headDimension: number, ropeDimension: number, position: number, encodingAddress: number, encodingOffset: number, statusAddress: number) => void;
    pv_picollm_attention_dot_product_webgpu_wasm: (objAddress: number, queryAddress: number, queryOffset: number, keysAddress: number, keysOffset: number, keyInterceptsAddress: number, keyInterceptsOffset: number, keySlopesAddress: number, keySlopesOffset: number, n: number, tq: number, headDimension: number, numHeads: number, numKvHeads: number, windowLength: number, start: number, norm: number, length1: number, length2: number, numKeys: number, scoresAddress: number, scoresOffset: number, statusAddress: number) => void;
    pv_picollm_attention_softmax_webgpu_wasm: (objAddress: number, scoresAddress: number, scoresOffset: number, numHeads: number, numKeys: number, statusAddress: number) => void;
    pv_picollm_attention_fir_webgpu_wasm: (objAddress: number, valuesAddress: number, valuesOffset: number, valueInterceptsAddress: number, valueInterceptsOffset: number, valueSlopesAddress: number, valueSlopesOffset: number, length1: number, length2: number, tq: number, headDimension: number, numHeads: number, numKvHeads: number, windowLength: number, start: number, scoresAddress: number, scoresOffset: number, outputAddress: number, outputOffset: number, statusAddress: number) => void;
    pv_picollm_attention_update_kv_webgpu_wasm: (objAddress: number, tfAddress: number, tfOffset: number, n: number, kvAddress: number, kvOffset: number, kvInterceptsAddress: number, kvInterceptsOffset: number, kvSlopesAddress: number, kvSlopesOffset: number, numKvHeads: number, windowLength: number, position: number, headDimension: number, statusAddress: number) => void;
    pv_picollm_attention_transpose_query_webgpu_wasm: (objAddress: number, tfAddress: number, tfOffset: number, hfAddress: number, hfOffset: number, n: number, numHeads: number, headDimension: number, statusAddress: number) => void;
};
//# sourceMappingURL=pv_picollm_attention.d.ts.map
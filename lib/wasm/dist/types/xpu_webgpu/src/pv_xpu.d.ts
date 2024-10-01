declare const initXpu: (memory: WebAssembly.Memory, _wasm?: Uint8Array) => {
    pv_picollm_weight_block_mixed_16x8_preprocess_blocks_webgpu_wasm: (objAddress: number, bitDepth: number, blocksAddress: number, blocksOffsetBytes: number, nbr: number, nbc: number, statusAddress: number) => void;
    pv_picollm_weight_block_mixed_16x8_forward_single_shuffle_x_webgpu_wasm: (objAddress: number, xAddress: number, xOffsetBytes: number, indicesAddress: number, indicesOffsetBytes: number, shape1: number, yAddress: number, statusAddress: number) => void;
    pv_picollm_weight_block_mixed_16x8_forward_single_webgpu_wasm: (objAddress: number, bitDepth: number, xAddress: number, xOffsetBytes: number, metasAddress: number, metasOffsetBytes: number, blocksAddress: number, blocksOffsetBytes: number, nbr: number, totalNbc: number, bitDepthNbc: number, yAddress: number, yOffsetBytes: number, statusAddress: number) => void;
    pv_picollm_weight_block_mixed_16x8_forward_single_reduce_y_webgpu_wasm: (objAddress: number, nbr: number, nbc: number, xAddress: number, yAddress: number, statusAddress: number) => void;
    pv_picollm_weight_block_mixed_16x8_forward_multiple_shuffle_x_webgpu_wasm: (objAddress: number, xAddress: number, xOffsetBytes: number, indicesAddress: number, indicesOffsetBytes: number, n: number, shape1: number, yAddress: number, statusAddress: number) => void;
    pv_picollm_weight_block_mixed_16x8_forward_multiple_webgpu_wasm: (objAddress: number, bitDepth: number, xAddress: number, xOffsetBytes: number, metasAddress: number, metasOffsetBytes: number, blocksAddress: number, blocksOffsetBytes: number, nbc: number, nbr: number, n: number, yAddress: number, yOffsetBytes: number, statusAddress: number) => void;
    pv_picollm_weight_block_mixed_16x8_forward_multiple_shuffle_y_webgpu_wasm: (objAddress: number, n: number, shape0: number, xAddress: number, yAddress: number, statusAddress: number) => void;
    pv_picollm_weight_block_mixed_16x8_add_bias_webgpu_wasm: (objAddress: number, n: number, dimension: number, biasAddress: number, yAddress: number, statusAddress: number) => void;
    pv_picollm_weight_float_forward_webgpu_wasm: (objAddress: number, n: number, nc: number, nr: number, wOffset: number, wAddress: number, xOffset: number, xAddress: number, yOffset: number, yAddress: number, statusAddress: number) => void;
    pv_picollm_transformer_add_to_buffer_webgpu_wasm: (objAddress: number, n: number, xAddress: number, xOffset: number, bufferAddress: number, bufferOffset: number, statusAddress: number) => void;
    pv_picollm_transformer_add_buffers_webgpu_wasm: (objAddress: number, n: number, buffer1Address: number, buffer1Offset: number, buffer2Address: number, buffer2Offset: number, yAddress: number, yOffset: number, statusAddress: number) => void;
    pv_picollm_norm_forward_webgpu_wasm: (objAddress: number, dimension: number, eps: number, weightAddress: number, n: number, xOffset: number, xAddress: number, yOffset: number, yAddress: number, statusAddress: number) => void;
    pv_picollm_norm_layer_forward_webgpu_wasm: (objAddress: number, dimension: number, eps: number, weightAddress: number, weightOffset: number, biasAddress: number, biasOffset: number, n: number, xAddress: number, xOffset: number, yAddress: number, yOffset: number, statusAddress: number) => void;
    pv_picollm_moe_transformer_add_to_buffer_webgpu_wasm: (objAddress: number, n: number, xAddress: number, xOffset: number, bufferAddress: number, bufferOffset: number, statusAddress: number) => void;
    pv_picollm_moe_transformer_add_buffers_webgpu_wasm: (objAddress: number, n: number, buffer1Address: number, buffer1Offset: number, buffer2Address: number, buffer2Offset: number, yAddress: number, yOffset: number, statusAddress: number) => void;
    pv_picollm_moe_transformer_multiply_weight_and_add_to_buffer_webgpu_wasm: (objAddress: number, n: number, weightsIndex: number, yIndex: number, weightsAddress: number, weightsOffset: number, xAddress: number, xOffset: number, yAddress: number, yOffset: number, statusAddress: number) => void;
    pv_picollm_feed_forward_silu_webgpu_wasm: (objAddress: number, n: number, xAddress: number, statusAddress: number) => void;
    pv_picollm_feed_forward_gelu_webgpu_wasm: (objAddress: number, n: number, xAddress: number, statusAddress: number) => void;
    pv_picollm_feed_forward_almost_gelu_webgpu_wasm: (objAddress: number, n: number, xAddress: number, statusAddress: number) => void;
    pv_picollm_feed_forward_multiply_buffers_webgpu_wasm: (objAddress: number, n: number, xAddress: number, yAddress: number, statusAddress: number) => void;
    pv_picollm_gate_forward_webgpu_wasm: (objAddress: number, n: number, k: number, numExperts: number, yAddress: number, yOffset: number, indicesAddress: number, indicesOffset: number, weightsAddress: number, weightsOffset: number, statusAddress: number) => void;
    pv_picollm_attention_precompute_encoding_webgpu_wasm: (objAddress: number, encodingAddress: number, encodingOffset: number, dimension: number, steps: number, theta: number, statusAddress: number) => void;
    pv_picollm_attention_encode_webgpu_wasm: (objAddress: number, isRopeInterleaved: boolean, xAddress: number, xOffset: number, n: number, numHeads: number, headDimension: number, ropeDimension: number, position: number, encodingAddress: number, encodingOffset: number, statusAddress: number) => void;
    pv_picollm_attention_dot_product_webgpu_wasm: (objAddress: number, queryAddress: number, queryOffset: number, keysAddress: number, keysOffset: number, keyInterceptsAddress: number, keyInterceptsOffset: number, keySlopesAddress: number, keySlopesOffset: number, n: number, tq: number, headDimension: number, numHeads: number, numKvHeads: number, windowLength: number, start: number, norm: number, length1: number, length2: number, numKeys: number, scoresAddress: number, scoresOffset: number, statusAddress: number) => void;
    pv_picollm_attention_softmax_webgpu_wasm: (objAddress: number, scoresAddress: number, scoresOffset: number, numHeads: number, numKeys: number, statusAddress: number) => void;
    pv_picollm_attention_fir_webgpu_wasm: (objAddress: number, valuesAddress: number, valuesOffset: number, valueInterceptsAddress: number, valueInterceptsOffset: number, valueSlopesAddress: number, valueSlopesOffset: number, length1: number, length2: number, tq: number, headDimension: number, numHeads: number, numKvHeads: number, windowLength: number, start: number, scoresAddress: number, scoresOffset: number, outputAddress: number, outputOffset: number, statusAddress: number) => void;
    pv_picollm_attention_update_kv_webgpu_wasm: (objAddress: number, tfAddress: number, tfOffset: number, n: number, kvAddress: number, kvOffset: number, kvInterceptsAddress: number, kvInterceptsOffset: number, kvSlopesAddress: number, kvSlopesOffset: number, numKvHeads: number, windowLength: number, position: number, headDimension: number, statusAddress: number) => void;
    pv_picollm_attention_transpose_query_webgpu_wasm: (objAddress: number, tfAddress: number, tfOffset: number, hfAddress: number, hfOffset: number, n: number, numHeads: number, headDimension: number, statusAddress: number) => void;
    aligned_alloc: (alignment: number, size: number) => Promise<number>;
    pv_xpu_webgpu_device_init_wasm: (objAddress: number, statusAddress: number) => Promise<void>;
    pv_xpu_webgpu_device_info_wasm: (objAddress: number, browserNameAddressAddress: number, browserVersionAddressAddress: number, osNameAddressAddress: number, deviceArchitectureAddressAddress: number, deviceVendorAddressAddress: number, maxBufferSizeAddress: number, maxComputeWorkgroupStorageSizeAddress: number, maxComputeInvocationsPerWorkgroupAddress: number, statusAddress: number) => Promise<void>;
    pv_xpu_webgpu_device_cleanup_wasm: (objAddress: number) => void;
    pv_xpu_webgpu_device_load_shader_func_wasm: (objAddress: number, shaderNameAddress: number, statusAddress: number) => void;
    pv_xpu_webgpu_device_wait_wasm: (objAddress: number, statusAddress: number) => Promise<void>;
    pv_xpu_webgpu_device_mem_alloc_wasm: (objAddress: number, memAddress: number, sizeBytes: number, isOutput: boolean, statusAddress: number) => void;
    pv_xpu_webgpu_device_mem_free_wasm: (memAddress: number) => void;
    pv_xpu_webgpu_device_mem_copy_to_xpu_wasm: (memAddress: number, hostAddress: number, offset: number, sizeBytes: number) => void;
    pv_xpu_webgpu_device_mem_copy_from_xpu_wasm: (memAddress: number, hostAddress: number, offset: number, sizeBytes: number) => Promise<void>;
    pv_xpu_webgpu_device_mem_memset_wasm: (memAddress: number, fillByte: number, sizeBytes: number) => void;
    pv_xpu_webgpu_timer_start_wasm: (objAddress: number) => void;
    pv_xpu_webgpu_timer_stop_wasm: (objAddress: number) => Promise<void>;
};
export { initXpu };
//# sourceMappingURL=pv_xpu.d.ts.map
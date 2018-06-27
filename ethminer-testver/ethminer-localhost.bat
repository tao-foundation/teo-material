@echo off

rem cd ethminer-0.14d1

setx GPU_FORCE_64BIT_PTR 0
setx GPU_MAX_HEAP_SIZE 100
setx GPU_USE_SYNC_OBJECTS 1
setx GPU_MAX_ALLOC_PERCENT 100
setx GPU_SINGLE_ALLOC_PERCENT 100
 
ethminer -U -F 127.0.0.1:8546 --cuda-devices 1


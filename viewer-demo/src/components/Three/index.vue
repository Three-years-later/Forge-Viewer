<template>
  <div class="threeModel">
    <!-- Modal Create Bucket 模态创建桶-->
    <div class="modal fade" id="createBucketModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Cancel">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">Create new bucket</h4>
          </div>
          <div class="modal-body">
            <input type="text" id="newBucketKey" class="form-control">
            For demonstration purposes, objects (files) are NOT automatically translated. After you upload, right click on the object and select "Translate". Bucket keys must be of the form [-_.a-z0-9]{3,128}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" id="createNewBucket">Go ahead, create the bucket</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.threeModel {
  // background: #eee;
  border: 1px solid #0091ff;
  width: 300px;
  height: 800px;
}
</style>

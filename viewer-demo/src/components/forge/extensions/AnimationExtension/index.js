export default function (AutodeskViewing) {
  return class myAnimationExtension extends AutodeskViewing.theExtensionManager.registerExtension {
    viewer;
    options;
    subToolbar;
    constructor (viewer, options) {
      super(viewer, options)
      this.viewer = viewer
      this.options = options
    }

    load = function () {
      if (this.viewer.toolbar) {
        // 工具栏已经可用，创建UI
        this.createUI()
      } else {
        // 尚未创建工具栏，请等到收到有关创建它的通知
        this.onToolbarCreatedBinded = this.onToolbarCreated.bind(this)
        this.viewer.addEventListener(AutodeskViewing.TOOLBAR_CREATED_EVENT, this.onToolbarCreatedBinded)
      }
      return true
    }

    unload = function () {
      this.viewer.toolbar.removeControl(this.subToolbar)
      return true
    }

    onTestToolbarCreated = function () {
      this.viewer.removeEventListener(AutodeskViewing.TOOLBAR_CREATED_EVENT, this.onToolbarCreatedBinded)
      this.onToolbarCreatedBinded = null
      this.createUI()
    }

    createUI = async function () {
      const viewer = this.viewer
      const vC = await viewer.loadExtension('Autodesk.ViewCubeUi')

      // Button 1
      const button1 = new AutodeskViewing.UI.Button('my-view-front-button')
      button1.onClick = function () {
        vC.setViewCube('front')
      }
      button1.addClass('my-view-front-button')
      button1.setToolTip('View front')
      button1.setIcon('adsk-icon-first')

      // Button 2
      const button2 = new AutodeskViewing.UI.Button('my-view-back-button')
      button2.onClick = function () {
        vC.setViewCube('back')
      }
      button2.addClass('my-view-back-button')
      button2.setToolTip('View Back')
      button2.setIcon('adsk-icon-second')

      // SubToolbar
      this.subToolbar = new AutodeskViewing.UI.ControlGroup('my-custom-view-toolbar')
      this.subToolbar.addControl(button1)
      this.subToolbar.addControl(button2)

      viewer.toolbar.addControl(this.subToolbar)
    }
  }
}

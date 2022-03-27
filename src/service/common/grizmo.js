import * as BABYLON from "@babylonjs/core";

const Gizmo = (engine, scene) => ({
  init(scene) {
    const gizmo = new BABYLON.GizmoManager(scene);
    gizmo.boundingBoxGizmoEnabled = false;
    gizmo.attachableMeshes = [];
    gizmo.positionGizmoEnabled = true;
    gizmo.rotationGizmoEnabled = true;
    gizmo.scaleGizmoEnabled = true;
    gizmo.usePointerToAttachGizmos = false;
    gizmo.clearGizmoOnEmptyPointerEvent = true;
    gizmo.gizmos.positionGizmo.updateGizmoPositionToMatchAttachedMesh = false;
    gizmo.gizmos.positionGizmo.updateGizmoRotationToMatchAttachedMesh = false;
    gizmo.gizmos.rotationGizmo.updateGizmoPositionToMatchAttachedMesh = false;
    gizmo.gizmos.rotationGizmo.updateGizmoPositionToMatchAttachedMesh = false;
    gizmo.gizmos.scaleGizmo.updateGizmoPositionToMatchAttachedMesh = false;
    gizmo.gizmos.scaleGizmo.updateGizmoPositionToMatchAttachedMesh = false;
    gizmo.gizmos.scaleGizmo.sensitivity = 150;
    gizmo.gizmos.scaleGizmo.scaleRatio = 1;
    gizmo.gizmos.positionGizmo.xGizmo.dragBehavior.onDragEndObservable.add(
      () => {}
    );
    gizmo.gizmos.positionGizmo.yGizmo.dragBehavior.onDragEndObservable.add(
      () => {}
    );
    gizmo.gizmos.positionGizmo.zGizmo.dragBehavior.onDragEndObservable.add(
      () => {}
    );
    gizmo.gizmos.rotationGizmo.xGizmo.dragBehavior.onDragEndObservable.add(
      () => {}
    );
    gizmo.gizmos.rotationGizmo.yGizmo.dragBehavior.onDragEndObservable.add(
      () => {}
    );
    gizmo.gizmos.rotationGizmo.zGizmo.dragBehavior.onDragEndObservable.add(
      () => {}
    );
    gizmo.gizmos.scaleGizmo.xGizmo.dragBehavior.onDragEndObservable.add(
      () => {}
    );
    gizmo.gizmos.scaleGizmo.yGizmo.dragBehavior.onDragEndObservable.add(
      () => {}
    );
    gizmo.gizmos.scaleGizmo.zGizmo.dragBehavior.onDragEndObservable.add(
      () => {}
    );

    return gizmo;
  },

  activeMod(gizmo, mod) {
    switch (mod) {
      case 0:
        gizmo.positionGizmoEnabled = true;
        gizmo.rotationGizmoEnabled = false;
        gizmo.scaleGizmoEnabled = false;
        break;
      case 1:
        gizmo.positionGizmoEnabled = false;
        gizmo.rotationGizmoEnabled = true;
        gizmo.scaleGizmoEnabled = false;
        break;
      case 2:
        gizmo.positionGizmoEnabled = false;
        gizmo.rotationGizmoEnabled = false;
        gizmo.scaleGizmoEnabled = true;
        break;
      case -1:
        gizmo.positionGizmoEnabled = false;
        gizmo.rotationGizmoEnabled = false;
        gizmo.scaleGizmoEnabled = false;
        break;
    }
  },

  dispose(gizmo) {
    gizmos.dispose();
  },
});
export default Gizmo;

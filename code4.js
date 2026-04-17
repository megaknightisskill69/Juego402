gdjs.JaimeOVERCode = {};
gdjs.JaimeOVERCode.localVariables = [];
gdjs.JaimeOVERCode.idToCallbackMap = new Map();
gdjs.JaimeOVERCode.GDSmallBlueButtonObjects1= [];
gdjs.JaimeOVERCode.GDSmallBlueButtonObjects2= [];
gdjs.JaimeOVERCode.GDOctiObjects1= [];
gdjs.JaimeOVERCode.GDOctiObjects2= [];
gdjs.JaimeOVERCode.GDCoinObjects1= [];
gdjs.JaimeOVERCode.GDCoinObjects2= [];
gdjs.JaimeOVERCode.GDmonedasObjects1= [];
gdjs.JaimeOVERCode.GDmonedasObjects2= [];
gdjs.JaimeOVERCode.GDRed_9595PotionObjects1= [];
gdjs.JaimeOVERCode.GDRed_9595PotionObjects2= [];
gdjs.JaimeOVERCode.GDVIDAObjects1= [];
gdjs.JaimeOVERCode.GDVIDAObjects2= [];
gdjs.JaimeOVERCode.GDNewTiledSpriteObjects1= [];
gdjs.JaimeOVERCode.GDNewTiledSpriteObjects2= [];
gdjs.JaimeOVERCode.GDTrigger_9595abajoObjects1= [];
gdjs.JaimeOVERCode.GDTrigger_9595abajoObjects2= [];
gdjs.JaimeOVERCode.GDTrigger_9595arribaObjects1= [];
gdjs.JaimeOVERCode.GDTrigger_9595arribaObjects2= [];
gdjs.JaimeOVERCode.GDTrigger_9595derechaObjects1= [];
gdjs.JaimeOVERCode.GDTrigger_9595derechaObjects2= [];
gdjs.JaimeOVERCode.GDTrigger_9595izquierdaObjects1= [];
gdjs.JaimeOVERCode.GDTrigger_9595izquierdaObjects2= [];


gdjs.JaimeOVERCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallBlueButton"), gdjs.JaimeOVERCode.GDSmallBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JaimeOVERCode.GDSmallBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.JaimeOVERCode.GDSmallBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.JaimeOVERCode.GDSmallBlueButtonObjects1[k] = gdjs.JaimeOVERCode.GDSmallBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.JaimeOVERCode.GDSmallBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuJaime", false);
}
}

}


};

gdjs.JaimeOVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JaimeOVERCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.JaimeOVERCode.GDSmallBlueButtonObjects2.length = 0;
gdjs.JaimeOVERCode.GDOctiObjects1.length = 0;
gdjs.JaimeOVERCode.GDOctiObjects2.length = 0;
gdjs.JaimeOVERCode.GDCoinObjects1.length = 0;
gdjs.JaimeOVERCode.GDCoinObjects2.length = 0;
gdjs.JaimeOVERCode.GDmonedasObjects1.length = 0;
gdjs.JaimeOVERCode.GDmonedasObjects2.length = 0;
gdjs.JaimeOVERCode.GDRed_9595PotionObjects1.length = 0;
gdjs.JaimeOVERCode.GDRed_9595PotionObjects2.length = 0;
gdjs.JaimeOVERCode.GDVIDAObjects1.length = 0;
gdjs.JaimeOVERCode.GDVIDAObjects2.length = 0;
gdjs.JaimeOVERCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.JaimeOVERCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595abajoObjects1.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595abajoObjects2.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595arribaObjects1.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595arribaObjects2.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595derechaObjects1.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595derechaObjects2.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595izquierdaObjects1.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595izquierdaObjects2.length = 0;

gdjs.JaimeOVERCode.eventsList0(runtimeScene);
gdjs.JaimeOVERCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.JaimeOVERCode.GDSmallBlueButtonObjects2.length = 0;
gdjs.JaimeOVERCode.GDOctiObjects1.length = 0;
gdjs.JaimeOVERCode.GDOctiObjects2.length = 0;
gdjs.JaimeOVERCode.GDCoinObjects1.length = 0;
gdjs.JaimeOVERCode.GDCoinObjects2.length = 0;
gdjs.JaimeOVERCode.GDmonedasObjects1.length = 0;
gdjs.JaimeOVERCode.GDmonedasObjects2.length = 0;
gdjs.JaimeOVERCode.GDRed_9595PotionObjects1.length = 0;
gdjs.JaimeOVERCode.GDRed_9595PotionObjects2.length = 0;
gdjs.JaimeOVERCode.GDVIDAObjects1.length = 0;
gdjs.JaimeOVERCode.GDVIDAObjects2.length = 0;
gdjs.JaimeOVERCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.JaimeOVERCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595abajoObjects1.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595abajoObjects2.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595arribaObjects1.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595arribaObjects2.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595derechaObjects1.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595derechaObjects2.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595izquierdaObjects1.length = 0;
gdjs.JaimeOVERCode.GDTrigger_9595izquierdaObjects2.length = 0;


return;

}

gdjs['JaimeOVERCode'] = gdjs.JaimeOVERCode;

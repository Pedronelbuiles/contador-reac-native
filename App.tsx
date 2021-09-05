import React from 'react'
import { SafeAreaView } from 'react-native'
import { AlignItemsScreen } from './src/screens/AlignItemsScreen'
import { AlignSelfScreen } from './src/screens/AlignSelfScreen'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
import { CounterScreen } from './src/screens/CounterScreen'
import { DimensionesScreen } from './src/screens/DimensionesScreen'
import { FlexDirectionScreen } from './src/screens/FlexDirectionScreen'
import { FlexScreen } from './src/screens/FlexScreen'
import { FlexWrapScreen } from './src/screens/FlexWrapScreen'
import { HolaMundoScreen } from './src/screens/holaMundoScreen'
import { JustifyContentScreen } from './src/screens/JustifyContentScreen'
import { PositionScreen } from './src/screens/PositionScreen'
import { TareaScreen } from './src/screens/TareaScreen'

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#28425B'}}>
      {/* <HolaMundoScreen />
      <CounterScreen /> */}
      {/* <BoxObjectM{ñodelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      {/* <FlexDirectionScreen /> */}
      {/* <JustifyContentScreen /> */}
      {/* <AlignItemsScreen /> */}
      {/* <AlignSelfScreen /> */}
      {/* <FlexWrapScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  )
}